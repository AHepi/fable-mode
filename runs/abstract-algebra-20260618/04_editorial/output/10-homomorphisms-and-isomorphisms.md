---
title: When Two Groups Are Secretly the Same
course: abstract-algebra
order: 10
summary: Maps that respect the operation reveal when two different-looking groups are really the same group in disguise.
estimatedMinutes: 20
objectives:
  - Define a homomorphism as a map between groups that preserves the operation.
  - Define an isomorphism and explain what it means for two groups to be isomorphic.
  - Check whether a given map preserves the operation.
  - Recognize two small groups as isomorphic by matching their Cayley tables.
prerequisites:
  - 09-lagranges-theorem
---

Here are two groups. The first is $\{1, -1\}$ — just the numbers one and minus one — with ordinary multiplication as its operation. Multiply any two of them and you stay inside the set: $1 \times 1 = 1$, $(-1) \times (-1) = 1$, $1 \times (-1) = -1$. The second is $\mathbb{Z}_2$ (the 2-hour clock, from module 02): the marks $\{0, 1\}$ with addition that wraps, so $1 + 1 = 0$ and the hand is back where it started.

One group is built from numbers you multiply. The other is built from clock marks you add. Different elements, different operation, different story. And yet — write out how each one behaves, and you will find you have written the same thing twice. They are not merely similar. They are, underneath the labels, one single group wearing two costumes.

This module is about that "underneath." When are two groups, dressed up differently, actually the same group? The answer turns on a particular kind of map: one that carries not just the elements of one group over to another, but the *behavior* — the way the operation knits them together.

## A faithful relabelling

Start with the costume idea and make it sharp. Take $\{1, -1\}$ and lay it beside $\mathbb{Z}_2$, and pair them off:

$$
1 \;\leftrightarrow\; 0, \qquad -1 \;\leftrightarrow\; 1.
$$

This pairing is a *dictionary*: read "$1$" in the first group, look it up, and it translates to "$0$" in the second. Read "$-1$", and it translates to "$1$". So far this is just a relabelling — any two-element sets can be paired up like this, and most such pairings tell you nothing.

What makes *this* one special is that the dictionary also translates the operation correctly. In the first group, $(-1) \times (-1) = 1$. Translate each piece through the dictionary: $-1$ becomes $1$, and the result $1$ becomes $0$. So the translated sentence reads $1 + 1 = 0$ — and that is exactly true in $\mathbb{Z}_2$. The dictionary did not just rename the elements; it preserved the grammar. Combine-then-translate gives the same answer as translate-then-combine.

A relabelling that respects the operation like this is *faithful*. A faithful relabelling is the whole content of "secretly the same group." Everything you could ever say about how $\{1,-1\}$ combines, you can say about $\mathbb{Z}_2$ by running it through the dictionary, and you never get caught in a lie. That is a strong claim, and it deserves a precise definition. We build it in two steps: first a map that respects the operation at all, then the special case where the map pairs the two groups up perfectly.

Because we now have *two* groups in play at once, we need two operation symbols so we can tell them apart. (Elsewhere in this course a single generic operation is written $*$; here we need both at once, one per group.) Let the first group be $G$ with operation $*$ — combining two elements to get a third, the operation from module 03 — and the second group be $H$ with operation $\diamond$.

## Definition (Homomorphism)

Let $G$ be a group with operation $*$ and $H$ a group with operation $\diamond$. A **homomorphism** from $G$ to $H$ is a function $f$ that assigns to each element of $G$ an element of $H$ and satisfies, for every pair of elements $a$ and $b$ in $G$,

$$
f(a * b) = f(a) \diamond f(b).
$$

Read the equation as the faithful-relabelling rule, piece by piece. The left side, $f(a * b)$, says: combine $a$ and $b$ first using $G$'s operation, *then* translate the result into $H$. The right side, $f(a) \diamond f(b)$, says: translate $a$ and $b$ into $H$ first, *then* combine them using $H$'s operation. A homomorphism is a function for which these two routes always land on the same element. The word means "same shape" (from the Greek *homos*, same, and *morphe*, shape): the map carries the shape of $G$'s operation over into $H$.

Note what a homomorphism does *not* have to do. It need not pair the groups up one-for-one — it may send many elements of $G$ to the same element of $H$, or miss parts of $H$ entirely. It only has to respect the operation. That weaker requirement still buys a lot, as the first worked example shows.

## A worked homomorphism: the remainder map

**Problem.** Let $G = \mathbb{Z}$, the integers under addition ($*$ is ordinary $+$). Let $H = \mathbb{Z}_3$ (the 3-hour clock), the marks $\{0, 1, 2\}$ under addition that wraps ($\diamond$ is $+$ on the clock). Define $f$ by sending each integer to its remainder after division by $3$:

$$
f(n) = (n \bmod 3).
$$

So $f(0)=0$, $f(1)=1$, $f(2)=2$, $f(3)=0$, $f(4)=1$, $f(5)=2$, and so on — the integers march along the number line while their images cycle $0,1,2,0,1,2,\dots$ around the clock. Show that $f$ is a homomorphism.

**Solution.** We must check that $f(a + b) = f(a) \diamond f(b)$ for every pair of integers $a$ and $b$ — that taking the remainder respects addition.

Test it on a case first. Take $a = 4$ and $b = 5$. Combine in $G$, then translate: $4 + 5 = 9$, and $9 \bmod 3 = 0$, so $f(a+b) = 0$. Now translate, then combine in $H$: $f(4) = 1$ and $f(5) = 2$, and on the 3-hour clock $1 + 2 = 0$ (the hand sweeps to $3$, which is $0$). Both routes give $0$. They agree.

They agree for the same reason every time. Adding $3$ to an integer does not change its remainder — it sends the clock hand one full loop and back to where it sat. So the remainder of a sum depends only on the remainders of the parts, which is precisely the statement $f(a+b) = f(a) \diamond f(b)$. The map preserves the operation, so $f$ is a homomorphism.

Notice it is *not* a faithful relabelling: infinitely many integers ($\dots, 0, 3, 6, 9, \dots$) all land on the single mark $0$. The remainder map respects the operation while folding a big group down onto a small one. That is the homomorphism doing its honest, lossy work — and it is exactly the kind of map an isomorphism rules out.

## Check yourself

For the remainder map $f(n) = (n \bmod 3)$ from $\mathbb{Z}$ to $\mathbb{Z}_3$, what is $f(7)$, and which other integers share that image?

<details><summary>Show answer</summary>

$7 = 6 + 1$, and $6$ is two full loops of the clock, so $7 \bmod 3 = 1$. Thus $f(7) = 1$. Every integer of the form $1, 4, 7, 10, \dots$ (and $-2, -5, \dots$) — every integer leaving remainder $1$ after division by $3$ — also maps to $1$. A whole infinite family collapses onto each of the three marks.

</details>

## Definition (Isomorphism)

Let $G$ and $H$ be groups. An **isomorphism** from $G$ to $H$ is a homomorphism $f$ that is also a **perfect pairing** of the two groups: every element of $H$ is hit exactly once, so $f$ pairs each element of $G$ with exactly one element of $H$ and leaves nothing in $H$ unpaired. When such an $f$ exists, we say $G$ and $H$ are **isomorphic**, written

$$
G \cong H.
$$

An isomorphism is the faithful-relabelling dictionary made exact. "Homomorphism" already secured that the operation is respected; "perfect pairing" adds that nothing is lost in translation — no two elements of $G$ collapse together, and no element of $H$ is left out. The word again means "same shape" (Greek *isos*, equal): an isomorphism says the two groups have *equal* shape, not merely that one casts a shadow of the other. When $G \cong H$, anything true of one group's structure is true of the other's; they are the same group, relabelled. (The remainder map above fails this: it collapsed many integers onto one mark, so it is a homomorphism but no isomorphism.)

## A worked isomorphism: matching two Cayley tables

How do you *prove* two small groups are isomorphic? Write down each group's Cayley table — the grid from module 05 that records, in the cell for row $x$ and column $y$, the result of combining $x$ with $y$ — and show that one table becomes the other under a relabelling. If the grids match cell for cell after you swap the labels, the dictionary is faithful, and the groups are isomorphic.

**Problem.** Show that $G = \{1, -1\}$ under multiplication is isomorphic to $H = \mathbb{Z}_2$ (the marks $\{0, 1\}$) under wrap-around addition.

**Solution.** Here are the two Cayley tables. On the left, $G$ with $\times$; on the right, $H$ with $+$.

$$
\begin{array}{c|cc}
\times & 1 & -1 \\
\hline
1 & 1 & -1 \\
-1 & -1 & 1
\end{array}
\qquad\qquad
\begin{array}{c|cc}
+ & 0 & 1 \\
\hline
0 & 0 & 1 \\
1 & 1 & 0
\end{array}
$$

Now apply the dictionary $f(1) = 0$ and $f(-1) = 1$ to the left table. Replace every "$1$" with "$0$" and every "$-1$" with "$1$", including the row and column headers:

$$
\begin{array}{c|cc}
f(\times) & 0 & 1 \\
\hline
0 & 0 & 1 \\
1 & 1 & 0
\end{array}
$$

This relabelled grid is identical to the table for $H$ — same headers, same body, cell for cell. So combining in $G$ and then translating gives the same result as translating and then combining in $H$, for every pair of elements: that is $f(a * b) = f(a) \diamond f(b)$ checked across the whole table at once. The map $f$ pairs the two elements one-for-one with nothing left over, so it is a perfect pairing. A homomorphism that is a perfect pairing is an isomorphism, and therefore

$$
\{1, -1\} \cong \mathbb{Z}_2.
$$

The two groups from the opening were never two groups. They were one group — the only group with two elements there is — printed in two alphabets. Back in the zoo (module 05) we noticed that the fourth roots of unity $\{1, i, -1, -i\}$ had a Cayley table the same *shape* as $\mathbb{Z}_4$'s, and called it a hint of something to chase down. This is what we were chasing: that matching shape is an isomorphism, and $\{1, i, -1, -i\} \cong \mathbb{Z}_4$ for exactly the reason above. The same shape is not a coincidence, and it is not a curiosity — it is two names for one structure.

## Check yourself

Two groups are isomorphic only if they have the same number of elements — the same order, $|G|$ (the count of elements, from module 05). Why must that be true?

<details><summary>Show answer</summary>

An isomorphism is a perfect pairing: each element of $G$ is matched with exactly one element of $H$, nothing doubled up and nothing left out. A perfect pairing between two finite sets forces them to have the same size — you cannot pair up a $4$-element group with a $6$-element group without something being left unmatched. So $|G| = |H|$ is a requirement. (It is necessary, not sufficient: same size is the price of admission, not a guarantee, as the exercises show.)

</details>

## When same size is not enough

Equal order lets two groups be isomorphic; it does not make them so. Two groups can have the same number of elements and still be built differently inside.

Take the order-$4$ groups. One is $\mathbb{Z}_4$ (the 4-hour clock): $\{0,1,2,3\}$, where adding $1$ over and over cycles through every element — $1, 2, 3, 0$ — before returning home. The other is $\mathbb{Z}_2 \times \mathbb{Z}_2$, which you can picture as **two light switches**, each independently up or down: the four states are $(\text{off},\text{off})$, $(\text{on},\text{off})$, $(\text{off},\text{on})$, $(\text{on},\text{on})$, and "combining" two states means flipping the switches together, where flipping any one switch twice returns it to where it was. Both groups have four elements, but no faithful dictionary can connect them. In $\mathbb{Z}_4$ there is an element (the mark $1$) you can combine with itself to reach all four; in the two-switch group, combining *any* state with itself returns you to $(\text{off},\text{off})$ — no single element generates the whole group. A dictionary would have to translate "an element that generates everything" into "an element that generates everything," and the second group has none to offer. So

$$
\mathbb{Z}_4 \not\cong \mathbb{Z}_2 \times \mathbb{Z}_2.
$$

Two genuinely different groups of order $4$. Same size, different shape — and shape is what isomorphism measures.

## Exercises

**1.** Define $f$ from $\mathbb{Z}$ (integers under $+$) to $\mathbb{Z}_2$ (marks $\{0,1\}$ under wrap-around $+$) by $f(n) = (n \bmod 2)$: send each integer to $0$ if it is even, $1$ if it is odd. Verify the operation-preserving equation on the pair $a = 3$, $b = 5$.

<details><summary>Show solution</summary>

Combine in $\mathbb{Z}$, then translate: $3 + 5 = 8$, and $8$ is even, so $f(8) = 0$. Translate, then combine in $\mathbb{Z}_2$: $f(3) = 1$ (odd) and $f(5) = 1$ (odd), and $1 + 1 = 0$ on the 2-hour clock. Both routes give $0$, so $f(3+5) = f(3) \diamond f(5)$. (In words: odd plus odd is even — the parity of a sum depends only on the parities of the parts, which is exactly what it means for $f$ to preserve addition.)

</details>

**2.** Is the function $g$ from $\mathbb{Z}_2$ to $\mathbb{Z}_2$ defined by $g(0) = 1$ and $g(1) = 0$ a homomorphism? Check the operation-preserving equation.

<details><summary>Show solution</summary>

No. Test $a = b = 0$. Left side: $0 + 0 = 0$ in $\mathbb{Z}_2$, and $g(0) = 1$, so $g(a+b) = 1$. Right side: $g(0) \diamond g(0) = 1 + 1 = 0$ on the clock. The two sides are $1$ and $0$ — they disagree, so $g$ is not a homomorphism. (The tempting wrong answer is "yes, because it pairs the elements one-for-one." A perfect pairing is necessary for an *isomorphism* but means nothing on its own: the map still has to respect the operation, and this one sends the identity $0$ off to $1$, which already breaks the structure.)

</details>

**3.** The groups $\{1, -1\}$ under $\times$ and $\mathbb{Z}_2$ under $+$ are isomorphic. In the isomorphism $f(1) = 0$, $f(-1) = 1$, which element of $\mathbb{Z}_2$ does the identity of $\{1, -1\}$ map to? State the general rule you notice.

<details><summary>Show solution</summary>

The identity of $\{1, -1\}$ under multiplication is $1$ (the identity: multiplying by $1$ changes nothing), and $f(1) = 0$. The mark $0$ is the identity of $\mathbb{Z}_2$ under addition. So the isomorphism sends identity to identity. This is a general rule: any homomorphism must send the identity of $G$ to the identity of $H$, because the identity is defined by how it behaves under the operation, and a homomorphism preserves that behavior.

</details>

**4.** Both $\mathbb{Z}_4$ and the two-light-switch group $\mathbb{Z}_2 \times \mathbb{Z}_2$ have order $4$. Explain in your own words why they are *not* isomorphic, using the idea of an element combined with itself.

<details><summary>Show solution</summary>

In $\mathbb{Z}_4$, start at the mark $1$ and keep adding it: $1, 2, 3, 0$ — you reach all four elements before returning to the start. There is a single element that generates the whole group. In the two-switch group, combine any state with itself and every switch flips twice, landing you back at $(\text{off},\text{off})$; no single element reaches more than two states by repetition. A faithful dictionary would have to translate "an element that generates everything" into one of the same kind, and the switch group has none. The structures differ, so $\mathbb{Z}_4 \not\cong \mathbb{Z}_2 \times \mathbb{Z}_2$. (Same order is the price of admission to being isomorphic, not a guarantee of it.)

</details>

**5.** *(Conceptual.)* The remainder map $f(n) = (n \bmod 3)$ from $\mathbb{Z}$ to $\mathbb{Z}_3$ is a homomorphism. Is it an isomorphism? Justify your answer.

<details><summary>Show solution</summary>

No. An isomorphism must be a perfect pairing — each element of the target hit exactly once. But $f$ sends infinitely many integers to the same mark: $0, 3, 6, 9, \dots$ all land on $0$. Many elements collapse together, so the pairing is far from one-for-one. It respects the operation (that is why it is a homomorphism) but loses information in translation, which an isomorphism never does. ($\mathbb{Z}$ is infinite and $\mathbb{Z}_3$ has three elements, so they cannot have equal order anyway — and equal order is required for an isomorphism.)

</details>

**6.** *(Stretch.)* Consider $\{1, i, -1, -i\}$ under multiplication (with $i^2 = -1$) and $\mathbb{Z}_4$ (marks $\{0,1,2,3\}$) under wrap-around addition. Propose a dictionary $f$ pairing the two, and check that it respects the operation on one nontrivial pair.

<details><summary>Show solution</summary>

Match powers of $i$ to clock marks: $f(1) = 0$, $f(i) = 1$, $f(-1) = 2$, $f(-i) = 3$ — that is, $f(i^k) = k$. Check the pair $a = i$, $b = -1$. Combine in the first group, then translate: $i \times (-1) = -i$, and $f(-i) = 3$. Translate, then combine in $\mathbb{Z}_4$: $f(i) = 1$, $f(-1) = 2$, and $1 + 2 = 3$ on the 4-hour clock. Both routes give $3$. The dictionary pairs all four elements one-for-one and respects the operation, so $\{1, i, -1, -i\} \cong \mathbb{Z}_4$. (Multiplying powers of $i$ adds their exponents, and exponents add on the clock — same arithmetic, two alphabets.)

</details>

## Recap

A homomorphism is a function between groups that preserves the operation: combine-then-translate equals translate-then-combine, written $f(a * b) = f(a) \diamond f(b)$. An isomorphism is a homomorphism that pairs the two groups perfectly, one element for one with nothing lost — and when one exists, the groups are isomorphic, $G \cong H$: the same structure in different clothes, as the matching Cayley tables of $\{1,-1\}$ and $\mathbb{Z}_2$ showed. Equal order is required but never sufficient, which is why $\mathbb{Z}_4$ and the two-switch group stay apart despite both having four elements. The costume can be removed. What remains when it is — the bare operation structure, unchanged by any relabelling — is what these ten modules have been reaching toward.
