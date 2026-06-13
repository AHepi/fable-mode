---
title: "Counting Tells the Truth: Lagrange's Theorem"
course: abstract-algebra
order: 9
summary: A simple counting fact constrains every subgroup — the size of a subgroup must divide the size of the group.
estimatedMinutes: 20
objectives:
  - State Lagrange's theorem
  - Use it to rule out impossible subgroup sizes
  - Explain the equal-sized slices idea behind it
prerequisites: []
---

## The hook

Suppose someone hands you a group with exactly six elements and swears it hides a subgroup with exactly four. You don't need to know a single thing about how their group works to know they are wrong. Not "probably wrong" — wrong, flatly, the way someone is wrong who tells you they cut a pizza into equal slices and ended up with pieces of two different sizes.

Four does not divide six. That is the entire objection. And it turns out that one schoolyard fact about division — about which numbers go evenly into which — quietly polices the size of every subgroup inside every finite group. Counting, it turns out, tells the truth even when nothing else will.

## Intuition

We have spent earlier modules looking *inside* groups, finding smaller groups nested in larger ones. A subgroup is a group living inside a bigger group, sharing its operation. The question now is brutally simple: how big is a subgroup allowed to be?

You might expect the answer to depend on the messy particulars — which operation, which elements, how they tangle together. It doesn't. The answer depends only on counting, and here is the picture that makes it obvious.

Take a subgroup $H$ sitting inside a group $G$. The subgroup is one clump of elements. Now grab an element $g$ of $G$ that isn't in that clump, and use it to shove the whole clump sideways: combine $g$ with every element of $H$, one at a time. You get a *new* clump — a shifted copy of $H$. Grab another element not yet covered, shove $H$ again, get another copy. Keep going until every element of $G$ has been swept up.

Three things happen, and they are the whole theorem:

- **Every clump is the same size as $H$.** Shifting doesn't duplicate or lose anything; it just relabels. The clump you get from shoving $H$ has exactly as many elements as $H$ itself.
- **The clumps don't overlap.** Two of these shifted copies are either identical or completely separate — they never share just a few elements and split the difference.
- **Together the clumps cover all of $G$.** Nothing is left out.

So $G$ has been carved into a stack of equal-sized, non-overlapping pieces, each one the size of $H$. If each piece holds $|H|$ elements and there are some whole number of pieces, then the total — the size of $G$ — is that whole number times $|H|$. Which is just a fancy way of saying $|H|$ divides $|G|$. The slices are equal, so the size of one slice has to go evenly into the whole pie.

These shifted clumps have a name — each one is a **coset**, written $gH$ (the clump you get by combining a fixed $g$ with everything in $H$). We won't fuss over their fine print here. The picture is enough: equal slices, no overlaps, covering everything.

## Order of a group

First, a word for "how big."

## Definition (Order of a group)

The **order** of a finite group $G$ is the number of elements it contains, written $|G|$.

The same notation, $|H|$, gives the order of a subgroup $H$.

## Lagrange's Theorem

**Theorem (Lagrange).** If $H$ is a subgroup of a finite group $G$, then $|H|$ divides $|G|$.

That is the whole statement. The order of any subgroup goes evenly into the order of the group — no remainder, no exceptions.

A careful word on what we did and didn't do. We made this *plausible* with the slicing picture above, and that picture is genuinely the heart of the real proof. The two facts a full proof nails down are the ones we asserted: that every coset $gH$ is the same size as $H$, and that two cosets never partly overlap. Both are true, both can be checked, and you'll meet the checking later. For now, trust the slices — they don't lie.

## Worked examples

### Example (Slicing $\mathbb{Z}_6$ into equal pieces)

**Problem.** Take $G = \mathbb{Z}_6 = \{0, 1, 2, 3, 4, 5\}$ under addition mod $6$, with subgroup $H = \{0, 3\}$. Show how $H$ slices $G$, and confirm $|H|$ divides $|G|$.

**Solution.** Start with $H$ itself, the first clump:

$$
H = \{0, 3\}.
$$

Now shove $H$ over by an element not yet covered — say $1$. Add $1$ to each element of $H$ (mod $6$):

$$
1H = \{1 + 0,\ 1 + 3\} = \{1, 4\}.
$$

A new pair, and it shares nothing with $H$. One element is still uncovered, so shove again by $2$:

$$
2H = \{2 + 0,\ 2 + 3\} = \{2, 5\}.
$$

Now every element of $G$ has been used. The three clumps are

$$
\{0, 3\}, \quad \{1, 4\}, \quad \{2, 5\}.
$$

Three slices, each of size $2$, no overlaps, covering all of $\mathbb{Z}_6$. And $3 \times 2 = 6$, so $|H| = 2$ divides $|G| = 6$. The picture is right in front of you.

### Example (A group of prime order has no interesting subgroups)

**Problem.** Suppose $G$ has order $7$. What subgroups can it have?

**Solution.** Any subgroup $H$ must have $|H|$ dividing $7$. But $7$ is prime — the only whole numbers dividing it are $1$ and $7$. So $|H|$ is either $1$ or $7$. A subgroup of size $1$ is just the identity by itself; a subgroup of size $7$ is all of $G$. Those are the **trivial** subgroups, and a group of order $7$ has nothing else. Prime order leaves no room to hide a smaller group inside.

### Example (The order of an element divides the order of the group)

**Problem.** Let $g$ be any element of a finite group $G$. Show that the order of $g$ — the number of times you combine $g$ with itself before returning to the identity — divides $|G|$.

**Solution.** Recall from earlier that taking $g$ and all its powers builds a subgroup, the cyclic subgroup $\langle g \rangle$, generated by $g$ alone. The size of that subgroup is exactly the order of the element $g$. Since $\langle g \rangle$ is a subgroup of $G$, Lagrange says its size divides $|G|$. So the order of $g$ divides $|G|$. An element simply cannot have an order that fails to divide the group's size — for instance, in a group of order $10$, no element can have order $3$ or $4$, since neither divides $10$.

### Example (Ruling out a forbidden subgroup)

**Problem.** A group $G$ has order $6$. Could it have a subgroup of order $4$?

**Solution.** If it did, then $4$ would have to divide $6$. It doesn't — $6 = 4 + 2$, with a remainder of $2$. Lagrange forbids it outright. So no group of order $6$ has a subgroup of order $4$, no matter what its operation looks like. (The sizes Lagrange *permits* are exactly the divisors of $6$: namely $1$, $2$, $3$, and $6$.)

## Exercises

1. **(Mechanical.)** A group $G$ has order $12$. List every size a subgroup of $G$ is allowed to have.
   *Hint: list the divisors of $12$.*

2. **(Mechanical.)** Slice $\mathbb{Z}_8 = \{0, 1, \dots, 7\}$ by the subgroup $H = \{0, 4\}$, the way we sliced $\mathbb{Z}_6$. Write out all the clumps and count them.
   *Hint: start with $H$, then add $1$, then $2$, then $3$. How many pairs do you get?*

3. **(Conceptual.)** A group has order $15$. Explain why none of its elements can have order $2$.
   *Hint: the order of an element divides the order of the group. Does $2$ divide $15$?*

4. **(Conceptual.)** A friend claims to have found a group of order $9$ with a subgroup of order $6$. Without knowing anything else, explain why they are mistaken.
   *Hint: does $6$ divide $9$?*

5. **(Conceptual.)** A group $G$ has order $5$. What can you say about all of its subgroups, and why?
   *Hint: $5$ is prime. Reread the prime-order example.*

6. **(Stretch.)** Lagrange tells you that if $H$ is a subgroup, then $|H|$ divides $|G|$. Does the reverse hold — if a number $d$ divides $|G|$, must $G$ have a subgroup of size $d$? Think about whether the theorem actually promises this, then say what it does and doesn't claim.
   *Hint: the theorem rules sizes* out*; it does not promise every allowed size shows up. The converse is a separate, harder question — and the answer is not always yes.*

## Recap

The order of a group, $|G|$, is just how many elements it has, and Lagrange's theorem says the order of any subgroup must divide it. The reason is pure counting: a subgroup chops its parent group into equal-sized, non-overlapping slices called cosets, so the slice size has to go evenly into the whole. That single fact lets you reject impossible subgroups on sight, and it forces the order of every element to divide the order of its group. Next we'll lean on this counting power to start pinning down exactly which groups of a given size can even exist.
