---
seriesId: statistics-20260615
seriesSlug: statistics
seriesTitle: "Statistics, From the Ground Up"
audience: "A curious adult with no statistics background, comfortable with everyday arithmetic and basic high-school math (percentages, reading a simple chart). Motivated by everyday sense-making — news, health claims, polls, charts — not exams or data work."
assumedBackground: "Arithmetic and percentages; reading a basic chart; no calculus, no formulas to grind."
mode: autonomous
gates: [curriculum]
createdAt: 20260615
---

## Members

A series of *mini*-courses that share one vocabulary and one set of metaphors. The **Essentials**
course is authored first and owns the shared canon; the other two are standalone but authored against
it (call back to Essentials, never re-derive). `seriesSlug: statistics` is the `/series/statistics`
route, shared by all three members.

| slug | title | role | order | one-line scope |
|------|-------|------|-------|----------------|
| stats-essentials | "Statistics Essentials" | essentials | 1 | the shared language — data & variation, distributions, center & spread, sample vs. population, probability, signal vs. noise |
| making-sense-of-studies | "Making Sense of Studies" | course | 2 | reading statistical claims: the null, p-values, significance vs. importance, confidence intervals — and what they do NOT mean |
| lines-through-data | "Lines Through Data" | course | 3 | relationships between two things: scatter, correlation, the best-fit line, and why correlation isn't causation |

## Authoring order & ownership

- **Statistics Essentials** is produced first. Its curriculum stage writes the shared series-canon at
  `runs/statistics-20260615/series-canon.md`.
- **Making Sense of Studies** and **Lines Through Data** then run the normal pipeline, reading the
  series-canon as a binding L3 input; they reuse its shared terms/metaphors verbatim and call back to
  Essentials for shared concepts, re-grounded just enough to stand alone.

## Interpretation notes

- The shared spine the Essentials primer must establish: **variation is the subject of statistics**,
  and everything else (distributions, samples, probability, signal-vs-noise) is a tool for reasoning
  about variation. The two siblings are *applications* of that spine to (a) judging a claim and
  (b) reading a relationship.
- Genuinely shared (live in the series-canon): population, sample, variation, spread, center,
  distribution, probability, sampling variation, signal vs. noise, estimate, outlier; and the six
  shared metaphors. Course-local terms (e.g. "p-value", "correlation", "best-fit line") belong to one
  mini only and live in that mini's own `canon.md`.
- Each sibling must be takeable on its own: a reader who starts with *Lines Through Data* should be
  able to follow it via one-line callbacks to Essentials, not be blocked by them.
- **Honesty is the product.** The p-value and confidence-interval statements (research §5, Pitfalls
  #1–#3) must be exactly right; a memorable-but-wrong statement is the worst outcome. Paraphrase the
  ASA principles (do not quote verbatim — `[verify exact phrasing]`); use the ice-cream/drownings
  confounder and at most one Tyler Vigen example without citing specific figures (`[verify figures]`).
