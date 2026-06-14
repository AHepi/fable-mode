// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkKindMathGate } from './src/lib/remark-kind-math-gate.mjs';
import { rehypeBaseMedia } from './src/lib/rehype-base-media.mjs';

const BASE = '/fable-mode';

// GitHub Pages project-page deploy: served at https://<user>.github.io/fable-mode/
// `base` must be applied to every internal link via import.meta.env.BASE_URL.
export default defineConfig({
  site: 'https://ahepi.github.io',
  base: BASE,
  trailingSlash: 'always',
  markdown: {
    // remarkKindMathGate runs AFTER remarkMath: it reverts math to literal text
    // for non-STEM courses so prose dollar signs aren't rendered as equations.
    remarkPlugins: [remarkMath, remarkKindMathGate],
    // Render KaTeX at build time; then base-prefix any /media/ asset paths.
    rehypePlugins: [rehypeKatex, [rehypeBaseMedia, BASE]],
  },
});

