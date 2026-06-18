---
title: A Zoo of Groups
course: abstract-algebra
order: 5
summary: Groups are everywhere once you know the shape — numbers, fractions, roots of unity, and more.
estimatedMinutes: 16
objectives:
  - List at least four distinct examples of groups and identify the set and operation for each
  - Verify that a given example meets all four group axioms (closure, associativity, identity, inverses)
  - Distinguish finite groups from infinite groups by counting elements
  - Recognize when a group is abelian (commutative) and when it is not
  - Read and build a small Cayley table for a finite group
prerequisites:
  - 04-what-is-a-group
---

Once you have a key, you start seeing locks everywhere. The definition of a group — a set equipped with an operation that satisfies four rules — looked abstract in module 04, a list of conditions without a face. But definitions are lenses: the moment one clicks into focus, the world fills up with examples you had walked past without recognizing.

This module is the gallery. We will visit six specimens: some made of ordinary numbers, one made of the square root of $-1$, and a few familiar objects that fail the test. For each we ask the same four questions from module 04, and the answers come back differently every time — same skeleton, different flesh.

Recall the four axioms from module 04. A **group** is a set $G$ together with an operation $*$ (a rule that combines any two elements of $G$ to get another element of $G$) satisfying:

1. **Closure:** $a * b$ is always in $G$.
2. **Associativity:** $(a * b) * c = a * (b * c)$ for all $a, b, c$ in $G$.
3. **Identity:** there is a special element $e$ in $G$ — the *identity* (the do-nothing element, from module 01) — with $a * e = e * a = a$ for every $a$.
4. **Inverses:** every element $a$ in $G$ has an inverse $a^{-1}$ in $G$ with $a * a^{-1} = a^{-1} * a = e$.

A group where $a * b = b * a$ for *every* pair is called **abelian** (after Niels Henrik Abel, the Norwegian mathematician who used this symmetry to prove that the quintic equation has no formula). We say the operation is *commutative*.

---

## The integer line: $(\mathbb{Z}, +)$

The integers — $\ldots, -2, -1, 0, 1, 2, \ldots$ — under ordinary addition.

- **Closure:** add two integers and you get an integer. $\checkmark$
- **Associativity:** $(1 + 2) + 3 = 1 + (2 + 3)$. Integer addition has been associative since you learned it. $\checkmark$
- **Identity:** $0$. Adding zero to anything leaves it unchanged: $a + 0 = a$. $\checkmark$
- **Inverses:** the inverse of $a$ is $-a$. Indeed $a + (-a) = 0$. $\checkmark$

So $(\mathbb{Z}, +)$ is a group. It is abelian ($a + b = b + a$ always) and infinite — it has no last element in either direction.

**Note on notation.** Because the operation here is honest addition, we write $+$, not the generic $*$. Each group in this module keeps its own natural operation — $+$ for integers, $\times$ for products — rather than replacing every symbol with the abstract placeholder.

---

## The clock group: $(\mathbb{Z}_n, +)$

From module 02 we know **$\mathbb{Z}_n$ (the $n$-hour clock)**: the set $\{0, 1, 2, \ldots, n-1\}$ where addition wraps around at $n$. For instance, on the 5-hour clock ($\mathbb{Z}_5$), we have $3 + 4 = 2$ (not $7$, since $7 - 5 = 2$).

- **Closure:** adding two numbers from $\{0, 1, \ldots, n-1\}$ and wrapping at $n$ always lands back in $\{0, 1, \ldots, n-1\}$. $\checkmark$
- **Associativity:** inherited from ordinary integer addition. $\checkmark$
- **Identity:** $0$. Zero added to anything on the clock leaves it where it is. $\checkmark$
- **Inverses:** the inverse of $a$ is $n - a$ (from module 04: $a + (n - a) = n \equiv 0$). In $\mathbb{Z}_5$, the inverse of $3$ is $2$, since $3 + 2 = 5 \equiv 0$. $\checkmark$

So $(\mathbb{Z}_n, +)$ is a group for every $n \geq 1$. It is abelian and **finite** — it has exactly $n$ elements. We write the size of a group as $|G|$, so $|\mathbb{Z}_n| = n$.

<details><summary>Check yourself — inverse in $\mathbb{Z}_7$</summary>

What is the inverse of $5$ in $\mathbb{Z}_7$ (the 7-hour clock)?

**Answer.** The inverse of $5$ is $7 - 5 = 2$, because $5 + 2 = 7 \equiv 0$ in $\mathbb{Z}_7$.

</details>

---

## Two signs: $(\{1, -1\}, \times)$

The set with just two elements, $\{1, -1\}$, under ordinary multiplication.

- **Closure:** $1 \times 1 = 1$, $1 \times (-1) = -1$, $(-1) \times 1 = -1$, $(-1) \times (-1) = 1$. Every product stays in $\{1, -1\}$. $\checkmark$
- **Associativity:** multiplication of real numbers is associative. $\checkmark$
- **Identity:** $1$. Multiplying anything by $1$ leaves it unchanged. $\checkmark$
- **Inverses:** $1^{-1} = 1$ (since $1 \times 1 = 1$); $(-1)^{-1} = -1$ (since $(-1) \times (-1) = 1$). Both elements are their own inverse. $\checkmark$

This is a finite abelian group with $|\{1,-1\}| = 2$.

### Cayley table for $(\{1,-1\}, \times)$

A **Cayley table** (first named here, in module 05) is the multiplication table for a group: rows are the left element, columns are the right element, and the entry at row $a$, column $b$ is $a * b$.

$$
\begin{array}{c|cc}
\times & 1 & -1 \\
\hline
1 & 1 & -1 \\
-1 & -1 & 1
\end{array}
$$

Read it as: "row $-1$, column $1$: $(-1) \times 1 = -1$." Notice that every row and every column contains each element exactly once — a pattern that holds for every group's Cayley table (we will use this in exercise 5).

---

## The fourth roots of unity: $(\{1, i, -1, -i\}, \times)$

You may know that $i$ is defined by $i^2 = -1$. The four numbers $1, i, -1, -i$ are called the **fourth roots of unity** because each satisfies $z^4 = 1$:

$$
i^4 = (i^2)^2 = (-1)^2 = 1, \quad (-1)^4 = 1, \quad (-i)^4 = 1.
$$

Under ordinary multiplication of complex numbers:

- **Closure:** the powers of $i$ cycle: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, then back to $i$. Any product of two elements is again one of the four. $\checkmark$
- **Associativity:** multiplication of complex numbers is associative. $\checkmark$
- **Identity:** $1$. $\checkmark$
- **Inverses:** $1^{-1} = 1$; $(-1)^{-1} = -1$; $i^{-1} = -i$ (since $i \times (-i) = -i^2 = 1$); $(-i)^{-1} = i$. $\checkmark$

This is a finite abelian group with order $4$.

### Cayley table for $(\{1, i, -1, -i\}, \times)$

$$
\begin{array}{c|cccc}
\times & 1 & i & -1 & -i \\
\hline
1 & 1 & i & -1 & -i \\
i & i & -1 & -i & 1 \\
-1 & -1 & -i & 1 & i \\
-i & -i & 1 & i & -1
\end{array}
$$

Look at the row for $i$: starting from $1$, multiplying by $i$ rotates the cycle one step. That rotating pattern is the whole structure.

There is something to notice about these two Cayley tables — $(\{1,-1\},\times)$ and $(\{1,i,-1,-i\},\times)$ — and how their shapes compare to the clock-arithmetic tables for $\mathbb{Z}_2$ and $\mathbb{Z}_4$. That is not an accident, and it is a hint of something we will chase down in module 10.

<details><summary>Check yourself — reading the Cayley table</summary>

Using the table above, what is $(-i) \times i$?

**Answer.** Find row $-i$, column $i$: the entry is $1$. You can verify directly: $(-i) \times i = -i^2 = -(-1) = 1$.

</details>

---

## The nonzero rationals: $(\mathbb{Q}^\times, \times)$

Let $\mathbb{Q}^\times$ denote the set of all nonzero rational numbers (fractions $\frac{p}{q}$ with $p, q$ integers and $q \neq 0$, and the fraction itself nonzero).

- **Closure:** the product of two nonzero fractions is a nonzero fraction. $\checkmark$
- **Associativity:** multiplication of numbers is associative. $\checkmark$
- **Identity:** $1$. $\checkmark$
- **Inverses:** the inverse of $\frac{p}{q}$ is $\frac{q}{p}$, which is a nonzero rational so long as $p \neq 0$. $\checkmark$

This is an infinite abelian group.

**Why exclude zero?** If $0$ were in the set, it would have no inverse: there is no rational $x$ with $0 \times x = 1$. One missing inverse is enough to disqualify the whole set. So we throw out $0$ to make the axioms work.

---

## Two things that are NOT groups

Not every set with an operation earns the title.

**The integers under multiplication, $(\mathbb{Z}, \times)$.** Multiplication on $\mathbb{Z}$ has closure, associativity, and identity ($1$). But inverses fail: the inverse of $2$ under multiplication would need to be $\frac{1}{2}$, which is not an integer. A single missing inverse sinks the whole structure.

**The natural numbers under addition, $(\mathbb{N}, +)$, where $\mathbb{N} = \{0, 1, 2, 3, \ldots\}$.** Here identity exists ($0$) and closure holds. But there is no inverse for $1$: the inverse would need to be $-1$, which is not a natural number. The natural numbers do not reach back far enough.

These non-examples sharpen what the axioms protect. The group axioms are a checklist for a reason: each one excludes something that would otherwise cause the structure to misbehave.

---

## Comparison table

| Group | Set | Operation | Identity | Inverse of $a$ | Order $\|G\|$ | Abelian? |
|---|---|---|---|---|---|---|
| $(\mathbb{Z}, +)$ | all integers | $+$ | $0$ | $-a$ | $\infty$ | Yes |
| $(\mathbb{Z}_n, +)$ | $\{0,1,\ldots,n-1\}$ | $+$ mod $n$ | $0$ | $n-a$ | $n$ | Yes |
| $(\{1,-1\}, \times)$ | $\{1,-1\}$ | $\times$ | $1$ | itself | $2$ | Yes |
| $(\{1,i,-1,-i\}, \times)$ | $\{1,i,-1,-i\}$ | $\times$ | $1$ | $i \leftrightarrow -i$; $\pm1 \leftrightarrow$ itself | $4$ | Yes |
| $(\mathbb{Q}^\times, \times)$ | nonzero rationals | $\times$ | $1$ | $1/a$ | $\infty$ | Yes |

All five examples here happen to be abelian. That will not last — module 06 introduces the symmetries of a triangle, where the order of two moves changes the outcome, and the abelian property breaks for the first time.

<details><summary>Check yourself — applying the axioms</summary>

Is $(\{0, 1, 2, 3, 4\}, \times)$ — the set $\mathbb{Z}_5$ under multiplication mod $5$ — a group?

**Answer.** No. The element $0$ has no multiplicative inverse: there is no $x$ in the set with $0 \times x \equiv 1 \pmod{5}$. So the inverse axiom fails for $0$. (If you remove $0$ and look at $\{1, 2, 3, 4\}$ under multiplication mod $5$, that *is* a group — but that belongs to a later exploration.)

</details>

---

## Exercises

**1.** List the elements of $\mathbb{Z}_6$ (the 6-hour clock), state its identity, and find the inverse of each element.

<details><summary>Show solution</summary>

$\mathbb{Z}_6 = \{0, 1, 2, 3, 4, 5\}$. The identity is $0$.

Inverses (using the rule $a^{-1} = 6 - a$ from module 04, with $0^{-1} = 0$):

| $a$ | $a^{-1}$ | Check |
|---|---|---|
| $0$ | $0$ | $0 + 0 = 0$ |
| $1$ | $5$ | $1 + 5 = 6 \equiv 0$ |
| $2$ | $4$ | $2 + 4 = 6 \equiv 0$ |
| $3$ | $3$ | $3 + 3 = 6 \equiv 0$ |
| $4$ | $2$ | $4 + 2 = 6 \equiv 0$ |
| $5$ | $1$ | $5 + 1 = 6 \equiv 0$ |

Note that $3$ is its own inverse.

</details>

---

**2.** Build the Cayley table for $\mathbb{Z}_3 = \{0, 1, 2\}$ under addition mod $3$.

<details><summary>Show solution</summary>

$$
\begin{array}{c|ccc}
+ & 0 & 1 & 2 \\
\hline
0 & 0 & 1 & 2 \\
1 & 1 & 2 & 0 \\
2 & 2 & 0 & 1
\end{array}
$$

Row $1$, column $2$: $1 + 2 = 3 \equiv 0 \pmod{3}$. Check that every row and every column contains $0$, $1$, and $2$ exactly once.

</details>

---

**3.** Is $(\mathbb{Z}, -)$ — the integers under subtraction — a group? If not, name the axiom that fails.

<details><summary>Show solution</summary>

No. Subtraction on $\mathbb{Z}$ fails **associativity**. A counterexample:

$$
(5 - 3) - 2 = 2 - 2 = 0, \quad \text{but} \quad 5 - (3 - 2) = 5 - 1 = 4.
$$

$0 \neq 4$, so the grouping matters. A single failure is enough to disqualify it.

A tempting wrong answer: "subtraction has no identity." Actually $0$ works from the right: $a - 0 = a$. But $0 - a = -a \neq a$ in general, so $0$ is only a right-identity, not a two-sided identity. The associativity failure is the cleaner disqualifier.

</details>

---

**4.** In $(\{1, i, -1, -i\}, \times)$, compute $i \times (-i)$ and $(-i) \times i$. Are they equal? What does this tell you about whether this group is abelian?

<details><summary>Show solution</summary>

$i \times (-i) = -i^2 = -(-1) = 1$.

$(-i) \times i = -i^2 = 1$.

They are equal. In fact, every pair of elements commutes in this group (check the Cayley table: it is symmetric about its diagonal), so $(\{1,i,-1,-i\}, \times)$ is abelian.

</details>

---

**5.** In any Cayley table of a group, every element appears exactly once in each row and exactly once in each column. Explain, in words, why a row cannot have a repeated element.

<details><summary>Show solution</summary>

Suppose row $a$ has a repeated entry: that means $a * b = a * c$ for two different elements $b \neq c$. But every element has an inverse $a^{-1}$ in the group. Apply it on the left of both sides:

$$
a^{-1} * (a * b) = a^{-1} * (a * c).
$$

By associativity, $(a^{-1} * a) * b = (a^{-1} * a) * c$, which gives $e * b = e * c$, so $b = c$. That contradicts $b \neq c$. So no row can have a repeated entry. The same argument (using right-inverses) handles columns.

This is why Cayley tables look like Latin squares — the "every element once" pattern is forced by the group axioms, not chosen by hand.

</details>

---

**6.** *(Stretch.)* Is $(\mathbb{Q}, +)$ — all rational numbers under addition — a group? Compare it with $(\mathbb{Z}, +)$ and say precisely what changes.

<details><summary>Show solution</summary>

Yes, $(\mathbb{Q}, +)$ is a group.

- **Closure:** the sum of two rationals is rational. $\checkmark$
- **Associativity:** inherited from real-number addition. $\checkmark$
- **Identity:** $0$. $\checkmark$
- **Inverses:** the inverse of $\frac{p}{q}$ is $-\frac{p}{q}$, which is rational. $\checkmark$

Comparing with $(\mathbb{Z}, +)$: both are infinite abelian groups under addition. The only structural difference is the *size* of the set — $\mathbb{Z}$ sits inside $\mathbb{Q}$ as a subset. Whether these two groups are "really the same" in a structural sense is precisely the question module 10 (homomorphisms and isomorphisms) is built to answer.

</details>

---

## Recap

The abstract definition of a group from module 04 is not a single idea — it is a template that many different objects fit. Integers under addition, clocks, two signs under multiplication, the fourth roots of unity, nonzero fractions: all of them satisfy the same four axioms (closure, associativity, identity, inverses), and the Cayley table captures the whole structure of a finite group in a single grid.

Every group we have seen so far is abelian: $a * b = b * a$. That is not a theorem — it is a coincidence of the examples we have visited. A paper triangle, a triangular hole, and six ways to put one inside the other are enough to end it.
