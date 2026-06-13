---
title: Symmetries of a Triangle
course: abstract-algebra
order: 6
summary: The symmetries of a triangle form a group where order matters — our first taste of non-commutative structure.
estimatedMinutes: 22
objectives:
  - List the six symmetries of an equilateral triangle
  - Compose two symmetries
  - Show by example that the operation is not commutative
prerequisites: []
---

## The hook

Cut a triangle out of cardboard — an equilateral one, all three sides the same length — and write a small number in each corner: $1$ at the top, $2$ at the bottom-left, $3$ at the bottom-right. Now set it inside a triangular hole cut to fit, like a single piece of a wooden puzzle. Lift it out, do something to it, and drop it back in. Sometimes it slots in perfectly, as if you never touched it. Sometimes it won't fit until you turn or flip it.

The moves that *do* fit — the ones that leave the triangle sitting in exactly the same outline it started in — are its **symmetries**. There turn out to be exactly six of them, no more and no less. And hiding among those six is the first real surprise of this course: the order in which you do two of them can change the answer. Up to now, every operation you have met has quietly obeyed $a + b = b + a$. The triangle is about to break that habit.

## Intuition: act it out

Get the cardboard triangle in your hands. The hole it fits into is fixed in space; what we are allowed to do is pick the triangle up and put it back so the outline matches. Two kinds of move work.

**Turns.** Spin the triangle in its own plane. A turn of $120°$ counterclockwise sends corner $1$ down to where $2$ was, $2$ over to where $3$ was, and $3$ up to the top. It still fits the hole — a third of a full circle lands corner on corner. Turn again and you have gone $240°$. Turn a third time and you are back where you started, $360°$, the do-nothing move. So there are three turns: $0°$, $120°$, $240°$.

**Flips.** Now turn the triangle *over*, like flipping a pancake, using an axis that runs through one corner and the midpoint of the opposite side. Pick the axis through corner $1$: flipping across it pins $1$ in place and swaps $2$ with $3$. There is one such axis through each corner, so there are three flips.

Three turns and three flips. That is the whole list — six moves, and the cardboard refuses every other attempt. (A turn of $60°$, for instance, leaves the corners pointing the wrong way; it won't drop in.)

The thing to *do*, the operation, is to chain two moves together: **do one symmetry, then another, and ask which single symmetry has the same overall effect.** Turn by $120°$, then turn by $120°$ again, and the net effect is one turn of $240°$ — a move that is already on our list. That is the pattern we will lean on: any two symmetries, performed back to back, always add up to a third symmetry that was on the list all along.

## The setup: naming the six moves

Following the plan from the last two modules, we give the moves short names so we can do algebra with them.

Let $e$ be the **do-nothing** move (the $0°$ turn). Let $r$ be the **turn by $120°$** counterclockwise. Then turning twice is $r$ followed by $r$, which we write $r^2$ (the $240°$ turn). Turning a third time brings us home:

$$
r^3 = e.
$$

Let $s$ be the **flip across the axis through corner $1$** (the one that fixes $1$ and swaps $2$ and $3$). Flip, then flip back across the same axis, and you are where you began:

$$
s^2 = e.
$$

We combine moves by writing them side by side. Throughout this module we read a product **right to left**, the way function machines feed into each other: $rs$ means *first do the flip $s$, then do the turn $r$.* (Pick a direction and hold it; the only thing that matters is staying consistent.) With $r$, $s$, and this rule, the other two flips turn out to be $rs$ and $r^2 s$ — a flip followed by a turn is itself a flip. So our six symmetries are exactly

$$
e,\quad r,\quad r^2,\quad s,\quad rs,\quad r^2 s.
$$

This six-element collection, with composition as its operation, is the **dihedral group of the triangle**, written $D_3$. It has **order** $6$ — six elements in all.

## Definition (Symmetry group of the triangle)

A **symmetry** of the equilateral triangle is a rigid motion of the plane that maps the triangle onto itself. The **symmetry group** $D_3$ is the set of all six such symmetries,

$$
D_3 = \{\, e,\ r,\ r^2,\ s,\ rs,\ r^2 s \,\},
$$

together with the operation of **composition** (do one symmetry, then another). Here $r$ is rotation by $120°$ and $s$ is a reflection, subject to the relations $r^3 = e$, $s^2 = e$, and $sr = r^2 s$.

## Worked example: order matters

**Problem.** Compare $rs$ and $sr$ by tracking where the corners $1, 2, 3$ end up. Are they the same symmetry?

**Solution.** Start each time from the home position — $1$ at top, $2$ bottom-left, $3$ bottom-right — and remember we work right to left.

*First, $rs$ (flip $s$, then turn $r$).* The flip $s$ fixes $1$ and swaps the bottom two, giving the arrangement

$$
\text{top } 1,\quad \text{bottom-left } 3,\quad \text{bottom-right } 2.
$$

Now apply the $120°$ turn $r$: top goes to bottom-left, bottom-left to bottom-right, bottom-right to top. The corner sitting at top ($1$) moves to bottom-left; the corner at bottom-left ($3$) moves to bottom-right; the corner at bottom-right ($2$) moves to top. The result:

$$
\text{top } 2,\quad \text{bottom-left } 1,\quad \text{bottom-right } 3.
$$

*Now, $sr$ (turn $r$, then flip $s$).* The turn $r$ first sends home to

$$
\text{top } 3,\quad \text{bottom-left } 1,\quad \text{bottom-right } 2.
$$

Now apply the flip $s$, which fixes whatever sits at top and swaps the two bottom corners. Top ($3$) stays; bottom-left ($1$) and bottom-right ($2$) trade places:

$$
\text{top } 3,\quad \text{bottom-left } 2,\quad \text{bottom-right } 1.
$$

Line up the two outcomes:

$$
rs:\ (\,2,\,1,\,3\,) \qquad\text{versus}\qquad sr:\ (\,3,\,2,\,1\,).
$$

They disagree at every corner. Doing the flip first and doing the turn first land the triangle in genuinely different positions. So

$$
rs \neq sr.
$$

This is the headline. The operation in $D_3$ is **non-commutative**: swapping the order of two moves can change the result. (Contrast the turns alone, where $r \cdot r^2 = r^2 \cdot r = e$ — among themselves the rotations *do* commute. It is the mixing of a turn with a flip that breaks the symmetry of order.) Tracking the corners also confirms the relation we used to name our elements: $sr$ landed in the same position as $r^2 s$, which is exactly the rule $sr = r^2 s$.

### The Cayley table for $D_3$

A **Cayley table** records every product at once. To read it, take the row label, then the column label, and compose them as *row first, then column would be one convention* — but to stay faithful to our right-to-left reading, we fill each cell with **(row) $\cdot$ (column)**, meaning *do the column move first, then the row move.* Each entry is whichever of the six names gives the same net motion, worked out the way we just did by hand and simplified with $r^3 = e$, $s^2 = e$, and $sr = r^2 s$.

| $\cdot$ | $e$ | $r$ | $r^2$ | $s$ | $rs$ | $r^2 s$ |
|---|---|---|---|---|---|---|
| **$e$** | $e$ | $r$ | $r^2$ | $s$ | $rs$ | $r^2 s$ |
| **$r$** | $r$ | $r^2$ | $e$ | $rs$ | $r^2 s$ | $s$ |
| **$r^2$** | $r^2$ | $e$ | $r$ | $r^2 s$ | $s$ | $rs$ |
| **$s$** | $s$ | $r^2 s$ | $rs$ | $e$ | $r^2$ | $r$ |
| **$rs$** | $rs$ | $s$ | $r^2 s$ | $r$ | $e$ | $r^2$ |
| **$r^2 s$** | $r^2 s$ | $rs$ | $s$ | $r^2$ | $r$ | $e$ |

Two things to notice. The table is **not symmetric across its diagonal** — compare the $s$ row against the $s$ column and you see different entries — which is the non-commutativity staring back at you. And every one of the six names appears exactly once in each row and once in each column, a tidy pattern we will meet again.

### Why these six form a group

Run them past the four group rules from the earlier modules.

- **Closure.** Every cell of the Cayley table holds one of our six names — no move ever combines with another to produce something new. Do two symmetries and you get a symmetry.
- **Associativity.** Composition is "do this, then this, then this," and grouping the steps differently does not change the final position of the triangle; $(ab)c$ and $a(bc)$ both mean the same chain of motions performed in the same order. So the operation is associative.
- **Identity.** The do-nothing move $e$ leaves everything untouched: $e a = a e = a$ for every move $a$. Its row and column in the table simply copy the labels.
- **Inverses.** Every move can be undone. A flip undoes itself, since $s^2 = e$; the $120°$ turn $r$ is undone by the $240°$ turn $r^2$, since $r^3 = e$ means $r \cdot r^2 = e$. In the table, each row contains exactly one $e$ — that column is the move's inverse.

All four rules hold, so $D_3$ is a bona fide group. It is also our first group in which order matters: a group can be non-commutative, and most interesting ones are.

## Exercises

1. **(Mechanical.)** Using the Cayley table, compute $r^2 \cdot s$ and $s \cdot r^2$. Are they equal? *Hint: read row-then-column for each; one is $r^2 s$, the other is $rs$.*

2. **(Mechanical.)** What is the inverse of $rs$? That is, which symmetry undoes it? *Hint: scan the $rs$ row for the entry $e$, and note its column. The diagonal here is a giveaway.*

3. **(Mechanical.)** Track the corners by hand to find the single symmetry equal to $r \cdot r \cdot s$ (turn, turn, then... remember the order). Confirm your answer against the table. *Hint: $r \cdot r = r^2$, so you want $r^2 s$; start from home, apply $s$, then turn twice.*

4. **(Conceptual.)** Find one more pair of symmetries $a$ and $b$ in $D_3$, different from $r$ and $s$, for which $a b \neq b a$. Show the disagreement using the table. *Hint: any flip paired with a turn will do; try $a = r^2$ and $b = s$.*

5. **(Conceptual.)** The three rotations $e, r, r^2$ on their own satisfy all four group rules and *do* commute with one another. Explain in a sentence or two why this smaller collection is itself a group, and why it is commutative while the full $D_3$ is not. *Hint: look only at the top-left $3 \times 3$ block of the table; check that it is symmetric across its diagonal and contains only $e, r, r^2$.*

6. **(Stretch.)** A square has eight symmetries (four turns and four flips), forming the group $D_4$. Without writing the whole table, explain why $D_4$ must also be non-commutative. *Hint: the same kind of argument — a turn followed by a flip versus a flip followed by a turn — moves the labeled corners to different places, just as it did for the triangle.*

## Recap

The equilateral triangle has exactly six symmetries: three turns $e, r, r^2$ and three flips $s, rs, r^2 s$, bound by the relations $r^3 = e$ and $s^2 = e$. Composing them — do one, then another — is an operation that satisfies all four group rules, so these six form the group $D_3$ of order $6$. But unlike every operation before it, this one cares about order: we watched the corners land in different spots for $rs$ and $sr$, proving $rs \neq sr$. That single inequality retires the comfortable belief that everything commutes, and it opens the door to the richer, non-commutative groups that the rest of the course will explore.
