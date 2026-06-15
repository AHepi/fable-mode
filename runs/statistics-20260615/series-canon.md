# Series-Canon — Statistics, From the Ground Up

The **series** consistency contract. Written by the **Statistics Essentials** course at its curriculum
stage, **binding** on both sibling mini-courses (*Making Sense of Studies*, *Lines Through Data*). One
vocabulary, one set of metaphors, one voice across all three. Decisive — one call per item.

> **Relationship to each member's `canon.md`.** This governs only the **shared** surface. Each mini
> still writes its own `runs/<member-id>/02_curriculum/output/canon.md` for internal module
> consistency and may add course-local terms/metaphors (e.g. "p-value", "correlation", "best-fit
> line") freely. On a shared concept, the series-canon wins.

## 1. Shared TERMS registry

One name per shared concept, reused **verbatim** by every member.

| Shared concept | Canonical name | Notes / member-local exceptions |
|----------------|----------------|---------------------------------|
| the whole group of interest | **population** | never "universe"/"the whole set" |
| the measured subset | **sample** | never "subset"/"selection" |
| the recorded measurements | **data** | treat as plural-ish but don't fuss ("the data show") |
| values differ from one another | **variation** | prefer over "variance"/"dispersion"; "variance" is a different technical term we never use |
| how wide the variation is | **spread** | "range" and "standard deviation" are *kinds* of spread, taught as ideas |
| a typical value | **center** | **mean** = balance point; **median** = middle value; pin "average" → **mean** on first use |
| the shape of the whole pile | **distribution** | the *shape*, not one summary number |
| how often in the long run | **probability** | always "in the long run, over many repeats" |
| sample-to-sample wobble | **sampling variation** | the seed of signal-vs-noise; not "sampling error" (avoid "error") |
| real pattern vs. random wobble | **signal vs. noise** | use this exact phrasing; the shared bridge between all three courses |
| a sample-based guess at a population value | **estimate** | always carries uncertainty; never spoken of as "the truth" |
| a value far from the rest | **outlier** | not "anomaly"/"freak value" |

"Average" is allowed as a plain-English synonym for **mean**, but pin it to "mean" on first use in
each course so it never silently implies "a typical person exists."

## 2. Shared METAPHOR map

The running images the whole series reuses. A sibling **references** these, it does not reinvent or
rename them. All six are established in *Statistics Essentials*.

| Image / metaphor | What it stands for | Guard (must NOT imply) | First established in |
|------------------|--------------------|------------------------|----------------------|
| **A crowd's heights** | a distribution — its shape, where the bulk sits, the rare extremes | don't collapse it to "the average height"; the shape is the point | Essentials, M1–M2 |
| **A seesaw balance point** | the **mean** (a few far-out values tilt it) | the **median** is NOT a balance point — it's the middle in line | Essentials, M2 |
| **Wobble / scatter around a center** | variation and spread; also sampling variation | the wobble is genuine, NOT a mistake or "error" | Essentials, M1 (reused M2–M3) |
| **A handful of beans from a big jar** | population (jar) vs. sample (handful); fair mixing = random sampling | a bigger handful does NOT fix a *biased* scoop; representativeness is about *how* you scoop | Essentials, M3 |
| **Many coin flips over a long evening** | probability as long-run frequency; Law of Large Numbers | the next flip is NOT influenced by the past; head/tail *counts* do not equalize | Essentials, M4 |
| **Signal through noise (radio static)** | a real pattern heard through random fluctuation | noise isn't fully removable; a faint "signal" may be imagined (false positive) | Essentials, M4 |

**Ownership is not endorsement.** Each image above passes the referent/payoff/bridge test. Note the
two highest-risk guards: the **seesaw is the mean only**, and **signal-through-noise must leave room
for false positives** (a pattern you "hear" may not be real) — both siblings lean on these.

## 3. Shared VOICE target

One warm, plain-spoken narrator who is *helping the reader not be fooled*. Everyday examples first
(headlines, polls, prices, weather), vocabulary second, careful caveats third — every idea lands in
plain words with a concrete example before any symbol or term appears. Honest about uncertainty;
never hypes "statistics proves"; never sacrifices precision for a neat line — especially on p-values
and confidence intervals, where the careful wording *is* the lesson. Curious and respectful: the
reader is smart and new, not naive. Calm, concrete, a little wry; no jargon without a plain gloss.

## 4. Owned-by-Essentials ledger

The shared concepts *Statistics Essentials* gives the full treatment. Both siblings **call back** to
these (a one-line reminder, re-grounded just enough to stand alone) — never re-derive them.

| Shared concept | Full treatment in | How siblings should call back |
|----------------|-------------------|-------------------------------|
| variation; spread | Essentials M1–M2 | "the variation — the wobble in real data — from the Essentials course" + one-line reminder |
| distribution; center (mean/median) | Essentials M2 | "a distribution (the shape of the whole pile), as in Essentials" |
| population / sample / estimate | Essentials M3 | "a sample is a handful from the jar; its numbers are estimates, not the truth" |
| sampling variation | Essentials M3 | "results wobble from one sample to the next — sampling variation" |
| probability as long-run frequency | Essentials M4 | "probability = how often in the long run, as in Essentials" |
| **signal vs. noise** | Essentials M4 | "telling real signal from random noise — the idea the Essentials course ends on" |

*Making Sense of Studies* is built on **sampling variation** and **signal vs. noise** (could this be
noise?). *Lines Through Data* is built on **variation** and **signal vs. noise** (is the trend signal
or noise?). Both must call back rather than re-teach these.
