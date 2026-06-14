import { visit } from 'unist-util-visit';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { MATH_KINDS } from '../schema/course-schema.mjs';

// Make math RENDERING respect the course `kind`, matching the validator.
// remark-math runs globally, so without this a prose dollar amount in a
// non-STEM course (e.g. "cuesta $5 ... $3" in a language course, or "$200M"
// in history) gets parsed and rendered as a KaTeX equation. For non-math
// kinds we revert math nodes back to the literal text the author wrote.
//
// The `kind` lives on the course's _course.md, not on each module, so we read
// it from the sibling _course.md of whatever module is being rendered.
// Must run AFTER remark-math in the remarkPlugins array.

function kindForFile(filePath, frontmatter) {
  if (!filePath) return 'stem';
  if (/_course\.md$/.test(filePath)) return frontmatter?.kind ?? 'stem';
  try {
    const coursePath = join(dirname(filePath), '_course.md');
    if (!existsSync(coursePath)) return 'stem';
    const m = readFileSync(coursePath, 'utf8').match(/^kind:\s*"?([A-Za-z]+)"?/m);
    return m ? m[1] : 'stem';
  } catch {
    return 'stem';
  }
}

export function remarkKindMathGate() {
  return (tree, file) => {
    const filePath = file?.path || file?.history?.[0];
    const kind = kindForFile(filePath, file?.data?.astro?.frontmatter);
    if (MATH_KINDS.includes(kind)) return; // STEM: leave math intact
    visit(tree, (node, index, parent) => {
      if (!parent || index == null) return;
      if (node.type === 'inlineMath') {
        parent.children[index] = { type: 'text', value: `$${node.value}$` };
      } else if (node.type === 'math') {
        parent.children[index] = { type: 'text', value: `$$${node.value}$$` };
      }
    });
  };
}
