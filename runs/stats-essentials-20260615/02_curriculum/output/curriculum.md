# Curriculum — Statistics Essentials (series: Statistics, From the Ground Up · role: essentials)

The **Essentials primer** of the series. It owns the shared canon (`runs/statistics-20260615/series-canon.md`):
the vocabulary and the six metaphors the other two minis reuse. Small by design — one idea-cluster:
**variation is the subject of statistics, and everything else is a tool for reasoning about it.**

## Course metadata (for `_course.md`)

- **title:** Statistics Essentials
- **description:** The shared language of statistics, built from scratch — how data varies, what a distribution and an average really say, why a sample is only a handful from the jar, and how to tell a real signal from random noise.
- **level:** intro
- **kind:** stem  *(light math only — ideas, not formulas to grind; at most one simple formula per concept)*
- **prerequisites:** everyday arithmetic and percentages; reading a simple chart; (no calculus, no formulas required)
- **tags:** [statistics, data, probability, variation, distributions, essentials]
- **estimatedHours:** 1
- **series:** `{ slug: statistics, title: "Statistics, From the Ground Up", role: essentials, order: 1, blurb: "A short primer that gives every other course in this series its shared language." }`

## Prerequisite graph

M1 → M2 → M3 → M4 (strictly linear). M2 builds on M1's *variation*; M3's *sampling variation* builds
on M2's *distribution*; M4's *signal vs. noise* builds on M3's *sampling variation*. No forward refs.

## Modules

### M1 — The World Wobbles  ·  slug `01-data-and-variation`  ·  ~12 min
- **summary:** Why real measurements never come out all the same — and why that variation is the subject of statistics, not a mistake to erase.
- **objectives:** (1) Say what data is and why genuine measurements vary. (2) Recognize variation as the thing statistics studies, not error. (3) Spot an outlier and say why it's not automatically "wrong."
- **owns (shared):** terms *data, variation, outlier*; introduces the **crowd's heights** and **wobble/scatter** metaphors.
- **prereqs:** none.

### M2 — The Shape of a Pile of Numbers  ·  slug `02-distributions-center-spread`  ·  ~16 min
- **summary:** How a whole pile of numbers has a shape, and what an "average" and a "spread" actually tell you — including when the average quietly lies.
- **objectives:** (1) Describe a distribution as the *shape* of the data (where the bulk sits, the tails, skew). (2) Distinguish **mean** (balance point) from **median** (middle), and say when each misleads (skew/outliers). (3) Explain **spread** as how wide the wobble is, and why center alone is half the story.
- **owns (shared):** terms *distribution, center (mean/median), spread*; the **seesaw balance point** (mean) metaphor; Pitfalls #4 (mean vs. median), #11 (not all bell-shaped), #12 (average ≠ a real person).
- **prereqs:** M1.

### M3 — A Handful from the Jar  ·  slug `03-sample-and-population`  ·  ~14 min
- **summary:** Why we almost never measure everyone — and what it costs us: a sample is one handful from a big jar, and two fair handfuls never match exactly.
- **objectives:** (1) Distinguish **population** from **sample**, and explain why sample numbers are **estimates**, not the truth. (2) Explain **sampling variation** (fair samples disagree by luck of the draw). (3) Explain why a *biased* sample misleads no matter how large.
- **owns (shared):** terms *population, sample, estimate, sampling variation*; the **beans in a jar** metaphor; Pitfall #5 (sample ≠ truth).
- **prereqs:** M1, M2.

### M4 — The Long Run  ·  slug `04-probability-and-noise`  ·  ~14 min
- **summary:** What "a 70% chance" really means, why a coin has no memory, and the idea the whole series turns on: telling a real signal from random noise.
- **objectives:** (1) State **probability** as long-run frequency over many repeats. (2) Explain the gambler's fallacy and how the Law of Large Numbers actually works (the long-run *fraction* settles; counts don't "correct"). (3) Articulate **signal vs. noise** — real pattern vs. random wobble — as the bridge to the rest of the series.
- **owns (shared):** terms *probability, signal vs. noise*; the **many coin flips** and **signal through noise** metaphors; Pitfall #6 (gambler's fallacy).
- **prereqs:** M3.

## Notes for authoring
- Binding consistency contracts: `runs/statistics-20260615/series-canon.md` (shared) + this course's
  `canon.md` (internal). This course **establishes** the shared metaphors — author them so siblings can
  reference them by name.
- Math dosage: at most one light formula per concept (mean = total ÷ count is the only one that earns
  its place). Standard deviation, etc., stay verbal.
