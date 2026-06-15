---
title: A Handful from the Jar
course: stats-essentials
order: 3
summary: "Why we almost never measure everyone, and what it costs us: a sample is one handful from a big jar, and two fair handfuls never match exactly."
estimatedMinutes: 14
objectives:
  - Distinguish a population from a sample, and explain why a sample's numbers are estimates rather than the truth.
  - Explain sampling variation — why two fair samples from the same population disagree by luck of the draw.
  - Explain why a biased sample misleads no matter how large it is.
prerequisites: [01-data-and-variation, 02-distributions-center-spread]
---

"The poll said 52 percent." You have heard a line like that a thousand times, and you have probably read it as a fact about the world — fifty-two out of every hundred people, settled. But nobody asked every person. They asked a few thousand, out of millions, and reported back what those few thousand said. The 52 is not a fact about the millions. It is a guess about them, built from a small slice that someone happened to reach. This module is about what that slice can and cannot tell you — and why, even when everything is done right, the number is never the exact truth.

So far we have learned to read one pile of numbers: its shape, its center, how wide it scatters (M2). We left off on the crack that pile sat over — every pile we study is really a handful scooped from something far larger we cannot see whole. Here is the handful.

## The jar and the handful

Picture a giant jar of dried beans, so full you could never count them all. Mixed through the jar are beans of different colors, and you want to know the recipe: what fraction is red? Counting every bean is out of the question — there are too many, and new beans get poured in faster than you could ever tally the old ones. So you do the only practical thing. You reach in, pull out a handful, and look at *that*.

The whole jar is the **population**: everyone or everything you actually want to know about. Every voter in the country. Every household in the region. Every bean in the jar. The population is usually too big, too scattered, or too expensive to measure in full — which is exactly why we're here.

The handful you pull out is the **sample**: the smaller group you really do measure. A few thousand voters phoned. A hundred households surveyed. The forty beans now sitting in your palm.

And here is the move the whole field is built on. You count your handful — say sixteen of your forty beans are red, which is 40 percent — and you use *that* to make a claim about the jar. The number you get from the sample is an **estimate**: a sample-based guess at the population's value, carrying uncertainty with it. It is not the truth about the jar. It is your best reading of the jar, taken through a small window. Hold those three words apart, because almost every mistake in this module comes from letting them blur: the **population** is what you want to know, the **sample** is what you measured, and the **estimate** is the bridge between them — a guess, never a fact.

<details><summary>Check yourself: name the three</summary>

A health agency wants to know the average blood pressure of all adults in a city. Measuring everyone is impossible, so they measure 500 adults and report an average of 122. In this story, what is the population, what is the sample, and which number is the estimate?

The **population** is all adults in the city — everyone they want to know about. The **sample** is the 500 adults they actually measured. The reported average of 122 is the **estimate**: a guess at the city's true average, built from the 500. The city's real average is some fixed number they never directly see.

</details>

## A bigger scoop won't fix a bad one

The most tempting idea about sampling is also one of the most expensive mistakes, so let's meet it head on. Surely, you might think, a bigger handful is a better handful — measure more people and you get closer to the truth. Half of that is right. The other half ruins polls.

Suppose the beans aren't mixed. The red ones are dense and have settled to the bottom; the pale ones float near the top. Now you scoop — but you only ever scoop from the top, because that's what your hand reaches. Your handful comes out almost all pale. Does scooping a *bigger* handful from the top help? Not at all. A bigger scoop from the top just gives you more pale beans and more confidence in the wrong answer. The problem was never the *size* of the scoop. The problem was *where* you scooped.

A sample that systematically leans one way — that over-reaches one kind of bean and under-reaches another — is a **biased** sample, and bigness cannot cure it. What cures it is *how* you scoop: stir the jar thoroughly first, then grab without looking, so every bean has a fair chance of ending up in your hand. That fair, well-mixed grab is **random sampling**, and it is the only thing that makes the handful stand in honestly for the jar. Representativeness comes from the fairness of the draw, not the heft of it.

This is why a survey of "everyone who chose to answer our website poll" can be wildly off even with a million responses: the people who bother to click are a particular kind of bean, scooped from the top. And it's why a properly randomized poll of two thousand can beat it cold. More is not the same as fair. We'll meet this idea again under a sharper name later in the series — telling a real pattern from random wobble — but for now the lesson is plain: a big biased sample is a confident wrong answer.

## Two fair handfuls won't match

Now suppose you do everything right. You stir the jar until the colors are evenly mixed, close your eyes, and pull a fair handful. A friend stirs and pulls another. You count: yours is 38 percent red, theirs is 43 percent. Same jar, same careful method, two different answers. Who made the mistake?

Neither. This is just the luck of the draw. Each handful catches a slightly different assortment of beans, purely by chance, even though the jar behind them never changed. That sample-to-sample disagreement is **sampling variation** — the wobble in your results from one fair sample to the next.

You have met this wobble before. Back in the first module it was the genuine scatter in real measurements; it was never a mistake, just the world coming out different each time you looked. The wobble here is a close cousin, but notice carefully where it now lives. The jar — the population — is *fixed*; its true fraction of red beans is one settled number. The wobble is not in the jar. The wobble is in the *scooping*. Two honest scoops of a fixed jar still disagree, because each grabs a different few beans. That is the whole idea, and it is the seed from which the rest of this series grows.

So when the news says "the poll found 52 percent," the honest translation is: *this particular handful came out at 52 percent.* Stir and scoop again tomorrow and you might get 50, or 54 — not because anyone's mind changed, but because it's a different handful. The true figure for the whole population is some fixed number nearby, and 52 is an estimate wobbling around it. This is why serious polls report a "margin of error": an admission, in numbers, that the handful is not the jar.

<details><summary>Check yourself: where is the wobble?</summary>

Two careful, well-randomized polls run the same week ask whether people support a new park. One finds 61 percent in favor; the other finds 57 percent. A friend concludes that public opinion must have shifted between the two polls. What's the simpler explanation?

Sampling variation. Both polls scooped fair handfuls from the same population, and two fair handfuls don't match exactly — the four-point gap is the wobble of the draw, not a real change in opinion. The population's true level of support is one fixed number; both 61 and 57 are estimates of it, landing a little apart by chance. You'd need much stronger evidence than two close numbers to claim opinion actually moved.

</details>

## Exercises

**1.** A magazine prints a survey: "We asked our readers, and 80 percent of people exercise daily." Why might this estimate be badly off, even if ten thousand readers replied?

<details><summary>Show solution</summary>

The sample is biased, and the ten thousand doesn't rescue it. The magazine only reached its own readers, and among those, only the ones who chose to reply — beans scooped from the top, not from a stirred jar. People who exercise daily are probably more likely to read a health-and-fitness magazine and more likely to answer a survey about exercise. So the handful over-represents exercisers, and a *bigger* handful from that same skewed source just locks in the same wrong answer with more confidence. Size never fixes a biased scoop; only a fair, random draw from the whole population would.

</details>

**2.** A polling firm samples 1,500 voters at random and finds 49 percent support a candidate. A rival firm, also sampling at random, finds 52 percent. A headline declares the two polls "contradict each other." Do they?

<details><summary>Show solution</summary>

No. Two fair samples from the same population are *expected* to disagree a little — that's sampling variation, the luck of which voters each firm happened to reach. The true level of support is one fixed number, and 49 and 52 are both estimates wobbling around it; a three-point gap between two random samples is ordinary, not a contradiction. Reading the difference as "the polls disagree" mistakes the wobble of the scooping for a real difference in the world. (Both numbers are estimates, not the truth — that's the heart of it.)

</details>

**3.** Someone says: "This poll surveyed 3,000 people and got 55 percent, so the real figure for the whole country is 55 percent." What's wrong with that last step?

<details><summary>Show solution</summary>

It treats the sample's number as the population's number, and it isn't. The 55 percent is an *estimate* — what this one handful of 3,000 happened to show — not the country's true figure. Scoop a different fair sample and you'd get something a bit different (53, 57), all of them estimates wobbling around the real value, which stays fixed and unseen. The careful version is: "the poll estimates about 55 percent, give or take," never "the figure *is* 55 percent." A sample is a window onto the population, not the population itself.

</details>

**4.** A town wants to know the average commute time of its residents. A researcher stands at the train station one morning and times everyone who walks past. Is a bigger crowd at the station the fix for this study? What is the actual problem?

<details><summary>Show solution</summary>

A bigger crowd is not the fix. The problem is *where* the sample is scooped: standing at the train station only catches people who commute by train, and misses everyone who drives, bikes, walks, or works from home — a handful taken entirely from the top of the jar. Train commutes may run longer or shorter than driving commutes, so the estimate is biased, and timing a thousand train riders instead of a hundred just makes the same biased number more precise. To estimate the town's true average you need a fair draw from *all* residents, not more of one kind. Representativeness is about how you scoop, not how much.

</details>

**5.** (Stretch.) You scoop one fair handful and get 40 percent red. Your friend, scooping fairly from the same well-mixed jar, gets 45 percent. Can you say which handful is "right" about the jar? Can you say anything useful about the jar at all?

<details><summary>Show solution</summary>

Neither handful is "right" or "wrong" — both are honest estimates, and sampling variation alone explains the gap; the jar's true fraction is one fixed number that neither of you measured directly. What you *can* usefully say is that the truth is plausibly somewhere in that neighborhood — both fair samples landed in the low-to-mid forties, so the jar's real red fraction is likely around there rather than, say, 10 percent or 80 percent. The two estimates don't pin the truth exactly, but together they fence in a sensible range. Pinning down *how much* a fair estimate can wobble — and how to shrink that wobble honestly — is where the rest of this series goes.

</details>

## Recap

We almost never get to measure the whole population, so we measure a sample and read it as an estimate — a guess at the truth, not the truth itself. Two cautions travel with that guess. A biased sample, scooped always from the same corner of the jar, misleads no matter how large; only a fair, well-mixed draw earns the right to stand in for the whole. And even a fair sample wobbles: two honest handfuls from the same fixed jar disagree by pure luck of the draw, which is why "the poll said 52 percent" is an estimate trembling near the truth, never the truth nailed down. That wobble has a quiet importance we've only hinted at. Some of what looks like a real difference in the world is just the scooping talking — and learning to tell the genuine pattern from the random wobble is the question the next module, and this whole series, is built to answer.
