# Verify — The Myth of Barter

Run: `the-myth-of-barter-20260621` · 9 modules · humanities · intro. Companion to "How Capitalism Came to Seem Natural."

| # | Check | Result |
|---|-------|--------|
| 1 | Reference integrity | ✓ PASS |
| 2 | Schema + invariants (`validate-schema.mjs`) | ✓ PASS — valid; `moduleOrder` ↔ 9 files 1:1; orders/`course` consistent. (No math: humanities.) |
| 3 | Prose continuity (`lint-prose.mjs`) | ✓ PASS — **0 hard flags**; **em-dash check clean (banned, none in prose)** |
| 4 | Cross-stage consistency | ✓ PASS — all 9 curriculum modules present and matching spec; canon terms/attributions consistent; the unit-of-account vs. medium-of-exchange hinge glossed identically across 03/05/06/07; no owned fact re-derived |
| 5 / 5a | Voice boundary + metaphor & bridge sweep | ✓ PASS — one essayistic voice (matched to the companion); every specialist term reached from an everyday picture; framing-shift seams constructed (bar-tab → unit of account; debt-as-relationship → debt-as-quantity; the record → the two theories) |
| 6 | Pedagogy & governance | ✓ PASS — distributed attempt-before-reveal checks + discussion/rubric in every module; `_course.md` provenance set; bias screen run per module |
| 6a | Level fit (intro) | ✓ PASS — every term glossed at first use; no orphan terms vs. `prerequisites: []`; concrete picture for every abstraction; callbacks re-gloss |
| 7 | Base-path lint | ✓ PASS — no hand-written absolute internal links |
| 8 | Build (`build-site.sh`) | ✓ PASS — clean Astro build, **109 pages**, 0 errors |

## Integrity work done in editorial (quote handling)
- **Module 06 (Innes):** quote trimmed to the verified, widely-attested sentence ("The eye has never seen, nor the hand touched a dollar…"); the bracketed `[terms]` placeholder removed.
- **Module 08 (Samuelson):** converted from an uncertain direct quote to a **labeled paraphrase**, keeping only the trusted fragment "hypothetical, logical lines" in quotation marks, with an explicit confidence note in-text.
- **Module 05 (Grierson):** converted to a **labeled paraphrase** ("On Grierson's account…"), with Graeber's stronger causal "military-coinage complex" claim separated out and marked as interpretation.
- No bracketed placeholders remain anywhere; no invented page or clause numbers; rough dates throughout.
- Verified primary sources kept verbatim: Smith's "to truck, barter, and exchange one thing for another" (added as module 01's primary-source block); Humphrey's *Man* (1985) verdict; Leviticus 25:10 (KJV) on the Jubilee.

## New pipeline rules confirmed honored
- **No em dashes:** zero in all nine modules' prose and in `_course.md` (the now-hard lint check 3 passes); source attributions standardized to a dash-free `> Author, Work (year)` form.
- **Length follows the idea:** the over-built modules were trimmed in editorial (03: 3,935→3,280; 06: 4,504→3,692 words) without cutting load-bearing beats.

## Notes
- **History-first held:** six history/ethnography modules (01–05, 07) to one models module (06); the two theories of money arrive after the record and are framed as objects of study, never the opening frame.
- **Stance integrity:** every module steelmans before dismantling; evidence kept separate from interpretation; live debates named not resolved (myth-as-history-vs-logical-fable; chartalism vs. commodity theory; how far to trust Graeber, attributed throughout as his reading; "primordial debt" flagged as contested over-reach, not adopted). Anti-romanticizing anchored in 04 (debt bondage); ideology critique kept function-not-conspiracy in 08.

## Verdict

**SHIP.** Shipped to `site/src/content/courses/the-myth-of-barter/` (9 modules + `_course.md`). Paired with "How Capitalism Came to Seem Natural" in the Path "Economics as History, Not Nature."
