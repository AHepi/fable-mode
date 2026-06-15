---
title: Filling in the Blank
course: jepa
order: 1
summary: "The question JEPA is built to answer — how a machine could learn about the world on its own — and the course's central fork: when something is hidden, predict its gist or paint in every detail?"
estimatedMinutes: 14
objectives:
  - Describe, in plain terms, the problem JEPA addresses (learning about the world without human labels).
  - Distinguish "predicting the gist" from "reconstructing every detail" intuitively.
  - State the headline difference between JEPA and LLMs that the course will unpack.
prerequisites: []
---

Cover the bottom half of this sentence with your hand and you can still read it: the
top halves of the letters are enough, and your eye fills in the rest without asking
your permission. Tear the last page out of a mystery and most readers can still tell you,
roughly, who did it. Walk into a kitchen and you know, before you've looked, that there's
a floor under your feet and a ceiling overhead.

We do this constantly, and we almost never notice. The world hands us a part of something
and we supply the rest — not by recalling that exact kitchen, but
because we have, over a lifetime, learned how the world tends to go. Letters have tops and
bottoms that match. Mysteries have culprits. Rooms have floors. Fill in the missing piece
well enough and you've proven something quietly important: you understood the thing in the
first place. You can't reliably guess what's behind the curtain unless you already know
what kind of room you're in.

That single observation — **that being able to fill in a blank is evidence you understood
what surrounds it** — is the seed of an idea that has occupied some of the most ambitious
work in artificial intelligence. The question is whether a machine could learn the same way.
Not by being spoon-fed millions of labeled answers by people. Just by looking at the world,
hiding part of it from itself, and trying to fill in the blank. If it could learn to do that
well, it would have to pick up something real about how the world is put together — the way
you did, without anyone sitting you down to teach you that kitchens have floors.

This course is about one particular machine built on that idea. It's called **JEPA** — short
for *Joint Embedding Predictive Architecture*, a name we will earn piece by piece and not a
moment sooner. For now, forget the name. Hold on to the picture: something hidden, and the
attempt to fill it in.

## Two ways to fill a blank

Here is where the whole course turns, so let's go slowly.

Suppose a page has been torn out of a novel — the climactic chapter, gone. I ask you to fill
in what was on it. There are two genuinely different things you could try to do, and the
difference between them is the difference this entire course is about.

**The first way: write the missing page.** Reproduce it word for word. Every sentence, every
comma, the exact phrasing the author chose. This is filling in the blank by *putting back the
actual stuff that was there.*

**The second way: tell me what happened.** Don't reconstruct the prose — give me the *gist*.
"The detective confronts the brother; he confesses; the inheritance was the motive." You
haven't reproduced a single original sentence. You've predicted the shape of what was missing,
the part that actually matters, and thrown away the part you could never have gotten exactly
right anyway.

Notice that the second task is both *easier* and, in a strange way, *deeper*. Easier, because
you were never going to guess the author's exact wording — nobody could, and trying is mostly
wasted effort. Deeper, because to name what happened you have to actually understand the story.
You can parrot a sentence without following the plot. You cannot summarize the plot without
following it.

This is the fork the rest of the course walks down. When part of something is hidden, you can
**paint in every missing detail** — put back the exact pixels, the exact words — or you can
**predict the gist** of what's missing. At a glance, the tools you may already know lean hard
on the first way. An image generator asked to fill a blanked-out patch of a photo paints in
pixels, one by one, until the hole is gone. A chatbot, given the start of a sentence, produces
the actual next words. These are *generative* approaches: they fill the blank by manufacturing
the real, raw thing that was missing.

JEPA takes the other road. It predicts the gist — and the spine of this whole course, the
phrase worth holding onto, is exactly that: **predict the gist, not the pixels.** That one
line will look almost too simple right now. By the end you'll see it's a genuinely different
bet about how a machine should learn, and we'll spend twelve modules earning the right to say
why.

One honest beat before we go on, because you've almost certainly used the other kind of system
and the contrast is the reason you're here. When a chatbot — an **LLM**, the kind of AI behind
chatbots — fills in a blank, it produces the actual next *words*. JEPA, faced with a blank, aims
instead at the *gist* of what's missing and never bothers to spell the missing thing back out.
That's the headline. The full, fair comparison — where they're alike, where they differ, and
why anyone would prefer one over the other — is the last module's job, not this one's. For now,
one sentence is enough: one fills the blank with the thing itself; the other reaches for the
idea of the thing.

## Walking it through: the torn-out photo

Let's make the fork concrete with a single example and watch both ways play out.

Picture a photograph of a park bench under a tree, and someone has cut a square hole out of the
middle of it. Inside that hole, in the real photo, was part of the tree's foliage — a tangle of
leaves with light coming through. Your job: fill in the hole.

**The paint-every-detail way.** You try to reproduce the leaves. The exact leaf in the
upper-left, tilted just so. The precise speckle of sunlight on the third branch. The particular
way one leaf curls at its edge. Think about what you're really being asked to do here: get
thousands of tiny, fiddly, *unpredictable* specifics exactly right. Which way did that one leaf
curl? There's no telling. It curled however it happened to curl that afternoon. You could study
ten thousand photos of trees and still never predict that one leaf, because nothing about the
rest of the picture determines it. Chasing it is effort spent on noise.

**The predict-the-gist way.** You don't try to draw the leaves at all. You predict, instead,
something more like: *leafy foliage here, lit from the upper left, denser toward the trunk.*
That's the gist — what any competent observer would agree belongs in that hole, stripped of the
specifics nobody could have called. And here's the quiet payoff: to produce that summary, you
had to actually take in the rest of the photo. You had to notice it's an outdoor scene, that
there's a tree, where the light is coming from. The gist isn't a shortcut around understanding
the picture. It *is* the understanding, written down.

Now, one warning that this whole course depends on, so let me plant it firmly. When JEPA
"predicts the gist," it does **not** produce a little mental picture of leaves. It doesn't draw
anything, doesn't imagine a scene, doesn't paint a fuzzy version of the hole. What it actually
produces is something stranger and, it will turn out, more useful — not a picture at all. We
will meet exactly what it is soon, and giving it a shape is most of the work of the early
modules. For now, resist the urge to picture JEPA "imagining" the leaves. It isn't. Hold the
word *gist* loosely: it's a placeholder for "what matters about the missing part," and we'll
make it precise rather than pretend it already is.

## Check yourself

A friend says: "So JEPA looks at the hole in the photo and draws in its best guess of the
missing leaves — like a really good photo-touchup tool." What's wrong with that, in one
sentence?

<details><summary>Show answer</summary>

JEPA doesn't draw or paint anything — it doesn't fill the hole with pixels at all. It predicts
the *gist* of what's missing (something like "leafy foliage, lit from the left"), not an image
of it. The "really good photo-touchup tool" is describing the *other* road — the paint-every-detail,
generative way — which is exactly what JEPA is built to avoid.

</details>

Why might predicting the *gist* of the missing leaves be a smarter use of effort than
reproducing each leaf exactly?

<details><summary>Show answer</summary>

Because most of the fine detail — the exact curl of one leaf, the precise speckle of light — is
genuinely unpredictable: nothing in the rest of the photo determines it, so no amount of skill
could call it reliably. Effort spent chasing that detail is effort spent on noise. The gist, by
contrast, is both gettable *and* the part that actually carries meaning — and producing it
forces you to understand the rest of the scene.

</details>

## Exercises

These are conceptual — there's no math in sight yet, and that's exactly as it should be. Each
asks you to reason about the fork we just drew.

**1.** Give two everyday examples (not from this module) of you "filling in a blank" about the
world — cases where part of something was hidden and you supplied the rest. For each, say what
*gist* you predicted versus what fine detail you couldn't possibly have nailed.

<details><summary>Show solution</summary>

Any pair where the missing-part structure is clear works. Two examples:

- *Hearing a phone ring in another room.* Gist you can predict: "someone's phone is ringing,
  probably on the table where it usually sits." Detail you can't: the exact volume, the precise
  caller, the exact spot down to the centimeter.
- *A friend starting a familiar story.* Gist: where the story is going, the punchline's shape.
  Detail: their exact word-for-word phrasing this time.

The point of the exercise is to feel the split in your own experience: you constantly predict
the *shape* of missing things and routinely ignore detail that isn't determined by the rest. That
split is the seed of JEPA's whole design.

</details>

**2.** A tempting wrong answer: "JEPA is basically an image generator — you give it a partial
picture and it generates the rest." Explain why this misses the central idea of the course.

<details><summary>Show solution</summary>

An image generator fills a blank by *manufacturing the actual missing pixels* — it produces an
image. That's the paint-every-detail, generative road. JEPA takes the other road on purpose: it
predicts the *gist* of the missing part and never reconstructs the pixels at all. Calling JEPA an
image generator gets it backwards — it's defined by *not* doing that. (We'll see in later modules
that JEPA has no machinery for turning its prediction back into a picture, and that this is a
feature, not a gap.)

</details>

**3.** Why is being able to fill in a hidden part *evidence of understanding*, rather than just a
party trick? Answer in two or three sentences, using your own example.

<details><summary>Show solution</summary>

A strong answer makes this move: to predict what's missing better than chance, you must already
have absorbed how the surrounding thing tends to go — its rules, its regularities. You can't
reliably guess the end of a mystery without having followed the plot; you can't guess what's
behind you in a familiar room without knowing how rooms are built. So a system that learns to
fill blanks well has been *forced*, as a side effect, to learn the structure of whatever it's
filling blanks in. That side effect — structure learned for free, no human labels required — is
precisely what JEPA is trying to harvest.

</details>

**4.** Someone objects: "Predicting the gist is just a lazier, lower-quality version of
predicting every detail — you'd always rather have the full picture if you could get it." What's
the flaw in "you'd always rather have the full picture"?

<details><summary>Show solution</summary>

The flaw is treating all the detail as worth having. Much of the fine detail in the missing part
is *unpredictable* — not determined by anything around it — so "getting the full picture" isn't a
prize you forfeited; it's a guess you could never win. Pouring effort into it doesn't make the
system smarter; it spends the system's limited capacity on noise. Predicting the gist isn't
settling for less — it's aiming at the part that's both *gettable* and *meaningful*, and refusing
to waste itself on the rest. (Module 6 makes the "wasted effort" idea precise, and module 8 shows
why it pays off.)

</details>

## Recap

We started from something you do without thinking: hand you part of the world, and you fill in
the rest — proof, quietly, that you understood it. JEPA is a machine built to learn that same way,
on its own, with nobody labeling answers for it. The move that defines it is a fork: when part of
something is hidden, you can paint in every missing detail (the way image generators and chatbots
fill a blank) or you can predict its gist — and JEPA takes the second road, reaching for the meaning
of the missing part rather than its surface. We were careful about what "gist" is *not*: not a picture, not the model
"imagining" the missing leaves, but something we haven't yet given a shape to. Giving it that shape
is where we go next — starting with the most basic question of all, the one everything else rests
on: what does it even mean for a machine to "look at" a photo?
