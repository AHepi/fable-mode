---
title: "Beyond Groups: Rings and Fields"
course: abstract-algebra
order: 11
summary: Add a second operation and the landscape opens up — the integers, the rationals, and the structures that organize all of algebra.
estimatedMinutes: 18
objectives:
  - Describe what a ring and a field add to the idea of a group
  - Classify the integers as a ring and the rationals as a field
  - Explain what being able to divide buys you
prerequisites: [04-what-is-a-group, 05-a-zoo-of-groups]
---

For ten modules we have lived under a strict rule: one set, one operation, and not a
single move more. It bought us an astonishing amount. A clock, a triangle, the integers, a
fistful of complex numbers — all the same machinery, *combine, do-nothing, undo*, wearing
different clothes.

But you have known all along that the integers can do something a bare group cannot. You
can add them, yes. You can also *multiply* them. Two operations, living in the same set,
braided together by a rule you learned so young you have probably never questioned it.

That rule is the door to the rest of algebra. Walk through it and the integers, the
rationals, the reals — the whole familiar number line you grew up on — line up as members
of two new families. This module hands you the names for those families and, with them, a
new pair of eyes.

A group is a set with one way to combine its elements. Strip arithmetic down and that is
what addition gives you on the integers: closure, a zero that changes nothing, an opposite
for every number that cancels it. We proved as much back when we first defined a group.

Now bolt a second operation on. Keep addition exactly as it was, and bring multiplication
to the same set. Two operations have to learn to live together, and the law that makes
them get along is the one you already know in your hands:

$$
a(b+c) = ab + ac.
$$

Multiplication *distributes* over addition. This single rule is the hinge. It is what
stops the two operations from being strangers who happen to share a room — it ties them
together so that knowing how something adds tells you something about how it multiplies.

A set carrying two operations that cooperate this way is a **ring**. The integers are the
first and friendliest example. You can add, subtract (that is just adding the opposite),
and multiply, all day, and never leave the integers.

But notice what you *cannot* freely do with integers: **divide**. Three divided by two is
not an integer. The integers multiply, but they do not let you undo multiplication and
stay inside. A ring where you *can* always undo multiplication — where every nonzero
element has something to cancel it back to $1$, the way every element of a group has an
inverse — is the more powerful structure. We call it a **field**.

So the ladder has three rungs, and you have already climbed two:

- A **group**: one operation, fully reversible.
- A **ring**: two operations, addition fully reversible, multiplication along for the ride.
- A **field**: a ring where multiplication is *also* reversible (for everything but zero).

The rationals $\mathbb{Q}$ and the reals $\mathbb{R}$ are fields. The integers $\mathbb{Z}$
are a ring but not a field. Hold those two facts; the rest of the module unpacks them.

## Definition (Ring)

A **ring** is a set $R$ together with two operations, written $+$ and $\times$, such that:

1. Under $+$, the set $R$ is an **abelian group** — addition is closed, associative,
   commutative, has an identity $0$, and every element has an additive inverse (its
   opposite).
2. Multiplication is **associative**: $a(bc) = (ab)c$ for all $a, b, c \in R$.
3. Multiplication **distributes** over addition: $a(b+c) = ab + ac$ and
   $(a+b)c = ac + bc$ for all $a, b, c \in R$.

The element $0$ is the **additive identity**. (Many rings also have a multiplicative
identity $1$; every ring in this module does.)

In one line: a ring is an abelian group under $+$, with an associative $\times$ that
distributes over $+$.

## Check yourself

Before reading on, answer from memory: in the definition of a ring, which of the two
operations is required to be *fully reversible* — that is, which one must give every
element an inverse?

<details><summary>Show answer</summary>

**Addition.** A ring must be an *abelian group under $+$*, and being a group means every
element has an inverse — so every element has an *additive* opposite, and you can always
subtract. Multiplication carries no such demand: a ring asks only that $\times$ be
associative and distribute over $+$. It says nothing about multiplicative inverses. That
missing demand is exactly the gap a *field* fills.

</details>

## Definition (Field)

A **field** is a ring $F$ in which $1 \neq 0$ and **every nonzero element has a
multiplicative inverse**: for each $a \in F$ with $a \neq 0$, there is an element
$a^{-1} \in F$ with $a \cdot a^{-1} = 1$.

Equivalently: in a field, the nonzero elements form an abelian group under multiplication.
You can add, subtract, multiply, and — for anything but zero — **divide**.

## Worked example

Let us hold three familiar sets up to the definition and sort them.

**$\mathbb{Z}$, the integers — a ring, not a field.** Addition makes $\mathbb{Z}$ an
abelian group: closed, associative, commutative, with identity $0$ and the opposite $-n$
for each $n$. Multiplication is associative and distributes over addition. So $\mathbb{Z}$
is a ring. Is it a field? Take $a = 2$. We need an integer $a^{-1}$ with $2 \cdot a^{-1} =
1$. That integer would be $\tfrac{1}{2}$ — which is not an integer. The inverse does not
live in the set, so $\mathbb{Z}$ is **not** a field.

**$\mathbb{Q}$, the rationals — a field.** Everything that made $\mathbb{Z}$ a ring still
holds. Now take any nonzero rational $\tfrac{p}{q}$. Its inverse is $\tfrac{q}{p}$, which
is again a rational, and $\tfrac{p}{q} \cdot \tfrac{q}{p} = 1$. Every nonzero element has
its inverse inside the set, so $\mathbb{Q}$ is a **field**. The reals $\mathbb{R}$ pass the
same test for the same reason.

**$\mathbb{Z}_p$ for prime $p$ — a finite field.** Recall clock arithmetic. On
$\mathbb{Z}_n$ we add by wrapping around, and that already made it an abelian group under
$+$. It also carries a multiplication: multiply, then take the remainder mod $n$. That
makes every $\mathbb{Z}_n$ a ring. The surprise is about inverses. When $n = p$ is
**prime**, every nonzero element of $\mathbb{Z}_p$ has a multiplicative inverse — so
$\mathbb{Z}_p$ is a *field with only finitely many elements*. Take $\mathbb{Z}_5$, with
elements $\{0,1,2,3,4\}$ and multiplication mod $5$. Then $2 \cdot 3 = 6 = 1$, so $3$ is
the inverse of $2$. Check the rest and every nonzero element pairs off. A finite field —
the kind of object that has no analogue among the numbers you grew up with, and one that
quietly runs modern cryptography.

## Check yourself

Here is the question this module has been circling. Is $\mathbb{Z}_6$ a field?

<details><summary>Show answer</summary>

**No.** $\mathbb{Z}_6 = \{0,1,2,3,4,5\}$ with arithmetic mod $6$ is a perfectly good ring,
but $6$ is not prime — it factors as $2 \times 3$. Look for the inverse of $2$: we need
some $x$ with $2x \equiv 1 \pmod 6$. Run through them: $2\cdot 1 = 2$, $2\cdot 2 = 4$,
$2\cdot 3 = 6 = 0$, $2\cdot 4 = 8 = 2$, $2\cdot 5 = 10 = 4$. The value $1$ never appears, so
$2$ has **no** inverse in $\mathbb{Z}_6$. One nonzero element without an inverse is enough
to disqualify it. Worse, $2 \cdot 3 = 0$ — two nonzero things multiplying to zero, which a
field can never allow. That is the contrast with $\mathbb{Z}_5$ in one line: **$\mathbb{Z}_p$
is a field exactly when $p$ is prime.**

</details>

## What being able to divide buys you

Why fuss over multiplicative inverses at all? Because they are what let you **solve
equations** — the oldest reason anyone does algebra.

Take the equation $ax = b$, with $a \neq 0$. In a field you solve it the way you have since
school: multiply both sides by $a^{-1}$ and read off

$$
x = a^{-1} b.
$$

There is always exactly one answer, and it lives in the field. This is what "being able to
divide" means in structural terms: $ax = b$ is always solvable.

In a mere ring, that guarantee evaporates. In $\mathbb{Z}$, the equation $2x = 3$ has *no*
integer solution — there is no $2^{-1}$ to multiply by. In $\mathbb{Z}_6$, the equation
$2x = 1$ has no solution either, for exactly the reason you found above: $2$ carries no
inverse there. The whole comfort of "just divide both sides" is a privilege fields grant
and rings withhold. Naming the structure tells you, in advance, which equations you are
allowed to solve.

## Exercises

**1.** *(Mechanical.)* In $\mathbb{Z}_7$, find the multiplicative inverse of $3$ — that is,
the element $x$ with $3x \equiv 1 \pmod 7$.

<details><summary>Show solution</summary>

Run through the nonzero elements: $3\cdot 1 = 3$, $3\cdot 2 = 6$, $3\cdot 3 = 9 = 2$,
$3\cdot 4 = 12 = 5$, $3\cdot 5 = 15 = 1$. So $x = 5$: the inverse of $3$ in $\mathbb{Z}_7$
is $\mathbf{5}$. (This works at all because $7$ is prime, so *every* nonzero element of
$\mathbb{Z}_7$ has an inverse — $\mathbb{Z}_7$ is a field.)

</details>

**2.** *(Mechanical.)* Use an inverse to solve $4x = 3$ in $\mathbb{Z}_5$.

<details><summary>Show solution</summary>

First invert $4$. In $\mathbb{Z}_5$, $4 \cdot 4 = 16 = 1$, so $4^{-1} = 4$. Multiply both
sides of $4x = 3$ by $4$: $x = 4 \cdot 3 = 12 = 2$. So $x = \mathbf{2}$. Check:
$4 \cdot 2 = 8 = 3$ in $\mathbb{Z}_5$. The method is exactly $x = a^{-1}b$ — the same move
you use over the rationals, now inside a finite field.

</details>

**3.** *(Conceptual.)* Is $\mathbb{Q}$ a ring? Is $\mathbb{R}$ a field? Answer both and say
why each answer follows from the definitions.

<details><summary>Show solution</summary>

**Yes** and **yes**. Every field *is* a ring — a field is defined as a ring with the extra
property that nonzero elements have multiplicative inverses, so passing the harder test
means it already passed the easier one. Since $\mathbb{Q}$ is a field, it is automatically a
ring. And $\mathbb{R}$ is a field: it is a ring (addition and multiplication behave), and
every nonzero real $a$ has the real inverse $\tfrac{1}{a}$ inside $\mathbb{R}$. The tempting
slip is to think "ring" and "field" name *separate* boxes; really fields are the *special*
rings, sitting inside the rings the way subgroups sit inside groups.

</details>

**4.** *(Conceptual.)* Explain why the equation $3x = 2$ has a solution in $\mathbb{Q}$ but
no solution in $\mathbb{Z}$. Tie your answer to the ring/field distinction.

<details><summary>Show solution</summary>

In $\mathbb{Q}$ the number $3$ has an inverse, $\tfrac{1}{3}$, so $x = 3^{-1}\cdot 2 = \tfrac{2}{3}$ — a perfectly good rational. In $\mathbb{Z}$ there is no integer $3^{-1}$:
nothing times $3$ gives $1$ inside the integers, because $\mathbb{Z}$ is only a *ring*, not
a field. Without that inverse you cannot divide both sides by $3$, and indeed no integer $x$
satisfies $3x = 2$. The lesson: solvability of $ax = b$ is precisely the thing fields give
you and rings do not.

</details>

**5.** *(Conceptual.)* $\mathbb{Z}_6$ is a ring but not a field. Give the cleanest single
reason, and contrast it with $\mathbb{Z}_5$.

<details><summary>Show solution</summary>

The cleanest reason is the one you found in the worked answer above: in $\mathbb{Z}_6$ the
element $2$ has no multiplicative inverse, and the sharpest symptom is $2 \cdot 3 = 0$ — two
nonzero elements whose product is zero, which a field forbids outright. It happens because
$6 = 2 \times 3$ is *composite*. By contrast $5$ is prime, so $\mathbb{Z}_5$ has no such
factor pairs, every nonzero element is invertible, and $\mathbb{Z}_5$ is a field. The rule
to carry away: **$\mathbb{Z}_n$ is a field exactly when $n$ is prime.**

</details>

**6.** *(Stretch.)* Back in module 01 we said the same machinery shows up "in places that
look nothing alike." A field contains *two* groups built from its own elements. Name them.

<details><summary>Show solution</summary>

Every field $F$ hands you two groups for free. **First**, all of $F$ under addition is an
abelian group — that is built into the ring axioms (the additive part of a ring is *always*
a group). **Second**, the *nonzero* elements of $F$ under multiplication form an abelian
group — that is exactly the extra condition that makes a ring a field. So a field is
literally two groups, sharing one set of elements, glued together by distributivity. The
group idea you have carried since module 04 has not been left behind — rings and fields are
*built out of it*.

</details>

## Recap

We opened this course with a square that kept a secret — a small fixed set of moves, the
pattern *combine, do-nothing, undo*. We promised that the same pattern would surface in
places that look nothing alike, and that we would close by stepping one rung up the ladder,
where a second operation opens the whole landscape of algebra. Here we are.

Look at what you can now see. The integers were never "just numbers" — they are a **ring**,
an abelian group under addition with a multiplication bolted carefully on top. The rationals
and reals you have used since childhood are **fields**, rings rich enough that you can
divide, which is the same as saying $ax = b$ always has an answer. And lurking among the
finite worlds of clock arithmetic are *finite fields*, the $\mathbb{Z}_p$ for prime $p$ —
objects with no counterpart on the number line, and the proof that the structures matter
more than the stuff they are made of. You came in able to compute with these sets. You leave
able to *classify* them, and to know in advance which equations each one will let you solve.

Where does the ladder go from here? You now know that $\mathbb{Q}$ and $\mathbb{R}$ are
fields — but so is the set of solutions you get by throwing $\sqrt{2}$ or $i$ into the
rationals, and the way one field sits inside another turns out to have its own hidden
symmetry group. Studying *those* symmetries is **Galois theory**, and it answers a question
that stood open for three hundred years: there is a formula for the roots of any quadratic,
cubic, and quartic — but there is *no such formula* for the general fifth-degree equation,
the quintic, and the reason is a group. The moves that left a square unchanged, all the way
back in module 01, return one last time to explain why some equations can never be solved by
a formula. That is the next course. You are ready for it.
</content>
</invoke>
