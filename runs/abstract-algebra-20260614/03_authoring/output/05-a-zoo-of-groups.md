---
title: A Zoo of Groups
course: abstract-algebra
order: 5
summary: Groups are everywhere once you know the shape — numbers, fractions, roots of unity, and more.
estimatedMinutes: 16
objectives:
  - Identify groups among varied examples
  - Distinguish finite from infinite groups
  - Recognize when an operation is commutative (abelian)
prerequisites: [04-what-is-a-group]
---

## The hook

Once you learn the shape of a key, you start seeing locks everywhere. That is what just happened to you. You spent the last module bolting four rules together — closure, associativity, identity, inverses — into a single object called a group. Now turn around and look at the math you already knew. The integers were a group the whole time. So were the hours on a clock. So, it turns out, are four little numbers spinning around the unit circle. This module is a walk through the menagerie: same skeleton, wildly different animals.

## Intuition

Here is the trick to spotting a group in the wild. Don't ask "is this made of numbers?" — that question leads you astray, because plenty of groups aren't, and plenty of number systems aren't groups. Ask instead: **what is the set, and what is the operation?** Then check the four rules.

Two of those animals will feel different from the rest, and the difference is worth a name. When you add $3 + 5$ you get the same answer as $5 + 3$. When you multiply $2 \times 7$ you get the same answer as $7 \times 2$. The order of the two inputs doesn't matter. That property — *swapping the two inputs never changes the result* — is so common in the arithmetic you grew up with that it feels like a law of nature. It isn't. Some groups have it, some don't, and the ones that do get a special label. We'll meet the well-behaved, order-doesn't-matter groups here; the rebels wait for the next module.

The other split worth watching is plain *size*. Some of these groups have infinitely many elements — you could never write the whole addition table. Others have just a handful, small enough to draw the entire operation as a grid. Both kinds are groups. Counting the elements is the first thing a mathematician does on meeting a new one.

## Definition (Abelian group)

A group $(G, *)$ is **abelian** if its operation is **commutative**: for all elements $a, b \in G$,

$$
a * b = b * a.
$$

A group that fails this — where some pair satisfies $a * b \neq b * a$ — is called **non-abelian**.

(The name honors Niels Henrik Abel; it is conventionally written lowercase, *abelian*.)

## Definition (Order of a group)

The **order** of a group $G$, written $|G|$, is the number of elements in $G$. If that number is finite, $G$ is a **finite group**; otherwise $G$ is an **infinite group**.

## Worked example

Let's run the menagerie one cage at a time. For each, name the set, name the operation, and read off the two features we now care about: is it abelian, and is it finite?

**The integers under addition, $(\mathbb{Z}, +)$.** The set is $\dots, -2, -1, 0, 1, 2, \dots$ and the operation is ordinary addition. You verified in the last module that this is a group: the identity is $0$, and the inverse of $n$ is $-n$. Is it abelian? Yes — $a + b = b + a$ for any integers. Is it finite? No: the integers run on forever, so $\mathbb{Z}$ is an **infinite abelian group**.

**The nonzero rationals under multiplication, $(\mathbb{Q}^{\times}, \times)$.** Here $\mathbb{Q}^{\times}$ means every fraction $\tfrac{p}{q}$ *except* zero, and the operation is multiplication. Why throw zero out? Because zero has no multiplicative inverse — there is no rational you can multiply by $0$ to get $1$ — so keeping it would break the inverse axiom. With zero gone, every element $\tfrac{p}{q}$ has the inverse $\tfrac{q}{p}$, the identity is $1$, and multiplication is associative and commutative. So $\mathbb{Q}^{\times}$ is another **infinite abelian group**.

**The fourth roots of unity, $(\{1, i, -1, -i\}, \times)$.** Here $i$ is the imaginary unit, the number with $i^2 = -1$. The set has exactly four elements and the operation is multiplication. Watch what happens as you multiply by $i$ again and again:

$$
i^1 = i, \quad i^2 = -1, \quad i^3 = -i, \quad i^4 = 1.
$$

It cycles. The whole operation fits in a small grid — a **Cayley table**, where the entry in row $a$, column $b$ is the product $a \times b$:

| $\times$ | $1$  | $i$  | $-1$ | $-i$ |
|----------|------|------|------|------|
| $1$      | $1$  | $i$  | $-1$ | $-i$ |
| $i$      | $i$  | $-1$ | $-i$ | $1$  |
| $-1$     | $-1$ | $-i$ | $1$  | $i$  |
| $-i$     | $-i$ | $1$  | $i$  | $-1$ |

Read it like a multiplication chart. Every entry is back inside the set (closure), the row and column for $1$ just copy the headers (so $1$ is the identity), and each row contains a $1$ somewhere (so every element has an inverse — for instance $i \times -i = 1$). It is a group of order $4$, a **finite abelian group**. The giveaway for "abelian" in a Cayley table: it's symmetric across the main diagonal, top-left to bottom-right.

**The clock groups $(\mathbb{Z}_n, +)$.** These are the wrap-around worlds from Module 02: the set $\{0, 1, 2, \dots, n-1\}$ with addition that loops back to $0$ after $n-1$. Each is a finite abelian group of order $n$. Here is $\mathbb{Z}_4$:

| $+$ | $0$ | $1$ | $2$ | $3$ |
|-----|-----|-----|-----|-----|
| $0$ | $0$ | $1$ | $2$ | $3$ |
| $1$ | $1$ | $2$ | $3$ | $0$ |
| $2$ | $2$ | $3$ | $0$ | $1$ |
| $3$ | $3$ | $0$ | $1$ | $2$ |

Symmetric across the diagonal again — abelian — and notice it has the same *shape* as the roots-of-unity table above. That is not an accident, and it is a hint of something we'll chase down much later in the course.

## Check yourself

You're told a group's Cayley table is **not** symmetric across its main diagonal. What can you conclude about the group, and which axiom is *not* in question?

<details><summary>Show answer</summary>

The group is **non-abelian**: an unsymmetric table means there is some pair with $a * b \neq b * a$, which is exactly the failure of commutativity. The axiom *not* in question is commutativity's status as an axiom — because it isn't one. Closure, associativity, identity, and inverses are the four group axioms; being abelian is an *extra* property a group may or may not have. A non-abelian table is still a perfectly good group.

</details>

## Check yourself

Is $(\mathbb{Z}_5, +)$ finite or infinite, and what is its order? Then: is it abelian?

<details><summary>Show answer</summary>

It is **finite** with order $|\mathbb{Z}_5| = 5$ — its elements are exactly $\{0, 1, 2, 3, 4\}$. And it is **abelian**, because addition mod $n$ inherits commutativity from ordinary addition: $a + b$ and $b + a$ leave the same remainder when you divide by $5$. Every $\mathbb{Z}_n$ is a finite abelian group.

</details>

## Check yourself

Why did we have to delete $0$ to make the rationals into a group under multiplication, when we did *not* have to delete anything to make the rationals a group under addition?

<details><summary>Show answer</summary>

Under multiplication the identity is $1$, and the inverse of $x$ must satisfy $x \times (\text{inverse}) = 1$. There is no number you can multiply by $0$ to get $1$ — every product with $0$ is $0$ — so $0$ has no multiplicative inverse and must be thrown out. Under addition the identity is $0$ itself, and *every* rational (including $0$) has an additive inverse, namely its negative. Different operation, different identity, different troublemaker.

</details>

## Exercises

**1 (mechanical).** Build the Cayley table for $(\mathbb{Z}_3, +)$, the integers mod $3$ under addition. Then state its order and say whether it is abelian.

<details><summary>Show solution</summary>

The elements are $\{0, 1, 2\}$ and addition wraps at $3$ (so $2 + 2 = 4 = 1$):

| $+$ | $0$ | $1$ | $2$ |
|-----|-----|-----|-----|
| $0$ | $0$ | $1$ | $2$ |
| $1$ | $1$ | $2$ | $0$ |
| $2$ | $2$ | $0$ | $1$ |

The order is $|\mathbb{Z}_3| = 3$. The table is symmetric across the main diagonal, so the group is **abelian**.

</details>

**2 (mechanical).** In the group $(\{1, i, -1, -i\}, \times)$, find the inverse of each element — that is, for each $x$ find the $y$ with $x \times y = 1$.

<details><summary>Show solution</summary>

Read off the row containing $1$ from the Cayley table in the worked example:

- $1 \times 1 = 1$, so $1$ is its own inverse.
- $i \times (-i) = 1$, so the inverse of $i$ is $-i$.
- $(-1) \times (-1) = 1$, so $-1$ is its own inverse.
- $(-i) \times i = 1$, so the inverse of $-i$ is $i$.

Every element has exactly one inverse — as the inverse axiom guarantees — and each row of the table contains exactly one $1$.

</details>

**3 (conceptual).** The set of *positive* integers $\{1, 2, 3, \dots\}$ under ordinary addition is **not** a group. Which axiom fails, and why? (Be specific.)

<details><summary>Show solution</summary>

The **identity** axiom fails first: addition's identity is $0$, and $0$ is not a positive integer, so the set has no identity element inside it. The **inverse** axiom fails too — even if we let $0$ in, the inverse of $3$ under addition is $-3$, which is not positive. Closure and associativity *do* hold (a positive plus a positive is positive, and addition is associative), which is the trap: passing two axioms is not enough. A group must pass all four.

A tempting wrong answer is "closure fails." It doesn't — you never leave the positive integers by adding two of them. The break is the missing identity and missing inverses.

</details>

**4 (conceptual).** Two students disagree. Ana says, "$\mathbb{Z}$ under addition and $\mathbb{Q}^{\times}$ under multiplication are both infinite abelian groups, so they're basically the same group." Ben says, "No they aren't." Without any new machinery, point to one concrete difference between the two groups.

<details><summary>Show solution</summary>

Ben is right that they differ; "same shape" is a strong claim we haven't earned yet. One clean concrete difference: in $(\mathbb{Z}, +)$ the only element that is its own inverse is the identity $0$ (since $n + n = 0$ forces $n = 0$). In $(\mathbb{Q}^{\times}, \times)$ there are **two** elements that are their own inverse: $1$ (the identity) and also $-1$, because $(-1) \times (-1) = 1$. A property that one group has and the other lacks shows they cannot be relabelings of each other.

(Sharing two features — infinite and abelian — does not make two groups "the same." Pinning down exactly when two groups *are* the same is a later module; for now, finding one honest difference is enough to refute the claim.)

</details>

**5 (conceptual).** Is the table below the Cayley table of an abelian group? You do not need to check every axiom — find the fastest tell.

| $*$ | $e$ | $a$ | $b$ |
|-----|-----|-----|-----|
| $e$ | $e$ | $a$ | $b$ |
| $a$ | $a$ | $b$ | $e$ |
| $b$ | $b$ | $a$ | $e$ |

<details><summary>Show solution</summary>

The fastest tell for *abelian* is diagonal symmetry — but here something is wrong before we even get there. Look at the column under $a$: the entries are $a, b, a$. The element $a$ appears **twice** and $e$ never appears in that column. In a real group's Cayley table, every element must appear exactly once in each row and once in each column (this is how the table guarantees inverses and cancellation). So this table is **not a group at all** — the question of "abelian" doesn't even arise. Compare with the valid $\mathbb{Z}_3$ table in Exercise 1, where each symbol appears exactly once per row and column.

</details>

## Recap

The shape you learned last module turned out to be a master key: the integers, the nonzero rationals, the four roots of unity, and every clock world $\mathbb{Z}_n$ all turn the same lock. Along the way we picked up two ways to sort the zoo — by *size* (finite versus infinite) and by *behavior* (abelian, where order never matters, versus the non-abelian groups we've yet to meet). Every example so far has been abelian, which might tempt you to think commutativity comes free with the axioms. It doesn't. Next module we hand you a paper triangle, and the order of your moves will start to matter.
