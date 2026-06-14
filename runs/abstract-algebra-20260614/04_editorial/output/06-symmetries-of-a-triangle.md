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
prerequisites: [04-what-is-a-group, 05-a-zoo-of-groups]
---

Cut a triangle out of cardboard, mark its corners $1$, $2$, $3$, and drop it into a triangular hole. Now pick it up, move it however you like, and drop it back so it fits. Some moves leave the hole looking untouched; others spin the corners to new seats. The moves that leave the *outline* unchanged are the triangle's **symmetries** — and there are exactly six of them.

Here is the surprise waiting at the end of this module. Take two of those moves and perform them in one order, then perform the very same two moves in the other order. You will not always land in the same place. Spin-then-flip and flip-then-spin are different triangles. Every group you have met so far — clocks, integers, the powers of $i$ — quietly obeyed $a \cdot b = b \cdot a$. This one breaks that habit.

An equilateral triangle has two flavors of symmetry, and you can act them both out with the cardboard.

**Rotations.** Spin the triangle about its center. Turn it a third of the way around ($120^\circ$) and it fits again, with the corners shifted one seat over. Turn it two-thirds ($240^\circ$) and it fits again. Turn it all the way around and you are back where you started — that "do nothing" move counts too. Three rotations in all.

**Reflections.** Each corner has a line running from it to the midpoint of the opposite side. Flip the triangle over across any one of those three lines and it fits again, with two corners swapping places and one staying put. Three reflections.

Three rotations plus three reflections makes **six symmetries**. The "operation" that combines them is **composition**: do one move, then do another, and ask which single move had the same overall effect. That combined move is always one of the same six — the triangle never escapes its own outline. We will write the symmetries with a tiny alphabet:

- $e$ — the identity (rotate by $0^\circ$).
- $r$ — rotate by $120^\circ$.
- $s$ — one chosen reflection (a flip).

Everything else is built from these two. Rotating twice is $r$ then $r$, written $r^2$ (a $240^\circ$ turn). A third rotation brings you home, so $r^3 = e$. A flip undone by the same flip leaves you home, so $s^2 = e$. The remaining symmetries are *combinations* — a flip after a rotation — written $rs$ and $r^2s$. That gives the full cast of six:

$$
D_3 = \{\, e,\ r,\ r^2,\ s,\ rs,\ r^2s \,\}.
$$

The name $D_3$ stands for the **dihedral group** of the triangle — "dihedral" just means "symmetries of a regular shape, rotations and flips together."

![An equilateral triangle with corners labelled 1, 2, and 3, a curved arrow showing a 120-degree rotation about the center, and a dashed line through one corner and the midpoint of the opposite side marking a reflection axis.](./assets/triangle-symmetries.svg)

A word on how we read $rs$. Throughout this module, **the move written on the right happens first.** So $rs$ means "flip with $s$, then rotate with $r$" — exactly the order you read a composed function $f(g(x))$, innermost first. Pick a reading order and hold it; switching halfway is how mistakes are born.

## Definition (Composition of symmetries)

A **symmetry** of the triangle is a way of moving it that leaves its outline occupying the same place. The **composition** of two symmetries $g$ and $h$, written $g \cdot h$ (or just $gh$), is the single symmetry with the same net effect as performing $h$ first and then $g$. The set $D_3$ of the six symmetries, under composition, is the **dihedral group of the triangle**.

To pin down which symmetry a composition equals, track where the corners go. Number the seats and follow corner $1$, corner $2$, corner $3$ through each move; the final arrangement names the result.

## Worked example

**Problem.** A $120^\circ$ rotation $r$ sends the corner in seat $1$ to seat $2$, seat $2$ to seat $3$, and seat $3$ to seat $1$. The reflection $s$ fixes seat $1$ and swaps seats $2$ and $3$. Compute $rs$ and $sr$, and decide whether they are equal.

**Solution.** Start with corners reading $1,2,3$ in seats $1,2,3$. Remember: the right-hand move goes first.

Compute $rs$ — flip with $s$, then rotate with $r$:

$$
\begin{aligned}
123 \;&\xrightarrow{\ s\ }\; 132 \quad(\text{$s$ fixes seat 1, swaps 2 and 3})\\
    \;&\xrightarrow{\ r\ }\; 213 \quad(\text{$r$ moves each corner one seat onward}).
\end{aligned}
$$

Now compute $sr$ — rotate with $r$, then flip with $s$:

$$
\begin{aligned}
123 \;&\xrightarrow{\ r\ }\; 312\\
    \;&\xrightarrow{\ s\ }\; 321.
\end{aligned}
$$

The outcomes are $213$ and $321$. They are different arrangements, so

$$
rs \neq sr.
$$

Order matters. The two moves are the same; performing them in the opposite sequence lands the triangle in a different place. This single inequality is the headline of the module.

## Check yourself

Using the same rule that the right-hand move happens first, compute $r^2 \cdot r$. (Remember $r^3 = e$.) Which of the six symmetries is it?

<details><summary>Show answer</summary>

$r^2 \cdot r = r^3 = e$, the identity. Three $120^\circ$ turns make a full $360^\circ$ turn, which returns every corner to its own seat. Rotations alone behave like clock arithmetic on three hours — they *do* commute with each other; it is only when flips enter that order starts to matter.

</details>

## The relation that runs the table

We found $rs \neq sr$ by tracking corners. But $sr$ must still equal *one* of the six symmetries — composition never leaves $D_3$. From the worked example, $sr$ sent $123$ to $321$. Check the other candidate: $r^2 s$ flips with $s$ ($123 \to 132$) then rotates twice with $r^2$ ($132 \to 321$). Same arrangement. So

$$
sr = r^2 s.
$$

This little equation is the engine of the whole group. It is a rule for **moving a flip past a rotation**: whenever an $s$ sits to the left of an $r$, you may slide the $s$ rightward at the cost of turning that $r$ into $r^2$. Apply it repeatedly and you can rewrite any string of $r$'s and $s$'s into one of the six standard names $r^a s^b$. That is exactly what lets us fill in the table below without ever picking the cardboard back up.

## The Cayley table

A **Cayley table** is a combination grid: read the **row** label as the left move and the **column** label as the right move (so the row entry is performed *second*), and the cell holds their composition. Here is the full $6 \times 6$ table for $D_3$, built using $r^3 = e$, $s^2 = e$, and $sr = r^2s$.

| $\cdot$ | $e$ | $r$ | $r^2$ | $s$ | $rs$ | $r^2s$ |
|---------|-----|-----|-------|-----|------|--------|
| **$e$**     | $e$    | $r$    | $r^2$  | $s$    | $rs$   | $r^2s$ |
| **$r$**     | $r$    | $r^2$  | $e$    | $rs$   | $r^2s$ | $s$    |
| **$r^2$**   | $r^2$  | $e$    | $r$    | $r^2s$ | $s$    | $rs$   |
| **$s$**     | $s$    | $r^2s$ | $rs$   | $e$    | $r^2$  | $r$    |
| **$rs$**    | $rs$   | $s$    | $r^2s$ | $r$    | $e$    | $r^2$  |
| **$r^2s$**  | $r^2s$ | $rs$   | $s$    | $r^2$  | $r$    | $e$    |

Two things to notice. First, **every symmetry appears exactly once in each row and once in each column** — a fingerprint of every group's Cayley table (no move is ever doubled or skipped). Second, the table is **not symmetric across its main diagonal**: the entry in the $s$-row, $r$-column is $r^2s$, while the entry in the $r$-row, $s$-column is $rs$. Those two cells disagree, and that asymmetry *is* non-commutativity, drawn as a picture. A commutative group's table is a mirror across the diagonal; $D_3$'s is not.

## Check yourself

Read $rs \cdot rs$ off the table (the $rs$-row, $rs$-column). What does it equal, and does that make sense?

<details><summary>Show answer</summary>

The cell is $e$. So $rs$ is its own inverse — doing the move $rs$ twice returns the triangle home. That fits the geometry: $rs$ turns out to be one of the three reflections, and any single flip undoes itself, just as $s^2 = e$.

</details>

## Verifying the group axioms

We claimed $D_3$ is a group. Let us walk the four axioms gently, in prose, and check each against the table.

**Closure.** Combining any two symmetries gives another symmetry. Every cell of the table holds one of the six names $e, r, r^2, s, rs, r^2s$ — nothing new ever appears. Geometrically this is obvious: move the triangle so it fits, then move it again so it fits, and the net result still fits. Closed.

**Associativity.** When we compose three symmetries, $g \cdot (h \cdot k)$ equals $(g \cdot h) \cdot k$ — the grouping does not change the outcome. We get this for free: each symmetry is a function from the triangle to itself, and *composition of functions is always associative* (doing $k$, then $h$, then $g$ means the same thing however you bracket the planning). No table-checking needed.

**Identity.** The element $e$ leaves every symmetry alone: $e \cdot g = g$ and $g \cdot e = g$ for all six. Read the top row and the left column of the table — each simply copies the labels. So $e$ is the identity.

**Inverses.** Every symmetry has an undo. Scan each row for the entry $e$: it appears once, and its column names the inverse. The rotations undo each other ($r$ and $r^2$ are a pair, since $r \cdot r^2 = e$), while each of $s$, $rs$, $r^2s$ — the three reflections — is its own inverse, sitting on its own diagonal $e$. Every move is reversible.

All four axioms hold, so $D_3$ is a genuine group. What it is *not* is **abelian**: from §"The relation," $sr = r^2s \neq rs$. $D_3$ is the smallest non-abelian group there is — six elements, and order already matters.

## Exercises

**1 (mechanical).** Using the rule that the right-hand move happens first, simplify $r \cdot r^2$ and $s \cdot s$ to one of the six standard names.

<details><summary>Show solution</summary>

$r \cdot r^2 = r^3 = e$: three $120^\circ$ turns complete a full circle. $s \cdot s = s^2 = e$: a flip undoes itself. Both equal the identity. These are the two "engine" relations $r^3 = e$ and $s^2 = e$ that, together with $sr = r^2s$, generate the entire table.

</details>

**2 (mechanical).** Read $r \cdot s$ and $r^2 \cdot s$ off the Cayley table. Confirm each matches its standard name $rs$ and $r^2s$.

<details><summary>Show solution</summary>

The $r$-row, $s$-column cell is $rs$; the $r^2$-row, $s$-column cell is $r^2s$. They match by construction — $rs$ and $r^2s$ are *defined* as those compositions. The point of the exercise is to get fluent reading the grid: row = left move (performed second), column = right move (performed first).

</details>

**3 (conceptual — the headline).** Show that $sr \neq rs$, and find which standard name $sr$ equals. Then explain, in one sentence, why this means $D_3$ is not abelian.

<details><summary>Show solution</summary>

Track corners with $s$ fixing seat $1$ and swapping $2,3$, and $r$ moving each corner one seat onward. For $sr$, do $r$ first: $123 \to 312$, then $s$: $312 \to 321$. For $rs$, do $s$ first: $123 \to 132$, then $r$: $132 \to 213$. The arrangements $321$ and $213$ differ, so $sr \neq rs$; comparing $321$ with the effect of $r^2s$ shows $sr = r^2s$.

**The common wrong intuition:** every group you had met before — clocks, integers under $+$, the powers of $i$ — was abelian, so it *feels* like $sr$ and $rs$ "should" be the same flip-and-spin and must agree. They do not, because composition cares about sequence: a flip changes which way "forward" points for the rotation that follows. A single counterexample like $sr \neq rs$ is all it takes to prove a group non-abelian — you never need to check every pair.

</details>

**4 (conceptual).** A friend writes down a Cayley table for a six-element group and you notice the letter $r$ appears twice in one row. Without computing anything, explain how you know they made an error.

<details><summary>Show solution</summary>

In any group's Cayley table, each element appears exactly once per row (and once per column). Reason: if $g \cdot x = g \cdot y$ within a row, multiply both sides on the left by $g^{-1}$ — which exists, by the inverse axiom — to get $x = y$, so two different columns cannot share an entry. A repeated $r$ in one row would force two columns to be equal, contradicting that the column labels are distinct. The error is real; no arithmetic required.

</details>

**5 (stretch).** Use only the relations $r^3 = e$, $s^2 = e$, and $sr = r^2s$ to simplify the string $s \cdot r \cdot s$ to a single standard name $r^a s^b$. (Hint: slide the leftmost $s$ past the $r$ first.)

<details><summary>Show solution</summary>

Read left to right and apply the slide rule $sr = r^2s$ to the first two factors:

$$
s\,r\,s = (sr)\,s = (r^2 s)\,s = r^2 (s s) = r^2 s^2 = r^2 e = r^2.
$$

So $srs = r^2$. The flip-rotate-flip sandwich collapses to a pure rotation — and notice it is the *reverse* rotation $r^2 = r^{-1}$, not $r$. Conjugating a rotation by a reflection reverses its direction, which is the algebra's way of saying a flipped-over triangle spins the other way.

</details>

## Recap

Six symmetries — three rotations $e, r, r^2$ and three reflections $s, rs, r^2s$ — form the group $D_3$ under composition, and the whole of it runs on three relations: $r^3 = e$, $s^2 = e$, and the slide rule $sr = r^2s$. Filling in its Cayley table, we found the table is not a mirror across its diagonal, because $rs \neq sr$: this is the first group we have met where **order matters**, the smallest non-abelian group of all. Carry that lesson forward — "commutative" was a convenience of our early examples, not a law of groups. Next we go hunting *inside* groups like this one, asking which subsets are secretly groups in their own right: subgroups.
</content>
</invoke>
