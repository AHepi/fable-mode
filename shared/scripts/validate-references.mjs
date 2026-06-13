#!/usr/bin/env node
// Catch broken internal file references in the ICM workspace's contract/reference
// files — the bug class where a CONTEXT.md or config doc points at a repo file
// that doesn't exist (e.g. several files referenced `_config/voice/math-style.md`
// while the file actually lives at `_config/math-style.md`).
// Usage: node shared/scripts/validate-references.mjs [--json]
// Exit code 0 = no missing references; 1 = one or more missing (printed).
import { readdirSync, existsSync, readFileSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

// Top-level repo directories that signal "this token is a repo-relative path"
// even when it doesn't carry a recognised file extension.
const KNOWN_TOP_DIRS = ['_config/', 'pipeline/', 'shared/', 'site/', 'setup/'];

// File extensions we treat as "points at a real repo file".
const KNOWN_EXTS = ['.md', '.mjs', '.ts', '.js', '.astro', '.json'];

// Directories we never descend into while collecting source files.
const SKIP_DIRS = new Set(['node_modules', '.git', 'runs', 'dist']);

// --- source-file collection -------------------------------------------------

// Small recursive walk (no glob libs). Returns absolute paths of files under
// `dir` matching `filterFn`, skipping the directories in SKIP_DIRS.
function walk(dir, filterFn, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc; // missing dir — nothing to collect
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(full, filterFn, acc);
    } else if (entry.isFile() && filterFn(full)) {
      acc.push(full);
    }
  }
  return acc;
}

// Gather every source file whose internal references we want to lint.
function collectSourceFiles() {
  const files = [];

  // CLAUDE.md and CONTEXT.md at the repo root.
  for (const name of ['CLAUDE.md', 'CONTEXT.md']) {
    const p = join(ROOT, name);
    if (existsSync(p)) files.push(p);
  }

  // every pipeline/**/CONTEXT.md
  files.push(...walk(join(ROOT, 'pipeline'), (p) => p.endsWith('CONTEXT.md')));

  // every _config/**/*.md
  files.push(...walk(join(ROOT, '_config'), (p) => p.endsWith('.md')));

  // every shared/templates/*.md (non-recursive, but a flat walk is fine)
  files.push(...walk(join(ROOT, 'shared', 'templates'), (p) => p.endsWith('.md')));

  // setup/*.md
  files.push(...walk(join(ROOT, 'setup'), (p) => p.endsWith('.md')));

  // De-dup and sort for stable output.
  return [...new Set(files)].sort();
}

// --- token extraction -------------------------------------------------------

// Strip surrounding backticks / parens / quotes and trailing punctuation from a
// raw token so we're left with just the path candidate.
function cleanToken(raw) {
  let t = raw;
  // Strip leading wrapping characters.
  t = t.replace(/^[`('"]+/, '');
  // Strip trailing wrapping characters and punctuation.
  t = t.replace(/[`)'".,;:]+$/, '');
  return t;
}

// Does this cleaned token look like a repo-relative path we should resolve?
function looksLikeRepoPath(token) {
  if (!token) return false;
  // Templated placeholders — skip.
  if (token.includes('<') || token.includes('>')) return false;
  // URLs / mail — skip.
  if (/^(https?:\/\/|mailto:)/.test(token)) return false;
  // Globs — skip.
  if (token.includes('*')) return false;

  const hasSlash = token.includes('/');
  const underKnownDir = KNOWN_TOP_DIRS.some((d) => token.startsWith(d));
  const hasKnownExt = KNOWN_EXTS.some((ext) => token.endsWith(ext));

  // A bare filename with no slash and not under a known dir (e.g. `package.json`
  // on its own) is too noisy — skip it.
  if (!hasSlash && !underKnownDir) return false;

  // Otherwise: count it if it carries a known extension OR sits under a known
  // top-level dir.
  return hasKnownExt || underKnownDir;
}

// Extract candidate repo-path tokens from a single line. Splits on whitespace
// and a few markdown delimiters, then cleans + filters each piece.
// NOTE: we deliberately do NOT split on `<` / `>` — keeping them attached lets
// the placeholder check in looksLikeRepoPath() skip templated paths such as
// `runs/<run-id>/...` or `courses/<slug>/_course.md` as a single token.
function extractTokens(line) {
  const tokens = [];
  // Split on whitespace and characters that commonly fence paths in prose /
  // markdown (parentheses, brackets, backticks, quotes, pipes, commas).
  for (const piece of line.split(/[\s`()\[\]"'|,]+/)) {
    if (!piece) continue;
    const cleaned = cleanToken(piece);
    if (looksLikeRepoPath(cleaned)) tokens.push(cleaned);
  }
  return tokens;
}

// --- core lint --------------------------------------------------------------

// True if `target` is an existing file or directory on disk.
function exists(target) {
  try {
    const s = statSync(target);
    return s.isFile() || s.isDirectory();
  } catch {
    return false;
  }
}

// A reference resolves if it points at an existing repo file/dir under any of
// the recognised bases. We try, in order:
//   1. the repo root (the normal repo-relative form),
//   2. the source file's own directory (docs name siblings like
//      `references/foo.md` or `voice/literary-maverick.md` relative to self),
//   3. the `pipeline/` directory — numbered-stage shorthands like
//      `03_authoring/CONTEXT.md` or `01_research/output/research.md` omit the
//      `pipeline/` prefix by convention; only `NN_*/…` tokens benefit here.
// It is "broken" only when it resolves under none of these.
function resolves(ref, sourceDir) {
  if (exists(join(ROOT, ref))) return true;
  if (exists(join(sourceDir, ref))) return true;
  if (/^\d+_/.test(ref) && exists(join(ROOT, 'pipeline', ref))) return true;
  return false;
}

// Scan one source file, returning an array of { source, line, ref } findings
// for references that don't resolve to an existing repo file.
function scanFile(absPath) {
  const findings = [];
  const rel = relative(ROOT, absPath);
  const text = readFileSync(absPath, 'utf8');
  const lines = text.split('\n');

  let inFence = false; // track ```-fenced code blocks line by line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Toggle fenced-code state on lines that open/close a ``` fence. Those
    // blocks are usually illustrative tree diagrams, not real references.
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    for (const ref of extractTokens(line)) {
      if (!resolves(ref, dirname(absPath))) {
        findings.push({ source: rel, line: i + 1, ref });
      }
    }
  }
  return findings;
}

// Lint every collected source file. Returns a flat array of findings.
function validateReferences() {
  const findings = [];
  for (const file of collectSourceFiles()) {
    findings.push(...scanFile(file));
  }
  return findings;
}

// --- CLI --------------------------------------------------------------------

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const asJson = process.argv.includes('--json');
  const findings = validateReferences();

  if (asJson) {
    console.log(JSON.stringify(findings, null, 2));
    process.exit(findings.length === 0 ? 0 : 1);
  }

  if (findings.length === 0) {
    console.log('✓ No broken internal references found.');
    process.exit(0);
  }

  console.error(`✗ ${findings.length} broken internal reference(s):`);
  for (const f of findings) {
    console.error(`  - ${f.source}:${f.line} -> ${f.ref}`);
  }
  process.exit(1);
}

export { validateReferences };
