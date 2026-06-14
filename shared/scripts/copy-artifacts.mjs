#!/usr/bin/env node
// Ship a run's authored artifacts onto the site shelf.
// Copies module files from the authoring output and _course.md from the
// assembly output into site/src/content/courses/<slug>/.
// Usage: node shared/scripts/copy-artifacts.mjs <run-id> <slug>
import { readdirSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

function hasModules(dir) {
  return existsSync(dir) && readdirSync(dir).some((f) => f.endsWith('.md') && !f.startsWith('_'));
}

function copyArtifacts(runId, slug) {
  const editorial = join(ROOT, 'runs', runId, '04_editorial', 'output');
  const authoring = join(ROOT, 'runs', runId, '03_authoring', 'output');
  // Ship the edited modules from the editorial stage; fall back to the raw
  // authoring output if the editorial stage was skipped.
  const modulesDir = hasModules(editorial) ? editorial : authoring;
  const assembly = join(ROOT, 'runs', runId, '05_assembly', 'output');
  const dest = join(ROOT, 'site', 'src', 'content', 'courses', slug);
  mkdirSync(dest, { recursive: true });

  const copied = [];

  // Module files: NN-*.md (skip any _-prefixed files).
  if (existsSync(modulesDir)) {
    for (const f of readdirSync(modulesDir)) {
      if (f.endsWith('.md') && !f.startsWith('_')) {
        copyFileSync(join(modulesDir, f), join(dest, f));
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
