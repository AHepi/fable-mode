---
title: How a Machine Gets Less Wrong
course: jepa
order: 4
summary: What "learning from data" means — a black box that starts useless, measures how wrong it is, and is nudged again and again until it is less wrong.
estimatedMinutes: 14
objectives:
  - Describe training as the loop of measuring error and adjusting to reduce it.
  - Explain "error" as a distance between a prediction and the desired answer.
  - State that the adjustment machinery can itself be treated as a black box here, with no equations needed.
prerequisites:
  - 02-the-black-box
  - 03-representation-space
---

Hide a coin in one hand behind your back and ask a small child to guess which. She points.
You open your hands. She was wrong, so next time she points the other way, and the time
after that she starts watching your shoulders, your eyes, the little tells you don't know
you have. Nobody hands her a rulebook for coin-guessing. She guesses, finds out, adjusts —
and somewhere in all that fumbling, she gets good at it.

That, stripped to the bone, is what people mean when a machine "learns from data." No
rulebook gets written, no understanding poured in. Something starts out bad at a task, is
told how bad, and is changed a little so it will be slightly less bad next time. Do that an
unthinkable number of times and the thing becomes useful. The word for the whole process is
**training**, and almost everything that comes later, JEPA included, runs on this one loop.

## A box that starts out useless

Remember the encoder from module 02: the black box where a photo goes in and a list of
numbers comes out. And remember from module 03 what those numbers are for — they're a point
in representation space, where *similar inputs should land close together*. Two photos of
cats near each other; a cat and a fire truck far apart.

Here is the part nobody tells you up front. A fresh, untrained box does none of that. Its
number-lists are noise. Feed it two cats and it might fling them to opposite corners; feed
it a cat and a fire truck and it might drop them on the same spot. The box isn't broken — it
hasn't been shaped yet. Out of the factory it is, for our purposes, useless.

So the question isn't "how does the box know things." It's: *how do you take a box that's
useless and grind it, step by step, into one that's useful?* You can't reach inside and
hand-tune it — we treated its insides as plumbing in module 02, and we're keeping that
promise. You can only show it examples and react to what it does.

## Warmer, colder

You've played the hidden-object game. Someone hides a thing in the room; you wander; they
call *warmer* as you close in and *colder* as you drift away. No map, no one telling you the
answer. All you ever get is one thin signal — closer or farther — and yet it's enough.
Follow "warmer" long enough and your hand closes on the thing.

Training a box runs on that same thin signal. You show the box an example. It makes a guess.
You don't tell it the right answer outright; you tell it **how wrong** it was — its
warmer-or-colder. And here's where module 03 pays off: *how wrong* is a **distance**. The
guess is a list of numbers; the answer you wanted is a list of numbers; and the gap between
two number-lists is the thing we already named — distance in representation space. A big
distance means very wrong, freezing cold; a small distance means nearly right, burning warm.
There's a technical word for this how-wrong number — **loss** — but it is the error, the
distance between the guess and the desired answer, and that's what we'll call it from here:
the **error**.

One honest caution before the picture runs away with us. In the children's game you take
*one* step and get *one* "warmer." Real training is not so tidy. A box has a vast number of
internal settings — call them knobs — and a single round of training nudges *millions of
them at once*, each in the direction the error says will help. So the game captures the
*spirit* exactly — an error signal steering adjustment — but not the mechanism. There is no
single guess walked across a room; there is a storm of tiny simultaneous nudges.

How does the machine work out which way to turn millions of knobs from one error number?
That is real and clever and entirely beside our point. It's another black box, and we don't
need to open it. All we need is the contract: *give this box an error, and it adjusts the
knobs so the error tends to shrink.*

## The loop, in plain words

Put the pieces in order and the whole of training is three steps on repeat:

1. **Show and guess.** Feed the box an example. It produces an output — its guess.
2. **Measure the error.** Compare that guess against the answer you wanted, and read off
   the distance between them. That distance is the error.
3. **Nudge.** Hand the error to the adjustment machinery, which tweaks the box's knobs a
   touch, so the same example would come out a little less wrong.

Then you do it again, with the next example, and the next — across more examples than you'd
care to count. Each nudge is tiny and, on its own, almost pointless. But "almost pointless,"
repeated millions of times and always aimed downhill by the error, is how a box that began
as noise settles into one whose number-lists mean something. The cats drift together; the
fire truck drifts away. Nobody moved them by hand; the error did, one small correction at a
time.

## Watching one loop turn

Picture the box at the very start, fed two photos: a tabby cat and a ginger cat. They ought
to land close in representation space. But this box is fresh, so it tosses the tabby to one
corner and the ginger to the far opposite — a large distance where we wanted a small one.
That gap *is* the error, and it's big. Freezing cold.

The error goes to the adjustment machinery, which nudges the knobs a hair, in whatever
combination pulls those two points a little nearer. Next time the same two cats come around,
the box places them slightly less far apart. Slightly less wrong. A degree warmer.

Now multiply that. Thousands of cat pairs, dog pairs, cars, faces, trees — each one landing
somewhere, each placement scored by how wrong it is, each error spending itself on another
round of nudges. No single pass fixes anything you'd notice. But the box is bent,
relentlessly, toward putting like things near like things — because that is what keeps
making the error smaller. After enough turns, the same box that started as noise now does
the job we wanted from the encoder all along.

## Check yourself

**A.** In one sentence: what does "the error" measure, and what earlier idea is it built
out of?

<details><summary>Show answer</summary>

The error measures *how wrong* the box's guess is — and it's built out of **distance**
from module 03. The guess is a list of numbers, the desired answer is a list of numbers,
and the error is the distance between those two lists. (We named the technical term for it
once — but "error" is the word we use.)

</details>

**B.** The warmer/colder game has you take one step at a time. Name the one way real
training departs from that picture.

<details><summary>Show answer</summary>

In the game you adjust one thing (your position) per "warmer." Real training nudges a vast
number of internal knobs *all at once*, every round, each in the direction the error says
will help. The game gets the spirit right — an error signal steering adjustment — but not
the mechanism.

</details>

## Exercises

**1.** Put the training loop in your own words as three steps, in order.

<details><summary>Show solution</summary>

(1) Show the box an example and let it guess. (2) Measure the error — the distance between
that guess and the desired answer. (3) Nudge the knobs so the error would be a little smaller
next time. Then repeat over a vast number of examples. The engine is step 2 feeding step 3:
the error decides which way the nudge goes.

</details>

**2.** A friend says, "So training means the machine *memorizes* the right answer for every
photo it's shown." Explain why that misses what the loop actually does.

<details><summary>Show solution</summary>

A tempting wrong answer: training is memorizing a giant answer sheet. But the box never
stores answers — only its knob settings, which get nudged a hair at a time. Each example
isn't filed away; it's used once to produce an error, and the error spends itself adjusting
the knobs. What slowly emerges is a box that handles inputs it has *never seen* sensibly —
placing a brand-new cat near other cats — which a memorized answer sheet could never do.
Learning here is being shaped by examples, not keeping a copy of them.

</details>

**3.** Why does the box need a vast number of examples? Couldn't one perfect nudge do the
job?

<details><summary>Show solution</summary>

Each nudge is deliberately tiny and aimed at one example's error at a time. A single big
correction that fixed one photo would likely wreck the box's placements for everything else.
Progress comes from huge numbers of small nudges that, on average, pull in one consistent
direction — like-things-together — across the whole pile of data. The *accumulation* is the
learning; no one nudge carries it.

</details>

**4.** *(Stretch.)* A skeptic insists, "There must be a human checking each guess and
grading it — otherwise where does the 'how wrong' come from?" For the cat-pairs example in
this module, point out where the "right answer" actually came from. (We'll build this idea
out fully in the next module.)

<details><summary>Show solution</summary>

It feels like a person must sit there marking every guess — but nobody did. The desired
answer in the cat-pairs example, "these two should land close," came from the *data itself*:
we knew both photos were cats, so we already knew they ought to be near. The error fell out
of comparing the box's placement against what the data implied — no human grader required.
Manufacturing the right answer from the data instead of from a person is the whole subject
of the next module.

</details>

## Recap

A useful box is not built; it's worn into shape. It starts as noise, and the same loop turns
over and over — guess, measure how wrong (an error, the distance between the guess and the
answer we wanted), nudge the knobs to shrink that error — until a box that placed cats and
fire trucks at random places like with like. The warmer/colder signal is the heart of it,
with the honest asterisk that real training turns millions of knobs at once, machinery we
left as a black box we didn't need to open. And one question is now impossible to ignore: in
the coin game and the cat pairs alike, we quietly already knew the right answer. Where does
that answer come from when there's no one around to supply it? That's next.
