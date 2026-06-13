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
prerequisites: []
---

## The hook

It is 9 o'clock. You have a meeting in five hours. What time is it then?

You did not answer $14$. You answered $2$, and you did it without thinking, because the clock taught
you years ago that after $12$ the numbers start over. Past noon, $13$ becomes $1$, $14$ becomes $2$,
and the afternoon rolls on with the small numbers again. You have been doing a strange and beautiful
kind of arithmetic your whole life — an arithmetic where the numbers run out and loop back on
themselves — and nobody ever told you it had a name.

It does. This is our first finite world, a place where there are only twelve numbers and adding too
much carries you right back to where you started. Step onto the clock face, and you meet an operation
that is not the addition you grew up with.

## Intuition

Ordinary addition lives on a number line that runs forever in both directions. Add $5$ to $9$ and you
march five steps to the right and land on $14$, out there past the edge of the clock, in a place the
clock has no room for.

The clock fixes this by bending the number line into a circle. The twelve hour-marks sit around the
rim, and "add five hours" means *walk five marks clockwise*. Start at $9$, walk five marks — $10$,
$11$, $12$, $1$, $2$ — and you stop at $2$. The walk never leaves the circle. When you pass the top,
you don't fall off; you just keep going, and the count resets.

So the only question that ever matters on the clock is: **where do you land after the walk?** Two
different walks that finish on the same mark are, for the clock, the same answer. Walking $5$ hours
and walking $17$ hours both leave you at $2$ if you started at $9$ — the extra $12$ is one full lap
that drops you back where you began. That full lap is worth noticing. Adding a whole turn — twelve
hours on this clock — changes nothing at all; you end exactly where you started. Hold onto that idea
of a "do-nothing" amount. It will turn out to be one of the load-bearing pillars of everything ahead.

And here is the other thing the circle quietly hands you. If walking forward gets you somewhere, you
can always walk back. From $2$, step five marks *counter*-clockwise and you return to $9$. Every step
on the clock can be undone by a step the other way. That, too, is a pillar — for now just feel it: on
the clock, nothing is one-way.

To talk about this cleanly we drop the clock's quirk of calling the top $12$ instead of $0$, and we
allow ourselves any size of circle, not just twelve. A circle with $n$ marks, numbered $0$ through
$n-1$, is the general playground. The phrase mathematicians use for "what mark do you land on" is
**mod $n$** — short for *modulo*, Latin for "with respect to the measure." Let's make it precise.

## Definition (a mod n)

Let $n$ be a positive whole number, and let $a$ be any whole number. Then **$a \bmod n$** is the
remainder left over when $a$ is divided by $n$ — the unique whole number $r$ with

$$
a = qn + r, \qquad 0 \le r < n,
$$

where $q$ is a whole number (how many full laps you made) and $r$ (the mark you land on) satisfies
$0 \le r < n$.

We say two whole numbers $a$ and $b$ are **congruent mod $n$**, written

$$
a \equiv b \pmod{n},
$$

when they leave the same remainder — equivalently, when their difference $a - b$ is a whole number of
laps, a multiple of $n$.

## Definition (addition mod n)

The set of marks $\{0, 1, 2, \ldots, n-1\}$ together with the operation

$$
a + b \pmod{n}
$$

is written $\mathbb{Z}_n$. To add two marks, add them as ordinary numbers and then reduce mod $n$ —
that is, keep only the remainder after dividing by $n$.

## Example (the gateway: 9 + 5 on a 12-hour clock)

**Problem.** It is $9$ o'clock. Add $5$ hours. What time is it?

**Solution.** Add as ordinary numbers, then take the remainder mod $12$:

$$
9 + 5 = 14, \qquad 14 = 1 \cdot 12 + 2, \qquad \text{so } 14 \bmod 12 = 2.
$$

One full lap of $12$ is used up, with $2$ left over. In congruence notation,

$$
14 \equiv 2 \pmod{12}.
$$

The clock reads $2$. $\square$

## Example (the addition table for Z_5)

**Problem.** Build the complete addition table for $\mathbb{Z}_5$ — the five-mark clock with marks
$0, 1, 2, 3, 4$.

**Solution.** Each entry is the ordinary sum reduced mod $5$. For instance $3 + 4 = 7$, and
$7 = 1 \cdot 5 + 2$, so the entry is $2$. Filling in every pair:

| $+$ | 0 | 1 | 2 | 3 | 4 |
|----|---|---|---|---|---|
| **0** | 0 | 1 | 2 | 3 | 4 |
| **1** | 1 | 2 | 3 | 4 | 0 |
| **2** | 2 | 3 | 4 | 0 | 1 |
| **3** | 3 | 4 | 0 | 1 | 2 |
| **4** | 4 | 0 | 1 | 2 | 3 |

Three things are worth staring at. Every row and every column contains each of $0, 1, 2, 3, 4$
exactly once — nothing is missed, nothing repeats. The $0$ row and $0$ column copy the headings
unchanged: adding $0$ leaves a mark exactly as it was. And reading the table, every mark has a partner
that sends it back to $0$ — $1$ pairs with $4$, $2$ pairs with $3$ — because $1 + 4 = 5 \equiv 0$ and
$2 + 3 = 5 \equiv 0$. Each step can be undone. $\square$

## Exercises

1. **(Mechanical.)** Compute each of the following.
   (a) $8 + 7 \pmod{12}$  (b) $4 + 4 \pmod 5$  (c) $23 \bmod 6$  (d) $50 \bmod 7$.
   *Hint: add (or divide) as usual, then keep only the remainder, a number from $0$ to $n-1$.*

2. **(Mechanical.)** It is $10$ o'clock at night. A flight lasts $9$ hours. On a 12-hour clock,
   what time does it land?
   *Hint: $10 + 9$, then reduce mod $12$.*

3. **(Conceptual.)** In $\mathbb{Z}_5$, which mark do you add to $3$ to get back to $0$? Which do you
   add to $2$? Explain in one sentence what these "undo" partners have to do with the number $5$.
   *Hint: look down the row for $3$ in the table and find where the $0$ sits; the two partners in each
   case sum to $5$.*

4. **(Conceptual.)** On the 12-hour clock, adding $12$ hours lands you back where you started, and so
   does adding $24$, or $0$. List three different amounts (other than $0$) you could add to *any* hour
   on a 12-hour clock and be guaranteed to read the same time. What do all such amounts have in common?
   *Hint: a full lap is $12$; how many laps return you home?*

5. **(Conceptual.)** True or false: $17 \equiv 2 \pmod{5}$. Justify by checking the difference
   $17 - 2$.
   *Hint: congruent mod $5$ means the difference is a whole number of laps of $5$.*

6. **(Stretch.)** A clock with $n$ marks is set to $0$. You repeatedly add $3$: $0, 3, 6, \ldots$,
   always reducing mod $n$. For $n = 12$, do you eventually visit every mark, or do you cycle through
   only some of them? Try it. Then try the same with $n = 10$. What is different about the two cases?
   *Hint: write out the sequence of landings until it returns to $0$, and count how many distinct marks
   you hit before the loop closes.*

## Recap

The clock taught you a finite arithmetic without ever using the word: a world of finitely many marks
where adding too much wraps around and starts over. To work mod $n$ is to keep only the remainder
after dividing by $n$ — the mark you land on after your walk around the circle. We watched $9 + 5$
become $2$ on the 12-hour clock, and we built the full addition table for $\mathbb{Z}_5$. Two patterns
in that table will follow us through the whole course: a special "do-nothing" amount that leaves every
mark untouched, and the way every step on the clock can be walked back to where it began. Those are
not accidents of the clock. They are the first hints of the rules we are about to name.
