# Verify — The Conjecture–Criticism Calculus

- **Schema:** `validate-schema.mjs conjecture-criticism-calculus` → ✓ valid (11 modules, moduleOrder derived, frontmatter complete, `subject: Mathematics`).
- **Prose lint:** `lint-prose.mjs` → ✓ 0 hard flags (after clearing "enough to" ×5→2 and "machine" ×9→4 in M9). 215 soft em-dash advisories (the literary voice) and 1 generic-op-glyph heuristic left as advisory.
- **KaTeX / build:** `build-site.sh` → ✓ 91 pages built, 0 errors. Every `$…$`/`$$…$$` across all eleven modules render-checked, including the `cases` status blocks and the reinstatement proof. No banned LaTeX constructs.
- **Cross-module consistency (stage 04):** attack relation unified to `\mathrm{att}` everywhere; statuses `\text{…}`; no residual `\mathit{fail}`/`\textbf{status}`; M8 scaffolding comment removed; M11 broken exercise solution fixed.

Shipped to `site/src/content/courses/conjecture-criticism-calculus/`.
