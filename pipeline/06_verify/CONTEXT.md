# Stage 06 — Verify

The final gate before a course ships. Prove the course is valid, the math compiles, the links work,
the voice boundary held, and the course reads as one book. This stage is a proto-debugger: it traces
the finished product back against the schema, the canon, and the earlier stages' decisions.

## Inputs

- **L4** `runs/<run-id>/run-brief.md` — for the slug and the original intent.
- **L4** `runs/<run-id>/02_curriculum/output/curriculum.md` and `canon.md` — to cross-check the
  shipped course against the approved plan and the consistency contract.
- The shipped course at `site/src/content/courses/<slug>/`.
- **L3** `_config/content-schema.md`, `_config/math-style.md`.

## Process

1. **Reference integrity:** `node shared/scripts/validate-references.mjs` — fail if any contract or
   config file points at a repo file that doesn't exist.
2. **Schema + math + invariants:** `node shared/scripts/validate-schema.mjs <slug>` (exits non-zero
   on any violation, including invalid KaTeX). Fix the offending module before continuing.
3. **Prose continuity:** `node shared/scripts/lint-prose.mjs <slug>` — flags cross-module stock
   phrases over cap, within-module image-word overuse, em-dash density, and symbol/naming conflicts.
   Treat hard flags as failures unless each is justified; this is the automated half of the editorial
   gate (stage 04).
4. **Cross-stage consistency:** every module in the approved `curriculum.md` exists and matches its
   spec; names and symbols match `canon.md`; no fact owned by one module is fully re-derived in
   another.
5. **Voice boundary & coherence:** prose shows literary-maverick qualities and one consistent voice;
   formal blocks (Definition/Theorem/Proof/Example) are precise and were not rewritten by the loop.
6. **Pedagogy & governance:** modules carry distributed retrieval checks and elaborated worked
   solutions; `_course.md` has provenance (`aiGenerated`, `generatedDate`, `sources`, `reviewed`);
   the bias screen was run.
7. **Base-path lint:** the shipped markdown must not contain hand-written absolute internal links
   (`](/...)` or `href="/..."`); links inside the site code go through `site/src/lib/url.ts`.
8. **Build:** `bash shared/scripts/build-site.sh` — a clean Astro build re-validates the schema and
   renders all KaTeX. A green build is the ship signal.

## Outputs

- `runs/<run-id>/06_verify/output/verify-report.md` — each check with PASS/FAIL, the build result,
  and any fixes made. End with an overall verdict: **SHIP** or **BLOCK** (with reasons).

## Gate

**Review gate.** A FAIL blocks shipping until fixed. On PASS, the course is ready: commit, and merge
to `main` to trigger the GitHub Pages deploy.
