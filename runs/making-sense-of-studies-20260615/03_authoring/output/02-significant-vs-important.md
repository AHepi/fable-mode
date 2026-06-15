---
title: "Significant Isn't the Same as Big"
course: making-sense-of-studies
order: 2
summary: Why a "statistically significant" result can be trivially small, why hunting through many tests manufactures fake findings, and why "no effect found" never settles that there's nothing there.
estimatedMinutes: 14
objectives:
  - Distinguish statistical significance — detectability under the null — from practical importance, the real-world size and value of an effect.
  - Explain in plain terms how testing many things at once manufactures flukes (p-hacking).
  - Explain why a non-significant result does not prove the null — absence of evidence is not evidence of absence.
prerequisites: [01-could-this-be-chance]
---

A weight-loss pill clears a giant trial: forty thousand people, and the result comes back *statistically significant*. The press release leans on that word like it settles everything. Read past it, though, and the pill's average effect turns out to be a third of a pound over six months — less than the weight of a sandwich, less than you'd lose forgetting to eat lunch. The finding is real, in the narrow sense the statistics promise. It is also, for anyone hoping to fit into last year's jeans, completely useless.

That gap — between a result that *registers* and a result that *matters* — is the one this module is about. We left it open at the end of module 01: the p-value can tell you a gap is hard to wave off as luck, but it never tells you the gap is big. Here we pull those two ideas all the way apart, and pick up two close cousins of the same confusion along the way.

## Detectable is not the same as large

Recall the spine from module 01: every study is trying to hear a real signal through random noise. "Could this gap be just noise?" The p-value answers that, and **statistically significant** is the label we slap on a gap that clears the bar — a result unlikely under the null, the "assume nothing's going on" starting point from module 01.

But notice what that label is actually a claim about. It says the signal was *loud enough to pick out from the noise*. It says nothing about how loud. And whether you can pick a signal out of static depends on two things, not one: how strong the signal is, and how sharp your ears are.

A study's "ears" sharpen as the sample grows. Scoop a bigger handful from the jar and the wobble of sampling variation shrinks; faint patterns that the noise used to swallow start coming through clearly. Crank the sample size high enough and even a whisper-thin effect — a third of a pound — gets heard loud and clear, which is exactly how a forty-thousand-person trial stamps "significant" on a difference nobody would ever feel.

It cuts the other way too. A genuinely large effect, studied on a tiny sample, can drown in its own noise and *miss* significance — the signal was there, the ears just weren't sharp enough to swear to it. So:

> **Statistical significance** measures *detectability* — whether an effect is big enough, relative to the noise and the sample, to stand out from luck. **Practical importance** is a separate question: whether the effect is large enough, in the real world, to be worth caring about.

A study answers the first. Only you, looking at the actual size of the effect, can answer the second. Significant tells you *something is probably there*. It does not tell you *that thing is big*, and it certainly does not tell you *that thing is worth the price of the pill*.

## Check yourself

A study of 50,000 commuters finds that a new traffic app saves drivers a "statistically significant" amount of time. Should the city buy it for everyone?

<details><summary>Show answer</summary>

Not on that word alone. With 50,000 people in the sample, the study's ears are extremely sharp — it could flag a time saving of a few seconds per trip as significant. "Significant" tells you the saving is probably real, not that it's worth a city contract. Before deciding, you'd want the actual size of the effect: nine minutes saved is a different purchase than nine seconds, even though both can be significant.

</details>

## Roll the dice enough times and something comes up

Here's a quieter way the word "significant" gets manufactured, and it's worth a wary glance even though we'll keep it brief.

A single test asks one question — did *this* gap clear the bar? But a curious researcher rarely stops at one. Try the effect on men, then on women. On the under-fifties, then the over-fifties. On weekday data, then weekend. Swap the cutoff for "improvement." Each of those is another test, and here's the trap: under the null, where nothing real is going on, any one test still has a small chance of crossing the line by pure luck. Run twenty such tests on noise and, on average, one will come up "significant" all on its own — not because anything is there, but because that's what enough rolls of the dice produce.

The mischief — it has a name, **p-hacking** — is to run all twenty quietly and report only the one that crossed. Stripped of the nineteen misses, that lone hit looks like a discovery. It's a fluke wearing a discovery's clothes. You don't need bad faith to fall into it, either; a hopeful person poking at data from enough angles will eventually find a flattering pattern in random static, the way you'll eventually find a face in the wallpaper if you stare long enough.

The defense is just to ask how many questions were asked. One pre-planned test that comes back significant is evidence. The single survivor of a hundred unreported attempts is mostly evidence that someone went looking a hundred times.

## Not finding it is not the same as it not being there

The mirror-image mistake is just as common, and module 01 already pointed at it: we look for evidence *against* the null, and we never prove the null true.

So what does a *non-significant* result mean — the study that fails to clear the bar? It's tempting to read "no significant effect" as "no effect." Resist it. A study can come back empty for two completely different reasons:

- there really is nothing there, or
- there is something there, and the study was too small — its ears too dull — to hear it.

A non-significant result cannot tell you which of these you're in. It's the silence after you listen for a faint sound: the silence is the same whether the sound was never made or was simply too quiet to reach you over the static. You cannot conclude "nothing happened" from "I heard nothing."

> **Absence of evidence is not evidence of absence.** Failing to detect an effect is not the same as showing there is no effect; a non-significant result may mean no effect, or merely too little data to detect one.

This is why a careful study that finds nothing says "we did not detect an effect," not "there is no effect." The first is honest about what a null result can and can't carry. The second claims to have established the null — which, as module 01 insisted, is something a study can never do.

## Worked example: same p-value, two different worlds

Two trials test two different blood-pressure drugs. Both report the same p-value: p = 0.01. By the logic some readers bring to the word, the two results are equally impressive. Watch what happens when we look past the p-value to the effect itself.

**Trial A** enrolled 200 patients. The drug lowered blood pressure by an average of 12 points — a change a doctor would actually act on. With only 200 patients, clearing p = 0.01 *took* an effect that large; a small study has dull ears, so only a strong signal gets through.

**Trial B** enrolled 80,000 patients. Its drug lowered blood pressure by an average of 0.3 points — a third of a point, lost in the daily ups and downs of any single person's readings. With 80,000 patients the study's ears are razor-sharp, so even that whisper of an effect cleared p = 0.01 comfortably.

Same p-value. The p-value says only that each result is equally surprising *under the null* — equally hard to chalk up to luck. It says nothing about size, and the sizes here live in different worlds: one drug is worth prescribing, the other isn't worth the trip to the pharmacy. "Significant" was true of both. "Important" was true of only one. The number that settled the first question was silent on the second, and reading it as if it answered both is the whole mistake this module is built to stop.

## Check yourself

Trial B above was "significant" with a 0.3-point effect. Does its tiny effect mean the drug does nothing at all?

<details><summary>Show answer</summary>

No — and notice this is the opposite trap from the one we just worked. The 0.3-point effect is real (significant, after all); it's just too small to matter. "Significant but trivial" is a different verdict from "no effect found." The first says *something small is there*; the second says *we couldn't tell whether anything is there*. Don't collapse them into each other.

</details>

## Exercises

**1.** A supplement maker advertises: "Clinically shown to improve focus — statistically significant results!" What single piece of information, missing from the ad, would you most want before believing the supplement is worth buying?

<details><summary>Show solution</summary>

The size of the effect. "Statistically significant" only says the improvement was detectable — probably not pure luck — which, in a large enough study, is compatible with an effect far too small to notice. You'd want to know *how much* focus improved (and on what measure). Without the effect size, "significant" is a claim about detectability masquerading as a claim about importance.

</details>

**2.** Two diet studies both report p = 0.03. Study X followed 300 people; Study Y followed 30,000. A reader says, "Same p-value, so both diets work equally well." Where does the reasoning go wrong?

<details><summary>Show solution</summary>

A p-value is not a measure of effect size, so equal p-values can sit on top of very different effects. Study Y's huge sample gives it sharp ears: it can stamp "significant" on a tiny average weight change. Study X, much smaller, needed a larger effect to reach the same p-value. Matching p-values mean the two results are equally surprising *under the null* — not equally large, and certainly not equally worth following. To compare the diets you'd compare their effect sizes, not their p-values.

</details>

**3.** A research team tests a new fertilizer against twelve different crops. On eleven, the difference is non-significant; on the twelfth, p = 0.04, and the press release is titled "Fertilizer Boosts Yield." Why should you be cautious?

<details><summary>Show solution</summary>

Twelve tests are twelve rolls of the dice. Even if the fertilizer did nothing, each test has a small chance of crossing the line by luck, so finding one "significant" result among twelve is roughly what pure noise would hand you anyway. Reporting only the winning crop and burying the eleven misses is p-hacking: it dresses a likely fluke as a discovery. The honest version reports all twelve outcomes, or — better — pre-registers a single crop to test and reports that. One survivor out of twelve unplanned tries is weak evidence of anything.

</details>

**4.** A well-run trial concludes: "We found no significant difference between the new painkiller and the old one." A blogger writes: "Confirmed: the new painkiller is no better than the old." What is the blogger missing?

<details><summary>Show solution</summary>

The blogger has turned "no evidence of a difference" into "evidence of no difference" — and a study can never establish the null. A non-significant result has two possible explanations: the two painkillers really are equivalent, or one is genuinely better and the trial was too small to detect the gap. The study cannot say which. The careful reading is "we did not detect a difference," which leaves both possibilities open. (This is the absence-of-evidence trap: not finding an effect isn't the same as showing there is none.)

</details>

**5.** (Stretch) A drug shows a large, clearly important effect in a small pilot study — but the result comes back *non-significant*. A colleague says, "Then the effect must be fake; significance would have caught a real effect that big." Is the colleague right?

<details><summary>Show solution</summary>

No. Significance depends on the sample as well as the effect: a small study has dull ears, and a large real effect studied on too few people can drown in sampling noise and miss the bar. Missing significance does not show the effect is fake — it may show the study was too small to confirm it. The sensible next step is a bigger study, not a dismissal. This is the flip side of the module: just as a large sample can make a trivial effect significant, a small sample can make a real one non-significant. Detectability and size are separate questions, running in both directions.

</details>

## Recap

The word "significant" promises less than it sounds like it does. It says a result stood out from the noise — that it's detectable — and detectability rides on the sample size as much as on the effect, so a big enough study can flag a difference far too small to matter, while a small study can miss a real one. Hunting through many tests and reporting only the winner manufactures that same word out of pure luck. And a study that finds nothing has not shown there is nothing there; it may have been listening with ears too dull to hear it. Significant, big, and real are three different claims. Module 01 separated *surprising* from *real*; this module separated *significant* from *big*. The next takes up the honest way to report how big — a range, not a single number.
</content>
