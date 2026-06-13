#!/usr/bin/env node
// Validate a shipped course against the content schema and ICM invariants,
// OUTSIDE Astro, so the verify stage fails fast before a build is attempted.
// Usage: node shared/scripts/validate-schema.mjs <slug>
// Exit code 0 = valid; 1 = one or more violations (printed).
import { readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { readFrontmatter } from './lib/frontmatter.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const LEVELS = ['intro', 'highschool', 'undergrad', 'grad'];
const SCHEMA_VERSION = 1;

async function loadKatex() {
  // KaTeX lives in the site's node_modules; load it if present, else skip math checks.
  try {
    const url = pathToFileURL(join(ROOT, 'site', 'node_modules', 'katex', 'dist', 'katex.mjs'));
    return (await import(url.href)).default;
  } catch {
    return null;
  }
}

function checkMath(katex, body, errors, file) {
  if (!katex) return;
  // Display blocks first, then inline (after stripping display blocks).
  const display = [...body.matchAll(/\$\$([\s\S]+?)\$\$/g)].map((m) => [m[1], true]);
  const inline = [...body.replace(/\$\$[\s\S]+?\$\$/g, '').matchAll(/(?<!\\)\$([^\n$]+?)(?<!\\)\$/g)]
    .map((m) => [m[1], false]);
  for (const [expr, displayMode] of [...display, ...inline]) {
    try {
      katex.renderToString(expr, { throwOnError: true, displayMode });
    } catch (e) {
      errors.push(`${file}: invalid KaTeX \`${expr.trim().slice(0, 60)}\`: ${e.message.split('\n')[0]}`);
    }
  }
}

async function validate(slug) {
  const errors = [];
  const dir = join(ROOT, 'site', 'src', 'content', 'courses', slug);
  if (!existsSync(dir)) return [`course folder not found: ${dir}`];

  const coursePath = join(dir, '_course.md');
  if (!existsSync(coursePath)) return [`missing _course.md in ${dir}`];

  const katex = await loadKatex();
  const { data: course, body: courseBody } = readFrontmatter(coursePath);

  // --- _course.md field checks ---
  if (!course.title) errors.push('_course.md: missing title');
  if (!course.description) errors.push('_course.md: missing description');
  if (!LEVELS.includes(course.level)) errors.push(`_course.md: level must be one of ${LEVELS.join('|')} (got ${course.level})`);
  if (!(Number(course.estimatedHours) > 0)) errors.push('_course.md: estimatedHours must be a positive number');
  if (Number(course.schemaVersion) !== SCHEMA_VERSION) errors.push(`_course.md: schemaVersion must be ${SCHEMA_VERSION}`); // invariant 4
  if (!Array.isArray(course.moduleOrder) || course.moduleOrder.length < 1) errors.push('_course.md: moduleOrder must list >= 1 module');
  checkMath(katex, courseBody, errors, '_course.md');

  const moduleOrder = Array.isArray(course.moduleOrder) ? course.moduleOrder : [];

  // --- module files ---
  const files = readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
  const ids = files.map((f) => f.replace(/\.md$/, ''));

  // invariant 1: bijection between moduleOrder and files
  for (const id of moduleOrder) if (!ids.includes(id)) errors.push(`moduleOrder lists "${id}" but courses/${slug}/${id}.md is missing`);
  for (const id of ids) if (!moduleOrder.includes(id)) errors.push(`courses/${slug}/${id}.md is not listed in moduleOrder`);

  for (const f of files) {
    const id = f.replace(/\.md$/, '');
    const { data: m, body } = readFrontmatter(join(dir, f));
    if (!m.title) errors.push(`${f}: missing title`);
    if (!m.summary) errors.push(`${f}: missing summary`);
    if (!(Number(m.estimatedMinutes) > 0)) errors.push(`${f}: estimatedMinutes must be positive`);
    // invariant 2: course field == folder
    if (m.course !== slug) errors.push(`${f}: course "${m.course}" != folder "${slug}"`);
    // invariant 3: order == index in moduleOrder, and filename prefix matches order
    const idx = moduleOrder.indexOf(id);
    if (idx >= 0 && Number(m.order) !== idx + 1) errors.push(`${f}: order ${m.order} != position ${idx + 1} in moduleOrder`);
    const prefix = f.match(/^(\d+)-/);
    if (prefix && Number(prefix[1]) !== Number(m.order)) errors.push(`${f}: filename prefix ${prefix[1]} != order ${m.order}`);
    checkMath(katex, body, errors, f); // invariant 5
  }

  return errors;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const slug = process.argv[2];
  if (!slug) {
    console.error('usage: validate-schema.mjs <slug>');
    process.exit(1);
  }
  const errors = await validate(slug);
  if (errors.length === 0) {
    console.log(`✓ courses/${slug} is valid against the schema.`);
    process.exit(0);
  }
  console.error(`✗ courses/${slug}: ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

export { validate };
