---
title: What Is a Group?
course: abstract-algebra
order: 4
summary: Bolt the four rules together and you get the single most-studied object in modern algebra — a group.
estimatedMinutes: 18
objectives:
  - State the four group axioms (closure, associativity, identity, inverse).
  - Verify that a given set with an operation is a group by checking all four axioms.
  - Give an example of a set with an operation that is not a group and name the axiom that fails.
prerequisites:
  - 03-operations-and-their-rules
---

For three modules you have been collecting parts. A set — a collection of things. An operation $*$ — a rule that takes two things from the set and hands back a third (module 03). And four rules worth caring about, which that operation may or may not obey: closure, associativity, an identity, and inverses. You have been told, more than once, that these four would matter. Here is where they cash in.

Put all four together on one set with one operation and you get a **group**. That word carries more weight than any other in this course. The integers under addition are a group. The hours on a clock are a group. The ways you can turn a triangle are a group, and so are the rotations of a Rubik's cube and the symmetries of a snowflake. They look nothing alike. The four rules are exactly what they have in common — and from those four rules alone, mathematicians prove things true of every group at once, the clock and the cube and the snowflake in a single stroke.

So the four rules are not a checklist for its own sake. Each one buys you something concrete. Closure says you never fall out of the set: combine two members, land on a member, always. Associativity says that when you chain three things, you can group the work however you like — $(a * b) * c$ and $a * (b * c)$ agree — so a long combination has one unambiguous answer and you need no parentheses. An identity gives you a fixed point, an element that leaves every partner unchanged when you combine with it. And an inverse gives every element an undo: a partner that combines with it to return you to the identity. Closure keeps you inside the world; associativity lets you compute without fuss; identity and inverses let you *solve* — they are what makes $a * x = b$ always have an answer. A set with an operation that has all four is a structure rich enough for real algebra.

Now state it exactly.

## Definition (Group)

A **group** is a set $G$ together with an operation $*$ that takes any two elements of $G$ and returns an element, written $a * b$, satisfying all four of the following.

1. **Closure.** For every $a$ and $b$ in $G$, the result $a * b$ is again in $G$.
2. **Associativity.** For every $a$, $b$, $c$ in $G$, $(a * b) * c = a * (b * c)$.
3. **Identity.** There is an element $e$ in $G$, the **identity**, such that $a * e = a$ and $e * a = a$ for every $a$ in $G$.
4. **Inverse.** For every $a$ in $G$ there is an element $a^{-1}$ in $G$, the **inverse** of $a$, such that $a * a^{-1} = e$ and $a^{-1} * a = e$.

We write the group as $(G, *)$ when we want to name its operation, or just $G$ when the operation is understood.

Read each line back into the picture from module 03. Closure (line 1) is the promise that $*$ never throws you outside $G$ — two inputs from $G$, one output in $G$. Associativity (line 2) is the promise that parentheses do not matter, so $a * b * c$ means one definite thing. The identity (line 3) is the element that changes nobody — $e$, the element that leaves every partner unchanged. The inverse (line 4) is each element's personal undo: $a^{-1}$ is whatever you combine with $a$ to get all the way back to $e$. Four promises, one object. Notice the symbol $e$ and the notation $a^{-1}$ are introduced *by* the definition — $e$ is the name for the identity, $a^{-1}$ the name for the inverse of $a$. They are not assumed; they are what lines 3 and 4 give you.

One more word, because half the groups you meet obey one extra rule and half do not.

## Definition (Commutative / abelian)

A group $(G, *)$ is **commutative**, also called **abelian**, if $a * b = b * a$ for every $a$ and $b$ in $G$ — the order in which you combine two elements never changes the result.

Commutativity is *not* one of the four axioms. A group is still a group when the order matters; it is just not abelian. (The triangle in module 06 will be your first group where $a * b$ and $b * a$ genuinely differ. For now, every example here is abelian.) The name "abelian" honors Niels Henrik Abel, a Norwegian mathematician who died at twenty-six and whose work on which equations can be solved was built, underneath, on exactly this kind of structure.

## Worked example (Checking $\mathbb{Z}_4$ under addition)

Take $\mathbb{Z}_4$ — the 4-hour clock, the numbers $\{0, 1, 2, 3\}$ from module 02, where you add and then wrap around past $3$ back to $0$. The operation is $+$ (clock addition): combine two of these numbers by adding, then take the remainder after dividing by $4$. So $2 + 3 = 5$, and $5$ wraps to $1$. Here is the full addition table, the artifact you can read every axiom off of.

$$
\begin{array}{c|cccc}
+ & 0 & 1 & 2 & 3 \\
\hline
0 & 0 & 1 & 2 & 3 \\
1 & 1 & 2 & 3 & 0 \\
2 & 2 & 3 & 0 & 1 \\
3 & 3 & 0 & 1 & 2 \\
\end{array}
$$

Now run the four-axiom check.

- **Closure.** Every entry inside the table is one of $0, 1, 2, 3$ — there is no $4$, no $7$, nothing from outside. Adding two clock numbers and wrapping always lands you back on the clock. Closed.
- **Associativity.** Clock addition is ordinary addition followed by a wrap, and ordinary addition is associative — $(1 + 2) + 3$ and $1 + (2 + 3)$ both come to $6$, which wraps to $2$. The wrap does not disturb this. Associative.
- **Identity.** Look at the row for $0$: it reads $0, 1, 2, 3$ — adding $0$ returns every number unchanged. So $e = 0$. The identity is $0$, exactly as you would hope on a clock.
- **Inverse.** Each element needs a partner that sums to $0$. Scan each row for the $0$: $1 + 3 = 0$, $2 + 2 = 0$, $3 + 1 = 0$, and $0 + 0 = 0$. Every element has an inverse. (This is the $\mathbb{Z}_n$ inverse rule: the inverse of $a$ is $n - a$. Here $n = 4$, so $1^{-1} = 3$, $2^{-1} = 2$, $3^{-1} = 1$.)

All four hold, so $\mathbb{Z}_4$ under $+$ is a group. And the table is symmetric across its diagonal — $a + b = b + a$ everywhere — so it is an **abelian** group.

## Check yourself

In $\mathbb{Z}_4$, what is the inverse of $3$, and why?

<details><summary>Show answer</summary>

The inverse of $3$ is $1$, because $3 + 1 = 4$, which wraps to $0 = e$. (By the $n - a$ rule: $4 - 3 = 1$.) The inverse is the partner that combines with $3$ to return the identity $0$.

</details>

## Worked example (When it fails: the integers under multiplication)

Now watch a structure miss. Take $\mathbb{Z}$, all the whole numbers $\dots, -2, -1, 0, 1, 2, \dots$, with the operation $\times$ (ordinary multiplication). Three of the four axioms hold without trouble:

- **Closure.** A whole number times a whole number is a whole number. Closed.
- **Associativity.** $(a \times b) \times c = a \times (b \times c)$ for ordinary multiplication. Associative.
- **Identity.** $a \times 1 = a$ for every $a$, so $e = 1$. There is an identity.

Then the fourth axiom breaks. An inverse of $2$ would have to be a whole number you multiply by $2$ to get the identity $1$ — that is, a solution of $2 \times x = 1$. The only number that works is $\tfrac{1}{2}$, and $\tfrac{1}{2}$ is not a whole number; it is not in $\mathbb{Z}$. So $2$ has no inverse inside the set. One missing inverse is enough: $(\mathbb{Z}, \times)$ is **not** a group.

This is the whole point of having axioms. "Almost a group" is not a group. To disqualify a candidate you do not have to check everything — you name one axiom it fails and you are done. To *certify* a group, though, all four must hold.

## Check yourself

Is $(\mathbb{Z}, +)$ — the whole numbers under addition — a group? Run the four checks.

<details><summary>Show answer</summary>

Yes. Closure: a sum of whole numbers is a whole number. Associativity: ordinary addition is associative. Identity: $e = 0$, since $a + 0 = a$. Inverse: the inverse of $a$ is $-a$, a whole number, and $a + (-a) = 0$. All four hold, so $(\mathbb{Z}, +)$ is a group (and an abelian one). The difference from $(\mathbb{Z}, \times)$ is the operation: under $+$ every element has an inverse; under $\times$ almost none do.

</details>

## Exercises

**1.** Write down the identity element and the inverse of each element in $\mathbb{Z}_4$ under $+$.

<details><summary>Show solution</summary>

Identity: $e = 0$ (adding $0$ changes nothing). Inverses, using $a^{-1} = 4 - a$: $0^{-1} = 0$, $1^{-1} = 3$, $2^{-1} = 2$, $3^{-1} = 1$. Check each against the table: $1 + 3 = 0$, $2 + 2 = 0$, $3 + 1 = 0$, $0 + 0 = 0$. Note $2$ is its own inverse — that is allowed; nothing in the definition forbids $a^{-1} = a$.

</details>

**2.** Is $(\mathbb{N}, +)$ a group, where $\mathbb{N} = \{0, 1, 2, 3, \dots\}$ is the counting numbers (no negatives) under addition? If not, which axiom fails?

<details><summary>Show solution</summary>

No. Closure, associativity, and identity ($e = 0$) all hold. But inverses fail: the inverse of $2$ would have to satisfy $2 + x = 0$, which needs $x = -2$, and $-2$ is not in $\mathbb{N}$. One missing inverse disqualifies it. (Throwing the negatives back in repairs it — that is exactly $(\mathbb{Z}, +)$ from the check above.)

</details>

**3.** Build the addition table for $\mathbb{Z}_3$ (the 3-hour clock, $\{0, 1, 2\}$) and use it to confirm $\mathbb{Z}_3$ under $+$ is a group.

<details><summary>Show solution</summary>

$$
\begin{array}{c|ccc}
+ & 0 & 1 & 2 \\
\hline
0 & 0 & 1 & 2 \\
1 & 1 & 2 & 0 \\
2 & 2 & 0 & 1 \\
\end{array}
$$

Closure: every entry is $0$, $1$, or $2$. Associativity: inherited from ordinary addition. Identity: the $0$ row is unchanged, so $e = 0$. Inverse: $1 + 2 = 0$ and $2 + 1 = 0$, so $1^{-1} = 2$ and $2^{-1} = 1$; and $0^{-1} = 0$. All four hold, so it is a group.

</details>

**4.** Is $(\mathbb{Z}_4, +)$ abelian? How can you tell from the table without checking every pair separately?

<details><summary>Show solution</summary>

Yes, it is abelian. The table is symmetric across the main diagonal (top-left to bottom-right): the entry in row $a$, column $b$ equals the entry in row $b$, column $a$. That symmetry *is* the statement $a + b = b + a$ for every pair. One glance at the mirror line confirms commutativity for all pairs at once.

</details>

**5.** *(conceptual)* Someone claims that the set $\{1, 2, 3\}$ under ordinary multiplication $\times$ is a group. Find the single axiom they have already broken before you even reach inverses.

<details><summary>Show solution</summary>

Closure. $2 \times 3 = 6$, and $6$ is not in $\{1, 2, 3\}$. The operation throws you out of the set, so the structure is not closed — and an operation that leaves the set is not even a valid group operation, let alone one with inverses. One escape is enough.

</details>

**6.** *(conceptual)* Using only the four axioms — not a specific example — explain why a group can never be empty. (Hint: which axiom forces an element to exist?)

<details><summary>Show solution</summary>

The identity axiom. It states that *there is* an element $e$ in $G$. An empty set has no elements at all, so it has no identity, and the third axiom fails immediately. Therefore every group contains at least one element — its identity. (In fact $\{e\}$, the set with only the identity, *is* a group: $e * e = e$ handles closure, associativity, identity, and $e$ is its own inverse. It is the smallest group there is.)

</details>

## Recap

A group is a set with one operation obeying four rules — closure, associativity, an identity $e$, and an inverse $a^{-1}$ for each element — and an abelian group is one where order does not matter. You verified $\mathbb{Z}_4$ is a group by reading all four axioms straight off its addition table, and you watched $(\mathbb{Z}, \times)$ fall short on the inverse axiom alone. The four-axiom check is the lens the next module turns on a whole zoo of examples: numbers, fractions, roots, and stranger things — all of them either passing or failing on exactly the grounds you just practiced.
