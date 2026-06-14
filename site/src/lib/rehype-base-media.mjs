import { visit } from 'unist-util-visit';

// Let course markdown reference public media with a base-agnostic path.
// Authors write `<audio src="/media/clip.mp3">` (or `/media/...` on any
// src/href); this prefixes the site `base` so it resolves under e.g.
// /fable-mode/media/clip.mp3 without anyone hand-writing the base — the same
// safety the url() helper gives site code, but available inside Markdown.
//
// Handles both parsed elements (e.g. <img>) and raw HTML nodes (inline
// <audio>/<video> in Markdown are passed through as raw HTML, not hast elements).
export function rehypeBaseMedia(base = '/') {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base; // no double slash
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'element' && node.properties) {
        for (const attr of ['src', 'href']) {
          const v = node.properties[attr];
          if (typeof v === 'string' && v.startsWith('/media/')) {
            node.properties[attr] = `${prefix}${v}`;
          }
        }
      } else if ((node.type === 'raw' || node.type === 'html') && typeof node.value === 'string') {
        node.value = node.value.replace(/((?:src|href)=["'])\/media\//g, `$1${prefix}/media/`);
      }
    });
  };
}
