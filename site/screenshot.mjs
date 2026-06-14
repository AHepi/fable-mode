import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = 'http://localhost:4321/fable-mode';
const outDir = process.argv[2] || '/tmp/shots/before';
mkdirSync(outDir, { recursive: true });

const pages = [
  ['01-catalog', `${BASE}/`],
  ['02-course-landing', `${BASE}/courses/abstract-algebra/`],
  ['03-module-math', `${BASE}/courses/abstract-algebra/04-what-is-a-group/`],
  ['04-module-diagram', `${BASE}/courses/abstract-algebra/06-symmetries-of-a-triangle/`],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

for (const [name, url] of pages) {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: true });
  console.log(`shot: ${name}`);
}

// one mobile view of the catalog
const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const mpage = await mctx.newPage();
await mpage.goto(`${BASE}/`, { waitUntil: 'networkidle' });
await mpage.screenshot({ path: `${outDir}/05-catalog-mobile.png`, fullPage: true });
console.log('shot: 05-catalog-mobile');

await browser.close();
console.log('done ->', outDir);
