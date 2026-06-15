# Verify Report — How JEPA Works: Predicting the Gist, Not the Pixels

Run: `jepa-20260614` · Slug: `jepa` · 12 modules · Level: intro · kind: stem

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | Reference integrity (`validate-references.mjs`) | **PASS** | No contract/config file points at a missing repo file. |
| 2 | Schema + math + invariants (`validate-schema.mjs jepa`) | **PASS** | Frontmatter valid; `moduleOrder` ↔ 12 files one-to-one; each `order` = position; `course` = folder; `schemaVersion` 1. No KaTeX in the course (correct for this audience) — nothing to break the build. |
| 3 | Prose continuity (`lint-prose.mjs jepa`) | **PASS (flags justified)** | 3 hard flags, all the single word "machine" — see below. |
| 4 | Cross-stage consistency | **PASS** | All 12 curriculum modules exist and match specs; names follow `canon.md`; "name once" rules hold (neural network/02, embedding/03, loss/04, autoregressive/06, latent space/07, EMA/09, ViT/10); owned facts are callbacks, not re-derivations; the full LLM-vs-JEPA synthesis is module 12's alone (01/05/06/07/08 give one-line beats only). |
| 5 | Voice boundary & coherence | **PASS** | One warm, honest narrator throughout; no anthropomorphizing ("understands/wants/imagines" only ever negated/guarded); zero "magic"/hype; mechanism-heavy middle (07/09/10) reads at the warmth of 01. |
| 5a | Metaphor & bridge (by reading, editorial stage) | **PASS** | Every central image points true, is paid off, and honors its canon guard (map has no labels; encoder image has no gambling/crank association; the "gist" is never a human-readable idea; V-JEPA is non-generative; a world model is not a stored movie). Both formal Definitions (03, 09) are reached by intuition→bridges; none lands as a cliff. |
| 6 | Pedagogy & governance | **PASS** | Each module has distributed attempt-before-reveal "Check yourself" + elaborated `<details>` solutions; misconception label standardized ("A tempting wrong answer:") and present in all 12. `_course.md` provenance set (`aiGenerated`, `model`, `generatedDate`, `reviewed: false`, real verified `sources`). Bias screen run per module. |
| 7 | Accuracy / honesty | **PASS** | All four primary works web-verified at research stage; no "JEPA beat/replaced LLMs" framing; module 09 keeps the honest "why collapse is prevented is still studied" note; module 12 frames JEPA as an open bet. All internal `[verify]` tags resolved and removed (V-JEPA 2 figures confirmed against arXiv 2506.09985). |
| 8 | Base-path lint | **PASS** | No hand-written absolute internal links in shipped markdown. |
| 9 | Build (`build-site.sh`) | **PASS** | Clean Astro build, 38 pages (12 jepa modules + landing + catalog, alongside topology and abstract-algebra). |

## Justified hard prose flags (step 3)

- **"machine" — 9× in module 10, 6× in 05, 6× in 12** (cap 5). Justified. "Machine" is the course's
  deliberate plain-language word for a no-ML reader (chosen over jargon like "model/network"), plus
  evocative whole-architecture uses ("the machine the whole course is named after"). A variation pass
  already cut the genuine drumbeat (module 10 from 19→9; others from 8→6), swapping incidental
  repetitions for "system"/"model"/"it" while keeping "machine" dominant by design. Same
  legitimate-domain-word situation as "clock"/"room" in prior courses; the mechanical cap (5) does not
  fit the audience-driven plain term. Remaining counts are the meaningful, non-paddable uses.

## Defects found and fixed during assembly/verify

1. **Leaked tool-call fragment** (`</content></invoke>`) at the end of authoring module 11 — removed.
2. **Unquoted YAML title with a colon** in module 10 (`I-JEPA: Doing It on Images`) — quoted (07/11 already were).
3. **Bare-number `prerequisites`** in modules 04 and 12 — normalized to full slugs (would not resolve as references).
4. **YAML colon-trap in three `summary` fields** (modules 01, 06, 09: each contained an internal
   `": "`, which silently breaks an unquoted YAML scalar and nulled the whole frontmatter) — quoted.
5. **Same colon-trap in a course-level prerequisite** in `_course.md` ("Helpful but not required:
   having used…") — quoted.
6. **Editorial/site sync drift** in module 10 (a partial earlier pass left the site copy stale) —
   reconciled; a forced full editorial→site re-copy now confirms all 12 byte-identical.
7. **"machine" overuse** — variation pass on the 4 flagged modules (see above).

## Known factory fragility (not blocking; noted for a future hardening)

The YAML colon-trap (#4, #5) will recur on any run whose curriculum writes a `summary` or
prerequisite containing `": "`. The verify stage caught it, but only via a cryptic
"field undefined" schema error. A future improvement: have the schema validator detect a
fully-empty frontmatter parse and report "frontmatter failed to parse (YAML error — check for an
unquoted colon)". Left as a note rather than changing the validator this run.

## Verdict

**SHIP.** The course validates against the schema, contains no unresolved `[verify]` tags or leaked
fragments, reads as one honest from-scratch narrator with every metaphor guarded, and the site builds
clean. Merging to `main` triggers the GitHub Pages deploy.
