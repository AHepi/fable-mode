---
title: "Significant Isn't the Same as Big"
course: making-sense-of-studies
order: 2
summary: "Why a \"statistically significant\" result can be trivially small, why hunting through many tests manufactures flukes, and why \"no effect found\" never settles that there's no effect."
estimatedMinutes: 14
objectives:
  - Distinguish statistical significance (detectability under the null) from practical importance (the size and real-world value of an effect).
  - Explain in plain words how testing many things at once manufactures flukes.
  - Explain why a non-significant result does not settle that there is no effect.
prerequisites: [01-could-this-be-chance]
---

A pill drops your risk of a headache by, on average, four minutes. Run the trial on a few dozen people and that four minutes drowns in the everyday wobble of how long headaches last — nobody can tell the pill apart from a sugar tablet. Run it on four hundred thousand people, and the very same four minutes comes back stamped "statistically significant." The effect didn't change. The headache is still four minutes shorter, which is to say: who cares. Only the sample grew.

That word — *significant* — is the most over-trusted word in the whole business of reading studies. In a headline it sounds like a verdict: *this matters*. In statistics it means something far narrower, and the gap between the two is where a careful reader stops being fooled.

## What "significant" actually claims

Recall the machinery from the last module. A study starts from the **null hypothesis** — the "assume nothing's going on" starting point — and reports a **p-value**: roughly, how surprising the data would be *if* nothing were really going on. When that surprise crosses some agreed line (often a p-value below 0.05), the result earns the label **statistically significant**.

Read that carefully, because the label says less than it seems to. **Statistically significant** means only that the result is *unlikely under the null* — the kind of gap you'd rarely see by chance alone. It is a statement about **detectability**: did the signal rise far enough above the noise to be noticed? It says nothing about how big the effect is or whether it's worth caring about. That is a separate question — the effect's **practical importance**: its actual size and value out where people live.

Here is the part that trips everyone. Detectability depends on two things, not one: how big the effect is, *and* how hard you looked. Lean on the idea this whole course turns on — telling **signal from noise**, the idea the Essentials course ends on. A bigger sample is a sharper ear. Pile up enough data and you can hear a signal so faint it makes no difference to anyone, and the test will dutifully announce it. Shrink the sample and you go half-deaf: a real, important effect can be sitting right there and still fail to clear the line, lost in the static.

So the label cuts both ways:

- With a **large enough sample**, a **trivially small** effect can be "significant." (The headache pill.)
- With a **small sample**, a **large, real** effect can **miss** significance. (A genuinely good drug tested on twelve people.)

Significant tells you the result was *detected*. It does not tell you the result is *big*.

## Check yourself

A weight-loss program is tested on 50,000 people and shows a "statistically significant" average loss — of 0.3 pounds. Should that headline change what you do?

<details><summary>Show answer</summary>

No. Significance here just says the 0.3 pounds is unlikely to be pure chance, given how enormous the sample is. Three-tenths of a pound is the *effect size*, and it's nothing — well within the weight of a glass of water. The huge sample made a meaningless effect detectable; it didn't make it matter. Always ask "how big?" right after "is it significant?"

</details>

## The aside that earns its own warning: testing many things

There's a quieter way "significant" gets manufactured. Suppose a study measures one thing and finds nothing. Then it splits the data: maybe the effect shows up in men. No? In women over fifty. No? In left-handed people who exercise on Tuesdays. Keep slicing, keep testing, and eventually some slice crosses the line — and that's the one that makes the abstract.

Every extra test is another roll of the dice. A roughly-1-in-20 fluke is *rare* on a single test; run twenty tests and a fluke or two is exactly what you'd expect. This is sometimes called **p-hacking**, and the honest fix is simple: a result is only as convincing as the number of chances it had to come up. One planned test that lands is evidence; the lone survivor of a hundred quiet attempts is mostly noise. When a finding turns up only in an oddly specific subgroup, ask how many subgroups were checked along the way.

## When the study finds nothing

Now flip it. A study runs, the p-value sits comfortably above the threshold, and the result is reported as "no significant effect." It's tempting to read that as the all-clear: *proven safe*, *no difference*, *case closed*.

It isn't. A non-significant result has two possible meanings, and the study alone can't tell them apart:

1. There really is no effect, or
2. There is an effect, but the study was too small or too noisy to detect it.

Not hearing a signal can mean the radio is silent — or that you weren't listening hard enough. The slogan is worth memorizing: **absence of evidence is not evidence of absence.** This is the same honesty we met last time — we never get to *prove the null*, the "nothing's going on" assumption. We can fail to find evidence against it. That is a much humbler claim, and reading it as "proof of no effect" is how a too-small study gets sold as a clean bill of health.

## Worked example

**Problem.** Two studies test whether a new teaching method raises test scores. Both report the *same* p-value: 0.04 — both "statistically significant." Study A is tiny; Study B is enormous. Study A finds an average gain of 12 points. Study B finds an average gain of 0.5 points. Same significance — so do they tell you the same thing?

**Solution.** No, and this is the whole lesson. The shared p-value of 0.04 says only one thing about each: the gain is unlikely to be pure chance under the null. It says nothing about *how big* the gain is.

- **Study A** detected a **12-point** gain on a small sample. To clear the line with few students, the effect had to be loud — the signal punched through thin data. This is a result worth acting on.
- **Study B** detected a **0.5-point** gain on a huge sample. Half a point is a rounding error in a classroom; the only reason it registered is that the giant sample sharpened the ear enough to hear a whisper. Significant, and not worth a single change to how anyone teaches.

Identical "significance," opposite real-world meaning. The p-value answered *could this be chance?*; it never even tried to answer *is this big enough to matter?* For that you read the **effect size** — the 12 points versus the 0.5 — every time. $\square$

## Exercises

**1.** A study of 200,000 commuters reports that a new app saves drivers a "statistically significant" amount of time: 9 seconds per trip. A news site runs it as "App Proven to Cut Commute Times." What's wrong with the framing?

<details><summary>Show solution</summary>

Two things. First, "significant" here only means 9 seconds is unlikely to be chance given the vast sample — it does not mean 9 seconds is *important*, and 9 seconds plainly isn't (this is Pitfall #2: significance is not importance). The enormous sample made a trivial effect detectable. Second, "proven" overreaches: a single study detects an effect, it doesn't prove anything, and the size is what's at issue here. The honest headline is "App saves about 9 seconds per trip" — and then the reader can shrug.

</details>

**2.** A small trial of a promising cancer drug reports "no statistically significant difference" in survival between the drug and the standard treatment. A reader concludes the drug doesn't work. Is that conclusion sound?

<details><summary>Show solution</summary>

No. A non-significant result has two readings: the drug genuinely doesn't help, *or* the trial was too small to detect a real benefit through the noise (Pitfall #10: absence of evidence is not evidence of absence). With a small trial, the second is very live. The result fails to provide evidence *for* the drug; it does not provide evidence *against* it — and it certainly doesn't prove no effect, which the null never lets us do. The right reading is "this study couldn't tell," not "the drug doesn't work."

</details>

**3.** Researchers test whether a supplement affects mood. They find nothing overall, then check fifteen separate subgroups, and report that it "significantly" improves mood in one of them. Why should you be skeptical?

<details><summary>Show solution</summary>

Because fifteen subgroup tests are fifteen rolls of the dice. With a 1-in-20 chance of a fluke on each test, finding one "significant" result among many is roughly what you'd expect from pure chance even if the supplement does nothing. The single surviving subgroup is most likely a fluke surfaced by repeated testing, not a discovery. Ask how many comparisons were run before that one was reported — a finding from one planned test is far stronger than the lone winner of many.

</details>

**4.** Explain to a friend, in one or two sentences, how two studies can share the exact same p-value yet carry completely different real-world weight.

<details><summary>Show solution</summary>

The p-value only measures whether a result is surprising under "nothing's going on" — it's about detectability, not size. Two studies can both clear that bar (same p-value) while one found a large effect and the other found a tiny one, because a big sample can make even a trivial effect detectable; you have to look at the effect size separately to know which study matters.

</details>

## Recap

"Significant" is a narrow word pretending to be a wide one. It marks a result as hard to explain by chance — detectable above the noise — and stops there. It does not measure size, and it does not measure importance: a vast sample can stamp the label on an effect too small to matter, while a small sample can miss an effect that's both real and large. Two warnings ride alongside. Hunting through many tests manufactures flukes, so a finding is only as trustworthy as the number of chances it had to appear. And a study that finds nothing hasn't shown there's nothing — it may simply have been too small to hear. Next we turn from a single yes-or-no verdict to something more honest: a range of plausible values, and the surprisingly slippery meaning of being "95% confident."
