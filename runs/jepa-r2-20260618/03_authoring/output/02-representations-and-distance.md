---
title: Representations and Distance
course: jepa
order: 2
summary: An encoder turns any input into a fixed-length vector; distance between two vectors measures how different they are — and that number is what JEPA minimises.
estimatedMinutes: 16
objectives:
  - Define encoder and representation (a vector) in your own words
  - Compute the squared Euclidean distance between two short vectors
  - Interpret a small distance as a close prediction and a large distance as a poor one
prerequisites:
  - the-wrong-target
---

$(0.1)^2 + (0.1)^2 + (0.1)^2 + (0.1)^2 = 0.04$.

That is the distance between a predicted representation and its target in the example we will work through. It is small — a good prediction. By the end of this module you will know exactly what that sentence means, and you will be able to compute the same number yourself for any pair of vectors you are handed.

M1 placed the bet: JEPA predicts the *representation* of the hidden part, not its pixels. This module cashes that bet into arithmetic. Two things to build: first, what a representation is and where it comes from; second, how to measure whether two representations are close or far.

---

## What an encoder does

An **encoder** is a function that takes an input — an image patch, a sentence, a video clip — and produces a fixed-length list of numbers. That list is the **representation** (a vector).

Write the input as $x$. Write the encoder as $f$. Then the representation is

$$
f(x) = [r_1,\, r_2,\, r_3,\, \ldots,\, r_d]
$$

where $d$ is the length of the vector — the same $d$ for every input the encoder handles. A real encoder used in I-JEPA has $d$ in the hundreds or thousands; to keep the arithmetic readable we will use $d = 4$ throughout this module.

Here is a concrete representation:

$$
f(x) = [0.2,\; 0.9,\; 0.1,\; 0.7]
$$

Each coordinate is a real number. The coordinates are not pixel brightnesses — they do not correspond to positions on a grid. They are the encoder's *summary* of the input: what it decided was worth recording, compressed into four numbers.

Two images that look similar in the ways the encoder has learned to care about will produce similar lists of numbers. Two images that look very different will produce lists that diverge. The set of all possible representations forms a **representation space**: a region of four-dimensional (in our running example) space where every possible input maps to exactly one point.

<details><summary>Check yourself — what is an encoder?</summary>

An encoder is a function that takes an input and returns a fixed-length list of numbers (a vector). That vector is the representation. The encoder's job is to compress the input into a form that preserves what matters and discards the rest.

</details>

---

## Distance: a number for "how different"

Two representations are two points in representation space. We need a single number that says how far apart they are — close means similar, far means different.

For two vectors $p = [p_1, p_2, p_3, p_4]$ and $s = [s_1, s_2, s_3, s_4]$, the **distance** we use is squared Euclidean:

$$
d(p,\, s) = \sum_{i}\,(p_i - s_i)^2
$$

In words: subtract coordinate by coordinate, square each difference, add them up. The squaring does two things: it makes every term non-negative (a negative difference contributes the same as a positive one of the same size), and it penalises large gaps more than small ones.

### Worked example — a close pair

**Predicted representation** $\hat{g} = [0.3,\; 0.8,\; 0.2,\; 0.6]$

**Target representation** $s = [0.2,\; 0.9,\; 0.1,\; 0.7]$

Subtract coordinate by coordinate:

$$
\begin{aligned}
  p_1 - s_1 &= 0.3 - 0.2 = 0.1 \\
  p_2 - s_2 &= 0.8 - 0.9 = -0.1 \\
  p_3 - s_3 &= 0.2 - 0.1 = 0.1 \\
  p_4 - s_4 &= 0.6 - 0.7 = -0.1
\end{aligned}
$$

Square each difference:

$$
(0.1)^2 = 0.01 \quad \text{for each of the four coordinates}
$$

Sum:

$$
d(\hat{g},\, s) = 0.01 + 0.01 + 0.01 + 0.01 = 0.04
$$

$0.04$ is small. The predicted representation and the target representation are close in representation space — the prediction was good.

### Worked example — a far pair

Compare that against a predicted representation that missed badly:

**Predicted representation** $\hat{g}' = [0.9,\; 0.1,\; 0.8,\; 0.2]$

**Target representation** $s = [0.2,\; 0.9,\; 0.1,\; 0.7]$

Differences: $0.7,\; -0.8,\; 0.7,\; -0.5$.

Squared: $0.49,\; 0.64,\; 0.49,\; 0.25$.

$$
d(\hat{g}',\, s) = 0.49 + 0.64 + 0.49 + 0.25 = 1.87
$$

$1.87$ is large. The predicted representation is far from the target. The system guessed wrong.

<details><summary>Check yourself — which distance formula is correct for $p=[1,0]$ and $s=[0,1]$?</summary>

$$
d(p,\, s) = (1-0)^2 + (0-1)^2 = 1 + 1 = 2
$$

Not $\sqrt{2}$. We use *squared* Euclidean distance — no square root. That is deliberate: the square root is monotone (larger before the root stays larger after), so it carries no information about ordering; removing it keeps the arithmetic clean.

</details>

---

## Why this distance, and why squared

Three facts worth fixing:

1. **Distance is always non-negative.** Every $(p_i - s_i)^2 \geq 0$, so the sum is $\geq 0$. Distance is zero exactly when $p = s$ — every coordinate matches.

2. **Squaring weights large misses heavily.** A difference of $0.2$ in one coordinate contributes $0.04$; a difference of $0.8$ contributes $0.64$ — sixteen times as much for four times the gap. The system is punished steeply for big errors, not just proportionally.

3. **No square root needed.** The square root of a non-negative number is monotone: $\sqrt{a} < \sqrt{b}$ if and only if $a < b$. Removing it leaves the ordering — and therefore the comparison "this prediction is better than that one" — intact, and makes the arithmetic easier.

---

## Definition

## Definition (Representation)

An **encoder** $f$ maps an input $x$ to a **representation** $f(x)$: a fixed-length vector in $\mathbb{R}^d$. The set of all representations is the **representation space**.

## Definition (Squared Euclidean Distance)

For two vectors $p = [p_1, \ldots, p_d]$ and $s = [s_1, \ldots, s_d]$ in $\mathbb{R}^d$, the **distance** between them is

$$
d(p,\, s) = \sum_{i=1}^{d} (p_i - s_i)^2.
$$

---

## Exercises

**1 (mechanical).** Compute $d(p, s)$ for $p = [1, 2, 3]$ and $s = [1, 2, 4]$.

<details><summary>Show solution</summary>

The first two coordinates match, so their differences are zero. Only the third differs:

$$
d = (1-1)^2 + (2-2)^2 + (3-4)^2 = 0 + 0 + 1 = 1.
$$

The representations are distance $1$ apart — one coordinate off by $1$.

</details>

---

**2 (mechanical).** Two representations are identical: $p = s = [0.5, 0.3, 0.7, 0.1]$. What is $d(p, s)$?

<details><summary>Show solution</summary>

Every difference is $0$, so every squared difference is $0$:

$$
d(p,\, s) = 0.
$$

Distance zero means the predicted representation and the target representation agree exactly — a perfect prediction.

</details>

---

**3 (conceptual).** A student computes the distance between $p = [0.4, 0.6]$ and $s = [0.2, 0.8]$ and gets $d = 0.2$. What went wrong, and what is the correct value?

<details><summary>Show solution</summary>

The student likely added the *differences* without squaring: $|0.4 - 0.2| + |0.6 - 0.8| = 0.2 + 0.2 = 0.4$, or possibly $0.2 + 0.2 = 0.2$ with a sign error. The correct computation squares first:

$$
d = (0.4 - 0.2)^2 + (0.6 - 0.8)^2 = (0.2)^2 + (-0.2)^2 = 0.04 + 0.04 = 0.08.
$$

The tempting mistake — summing absolute differences — gives a different number and changes what "large" and "small" mean; squaring is the definition.

</details>

---

**4 (conceptual).** Suppose the encoder always outputs $[0, 0, 0, 0]$ for every input, no matter what it is shown. What is the distance between any two representations it produces? Is this a useful encoder?

<details><summary>Show solution</summary>

Every representation is $[0, 0, 0, 0]$, so the distance between any two is:

$$
d([0,0,0,0],\, [0,0,0,0]) = 0.
$$

The distance is always zero — but that is not because every prediction is perfect. It is because the encoder has thrown all information away: every input looks identical to it. This is the collapse failure mode. An encoder that outputs the same vector for every input has learned nothing useful. Distance zero here is meaningless, not good. (We will revisit this in detail in M5.)

</details>

---

## Recap

An encoder $f$ turns any input into a fixed-length vector — a representation — and the set of all representations forms a representation space. Distance between two representations is a single number computed by subtracting coordinate by coordinate, squaring, and summing; zero means identical, and larger values mean the vectors diverge. The distance formula is not decorative: in M3 it becomes the loss — the quantity JEPA's training minimises, driving the predicted representation toward the target representation one gradient step at a time.

