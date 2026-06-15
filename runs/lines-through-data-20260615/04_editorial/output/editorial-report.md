# Editorial Report — Lines Through Data (Stage 04)

One-book edit of the 3-module standalone sibling mini, read end to end in order against:
the series-canon (`runs/statistics-20260615/series-canon.md`), the internal canon
(`02_curriculum/output/canon.md`), the research source-of-truth (`series-research.md` §6 +
Pitfalls #7–#9), and `_config/voice/literary-maverick.md`.

## Verdict

The three authored modules already satisfy every clause of the stage contract and both canons.
The whole-course read surfaced **no prose change that would improve any axis without sanding off
voice** — the "correct number of rewrites is zero" case the voice guide names, applied at module
scale. The edited modules are therefore identical to the stage-03 drafts (math/formal content and
frontmatter untouched, as the contract mandates). This report documents the audit that justifies
shipping them unchanged.

## Per-module one-line change summary

- **01 — Two Things at Once (scatter & correlation):** no changes. Owns scatter plot, the cloud,
  and correlation (linear, −1 to +1); the curved/U-shape "zero ≠ no relationship" trap and the
  outlier-inflation case are correct and intact.
- **02 — The Line Through the Cloud (best-fit line):** no changes. Best-fit line taught as an idea
  (vertical misses, no least-squares derivation), averages-not-individuals, and the extrapolation
  caution all present and accurate; callbacks to M1, no re-derivation.
- **03 — Together Isn't Because (correlation ≠ causation):** no changes. Coincidence / reverse /
  lurking variable with the ice-cream/drownings confounder; one qualitative Vigen-style example
  with no invented figures; headline owned here.

## Accuracy (vs. research §6 + Pitfalls #7–#9) — confirmed

- **Correlation (M1):** stated as strength + direction of a *straight-line* relationship on −1 to
  +1; "zero means no *linear* relationship" qualified every time, with the symmetric-curve caveat
  kept (smile/arch). Matches Pitfall #8. Outlier swing kept (research §6.2).
- **Best-fit line (M2):** minimizes vertical misses, summary of the *average* trend, predicts
  average y not individuals, extrapolation unreliable. Taught as an idea — squared misses mentioned
  only as "a tool's job," **no least-squares derivation**. Matches Pitfall #9.
- **Causation (M3):** correlation ≠ causation via coincidence / reverse / lurking variable; the
  ice-cream/drownings confounder is hot summer weather. Matches Pitfall #7. **Never** says "proves
  causation."

## No invented figures — confirmed

- M3's Vigen-style example is deliberately figure-free: "a nation's cheese consumption, a rare
  cause of death, some economy's yearly output," with the explicit guard "The joke is the shape of
  the curves, not any particular numbers or years." No fabricated correlation values, dates, or
  series anywhere.
- Spot illustrative numbers that appear (e.g. "+0.85", "near +0.2", "at 20 degrees, ~50 drinks")
  are clearly framed as *read-the-picture* exemplars, not claimed real-world data. The two
  source-of-truth examples (ice-cream/drownings, firefighters/damage) carry no invented statistics.

## Causation examples clean (bias-screened) — confirmed

Ice-cream/drownings (→ weather), firefighters/damage (→ fire size), night-light/nearsightedness
(→ parents' eyesight, handled non-stigmatizingly), TVs/life-expectancy (→ national wealth),
libraries/test-scores (→ school funding / community wealth). All neutral, none stigmatizing a group.

## Cross-references — how "(M1)/(M2)" was handled

The stage-03 drafts had **already** converted every internal pointer to natural language; a
grep for literal `(M1)`/`(M2)` tokens returns zero matches. The learner never sees a module code.
References read as: "Last time, you plotted…", "the best-fit line we met earlier", "the line
through the cloud", "just as we did earlier", "the subject of a later module". Confirmed and left
intact.

## Series alignment — confirmed

- Shared terms reused verbatim: **variation**, **signal vs. noise**, **outlier**, **data**.
- One-line self-contained callbacks to Essentials: variation ("the wobble… the normal state of
  data, not a mistake") and signal vs. noise ("the idea the Essentials course ends on"). Neither is
  re-derived.
- The shared **signal through noise** metaphor is reused by name in all three modules with the
  course-local mapping: trend/line = signal, scatter = noise.

## Dedup / caps / variety — results

- "**correlation isn't causation**" (headline): exactly **1** verbatim, in M3. ✓
- "lurking variable (also called a confounder)": glossed exactly **once**, M3. ✓
- "tempting wrong answer": M2 ×1, M3 ×1 — ≤1 per module. ✓
- "move together": **1** literal occurrence total (M1 recap); varied elsewhere as rise together /
  track each other / move oppositely. ✓
- Banned terms — "magic", hype, "proves causation": **none**. ✓
- Ownership held: scatter/cloud + correlation owned by M1; best-fit line owned by M2 (M3 calls
  back, never re-derives). ✓
- Hooks and recaps varied: M1 opens on raw columns "refusing to talk" / closes pointing to drawing
  the line; M2 opens "Last time…" / closes on "where the trouble starts"; M3 opens on the headline
  / closes on "the refusal to be fooled." No template-stamping.

## Metaphor & bridge audit (semantic read) — results

- **Cloud/swarm (M1)** points true: explicit guard present — "not every cloud has a line worth
  drawing… a round blob is a real and honest answer." Does not imply every cloud has a meaningful
  line. ✓
- **Line-through-the-swarm (M2)** points true: explicit guard — "it does not try to touch the
  individual points… passes through almost none of them. That is expected, not a flaw." Does not
  imply the line passes through individual points. ✓
- **M3** adds no new running image (per the metaphor map); uses ice-cream/drownings as the worked
  case, with the confounder rendered as "one hand raising two puppets" — points true to a hidden
  common cause. ✓
- **Bridges:** every formal/definitional statement is reached by an intuition→definition bridge
  that decodes it piece by piece (M1 "The bridge is direct…"; M2 "Read that against the picture,
  piece by piece"; M3 the three alternatives each grounded before the term). No definition lands
  as a cliff. ✓

## Integrity — confirmed

- Each file ends on its **Recap**; no leaked stage tags or scaffolding labels.
- No stray `$` anywhere (stem course written in plain text: "x", "y", "r", "−1 to +1"). ✓
- Frontmatter preserved byte-for-byte: quoted colon strings (M3 title, summaries, objectives) kept
  quoted; `prerequisites` carry full slugs (`01-scatter-and-correlation`,
  `02-the-best-fit-line`). ✓
- Math/formal content untouched (no canon-required symbol unification was needed — this course
  uses plain-text symbols and owns its course-local terms cleanly).

## No leaked fragments introduced

This pass introduced zero edits, hence zero risk of leaked fragments; the shipped modules are the
verified stage-03 drafts.
