---
title: "The Wrong Target"
course: jepa
order: 1
summary: Hiding part of an input and predicting it from the rest gives a learning signal with no human labels — but reconstructing raw pixels grades a system on detail it could never have predicted. JEPA's bet is to predict the representation of the hidden part instead.
estimatedMinutes: 16
objectives:
  - Explain masked prediction as a source of supervision that requires no human labels
  - Distinguish pixel reconstruction from representation prediction in terms of what each grades the system on
  - State JEPA's core bet — predict the representation of the hidden part, not its pixels
prerequisites: []
---

A system trained on unlabelled images can learn to recognize objects, segment scenes, and transfer that knowledge to tasks its designers never specified. The reason is a particular choice about what the system is asked to predict.

## Free supervision from hiding and predicting

Label a dataset by hand and you spend a month annotating a million images. The alternative: remove part of an input, ask the system to recover the missing part from the rest, and let the data supervise itself. No annotator, no label budget. The hidden part is the answer; the visible part is the question.

This setup is called **masked prediction**. The visible portion is called the **context** — what the system sees. The hidden portion is called the **target** — what the system must predict. Given the context, the system produces a prediction, compares it to the target, and adjusts its internals to do better next time. Repeat across millions of inputs and the system learns something general about the structure of the world, because the only way to predict hidden parts reliably is to understand the relationships between parts.

**Check yourself.** A training example hides the right half of an image. What is the context and what is the target?

<details><summary>Show answer</summary>

The left half (the visible portion) is the context. The right half (the hidden portion) is the target. The system sees the left half and must predict something about the right half.

</details>

The rest of this module is about *what* to predict — because the obvious choice turns out to be wrong.

## The obvious choice: reconstruct the pixels

The most direct version of masked prediction asks the system to rebuild the target pixel-by-pixel. Given the context, produce a full image patch that matches the original hidden pixels. The system is graded on how closely its output matches the original: if the sky was a particular shade of pale blue, it should produce that exact shade.

This approach is called **reconstruction** or **generative** prediction. It sounds natural — you hid something; put it back.

The problem is that most pixels in a natural image carry information that nobody in possession of the context could have predicted. A sharp edge in grass, the exact specular highlight on a wet leaf, the precise pattern of a cloud's texture: these details depend on causes — exact lighting conditions, the physical properties of the surface — that the context does not contain. They are not random noise, but they are *unpredictable from context*.

When a reconstruction system is graded pixel-by-pixel, every unpredictable detail counts against it equally with every predictable detail. The system receives a large training signal from pixels it had no hope of getting right. That signal pushes it to hallucinate plausible-looking texture — to spend its capacity on the *appearance* of fine detail rather than the underlying structure that determines it.

**Check yourself.** In pixel-by-pixel reconstruction, does a system get penalized for missing an unpredictable pixel the same way it gets penalized for missing a predictable one?

<details><summary>Show answer</summary>

Yes. The loss treats all pixels the same. A missed pixel in unpredictable cloud texture costs as much as a missed pixel in a highly predictable geometric edge. This is the core problem: the system is graded on detail it had no information to recover.

</details>

## The alternative: predict a representation

The fix is to change what the system is asked to predict.

An **encoder** is a function that takes an input and outputs a **representation**: a fixed-length list of numbers, or vector. Every patch fed to an encoder comes out as, say, `[0.2, 0.9, 0.1, 0.7, ...]` — a compact numerical summary. (Real representations run to hundreds or thousands of numbers; four here for readability.)

A well-trained encoder produces representations that capture structure: two patches of sky land near each other in the space of all possible vectors; a patch of sky and a patch of grass land far apart. The encoder has, by design or by training, already compressed the input into what matters and discarded what does not.

Now the bet: instead of asking the system to rebuild the target's pixels, ask it to predict the target's **representation** — the vector an encoder would assign to the hidden part.

This is JEPA's central claim, stated once: **predict the representation of the hidden part, not its pixels.**

The grading changes entirely. The system is no longer evaluated pixel-by-pixel. It is evaluated by the **distance** between its predicted representation and the target encoder's actual representation of the hidden part. A prediction is good if it is a close vector; it is bad if it is a distant vector. (Distance in representation space is defined precisely in M2; for now, think of near and far as the geometric sense.)

Because the target representation has already shed unpredictable detail — that is what a well-chosen encoder does — the system is graded only on structure it had a genuine chance of predicting. The unpredictable pixels never enter the loss. There is no pixel decoder, no image produced on the prediction side at all.

## The pipeline contrast

The difference between the two approaches is structural:

```text
RECONSTRUCT-PIXELS (generative / masked autoencoder)
─────────────────────────────────────────────────────
context ──► encoder ──► predictor ──► [predicted pixels]
                                             │
                                    graded pixel-by-pixel
                                    against actual target pixels
                                             │
                                    pays for unpredictable detail
                                    (exact texture, highlights,
                                     noise — none of it
                                     recoverable from context)


PREDICT-REPRESENTATION (JEPA)
─────────────────────────────────────────────────────
context ──► context encoder ──► predictor ──► [predicted representation]
                                                        │
                                             graded by distance
                                             against target representation
                                                        │
                                             target encoder has already
                                             discarded unpredictable detail
                                             → pays only for predictable
                                               structure
target ──► target encoder  ──► [target representation]
```

The left column grades on pixels; the right column grades on a representation. The left column pays a loss for every unpredictable pixel; the right column's loss is zero for any detail the target encoder discarded.

**Check yourself.** In JEPA, is the system ever asked to generate an image?

<details><summary>Show answer</summary>

No. The prediction is a vector — a representation — not an image. There is no pixel decoder. The comparison happens entirely in representation space.

</details>

## Exercises

**1.** A reconstruction system trains on images of handwritten digits. Digit outlines are highly predictable from context; the exact pencil pressure that creates slightly varying stroke width is not. In pixel-by-pixel grading, does the system receive more training signal from the unpredictable stroke-width variation or from the predictable outline?

<details><summary>Show solution</summary>

It receives training signal from *both* equally — that is the problem. The total loss is the sum over all pixels, so unpredictable variation in stroke width contributes just as much as the predictable outline shape. A system trying to minimize this loss must spend capacity modeling the stroke-width variation even though the context carries no information about it. The predictable outline should be the primary signal; pixel-by-pixel grading does not make that distinction.

</details>

**2.** Someone claims that JEPA's predicted representation is a blurry version of the target image — a low-resolution reconstruction. What is wrong with this?

<details><summary>Show solution</summary>

A representation is a vector of numbers — a list like `[0.2, 0.9, 0.1, 0.7, ...]` — not an image at any resolution. There is no pixel decoder in JEPA, so no image is ever produced on the prediction side. The prediction and the target are both vectors, and they are compared by their distance as vectors. "Blurry image" would describe a reconstruction system (which does produce pixels), not JEPA.

This is the most common initial confusion. The prediction is a vector in representation space; it has no visual interpretation on its own.

</details>

**3.** Masked prediction requires no human-provided labels. Explain why in one or two sentences.

<details><summary>Show solution</summary>

The target — the hidden part of the input — is already present in the data. The system is asked to predict something that was there all along but was withheld during training. The data supplies both the question (the context) and the answer (the target), so no human needs to annotate anything.

</details>

**4. (Stretch)** Consider a masked prediction setup where the context is the first frame of a short video clip and the target is the final frame. Would you expect pixel reconstruction or representation prediction to produce a more useful learning signal? Justify using the ideas from this module.

<details><summary>Show solution</summary>

Representation prediction is more useful here. The final frame of a video clip shares broad structure with the first — the same scene, similar spatial layout, probably the same objects — but the exact pixel values are highly unpredictable: motion, lighting shifts, and thousands of details change in ways the first frame cannot specify. Pixel reconstruction grades the system on all of those unpredictable changes, flooding the loss with unrecoverable detail. Representation prediction grades only on structure a well-chosen encoder preserves — scene content, object identity, rough spatial layout — which genuinely is predictable from the first frame. The learning signal is better targeted.

</details>

## Recap

Masked prediction turns data into its own supervision: the hidden part is the answer, the visible context is the question, and no labels are needed. Pixel reconstruction grades a system on every unpredictable pixel, swamping the loss with detail no context could recover. JEPA changes the target: predict the representation of the hidden part, graded by distance in representation space, where unpredictable detail has already been discarded. The next module defines representations and distance precisely.
