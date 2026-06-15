# Curriculum — Making Sense of Studies (series: Statistics, From the Ground Up · role: course)

A standalone sibling mini. Reads `runs/statistics-20260615/series-canon.md` as binding: it reuses the
shared terms/metaphors and **calls back** to Essentials for *sampling variation* and *signal vs.
noise* rather than re-deriving them. Takeable on its own via one-line reminders. One idea-cluster:
**how to judge whether a study's result could just be chance — and what the famous numbers do NOT mean.**

## Course metadata (for `_course.md`)

- **title:** Making Sense of Studies
- **description:** How to read the statistics behind a headline — what a p-value and a confidence interval actually claim, why "significant" doesn't mean "big," and the careful wording that keeps you from being fooled.
- **level:** intro
- **kind:** stem  *(light math only; this course is about careful meaning, not calculation — no test arithmetic)*
- **prerequisites:** comfort with percentages and the idea that samples vary (the **Statistics Essentials** mini is the ideal warm-up but not required)
- **tags:** [statistics, p-value, significance, confidence-interval, studies, inference]
- **estimatedHours:** 0.8
- **series:** `{ slug: statistics, title: "Statistics, From the Ground Up", role: course, order: 2 }`

## Prerequisite graph

M1 → M2 → M3 (linear). All three call back to Essentials' **sampling variation** and **signal vs.
noise**. M2 builds on M1's p-value; M3 (confidence intervals) builds on M1–M2's "could this be chance."

## Modules

### M1 — Could This Just Be Chance?  ·  slug `01-could-this-be-chance`  ·  ~16 min
- **summary:** The question every study secretly asks — if nothing were really going on, would data like this be surprising? — and the number that answers it, stated carefully.
- **objectives:** (1) Explain the **null hypothesis** (start by assuming no real effect). (2) State correctly what a **p-value** is: the chance of data at least this extreme *if the null were true*. (3) State what a p-value is **not** (not the probability the null/“no effect” is true; not "the probability it's just chance").
- **owns (course-local):** terms *null hypothesis, p-value, statistically significant* (intro); Pitfall #1.
- **calls back:** *sampling variation* and *signal vs. noise* (Essentials M3–M4) — "could this gap be just noise?"
- **prereqs:** none (callbacks self-contained).

### M2 — Significant Isn't the Same as Big  ·  slug `02-significant-vs-important`  ·  ~14 min
- **summary:** Why a "statistically significant" result can be trivially small, why hunting through many tests manufactures fake findings, and why "no effect found" never proves there's no effect.
- **objectives:** (1) Distinguish **statistical significance** (detectability under the null) from **practical importance** (effect size / real-world value). (2) Explain in plain terms how testing many things manufactures flukes (p-hacking, kept light). (3) Explain why a non-significant result doesn't prove the null (absence of evidence ≠ evidence of absence).
- **owns (course-local):** Pitfalls #2 (significance ≠ importance), #10 (absence of evidence).
- **calls back:** *signal vs. noise* (a big sample can make a faint signal "significant").
- **prereqs:** M1.

### M3 — A Range, Not a Point  ·  slug `03-a-range-not-a-point`  ·  ~14 min
- **summary:** Why a good study reports a range instead of a single number — and the subtle, much-misquoted meaning of "95% confident."
- **objectives:** (1) Interpret a **confidence interval** via long-run coverage (about 95% of intervals built this way capture the truth — a batting average of the *method*). (2) Identify the common misreading ("95% chance the true value is in *this* interval") and why it's wrong. (3) Read interval **width** as precision, and connect a CI that includes "no effect" to M2's absence-of-evidence point.
- **owns (course-local):** term *confidence interval*; Pitfall #3.
- **calls back:** *estimate* and *sampling variation* (Essentials M3) — the interval is built around an estimate that wobbles.
- **prereqs:** M1, M2.

## Notes for authoring
- **Highest-stakes accuracy in the whole series.** The p-value (M1) and confidence-interval (M3)
  statements must match research §5 exactly. Paraphrase the ASA principles; do **not** quote verbatim.
- Binding contracts: `runs/statistics-20260615/series-canon.md` + this course's `canon.md`.
