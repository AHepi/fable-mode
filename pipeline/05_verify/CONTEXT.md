# Stage 05 — Verify

The final gate before a course ships. Prove the course is valid, the math compiles, the links work,
and the voice boundary held. This stage is a proto-debugger: it traces the finished product back
against the schema and the earlier stages' decisions.

## Inputs

- **L4** `runs/<run-id>/run-brief.md` — for the slug and the original intent.
- **L4** `runs/<run-id>/02_curriculum/output/curriculum.md` — to cross-check the shipped course
  against the approved plan.
- The shipped course at `site/src/content/courses/<slug>/`.
- **L3** `_config/content-schema.md`, `_config/math-style.md`.

## Process

1. **Reference integrity:** `node shared/scripts/validate-references.mjs` — fail if any contract or
   config file points at a repo file that doesn't exist (catches mis-pathed references).
2. **Schema + math + invariants:** `node shared/scripts/validate-schema.mjs <slug>` (exits non-zero
   on any violation, including invalid KaTeX). Fix the offending module before continuing.
3. **Cross-stage consistency:** every module in the approved `curriculum.md` exists and matches its
   spec (title, objectives, prereqs); nothing was added or dropped silently.
4. **Voice boundary:** spot-check modules — prose shows literary-maverick qualities; formal blocks
   (Definition/Theorem/Proof/Example) are precise and were not rewritten by the prose loop.
5. **Pedagogy & governance:** modules carry distributed retrieval checks and elaborated worked
   solutions (`course-design.md`); `_course.md` has provenance (`aiGenerated`, `generatedDate`,
   `sources`, `reviewed`); the bias screen was run.
6. **Base-path lint:** the shipped markdown must not contain hand-written absolute internal links
   (`](/...)` or `href="/..."`); links inside the site code go through `site/src/lib/url.ts`.
7. **Build:** `bash shared/scripts/build-site.sh` — a clean Astro build re-validates the schema and
   renders all KaTeX. A green build is the ship signal.

## Outputs

- `runs/<run-id>/05_verify/output/verify-report.md` — each check with PASS/FAIL, the build result,
  and any fixes made. End with an overall verdict: **SHIP** or **BLOCK** (with reasons).

## Gate

**Review gate.** A FAIL blocks shipping until fixed. On PASS, the course is ready: commit, and merge
to `main` to trigger the GitHub Pages deploy.
