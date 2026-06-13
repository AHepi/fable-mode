#!/usr/bin/env node
// Bring shipped courses up to the current SCHEMA_VERSION by applying the
// migrations registered in site/src/schema/course-schema.mjs (the single source
// of truth). With no migrations registered (the current state — all schema
// changes so far have been additive/optional), this just reports each course's
// version. Usage:
//   node shared/scripts/migrate-courses.mjs            # report only (dry run)
//   node shared/scripts/migrate-courses.mjs --apply    # rewrite _course.md files
import { readdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SITE = join(ROOT, 'site');
const COURSES = join(SITE, 'src', 'content', 'courses');

async function loadFromSite(rel) {
  try {
    return await import(pathToFileURL(join(SITE, 'node_modules', rel)).href);
  } catch {
    return null;
  }
}

async function main() {
  const apply = process.argv.includes('--apply');
  const schemaMod = await import(
    pathToFileURL(join(SITE, 'src', 'schema', 'course-schema.mjs')).href
  );
  const yaml = (await loadFromSite('js-yaml/dist/js-yaml.mjs'))?.default;
  if (!yaml) {
    console.error('js-yaml not found in site/node_modules — run npm install in site/');
    process.exit(1);
  }
  const { SCHEMA_VERSION, migrateCourseData } = schemaMod;

  if (!existsSync(COURSES)) {
    console.log('no courses directory yet.');
    return;
  }
  const slugs = readdirSync(COURSES, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let migrated = 0;
  for (const slug of slugs) {
    const path = join(COURSES, slug, '_course.md');
    if (!existsSync(path)) continue;
    const raw = readFileSync(path, 'utf8');
    const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!m) continue;
    const data = yaml.load(m[1]) || {};
    const from = Number(data.schemaVersion) || 1;
    if (from === SCHEMA_VERSION) {
      console.log(`  ${slug}: v${from} (current)`);
      continue;
    }
    const next = migrateCourseData(data);
    if (Number(next.schemaVersion) !== SCHEMA_VERSION) {
      console.log(`  ${slug}: v${from} -> no migration registered to reach v${SCHEMA_VERSION} (skipped)`);
      continue;
    }
    console.log(`  ${slug}: v${from} -> v${SCHEMA_VERSION}${apply ? ' (writing)' : ' (dry run)'}`);
    if (apply) {
      const front = yaml.dump(next, { lineWidth: 100 }).trimEnd();
      writeFileSync(path, `---\n${front}\n---\n${m[2]}`);
      migrated++;
    }
  }
  console.log(apply ? `\nMigrated ${migrated} course(s) to v${SCHEMA_VERSION}.` : '\nDry run — pass --apply to write changes.');
}

main();
