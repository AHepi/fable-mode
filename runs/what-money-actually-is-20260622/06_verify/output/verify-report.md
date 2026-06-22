# Verify — What Money Actually Is

Run: `what-money-actually-is-20260622` · 10 modules · humanities · undergrad. Sequel to "The Myth of Barter."

| # | Check | Result |
|---|-------|--------|
| 1 | Reference integrity | ✓ PASS |
| 2 | Schema + invariants (`validate-schema.mjs`) | ✓ PASS — valid; `moduleOrder` ↔ 10 files 1:1; `prerequisiteCourses: [the-myth-of-barter]` set |
| 3 | Prose lint (`lint-prose.mjs`) | ✓ PASS — **0 hard flags**; em-dash check clean (banned, none in prose) |
| 4 | Cross-stage consistency | ✓ PASS — all 10 curriculum modules present and matching spec; the silver-problem hinge (05) intact and uncompressed; Schumpeter frame (01) threaded through |
| 5 / 5a | Voice boundary + closing-story sweep | ✓ PASS — one undergrad voice; every module ends in a fact-dense `## The story` (no recaps); stories vetted for fabrication and points-true (see below) |
| 6 | Pedagogy & governance | ✓ PASS — distributed attempt-before-reveal checks + discussion/rubric per module; `_course.md` provenance set; bias screen run |
| 6a | Level fit (undergrad) | ✓ PASS — intro vocabulary recalled in a clause (not re-derived); new terms (regression theorem, money of account, separable money-uses, administered standard) glossed briefly then used; engages primary scholarship directly |
| 6b | Closing stories (fabrication + points-true) | ✓ PASS — verifiable facts only; the one uncertain specific (module 10's "Babylonian madness" as a Keynes coinage) was reattributed to convention and the unverified letter wording dropped; the Artemision dating (06) softened to "late 7th/early 6th c. BCE"; the Vedic three-debt schema (08) held to the attested core; the BoE author names (09) omitted as unverified |
| 7 | Base-path lint | ✓ PASS — no hand-written absolute internal links |
| 8 | Build (`build-site.sh`) | ✓ PASS — clean Astro build, **121 pages**, 0 errors |

## Integrity work (this course's specific risks)
- **Thinkers kept distinct (the top risk):** the editorial pass confirmed the who-owns-which-claim registry holds. Menger ≠ Mises; Innes/Knapp/Keynes/Lerner/Grierson/Ingham each pinned to one claim (Keynes to conceptual priority, not state power); Graeber's military-coinage complex and the primordial-debt thesis (Aglietta/Orléan/Théret) and Hudson's strong clean-slate thesis all attributed as their readings, never as consensus.
- **The silver-problem hinge (05):** built as a three-beat structure (objection at full strength → the administered-standard reply → the metallist rejoinder), landing on "shifts, not settles" with no winner. This is the exact objection the intro course ducked, now confronted and held open honestly.
- **Chartalism ≠ MMT (09):** the fence takes no policy stance, for or against.
- **Phrase caps reconciled course-wide:** "no winner"/"crown" 7→3 (01/05/10); "shifts, not settles" held to 05 (10 paraphrases); "creature of the state" to 04; "loans create deposits" to 09.
- **Format:** zero em dashes; directive metadiscourse near zero (3 soft, mostly inside check-yourself prompts); enact-don't-recite held.

## Notes
- **Steelman-first** holds in every contested module (02 commodity, 04 credit/state, 05 hinge, 07 Hudson, 08 primordial debt): the strongest version precedes any criticism.
- Primary sources are genuine or clearly-labelled paraphrase (no invented quotes/clause numbers/rates): Schumpeter on real analysis, Menger on saleability, Innes (1914), the Code of Hammurabi (substance, no clauses), Leviticus 25:35–37 (KJV, verified), Grierson, the BoE 2014 paper. `reviewed: false` stands; the scholarship is dense and contested and would benefit from one expert read.

## Verdict

**SHIP.** Shipped to `site/src/content/courses/what-money-actually-is/` (10 modules + `_course.md`). To be added to a Path with "The Myth of Barter."
