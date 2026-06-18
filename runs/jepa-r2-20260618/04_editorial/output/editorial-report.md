# Editorial report — JEPA (redo), Stage 04

Read all six modules as one book against `02_curriculum/output/canon.md`, `editorial-craft.md`,
and `course-design.md` ("When prose and pedagogy conflict"). Prose-only edits; all frontmatter,
`<details>` blocks, equations, pseudocode, and ASCII diagrams preserved except the canon-mandated
`\hat{g}` unification. M1 and M2 ship unchanged.

## 1. Notation unified

- **M5 — `\hat g` → `\hat{g}` (5 sites).** Lines 17, 20 (`\hat g_i` → `\hat{g}_i`), 26, 98, 114.
  The predicted representation now renders `\hat{g}` everywhere in inline/display math across the
  whole course. No double-braces introduced; the EMA equation and pseudocode untouched.
- **M3 ASCII/pseudocode glyph `ĝ` — kept.** The literal `ĝ` survives only inside the ```text
  architecture diagram (lines 29/31/32) and the ```python comments (lines 74/75), exactly where the
  brief permits it (renders as-is). No `ĝ` appears in M3 prose or math; M3 prose/math already used
  braced `\hat{g}`.
- **Cross-course symbol check passed:** `s`, `f_c`, `f_t`, `g`, `L`, `\tau`, `\theta_t`, `\theta_c`
  are consistent. `\theta_t/\theta_c/\tau` live in M5 (their owner) plus the M4 stretch mention;
  M6 calls the boxes back by name rather than re-introducing symbols (correct callback discipline).

## 2. De-soothed (lint checks 5–6)

- **M3 — cut the lone "quietly"** ("improve its score by ~~quietly~~ editing the answer key").
  This was the only soothing manner adverb in the course.
- **M4 — trimmed one soothing "simply"** ("the unpredictable detail is ~~simply~~ not there to be
  wrong about"). The one remaining minimizer (M4 "than simply learning the structure") does real
  contrastive work and stays — 1 minimizer course-wide, far under the soft cap of 10.
- Full sweeps now return **zero** soothing manner adverbs (check 5) and **zero** hand-holding
  phrases (check 6). Both hard gates pass with margin.

## 3. Prose ↔ pedagogy precedence applied (§7 / "When prose and pedagogy conflict")

**Protected (prose leads):**
- **M1 stakes opener** ("Here is the claim the entire course rests on… a bet about what machine
  intelligence should be doing with its attention") — left fully intact; not reduced to a mechanism.
- **M6 world-model / philosophical context** (LeCun's *Path Towards Autonomous Machine Intelligence*,
  the "what currency the model predicts in" argument, and the honest "the bet is live, and it could
  lose" close) — left at full length; density did not cut it.
- **Inter-module transitions** kept crafted — and repaired where one was *wrong*, not over-trimmed
  (see below).

**Trimmed/corrected (pedagogy leads):**
- **M3 → M4 seam fixed.** M3's recap said the stop-gradient thread "is where **M5 goes next**" —
  but M4 is next. Kept the crafted "the freeze is the door to the failure (M5)" thread (it's true),
  and added an honest hand-off to M4 ("First, though, M4 pays off the bet itself…"). A transition is
  prose-led, but it may not misstate the sequence.
- **M4 EMA mis-attribution fixed.** M4 twice credited the slow target update to "M3" ("via the EMA
  mechanism from M3", "EMA, as in M3"), but the canon assigns EMA to **M5** and M3 explicitly defers
  it. Re-cast both as "the slow target-update rule M3 flagged and M5 will detail" / "updated slowly,
  trailing the context encoder" — removes a false owner without teaching EMA early (the M4 stretch
  solution's lone forward `\tau` mention is clearly marked and left as-is).
- **Recap variety.** M1 and M5 both opened their forward-pointer with "The next module"; re-cast M5's
  to "M6 turns it loose on real data." Forward-pointers are now all distinct (M1 build / M2 embedded
  "in M3" / M3 "M5 takes up, first M4" / M4 "M5 takes up" / M5 "M6 turns it loose" / M6 terminal).

## 4. Whole-course checks

- **One voice** — sharp engineer-explainer throughout; no warm-clinic drift.
- **Openings vary, no collisions:** M1 claim · M2 computation (`0.04`) · M3 diagram · M4 contrast ·
  M5 failure mode · M6 instantiation (dog mid-leap). All six distinct.
- **The bet stated once (M1, "stated once") and only called back** — M2/M3 "M1 placed/made the bet",
  M6 "The course opened on this bet" (framing the world-model thesis, M6's owned context). No
  re-chant; banned chant-phrases ("the gist", "on the map", "not the pixels" as a refrain) absent.
- **Callbacks, not re-derivations** — M3 re-uses M2's distance ("M2's distance, now scoring a
  prediction"); M4/M6 call back the three boxes without re-drawing them; M6 calls back collapse+EMA
  in one line. The architecture is drawn once (M3).
- **Required artifacts all present:** M1 pipeline contrast diagram · M2 distance eqn + worked `0.04` ·
  M3 architecture diagram + loss eqn + forward/loss pseudocode · M4 predictable-vs-unpredictable split
  (numbers) · M5 numeric collapse + EMA eqn + EMA pseudocode · M6 image + video masking diagrams.

## 5. Metaphor & bridge audit

Modules use almost no analogies (canon's anti-carousel rule). The few images — "answer key,"
"behind the curtain," the dog-leap and thrown-ball examples — each point true and pay off into the
masking diagrams and the world-model thesis. Every definition is reached by a bridge (M2 distance→
M3 loss "Apply it" / "Read it back against the picture"; collapse and EMA both reached by connective
prose). No stranded or misleading metaphor found.
