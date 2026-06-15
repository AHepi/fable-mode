---
title: The World Wobbles
course: stats-essentials
order: 1
summary: "Why real measurements never come out all the same — and why that variation is the subject of statistics, not a mistake to erase."
estimatedMinutes: 12
objectives:
  - Say what data is and explain why genuine measurements vary.
  - Recognize variation as the thing statistics studies, not as error to be erased.
  - Spot an outlier and explain why a value far from the rest is not automatically "wrong."
prerequisites: []
---

Weigh yourself five mornings in a row and you will not see the same number five times. The scale says one thing on Monday, a little more on Tuesday, a little less on Thursday. Nothing is broken. You drank a glass of water, the floor isn't quite level, the morning was warmer. Step on five different scales at five different stores and you will get five more answers.

Most of us were taught to treat this as failure — a measurement that won't sit still feels like a mistake hiding somewhere, a wobble to track down and stamp out. But the wobble is not the problem. The wobble is the thing worth looking at. **Variation is the subject of statistics** — the whole field is built to study how and why numbers differ, not to pretend they don't. That sentence is the ground every later idea in this series stands on, so it's worth saying once, plainly, and meaning it.

## What "data" and "variation" actually are

Two plain words first, because we lean on them for the rest of the course.

**Data** is the record of what you measured or observed — the actual numbers you wrote down. Five weights from five mornings are data. The ages of everyone on a bus, a column of test scores, a list of house prices: all data. Nothing computed yet. Just the measurements, as they came.

**Variation** is the fact that those measurements differ from one another. Not all the weights matched; not all the ages, not all the prices. When you collect real numbers about real things, they come out different. That difference *is* the variation.

Here is the shift this course asks of you. The natural reaction to a spread of different numbers is to ask, *which one is right?* — as if there were a single true value and the rest were smudges around it. For many real questions, that's the wrong question. Measure the heights of everyone in a packed room and no single height is "the right one." People genuinely come in different heights. The differences aren't smudges on a true answer; the differences are the answer.

That picture — a roomful of people, every one of them real, every one a different height, not one of them "wrong" — is worth holding onto. Call it **a crowd's heights**. We come back to it again and again, because almost everything in statistics is a way of looking at a crowd like that and asking sensible questions about it. The temptation is to squash the crowd down to one number ("the average person is five foot seven") and call it a day. Resist that for now. The crowd has a *shape* — most people clustered in the middle, a few quite short, a few quite tall — and the shape is the whole point. We give it a proper treatment next module. For today, just notice it's there, and that flattening it loses something real.

When the numbers in a crowd are spread around their middle, it's natural to say they **wobble** or **scatter** around a center — some sitting close to the typical value, some further out. Keep that word *wobble*, and keep one thing firmly attached to it: the wobble is genuine. It is not measurement error, not sloppiness, not a sign anyone did anything wrong. People really are different heights. Houses really do cost different amounts. The scatter is the world, faithfully recorded.

## A worked look: six commute times

Suppose you start a new job and want to know how long the trip takes. You time the door-to-door commute on six ordinary mornings and write down the minutes:

> 31, 28, 34, 30, 33, 52

Look at the first five. They differ — 28 up to 34 — and none is the "true" commute time you got wrong on the other four days. Traffic was lighter one day, a light caught you the next. That spread of a few minutes is ordinary variation, and it is genuine information: the trip is usually around half an hour but can swing a few minutes either way. Time it once, get 28, and you'd fool yourself about how reliable that is.

Now look at the 52. It sits far past the others — nearly twenty minutes longer than any of them. A value that sits well away from the rest of the data has a name: an **outlier**. Spotting one is easy. Knowing what to *do* with it is where people go wrong.

The tempting move is to call the 52 a mistake and cross it out, because it doesn't match. But pause. *Why* was that morning 52 minutes? Maybe a road was closed. Maybe there was a crash. Maybe Mondays are always like that. None of those is an error in your measurement — the trip honestly took 52 minutes. An outlier is a value far from the rest; it is *not* automatically a wrong number. Sometimes it's the most important number you have: if one morning in six is a disaster, that's exactly what you'd want to know before promising to open the shop at nine. You don't get to delete a value because it's inconvenient. You get to ask where it came from.

## Check yourself

A friend records the daily high temperature in their town for a week and gets seven different numbers. They worry their thermometer is faulty because the readings "won't agree." Are they right to worry?

<details><summary>Show answer</summary>

No — at least not for that reason. Daily highs *should* differ day to day; the weather genuinely changes. Seven different readings are seven honest measurements of seven different days, not seven attempts at one true number. The variation is the world doing its thing, not the thermometer failing. (A real fault would show up another way — say, every reading implausibly high.)

</details>

A second one, a little harder. In the commute data, would the picture be clearer if you simply dropped the 52 so all the numbers sat close together?

<details><summary>Show answer</summary>

No. Dropping it would make the numbers *look* tidier while hiding something true: one morning in six really did take far longer. Tidying by deleting the inconvenient value doesn't give you a clearer view of your commute — it gives you a flattering one. The honest move is to keep the 52, find out *why* it happened, then decide whether such mornings are common enough to plan around.

</details>

## Exercises

**1.** Five people weigh the same bag of apples on five different kitchen scales and get: 1.02 kg, 0.98 kg, 1.05 kg, 1.00 kg, 0.97 kg. Is the variation here genuine differences in the apples, or something else? Explain in a sentence.

<details><summary>Show solution</summary>

Not genuine differences in the thing measured — it's the same bag every time, so its true weight doesn't change. The spread comes from the scales (and how they're read): different instruments disagree a little. This is the one case where "wobble" really is measurement imprecision rather than real-world variety. The lesson is to ask *what is varying* — the thing, or the measuring? Here it's the measuring. (Contrast five *different* bags, where the spread would be real.)

</details>

**2.** Someone says: "I surveyed ten cafes and they charge different prices for a coffee, so my data is unreliable." What's wrong with their reasoning?

<details><summary>Show solution</summary>

Different cafes charging different prices isn't unreliable data — it's the data working perfectly. Cafes genuinely set different prices; that variation is the very thing a survey of prices is meant to capture. The data would be *suspicious* if all ten came out identical. They've mistaken variation (the subject) for error (a flaw). What they've learned is real: prices vary, and now they can see by how much.

</details>

**3.** In a list of house sale prices for one neighborhood, one home sold for ten times the price of every other home. A friend says, "That must be a typo — throw it out." Give two reasons to slow down before deleting it.

<details><summary>Show solution</summary>

First, it might be true: a large or unusual property could genuinely have sold for that much, in which case it's real data, not a typo. An outlier is a value far from the rest — and being far from the rest doesn't make it wrong. Second, even if you suspect an error, the responsible move is to *check the source* (look up the sale), not delete on sight, because quietly dropping values that don't fit is how you end up with a tidy, false picture. "It doesn't match" is a reason to investigate, not to erase.

</details>

**4.** A weather app reports that your city's average July temperature is 27 degrees. Your friend plans to wear the same outfit every day in July because "it'll be 27 every day." What has your friend forgotten?

<details><summary>Show solution</summary>

That the average is one number squeezed out of a whole crowd of different days. July won't be 27 every day — some cooler, some hotter, a few far out at either end. Collapsing all those days into a single "27" hides the variation, and the variation is exactly what your friend needs in order to pack. The crowd of July days has a shape; the average is just one point in it. (How to describe that shape properly is the next module's job.)

</details>

## Recap

Real measurements of real things come out different from one another, and that difference — *variation* — is not a mistake to scrub away but the very thing statistics exists to study. We met the picture we'll lean on all course: a crowd's heights, everyone real, everyone different, none of them wrong, with the numbers scattering around a center. And we met the outlier — a value far from the rest, which earns an investigation, not an automatic delete. We have a pile of varied numbers and a promise: next, we give that pile a shape, and learn what an average really does and doesn't tell you.
