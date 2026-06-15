---
title: The Long Run
course: stats-essentials
order: 4
summary: "What a probability really means, why a coin has no memory, and the idea the whole series turns on: telling a real signal from random noise."
estimatedMinutes: 14
objectives:
  - State probability as the long-run fraction of times an outcome happens over many repeats.
  - Explain why the gambler's fallacy is wrong, and how the Law of Large Numbers actually settles the long-run fraction without correcting short-run counts.
  - Distinguish signal (a real underlying pattern) from noise (random wobble), and say why a faint signal you think you see may not be real.
prerequisites:
  - 01-data-and-variation
  - 02-distributions-center-spread
  - 03-sample-and-population
---

A friend pulls out a coin and flips it five times. Heads, heads, heads, heads, heads. She grins and offers you a bet: the next flip, she says, is surely tails by now. Five heads in a row — tails is overdue.

Take the bet, and you will probably lose it. Not because tails won't come, but because the coin has no idea what it just did. It carries no memory of those five heads. The next flip is what every flip has always been: an even shot at either face. The feeling that tails is "owed" is one of the oldest traps in reasoning about chance, and clearing it up is the doorway to the last big idea of this course — the one the rest of the series is built on.

To get there we need to be careful about a word we all think we already own: *probability*.

## What "50% chance" actually means

Ask what "a 50% chance of heads" means and most people reach for the next flip — as if the coin owes you one head for every tail, balanced flip by flip. It doesn't work that way. A single flip is just heads or tails; there is no "half a head" to be found in it.

The honest meaning lives in repetition. **Probability** is how often an outcome happens *in the long run, over many repeats.* "50% heads" is a claim about a long evening of flipping: do it hundreds of times, and *about half* will come up heads. Not exactly half, and not in any tidy alternating order — just close to half, and closer the longer you go.

Picture that long evening. Early on, the running fraction of heads lurches around: three heads in the first four flips puts you at 75%, a cold streak drags you down to 30%, the number jumps with every flip because each flip is a big slice of the small total so far. But as the flips pile into the hundreds and thousands, each new flip is a tiny slice of a large total, and the fraction stops lurching. It drifts in and settles near one-half and stays there. That settling has a name — the **Law of Large Numbers** — and it is the whole reason a probability is a stable, knowable thing rather than a guess.

Two guards keep this idea pointing true, because both are easy to get backwards.

First, the *fraction* settles, but the *counts* do not. After a thousand flips you might sit at 530 heads to 470 tails — a 60-head gap — and yet be at 53%, comfortably near half. Go to ten thousand flips and the gap can grow wider still in raw count while the fraction creeps even closer to one-half. The Law of Large Numbers never promises the head and tail tallies will draw level. It promises the *ratio* will. The gap can grow while the fraction shrinks toward a half, because the denominator is growing faster.

Second — and this is the trap your friend fell into — the long run says nothing about the next flip. The fraction settles by *piling on fresh evidence* until the early wobble is drowned out, not by the past being repaid. The coin doesn't lean toward tails to make up for a run of heads. Each flip stands alone, 50/50, forever.

That second guard is worth its own name, because it has fooled gamblers for centuries.

## A tempting wrong answer: the run of heads

**Problem.** A fair coin has landed heads five times in a row. What is the probability the next flip is heads?

**Solution.** It is one-half — the same as it was for the first flip and every flip since. The five heads are real and already counted; they don't reach forward. A fair coin has no memory, so "five heads, therefore tails is due" — the **gambler's fallacy** — is simply false. The next flip can't see the streak behind it.

Where does the intuition go wrong? It quietly swaps two different questions. *Before* you flip at all, a run of six heads in a row is genuinely unlikely — one chance in sixty-four. But *given* that five have already landed heads, those five are settled fact, and only the sixth flip is still in the air. The only question left on the table is a single fair flip, and a single fair flip is one-half. The unlikeliness of the long run was used up on the flips you already saw.

The Law of Large Numbers does its work the patient way: not by bending the next flip, but by adding so many fresh flips that any early streak becomes a smaller and smaller share of the whole.

## Check yourself

A coin has come up tails eight times running. A bystander says, "Heads is way overdue — bet heads." Is that good reasoning?

<details><summary>Show answer</summary>

No — it's the gambler's fallacy. A fair coin has no memory; the next flip is still one-half heads, no matter how long the tail streak ran. (And if eight tails in a row makes you doubt the coin is fair at all, that's a different and reasonable thought — but it argues for *tails* being more likely, not heads.)

</details>

## Signal through the noise

Now the idea everything has been building toward.

In the last module, you scooped two fair handfuls from the same jar and they didn't match — that was **sampling variation**, results wobbling from one sample to the next, even when nothing in the world changed. Probability is what makes that wobble lawful: it's the same long-run randomness that keeps a coin near one-half. Real measurements come with this wobble baked in. The hard part of statistics isn't seeing the wobble. It's seeing *through* it.

Imagine tuning an old radio. Underneath the hiss there's a song — a real pattern, steady, actually being broadcast. That's the **signal**. The hiss laid over it is the random crackle that belongs to no melody at all. That's the **noise**. Statistics is the practice of telling one from the other: deciding which part of what you're seeing is a real underlying pattern, and which part is just random wobble.

Hold this picture to two guards, both of which the rest of the series leans on hard.

The noise never fully clears. You can turn down the hiss — gather more data, take a bigger sample — but some crackle always remains, the way no measurement ever comes out exactly twice the same. A result that looks clean has noise in it too; you just can't hear it.

And the costlier mistake runs the other way. Lean in to a hissing radio and you can *swear* you hear a tune in the static — a melody assembled out of pure crackle. There was no song. Random noise throws up patterns of its own: a clump of heads that looks like a streak, a difference between two groups that looks like a real effect. Mistaking that for signal — hearing a song in the static — is a **false positive**, and it is exactly how people get fooled by numbers. Some differences are real. Some are only noise wearing the costume of a pattern.

Put plainly:

- A **signal** is a real underlying pattern — something genuinely there in the world.
- **Noise** is the random wobble laid over it — sampling variation, the luck of the draw, chance.
- Telling them apart is the whole job. You can't remove the noise, and you can't trust every pattern you think you hear.

## Exercises

**1.** A weather app says "70% chance of rain tomorrow." Your neighbor says, "That's nonsense — it either rains or it doesn't, so it's really 50/50." What's the honest meaning of the 70%?

<details><summary>Show solution</summary>

Probability is a long-run fraction, not a fact about tomorrow alone. "70% chance of rain" means: across many days that look like tomorrow — same pressure, same fronts, same season — it rains on about seven in ten of them. Tomorrow itself will simply rain or not; the 70% describes the long run of such days, not a coin balanced between two outcomes. The neighbor's "50/50" confuses *two possible outcomes* with *two equally likely outcomes*, which are not the same thing.

</details>

**2.** A roulette wheel has landed on red ten spins in a row. A gambler reasons: "Black is due — it has to even out." Diagnose the error precisely.

<details><summary>Show solution</summary>

This is the gambler's fallacy. A fair wheel has no memory: each spin is independent, so the next spin's odds are unchanged by the ten reds before it. The Law of Large Numbers does *not* say the colors must "even out" by the next spin — it says the long-run *fraction* of reds settles toward its true value over enormous numbers of spins, by drowning the streak in fresh data, not by the wheel owing anyone a black. The ten reds are already counted and don't reach forward. ("It has to even out" also imagines the *counts* equalize; they need not — only the fraction settles.)

</details>

**3.** You flip a coin twenty times and get twelve heads, eight tails. A friend insists the coin must be rigged toward heads. Is twelve-out-of-twenty strong evidence of a loaded coin?

<details><summary>Show solution</summary>

No — this is noise mistaken for signal. Twenty flips is a short run, and short runs wobble: a fair coin landing twelve heads out of twenty is entirely ordinary, the same kind of sampling variation as two unequal handfuls from one jar. Twelve heads is a faint pattern you can easily "hear" in the static, but there's no song there yet — a fair coin produces results like this all the time. To call a coin loaded you'd need a long evening of flips where the *fraction* stayed stubbornly off one-half; one short run of twelve-and-eight can't tell signal from noise.

</details>

**4.** Two clinics report their recovery rates this month: Clinic A, 82%; Clinic B, 79%. A headline announces "Clinic A is the better hospital." Using the signal-and-noise idea, what should you ask before believing it?

<details><summary>Show solution</summary>

Ask whether that three-point gap is signal or noise. Each clinic's rate is an **estimate** from a **sample** of this month's patients, and estimates wobble from one sample to the next purely by chance. A 3-point difference could be a real difference in care — a signal — or it could be the ordinary sampling wobble you'd see between two months at the *same* clinic — noise wearing a pattern's costume. The honest move is to treat "A is better" as a question, not a finding, until you know whether a gap that size is bigger than the month-to-month wobble. Reading a difference as automatically real is exactly the false-positive trap: hearing a song in the static.

</details>

**5.** *(Stretch.)* "The Law of Large Numbers guarantees that if I keep flipping, the number of heads and the number of tails will eventually be equal." True or false, and why?

<details><summary>Show solution</summary>

False — and it's a precise version of the same trap. The Law of Large Numbers settles the *fraction* of heads toward one-half, not the *counts* of heads and tails toward each other. In fact the raw gap between the two tallies tends to *grow* as you flip more, even as the fraction tightens around a half — because the total is growing faster than the gap. So you can be at 5,300 heads to 4,700 tails (a 600-flip gap, wider than ever) and sit at exactly 53%, closer to half than you were at flip ten. The fraction converges; the counts wander. Expecting them to "even out" to equal is the gambler's fallacy in disguise.

</details>

## Recap

Probability turned out to be a promise about the long run, not the next flip: do a thing many times and the *fraction* of any outcome settles toward a stable value, even while the running counts keep wandering and each individual try stays its own coin toss with no memory. That settling is what lets us reason about chance at all — and it's also what makes chance dangerous, because random wobble throws up patterns that look real. Telling the genuine signal from that noise is the one move underneath everything you'll meet next. *Making Sense of Studies* asks it of a single claim — could this result be noise? — and *Lines Through Data* asks it of a relationship — is this trend signal, or static? You now have the ear for both.

