---
title: Subgroups
course: abstract-algebra
order: 7
summary: Sometimes a group hides smaller groups inside it — and finding them reveals its structure.
estimatedMinutes: 18
objectives:
  - Define a subgroup
  - Test whether a subset is a subgroup
  - Find the subgroups of a small group
prerequisites: []
---

## The hook

Look back at the triangle. Among its six symmetries — three turns and three flips — sat three that kept entirely to themselves: the turns $e$, $r$, and $r^2$. Compose two of them and you never once produced a flip. They formed a closed little world inside the larger one, obeying every rule a group obeys, asking nothing of the flips around them.

That is the idea of this whole module. A group can have smaller groups living inside it — self-contained, rule-abiding, complete. Find them, and you have done more than make a list. You have read off the *structure* of the big group: how it is built, what it is made of, where its seams run. The deepest theorems about groups are theorems about which smaller groups they can hold. So before we can prove anything grand, we learn to spot the groups hiding inside groups.

## Intuition

Picture a group $G$ as a country and its elements as cities. The operation tells you how to travel: combine two cities and you land on a third. Now fence off some of the cities into a region $H$. The question is whether $H$ is a country in its own right — whether you could live inside the fence and never need to leave.

What would that take? Three things, and each is just common sense.

First, you need a capital — somewhere to stand still. In group terms, the do-nothing element, the **identity**, has to be inside the fence. A country with no "stay put" option is no country at all.

Second, travel inside the fence must keep you inside the fence. Combine two cities of $H$ and the result had better be another city of $H$, not some city out in the wider country. If combining two locals ever flings you outside, the region leaks — it is not self-contained. This is **closure**.

Third, every trip must be reversible without leaving. For each city in $H$, the move that undoes it — its **inverse** — must also live in $H$. Otherwise you could walk in but never walk back, and a group insists every action can be undone.

A region that passes all three is a country folded inside a country: a **subgroup**. The turns $\{e, r, r^2\}$ pass all three, which is why they felt so self-sufficient. The flips, scattered among them, do not — and we will see exactly where they fail.

## Definition (Subgroup)

Let $G$ be a group. A **subgroup** of $G$ is a subset $H \subseteq G$ that is itself a group under the same operation as $G$.

We write $H \leq G$ to mean "$H$ is a subgroup of $G$."

In particular the identity of $G$ lies in $H$, every product of elements of $H$ lands back in $H$, and every element of $H$ has its inverse in $H$.

## The subgroup test

The definition asks $H$ to "be a group," which sounds like it demands checking all four group rules over again — closure, associativity, identity, inverses. But two of those four come for free, and the saving is the whole point of the test.

Associativity is inherited automatically. The rule $(ab)c = a(bc)$ holds for *all* elements of $G$, so it certainly holds for the handful that happen to sit in $H$. You never re-check it. And the identity, once you confirm it is present, behaves the same inside $H$ as it did outside. That leaves three things genuinely worth checking — and they are exactly the three our country needed.

**The Subgroup Test.** A non-empty subset $H \subseteq G$ is a subgroup of $G$ if and only if all three hold:

1. **Identity.** The identity $e$ of $G$ belongs to $H$.
2. **Closure.** For all $a, b \in H$, the product $ab$ belongs to $H$.
3. **Inverses.** For every $a \in H$, the inverse $a^{-1}$ belongs to $H$.

The phrase **if and only if** carries weight: pass all three and $H$ is guaranteed a subgroup; fail even one and it is guaranteed not to be. So to *disqualify* a subset, you need only catch a single rule breaking — one product that escapes, one element whose inverse has gone missing. That makes the test as handy for ruling candidates out as for letting them in.

## Worked example: subgroups of $\mathbb{Z}_6$

**Problem.** In the group $\mathbb{Z}_6 = \{0, 1, 2, 3, 4, 5\}$ under addition modulo $6$, decide whether $\{0, 3\}$ and $\{0, 2, 4\}$ are subgroups.

**Solution.** The operation is addition that wraps around at $6$, and the identity is $0$. We run each subset through the three checks. Here the inverse of an element $a$ is whatever you add to it to reach $0$; for instance $2 + 4 = 6 \equiv 0$, so $4$ is the inverse of $2$.

*The subset $\{0, 3\}$.* Identity: $0$ is present. Closure: the only sums to check are

$$
0 + 0 = 0, \quad 0 + 3 = 3, \quad 3 + 3 = 6 \equiv 0,
$$

and every result, $0$ or $3$, is back in the set. Inverses: $0$ undoes itself, and $3 + 3 \equiv 0$ means $3$ is its own inverse too. All three checks pass, so $\{0, 3\}$ is a subgroup.

*The subset $\{0, 2, 4\}$.* Identity: $0$ is present. Closure: working modulo $6$,

$$
2 + 2 = 4, \quad 2 + 4 = 6 \equiv 0, \quad 4 + 4 = 8 \equiv 2,
$$

and each sum lands inside $\{0, 2, 4\}$. Inverses: $2$ and $4$ undo each other since $2 + 4 \equiv 0$, and $0$ undoes itself. All three checks pass, so $\{0, 2, 4\}$ is a subgroup as well.

So inside $\mathbb{Z}_6$ we have found a subgroup of size $2$ and a subgroup of size $3$. Hold that thought — those sizes are about to matter.

## Worked example: the rotations inside $D_3$

**Problem.** Show that the three rotations $\{e, r, r^2\}$ form a subgroup of $D_3$.

**Solution.** Recall $D_3$ has six elements and obeys $r^3 = e$, $s^2 = e$, and $sr = r^2 s$. We test the rotation set against the three conditions.

Identity: $e$ is the do-nothing turn, and it is in the set. Closure: composing turns gives turns —

$$
r \cdot r = r^2, \quad r \cdot r^2 = r^3 = e, \quad r^2 \cdot r^2 = r^4 = r,
$$

so no product ever escapes to a flip. Inverses: $e$ is its own inverse, and $r \cdot r^2 = r^3 = e$ shows $r$ and $r^2$ undo each other. All three pass, so $\{e, r, r^2\} \leq D_3$ — a group of order $3$ tucked inside a group of order $6$.

## Worked example: a subset that fails

**Problem.** In $D_3$, is the subset $\{e, s\}$ a subgroup? What about $\{e, r\}$?

**Solution.** Take $\{e, s\}$ first. Identity: $e$ is present. Inverses: $s^2 = e$, so $s$ is its own inverse — fine. Closure: the products are $e \cdot e = e$, $e \cdot s = s$, $s \cdot e = s$, and $s \cdot s = e$, all inside the set. Every check passes, so $\{e, s\}$ *is* a subgroup, of order $2$.

Now $\{e, r\}$. Identity: present. But test closure on $r$ with itself:

$$
r \cdot r = r^2,
$$

and $r^2$ is **not** in the set $\{e, r\}$. The product has escaped. Closure fails, so by the subgroup test $\{e, r\}$ is **not** a subgroup — one broken rule is enough to disqualify it. (To repair it you would have to admit $r^2$, which lands you back at the rotation subgroup $\{e, r, r^2\}$.)

## The two subgroups every group owns

Two subgroups come free with any group $G$, no checking required.

The first is the **whole group** $G$ itself: $G$ is a subset of $G$, and it is a group, so it counts as a subgroup of itself. The second is the **trivial subgroup** $\{e\}$, containing the identity alone. Run it past the test — $e$ is present, $e \cdot e = e$ stays inside, and $e$ is its own inverse — and it passes on all three counts. Every group, however large or wild, contains at least these two. A subgroup that is neither of these is called *proper and nontrivial*, and those are the interesting ones to hunt for.

## A pattern in the sizes

Step back and gather what we found. Inside $\mathbb{Z}_6$, a group of $6$ elements, the subgroups had sizes $1$ (the trivial $\{0\}$), $2$, $3$, and $6$ (the whole group). Inside $D_3$, also a group of $6$, the subgroups we met had sizes $1$, $2$, $3$, and $6$. Notice anything?

Every one of those sizes divides $6$ exactly. No subgroup of size $4$ or $5$ turned up — and it is not for want of looking. There is a hard law lurking here: in a *finite* group, the size of any subgroup must divide the size of the whole group, with nothing left over. That single fact rules out enormous numbers of would-be subgroups before you even test them, and it is one of the most powerful tools in the whole subject. We are not ready to prove it yet — that is the business of a later module. For now, just let the coincidence sit there looking suspicious. In mathematics, a coincidence that clean is almost never a coincidence.

## Exercises

1. **(Mechanical.)** In $\mathbb{Z}_6$, decide whether $\{0, 2\}$ is a subgroup. *Hint: check closure — what is $2 + 2$ modulo $6$, and is it in the set?*

2. **(Mechanical.)** In $\mathbb{Z}_6$, decide whether $\{0, 1, 2, 3\}$ is a subgroup. *Hint: one rule breaks. Try adding $2 + 3$, or ask whether $1$'s inverse is present.*

3. **(Mechanical.)** Verify directly that $\{e, rs\}$ is a subgroup of $D_3$. *Hint: you need the inverse of $rs$ — recall every flip is its own inverse, so $(rs)^2 = e$. Then check closure.*

4. **(Conceptual.)** The subset $\{0, 3\}$ is a subgroup of $\mathbb{Z}_6$, but the subset $\{1, 4\}$ is not — even though both have two elements. Explain which condition $\{1, 4\}$ fails, in a sentence. *Hint: what is the very first thing every subgroup must contain?*

5. **(Conceptual.)** Find *all* the subgroups of $\mathbb{Z}_6$. *Hint: there are four of them; their sizes are $1$, $2$, $3$, and $6$. You have already met three in this module — the fourth is the smallest one.*

6. **(Stretch.)** Argue that the trivial subgroup $\{e\}$ and the whole group $G$ are always *both* subgroups of any group $G$, by running each through the three-part test. *Hint: for $\{e\}$ the only product to check is $e \cdot e$; for $G$ there is nothing new to verify, since $G$ was already a group.*

## Recap

A subgroup is a group living inside a group: a subset that holds the identity, stays closed under the operation, and keeps every inverse to hand — the three conditions of the subgroup test, with associativity riding along for free. We confirmed $\{0,3\}$ and $\{0,2,4\}$ inside $\mathbb{Z}_6$, the rotations $\{e, r, r^2\}$ inside $D_3$, and watched $\{e, r\}$ fail closure and fall out. Every group also owns two subgroups automatically: itself and the lone identity $\{e\}$. And we caught a glimpse of something larger — that subgroup sizes seem forced to divide the size of the whole group. Pinning down *why* is the work ahead.
