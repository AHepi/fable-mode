#!/usr/bin/env node
// Validate a shipped course against the content schema and ICM invariants,
// OUTSIDE Astro, so the verify stage fails fast before a build is attempted.
// Field-level validation reuses the SINGLE source of truth in
// site/src/schema/course-schema.mjs (the same schema the Astro collection uses),
// so the two can never drift. Usage: node shared/scripts/validate-schema.mjs <slug>
// Exit code 0 = valid; 1 = one or more violations (printed).
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { readFrontmatter, parseFrontmatter } from './lib/frontmatter.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SITE = join(ROOT, 'site');

async function loadFromSite(rel) {
  try {
    return await import(pathToFileURL(join(SITE, 'node_modules', rel)).href);
  } catch {
    return null;
  }
}

async function loadKatex() {
  const mod = await loadFromSite('katex/dist/katex.mjs');
  return mod ? mod.default : null;
}

// Resolve zod from the site's deps and build the shared schema with it.
async function loadSchemas() {
  try {
    const require = createRequire(join(SITE, 'package.json'));
    const zodMod = await import(pathToFileURL(require.resolve('zod')).href);
    const z = zodMod.z ?? zodMod.default?.z ?? zodMod.default;
    const schemaMod = await import(
      pathToFileURL(join(SITE, 'src', 'schema', 'course-schema.mjs')).href
    );
    return { ...schemaMod.buildSchemas(z), MATH_KINDS: schemaMod.MATH_KINDS };
  } catch (e) {
    return null;
  }
}

// Parse frontmatter with js-yaml (the loader Astro uses) so nested structures
// like `sources` parse correctly; fall back to the lenient parser if absent.
function parseDoc(yamlLib, raw) {
  if (yamlLib) {
    const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (m) {
      try {
        return { data: yamlLib.load(m[1]) || {}, body: m[2], yamlError: null };
      } catch (e) {
        return { data: {}, body: m[2], yamlError: e.message.split('\n')[0] };
      }
    }
  }
  return { ...parseFrontmatter(raw), yamlError: null };
}

function zodErrors(result, file, errors) {
  if (result.success) return result.data;
  for (const issue of result.error.issues) {
    const where = issue.path.length ? issue.path.join('.') : '(root)';
    errors.push(`${file}: ${where} — ${issue.message}`);
  }
  return null;
}

function checkMath(katex, body, errors, file) {
  if (!katex) return;
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

// WCAG 1.1.1: every informative image needs a text alternative. Flag markdown
// images with empty alt text. (Decorative images should use an explicit
// role/empty alt in HTML; bare `![]()` in course content is treated as a miss.)
function checkAltText(body, errors, file) {
  // Strip fenced code so example syntax isn't flagged.
  const stripped = body.replace(/```[\s\S]*?```/g, '');
  for (const m of stripped.matchAll(/!\[(.*?)\]\(([^)]+)\)/g)) {
    if (m[1].trim() === '') {
      errors.push(`${file}: image \`${m[2]}\` has empty alt text (WCAG 1.1.1)`);
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
  const yamlLib = (await loadFromSite('js-yaml/dist/js-yaml.mjs'))?.default ?? null;
  const schemas = await loadSchemas();
  if (!schemas) errors.push('(warning) could not load zod/schema from site/node_modules — run npm install in site/; field validation skipped');

  // --- course ---
  const courseRaw = readFileSync(coursePath, 'utf8');
  const { data: course, body: courseBody, yamlError } = parseDoc(yamlLib, courseRaw);
  if (yamlError) errors.push(`_course.md: invalid YAML frontmatter — ${yamlError}`);
  if (schemas) zodErrors(schemas.courses.safeParse(course), '_course.md', errors);

  const kind = course.kind ?? 'stem';
  const mathOn = !schemas || schemas.MATH_KINDS.includes(kind);
  if (mathOn) checkMath(katex, courseBody, errors, '_course.md');
  checkAltText(courseBody, errors, '_course.md');

  const moduleOrder = Array.isArray(course.moduleOrder) ? course.moduleOrder : [];

  // --- modules ---
  const files = readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
  const ids = files.map((f) => f.replace(/\.md$/, ''));

  // invariant 1: bijection between moduleOrder and files
  for (const id of moduleOrder) if (!ids.includes(id)) errors.push(`moduleOrder lists "${id}" but courses/${slug}/${id}.md is missing`);
  for (const id of ids) if (!moduleOrder.includes(id)) errors.push(`courses/${slug}/${id}.md is not listed in moduleOrder`);

  for (const f of files) {
    const id = f.replace(/\.md$/, '');
    const raw = readFileSync(join(dir, f), 'utf8');
    const { data: m, body, yamlError: myErr } = parseDoc(yamlLib, raw);
    if (myErr) errors.push(`${f}: invalid YAML frontmatter — ${myErr}`);
    if (schemas) zodErrors(schemas.modules.safeParse(m), f, errors);

    // invariant 2: course field == folder
    if (m.course !== slug) errors.push(`${f}: course "${m.course}" != folder "${slug}"`);
    // invariant 3: order == index in moduleOrder, and filename prefix matches order
    const idx = moduleOrder.indexOf(id);
    if (idx >= 0 && Number(m.order) !== idx + 1) errors.push(`${f}: order ${m.order} != position ${idx + 1} in moduleOrder`);
    const prefix = f.match(/^(\d+)-/);
    if (prefix && Number(prefix[1]) !== Number(m.order)) errors.push(`${f}: filename prefix ${prefix[1]} != order ${m.order}`);

    if (mathOn) checkMath(katex, body, errors, f); // invariant 5 (math kinds only)
    checkAltText(body, errors, f);
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
  const hard = errors.filter((e) => !e.startsWith('(warning)'));
  for (const w of errors.filter((e) => e.startsWith('(warning)'))) console.error(w);
  if (hard.length === 0) {
    console.log(`✓ courses/${slug} is valid against the schema.`);
    process.exit(0);
  }
  console.error(`✗ courses/${slug}: ${hard.length} problem(s):`);
  for (const e of hard) console.error(`  - ${e}`);
  process.exit(1);
}

export { validate };
