# Editorial Report — Statistics Essentials (Stage 04)

One-book edit of the 4-module Essentials primer, for a reader with no statistics background.
This course **owns** the shared series contract (`series-canon.md`), so the edit holds it to that
contract exactly: shared terms named verbatim, all 6 shared metaphors established cleanly with their
guards, voice set as the friendly baseline the siblings inherit.

Prose-only pass. The one formal block (M2's `mean = total ÷ count` KaTeX) is byte-for-byte intact and
valid. No definition, worked example, or numeric content was altered.

## Per-module change summary

- **M1 — The World Wobbles** (`01-data-and-variation.md`): No changes needed. Spine line "variation
  is the subject of statistics" lands once (verbatim, M1 body), the crowd's-heights and wobble/scatter
  images are established cleanly with their guards (wobble is genuine, not error), outlier introduced
  with the "far from the rest ≠ wrong" guard. Hook (second-person scale experiment) and forward-promise
  recap left as the strong, distinct openers/closers of the set. Copied through unchanged.

- **M2 — The Shape of a Pile of Numbers** (`02-distributions-center-spread.md`): Removed three leaked
  cross-references to a nonexistent numbered catalog — "(This is Pitfall #4 in action…)", "(Pitfall
  #12)", "(Pitfall #11)" — which arrived cold and pointed at nothing in this course; the substance of
  each sentence was preserved (e.g. "Under skew, the mean is the misleading 'typical' and the median is
  the honest one."). Reshaped the recap's closing move so it no longer echoes M1's plain "next, we
  give that pile a shape" formula: it now lands on the image of the pile being a handful scooped from
  something larger ("the crack the next module pries open"), keeping the hand-off to M3 smooth.

- **M3 — A Handful from the Jar** (`03-sample-and-population.md`): Updated the opening callback to M2
  so it matches M2's revised recap and tagged the callback ("its shape, its center, how wide it
  scatters (M2)" → "every pile we study is really a handful scooped from something far larger") —
  remind-don't-rederive, one line. No other changes; jar/handful and sampling-variation images and
  their guards (bigness can't cure a biased scoop; the wobble lives in the scooping, not the jar) were
  already clean.

- **M4 — The Long Run** (`04-probability-and-noise.md`): Removed the one leaked catalog reference
  "(Pitfall #6)", preserving the gambler's-fallacy diagnosis intact. No other changes; the coin-flips
  and signal-through-noise images are established with both high-risk guards honored (counts don't
  equalize / next flip has no memory; noise never fully clears AND a faint "signal" may be a false
  positive). Course-ending recap ("You now have the ear for both") left as the one non-forward close.

## Metaphor & bridge audit (semantic read, result)

All six shared metaphors point true, are paid off, and honor their guards:

1. **Crowd's heights** (M1–M2) — distribution/variation; not collapsed to "the average height," the
   shape is repeatedly the point. PASS.
2. **Seesaw balance point** (M2) — the mean ONLY. The guard is stated explicitly: "The seesaw is the
   mean. The median is the middle-in-line — don't put it on the plank." The median is consistently
   described as a position in a line, never on the plank. PASS (highest-risk guard held).
3. **Wobble / scatter around a center** (M1, reused M2–M3) — variation, spread, sampling variation;
   guard "the wobble is genuine, not error" is stated in M1 and re-asserted in M3. PASS.
4. **Handful of beans from a jar** (M3) — population vs. sample; guard "a bigger handful does NOT fix a
   biased scoop; representativeness is about how you scoop" gets its own full section. PASS.
5. **Many coin flips over a long evening** (M4) — probability as long-run frequency / Law of Large
   Numbers; guards "next flip has no memory" and "counts need not equalize, only the fraction" are both
   developed at length. PASS.
6. **Signal through noise (radio static)** (M4) — real pattern vs. random wobble; guard "noise isn't
   fully removable" AND "a faint signal may be imagined (false positive)" both explicit and worked
   through exercises. PASS (highest-risk guard held).

**Bridges (definition seams):** every plain-words definition is reached by intuition→bridge, none
arrives cold. The one KaTeX definition (M2 mean) is introduced in words first ("add up all the values
and divide by how many there are"), then the formula, then decoded ("total shared out equally, as if
everyone got the same") and handed straight to the seesaw image. PASS.

No broken or abandoned metaphors found; no course-local image competes with a shared one.

## Check confirmations (all hold)

- **Shared terms** — population, sample, data, variation, spread, center/mean/median, distribution,
  probability, sampling variation, signal vs. noise, estimate, outlier all used verbatim per the
  series-canon. "Average" pinned to "mean" on first formal use (M2: "the **mean**, the everyday
  **average**"); M1's earlier uses are colloquial plain English before center/mean is taught.
  "Standard deviation" named exactly once (M2) as an idea ("a typical distance from the mean"), then
  "spread" thereafter. No banned siblings ("variance," "dispersion," "anomaly," "sampling error,"
  "universe," "subset") used for shared concepts.
- **Callbacks, not re-derivations** — M2→M1 (variation/wobble), M3→M1+M2 (shape (M2), wobble (M1)),
  M4→M3 (sampling variation, sample/estimate). Each is a one-line reminder; no owned fact is
  re-derived downstream.
- **Phrase caps** — spine line "variation is the subject of statistics" exactly once in body (M1);
  "A tempting wrong answer:" appears once total (M4 heading), ≤1 per module; no "magic"/hype, no
  anthropomorphized data, no "proves."
- **Varied edges** — 4 distinct hooks (scale experiment / crowd callback / poll-quote / coin scene);
  4 distinct recap closes (M2 and M3 reshaped so the four no longer share one "Next we…" formula);
  M1→M2→M3→M4 hand-offs smooth.
- **Integrity** — every file ends cleanly on its recap; no leaked tags (`</content>`, `</invoke>`,
  `<parameter>`); no stray `$` (only M2's legitimate `$$…$$`); money is in words ("dollars"),
  percentages use "percent"/"%". Frontmatter preserved: colon-space summaries stay double-quoted;
  prerequisites are full module slugs matching the real filenames.
