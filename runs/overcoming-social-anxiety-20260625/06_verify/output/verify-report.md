# Verify Report — Overcoming Social Anxiety: A Field Manual

**Run:** overcoming-social-anxiety-20260625 · **Slug:** overcoming-social-anxiety · **Date:** 2026-06-26
**Shipped to:** `site/src/content/courses/overcoming-social-anxiety/` (12 modules + `_course.md`)

## Checks

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | Reference integrity (`validate-references.mjs`) | **PASS** | No broken internal references. |
| 2 | Schema + invariants (`validate-schema.mjs`) | **PASS** | Valid (field-level). `moduleOrder` matches the 12 module files one-to-one; `order`/filename/`course` consistent. `kind: skill` (no math validation). |
| 3 | Prose continuity (`lint-prose.mjs`) | **PASS** | 0 hard flags after fixes. 108 soft advisories are texture on a 26k-word course (accepted). 0 em dashes; no backtick math; no soothing-adverb tics. |
| 4 | Cross-stage consistency | **PASS** | All 12 approved curriculum modules exist and match specs. Canon held: the anxiety loop is taught once (M1) and called back; the §6 field-drill rubric is consistent across all module drills; one image per module. |
| 5 | Voice & coherence | **PASS** | One warm, direct, been-there narrator; no therapy-speak, no hype; 12 distinct hooks, varied recaps (editorial pass). |
| 5a | Metaphor & bridge (by reading) | **PASS** | Each canon image points true and pays off (loop/spiral, tap-the-brake, swing-the-spotlight, free-info handholds, pull-the-thread, nerves-behind-glass, scientist-running-a-test, training-wheels, small-safe-dose/vaccine, taking-up-your-space, kind-friend-vs-prosecutor, the-ladder). No module implies anxiety must be eliminated to succeed. |
| 6 | Pedagogy & governance | **PASS** | Every module ends in a **live field drill** with the shared self-scored rubric (success = a violated prediction, not a calm body); distributed `<details>` retrieval checks throughout. `_course.md` provenance complete (`aiGenerated`, `generatedDate`, `reviewed: false`, 21 real sources). Bias screen applied (examples non-stereotyping). |
| 6a | Level fit (`intro`/general adult) | **PASS** | No psychology assumed; every term glossed once; rubric self-scored (skill kind). |
| 7 | Base-path lint | **PASS** | No hand-written absolute internal links in shipped markdown. |
| 8 | Build (`build-site.sh`) | **PASS** | Clean Astro build: **158 pages**, including `/courses/overcoming-social-anxiety/` and all 12 module pages. No errors. |

## Fixes made during verify
- **`subject`** enum violation: `Personal Development` → **`Skills & Craft`** (a valid schema enum value).
- **M11 frontmatter:** the objective "Apply the ACT stance: …" parsed as an object because of the colon-space; **quoted** it so it parses as a string.
- **Frontmatter YAML:** four `summary:` lines quoted (M2, M3, M6, M11) during editorial.
- **Prose hard flags cleared:** "enough to" 10→2 (cap 4); image word "room" 13/14 → 5 each in M3/M10 (cap 5); soothing adverb "quietly" 7→0.

## Responsibility / safety audit (this course's core value)
- The safety framing is present and warm in **M1** (front-loaded), **M9** (mishap/rejection drills kept small, safe, ethical, never at others' expense), and **M12** (when-to-seek-help close). Same criteria throughout; **generic-only** referral pathways (GP, licensed therapist/psychologist, country register, local crisis line) — **no invented phone numbers or org names**.
- Clear "skills education, not therapy or diagnosis" statement; the urgent self-harm note is stated plainly.
- The Mehrabian "93% nonverbal" claim appears **only** as a debunk (M6). Methods are graded honestly: rejection practice / shame-attacking labeled practitioner/popular (mechanism sound); improv and self-compassion-for-social-anxiety labeled emerging/moderate; VR exposure and guided iCBT labeled strong. **No fabricated statistics or studies.** No diagnostic/medical claims.

## Verdict

**SHIP.** Schema valid, prose lint clean, voice and safety framing held, and the site builds green
(158 pages). Merging the branch to `main` triggers the GitHub Pages deploy.
</content>
