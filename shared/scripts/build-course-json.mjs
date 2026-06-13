#!/usr/bin/env node
// Derive `moduleOrder` from the module files in a course folder and write it
// into _course.md, so the ordering can never drift from the files on disk.
// Usage: node shared/scripts/build-course-json.mjs <slug>
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFrontmatter } from './lib/frontmatter.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

function buildCourseJson(slug) {
  const dir = join(ROOT, 'site', 'src', 'content', 'courses', slug);
  const moduleFiles = readdirSync(dir)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'));

  // Sort by the `order` field (authoritative), falling back to filename.
  const modules = moduleFiles
    .map((f) => {
      const { data } = readFrontmatter(join(dir, f));
      return { file: f, id: f.replace(/\.md$/, ''), order: Number(data.order) };
    })
    .sort((a, b) => a.order - b.order || a.file.localeCompare(b.file));

  const moduleOrder = modules.map((m) => m.id);

  // Rewrite the moduleOrder block in _course.md, preserving everything else.
  const coursePath = join(dir, '_course.md');
  const text = readFileSync(coursePath, 'utf8');
  const block =
    'moduleOrder:\n' + moduleOrder.map((id) => `  - ${id}`).join('\n');

  let updated;
  if (/^moduleOrder:.*(\n\s*-\s+.*)*$/m.test(text)) {
    updated = text.replace(/^moduleOrder:.*(\n\s*-\s+.*)*$/m, block);
  } else {
    // Insert before the closing frontmatter delimiter.
    updated = text.replace(/\n---\n/, `\n${block}\n---\n`);
  }
  writeFileSync(coursePath, updated);
  return moduleOrder;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const slug = process.argv[2];
  if (!slug) {
    console.error('usage: build-course-json.mjs <slug>');
    process.exit(1);
  }
  const order = buildCourseJson(slug);
  console.error(`moduleOrder (${order.length}): ${order.join(', ')}`);
}

export { buildCourseJson };
