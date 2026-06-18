---
title: Operations and Their Rules
course: abstract-algebra
order: 3
summary: Strip arithmetic down to its bones — a set, a rule for combining two elements, and four properties that turn out to matter more than the specific numbers involved.
estimatedMinutes: 20
objectives:
  - Define a binary operation on a set and write it in function notation
  - State the four properties closure, associativity, identity, and inverse, and explain each in plain words
  - Read an operation table and use it to check whether a given property holds
  - Give an example of an operation that fails one of the four properties and name which property fails
prerequisites:
  - clock-arithmetic
---

You have spent two modules watching arithmetic wrap around a clock face. In module 01, three rotations of a square turned out to be the same kind of thing as three clock steps — structure hiding behind different faces. In module 02, you built $\mathbb{Z}_n$ (the $n$-hour clock), added numbers mod $n$, and discovered that a do-nothing step and an undo step live in every such clock. Both modules were doing something specific: they were using a *particular* way of combining two elements — clock addition — to reveal patterns that ordinary addition shares.

This module strips that operation down to its skeleton. What is a "way of combining two elements," exactly? What rules can it follow or break? The answers are the raw material from which every group in this course is built.

---

## What an operation actually is

Pick any two integers and add them: $3 + 5 = 8$. You started with two numbers from the integers and got back one number, also an integer. The operation $+$ on the integers has a shape: **two inputs from a set, one output that lands back in the same set.**

That shape is the whole story. An operation is not tied to addition, or to numbers at all. It is just a rule that takes any two elements of a set and produces a third element of that same set.

Here is the same shape drawn differently. Call the set $S$ and the operation $*$ (a star — a placeholder symbol we use when we do not yet know which specific operation we are talking about). Then $*$ is a function: it takes an ordered pair $(a, b)$ with $a \in S$ and $b \in S$, and returns one element of $S$, written $a * b$.

**A note on the symbol $*$.** The star stands for *any* rule of combination — $+$ when we are on a clock, ordinary multiplication when we are working with nonzero rationals, composition of symmetries when we get to the triangle in module 06. We use $*$ here so the four properties we are about to state hold for any of those rules at once. When a specific operation is in play, that operation's own symbol replaces $*$.

## Definition (Binary Operation)

Let $S$ be a **set** — a collection of objects. (For now: the integers $\mathbb{Z}$, or a clock $\mathbb{Z}_n$, or any finite collection.) A **binary operation** on $S$ is a function

$$
* : S \times S \to S
$$

that assigns to each ordered pair $(a, b)$ with $a, b \in S$ exactly one element $a * b$ in $S$.

The notation decodes like this. "$S \times S$" means "pick one element of $S$, then another" — so the input is a pair $(a, b)$, with order mattering ($a$ first, $b$ second). The arrow "$\to S$" means the output lands back in $S$. Writing $* : S \times S \to S$ is the shorthand for: *two elements of $S$ go in, one element of $S$ comes out, every time.*

---

**Check yourself.** Is the rule "$a * b = a - b$" a binary operation on the integers $\mathbb{Z}$?

<details><summary>Show answer</summary>

Yes. For any two integers $a$ and $b$, their difference $a - b$ is also an integer. Two integers go in, one integer comes out. The shape $* : \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$ is satisfied.

</details>

---

## Reading an operation table

When the set $S$ is small, the entire operation can be displayed in a table. The row label is the first input $a$, the column label is the second input $b$, and the entry in that cell is $a * b$.

Here is a set $S = \{0, 1, 2, 3, 4\}$ — the 5-hour clock $\mathbb{Z}_5$ (from module 02, where you built clock arithmetic with $\mathbb{Z}_n$) — under addition mod 5:

$$
\begin{array}{c|ccccc}
+ & 0 & 1 & 2 & 3 & 4 \\
\hline
0 & 0 & 1 & 2 & 3 & 4 \\
1 & 1 & 2 & 3 & 4 & 0 \\
2 & 2 & 3 & 4 & 0 & 1 \\
3 & 3 & 4 & 0 & 1 & 2 \\
4 & 4 & 0 & 1 & 2 & 3
\end{array}
$$

*Read this as: row $a$, column $b$, entry $a + b$ (mod 5).* The entry in row 3, column 4 is $3 + 4 = 7 = 2 \pmod 5$, so the table shows $2$. Every entry is in $\{0,1,2,3,4\}$.

---

## The four rules an operation can have

An operation's shape tells us what kind of object it is. But not every operation behaves the same way, and four particular properties separate "well-behaved" operations from the rest. These are the four questions the rest of this course keeps asking.

### Closure

**Closure** is the basic demand built into the definition itself: when you apply $*$ to two elements of $S$, the result stays in $S$. You do not drift outside.

Clock addition on $\mathbb{Z}_5$ is closed: $3 + 4 = 2$, still in $\{0,1,2,3,4\}$. Look at the table above — every entry is in $\{0,1,2,3,4\}$. Closure holds when the table has no outsiders.

Compare: the operation $a * b = a / b$ on the integers is *not* closed, because $1 / 2 = \tfrac{1}{2}$ is not an integer. One pair breaks closure, and that is enough.

## Definition (Closure)

An operation $*$ on a set $S$ is **closed** (or has the **closure property**) if for every $a, b \in S$, the result $a * b$ is also in $S$.

### Associativity

Ordinary addition obeys $(1 + 2) + 3 = 1 + (2 + 3)$: the grouping of brackets does not matter. That is **associativity**.

## Definition (Associativity)

An operation $*$ on $S$ is **associative** if for every $a, b, c \in S$,
$$
(a * b) * c = a * (b * c).
$$

Associativity says: when combining three elements in a fixed left-to-right order, you can parenthesize however you like and get the same answer. It does *not* say $a * b = b * a$ (that is a different property, handled at the end of this module).

Subtraction is the standard non-example. Check: $(5 - 3) - 1 = 1$, but $5 - (3 - 1) = 3$. The brackets matter, so subtraction on $\mathbb{Z}$ is **not** associative. One triple is enough to disqualify it.

---

**Check yourself.** Is clock addition on $\mathbb{Z}_5$ associative?

<details><summary>Show answer</summary>

Yes. Addition on the integers is associative, and reducing mod 5 preserves that: $(a + b) + c$ and $a + (b + c)$ give the same integer sum before the reduction, so they give the same result after it. You could also check a triple directly: $(3 + 4) + 2 = 2 + 2 = 4$ and $3 + (4 + 2) = 3 + 1 = 4$ (both mod 5). ✓

</details>

---

### Identity

In ordinary addition, $0$ is special: adding $0$ to anything leaves it alone. $7 + 0 = 7$, $0 + 7 = 7$. The number 0 is the **identity element** for addition — the do-nothing element (module 01 coined that nickname; here we pin down exactly what "do-nothing" means).

## Definition (Identity Element)

An element $e \in S$ is an **identity element** for $*$ if for every $a \in S$,
$$
e * a = a \quad \text{and} \quad a * e = a.
$$

The identity must do nothing on *both* sides: $e * a = a$ (when $e$ goes first) and $a * e = a$ (when $e$ goes second).

In $\mathbb{Z}_5$ under clock addition, $0$ is the identity: every row labeled $0$ reads $0, 1, 2, 3, 4$ (so $0 + a = a$), and every column labeled $0$ reads the same (so $a + 0 = a$). Find the row and column for $0$ in the table above and check.

Not every operation has an identity. The operation $a * b = a + b + 1$ on $\mathbb{Z}$ has no identity: the equation $e + a + 1 = a$ would require $e = -1$, but also $a + e + 1 = a$ requires $e = -1$, so $e = -1$ *is* the identity — but only if we have checked both sides, which we just did. (In this case it works; the point is that you must check.)

### Inverse

Given an identity $e$, the question "can I undo $a$?" becomes precise: is there an element $a^{-1} \in S$ such that combining $a$ and $a^{-1}$ gives back $e$?

## Definition (Inverse Element)

Given an identity $e$ for $*$ on $S$, the **inverse** of an element $a \in S$ is an element $a^{-1} \in S$ such that
$$
a * a^{-1} = e \quad \text{and} \quad a^{-1} * a = e.
$$

We say $a$ is **invertible** if such an $a^{-1}$ exists.

On $\mathbb{Z}_5$ (the 5-hour clock) under addition, the inverse of $3$ is $2$, because $3 + 2 = 5 = 0$ (mod 5) $= e$. Generally, the inverse of $a$ in $\mathbb{Z}_5$ is $5 - a$ (this is the inverse rule from module 02, now named formally). In the table above, locate row 3 and find which column gives $0$: it is column 2. That is the inverse check.

---

## Worked example: checking all four properties on $\mathbb{Z}_5$

**Problem.** The set is $S = \{0,1,2,3,4\}$ with operation $+$ (addition mod 5). The table is above. Check each of the four properties.

**Solution.**

**Closure.** Every entry in the table is in $\{0,1,2,3,4\}$. ✓

**Associativity.** Addition on the integers is associative; adding and then reducing mod 5 preserves this. As a spot-check: $(2 + 4) + 3 = 1 + 3 = 4$ and $2 + (4 + 3) = 2 + 2 = 4$. ✓

**Identity.** The element $0$ satisfies $0 + a = a$ and $a + 0 = a$ for every $a$. (The row and column labeled $0$ both read $0,1,2,3,4$ in order.) ✓

**Inverses.** Check each element:
- $0 + 0 = 0 = e$, so $0^{-1} = 0$.
- $1 + 4 = 5 = 0 = e$, so $1^{-1} = 4$ (and $4^{-1} = 1$).
- $2 + 3 = 5 = 0 = e$, so $2^{-1} = 3$ (and $3^{-1} = 2$).

Every element has an inverse in $\{0,1,2,3,4\}$. ✓

All four properties hold for $(\mathbb{Z}_5, +)$. This set with this operation will matter a great deal in module 04.

---

**Check yourself.** The set is $S = \{1, 2, 3, 4\}$ with operation $\times$ (multiplication mod 5). Does every element of $S$ have an inverse?

<details><summary>Show answer</summary>

Yes. Under multiplication mod 5:
- $1 \times 1 = 1$, so $1^{-1} = 1$.
- $2 \times 3 = 6 = 1 \pmod 5$, so $2^{-1} = 3$ and $3^{-1} = 2$.
- $4 \times 4 = 16 = 1 \pmod 5$, so $4^{-1} = 4$.

Every element has an inverse. (This works because $5$ is prime — a fact module 11 will revisit when it discusses fields.)

</details>

---

## A non-example: subtraction breaks associativity

Let $S = \mathbb{Z}$ (the integers) with operation $a * b = a - b$.

**Closure.** For any integers $a, b$, the difference $a - b$ is an integer. ✓

**Associativity.** Check the triple $a = 5, b = 3, c = 1$:
$$
(5 - 3) - 1 = 2 - 1 = 1
$$
$$
5 - (3 - 1) = 5 - 2 = 3
$$

$1 \neq 3$, so $(a * b) * c \neq a * (b * c)$. Subtraction is **not** associative. One counterexample is enough to sink the property.

**Identity.** If an identity $e$ exists, then $e - a = a$ for every $a$, giving $e = 2a$ — different for different $a$, so no single $e$ works. There is no identity element.

Because subtraction already fails associativity and has no identity, it cannot have inverses in the relevant sense either. This operation fails three of the four properties.

---

## Commutativity — a fifth question

There is one more property worth naming here, though it is not one of the four required for a group (module 04 will assemble the four).

## Definition (Commutativity)

An operation $*$ on $S$ is **commutative** if for every $a, b \in S$,
$$
a * b = b * a.
$$

Clock addition is commutative: $3 + 4 = 4 + 3$ in $\mathbb{Z}_5$. Subtraction is not: $5 - 3 \neq 3 - 5$. In the table, commutativity shows up as symmetry across the main diagonal: the entry in row $a$, column $b$ equals the entry in row $b$, column $a$.

Commutativity is a *bonus* property, not a guarantee. One of the most important operations in this course — combining symmetries of a triangle (module 06) — will not be commutative. That is exactly what makes it interesting.

---

## Exercises

**1.** The set is $S = \{0, 1, 2\}$ with operation $+$ (addition mod 3). Write the $3 \times 3$ operation table and verify closure, identity, and the inverse of each element.

<details><summary>Show solution</summary>

The table:

$$
\begin{array}{c|ccc}
+ & 0 & 1 & 2 \\
\hline
0 & 0 & 1 & 2 \\
1 & 1 & 2 & 0 \\
2 & 2 & 0 & 1
\end{array}
$$

**Closure:** every entry is in $\{0,1,2\}$. ✓

**Identity:** $0 + a = a + 0 = a$ for every $a$ — the row and column for $0$ read $0, 1, 2$. ✓

**Inverses:**
- $0 + 0 = 0$, so $0^{-1} = 0$.
- $1 + 2 = 3 = 0 \pmod 3$, so $1^{-1} = 2$.
- $2 + 1 = 0 \pmod 3$, so $2^{-1} = 1$.

Every element has an inverse. ✓

</details>

---

**2.** Is the operation $a * b = a \cdot b$ (ordinary multiplication) on the set $\mathbb{Z}$ (all integers) closed? Is it associative? Does it have an identity? Does every element have an inverse? Identify which properties hold and which fail.

<details><summary>Show solution</summary>

**Closure:** the product of two integers is an integer. ✓

**Associativity:** $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ for all integers — this is a standard fact. ✓

**Identity:** the integer $1$ satisfies $1 \cdot a = a \cdot 1 = a$ for every integer $a$. ✓

**Inverses:** the inverse of $a$ would need to be an integer $a^{-1}$ with $a \cdot a^{-1} = 1$. For $a = 2$, that requires $a^{-1} = \tfrac{1}{2}$, which is not an integer. So $2$ has no inverse in $\mathbb{Z}$ under multiplication. ✗

Multiplication on $\mathbb{Z}$ has closure, associativity, and an identity — but **inverses fail**. This is why $(\mathbb{Z}, \times)$ is not a group (module 04 will make that precise).

</details>

---

**3.** The set is $S = \{1, -1\}$ with operation $\times$ (ordinary multiplication). Write the operation table and check all four properties.

<details><summary>Show solution</summary>

The table:

$$
\begin{array}{c|cc}
\times & 1 & -1 \\
\hline
1 & 1 & -1 \\
-1 & -1 & 1
\end{array}
$$

**Closure:** $1 \times 1 = 1$, $1 \times (-1) = -1$, $(-1) \times (-1) = 1$. All results are in $\{1,-1\}$. ✓

**Associativity:** multiplication of real numbers is associative; restricting to $\{1,-1\}$ does not break that. ✓

**Identity:** $1 \times a = a \times 1 = a$ for both $a = 1$ and $a = -1$. So $e = 1$. ✓

**Inverses:**
- $1 \times 1 = 1 = e$, so $1^{-1} = 1$.
- $(-1) \times (-1) = 1 = e$, so $(-1)^{-1} = -1$.

Every element has an inverse. ✓

All four properties hold. $(\{1,-1\}, \times)$ is small — only two elements — but it is a genuine group. Module 04 will say so explicitly.

</details>

---

**4.** (Non-example.) The set is $S = \{1, 2, 3, 4, 5\}$ with operation $a * b = \max(a, b)$ (the larger of the two). Is this operation associative? Does it have an identity? Does every element have an inverse?

<details><summary>Show solution</summary>

**Associativity:** $\max(\max(a,b), c) = \max(a,b,c) = \max(a, \max(b,c))$. Yes, associative. ✓

**Identity:** an identity $e$ would need $\max(e, a) = a$ for every $a \in S$. That means $e \leq a$ for all $a$, so $e = 1$. Check the other direction: $\max(a, 1) = a$ as long as $a \geq 1$, which is true for every element of $S$. So $e = 1$ is an identity. ✓

**Inverses:** the inverse of $a$ would need $\max(a, a^{-1}) = 1$. But $\max(a, a^{-1}) \geq a$, which equals $1$ only if $a = 1$. For $a = 3$, no element of $S$ satisfies $\max(3, a^{-1}) = 1$. So $3$ has no inverse. ✗

The operation $\max$ on $\{1,2,3,4,5\}$ has closure, associativity, and an identity, but **inverses fail** for every element except $1$. A single missing inverse is enough to say the inverse property fails.

</details>

---

**5.** (Stretch.) Let $S = \{a, b\}$ be a two-element set. There are exactly four possible binary operations on $S$ (the table has four entries, each of which can be $a$ or $b$). How many of those four operations have an identity element? List them.

<details><summary>Show solution</summary>

Label the elements $0$ and $1$ (to keep the notation clean — these are just names). A binary operation on $\{0,1\}$ is determined by four values: $0*0$, $0*1$, $1*0$, $1*1$.

For an identity $e$: we need $e * x = x * e = x$ for both $x = 0$ and $x = 1$.

**Case $e = 0$:** need $0*0=0$, $0*1=1$, $1*0=1$. The value of $1*1$ is free ($0$ or $1$). This gives two operations with identity $0$.

**Case $e = 1$:** need $1*0=0$, $1*1=1$, $0*1=0$. The value of $0*0$ is free. This gives two operations with identity $1$.

In all four cases an identity exists. Every binary operation on a two-element set has an identity. (Whether it also has inverses and associativity depends on the specific table — that narrows the four down to fewer as you add requirements.)

</details>

---

## Recap

A **binary operation** $* : S \times S \to S$ is a rule that takes any two elements of a set and returns a third element of that same set. Four properties — **closure** (the output stays in $S$), **associativity** (brackets can be regrouped freely), **identity** (a do-nothing element $e$ exists), and **inverse** (every element can be undone) — determine how well-behaved an operation is. A fifth property, **commutativity**, says order does not matter; it is a bonus, not a requirement.

Module 04 takes these four properties and asks: what happens when an operation has *all four at once*? The answer is a group — the central object of this entire course.
