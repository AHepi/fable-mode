#!/usr/bin/env node
// Ship a run's authored artifacts onto the site shelf.
// Copies module files from the authoring output and _course.md from the
// assembly output into site/src/content/courses/<slug>/.
// Usage: node shared/scripts/copy-artifacts.mjs <run-id> <slug>
import { readdirSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

function copyArtifacts(runId, slug) {
  const authoring = join(ROOT, 'runs', runId, '03_authoring', 'output');
  const assembly = join(ROOT, 'runs', runId, '04_assembly', 'output');
  const dest = join(ROOT, 'site', 'src', 'content', 'courses', slug);
  mkdirSync(dest, { recursive: true });

  const copied = [];

  // Module files: NN-*.md from authoring output (skip any _-prefixed files).
  if (existsSync(authoring)) {
    for (const f of readdirSync(authoring)) {
      if (f.endsWith('.md') && !f.startsWith('_')) {
        copyFileSync(join(authoring, f), join(dest, f));
        copied.push(f);
      }
    }
  }

  // _course.md from assembly output, if the assembly stage staged one there.
  const stagedCourse = join(assembly, '_course.md');
  if (existsSync(stagedCourse)) {
    copyFileSync(stagedCourse, join(dest, '_course.md'));
    copied.push('_course.md');
  }

  return copied;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [runId, slug] = process.argv.slice(2);
  if (!runId || !slug) {
    console.error('usage: copy-artifacts.mjs <run-id> <slug>');
    process.exit(1);
  }
  const copied = copyArtifacts(runId, slug);
  console.error(`copied ${copied.length} file(s) to courses/${slug}/: ${copied.join(', ')}`);
}

export { copyArtifacts };
