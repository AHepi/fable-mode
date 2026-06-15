---
title: Two Things at Once
course: lines-through-data
order: 1
summary: "Plot two measurements against each other and a cloud of points appears: how to read its tilt and tightness, what correlation captures on a −1 to +1 scale, and the trap hidden in the number zero."
estimatedMinutes: 15
objectives:
  - Read a scatter plot by describing the tilt and tightness of its cloud of points.
  - Describe correlation as the strength and direction of a straight-line relationship on a −1 to +1 scale.
  - Explain why a correlation of zero means no linear relationship, and how an outlier can fake or inflate one.
prerequisites: []
---

Hand someone the heights and weights of two hundred people and they see almost nothing — two columns of numbers, refusing to talk. But draw it: height along the bottom, weight up the side, one dot per person, and the page speaks. The dots lean. Taller tends to go with heavier, and you can *see* it before you can say a word about it.

We spend our lives asking whether two things go together. Do students who sleep more score higher? Do pricier wines taste better? Each question pairs two measurements, and there is a picture that answers it on sight. This module is about reading that picture, and about the one number people most love to misread.

## The cloud

Take any two measurements on the same subject — a person, a city, a day. Call one the across-direction and the other the up-direction, and plant a single point for each subject: across by its first measurement, up by its second. Two hundred subjects, two hundred points. What you get is a **cloud** — a loose drift of dots over the page.

The shape of that cloud is the whole message. Sometimes it tilts up to the right: high on one measurement tends to go with high on the other, so the dots climb as you read across. Sometimes it tilts down: high on one goes with low on the other, and the cloud slides toward the floor. And sometimes it tilts nowhere at all — a round, shapeless blob, where a subject's across-value tells you nothing about its up-value.

Here is where an old idea earns its keep. The *Statistics Essentials* course ends on **signal versus noise** — a real pattern heard through random fluctuation, the way a song comes through radio static. A tilted cloud is exactly that. The tilt is the signal: a genuine tendency for the two things to track each other. The fuzz around the tilt — the dots scattering rather than sitting on a clean line — is the noise: the ordinary **variation** real data always carries (the wobble that, as Essentials shows, is the normal state of data, not a mistake). So a scatter plot is signal coming through noise, and reading one means asking two things at once: *which way does the cloud lean,* and *how tightly do the dots hug that lean?*

One guard, and it matters: not every cloud has a line worth drawing. A round blob is a real and honest answer — it says *these two things don't track each other in a straight-line way.* Don't go hunting for a tilt that isn't there.

## Scatter, and the number that measures it

Two plain-words statements carry this module, and they bridge straight into each other.

The first names the picture. A **scatter plot** plots each subject as a single point, placed by its two measurements; the cloud of those points shows whether the two measurements rise together, move oppositely, or show no pattern.

The second puts a number on what your eye already sees. **Correlation** measures the strength *and* the direction of a *straight-line* relationship between two measurements, on a scale running from −1 to +1. The bridge between the two is direct: the cloud's lean is the *direction* correlation reports, and how tightly the dots hug that lean is the *strength* it reports. Correlation is your eye's verdict, written as a single number.

Read the scale piece by piece. A correlation of +1 is a cloud collapsed onto one perfect upward line — every dot on it, no fuzz, the two measurements locked in step. A correlation of −1 is the same perfection pointed downhill. Zero sits in the middle: no *straight-line* tendency either way. The sign tells you the lean's direction; the distance from zero tells you the tightness. Near +0.9 is a snug upward cloud crowding a rising line; near +0.2 is a loose upward drift you'd half-miss; near −0.7 is a fairly tight downhill slide. Closer to either end, the dots hug a line more tightly. (Statisticians write this number as r. We'll keep calling it the correlation, and you never need its formula to read it.)

## Reading four clouds

Picture four scatter plots side by side, and read each the way you'd read a face.

**A tight upward cloud.** Hours studied across, exam score up. The dots form a narrow band climbing to the right — a little fuzz, but the rise is unmistakable. Verdict: a strong positive correlation, near +0.85. The signal is loud; the noise is a thin haze around it.

**A loose upward cloud.** Daily coffee cups across, hours slept up. The dots drift up to the right, but barely — a wide, shaggy smear you could almost call shapeless. Verdict: a weak positive correlation, maybe +0.2. A whisper of a tendency, mostly drowned in noise.

**A blob.** Shoe size across, exam score up. The dots sit in a round patch with no lean. A subject's shoe size tells you nothing about their score. Verdict: correlation near zero — no straight-line relationship. This is the honest blob, and zero is the right answer.

**A smile.** Hours of sleep across, alertness up — but now imagine too little sleep *and* too much both leave people groggy, with the sharpest minds in the middle. The dots make a clear, strong U-shape you could trace with a finger. There is an obvious, powerful relationship here. And yet the *correlation* comes out near zero — because correlation only ever measures the *straight-line* part, and a symmetric curve has no straight-line lean: its uphill right half and downhill left half cancel. The number says "zero"; the picture says "pattern." Both are telling the truth about different questions.

That fourth cloud is the one to carry out of this module.

## Check yourself

A scatter plot of two measurements comes out as a round, even blob with no tilt. What is the correlation, roughly, and what does it tell you?

<details><summary>Show answer</summary>

The correlation is near zero. A round blob has no lean for a straight line to follow, so there's no straight-line relationship between the two measurements: knowing one tells you nothing about the other. (Contrast this with the U-shaped cloud, where correlation is *also* near zero but a strong relationship genuinely exists — there, zero is hiding something. For a featureless blob, zero is the plain truth.)

</details>

A friend reports two correlations: study time vs. exam score comes out at +0.9, and dollars spent on tutoring vs. exam score at −0.9. Which relationship is *stronger*, and which *direction* does each lean?

<details><summary>Show answer</summary>

They are equally strong. Strength is the distance from zero, and +0.9 and −0.9 are the same distance out — both clouds hug a line equally tightly. The signs only set the lean: +0.9 climbs (more study, higher score), while −0.9 falls (in this odd dataset, more tutoring spend goes with lower scores). The minus sign is about direction, not weakness.

</details>

## Exercises

**1.** A study reports the correlation between number of firefighters sent to a blaze and the damage the fire causes: +0.8. Does this tight upward cloud mean firefighters cause damage? What is the plot actually showing?

<details><summary>Show solution</summary>

The correlation describes the *picture* — bigger fires draw more firefighters *and* cause more damage, so the two rise together and the cloud leans up tightly. That's all a correlation reports: how the two measurements move together as you read across the plot. It does not say which, if either, drives the other; the size of the fire is plausibly behind both. A correlation reads a cloud's tilt and tightness; reading a *cause* into it is a separate, much harder question (and the subject of a later module). Don't let a tight cloud talk you into a cause.

</details>

**2.** Two relationships are measured. Heights of fathers and sons: correlation +0.5. Hours of practice and free-throws made: correlation +0.95. Someone says "the +0.5 one barely matters — the effect must be tiny." What's wrong with that reading?

<details><summary>Show solution</summary>

Correlation measures how *tightly* the dots hug a line, not how *big* the underlying effect is. A +0.5 means a real but loose upward cloud, with plenty of scatter; +0.95 means a snug one. Neither number says anything about *how much* the up-measurement changes as the across-measurement grows — a relationship can have a steep, important real-world effect and still show only a middling correlation if the cloud is fuzzy, or a gentle, trivial effect with a high correlation if the cloud is tidy. "High correlation = big effect" conflates two different things: tightness around a line and the steepness or real-world weight of the relationship. The +0.5 may matter enormously; the number alone can't tell you.

</details>

**3.** A scatter of daily temperature (across) against ice-cream sales (up) makes a clean, strong arch: sales climb as it warms from cold to mild, peak in pleasant weather, then fall again in scorching heat (too hot to go out). The computed correlation is about 0. Has the calculation failed? What's going on?

<details><summary>Show solution</summary>

Nothing failed. There is a strong, obvious relationship — the arch is unmistakable — but it is a *curve*, not a line. Correlation only measures the *straight-line* part of a relationship, and a symmetric arch has no overall straight-line lean: the rising half and the falling half cancel out, leaving a number near zero. This is the headline trap of the module: a correlation of zero means *no linear relationship*, not *no relationship at all*. Always look at the cloud, not just the number — a featureless blob and a strong arch can report the same zero while telling completely different stories.

</details>

**4.** A cloud of fifteen points sits in a loose, near-shapeless blob — correlation close to zero. Then one sixteenth point is added far up and to the right, way off on its own. Suddenly the correlation jumps to +0.6. What happened, and how much should you trust that +0.6?

<details><summary>Show solution</summary>

A single far-flung point — an **outlier**, a value sitting well away from the rest (the term comes from *Statistics Essentials*) — can swing a correlation hard. Placed up and to the right, that one point creates an apparent upward lean across the whole plot, dragging the number from near zero to +0.6 even though the original fifteen points show no straight-line tendency. The correlation is now reporting one stray dot, not a real pattern in the bulk of the data. Trust it very little: one point can fake or inflate a correlation, so a number that depends on a single dot is a number to question. This is exactly why you read the cloud first and the number second — the picture would show that lone point standing apart, and the eye would refuse to be fooled.

</details>

## Recap

A scatter plot turns two columns of numbers into a cloud you can read at a glance: which way it leans, and how tightly the dots crowd that lean. Correlation puts those two readings into one number from −1 to +1 — sign for direction, distance from zero for strength — and it measures only the *straight-line* part of how two things move together. So a zero can mean a featureless blob, or it can hide a strong curve that simply has no straight-line lean, and a single outlier can manufacture a correlation out of noise. The cloud is the truth; the number is a summary of it, and a summary you should never read without glancing back at the picture it came from. Next we draw the line those clouds keep hinting at.
