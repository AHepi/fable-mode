---
title: Clock Arithmetic
course: abstract-algebra
order: 2
summary: Adding on a clock face introduces a finite world of arithmetic that wraps around — our first playground.
estimatedMinutes: 18
objectives:
  - Compute sums in modular arithmetic
  - Explain what "mod n" means
  - Identify the wrap-around (identity) and how to undo a step
prerequisites: [01-the-secret-life-of-symmetry]
---

## The hook

It is nine in the morning and you have a meeting in five hours. What time does it start? Two in the afternoon — and you knew that without thinking $9 + 5 = 14$, because no clock has a fourteen. The hand swept past twelve and kept going, and the answer came out the other side as a 2.

You have been doing strange arithmetic your whole life and calling it telling time. The last module promised that arithmetic and symmetry are secretly the same kind of thing. This is where the first half of that promise comes due: a number system small enough to fit on a clock face, where the line of integers has been bent into a circle and the leftover ends fused together.

## Intuition

Ordinary counting marches off in a straight line forever: $0, 1, 2, 3, \dots$, no last stop. A clock refuses to play along. It has exactly twelve hour-marks, and once the hand reaches the top it does not find a thirteen — it lands back on twelve and starts the lap again. The number line has been rolled up into a loop.

So "what is $9 + 5$?" splits into two questions. There is the honest count — $14$ — and there is *where the hand ends up*, which is what we actually care about. To get the second from the first, you subtract a full lap of $12$: $14 - 12 = 2$. If you had overshot by two laps, you would subtract $24$. The rule is the same every time: walk around as many full laps as you can, and report only the leftover.

That leftover is the **remainder** after dividing by the number of marks on the clock. On a $12$-hour clock, $14$ leaves a remainder of $2$, because $14 = 1 \times 12 + 2$. That word *remainder* — the scrap left over from a division you stop early — is the whole idea. Modular arithmetic is the arithmetic of remainders.

Nothing forces us to use twelve. A clock with five marks works just as well, and it is small enough to see all at once, so we will build our first world there.

## Definition (Reduction mod $n$)

Fix a whole number $n \geq 1$, the number of marks on the clock. For any integer $a$, the value $a \bmod n$ is the **remainder when $a$ is divided by $n$**: the unique integer $r$ with

$$
a = qn + r, \qquad 0 \leq r < n,
$$

where $q$ is a whole number of complete laps. We call $r$ the **reduction of $a$ mod $n$**, and we collect all the possible remainders into one set,

$$
\mathbb{Z}_n = \{\, 0, 1, 2, \dots, n-1 \,\},
$$

the integers **mod $n$** — the marks on an $n$-hour clock.

To **add in $\mathbb{Z}_n$**, add the two numbers as usual and then reduce mod $n$: the result of $a$ plus $b$ is $(a + b) \bmod n$.

## Worked example

**Problem.** Working on a $5$-mark clock — that is, in $\mathbb{Z}_5$ — compute $3 + 4$.

**Solution.** First add honestly: $3 + 4 = 7$. Now reduce mod $5$ by peeling off complete laps of $5$:

$$
7 = 1 \times 5 + 2, \qquad \text{so} \qquad 7 \bmod 5 = 2.
$$

The hand started at $3$, stepped forward $4$, passed the top once, and came to rest on $2$. In the notation of $\mathbb{Z}_5$, then, $3 + 4 = 2$. The honest sum $7$ never appears on this clock; only its leftover does.

## Check yourself

On the same $5$-mark clock, what is $4 + 4$ in $\mathbb{Z}_5$? Work it out before you look.

<details><summary>Show answer</summary>

$4 + 4 = 8$, and $8 = 1 \times 5 + 3$, so $8 \bmod 5 = 3$. Thus $4 + 4 = 3$ in $\mathbb{Z}_5$. The hand crossed the top once and landed on $3$.

</details>

## The whole world at once: the $\mathbb{Z}_5$ addition table

Because $\mathbb{Z}_5$ has only five elements, we can write down *every* sum it contains. Read the table as: pick a row $a$, pick a column $b$, and the cell holds $(a + b) \bmod 5$.

| $+$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| **0** | 0 | 1 | 2 | 3 | 4 |
| **1** | 1 | 2 | 3 | 4 | 0 |
| **2** | 2 | 3 | 4 | 0 | 1 |
| **3** | 3 | 4 | 0 | 1 | 2 |
| **4** | 4 | 0 | 1 | 2 | 3 |

Stare at it for a moment, because it is quietly telling you things.

First, every entry is one of $0, 1, 2, 3, 4$ — no sum ever escapes the clock. Add any two marks and you land on a mark. The world does not *run out* and it does not spill over; it folds back on itself. (A common worry is that $\mathbb{Z}_n$ "ends" at $n-1$ and breaks when you push past it. It doesn't — there is no edge to fall off, only the loop.)

Second, look at the top row and the leftmost column. Adding $0$ changes nothing: $0 + b = b$ and $a + 0 = a$, every time. There is a number here that does *nothing* — it leaves whatever it touches exactly as it found it. Hold that thought.

Third, hunt for the $0$s scattered through the body of the table. Each row has exactly one. In row $2$ the $0$ sits under column $3$, because $2 + 3 = 5 = 0$ in $\mathbb{Z}_5$. So $3$ is the step that *undoes* $2$: take two steps forward, then three more, and you are back where you started. Every mark has a partner that cancels it. Hold that thought too.

## Check yourself

In $\mathbb{Z}_5$, which number do you add to $1$ to get back to $0$? (Find the partner that undoes a single step.)

<details><summary>Show answer</summary>

You need $1 + ? = 0$ in $\mathbb{Z}_5$. Since $1 + 4 = 5$ and $5 \bmod 5 = 0$, the answer is $4$. Stepping forward once and then four more times carries the hand around a full lap, back to the start. So $4$ undoes $1$.

</details>

We have not given these two patterns their proper names yet — that is the next module's job. But you have already met them: a special element that does nothing, and, for each element, a partner that undoes it. Keep an eye out. They are about to become the whole point.

## Exercises

**1.** Compute $8 + 9$ in $\mathbb{Z}_{12}$ (a standard clock face).

<details><summary>Show solution</summary>

Add honestly: $8 + 9 = 17$. Reduce mod $12$: $17 = 1 \times 12 + 5$, so $17 \bmod 12 = 5$. Thus $8 + 9 = 5$ in $\mathbb{Z}_{12}$.

The tempting wrong answer is $17$ — but $17$ is not a mark on a $12$-hour clock. Forgetting to reduce is the single most common slip in modular arithmetic. Always finish by peeling off whole laps of $n$; the answer must land in $\{0, 1, \dots, n-1\}$.

</details>

**2.** Compute $11 + 4$ in $\mathbb{Z}_{12}$.

<details><summary>Show solution</summary>

$11 + 4 = 15$, and $15 = 1 \times 12 + 3$, so $15 \bmod 12 = 3$. On the clock: eleven o'clock plus four hours is three o'clock. The answer is $3$.

</details>

**3.** Using the $\mathbb{Z}_5$ table above (or by computing directly), find every $x$ in $\mathbb{Z}_5$ with $x + 3 = 1$.

<details><summary>Show solution</summary>

You want a mark $x$ that, after stepping forward $3$, lands on $1$. Honest arithmetic says $x = 1 - 3 = -2$; reduce $-2$ mod $5$ by adding a lap: $-2 + 5 = 3$. Check: $3 + 3 = 6 = 1$ in $\mathbb{Z}_5$. So $x = 3$.

If subtracting felt uncomfortable, you can also just scan the table: in column $3$, the entry equal to $1$ sits in row $3$. Same answer, no negatives. (Notice there is exactly one solution — undoing a step lands you somewhere definite.)

</details>

**4.** In $\mathbb{Z}_6$, which number does nothing when you add it — that is, which $e$ satisfies $a + e = a$ for every $a$? And what number must you add to $4$ to get back to that do-nothing number?

<details><summary>Show solution</summary>

The do-nothing number is $0$: adding $0$ never moves the hand, so $a + 0 = a$ for every $a$. To undo $4$, solve $4 + ? = 0$ in $\mathbb{Z}_6$. Since $4 + 2 = 6$ and $6 \bmod 6 = 0$, the answer is $2$.

This is the identity/inverse distinction in disguise. The do-nothing number ($0$) is one special, *shared* element. The undo number ($2$) depends on what you are undoing — it is the partner of $4$ specifically, not a universal eraser. Confusing "the thing that does nothing" with "the thing that undoes you" is a classic trap; they are different jobs.

</details>

**5.** (Conceptual.) Explain in a sentence or two why a sum in $\mathbb{Z}_5$ can never produce a number outside $\{0, 1, 2, 3, 4\}$, no matter how large the two numbers you started with.

<details><summary>Show solution</summary>

Reducing mod $5$ is the *last* step of every addition, and a remainder after dividing by $5$ is always one of $0, 1, 2, 3, 4$ by definition — that is what "remainder less than $5$" means. So however big the honest sum gets, peeling off whole laps of $5$ drags it back inside the clock. The world is closed: combining two marks always yields a mark.

</details>

**6.** (Stretch.) On the $\mathbb{Z}_5$ clock, start at $0$ and repeatedly add $3$: $0, 0+3, \dots$ Write out the marks you visit until you return to $0$. Do you hit every mark before returning?

<details><summary>Show solution</summary>

Stepping by $3$ from $0$: $0 \to 3 \to (3+3=6=1) \to (1+3=4) \to (4+3=7=2) \to (2+3=5=0)$. The path is $0, 3, 1, 4, 2, 0$ — you visit all five marks exactly once before landing home.

That every mark gets hit is not a coincidence of the number $3$; it is a feature of $\mathbb{Z}_5$ that we will explain properly when we meet generators and cyclic groups. For now, just notice: one repeated step can tour the entire world.

</details>

## Recap

We bent the number line into a loop and built our first finite arithmetic: $\mathbb{Z}_n$, the integers mod $n$, where adding means "add, then keep only the remainder." We computed sums on the $5$-mark clock and laid out its entire addition table. Two patterns surfaced unbidden — a number that does nothing ($0$), and, for each mark, a partner that undoes it. We did not name them, but they are the seeds of everything ahead. Next we strip arithmetic down to its bare machinery — a set, an operation, and the handful of rules worth caring about — and those two patterns will finally get their true names.
