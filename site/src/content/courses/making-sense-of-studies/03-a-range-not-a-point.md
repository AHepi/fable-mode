---
title: "A Range, Not a Point"
course: making-sense-of-studies
order: 3
summary: "Why a careful study reports a range instead of a single number, and the much-misquoted meaning of a 95% confidence interval."
estimatedMinutes: 14
objectives:
  - "Explain why an estimate is reported as a confidence interval rather than a single number."
  - "State correctly what a 95% confidence interval means: a long-run success rate of the method, not a probability about one interval."
  - "Identify the common misreading of a confidence interval and explain why it is wrong."
  - "Read the width of an interval as a measure of precision, and connect an interval that includes 'no effect' back to the absence-of-evidence idea from the previous module."
prerequisites: [01-could-this-be-chance, 02-significant-vs-important]
---

A headline says a poll puts a candidate at 52%. Read it twice and the number starts to feel too clean. The pollster didn't ask the whole country; they asked a sample, a few thousand people standing in for millions. Ask a different few thousand and you'd get 51%, or 53%. The 52% is a guess built from one draw — an **estimate**, and an estimate wobbles, because a different sample would have landed somewhere slightly different. (That wobble has a name from the Essentials course: **sampling variation** — results shift from one fair sample to the next, even when nothing in the world has changed.)

So a single number, reported alone, quietly hides how sure we are. An honest study doesn't hand you one number and walk away. It hands you a *range*.

## The range is the honest answer

If the estimate wobbles, then the useful thing to report is not just where this one sample landed but how far the answer might reasonably sit from it. That range is a **confidence interval**: instead of "52%," a careful poll says "52%, give or take 3 points" — somewhere between 49% and 55%.

The width of that range is itself information. A narrow interval — 51% to 53% — says the data pin the answer down tightly: more **precision**. A wide one — 45% to 59% — says there's a lot of uncertainty here, and anyone who quotes only the midpoint is hiding it. Same midpoint, very different stories. Reading the width is half the skill.

But the famous part of a confidence interval is the label in front of it: *95% confidence*. That phrase is the most misquoted line in all of statistics, and getting it exactly right is the whole point of this module.

## What "95% confidence" actually means

A **confidence interval** is a range produced by a *procedure* — a recipe: take a sample, measure it, and build a range around the estimate by a fixed rule. The "95%" is a property of that recipe, described over the long run.

Here is the careful statement, and it rewards reading slowly:

> If you repeated the whole process — draw a fresh sample, build a fresh interval the same way — many, many times, then about 95% of the intervals you produced would contain the true value.

The 95% is a **batting average of the method**. Run the recipe a thousand times and roughly 950 of the intervals it produces will catch the truth; the other 50 or so will miss it entirely. That long-run hit rate is what "95% confidence" reports. (Picture the method as a net that catches the truth about 95% of the times you cast it — but keep your eye on what's counted: it's the *casting* that succeeds 95% of the time, not any one net you're holding.)

## What it does *not* mean

Now the beat that matters most. It is tempting — almost everyone does it — to look at one reported interval, say 49% to 55%, and conclude:

> "There's a 95% probability the true value is somewhere in *this* interval."

That is the wrong reading, and it's worth being precise about why. Once a specific interval has been computed, the true value is either inside it or outside it. It doesn't move; the truth doesn't wobble. The wobble was all in the *sampling* — and that's already done. So for the one interval in front of you, there's nothing left to be 95% about. It either caught the truth or it didn't, and we simply don't know which.

The 95% lives one level up, in the method across many repeats — not in any single interval the method happens to hand you. Saying "95% probability the truth is in *this* range" quietly swaps the success rate of the recipe for a probability about one result of it. They are not the same thing, and the difference is the lesson.

Two smaller misreadings ride along with the big one, and both are worth killing:

- **"Values inside are equally likely; values outside are impossible."** No. The interval is a rough fence, not a ranking. Values near the middle are generally more plausible than values near the edges, and a true value sitting just outside the fence is unlucky, not forbidden.
- **"The interval includes 'no effect,' so there's no effect."** This is the absence-of-evidence trap in new clothing — the same one we met in the previous module. An interval for a difference that stretches from, say, −2 to +5 is consistent with a small harm, with nothing, and with a moderate benefit all at once. That it *includes* zero does not *prove* zero; not finding an effect isn't the same as proving there's none. It means the data haven't ruled the options out yet.

## Check yourself

A study reports that a drug lowered blood pressure by 4 points, "95% confidence interval: 1 to 7 points." A friend reads this as: "So there's a 95% chance the real effect is between 1 and 7." What's wrong with that, in one sentence?

<details><summary>Show answer</summary>

The 95% describes the *method's* long-run success rate — about 95% of intervals built this way capture the truth — not the probability that this one interval does. This particular range (1 to 7) either contains the real effect or it doesn't; the 95% isn't a probability you can pin to it.

</details>

## Check yourself

Two studies estimate the same quantity. Study A reports an interval of 10 to 12; Study B reports 2 to 20. Which estimate is more precise, and what does the wider interval tell you?

<details><summary>Show answer</summary>

Study A is more precise — its interval is narrow, so the data pin the answer down tightly. Study B's wide interval signals a lot of uncertainty: the data are consistent with a broad range of values, so its single midpoint should be trusted far less.

</details>

## Exercises

**1. (Plain words.)** In one or two sentences, explain why a careful study reports a range instead of a single number.

<details><summary>Show solution</summary>

A sample is only one draw from the population, and a different sample would give a different answer — that's sampling variation. So the single number is an estimate that carries uncertainty. A range (a confidence interval) reports that uncertainty honestly, showing not just where this sample landed but how far the true value might reasonably sit from it.

</details>

**2. (Spot the misreading.)** A news article says: "The poll has a 95% confidence interval of 48% to 54%, meaning we can be 95% sure the candidate's true support falls between 48 and 54 percent." Is the second half of that sentence correct? Explain.

<details><summary>Show solution</summary>

It is the common misreading, and it's wrong. The 95% is the long-run success rate of the *procedure*: if you repeated the whole sampling-and-interval-building process many times, about 95% of the intervals produced would contain the true support. Once this one interval (48% to 54%) is computed, the true value is either in it or not — there's no 95% probability to attach to this single result. The correct phrasing is about the method, not this interval.

</details>

**3. (Why it's wrong.)** Suppose someone insists, "But surely there's *some* probability the truth is in this exact interval — why can't it be 95%?" Answer them: what changed between the method's long-run rate and this one interval that makes the 95% no longer apply?

<details><summary>Show solution</summary>

The 95% comes from sampling variation — different samples produce different intervals, and 95% of those intervals catch the truth. But once you've drawn your sample and computed your interval, the sampling is over; nothing is wobbling anymore. The true value sits at one fixed place, and this fixed interval either surrounds it or doesn't. The uncertainty the 95% measured has been spent. The method's long-run hit rate is real, but it isn't a probability you can transfer onto the one interval you ended up with.

</details>

**4. (Width as precision.)** A small pilot study reports an effect with a 95% interval of −5 to +9. The researchers then run a much larger study and report −1 to +3 for the same effect. What happened to the precision, and why would a bigger sample do that?

<details><summary>Show solution</summary>

The interval got much narrower (a width of 14 shrank to a width of 4), so the estimate became more precise. A larger sample has less sampling variation — its estimate wobbles less from draw to draw — so the procedure produces tighter intervals. Note the first interval includes zero and the second does not; with more data, the range narrowed away from "no effect."

</details>

**5. (Including zero.)** A study reports a 95% interval for a treatment's effect of −3 to +6, and concludes "the treatment has no effect." Why is that conclusion too strong?

<details><summary>Show solution</summary>

The interval includes zero, but including zero is not the same as proving zero — it's the absence-of-evidence point from the previous module again. The range −3 to +6 is consistent with a small harm, with no effect, and with a moderate benefit; the data simply haven't ruled those out. The honest reading is "the study didn't pin down the effect," not "there is no effect." Not finding an effect isn't proving there's none.

</details>

## Recap

A good study reports a range because the number it found is an estimate, and an estimate wobbles with sampling variation. That range — a confidence interval — carries two messages: its width tells you how precisely the answer is pinned down, and its 95% label tells you the long-run success rate of the *method* that built it, about 95 of every 100 such intervals catching the truth. What the label never tells you is the probability that *this* one interval did; once computed, it either caught the truth or it missed, and the 95% stays with the method, not the result. Hold onto that distinction and you have what this short course set out to give you: the careful wording that lets you read the numbers behind a headline — the p-value, "significant," and the interval — without being fooled by any of them.
