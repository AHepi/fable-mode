#!/usr/bin/env node
// Turn a title into a URL-safe slug. Deterministic, no AI.
// Usage: node shared/scripts/slugify.mjs "Abstract Algebra"  ->  abstract-algebra

export function slugify(input) {
  return String(input)
    .normalize('NFKD') // split accented chars into base + diacritic
    .replace(/[̀-ͯ]/g, '') // strip diacritics (combining marks)
    .toLowerCase()
    .replace(/['"]/g, '') // drop quotes/apostrophes outright
    .replace(/[^a-z0-9]+/g, '-') // everything else -> hyphen
    .replace(/^-+|-+$/g, '') // trim leading/trailing hyphens
    .replace(/-{2,}/g, '-'); // collapse runs
}

// CLI entry point (only when run directly, not when imported).
import { fileURLToPath } from 'node:url';
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const arg = process.argv.slice(2).join(' ').trim();
  if (!arg) {
    console.error('usage: slugify.mjs "<text>"');
    process.exit(1);
  }
  process.stdout.write(slugify(arg) + '\n');
}
