# Series Research Dossier — "Statistics, From the Ground Up"

> Stage 01 (Research) planning artifact. Scopes the whole three-mini-course series for a reader
> with **no statistics background**. This is a planning dossier (facts, intuitions, misconceptions,
> metaphors), NOT prose for learners. Later stages cite the **Pitfalls list** (§7) as the honesty
> backbone and seed the series-canon from §3–§4.

Series shape:
1. **Statistics Essentials** — primer (~4 modules); establishes shared vocabulary + metaphors.
2. **Making Sense of Studies** — standalone (~3 modules); reading statistical claims.
3. **Lines Through Data** — standalone (~3 modules); relationships between two variables.

---

## 1. Audience & scope

**Reader profile.** A curious adult, comfortable with everyday arithmetic and basic high-school
math (fractions, percentages, reading a simple graph, plotting a point). No statistics background.
No calculus. Motivated by everyday sense-making — news headlines, health claims, polls, charts —
not by passing an exam or doing data analysis for work.

**The series ASSUMES:**
- Arithmetic fluency: averages by hand, percentages, ratios.
- Reading a basic chart: bar chart, dot/number line, simple x–y plot.
- Patience for careful wording (the payoff is not being fooled).

**The series DELIBERATELY EXCLUDES:**
- **Calculus** of any kind (no integrals, derivatives, "area under the curve" as calculus).
- **Heavy formulas.** Standard deviation, correlation, and regression are taught as *ideas*
  (what they capture, what makes them big/small), not as formulas to grind. Show at most one
  light formula per concept, and only when it clarifies the idea (e.g. mean = total ÷ count).
- **Computation drills.** No t-tables, no z-score arithmetic, no by-hand significance tests.
- **Probability theory beyond long-run frequency.** No combinatorics, no Bayes, no distributions
  as equations. Probability = "how often, in the long run."
- **Inference machinery details.** No degrees of freedom, no test statistics, no formula-level CIs.
  Concepts only: what the number means and what it does NOT mean.
- **Software / coding.** Conceptual only.

**Calibration principle.** Ideas over computation; intuition first, vocabulary second, careful
caveats third. Every concept should be expressible in plain words with a concrete everyday example
before any symbol appears. When precision and simplicity conflict on the inference concepts
(p-value, confidence interval), **precision wins** — a memorable-but-wrong statement is the worst
outcome for this series.

---

## 2. Shared foundations (for *Statistics Essentials*)

For each concept: core intuition (plain words), the most common misconception, and candidate
everyday metaphor(s) that point TRUE — with a guard noting any misleading association to avoid.

### 2.1 Data, and why it varies
- **Intuition:** Data is a record of measurements/observations. Real-world measurements differ
  from each other even when "the same thing" is measured — people differ, instruments wobble,
  conditions change. *Variation is the normal state of data, not an error.*
- **Misconception:** "If the numbers aren't all the same, something went wrong / someone made a
  mistake." Variation is treated as noise-to-be-eliminated rather than the subject itself.
- **Metaphor:** A class of students' heights — all real, all different, none "wrong."
  *Guard:* don't imply variation = measurement error; here the variation is genuine.

### 2.2 Distributions (shape)
- **Intuition:** A distribution describes how values are spread out — which values are common,
  which are rare, where the bulk sits, whether it's lopsided. It answers "what does the whole
  pile of numbers look like?" Key shapes: roughly symmetric/bell-like; skewed (a long tail one
  way); having outliers.
- **Misconception:** That a single summary number (an average) "is" the data; or that every
  distribution is bell-shaped/normal. Many real distributions (income, house prices) are skewed.
- **Metaphor:** A **crowd's heights** lined up shortest-to-tallest, or piled into bins — you
  *see* the shape. *Guard:* the shape is the point; don't collapse it to one number prematurely.

### 2.3 Center & spread
- **Intuition — center:** A typical/representative value. **Mean** = balance point (total shared
  out equally). **Median** = the middle value (half above, half below).
- **Intuition — spread:** How much values differ from each other / from the center. **Range** =
  biggest minus smallest (crude, outlier-sensitive). **Standard deviation** (as an idea) = a
  typical distance from the mean; "how wide is the wobble around the center."
- **Misconception 1:** Mean = median always. They diverge under skew/outliers; the mean is pulled
  toward the long tail / extreme values, the median resists them. (See Pitfall #4, §7.)
- **Misconception 2:** "The average describes a typical individual." An average can be a value no
  one actually has (e.g. average of 2.4 children), and with skew the mean may describe almost
  no one. (See §4 metaphor guard.)
- **Misconception 3:** Center alone is enough. Two groups can share a mean yet differ wildly in
  spread; spread is half the story.
- **Metaphor — center:** A **seesaw balance point** for the mean (a few heavy values far out
  tilt it). *Guard:* the median is NOT a balance point — it's the middle in line.
- **Metaphor — spread:** **Wobble / scatter** around the center.
  *Guard:* don't conflate spread (how different the values are) with error.

### 2.4 Sample vs. population
- **Intuition:** The **population** is everyone/everything we want to know about (often
  unmeasurable in full). A **sample** is the smaller group we actually measure. We use the sample
  to *estimate* facts about the population.
- **Misconception:** "The sample's number IS the population's number." A sample is a partial,
  imperfect window; its summaries are estimates, not the truth. Also: "bigger is always
  representative" — a large but *biased* sample (e.g. self-selected) is still misleading.
- **Metaphor:** A **handful of beans scooped from a big jar** — the handful tells you about the
  jar only if you scooped fairly (mixed first / random grab). *Guard:* a handful grabbed only
  from the top (convenience/biased sample) misleads no matter how big the handful.

### 2.5 Randomness & probability as long-run frequency
- **Intuition:** Probability = how often an outcome happens *in the long run* over many repeats.
  "50% chance of heads" means roughly half of *many* flips, not an alternation rule for the next
  flip. Each fair flip is independent — the coin has no memory.
- **Misconception — gambler's fallacy:** After a run of heads, tails is "due." False: a fair
  coin has no memory; each flip is still 50/50. The **Law of Large Numbers** says the *average*
  settles toward the expected value as trials pile up — by overwhelming new data, NOT by the past
  being "corrected." (See Pitfall #6, §7.)
- **Metaphor:** **Many coin flips over a long evening** — the *fraction* of heads drifts toward
  one-half as flips accumulate. *Guard:* it does NOT mean the count of heads and tails equalizes,
  and it says nothing about the very next flip.

### 2.6 Sampling variation (why a sample isn't the whole truth)
- **Intuition:** Different fair samples from the same population give different answers, purely by
  the luck of who got picked. This sample-to-sample wobble is *sampling variation*. It's why an
  estimate has uncertainty around it, and why "the poll said 52%" is never the exact truth.
- **Misconception:** "A difference between two samples must reflect a real difference in the
  world." Some differences are just sampling variation (noise). This is the seed of the
  signal-vs-noise idea that *Studies* and *Lines* both reuse.
- **Metaphor:** **Scoop two handfuls of beans from the same jar** — the two handfuls won't have
  the identical mix even though the jar didn't change. *Guard:* the jar (population) is fixed;
  the wobble is in the scooping (sampling), not in the world.

---

## 3. Candidate SHARED TERMS (seeds the series-canon)

One consistent name across all three courses. One-line gloss each.

| Term | Gloss (use consistently) |
|---|---|
| **population** | The whole group we want to know about (usually can't measure in full). |
| **sample** | The smaller group we actually measure, used to estimate the population. |
| **data** | The recorded measurements/observations themselves. |
| **variation** (prefer over "variance"/"dispersion") | The fact that values differ from one another. |
| **spread** | How wide the variation is around the center (range, standard deviation as ideas). |
| **center** | A typical value (mean = balance point; median = middle). |
| **distribution** | The full picture of which values are common vs. rare; the *shape* of the data. |
| **probability** | How often an outcome happens in the long run over many repeats. |
| **sampling variation** | The wobble in results from one fair sample to the next. |
| **signal vs. noise** | Real underlying pattern (signal) vs. random wobble (noise). |
| **estimate** | A sample-based guess at a population value; carries uncertainty. |
| **outlier** | A value far from the rest of the data. |

Reserve "average" as a plain-English synonym for **mean**, but always pin it to "mean" on first
use so it never silently means "typical person."

---

## 4. Candidate SHARED METAPHORS (3–6 reusable images)

Each: the one correct referent + its guard (what it must NOT imply). These should recur verbatim
across all three courses for continuity.

1. **Beans in a jar.** *Referent:* population (jar) vs. sample (handful); fair mixing = random
   sampling. *Guard:* must NOT imply a bigger handful fixes a *biased* scoop; representativeness
   comes from *how* you scoop, not just how much.

2. **A crowd's heights.** *Referent:* a distribution — the spread of values, its shape, where the
   bulk sits, where the rare extremes are. *Guard:* must NOT be collapsed to "the average height";
   the shape (skew, outliers, width) is the whole point.

3. **Wobble / scatter around a center.** *Referent:* variation and spread; also sampling variation
   (results wobble sample to sample). *Guard:* must NOT imply the wobble is a *mistake* or
   measurement error — it's genuine variation.

4. **Signal through noise (radio/static).** *Referent:* a real pattern (signal) heard through
   random fluctuation (noise); the core of inference and of regression's "trend line." *Guard:*
   must NOT imply noise is removable or that any pattern you "hear" is real — faint signals can be
   imagined (false positives).

5. **Seesaw balance point.** *Referent:* the **mean** as the tipping point of the data; a few
   far-out values tilt it. *Guard:* this is the MEAN only — the **median** is the middle-in-line,
   not a balance point; do not use the seesaw for the median.

6. **Many coin flips over a long evening.** *Referent:* probability as long-run frequency; the
   Law of Large Numbers (the *fraction* settles down). *Guard:* must NOT imply the next flip is
   influenced by past flips, nor that head/tail *counts* equalize (gambler's fallacy).

---

## 5. *Making Sense of Studies* — precise statements + misconceptions to target

Reuses sampling / distribution / sampling-variation from Essentials. ~3 modules.

### 5.1 Hypothesis / the null
- **Careful statement:** A study often starts by *assuming there is no real effect / no
  difference* — the **null hypothesis**. The test asks: *if there were truly no effect, how
  surprising would data like ours be?* The null is a starting assumption we try to find evidence
  against; we never "prove the null true."
- **Misconception:** "Failing to find an effect proves there is no effect." Absence of evidence
  ≠ evidence of absence. A non-significant result may mean no effect OR too little data to detect
  one.

### 5.2 p-value — the single highest-stakes concept
- **Standard definition (verified):** The p-value is **the probability of getting results at
  least as extreme as those observed, *assuming the null hypothesis (no effect) is true.*** It
  measures how *incompatible* the data are with the null model. *(ASA 2016, Principle 1.)*
- **What it IS NOT (verified against ASA 2016):**
  - It is **NOT** the probability that the null hypothesis is true, nor that the alternative
    ("there is an effect") is true. A p-value says nothing directly about the probability of any
    hypothesis. *(ASA Principle 2.)*
  - It is **NOT** "the probability the results are due to chance" in the loose everyday sense. It
    is a conditional probability *computed under the assumption that chance/the null is the whole
    story.*
  - It is **NOT** a measure of the *size* or *importance* of an effect. *(ASA Principle 5.)*
  - A threshold pass (e.g. p < 0.05) does **NOT** by itself justify a scientific or policy
    conclusion. *(ASA Principle 3.)* By itself a p-value is **not a good measure of evidence**
    about a hypothesis. *(ASA Principle 6.)*
- **ASA 2016 six principles (cite this; widely quoted verbatim):**
  1. P-values can indicate how incompatible the data are with a specified statistical model.
  2. P-values do not measure the probability that the studied hypothesis is true, or the
     probability that the data were produced by random chance alone.
  3. Scientific conclusions and business or policy decisions should not be based only on whether a
     p-value passes a specific threshold.
  4. Proper inference requires full reporting and transparency.
  5. A p-value, or statistical significance, does not measure the size of an effect or the
     importance of a result.
  6. By itself, a p-value does not provide a good measure of evidence regarding a model or
     hypothesis.
- **Plain-words framing for the course:** "A small p-value means: *data like this would be
  surprising if nothing were really going on.* It does NOT tell you how likely it is that
  something IS going on, nor how big it is."

### 5.3 Statistical significance ≠ practical importance
- **Careful statement:** "Statistically significant" only means the result is unlikely under the
  null — it is a statement about *detectability given the data*, not about *magnitude or
  real-world value*. With a large enough sample, a trivially small effect can be "significant";
  with a small sample, a large real effect can miss "significance."
- **Misconception:** "Significant = big / important / matters." Conflates a low p-value with a
  meaningful effect size.
- **p-hacking (color only — keep light):** trying many analyses/subgroups/cutoffs and reporting
  only the combination that crossed p < 0.05. Because each extra test is another roll of the dice,
  hunting through many comparisons manufactures "significant" flukes (the multiple-comparisons
  problem). Mention as a cautionary aside, not a technical module.

### 5.4 Confidence intervals — second highest-stakes concept
- **Careful statement (verified):** A 95% confidence interval is a *range estimate* produced by a
  procedure with a long-run property: **if you repeated the whole sampling-and-interval-building
  process many times, about 95% of the intervals produced would contain the true population
  value.** The "95%" describes the *method's* long-run success rate, not this one interval.
- **What it IS NOT (verified):** It is **NOT** correct to say "there is a 95% probability the true
  value lies in THIS particular interval." Once computed, a specific interval either contains the
  true value or it doesn't (we just don't know which); the probability is about the procedure
  across many repeats, not about the single realized interval.
- **Plain-words framing:** "95% confidence is a batting average of the *method*: over many studies,
  95% of such intervals catch the truth. For your one interval, you don't get to attach a 95%
  probability to it." A CI also conveys *precision* — a wide interval = lots of uncertainty.
- **Misconceptions to target:** (a) the "95% chance the truth is in this interval" misreading;
  (b) "values outside the interval are impossible / values inside are equally likely"; (c) "a CI
  that includes zero proves there is no effect" (same absence-of-evidence trap as 5.1).

---

## 6. *Lines Through Data* — precise statements + misconceptions (vetted examples)

Reuses variation and signal-vs-noise from Essentials. ~3 modules.

### 6.1 Scatter (two variables)
- **Intuition:** Plot each subject as a point (x, y). The *cloud* of points shows whether the two
  measurements tend to move together, move oppositely, or show no pattern.
- **Misconception:** A few eye-catching points "make" a trend; or that any cloud has a meaningful
  line. Some clouds are just blobs (no relationship).

### 6.2 Correlation
- **Careful statement (verified):** Correlation (the coefficient *r*) summarizes the *strength and
  direction of a **linear** relationship* between two variables, on a scale from −1 to +1.
  +1 = perfect upward straight-line relationship; −1 = perfect downward; 0 = no *linear*
  relationship. The closer to ±1, the more tightly the points hug a straight line.
- **Misconceptions to target:**
  - "Correlation 0 means no relationship at all." It means no *linear* relationship — a strong
    *curved* relationship (e.g. U-shaped) can have r near 0.
  - "High correlation = strong/important effect." r measures tightness around a line, not slope
    steepness or real-world magnitude.
  - Outliers can inflate or fake a correlation; a single far point can swing r a lot.

### 6.3 The regression / best-fit line (as an idea)
- **Careful statement (verified):** The best-fit (least-squares) line is the single straight line
  that comes closest to all the points at once — specifically, the line that makes the *vertical
  misses* (point to line) as small as possible overall (it minimizes the sum of the squared
  vertical distances). It's a *summary* of the trend and a tool for describing/predicting the
  average y for a given x. Teach as concept; do NOT derive least squares.
- **Misconceptions to target:**
  - "The line passes through the points / predicts individuals exactly." It describes the
    *average* trend; real points scatter around it (signal vs. noise again).
  - **Extrapolation:** "The line works for x-values far outside the data." Predicting well beyond
    the observed range is unreliable — the pattern may not continue.
  - "A fitted line means the relationship is causal/real." A line can be fit to noise.

### 6.4 Correlation ≠ causation (the headline of this course)
- **Careful statement:** Two variables moving together does NOT mean one causes the other. The
  link may be coincidence, reverse causation, or driven by a **lurking/confounding variable** —
  a third factor that influences both.
- **Vetted classic examples:**
  1. **Ice cream sales & drownings.** Strongly correlated, but neither causes the other — both
     rise with the lurking variable **hot summer weather** (more swimming → more drownings; more
     heat → more ice cream). The cleanest teaching example of a confounder; verified standard.
  2. **Tyler Vigen "Spurious Correlations"** (e.g. US cheese consumption vs. deaths by becoming
     tangled in bedsheets; margarine consumption vs. Maine divorce rate; Nicolas Cage film
     appearances vs. swimming-pool drownings). Use as memorable, obviously-coincidental
     correlations to show that a high correlation can be pure chance. Source: Vigen,
     *Spurious Correlations* (2015) and tylervigen.com. Use 1 ice-cream example + 1 Vigen example;
     don't over-list.
- **Lurking-variable idea:** Name it explicitly and reuse the term; tie back to "signal vs. noise"
  and to confounding mentioned in *Studies*.

---

## 7. Pitfalls list (the honesty backbone — later stages cite by number)

Format: *Don't say X / careful version Y.*

1. **p-value.** Don't say "the p-value is the probability the null (no effect) is true" or
   "...the probability the result is just chance." Careful: it's the probability of data at least
   this extreme *assuming* the null is true; it does not give the probability of any hypothesis.
2. **Significance ≠ importance.** Don't say "statistically significant means the effect is big /
   important / real-world meaningful." Careful: significance is about detectability under the
   null, not effect size; significance and importance are separate questions.
3. **Confidence interval.** Don't say "there's a 95% probability the true value is in THIS
   interval." Careful: 95% is the long-run success rate of the *method* — about 95% of intervals
   built this way capture the truth across many repeats; a given interval either does or doesn't.
4. **Mean vs. median.** Don't say "the average is the typical value" for skewed data. Careful:
   with skew/outliers the mean is pulled toward the tail; the median better reflects the typical
   value, and an average may match no real individual.
5. **Sample = truth.** Don't say "the sample's number is the population's number." Careful: a
   sample yields an *estimate* with sampling variation; a biased sample misleads regardless of
   size.
6. **Long-run frequency vs. gambler's fallacy.** Don't say "after a run of heads, tails is due."
   Careful: independent fair trials have no memory; the Law of Large Numbers means the *long-run
   fraction* settles toward expectation, not that short-run counts get "corrected."
7. **Correlation ≠ causation.** Don't say "X and Y are correlated, so X causes Y." Careful: the
   link may be coincidence, reverse causation, or a lurking/confounding variable affecting both.
8. **Correlation = 0.** Don't say "zero correlation means no relationship." Careful: it means no
   *linear* relationship; a strong curved pattern can have r ≈ 0.
9. **Regression line.** Don't say "the line predicts each individual" or "the line works for any
   x." Careful: it summarizes the *average* trend; points scatter around it, and extrapolating
   beyond the data is unreliable.
10. **Absence of evidence.** Don't say "no significant result proves there's no effect." Careful:
    a null/non-significant result can mean no effect OR insufficient data; you can't prove the
    null.
11. **Normal-by-default.** Don't assume/say every distribution is bell-shaped. Careful: many real
    distributions (income, prices, wait times) are skewed or have outliers.
12. **Average implies a typical person.** Don't let "the average X" imply a real individual sits at
    that value. Careful: an average is a summary, possibly held by no one (e.g. 2.4 children).

---

## 8. Sources

All verified via web search June 2026 unless marked `[verify]`.

- **ASA Statement on p-Values (2016).** Wasserstein, R.L. & Lazar, N.A. (2016), "The ASA Statement
  on p-Values: Context, Process, and Purpose," *The American Statistician*, 70(2), 129–133.
  DOI: 10.1080/00031305.2016.1154108. Source of the six principles and the "what a p-value is not"
  statements. (Open summaries: ASA *Amstat News* announcement, Mar 2016; Berkeley open PDF copy
  at stat.berkeley.edu/~aldous/Real_World/ASA_statement.pdf. The six principles as worded above
  are the canonical, widely-quoted form.)
- **p-value definition & ASA principles (corroboration).** Wikipedia, "P-value"
  (en.wikipedia.org/wiki/P-value) — standard definition and ASA-principle summary; consistent with
  the primary source.
- **Confidence interval interpretation.** Wikipedia, "Confidence interval"; Lakens, D. (2016),
  "The difference between a confidence interval and a capture percentage" (The 20% Statistician);
  Gelman, A. (2019), "No, it's not correct to say you can be 95% sure the true value is in the
  confidence interval" (statmodeling.stat.columbia.edu); Penn State STAT 200 §4.2.1. All agree on
  the long-run-coverage (method-level) reading vs. the single-interval misreading.
- **Mean vs. median under skew/outliers.** Statistics By Jim, "Measures of Central Tendency" and
  "Mean vs. Median"; Laerd Statistics, "Measures of Central Tendency"; Penn State STAT 200 §2.2.4.1
  (skewness & central tendency). Consistent: mean is pulled toward the tail; median is robust.
- **Statistical significance vs. practical importance; p-hacking.** Statistics By Jim, "P-Hacking";
  DataCamp, "P-Hacking"; Gelman & Loken, "The garden of forking paths." Consistent with ASA
  Principles 3 & 5.
- **Null hypothesis significance testing (plain language).** Lakens / open NHST tutorials
  (PMC5635437, "Null hypothesis significance testing: a short tutorial"); RUG OpenTextbooks,
  "Understanding Null Hypothesis Testing."
- **Correlation, least-squares regression line.** Statistics By Jim, "Interpreting Correlation
  Coefficients" and "Least Squares Regression Line"; Lumen Learning, "The Regression Equation."
  Consistent on r in [−1,1] (linear, strength+direction) and least-squares = minimize squared
  vertical distances.
- **Correlation ≠ causation, classic examples.** Ice cream/drownings + lurking variable (summer):
  Seattle Times "Ice cream doesn't cause drowning"; Wikipedia "Spurious relationship." Tyler Vigen,
  *Spurious Correlations* (Hachette, 2015) and tylervigen.com — cheese/bedsheets, margarine/Maine
  divorce, Nicolas Cage films/pool drownings.
- **Law of Large Numbers vs. gambler's fallacy.** Index Fund Advisors, "Gambler's Fallacy: Misuse
  of the Law of Large Numbers"; standard probability references. Consistent: independent trials
  have no memory; LLN concerns the long-run average/fraction, not short-run "correction."

**`[verify]` flags / disagreements:**
- No substantive source disagreements found. All consulted sources agree on the p-value and
  confidence-interval careful statements (this was the main risk and it is clean).
- The ASA six principles are reproduced in their canonical widely-quoted wording; the primary
  paper (Tandfonline, DOI above) was paywalled to the fetcher (HTTP 403) and the Berkeley PDF did
  not parse as text, but the wording was cross-checked against multiple secondary sources that
  quote them verbatim. Treat exact wording as standard; if a verbatim quote is published in the
  course, re-pull from the open *Amstat News* page or the DOI. `[verify exact phrasing only]`
- Tyler Vigen example *figures/years* (e.g. specific date ranges) are illustrative; if a specific
  Vigen chart is cited with numbers, re-confirm from tylervigen.com. `[verify specific figures]`
