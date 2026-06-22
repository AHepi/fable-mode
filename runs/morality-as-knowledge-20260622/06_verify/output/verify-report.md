# Verify — Morality as Knowledge

Run: `morality-as-knowledge-20260622` · 10 modules · humanities (philosophy) · undergrad. A defense of moral objectivity via Deutsch and Popper.

| # | Check | Result |
|---|-------|--------|
| 1 | Reference integrity | ✓ PASS |
| 2 | Schema + invariants (`validate-schema.mjs`) | ✓ PASS — valid; `moduleOrder` ↔ 10 files 1:1 |
| 3 | Prose lint (`lint-prose.mjs`) | ✓ PASS — **0 hard flags**; em-dash check clean (banned, none in prose; quotations keep their own) |
| 4 | Cross-stage consistency | ✓ PASS — all 10 curriculum modules present and matching spec; the dependency chain holds (challenge → Popper engine → the hinge → constructive core → payoff → parallel → honest close); the hinge (05) follows the induction module (04) |
| 5 / 5a | Voice boundary + closing-story sweep | ✓ PASS — one undergrad voice (Deutsch's accessible register); every module ends in a fact-dense `## The story` (no recaps); stories vetted for fabrication and points-true |
| 6 | Pedagogy & governance | ✓ PASS — distributed attempt-before-reveal checks + discussion/rubric per module; `_course.md` provenance set; bias screen run |
| 6a | Level fit (undergrad) | ✓ PASS — every term (objective, relativism, fallibilism, the is/ought gap, error theory, hard to vary, the open society) glossed at first use, then used freely; engages the primary texts directly |
| 6b | Closing stories (fabrication + points-true) | ✓ PASS — verifiable facts only; uncertain specifics kept general (Semmelweis mortality figures) or labelled contested (Wittgenstein's Poker exchange); Newton's quote verbatim and verified; the *Angraecum*/Darwin/1903 *praedicta* moth correct; the 04/05 black-swan seam fixed so module 05 solely owns the de Vlamingh story |
| 7 | Base-path lint | ✓ PASS — no hand-written absolute internal links |
| 8 | Build (`build-site.sh`) | ✓ PASS — clean Astro build, **132 pages**, 0 errors |

## Integrity work (this course's specific risks)
- **Attribution ledger holds (the top risk):** Hume ≠ Moore ≠ Mackie ≠ Ayer (broken inference / failed definition / error-theory-queerness / no-truth-value emotivism, with the Mackie-vs-Ayer contrast explicit). The **Popper/Deutsch seam** is clean throughout: Popper owns fallibilism, the dissolution of induction, the open society; Deutsch owns the no-special-is/ought-problem move, "hard to vary"/reach, the moral and aesthetic objectivity extension, and the optimism. Bold readings attributed as theirs: Deutsch's "all evils are due to insufficient knowledge" (08, steelmanned then flagged contestable); the evolutionary debunking arguments to Street and Joyce (10); quasi-realism to Blackburn (10).
- **No overclaim; the close stays open:** the honest line throughout is *epistemic parity with science plus real moral progress*, not a proof of moral realism. Module 10 states what is established and what is not, and crowns no winner between realism and anti-realism; the takeaway is the method (hold any morality as a conjecture open to criticism), not a verdict.
- **Steelman-first held:** the objection modules (02 relativism/emotivism; 03 Hume/Moore/Mackie) state the case at full strength with no rebuttal; the answers come later (04-07). The "all evils" beat (08) is steelmanned before it is doubted.
- **No religious/authority grounding** smuggled in via the Newton story (07): the ground of abolition is the correction of an error, not faith.
- **Phrase caps reconciled:** "this is a defense, not a proof" cut from 06 and 07 (now in 05 and 10 only); "no special problem" in 05; "all evils" and "problems are inevitable; problems are soluble" each once in 08, attributed to Deutsch.
- **Format:** zero em dashes in prose; directive metadiscourse near zero (5 soft hits, all confirmed innocent "we hold that" verb uses in module 07); enact-don't-recite held.

## One flag for a human reviewer
- The Popper "who should rule?" quotation (module 08) is attributed with a citation note hedging it as Popper's own later restatement of the central argument rather than to a specific first-edition page. The wording and authorship are well attested; only the exact source edition is hedged. A human reviewer with the texts may want to confirm the placement. `reviewed: false` stands; this is dense, contested philosophy and would benefit from one expert read (especially modules 05, 08, 10).

## Verdict

**SHIP.** Shipped to `site/src/content/courses/morality-as-knowledge/` (10 modules + `_course.md`). Standalone philosophy course; not added to a Path.
