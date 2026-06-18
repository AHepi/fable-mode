---
title: Representations and Distance
course: jepa
order: 2
summary: An encoder turns an input into a vector; similar inputs cluster near each other; distance is a number you compute.
estimatedMinutes: 16
objectives:
  - Define encoder and representation as a fixed-length list of numbers (a vector).
  - Compute the squared-Euclidean distance between two short vectors.
  - Interpret a small distance as similar and a large distance as different.
prerequisites:
  - the-wrong-target
---

$$
d(\hat{g}, s) = (0.3 - 0.2)^2 + (0.8 - 0.9)^2 + (0.2 - 0.1)^2 + (0.6 - 0.7)^2 = 0.01 + 0.01 + 0.01 + 0.01 = 0.04
$$

That number — 0.04 — is the distance between two vectors. It came from four subtractions, four squarings, and one sum. This module defines what those vectors are, where they come from, and why distance in that space is exactly what JEPA uses as its training signal.

---

## What an encoder produces

An **encoder** is a function that takes an input — an image patch, a video frame, a sentence — and produces a fixed-length list of numbers. That list is the **representation** of the input (also called a vector; the terms are used interchangeably).

## Definition (Encoder and Representation)

An **encoder** $f$ maps an input $x$ to a **representation** $f(x)$: a vector of $d$ real numbers.

$$
f(x) = (r_1,\, r_2,\, \ldots,\, r_d) \in \mathbb{R}^d
$$

Each coordinate $r_i$ is a single number. The encoder fixes $d$ — all representations it produces have the same length. In I-JEPA the encoder is a neural network; $d$ is typically in the hundreds. Here we work with $d = 4$ so the arithmetic stays visible.

**Bridge.** The symbol $\mathbb{R}^d$ means "a list of $d$ real numbers." The encoder $f$ is the box that does the converting; $x$ is the input going in; $f(x)$ is the vector coming out. Nothing in this definition requires knowing *how* $f$ does the conversion — only that it always outputs a list of the same length.

---

**Check yourself.** An encoder with $d = 4$ receives an image patch and outputs what kind of object?

<details><summary>Show answer</summary>

A list of 4 real numbers — a vector in $\mathbb{R}^4$. For example: $[0.2,\, 0.9,\, 0.1,\, 0.7]$. The encoder always produces the same number of coordinates regardless of what the input looks like.

</details>

---

## Representation space: near means similar

Every representation $f(x)$ is a point in $\mathbb{R}^d$. The collection of all such points is **representation space**.

A well-trained encoder arranges representations so that *similar* inputs land near each other and *different* inputs land far apart. Two patches cut from the same photograph end up close; a patch of sky and a patch of brickwork end up far. The positions encode similarity.

This is the property JEPA exploits. M1 established that JEPA predicts the representation of the hidden part rather than its pixels. The prediction counts as good when the predicted representation is *close* to the target representation — and "close" needs a number.

## Definition (Squared-Euclidean Distance)

Let $\hat{g} = (\hat{g}_1, \ldots, \hat{g}_d)$ be a **predicted representation** and $s = (s_1, \ldots, s_d)$ a **target representation**, both in $\mathbb{R}^d$.

Their **distance** is:

$$
d(\hat{g}, s) = \sum_{i=1}^{d} (\hat{g}_i - s_i)^2
$$

**Bridge.** The $\sum_{i=1}^{d}$ means "sum over all $d$ coordinates." For each coordinate $i$: subtract ($\hat{g}_i - s_i$), square the result ($(\ \cdot\ )^2$, so negative differences don't cancel positive ones), and add it to the running total. The result is a single non-negative number. Zero means the two representations are identical; larger numbers mean they diverge.

---

## Worked example (Computing a distance)

**Problem.** Predicted representation $\hat{g} = [0.3,\, 0.8,\, 0.2,\, 0.6]$. Target representation $s = [0.2,\, 0.9,\, 0.1,\, 0.7]$. Compute $d(\hat{g}, s)$.

**Solution.** Work coordinate by coordinate:

$$
\begin{aligned}
i=1: &\quad (0.3 - 0.2)^2 = (0.1)^2 = 0.01 \\
i=2: &\quad (0.8 - 0.9)^2 = (-0.1)^2 = 0.01 \\
i=3: &\quad (0.2 - 0.1)^2 = (0.1)^2 = 0.01 \\
i=4: &\quad (0.6 - 0.7)^2 = (-0.1)^2 = 0.01
\end{aligned}
$$

$$
d(\hat{g}, s) = 0.01 + 0.01 + 0.01 + 0.01 = 0.04
$$

Each coordinate differs by exactly 0.1; squaring gives 0.01 per coordinate; summing gives 0.04. That is a small distance — the two representations are close, so the prediction was good.

---

**Check yourself.** In the worked example above, coordinate $i=2$ has $\hat{g}_2 = 0.8$ and $s_2 = 0.9$. The difference is $-0.1$. Why does squaring matter here?

<details><summary>Show answer</summary>

Without squaring, positive and negative differences cancel. If one coordinate overshoots by 0.1 and another undershoots by 0.1, the raw sum of differences is 0 — but the representations are *not* identical. Squaring every difference before summing ensures each coordinate contributes a non-negative amount; no cancellation is possible. Distance is always $\geq 0$.

</details>

---

## A clearly different vector

To see what a large distance looks like, compare $\hat{g} = [0.3,\, 0.8,\, 0.2,\, 0.6]$ against $s' = [0.9,\, 0.1,\, 0.8,\, 0.0]$:

$$
\begin{aligned}
i=1: &\quad (0.3 - 0.9)^2 = (-0.6)^2 = 0.36 \\
i=2: &\quad (0.8 - 0.1)^2 = (0.7)^2 = 0.49 \\
i=3: &\quad (0.2 - 0.8)^2 = (-0.6)^2 = 0.36 \\
i=4: &\quad (0.6 - 0.0)^2 = (0.6)^2 = 0.36
\end{aligned}
$$

$$
d(\hat{g}, s') = 0.36 + 0.49 + 0.36 + 0.36 = 1.57
$$

Compared with 0.04: about 39 times larger. Large distance — the prediction is far off, the two representations are dissimilar.

The difference is not just a matter of degree. In JEPA's training loop, a distance of 0.04 is a signal to the system that it has nearly captured the target's structure; a distance of 1.57 is a signal that it has missed entirely. Gradient descent will push parameters to reduce that gap.

---

## Exercises

**1. (Mechanical)** Compute $d(\hat{g}, s)$ for $\hat{g} = [0.5,\, 0.5]$ and $s = [0.5,\, 0.5]$.

<details><summary>Show solution</summary>

$$
d = (0.5-0.5)^2 + (0.5-0.5)^2 = 0 + 0 = 0
$$

Distance is zero. The two representations are identical — the predictor has reproduced the target exactly.

</details>

---

**2. (Mechanical)** Compute $d(\hat{g}, s)$ for $\hat{g} = [1.0,\, 0.0]$ and $s = [0.0,\, 1.0]$.

<details><summary>Show solution</summary>

$$
d = (1.0-0.0)^2 + (0.0-1.0)^2 = 1.0 + 1.0 = 2.0
$$

Each coordinate is as far apart as possible (one is 1, the other is 0). Distance is 2.0 — large.

</details>

---

**3. (Conceptual)** Two representations differ only in one coordinate: $\hat{g} = [0.4,\, 0.7,\, 0.2]$ and $s = [0.4,\, 0.7,\, 0.5]$. Without computing the full sum, identify which term will be nonzero and state the distance.

<details><summary>Show solution</summary>

Coordinates 1 and 2 are identical, so their squared differences are 0. Only $i=3$ contributes:

$$
d = (0.2 - 0.5)^2 = (-0.3)^2 = 0.09
$$

Distance is 0.09. When representations are close on all coordinates but one, only that coordinate's squared difference drives the distance.

</details>

---

**4. (Conceptual)** Suppose a second encoder $f'$ maps every possible input to the same vector $[0, 0, 0, 0]$. What is the distance between any two of its representations?

<details><summary>Show solution</summary>

Every output is $[0,0,0,0]$, so for any two inputs $x$ and $y$:

$$
d(f'(x), f'(y)) = (0-0)^2 + (0-0)^2 + (0-0)^2 + (0-0)^2 = 0
$$

Distance is always 0. Every input looks identical in this encoder's representation space — dissimilar inputs land on top of each other. The encoder has thrown away all information about its input. This is the failure mode (collapse) that a later module addresses.

</details>

---

## Recap

An **encoder** converts any input into a **representation** — a fixed-length vector in $\mathbb{R}^d$. Representations live in **representation space**, where proximity encodes similarity. The **squared-Euclidean distance** $d(\hat{g}, s) = \sum_i (\hat{g}_i - s_i)^2$ turns that proximity into a single non-negative number: 0.04 means close; 1.57 means far.

This is the measuring stick JEPA trains against. The next module introduces the three-box architecture that produces $\hat{g}$ and $s$, writes the loss as this distance, and traces one input all the way to a loss value.
