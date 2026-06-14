# Verify Report — Topology, From the Coffee Mug

Run: `topology-20260614` · Slug: `topology` · 11 modules · Date: 2026-06-14

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | Reference integrity (`validate-references.mjs`) | **PASS** | No contract/config file points at a missing repo file. |
| 2 | Schema + math + invariants (`validate-schema.mjs topology`) | **PASS** | Frontmatter valid; `moduleOrder` ↔ files one-to-one; each `order` = 1-based index; `course` = folder; `schemaVersion` = 1; all KaTeX valid. |
| 3 | Prose continuity (`lint-prose.mjs topology`) | **PASS (flags justified)** | 4 hard flags, all justified — see below. |
| 4 | Cross-stage consistency | **PASS** | All 11 curriculum modules exist and match their specs; names/symbols match `canon.md`; no owned fact re-derived (invariant logic→06, χ→10, genus→08, connectedness→06, preimage→04 are callbacks in later modules). |
| 5 | Voice boundary & coherence | **PASS** | Prose shows literary-maverick qualities; one consistent narrator (formal middle 02–05 held to module 01's warmth); formal blocks precise, not run through the prose loop. |
| 5a | Metaphor & bridge (by reading) | **PASS** | Editorial's semantic audit: every central image points at one correct referent and pays off (01 rubber-sheet, 02 elbow-room, 04 *rejects* the pen-picture, 05 two-way dictionary, 06 fingerprint/detective, 08 string-through-hole vs. dent, 10 "a number you count," 11 convict-vs-acquit). Every formal definition is reached by a notation-decoding bridge. Nothing needed killing or rebuilding. |
| 6 | Pedagogy & governance | **PASS** | Each module: distributed attempt-before-reveal "Check yourself" + elaborated worked solutions in `<details>`. `_course.md` provenance set (`aiGenerated: true`, `model`, `generatedDate`, `reviewed: false`, real `sources`). Bias screen run per module (abstract objects/letters; no stereotyping). |
| 7 | Base-path lint | **PASS** | No hand-written absolute internal links (`](/…`/`href="/…"`) in the shipped markdown. |
| 8 | Build (`build-site.sh`) | **PASS** | Clean Astro build, 25 pages (11 topology modules + landing + catalog, alongside abstract-algebra). KaTeX rendered at build time; no errors. |

## Justified hard prose flags (step 3)

- **"room" — 33× in 02, 16× in 03, 9× in 04.** Justified. "Room around every point" is the literal
  definition of an open set and the canon-assigned owned metaphor for module 02 ("elbow room");
  03/04 use it as callbacks to open sets. This is the same legitimate-domain-word situation as
  "clock" in the algebra course's Clock Arithmetic module — the mechanical cap (5) does not fit an
  owned image that is also the core concept. A light quality pass varied the repeated worked-solution
  conclusion ("Every point has room, so the set is open" → "clears the test" / "the margin holds")
  to break the most templated repetition; the remainder is the concept itself.
- **"enough to" — 6× across 5 modules.** Justified. A generic English collocation, not a stock tic;
  one natural occurrence per module.

## Fixes applied during verify

- Removed a stray `editorial-report.md` that the assembly copy step shipped into the course folder.
- **Factory hardening:** tightened `shared/scripts/copy-artifacts.mjs` to ship only true module
  files (`NN-<slug>.md`), so run artifacts (e.g. `editorial-report.md`) can never cross onto the
  shelf on any future run. Re-ran assembly → 11 modules + `_course.md` only.
- Light prose trim in module 02 to reduce the most templated "room" repetition (synced to the
  editorial output artifact).

## Verdict

**SHIP.** The course validates against the schema, the math compiles, links resolve under the
`/fable-mode/` base path, the prose reads as one book with every metaphor pointing true and every
definition bridged, and the site builds clean. Merging to `main` triggers the GitHub Pages deploy.
