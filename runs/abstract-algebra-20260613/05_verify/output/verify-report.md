# Verify Report — Abstract Algebra

Run: `abstract-algebra-20260613` · Course: `site/src/content/courses/abstract-algebra/`

| # | Check | Result |
|---|-------|--------|
| 1 | Schema + invariants + KaTeX (`validate-schema.mjs`) | **PASS** |
| 2 | Cross-stage consistency vs. approved `curriculum.md` | **PASS** |
| 3 | Voice boundary (prose vs. formal math) | **PASS** (with one cleanup) |
| 4 | Base-path lint (no absolute internal links in content) | **PASS** |
| 5 | Clean Astro build (`npm run build`) | **PASS** |

## Details

1. **Schema/invariants/KaTeX** — `validate-schema.mjs abstract-algebra` exits 0. All 11 modules plus
   `_course.md` validate; `moduleOrder` (generated) is a one-to-one match with the module files; every
   `order`/filename/`course` field is consistent; every inline and display equation is valid KaTeX
   (verified with `throwOnError: true`, including the literal `°` in module 06 and the `array`/Cayley
   tables in modules 03 and 06).

2. **Cross-stage consistency** — all 11 modules from the approved curriculum exist, in order, with
   matching titles, objectives, and prerequisites. Nothing added or dropped. The prerequisite graph
   holds: no module uses a concept from a later one.

3. **Voice boundary** — prose sections (hooks, intuition, transitions, recaps) carry the
   literary-maverick voice; Definition/Theorem/Proof/Example blocks are precise and were not run
   through the prose rewrite loop. **One cleanup applied:** module 07 contained a gimmicky fake
   self-correction ("a subgroup of size 4 — wait, of size three") that could read as a genuine error
   to a beginner; rewritten to state the size plainly.

4. **Base-path lint** — no hand-written absolute internal links (`](/…`, `href="/…`) in the shipped
   markdown; all site-code links go through `site/src/lib/url.ts`, so they resolve under `/fable-mode/`.

5. **Build** — `npm run build` compiles 13 pages (catalog + course landing + 11 module pages) with no
   errors. KaTeX renders at build time.

## A bug this run surfaced (and the durable fix)

The first build failed: module 03's `summary` contained an unquoted colon-space
(`...to its bones: a set...`), which strict YAML reads as a nested mapping. The loose pre-build parser
had tolerated it. Two fixes, per "edit the source, not the output":

- **Source fix:** added a "Frontmatter must be valid YAML" rule to `_config/content-schema.md` telling
  authors to quote `title`/`summary`/`description`.
- **Gate fix:** hardened `validate-schema.mjs` to parse frontmatter with the same strict `js-yaml`
  Astro uses, so this class of error now fails the verify stage *before* a build is attempted
  (confirmed: it now reports `invalid YAML frontmatter — bad indentation of a mapping entry`).

## Verdict

**SHIP.** The course is valid, builds clean, and renders. Ready to commit; merging to `main` triggers
the GitHub Pages deploy.
