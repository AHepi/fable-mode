#!/usr/bin/env node
// Validate cross-course SERIES invariants across every shipped course, OUTSIDE
// Astro, so the verify stage fails fast before a build. A series is a set of
// mini-courses that declare the same `series.slug`; the rules are:
//   1. exactly one member has role 'essentials' (the shared-canon primer);
//   2. all members agree on `series.title`;
//   3. `series.order` values are unique within the series.
// Courses with no `series` block are ignored. Usage:
//   node shared/scripts/validate-series.mjs [--json]
// Exit code 0 = all series valid (or none present); 1 = one or more violations.
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseFrontmatter } from './lib/frontmatter.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const COURSES = join(ROOT, 'site', 'src', 'content', 'courses');

async function loadYaml() {
  try {
    const mod = await import(
      pathToFileURL(join(ROOT, 'site', 'node_modules', 'js-yaml', 'dist', 'js-yaml.mjs')).href
    );
    return mod?.default ?? null;
  } catch {
    return null;
  }
}

// Parse _course.md frontmatter, preferring js-yaml (handles the nested `series`
// object); fall back to the minimal parser, which cannot read nested maps.
function parseCourse(yamlLib, raw) {
  if (yamlLib) {
    const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    if (m) {
      try {
        return yamlLib.load(m[1]) || {};
      } catch {
        return {};
      }
    }
  }
  return parseFrontmatter(raw).data;
}

function collectSeries(yamlLib) {
  const bySeries = new Map(); // slug -> [{ course, role, order, title, blurb }]
  if (!existsSync(COURSES)) return bySeries;
  for (const entry of readdirSync(COURSES, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const coursePath = join(COURSES, entry.name, '_course.md');
    if (!existsSync(coursePath)) continue;
    const data = parseCourse(yamlLib, readFileSync(coursePath, 'utf8'));
    const s = data.series;
    if (!s || typeof s !== 'object' || !s.slug) continue;
    if (!bySeries.has(s.slug)) bySeries.set(s.slug, []);
    bySeries.get(s.slug).push({
      course: entry.name,
      role: s.role ?? 'course',
      order: s.order,
      title: s.title,
      blurb: s.blurb,
    });
  }
  return bySeries;
}

function validateSeries() {
  // Synchronous wrapper is awaited by the CLI below.
  return loadYaml().then((yamlLib) => {
    const errors = [];
    if (!yamlLib) errors.push('(warning) js-yaml not found in site/node_modules — run npm install in site/; series checks may be incomplete');
    const bySeries = collectSeries(yamlLib);

    for (const [slug, members] of bySeries) {
      // 1. exactly one essentials member
      const essentials = members.filter((m) => m.role === 'essentials');
      if (essentials.length === 0) {
        errors.push(`series "${slug}": no member has role 'essentials' (a series needs exactly one Essentials course)`);
      } else if (essentials.length > 1) {
        errors.push(`series "${slug}": ${essentials.length} members claim role 'essentials' (${essentials.map((m) => m.course).join(', ')}) — only one allowed`);
      }

      // 2. consistent title across members
      const titles = [...new Set(members.map((m) => m.title))];
      if (titles.length > 1) {
        errors.push(`series "${slug}": members disagree on series.title (${titles.map((t) => JSON.stringify(t)).join(' vs ')})`);
      }

      // 3. unique order values
      const orders = members.map((m) => m.order);
      const dupes = orders.filter((o, i) => orders.indexOf(o) !== i);
      if (dupes.length) {
        errors.push(`series "${slug}": duplicate series.order value(s) ${[...new Set(dupes)].join(', ')} (each member needs a distinct position)`);
      }
    }

    return { errors, bySeries };
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const asJson = process.argv.includes('--json');
  const { errors, bySeries } = await validateSeries();
  const hard = errors.filter((e) => !e.startsWith('(warning)'));

  if (asJson) {
    console.log(JSON.stringify({ series: Object.fromEntries(bySeries), errors }, null, 2));
    process.exit(hard.length === 0 ? 0 : 1);
  }

  for (const w of errors.filter((e) => e.startsWith('(warning)'))) console.error(w);
  if (hard.length === 0) {
    const n = bySeries.size;
    console.log(n === 0 ? '✓ No series declared (nothing to check).' : `✓ ${n} series valid.`);
    process.exit(0);
  }
  console.error(`✗ ${hard.length} series problem(s):`);
  for (const e of hard) console.error(`  - ${e}`);
  process.exit(1);
}

export { validateSeries };
