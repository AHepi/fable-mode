---
title: The Black Box That Turns Things Into Numbers
course: jepa
order: 2
summary: What a model (an encoder) is, at the only level JEPA needs — a black box that takes an input like a photo and hands back a list of numbers.
estimatedMinutes: 12
objectives:
  - Explain what an encoder does (an input goes in; a list of numbers comes out).
  - State that the inner workings (the "neural network") can be treated as a black box for this course.
  - Give an example of an input and the kind of number-list an encoder produces.
prerequisites:
  - 01-filling-in-the-blank
---

Last module ended with a promise: a machine that learns by hiding part of the world from
itself and filling in the blank. That's the destination. But before a machine can fill in
anything, it has to do something far more ordinary, and far stranger when you stop to look
at it. It has to take a thing — a photo, a sound, a sentence — and turn that thing into
*numbers.* Everything else in this course is built on top of that one move, so we are going
to spend a short module getting it exactly right and no more.

Think about what a photo *is* to a computer. To you it's your dog asleep on the couch. To
the machine, none of "dog" or "couch" or "asleep" is anywhere to be found. There is only a
grid of color values — millions of tiny numbers saying *this speck is reddish-brown, the one
next to it slightly darker.* The picture is already numbers, but they're the wrong numbers:
a flood of raw color readings that say everything about each speck and nothing about the
dog. Somewhere between that flood and the idea of "a sleeping dog" is the work this course
cares about. The first step of that work has a name, and a shape, and we can draw it.

## A box with one job

Picture a plain box. No gadgetry, no knobs — just a box, sitting on a table, with an opening
on the left and an opening on the right. You feed something in on the left. A moment later,
something comes out on the right.

What you feed in is the **input** — a piece of data, say a photo. What comes out is not a
smaller photo, not a label, not the word "dog." What comes out is a **list of numbers**.
That's the whole job of the box. A photo goes in; a list of numbers comes out. We call this
box an **encoder**, and naming it is the entire point of this module.

The list might look like this:

`[0.2, 0.9, 0.1, 0.7]`

Four numbers — though I've made that up for illustration, and a real encoder's list is far
longer, often hundreds or thousands of numbers long. The exact values aren't something a
person picks or reads; the box produces them. For now, resist the urge to ask what they
*mean*. They will turn out to mean something quite beautiful, but that's the next module's
job, and reaching for the meaning early is the surest way to get it wrong. Right now, hold on
to just the shape of the thing: **input on the left, a list of numbers on the right.**

You may reasonably ask: what's *inside* the box? How does it turn a sleeping dog into
`[0.2, 0.9, 0.1, ...]`? The honest answer, and the one this course will stand by, is that we
are not going to open the box. The machinery inside is a **neural network** — that's the kind
of black box used here, the part that does the actual turning. Under the hood it is layers of
arithmetic, tuned by a process we'll meet in a later module. But you can build a complete,
correct picture of how JEPA works without ever looking at a single one of those layers, the
same way you can understand what a clock tells you without prying off the back to count the
gears. So we'll set the inside aside. It's plumbing this course won't open. From here on, the
encoder is a black box: input in, numbers out, and what happens between them is somebody
else's chapter in somebody else's book.

## Running one thing through the box

Let's send a single concrete input through, start to finish, so the shape is unmistakable.

Take one photo: your dog, asleep, late afternoon light. That photo is the input. We hand it
in on the left side of the encoder.

Inside, the machinery does its work — work we are deliberately not watching. Out the right
side comes a list of numbers. Let's say, again purely for illustration:

`[0.81, 0.04, 0.55, 0.55, 0.12, ...]`

and so on, for however many numbers this particular box produces. That list is what the
encoder *made* of the photo. It is not the photo shrunk down. It is not a caption. It is not
a verdict of "dog." It is a list of numbers — the encoder's answer to the question "what did
I just look at," written in the only language the box speaks.

One thing worth saying plainly, because it trips people up: those numbers are not words in
disguise. There's no hidden dictionary where `0.81` quietly stands for "furry" and `0.04`
for "asleep." A person can't read the list and recover the photo, the way you'd read a
caption. The list isn't *for* reading. What it's actually good for — and it's good for
something remarkable — is the question we open with next.

## Check yourself

A photo of your dog goes into the encoder. Which of these comes out the other side: (a) a
smaller, blurrier copy of the photo, (b) the word "dog," or (c) a list of numbers?

<details><summary>Show answer</summary>

(c) — a list of numbers. The encoder's one job is to turn an input into a list of numbers.
It doesn't shrink the photo (a copy, even blurry, is still a picture), and it doesn't hand
back a word or a label. A photo goes in; a list of numbers comes out.

</details>

## Exercises

**1.** In your own words, state the encoder's one job — what goes in, and what comes out.

<details><summary>Show solution</summary>

An input goes in (a piece of data, such as a photo); a list of numbers comes out. That's the
whole job. The encoder is the black box that turns a thing into a list of numbers. If your
answer mentioned what the numbers *mean*, or *how* the box works inside, you reached past
what this module claims — both of those are deliberately left for later. The shape alone is:
input in, number-list out.

</details>

**2.** A friend says, "So the encoder reads the photo and writes a one-word caption, like
'dog.'" What's wrong with that description?

<details><summary>Show solution</summary>

The output isn't a word or a caption — it's a list of numbers, often hundreds or thousands of
them. A caption is a human-readable label; the encoder's list is not meant to be read by a
person at all. Your friend has swapped the actual output (a long list of numbers) for
something legible and short. The box doesn't name what it saw; it turns what it saw into
numbers.

</details>

**3.** We said we won't open the box to see how it works inside. Give one reason that's a
reasonable way to learn how JEPA works, not a cop-out.

<details><summary>Show solution</summary>

You can understand *what* a thing does without understanding *how* it does it — you read a
clock without counting its gears, drive a car without knowing the engine. JEPA's ideas live
in how the boxes are *arranged and used* (which input goes in which box, what gets compared
to what), not in the arithmetic inside any one box. That arithmetic is real and
matters to the people who build these systems, but it's a separate subject; treating each box
as input-in, numbers-out lets us see the whole machine clearly without drowning in plumbing.

</details>

**4.** *A tempting wrong answer:* someone reasons, "A photo is already made of numbers — all
those color values. So the photo and the encoder's output are basically the same list of
numbers." Why isn't that right?

<details><summary>Show solution</summary>

It's true a photo is stored as numbers (color values for each speck). But those are the raw
readings — a flood of values describing every speck of color, one per pixel. The encoder's
output is a *different, much shorter* list that the box produced from the photo, not the
photo's own color values copied over. The point of the encoder is to turn the unwieldy flood
into a compact list — so the two lists are not the same, not the same length, and not the same
kind of thing. (Exactly *what* makes the encoder's short list more useful than the raw flood
is the heart of the next module.)

</details>

## Recap

We've installed the first piece of the machine and given it its name: the **encoder**, a
black box that takes an input — a photo, say — and hands back a **list of numbers**. We
agreed not to open it; the machinery inside is the kind this course treats as plumbing, which
costs us nothing and saves us from a tangent that would swallow the whole course. We were also careful
about what we did *not* claim. We never said what those numbers mean, or why a list like
`[0.81, 0.04, 0.55, ...]` is worth producing at all. That restraint is the setup for the
payoff: those numbers will turn out to have a quiet, beautiful structure — inputs that are
alike land on lists that sit close together — and that structure is where "the gist" finally
starts to take shape.
