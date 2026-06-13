// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// GitHub Pages project-page deploy: served at https://<user>.github.io/fable-mode/
// `base` must be applied to every internal link via import.meta.env.BASE_URL.
export default defineConfig({
  site: 'https://ahepi.github.io',
  base: '/fable-mode',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkMath],
    // Render KaTeX at build time -> no client JS, no flash of unstyled math.
    rehypePlugins: [rehypeKatex],
  },
});
