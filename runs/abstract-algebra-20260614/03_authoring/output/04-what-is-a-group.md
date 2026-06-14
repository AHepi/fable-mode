---
title: What Is a Group?
course: abstract-algebra
order: 4
summary: Put the four rules together and you get the single most important object in modern algebra.
estimatedMinutes: 18
objectives:
  - State the group axioms
  - Verify that a given set-with-operation is a group
  - Give an example of something that is not a group and say which axiom fails
prerequisites: [02-clock-arithmetic, 03-operations-and-their-rules]
---

## The hook

For three modules you have been collecting parts. A set. A way to combine two of its elements. Closure, so the combining never throws you out of the set. Associativity, so it does not matter how you group a chain of combinations. An identity that does nothing. An inverse that undoes. Four rules, each one small, each one met on a clock face or in plain integer addition.

Now we bolt them together. What you get is not just another definition to memorize — it is the object that the rest of this course, and a great deal of modern mathematics, is built on. Mathematicians gave it the plainest possible name, as if to dare you to underestimate it. They called it a **group**.

## Intuition

Strip away the clock, strip away the integers, strip away anything you can picture, and ask what is actually doing the work in all those examples. It is never the numbers themselves. It is the *pattern of rules* the numbers happen to obey.

A group is what is left when you keep only that pattern. It is a world with exactly one way to combine things, where the combining never escapes the world (closure), never depends on how you bracket it (associativity), always leaves room for a "do nothing" move (identity), and always lets you walk any move back (inverse). That is the whole idea. Any set and operation that play by those four rules is a group, whether the elements are numbers, clock positions, or — as you will see two modules from now — flips of a paper triangle.

The four axioms are not a wish list. They are the smallest set of rules that still lets you do algebra: solve $a \star x = b$ for $x$, cancel, undo. Drop any one of them and that machinery breaks. Keep all four and it runs no matter what the elements are.

## Definition (Group)

A **group** is a set $G$ together with a binary operation $\star$ on $G$ satisfying the following four axioms.

1. **Closure.** For all $a, b \in G$, the element $a \star b$ is in $G$.
2. **Associativity.** For all $a, b, c \in G$, $\;(a \star b) \star c = a \star (b \star c)$.
3. **Identity.** There exists an element $e \in G$ such that $a \star e = e \star a = a$ for every $a \in G$. This $e$ is the **identity element**.
4. **Inverses.** For each $a \in G$ there exists an element $a^{-1} \in G$ such that $a \star a^{-1} = a^{-1} \star a = e$. This $a^{-1}$ is the **inverse** of $a$.

When the operation is clear from context we write the group as just $G$. A group whose underlying set is finite is called a **finite group**; otherwise it is **infinite**.

A short note on reading axiom 1. Strictly, demanding that $\star$ be an operation *on* $G$ already forces closure — an operation on $G$ has to return a value in $G$. We list closure separately anyway, because when you build a group from a subset of some larger set, "does the result land back inside?" is exactly the question that can fail. Keeping it on the list keeps it in view.

## Worked example

## Example (The integers under addition)

**Problem.** Show that $\mathbb{Z}$, the set of all integers, together with ordinary addition $+$, is a group.

**Solution.** Check the four axioms in turn. Checking axioms *is* the work; this is the pattern you will repeat for every candidate group, so go slowly the first time.

- **Closure.** The sum of two integers is an integer: for all $a, b \in \mathbb{Z}$, $a + b \in \mathbb{Z}$. ✓
- **Associativity.** For all $a, b, c \in \mathbb{Z}$, $(a + b) + c = a + (b + c)$ — this is the ordinary associative law of addition. ✓
- **Identity.** The integer $0$ satisfies $a + 0 = 0 + a = a$ for every $a \in \mathbb{Z}$, so $e = 0$. ✓
- **Inverses.** For each $a \in \mathbb{Z}$, the integer $-a$ is also in $\mathbb{Z}$, and $a + (-a) = (-a) + a = 0$. So $a^{-1} = -a$. ✓

All four axioms hold, so $\mathbb{Z}$ under $+$ is a group. It is an infinite group, since $\mathbb{Z}$ has infinitely many elements.

Notice the shape of that argument: four bullets, one per axiom, each naming the witness ($0$ for the identity, $-a$ for the inverse). That four-line ritual *is* a proof — your first one. It is not a flourish or a leap of insight; it is a checklist, honestly completed. That is what most of "proving something is a group" amounts to.

## Check yourself

Before reading on, decide from memory: what plays the role of the identity element in $\mathbb{Z}_n$ under addition (clock arithmetic from module 02), and what is the inverse of an element $a$ there?

<details><summary>Show answer</summary>

The identity is $0$, since $a + 0 = a$ on the clock just as on the number line. The inverse of $a$ is $n - a$ (for $a \neq 0$), because $a + (n - a) = n = 0$ in $\mathbb{Z}_n$ — adding $n$ takes you all the way around the clock and back to where you started. The inverse of $0$ is $0$ itself. Every element has one, which is exactly axiom 4.

</details>

## A second example, done faster

## Example (The integers mod $n$ under addition)

**Problem.** Show that $\mathbb{Z}_n = \{0, 1, 2, \dots, n-1\}$, with addition mod $n$, is a group.

**Solution.** Run the same four checks.

- **Closure.** Adding two elements and reducing mod $n$ always lands in $\{0, 1, \dots, n-1\}$. ✓
- **Associativity.** Addition mod $n$ inherits associativity from ordinary addition: reducing mod $n$ before or after grouping gives the same answer. ✓
- **Identity.** $0$ satisfies $a + 0 = a$ in $\mathbb{Z}_n$, so $e = 0$. ✓
- **Inverses.** For $a \neq 0$, the element $n - a$ lies in $\mathbb{Z}_n$ and $a + (n - a) = n \equiv 0 \pmod{n}$; and $0$ is its own inverse. ✓

So $\mathbb{Z}_n$ under addition mod $n$ is a group — a *finite* one, with $n$ elements. This is the engine behind the clock arithmetic of module 02: a clock is just $\mathbb{Z}_{12}$ wearing a face.

## When it fails: the integers under multiplication

Here is the trap. Swap the operation on $\mathbb{Z}$ from $+$ to $\times$ and ask the same question: is $\mathbb{Z}$ under multiplication a group? Three of the four axioms survive the swap, which is exactly what makes the failure instructive.

- **Closure.** The product of two integers is an integer. ✓
- **Associativity.** $(a \times b) \times c = a \times (b \times c)$. ✓
- **Identity.** The integer $1$ satisfies $a \times 1 = 1 \times a = a$, so $e = 1$. ✓
- **Inverses.** Here it breaks. The inverse of $a$ would have to be an integer $a^{-1}$ with $a \times a^{-1} = 1$. For $a = 2$ that means $2 \times a^{-1} = 1$, so $a^{-1} = \tfrac{1}{2}$ — which is **not an integer**, so it is not in $\mathbb{Z}$. ✗

The inverse axiom fails: $2$ has no inverse inside $\mathbb{Z}$ under $\times$. (In fact only $1$ and $-1$ have integer multiplicative inverses.) One missing inverse is enough. **$\mathbb{Z}$ under multiplication is not a group**, and the axiom that fails is the inverse axiom.

This is worth sitting with. "Not a group" is never a vague verdict. To say it, you point at one specific axiom and one specific element that violates it — here, $2$ and axiom 4. A counterexample is a finger pointed at the exact place the rules break.

## Check yourself

Consider the set of natural numbers $\mathbb{N} = \{0, 1, 2, 3, \dots\}$ under ordinary addition. Three axioms hold easily. Which axiom fails, and what is a witness to the failure?

<details><summary>Show answer</summary>

The **inverse** axiom fails. The identity is $0$ (fine), and closure and associativity hold. But take $a = 3$: its inverse would have to satisfy $3 + a^{-1} = 0$, forcing $a^{-1} = -3$, which is not in $\mathbb{N}$. No positive natural number has an inverse in $\mathbb{N}$ under addition. So $\mathbb{N}$ under $+$ is *not* a group — and this is precisely why we needed the full set $\mathbb{Z}$ in the first worked example.

</details>

## Recap

A group is a set with one operation obeying four rules — closure, associativity, identity, inverses — and nothing more. The integers under addition and the integers mod $n$ under addition are groups; the integers under multiplication are not, because $2$ has no inverse there, and naming that single broken axiom is what a "not a group" verdict actually means. You have now done your first proofs: each was a four-line check against the definition, which is most of what verifying a group ever requires. Next we go collecting — a whole zoo of groups, to see how far past the integers this idea reaches.

## Exercises

**Exercise 1 (mechanical).** Verify that $\mathbb{Z}_5 = \{0,1,2,3,4\}$ under addition mod $5$ has an identity, and find the inverse of each of its five elements.

<details><summary>Show solution</summary>

The identity is $0$, since $a + 0 = a$ in $\mathbb{Z}_5$. For inverses, find for each $a$ the element that adds to $0 \pmod 5$:

- $0$: inverse is $0$ ($0 + 0 = 0$).
- $1$: inverse is $4$ ($1 + 4 = 5 \equiv 0$).
- $2$: inverse is $3$ ($2 + 3 = 5 \equiv 0$).
- $3$: inverse is $2$.
- $4$: inverse is $1$.

The rule is the general one from the Check-yourself: the inverse of $a$ is $5 - a$ for $a \neq 0$, and $0$ is its own inverse. Every element has an inverse, so axiom 4 holds.

</details>

**Exercise 2 (mechanical).** In the group $\mathbb{Z}$ under $+$, the identity is $0$. Using only the inverse axiom, solve the equation $x + 7 = 0$ for $x$, and state which axiom guarantees a solution exists.

<details><summary>Show solution</summary>

A solution is $x = -7$, since $-7 + 7 = 0$. What guarantees it exists is the **inverse axiom**: it promises that $7$ has an inverse $7^{-1} = -7$ in $\mathbb{Z}$, and that inverse is exactly the $x$ that sends $7$ back to the identity. This is the payoff of the whole structure — inverses are what let you solve equations by "undoing."

</details>

**Exercise 3 (conceptual).** Consider the set $\{1, -1\}$ under ordinary multiplication. Check all four group axioms and decide whether it is a group.

<details><summary>Show solution</summary>

- **Closure:** $1 \times 1 = 1$, $1 \times (-1) = -1$, $(-1) \times (-1) = 1$. Every product is back in $\{1, -1\}$. ✓
- **Associativity:** inherited from ordinary multiplication. ✓
- **Identity:** $1$, since $a \times 1 = a$. ✓
- **Inverses:** $1 \times 1 = 1$ so $1$ is its own inverse; $(-1) \times (-1) = 1$ so $-1$ is its own inverse. ✓

All four hold, so $\{1, -1\}$ under $\times$ **is** a group — a finite group with two elements. (Contrast this with $\mathbb{Z}$ under $\times$: shrinking the set to just $\{1, -1\}$ throws out exactly the elements that lacked inverses.)

</details>

**Exercise 4 (conceptual).** Is the set of odd integers $\{\dots, -3, -1, 1, 3, \dots\}$ under addition a group? If not, name the first axiom that fails and give a witness.

<details><summary>Show solution</summary>

It is **not** a group, and the first axiom to fail is **closure**. Take two odd integers, say $1$ and $3$: their sum $1 + 3 = 4$ is even, so it is not in the set of odd integers. The operation has thrown us out of the set, which is exactly what closure forbids.

A tempting wrong answer is to blame the identity axiom, reasoning "there's no $0$ in the set, so there's no identity." That is true, but closure already fails on the very first pair you add, so it is the cleaner and more fundamental witness — and once closure fails, the set with this operation cannot be a group regardless of anything else. (Naming *any* failing axiom is enough to disqualify it; closure is just the one that breaks first and most visibly.)

</details>

**Exercise 5 (conceptual).** The set of positive rational numbers $\mathbb{Q}^{+}$ (fractions $\tfrac{p}{q}$ with $p, q$ positive integers) under multiplication has identity $1$. Show that, unlike $\mathbb{Z}$ under $\times$, every element here *does* have an inverse — so the axiom that doomed $\mathbb{Z}$ under $\times$ is repaired.

<details><summary>Show solution</summary>

Take any element $\tfrac{p}{q} \in \mathbb{Q}^{+}$ with $p, q$ positive integers. Its inverse is $\tfrac{q}{p}$, which is again a positive rational, and

$$
\frac{p}{q} \times \frac{q}{p} = \frac{pq}{qp} = 1 = e.
$$

So every element has an inverse *inside the set*, and axiom 4 holds. The reason $\mathbb{Z}$ under $\times$ failed was that $\tfrac{1}{2}$ was missing; enlarging the set to all positive rationals supplies exactly those missing inverses. (Together with closure, associativity, and identity — which also hold — this makes $\mathbb{Q}^{+}$ under $\times$ a group, a fact we will revisit in the next module.)

</details>

**Exercise 6 (stretch).** Suppose $G$ is a group with identity $e$, and let $a \in G$. Argue, in plain sentences, why $a$ cannot have two different inverses — that is, why the inverse promised by axiom 4 is unique. *(Hint: suppose $b$ and $c$ both satisfy the inverse condition for $a$, and combine $b \star a \star c$ two ways using associativity.)*

<details><summary>Show solution</summary>

Suppose both $b$ and $c$ are inverses of $a$, so $b \star a = e$ and $a \star c = e$. Consider the combination $b \star a \star c$, which associativity (axiom 2) lets us bracket either way without changing the result.

Grouping to the left: $(b \star a) \star c = e \star c = c$, using $b \star a = e$ and the identity axiom.

Grouping to the right: $b \star (a \star c) = b \star e = b$, using $a \star c = e$ and the identity axiom.

The two groupings compute the same element, so $b = c$. Any two inverses of $a$ are equal, which is why we are entitled to speak of *the* inverse $a^{-1}$ and to write it with a single symbol. Notice that this argument used three of the four axioms together — associativity, identity, and inverses — which is a first hint of how the axioms cooperate rather than just sit side by side.

</details>
