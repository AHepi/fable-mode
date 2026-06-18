---
title: Symmetries of a Triangle
course: abstract-algebra
order: 6
summary: The symmetries of an equilateral triangle form a group where order suddenly matters — the first time flip-then-spin and spin-then-flip part ways.
estimatedMinutes: 22
objectives:
  - List the six symmetries of an equilateral triangle.
  - Compose two symmetries by performing one move and then another.
  - Show by a worked example that the operation is not commutative.
prerequisites:
  - 05-a-zoo-of-groups
---

Cut an equilateral triangle out of stiff paper and drop it into a triangular hole that fits it exactly. Now lift it out, turn it however you like, and set it back. If it drops in clean — every corner in a corner, no overhang — you have performed a *symmetry*: a way of moving the triangle that leaves the hole looking untouched.

Every group you have met so far has been **abelian** — the order of combining two things never mattered. On a clock (module 02), `$3 + 5$` and `$5 + 3$` land on the same hour. Multiply `$i$` by `$-1$` or `$-1$` by `$i$`, same answer either way. That has felt like a law of nature. It is not. The paper triangle is about to break it.

## Picking up the triangle

Number the three corners of the paper triangle `$1$`, `$2$`, `$3$`, and number the three *seats* of the hole the same way, with seat `$1$` at the top, seat `$2$` at the lower left, seat `$3$` at the lower right. At the start, corner `$1$` sits in seat `$1$`, corner `$2$` in seat `$2$`, corner `$3$` in seat `$3$`. A symmetry is anything you can do to the paper that lands every corner back in *some* seat.

There are exactly six. Three of them are **rotations** — turns about the center:

- `$e$`: leave it alone (turn by `$0^\circ$`). This is the do-nothing move, the **identity** (module 04): combine it with anything and nothing changes.
- `$r$`: turn by `$120^\circ$`.
- `$r^2$`: turn by `$240^\circ$` — the same as turning by `$120^\circ$` twice, which is why we write it `$r^2$`. A third turn, `$r^3$`, brings every corner home, so `$r^3 = e$`.

The other three are **reflections** — flips that turn the paper over, each one across a line through one corner and the midpoint of the opposite edge:

- `$s$`: flip across the line through seat `$1$`, holding the top corner fixed and swapping the bottom two.
- `$rs$`: a flip that holds the lower-right corner fixed.
- `$r^2s$`: a flip that holds the lower-left corner fixed.

We will see in a moment why the last two earn those compound names. The six together are the cast of this module:

$$
D_3 = \{\, e,\; r,\; r^2,\; s,\; rs,\; r^2s \,\}.
$$

![The six symmetries of an equilateral triangle: three rotations and three reflections](./assets/triangle-symmetries.svg)

## Naming the operation: do one move, then another

A group is a set together with an **operation** — a rule that combines two elements to get a third — obeying four rules (module 04): the operation is closed, associative, has an identity, and gives every element an inverse. The set here is `$D_3$`, the six symmetries. The operation is **composition**: do one symmetry, then do another, and ask which single symmetry has the same overall effect.

We write composition by **juxtaposition** — just putting the two symbols side by side — and we read it **right to left**, the way function composition runs. So

$$
rs \quad\text{means: first do } s, \text{ then do } r.
$$

The reflection on the right goes first; the rotation on the left goes second. (Right-to-left feels backward at first. It is the same convention you use without noticing when you write `$f(g(x))$`: `$g$` touches `$x$` first.)

The operation is closed because a symmetry followed by a symmetry is still a symmetry — the paper still drops in clean. The identity is `$e$`, the do-nothing turn. Every move has an inverse that undoes it: a `$120^\circ$` turn is undone by a `$240^\circ$` turn (`$r$` and `$r^2$`), and a flip undoes itself (`$s$` followed by `$s$` is `$e$`, so `$s^2 = e$`). Composition is associative for the plain reason that doing moves in a fixed sequence does not care how you bracket them. Run the four-axiom check from module 04 and `$D_3$` passes: it is a group.

But it is a group with a twist no earlier one had.

## Flip-then-spin is not spin-then-flip

Take the triangle in its home position, corners reading `$1, 2, 3$` in seats `$1, 2, 3$`. We will compute `$rs$` and `$sr$` by tracking where each numbered corner ends up. Watch only the seats.

**Compute `$rs$` (first `$s$`, then `$r$`).**

Start: seats `$(1, 2, 3)$`.

First apply `$s$` — hold the top, swap the bottom two:

$$
(1,2,3) \;\xrightarrow{\,s\,}\; (1,3,2).
$$

Now apply `$r$` — turn `$120^\circ$`, so each corner moves one seat around:

$$
(1,3,2) \;\xrightarrow{\,r\,}\; (2,1,3).
$$

So `$rs$` sends the home triangle to `$(2,1,3)$`.

**Compute `$sr$` (first `$r$`, then `$s$`).**

Start again: seats `$(1, 2, 3)$`.

First apply `$r$`:

$$
(1,2,3) \;\xrightarrow{\,r\,}\; (3,1,2).
$$

Now apply `$s$` — hold the top, swap the bottom two:

$$
(3,1,2) \;\xrightarrow{\,s\,}\; (3,2,1).
$$

So `$sr$` sends the home triangle to `$(3,2,1)$`.

Set the two results side by side:

$$
rs:\ (2,1,3) \qquad\qquad sr:\ (3,2,1).
$$

They are different arrangements. Therefore

$$
rs \neq sr.
$$

The order in which you compose the two moves changes the outcome. Flip-then-spin lands the corners one way; spin-then-flip lands them another. A single worked example settles it: `$D_3$` is **non-commutative** — a group where, for at least one pair of elements, `$a b \neq b a$`. (A group where order *never* matters, like all the ones before this, is called **abelian**, after Niels Abel; `$D_3$` is the first group in this course that is not abelian.)

Notice what each result actually is. The arrangement `$(2,1,3)$` holds seat `$3$` fixed and swaps the other two — that is a reflection, the one we named `$rs$`. The arrangement `$(3,2,1)$` holds seat `$2$` fixed — the reflection we named `$r^2s$`. So the two computations also prove a clean relation:

$$
sr = r^2 s.
$$

That single equation — "a flip after a turn equals a different flip" — is the engine of the whole group. Every product in `$D_3$` can be untangled with `$r^3 = e$`, `$s^2 = e$`, and `$sr = r^2s$`.

## Check yourself

Using `$sr = r^2s$`, what is `$sr^2$`? (Hint: `$r^2 = rr$`, and you can slide an `$s$` past one `$r$` at a time.)

<details><summary>Show answer</summary>

`$sr^2 = rs$`. Slide the `$s$` past the first `$r$`: `$s r^2 = (sr) r = (r^2 s) r = r^2 (sr) = r^2 (r^2 s) = r^4 s$`. Since `$r^3 = e$`, `$r^4 = r$`, so `$sr^2 = rs$`. The rule is that pushing `$s$` to the right of `$r^k$` flips the power: `$s r^k = r^{-k} s$`.

</details>

## The Cayley table

A **Cayley table** (first named in module 05) lays out every product at once: read the row label first... no — read the row element as the move done *second* and the column element as the move done *first*, matching `$rs$` = "first `$s$`, then `$r$`." Each entry is the single symmetry equal to (row) after (column).

|        | `$e$`   | `$r$`   | `$r^2$` | `$s$`   | `$rs$`  | `$r^2s$` |
|--------|---------|---------|---------|---------|---------|----------|
| `$e$`    | `$e$`   | `$r$`   | `$r^2$` | `$s$`   | `$rs$`  | `$r^2s$` |
| `$r$`    | `$r$`   | `$r^2$` | `$e$`   | `$rs$`  | `$r^2s$`| `$s$`    |
| `$r^2$`  | `$r^2$` | `$e$`   | `$r$`   | `$r^2s$`| `$s$`   | `$rs$`   |
| `$s$`    | `$s$`   | `$r^2s$`| `$rs$`  | `$e$`   | `$r^2$` | `$r$`    |
| `$rs$`   | `$rs$`  | `$s$`   | `$r^2s$`| `$r$`   | `$e$`   | `$r^2$`  |
| `$r^2s$` | `$r^2s$`| `$rs$`  | `$s$`   | `$r^2$` | `$r$`   | `$e$`    |

The table makes the non-commutativity visible: it is not symmetric across its diagonal. Look at the `$s$` row against the `$s$` column. The `$r$`-column of the `$s$`-row reads `$r^2s$` (that is `$sr$`); the `$s$`-column of the `$r$`-row reads `$rs$`. Two different boxes, two different answers — exactly `$sr \neq rs$` caught in a grid.

What the table still respects is the fingerprint of every group's Cayley table, the one from module 05: every element shows up exactly once in each row and exactly once in each column. Non-commutativity bends the table; it does not break that law.

## Check yourself

From the table, what is `$(rs)(rs)$`? What does that tell you about the element `$rs$`?

<details><summary>Show answer</summary>

Find the `$rs$` row and the `$rs$` column: the entry is `$e$`. So `$(rs)(rs) = e$`, meaning `$rs$` is its own inverse. That fits — `$rs$` is a reflection, and flipping the same way twice returns the triangle home. All three reflections are their own inverses.

</details>

## Exercises

**1.** List all six elements of `$D_3$` and say, for each, whether it is a rotation or a reflection.

<details><summary>Show solution</summary>

Rotations: `$e$` (`$0^\circ$`), `$r$` (`$120^\circ$`), `$r^2$` (`$240^\circ$`). Reflections: `$s$`, `$rs$`, `$r^2s$`. Three of each, six in total. The rotations turn the paper in place; the reflections flip it over.

</details>

**2.** Compute `$r \cdot s$` and `$s \cdot r$` directly by tracking the seats `$(1,2,3)$`, and confirm they disagree.

<details><summary>Show solution</summary>

`$rs$` is first `$s$` then `$r$`: `$(1,2,3) \to (1,3,2) \to (2,1,3)$`. `$sr$` is first `$r$` then `$s$`: `$(1,2,3) \to (3,1,2) \to (3,2,1)$`. The results `$(2,1,3)$` and `$(3,2,1)$` differ, so `$rs \neq sr$`. This is the same computation as the worked example — running it yourself is the point.

</details>

**3.** Use the relations `$r^3 = e$`, `$s^2 = e$`, and `$sr = r^2 s$` to simplify `$r^2 s r$`.

<details><summary>Show solution</summary>

Work from the inside: `$sr = r^2 s$`, so `$r^2 s r = r^2 (sr) = r^2 (r^2 s) = r^4 s$`. Since `$r^3 = e$`, `$r^4 = r^3 r = r$`. Thus `$r^2 s r = rs$`. (Check against the Cayley table: the `$r^2s$` row, `$r$` column reads `$rs$`. It matches.)

</details>

**4.** A tempting wrong answer: a student says "`$D_3$` is non-commutative, so `$ab \neq ba$` for *every* pair of elements." Find two elements of `$D_3$` that *do* commute, and explain why one example of disagreement does not mean total disagreement.

<details><summary>Show solution</summary>

`$r$` and `$r^2$` commute: `$r \cdot r^2 = r^3 = e$` and `$r^2 \cdot r = r^3 = e$`, so `$r r^2 = r^2 r$`. (Any two rotations commute, since they all just add up turns.) Also `$e$` commutes with everything. "Non-commutative" means there *exists* at least one pair that disagrees — not that all pairs do. One pair, `$r$` and `$s$`, is enough to disqualify the group from being abelian; it says nothing about the rest.

</details>

**5.** Find the inverse of each reflection and of each non-identity rotation in `$D_3$`.

<details><summary>Show solution</summary>

The inverse of `$a$` is the element `$a^{-1}$` with `$a \cdot a^{-1} = e$` (module 04). Each reflection is its own inverse: `$s^2 = (rs)^2 = (r^2s)^2 = e$`, because flipping the same way twice undoes itself. For the rotations, `$r$` and `$r^2$` undo each other: `$r \cdot r^2 = r^3 = e$`, so `$r^{-1} = r^2$` and `$(r^2)^{-1} = r$`. Read off the Cayley table, this is just where each row meets `$e$`.

</details>

**6.** (Stretch.) The square has eight symmetries — four rotations (by `$0^\circ, 90^\circ, 180^\circ, 270^\circ$`) and four reflections. Without building the full table, argue that this group is also non-commutative. (Hint: pick a rotation and a reflection and track one corner.)

<details><summary>Show solution</summary>

Label the square's corners `$1,2,3,4$`. Let `$\rho$` be the `$90^\circ$` turn and `$\sigma$` a flip across a diagonal. Track where corner `$1$` lands. Doing `$\sigma$` then `$\rho$` sends `$1$` to one corner; doing `$\rho$` then `$\sigma$` sends it to a different corner — the same flip-then-turn versus turn-then-flip split that broke `$D_3$`. So the square's symmetry group is non-commutative too. Mixing a rotation with a reflection is what creates the disagreement; this is a general feature of symmetry groups of shapes, not a quirk of the triangle.

</details>

## Recap

The six symmetries of an equilateral triangle — three rotations and three reflections — form a group, `$D_3$`, under composition: do one move, then another. We named the moves, composed them by juxtaposition reading right to left, and built the full Cayley table. The headline is the relation `$sr = r^2s$`, which means `$rs \neq sr$`: order matters now, and it will not stop mattering. Every group from here on must answer the commutativity question fresh — the clock's easy symmetry was the exception, not the rule.
