---
title: I-JEPA, V-JEPA, and the World-Model Bet
course: jepa
order: 6
summary: "The same recipe run on images and on video — and the larger claim it serves: that intelligence is prediction in an abstract space."
estimatedMinutes: 18
objectives:
  - Describe I-JEPA's context/target block masking on an image
  - Describe V-JEPA's spatiotemporal tube masking on video, and explain why video is a richer signal
  - State LeCun's world-model thesis and its honest open status
prerequisites: [collapse-and-the-fix]
---

Take a photograph of a dog mid-leap over a fence. Hide three square patches of it — one over the dog's head, one over its front legs, one over the grass beyond. Now ask the system to predict, for each hidden patch, the **representation** the **target encoder** would have produced for it — never the colours underneath, only that compact summary. That single picture, cut up that way, is the whole of I-JEPA. Everything earlier in this course was the apparatus; here it meets a real image, and then a real video, and finally the wager that motivated building any of it.

We already have the apparatus. The three boxes and the **loss** are M3's; **collapse** and the **EMA** fix that keeps the target moving are M5's. Nothing about those changes now. What changes is the cut — *how* you carve an input into **context** and **target** — and two research groups made that cut on two kinds of data.

## I-JEPA: blocks on a still image

I-JEPA (Assran and colleagues, 2023) runs the recipe on a single image. The cut is simple to state. Sample a handful of rectangular **target** blocks from the image. The **context** is what remains once those blocks are taken out. Feed the context through the **context encoder**, feed each target block through the **target encoder**, and have the **predictor** guess each target block's **representation** from the context. The **loss** is the **distance** in **representation space**, summed over the blocks — the same distance you computed by hand in M2.

```text
I-JEPA — masking a still image (grid of patches)

   col:  1   2   3   4   5   6
       +---+---+---+---+---+---+
  row 1| C | C | C | C | C | C |
       +---+---+---+---+---+---+
  row 2| C | T | T | C | C | C |   T = target block (hidden; predict its representation)
       +---+---+---+---+---+---+   C = context (visible; fed to the context encoder)
  row 3| C | T | T | C | T | C |
       +---+---+---+---+---+---+
  row 4| C | C | C | C | T | C |
       +---+---+---+---+---+---+
  row 5| C | C | C | C | C | C |
       +---+---+---+---+---+---+

  context = every C patch        targets = the two T blocks
  goal: from the C patches, predict the REPRESENTATION of each T block
        (no pixels are ever reconstructed — there is no decoder)
```

Two design choices matter. The target blocks are **large** — big enough to hold real structure, a whole limb rather than a stray edge — so predicting them demands a guess about the picture's content, not a copy of a neighbour's texture. And the context is **everything else**, a wide view, so the system has enough to reason from. Predict a head's representation from the body and the grass; predict the legs' representation from the head and the fence. The signal is free: the image supplied its own answer key the moment you chose where to cut.

<details><summary>Check yourself: where does I-JEPA's training signal come from?</summary>

From the image itself. Choosing which blocks to hide *creates* the target — the **target encoder** computes each hidden block's **representation**, and that representation is the answer the **predictor** is graded against. No human labelled anything. Masking is the whole supervision.

</details>

## V-JEPA: tubes through a video

V-JEPA (Bardes and colleagues, 2024) keeps the recipe and changes the data from one image to a stack of video frames. A still image has two dimensions to cut along — across and down. Video adds a third, time. So the mask is no longer a flat block but a **tube**: a region that holds the same patch location across several consecutive frames, punched straight through the stack.

```text
V-JEPA — masking a spatiotemporal tube (4 frames over time)

  frame t        frame t+1      frame t+2      frame t+3
  +--+--+--+     +--+--+--+     +--+--+--+     +--+--+--+
  |  |  |  |     |  |  |  |     |  |  |  |     |  |  |  |
  +--+--+--+     +--+--+--+     +--+--+--+     +--+--+--+
  |  |##|  |     |  |##|  |     |  |##|  |     |  |##|  |   ## = the tube: same location,
  +--+--+--+     +--+--+--+     +--+--+--+     +--+--+--+        masked through all 4 frames
  |  |  |  |     |  |  |  |     |  |  |  |     |  |  |  |
  +--+--+--+     +--+--+--+     +--+--+--+     +--+--+--+
   ---------------- time ----------------->

  context = every unmasked patch across all 4 frames
  target  = the masked tube (##)
  goal: from what's visible — including how it MOVES — predict the
        tube's REPRESENTATION across the frames
```

Why bother with video at all? Because time is a constraint, and a constraint is information. In a still image, a hidden patch could plausibly be many things; the context narrows the field but leaves real ambiguity. In video, the frames on either side of a masked tube pin it down. A ball halfway across the net at frame *t* and past it at frame *t+3* cannot have hovered in between — physics forbids it. The motion visible around the tube rules out most of what the missing patch could be. Video hands the system a harder, sharper version of the same task: not just *what fits here in space*, but *what fits here in space given how everything is moving*. The richer the constraint, the more the **representation** is forced to capture — and capturing it is the entire point.

<details><summary>Check yourself: why is video a richer training signal than a still image?</summary>

Because time constrains what the hidden part can be. The frames before and after a masked **tube** show how things move, and motion is lawful — objects follow continuous paths, they do not teleport. That extra constraint cuts down the plausible answers, so predicting the tube's **representation** demands a model of how the scene *behaves over time*, not only how it looks in one instant.

</details>

## The world-model bet

Step back from the masks. Both systems do the same strange thing: they refuse to draw the answer. Asked what is behind the curtain, they do not paint a picture — they predict a **representation**, a compact list of numbers that says what *kind* of thing is there and how it relates to the rest, while staying silent about the exact pixels. M4 gave the local reason this is shrewd: the unpredictable detail was discarded before the system was ever graded on it. The world-model thesis is the global reason — the bet that this is not just convenient but *correct*, the right shape for machine intelligence itself.

The argument belongs to Yann LeCun, set out in his 2022 position paper *A Path Towards Autonomous Machine Intelligence*. It runs roughly like this. An intelligent system, biological or built, carries an internal **world model**: a running account of how the world is arranged and how it will change, which it uses to fill in what it cannot see and to anticipate what comes next. The decisive question is *what currency that model predicts in*. Predict in pixels and you have signed up to forecast every leaf, every glint, every grain of noise — almost all of it unpredictable in principle, none of it the thing you actually needed to know. A creature that spent its prediction budget on the exact pattern of static would learn nothing about the world and starve. So the model must predict in an **abstract representation space**, where the irrelevant detail has already been thrown away and only the structure that *matters* and *can be anticipated* remains. Pixel-perfect prediction is not a stepping stone toward understanding. It is a wrong turn — a target that rewards mastering noise.

This is exactly where JEPA sits. It is one concrete instantiation of that thesis, scaled down to a single trainable mechanism: predict in representation space, not pixel space, and you have built the smallest honest version of a world model. The course opened on this bet — that predicting the **representation** of the hidden part, rather than its pixels, is a claim about how machine intelligence should be built. I-JEPA and V-JEPA are that bet cashed into working code, on images and on video. The thesis is the bet stated at full size.

Now the honest part, because it is owed. None of this is settled. The thesis is a *direction*, argued well and backed by systems that learn useful representations without labels — but a direction is not a destination. Whether prediction in an abstract space scales all the way to the flexible, grounded understanding the word "intelligence" is meant to carry, no one yet knows. JEPA is evidence, not proof. The bet is live, and it could lose.

## Exercises

**1.** Describe, in your own words, exactly what I-JEPA's **predictor** is asked to output for one target block — and what it is *not* asked to output.

<details><summary>Show solution</summary>

The **predictor** outputs the **predicted representation** of the hidden target block — a vector — computed from the context's **representation**. It is graded by **distance** against the **target representation** the **target encoder** produced for that block. It is *not* asked to output the block's pixels: there is no decoder, and no image is ever reconstructed. (This is the misconception worth killing: the output is a list of numbers, not a picture.)

</details>

**2.** A team swaps I-JEPA's large target blocks for tiny single-patch targets scattered across the image. Why might this weaken the training signal?

<details><summary>Show solution</summary>

A tiny target often holds no real structure — just an edge or a patch of texture that a neighbouring visible patch nearly duplicates. Predicting its **representation** then needs little more than copying a neighbour, so the system can score well without reasoning about the picture's content. Large blocks force a genuine guess about *what is there*, which is the structure you wanted the **representation** to capture.

</details>

**3.** V-JEPA masks a tube through a clip of a thrown ball. Explain how the unmasked frames make the hidden tube easier to predict than the same region would be in a single still frame.

<details><summary>Show solution</summary>

In a single still frame, the masked region is ambiguous — the ball could be in many places. In the clip, the frames before and after show the ball's path, and motion is continuous: a ball seen approaching and then departing must have passed through the gap on a lawful trajectory. That constraint rules out most possibilities, so the context (now including *motion*) pins down the tube's **representation** far more tightly than any single frame could.

</details>

**4.** State LeCun's world-model thesis in two sentences, and then state its honest status in one.

<details><summary>Show solution</summary>

Thesis: an intelligent system needs an internal **world model** that predicts how the world is arranged and how it will change; that model should predict in an **abstract representation space**, not in pixels, because most pixel detail is unpredictable and irrelevant and would waste the system on noise. Status: it is a promising direction with working evidence (I-JEPA, V-JEPA), but not a settled result — whether it scales to full machine intelligence is an open question.

</details>

## Recap

We ran the recipe twice more and then named the wager it serves. I-JEPA cuts large **target** blocks from a still image and predicts their **representations** from the surrounding **context**; V-JEPA punches a **tube** through several video frames and predicts its **representation** from everything visible, including motion — and motion, being lawful, makes the signal richer. Underneath both is one architecture you can now read end to end: context in, target hidden, predictor guessing, **loss** as a **distance** in **representation space**, the target held just out of reach by an **EMA** so the system cannot **collapse**.

The course began with a target it called wrong — pixels — and a different one it called the bet: predict the representation, not the picture. Six modules later you have seen that bet built, broken on purpose, repaired, and run on real images and real video. What you have *not* seen is the bet won, because it has not been, by anyone. JEPA is a working argument that intelligence might be prediction in an abstract space. Whether the argument is right is the open question the field is now spending itself to answer — and you can read the evidence as it lands.
