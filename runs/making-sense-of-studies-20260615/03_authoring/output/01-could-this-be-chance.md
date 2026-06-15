---
title: Could This Just Be Chance?
course: making-sense-of-studies
order: 1
summary: The question every study secretly asks — if nothing were really going on, would data like ours be surprising? — and the careful meaning of the number that answers it, the p-value.
estimatedMinutes: 16
objectives:
  - Explain the null hypothesis as a study's starting assumption that there is no real effect.
  - State correctly what a p-value is — the chance of data at least this extreme if the null were true — and distinguish it from what it is not.
  - Identify the most common misreadings of a p-value (that it gives the probability the null is true, or "the probability it's just chance").
prerequisites: []
---

"Coffee drinkers live longer," says the headline. Underneath sits a study: one group drank coffee, another didn't, and the coffee group lasted, on average, a little longer. So that settles it — pour another cup.

Except it doesn't settle anything yet. Any two groups of people differ a little, even when nothing connects them to coffee at all. Pick two handfuls of strangers off the street and one handful will have lived a touch longer than the other — not because of anything you did, just because people vary and any sample you grab carries its own luck. Results wobble from one sample to the next; statisticians call that wobble *sampling variation*. So the real question behind the headline is sharper than "did the coffee group do better?" It's this: *could a gap this size show up by luck alone, even if coffee did nothing?*

That question — telling a real signal from random noise — is the spine of this whole course. Could this gap be just noise? This module gives you the first tool for answering it, and the careful words that keep the tool honest.

## Starting from "nothing is going on"

Here is the move that surprises most people the first time they see it. A study doesn't begin by trying to prove coffee helps. It begins by *assuming coffee does nothing* — and then asking whether the data can talk it out of that assumption.

That starting assumption has a name: the **null hypothesis**. It's the dull, skeptical default — *there is no real effect, no real difference, nothing going on but the ordinary wobble of sampling*. The whole test is built to see whether the data give us reason to abandon it.

Why start from the boring side? Because "nothing is going on" is a claim you can actually compute against. If coffee truly did nothing, you can work out how often pure luck would hand you a gap as big as the one you saw. You're holding the data up against a clear, specific story — the no-effect story — and checking whether they fit it.

And notice what we are *not* doing. We are looking for evidence *against* the null. We never set out to prove the null is true. If the data turn out to fit the no-effect story comfortably, that doesn't mean coffee does nothing — it might do something small that this study was too thin to catch. Failing to find a signal is not the same as showing there's no signal to find. (Hold onto that thought; module 02 builds a whole idea on it.)

## The number that measures surprise

Now we can say what the famous number actually measures.

Suppose the null is true — coffee does nothing, and the gap you saw is pure sampling luck. Ask: *how often would luck alone produce a gap at least as big as the one in front of me?* That long-run fraction is the **p-value**.

Said carefully, and this wording is the lesson:

> A **p-value** is the probability of getting results **at least as extreme as the ones observed**, *assuming the null hypothesis — no real effect — is true.*

Read it twice. Every clause is load-bearing. "At least as extreme" — not exactly your result, but your result *or anything more striking*, because a fluke that big or bigger is what would fool you. "Assuming the null is true" — the whole calculation lives inside the no-effect story; it takes "nothing is going on" as given and asks how the data look from there.

In plain words: **a small p-value means data like this would be surprising if nothing were really going on.** If luck alone would almost never cough up a gap this large, then either you witnessed a rare fluke, or the no-effect story is wrong. A large p-value means the opposite — a gap this size is the kind of thing luck produces all the time, so the data give you no reason to doubt the null.

You'll often see a line drawn at 0.05. A p-value below it gets called **statistically significant** — shorthand for "this would be a surprising result if the null were true." Treat that as a rough flag for now, not a verdict; it's a threshold someone chose, and module 02 takes apart what it does and doesn't earn you.

## What a p-value is *not*

Here is where careful readers get fooled, so we'll be blunt about it. The p-value answers one specific question — *how surprising is this data if nothing is going on?* — and people constantly hear it answering a different, more exciting question. It doesn't.

- **It is not the probability that the null is true.** "p = 0.03" does not mean "there's a 3% chance coffee does nothing." The whole calculation *assumes* coffee does nothing and works forward from there; it cannot then turn around and tell you the odds of that assumption. It runs one direction only.
- **It is not the probability that the effect is real.** A small p-value is not "a 97% chance coffee works." The p-value attaches no probability to any hypothesis — not the null, not its rival.
- **It is not "the probability the result is just chance"** — at least not in the loose everyday sense people mean. The p-value is computed *taking chance as the whole story*. It's "how often chance alone would do this," not "the odds that chance is what happened."
- **It is not a measure of how big or how important the effect is.** A microscopic, useless difference can earn a tiny p-value if the study is large enough. Small p-value, big effect — two different things. (Module 02 is about exactly this confusion.)

A tempting wrong answer: "p = 0.04, so there's a 96% chance the effect is real." It's everywhere, and it's backwards. The 0.04 is the chance of data like *this* under the *no-effect* story — it says nothing direct about whether the effect is real.

One way to keep it straight: the p-value answers "*if* nothing were going on, how strange is what I'm seeing?" It does not answer "is something going on?" — that's the question you actually care about, and the p-value only nudges you toward it. It's a measure of *surprise under a specific assumption*, not a verdict on the world.

## Worked example: the new tutoring program

A district tries a new tutoring program. One group of students gets it; a comparable group doesn't. At year's end the tutored group scores, on average, 4 points higher on a standard test.

Start where a study starts — with the null: *the program does nothing, and any gap is just sampling variation.* If that's true, the two groups are really two handfuls from the same jar, and a 4-point gap (in either direction) is just the luck of who landed in which group.

Now the p-value asks: *if the program truly did nothing, how often would luck alone produce a gap of 4 points or more?* Suppose the answer works out to 0.02. Read it precisely: were the program useless, you'd see a gap this big about 2 times in 100 by chance. That's genuinely surprising under the no-effect story — surprising enough that "the program does nothing" looks like a strained explanation, and "the program does something" gets real support.

But hold the line on what 0.02 does *not* say. It is not "a 98% chance the program works." It is not "a 2% chance the program is useless." And it says nothing about whether 4 points *matters* — 4 points might be the difference between a C and a B, or it might be trivial. The p-value flagged that the gap is hard to wave off as luck. Whether the gap is real *and worth caring about* is a further question, and the next module is where we take it up.

## Check yourself

A study reports p = 0.6. In plain words, what does that tell you?

<details><summary>Show answer</summary>

A gap at least as big as the one observed would turn up about 60% of the time by luck alone, even if there were no real effect. That's not surprising at all under the null — so the data give you no reason to doubt "nothing is going on." Note what it does *not* say: it does not prove there's no effect. The study may simply be too small to catch one. (More on that in module 02.)

</details>

Someone says: "p = 0.01 means there's a 99% chance the treatment works." What's wrong with that?

<details><summary>Show answer</summary>

It flips the p-value around. The 0.01 is the chance of data this extreme *assuming the treatment does nothing* — it's computed inside the no-effect story. It does not measure the probability that the treatment works, or that the null is false. A p-value attaches no probability to any hypothesis.

</details>

## Exercises

**1.** State, in one careful sentence, what a p-value is. Include the "assuming the null is true" clause.

<details><summary>Show solution</summary>

A p-value is the probability of getting results at least as extreme as those observed, assuming the null hypothesis — that there is no real effect — is true. The clause matters: drop it and you've changed the meaning. Without "assuming the null is true," the sentence drifts toward "the probability the result is just chance," which is the misreading this module is built to prevent.

</details>

**2.** A poll finds a city's two mayoral candidates separated by 3 points, with the difference reported as not statistically significant (p = 0.4). A friend concludes: "So the race is genuinely tied — there's no real difference." Why is the friend overreaching?

<details><summary>Show solution</summary>

A large p-value means a 3-point gap is the kind of thing sampling variation produces easily, so the poll gives no strong evidence of a real lead. But "no strong evidence of a difference" is not "evidence of no difference." One candidate may truly be ahead; this poll just wasn't sharp enough to show it. We look for evidence *against* the null — we never prove it true. (Absence of evidence is not evidence of absence; module 02 develops this.)

</details>

**3.** A headline reads: "New supplement cuts risk, p = 0.03 — a 97% chance it works!" Identify the error and rewrite the claim correctly.

<details><summary>Show solution</summary>

The "97% chance it works" is the classic flip. The 0.03 is the probability of data at least this extreme *if the supplement did nothing* — it does not give the probability that the supplement works. A correct rewrite: "If the supplement did nothing, a result this strong would happen only about 3 times in 100 — surprising enough to be worth a closer look." Notice the rewrite makes no claim about how *much* the supplement helps, or whether the help is worth having.

</details>

**4.** Why does a study assume "no effect" at the start instead of assuming the effect it's hoping to find?

<details><summary>Show solution</summary>

Because "no effect" is a specific, computable story: if nothing is going on, you can work out how often luck alone would produce a gap as big as the one you saw, and so measure how surprising your data are. "There is an effect" is vague — an effect of what size? — and gives you nothing concrete to compute against. So we adopt the skeptical default (the null) and look for evidence against it, rather than assuming what we set out to investigate.

</details>

**5.** (Stretch) Two studies test the same drug. Study A reports p = 0.04; Study B reports p = 0.04 but enrolled ten times as many patients. Does the matching p-value mean the two studies found an equally large effect?

<details><summary>Show solution</summary>

No. A p-value is not a measure of effect size, so two equal p-values can sit on top of very different effects. A large study can reach p = 0.04 on a tiny effect — its sheer size lets it detect a faint signal — while a small study reaches the same p-value only on a larger one. Matching p-values say the two results are equally surprising *under the null*, not equally big. Pulling significance apart from size is exactly the job of module 02.

</details>

## Recap

A study's quiet first move is to assume nothing is going on — the null hypothesis — and then check whether the data can argue it down. The p-value puts a number on that argument: the chance of seeing data at least this extreme *if the null were true*, or, in plainer words, how surprising your result would be if nothing were really going on. Small means surprising; large means business as usual. What the p-value never does is hand you the odds that an effect is real, or tell you how big it is — and a result that fails to surprise is not proof that there's nothing there. Those two gaps, between *surprising* and *real* and between *significant* and *big*, are where the next module goes to work.
