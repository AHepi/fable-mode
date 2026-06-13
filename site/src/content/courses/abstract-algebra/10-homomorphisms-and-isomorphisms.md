---
title: When Two Groups Are Secretly the Same
course: abstract-algebra
order: 10
summary: Maps that respect the operation reveal when two different-looking groups are really the same group in disguise.
estimatedMinutes: 20
objectives:
  - Define a homomorphism and an isomorphism
  - Check whether a map preserves the operation
  - Recognize two small groups as isomorphic or not
prerequisites: []
---

## The hook

Back in the very first module, this course made a promise that probably sounded like a stretch: that a square coaster and a clock could be running *identical machinery* underneath, and that spotting such hidden sameness was the whole point. You have built groups, found them in the wild, and watched the same patterns surface in places that look nothing alike. Now we make good on the promise. We give "secretly the same" a precise meaning — sharp enough to prove, and sharp enough to disprove.

Here is the puzzle in miniature. Take the four numbers $1, i, -1, -i$ and multiply them together however you like. Now take the four hours $0, 1, 2, 3$ on a tiny clock and add them, wrapping around. Two different worlds: one made of multiplying complex numbers, one of adding on a clock face. Stare at how they behave and you will start to suspect they are the same group wearing two different costumes. By the end of this module you will be able to *prove* that suspicion — and to catch the cases where the costume is hiding nothing at all.

## Intuition

A group is a set of things plus an operation for combining them. So far we have studied groups one at a time. The new move is to study a *bridge between two groups* — a function that turns the members of one group into members of another.

But not just any function will do. We want a bridge that carries the structure across, not just the names. Picture two clocks side by side, each with its own gears. A good translation between them is one where the gears stay meshed: if you turn the first clock and then read off the second, you land in the same place as if you had read off both clocks and turned the second. The combining survives the trip.

That is the entire idea, and it has a name. A function $f$ from a group $G$ to a group $H$ **respects the operation** if combining two things and then translating gives the same answer as translating each thing and then combining. In symbols, $f(a * b) = f(a) * f(b)$. The left side combines first, in $G$, then crosses the bridge. The right side crosses first, then combines, in $H$. When those two always agree, the bridge is honest about structure.

A function like that is called a **homomorphism** — from Greek roots meaning "same shape." It is a one-way report: it tells you that $H$ contains a faithful echo of how $G$ combines, but it might lose detail along the way, the way a shadow keeps a shape but flattens it.

When the bridge loses *nothing* — when it pairs up the two groups perfectly, one member for one member, with none left over and none doubled up — we have found something stronger. The two groups are then the same group, full stop, differing only in what we painted on the pieces. That perfect bridge is called an **isomorphism**, and the two groups are called **isomorphic**.

Two words you will need, both from earlier:

- A function is **one-to-one** (injective) if different inputs always give different outputs — nothing gets squashed together.
- A function is **onto** (surjective) if every member of the target gets hit by something — nothing in $H$ is left unused.

A function that is both at once is a **one-to-one correspondence**, or a **bijection**: a flawless pairing between the two sets. That is exactly the extra ingredient that turns a homomorphism into an isomorphism.

## Definitions

We now state the two ideas precisely. Throughout, $G$ and $H$ are groups, and we write the operation in each as $*$ (the symbol means "the operation of whichever group we are in").

## Definition (Homomorphism)

A function $f: G \to H$ is a **homomorphism** if for all elements $a$ and $b$ of $G$,
$$
f(a * b) = f(a) * f(b).
$$

On the left, $a * b$ is combined using the operation of $G$, then sent across by $f$. On the right, $f(a)$ and $f(b)$ are combined using the operation of $H$. The condition says these two results are always equal.

## Definition (Isomorphism)

A homomorphism $f: G \to H$ is an **isomorphism** if it is also a bijection — that is, $f$ is both one-to-one and onto. When such an $f$ exists, $G$ and $H$ are **isomorphic**, written
$$
G \cong H.
$$

The symbol $\cong$ is read "is isomorphic to." It is the precise, provable form of the phrase "secretly the same group."

## Worked examples

### Example (The fourth roots of unity are a clock in disguise)

**Problem.** Let $G = \{1, i, -1, -i\}$ under multiplication of complex numbers, where $i$ is the number with $i^2 = -1$. Let $H = \mathbb{Z}_4 = \{0, 1, 2, 3\}$ under addition wrapped around mod $4$. Show that $G \cong H$.

**Solution.** First, a feel for $G$. Multiplying by $i$ each time cycles through the whole set: $i^1 = i$, then $i^2 = -1$, then $i^3 = -i$, then $i^4 = 1$, and we are home. So every element of $G$ is a power of $i$, and $i$ has order $4$. That is exactly how $1$ behaves in $\mathbb{Z}_4$: add $1$ repeatedly and you tour $1, 2, 3, 0$.

That parallel suggests the pairing. Match each power of $i$ to the matching count of steps:
$$
1 \leftrightarrow 0, \qquad i \leftrightarrow 1, \qquad -1 \leftrightarrow 2, \qquad -i \leftrightarrow 3.
$$
Define $f: G \to H$ by this table. It is a bijection by inspection: four inputs, four outputs, each used exactly once, none doubled, none skipped.

Now the real test — does $f$ respect the operation? Multiplying in $G$ should match adding mod $4$ in $H$. Check a sample. In $G$, $i \cdot (-1) = -i$. Crossing the bridge, $f(-i) = 3$. The other route: $f(i) + f(-1) = 1 + 2 = 3$. They agree. Try one that wraps: in $G$, $(-1) \cdot (-i) = i$, so $f(i) = 1$; the other route gives $f(-1) + f(-i) = 2 + 3 = 5$, which is $1$ mod $4$. They agree again. The deep reason both checks pass is that multiplying $i^m \cdot i^n = i^{m+n}$ adds the exponents, and the exponents live mod $4$ because $i^4 = 1$ — which is precisely addition in $\mathbb{Z}_4$.

So $f$ is a homomorphism and a bijection. Therefore $f$ is an isomorphism, and $G \cong H$. The two worlds were the same group all along.

### Example (A homomorphism that loses information)

**Problem.** Let $f: \mathbb{Z} \to \mathbb{Z}_2$ send each integer to its parity: even numbers go to $0$, odd numbers go to $1$. Here $\mathbb{Z}$ is the integers under addition and $\mathbb{Z}_2 = \{0, 1\}$ under addition mod $2$. Is $f$ a homomorphism? Is it an isomorphism?

**Solution.** Check the operation. Adding two integers and then taking parity must match taking parities and then adding mod $2$. Run the cases: even $+$ even is even ($0 + 0 = 0$), even $+$ odd is odd ($0 + 1 = 1$), odd $+$ odd is even ($1 + 1 = 0$ mod $2$). Every case lands correctly, so $f(a + b) = f(a) + f(b)$ for all integers $a$ and $b$. It is a homomorphism.

Is it an isomorphism? No. It is onto — both $0$ and $1$ get hit — but it is nowhere near one-to-one: infinitely many integers ($2, 4, 6, \dots$) all collapse onto $0$. The bridge crushes the entire infinite group $\mathbb{Z}$ down to two elements, keeping only the even-or-odd flavor and throwing the rest away. That is the honest job of a homomorphism that is not an isomorphism: it preserves *some* structure while flattening the rest, like a shadow keeping the outline but losing the depth.

### Example (Same size, still not the same group)

**Problem.** Both $\mathbb{Z}_6$ (the integers mod $6$ under addition) and $D_3$ (the symmetries of an equilateral triangle — three rotations and three flips) have exactly six elements. Are they isomorphic?

**Solution.** Equal size is necessary for an isomorphism but nowhere near sufficient — a perfect pairing has to respect the operation too, and that is a much heavier demand. Here it fails, and one property settles it.

$\mathbb{Z}_6$ is **abelian**: $a + b = b + a$ always, since ordinary addition does not care about order. $D_3$ is **not** abelian: rotating then flipping a triangle generally lands you somewhere different from flipping then rotating. (You met this back when we first turned a triangle over in your hands — order mattered.)

Now suppose, for contradiction, that some isomorphism $f: D_3 \to \mathbb{Z}_6$ existed. Take any two elements $a, b$ of $D_3$. Because $f$ respects the operation, $f(a * b) = f(a) + f(b)$ and $f(b * a) = f(b) + f(a)$. But $\mathbb{Z}_6$ is abelian, so the right-hand sides are equal: $f(a) + f(b) = f(b) + f(a)$. Hence $f(a * b) = f(b * a)$. And because $f$ is one-to-one, equal outputs force equal inputs: $a * b = b * a$. That would make $D_3$ abelian — which it is not. The contradiction means no such $f$ can exist.

So $\mathbb{Z}_6 \not\cong D_3$. Same size, genuinely different machinery.

**Why isomorphic groups must share these properties.** This example reveals the deep payoff. An isomorphism is a perfect, structure-preserving dictionary between two groups, so any feature defined purely through the operation must translate across unchanged. If $G \cong H$, then they must have the same number of elements; one is abelian exactly when the other is; and for each element of $G$ of a given order, its partner in $H$ has the very same order. This gives you a fast disqualifier: find one such property on which two groups differ — different order, abelian versus non-abelian, a mismatch in how many elements have order $4$ — and you have proved no isomorphism can exist, without ever hunting through every possible pairing.

## Exercises

1. **(Mechanical.)** Using the pairing $1 \leftrightarrow 0$, $i \leftrightarrow 1$, $-1 \leftrightarrow 2$, $-i \leftrightarrow 3$ from the first worked example, verify directly that $f((-i) \cdot (-i)) = f(-i) + f(-i)$ in $\mathbb{Z}_4$. *Hint: compute $(-i)\cdot(-i)$ in $G$ first, then translate; separately add $3 + 3$ mod $4$.*

2. **(Mechanical.)** Define $f: \mathbb{Z} \to \mathbb{Z}$ by $f(n) = 2n$, with both copies of $\mathbb{Z}$ under addition. Check whether $f$ respects the operation, then say whether it is one-to-one and whether it is onto. Is it an isomorphism? *Hint: test $f(a+b)$ against $f(a)+f(b)$; then ask whether anything maps to the number $3$.*

3. **(Conceptual.)** The two groups $\mathbb{Z}_4$ and the "Klein four-group" $\{e, a, b, c\}$ (where every non-identity element combined with itself gives $e$) both have four elements. Using an operation-based property, argue that they cannot be isomorphic. *Hint: in $\mathbb{Z}_4$ the element $1$ has order $4$; does the Klein group have any element of order $4$?*

4. **(Conceptual.)** Suppose $f: G \to H$ is a homomorphism and $e$ is the identity of $G$. Explain in words why $f(e)$ must be the identity of $H$. *Hint: apply the homomorphism rule to $e * e = e$, then use that $H$ is a group to cancel.*

5. **(Conceptual.)** Two groups have the same size and are both abelian. Does that guarantee they are isomorphic? Give a reasoned yes-or-no. *Hint: reconsider $\mathbb{Z}_4$ and the Klein four-group from Exercise 3 — both abelian, both size $4$.*

6. **(Stretch.)** Show that any two groups with exactly *three* elements are isomorphic to each other. *Hint: name the elements $\{e, x, y\}$ with $e$ the identity; figure out what $x * x$ is forced to be, given that the operation table can repeat no entry in any row or column.*

## Recap

A **homomorphism** is a function between groups that respects the operation: $f(a * b) = f(a) * f(b)$. It carries structure one way, but may flatten detail, as the parity map crushed all of $\mathbb{Z}$ down to two elements. An **isomorphism** is a homomorphism that is also a perfect pairing — a bijection — and when one exists we write $G \cong H$ and call the groups the same group in different costumes. Because an isomorphism preserves every operation-based feature, groups that differ in size, in being abelian or not, or in their orders of elements cannot possibly be isomorphic — which is exactly why $\mathbb{Z}_6$ and $D_3$ stay strangers despite sharing a size. This is the precise meaning of the course's opening promise: "secretly the same machinery" is the statement $G \cong H$. Next we turn from comparing whole groups to dividing one group into pieces.
