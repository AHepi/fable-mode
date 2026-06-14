---
title: Operations and Their Rules
course: abstract-algebra
order: 3
summary: "Strip arithmetic down to its bones: a set, a way to combine two things, and four rules worth caring about."
estimatedMinutes: 20
objectives:
  - Define a binary operation
  - State closure, associativity, identity, and inverse
  - Test whether a given operation has each property
prerequisites: [01-the-secret-life-of-symmetry, 02-clock-arithmetic]
---

## The hook

You have spent your whole life adding. Two numbers go in, one comes out, and you never once asked the machine how it works. On the clock, you watched the same trick again, only now the numbers wrapped: $9 + 5$ landed on $2$, and the world kept turning.

Both of those are the same kind of gadget. Feed it two things, get one thing back. That gadget has a name, and four habits worth naming. Pin them down here and the group axioms in the next module are just these four habits, stacked.

## Intuition

Forget numbers for a second and picture a machine with two slots. You drop something into the left slot, something into the right, turn the crank, and out the bottom drops a single result. Ordinary addition is one such machine: drop in $3$ and $4$, out comes $7$. Clock addition is another: drop in $9$ and $5$ on a $12$-hour face, out comes $2$.

The machine is the star of this module, not the numbers it happens to eat. Mathematicians call it an **operation**, and they care about four questions you can ask of any such machine:

- **Does the output stay home?** If you only ever feed it clock numbers, does the result always come back out *as* a clock number — or could it spit out something foreign?
- **Does grouping matter?** If you combine three things, does it matter which two you crank first?
- **Is there a do-nothing element?** Some special thing that, combined with anything, leaves it untouched.
- **Can every move be undone?** For each thing, is there a partner that cancels it back to the do-nothing element?

Those four questions are closure, associativity, identity, and inverse. We'll make each one precise, and check it against the two machines you already trust: $+$ on ordinary numbers, and $+$ on the clock.

## Definition (Binary operation)

Let $S$ be a set. A **binary operation** on $S$ is a function

$$
* : S \times S \to S
$$

that assigns to every ordered pair $(a, b)$ of elements of $S$ a single element of $S$, written $a * b$.

Two things are doing quiet but heavy lifting here. First, the domain is $S \times S$ — *every* pair must get an answer; the machine never jams. Second, the codomain is $S$ itself — the answer is always back inside $S$. Ordinary addition is the binary operation $+ : \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$. Clock addition is a binary operation on $\mathbb{Z}_{12} = \{0, 1, 2, \dots, 11\}$, the set of hours on the face.

## Check yourself

Is subtraction, $- : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$, a binary operation on the natural numbers $\mathbb{N} = \{0, 1, 2, \dots\}$? Decide before you reveal.

<details><summary>Show answer</summary>

No. A binary operation must return an element of the same set for *every* pair. But $3 - 5 = -2$, and $-2$ is not a natural number, so the machine jams on the pair $(3, 5)$. Subtraction *is* a binary operation on the integers $\mathbb{Z}$, where negatives are allowed — the set you choose is part of the question.

</details>

## Definition (Closure)

Let $*$ be defined on a set $S$. We say $S$ is **closed** under $*$ if for all $a, b \in S$,

$$
a * b \in S.
$$

A subtle point: the definition of a binary operation *already* bakes closure in — its codomain is $S$. So why name closure separately? Because in practice you often have a single operation, like $+$, and you point it at a *subset* and ask whether that subset is closed on its own. The even integers are closed under $+$ (even plus even is even); the odd integers are not (odd plus odd is even, which has left the set). Closure is the question you ask when you carve out a piece of a larger world.

## Definition (Associativity)

An operation $*$ on $S$ is **associative** if for all $a, b, c \in S$,

$$
(a * b) * c = a * (b * c).
$$

Associativity says the *grouping* of three elements does not change the result, so $a * b * c$ can be written without parentheses and no one is confused. Ordinary addition is associative: $(2 + 3) + 4 = 9 = 2 + (3 + 4)$. Clock addition inherits this from ordinary addition. Notice what associativity does *not* say — it says nothing about *order*. Swapping $a$ and $b$ is a different property (commutativity), and it can fail even when associativity holds.

## Worked example

**Problem.** Decide whether subtraction on $\mathbb{Z}$ is associative.

**Solution.** Test the definition against the elements $a = 1$, $b = 2$, $c = 3$. Compute each grouping:

$$
\begin{aligned}
(a - b) - c &= (1 - 2) - 3 = -1 - 3 = -4, \\
a - (b - c) &= 1 - (2 - 3) = 1 - (-1) = 2.
\end{aligned}
$$

Since $-4 \neq 2$, the two groupings disagree, so subtraction is **not** associative. One counterexample is enough to sink a "for all" claim — we did not need to check every triple, only to exhibit one that breaks.

## Check yourself

On the $12$-hour clock, what is the identity element for clock addition — the hour that, added to any hour, changes nothing? Try it before revealing.

<details><summary>Show answer</summary>

It is $0$ (which on a real clock face you might read as $12$). Adding $0$ hours to any hour $a$ leaves you at $a$: $a + 0 = a$ and $0 + a = a$. That do-nothing element is exactly what the next definition calls an identity.

</details>

## Definition (Identity)

Let $*$ be an operation on $S$. An element $e \in S$ is an **identity** for $*$ if for all $a \in S$,

$$
a * e = a \quad \text{and} \quad e * a = a.
$$

The identity is the do-nothing element. For ordinary addition the identity is $0$, since $a + 0 = a$. For clock addition the identity is also $0$. Both equations are required because an operation need not be commutative: in general you must check that $e$ does nothing whether it sits on the left or the right.

## Definition (Inverse)

Let $*$ be an operation on $S$ with identity $e$. An element $b \in S$ is an **inverse** of $a \in S$ if

$$
a * b = e \quad \text{and} \quad b * a = e.
$$

An inverse is the *undo* element: combine $a$ with its inverse and you land back on the do-nothing element. Under ordinary addition the inverse of $a$ is $-a$, since $a + (-a) = 0$. On the $12$-hour clock the inverse of $5$ is $7$, because $5 + 7 = 12 = 0$ — winding forward $5$ hours and then $7$ more brings you all the way around to where you started. Identity and inverse are easy to confuse, so keep them straight: the identity does *nothing*; an inverse *cancels a specific element* back to that nothing.

## Check yourself

On the $12$-hour clock, what is the inverse of $3$ under clock addition? And does $0$ have an inverse?

<details><summary>Show answer</summary>

The inverse of $3$ is $9$, since $3 + 9 = 12 = 0$. And yes, $0$ has an inverse — itself: $0 + 0 = 0$. The identity is always its own inverse, because combining it with itself does nothing, which is exactly landing on the identity.

</details>

## Exercises

**1 (mechanical).** Let $*$ be multiplication on the set $\{1, -1\}$. Verify that this set is closed under $*$ by computing all four products.

<details><summary>Show solution</summary>

Compute every pair:

$$
1 \cdot 1 = 1, \quad 1 \cdot (-1) = -1, \quad (-1) \cdot 1 = -1, \quad (-1) \cdot (-1) = 1.
$$

Each product is again $1$ or $-1$, so the result never escapes the set $\{1, -1\}$. The set is closed under multiplication. (Closure means checking that *no* pair leaks out — for a two-element set that is exactly these four products.)

</details>

**2 (mechanical).** On the $12$-hour clock, find the inverse of $8$ under clock addition.

<details><summary>Show solution</summary>

We want the hour $b$ with $8 + b = 0$ on the clock. Since $8 + 4 = 12 = 0$, the inverse is $4$. A tempting wrong answer is $-8$: that is the inverse under *ordinary* addition, but $-8$ is not an hour on the face. On the clock you must wrap around, and $-8$ wraps to $4$ (because $-8 + 12 = 4$). The two agree once you bring the answer home to the set $\{0, 1, \dots, 11\}$.

</details>

**3 (conceptual).** Is division a binary operation on the nonzero rational numbers $\mathbb{Q} \setminus \{0\}$? Explain.

<details><summary>Show solution</summary>

Yes. For any two nonzero rationals $a$ and $b$, the quotient $a / b$ is again a nonzero rational, so the result stays inside the set and the machine never jams. (Contrast this with division on *all* of $\mathbb{Q}$, which is not a binary operation: $a / 0$ has no answer, so the function is undefined on pairs with a zero divisor. Removing $0$ is exactly what rescues it.)

</details>

**4 (conceptual).** Subtraction on $\mathbb{Z}$ has $0$ as a candidate identity, since $a - 0 = a$. Show that $0$ nonetheless *fails* to be an identity for subtraction.

<details><summary>Show solution</summary>

An identity must satisfy *both* $a * e = a$ and $e * a = a$. Here $a - 0 = a$ holds, but the other side fails: $0 - a = -a$, which equals $a$ only when $a = 0$. For example $0 - 3 = -3 \neq 3$. So $0$ works on the right but not on the left, and the definition demands both. This is precisely why the identity definition lists two equations rather than one — an element that does nothing on only one side is not an identity.

</details>

**5 (conceptual).** Give an operation, on a set of your choice, that is *closed* and has an *identity* but in which at least one element has *no inverse*. (Hint: think about ordinary multiplication on the whole numbers.)

<details><summary>Show solution</summary>

Take multiplication on $\mathbb{N} = \{0, 1, 2, \dots\}$. It is closed (a whole number times a whole number is a whole number) and has identity $1$ (since $a \cdot 1 = a$). But $2$ has no inverse: we would need a whole number $b$ with $2 \cdot b = 1$, and no whole number does that — the only candidate, $\tfrac{1}{2}$, is not in $\mathbb{N}$. So three of the four properties can hold while inverses fail. This is the gap the group axioms will insist on closing.

</details>

**6 (stretch).** On the set $S = \{a, b\}$, define an operation $*$ by the table below (read row $*$ column). Is $*$ associative? Does it have an identity? Does every element have an inverse?

$$
\begin{array}{c|cc}
* & a & b \\
\hline
a & a & b \\
b & b & a
\end{array}
$$

<details><summary>Show solution</summary>

Read the table: $a * a = a$, $a * b = b$, $b * a = b$, $b * b = a$.

**Identity:** $a$ is the identity. The row and column for $a$ reproduce the inputs unchanged — $a * a = a$, $a * b = b$, $b * a = b$ — so $a$ does nothing.

**Inverses:** $a$ is its own inverse ($a * a = a$, the identity). And $b$ is its own inverse, since $b * b = a$, the identity. So every element has an inverse.

**Associativity:** with the identity $a$, the only triple that could misbehave is $b * b * b$. Group it both ways: $(b * b) * b = a * b = b$ and $b * (b * b) = b * a = b$. They agree, and every other triple involves the identity $a$ and so is automatic. The operation is associative.

This little machine has all four properties at once — which is exactly the checklist the next module turns into the definition of a group.

</details>

## Recap

An operation is just a two-slot machine: a function $* : S \times S \to S$. We named four properties such a machine may or may not have — closure (the output stays in $S$), associativity (grouping doesn't matter), identity (a do-nothing element $e$), and inverse (every element has an undo). Ordinary addition and clock addition quietly have all four; subtraction and whole-number multiplication each fail one, and the failures are instructive. Stack these four rules on a single set and operation and you get the most important object in this course. That stack is a group, and it is waiting in the next module.
