---
title: Counting Tells the Truth — Lagrange's Theorem
course: abstract-algebra
order: 9
summary: A subgroup's size cannot be just anything — it must divide the size of the whole group, and counting equal-sized slices shows why.
estimatedMinutes: 20
objectives:
  - State Lagrange's theorem
  - Compute the cosets of a subgroup in a small group and show they are equal-sized and non-overlapping
  - Use Lagrange's theorem to rule out impossible subgroup sizes
  - Explain in plain words why the size of a subgroup must divide the size of the group
prerequisites: [08-cyclic-groups-and-generators]
---

Suppose I tell you a group has twelve elements, and I ask: could it hide a subgroup with exactly five elements inside it? You don't yet have a way to answer. You could go hunting — try to build a five-element subgroup, check the rules, see if it holds together. That's slow, and a failed hunt proves nothing; maybe you just didn't look hard enough.

There is a faster truth, and it comes from counting. The size of a subgroup is not free to be whatever it likes. It is locked to the size of the group by a single hard rule, and once you know the rule you can rule out the impossible sizes without building anything. Five cannot be the size of a subgroup of a twelve-element group. Not "probably not" — cannot. This module is about why.

First, two words we've been using, restated so they're fresh. A **group** is a collection of elements with one operation — a way to combine any two of them and get a third still in the collection (module 04); we write that operation `$*$`. A **subgroup** is a smaller collection sitting inside the group that is itself a group under the same operation (module 07): it contains the identity `$e$`, and it's closed — combine two members and you stay inside it. And the **order** of a group or subgroup is just its size, the number of elements it holds (module 08). We write the order of a group `$G$` as `$|G|$`, and the order of a subgroup `$H$` as `$|H|$`.

The claim, stated plainly: **`$|H|$` always divides `$|G|$`** — the subgroup's size goes into the group's size a whole number of times, with nothing left over.

---

## Shifting a subgroup around

To see why, we need one new idea, and it's a physical one. Picture the elements of a group as a chocolate bar — a finite slab of squares, one square per element. A subgroup is a clean block of those squares: the identity `$e$` and everything it's closed with. The question is how the *rest* of the bar relates to that block.

Here is the move. Take the subgroup `$H$`, and take some element `$g$` from the group — maybe one outside `$H$`. Now combine `$g$` with *every* element of `$H$`, one at a time. You get a new batch of elements. Slide the whole block of `$H$` over by `$g$`, and that's where it lands.

That shifted batch has a name: it's a **coset** of `$H$`. Written `$gH$`, it means "take every element `$h$` in `$H$` and form `$g * h$`."

The point of the chocolate bar is what happens next. These shifted blocks — the cosets — turn out to be equal-sized, they don't overlap, and together they cover the entire bar. A bar that breaks into equal blocks has a size that is a whole-number multiple of the block size. That is Lagrange's theorem in one image. The rest of the module makes each of those three claims real, first with a worked computation you can check by hand, then with the reasoning that nails them down for every group at once.

---

## Worked cosets in a real group

Let's compute the cosets in a group we can see all at once: `$\mathbb{Z}_6$` (the 6-hour clock), with elements `$\{0,1,2,3,4,5\}$` and the operation `$+$` (add and wrap around at 6). Its order is `$|\mathbb{Z}_6| = 6$`.

Inside it sits a subgroup we already know. From module 08, starting at `$2$` and adding it to itself gives `$2, 4, 0$` and then loops — so `$H = \{0, 2, 4\}$`, the even numbers, is a subgroup. Its order is `$|H| = 3$`. (You can confirm it's closed: any two evens add to an even, mod 6.)

Now slide `$H$` around. Because the operation here is written `$+$`, the coset `$gH$` is written `$g + H$`, meaning "add `$g$` to every element of `$H$`."

**Start with `$g = 0$`.** Adding `$0$` changes nothing:

$$
0 + H = \{0+0,\ 0+2,\ 0+4\} = \{0, 2, 4\}.
$$

That's just `$H$` itself. (A subgroup always contains the identity `$e$`, so `$0 + H$` is `$H$` back again. Every subgroup is one of its own cosets.)

**Now `$g = 1$`.** Add `$1$` to each element:

$$
1 + H = \{1+0,\ 1+2,\ 1+4\} = \{1, 3, 5\}.
$$

The odd numbers. A different block entirely — and notice it has *three* elements, the same as `$H$`.

**Now `$g = 2$`.** Add `$2$` to each:

$$
2 + H = \{2+0,\ 2+2,\ 2+4\} = \{2, 4, 0\} = \{0, 2, 4\}.
$$

Back to the evens. Sliding `$H$` by `$2$` lands on `$H$` again, because `$2$` was already inside `$H$`. Shifting a block by one of its own members doesn't move it anywhere new.

Try `$g = 3$` and you get `$\{3, 5, 1\}$` — the odds again. Every `$g$` you pick gives you one of just **two** distinct cosets:

$$
\{0, 2, 4\} \qquad \text{and} \qquad \{1, 3, 5\}.
$$

Lay them side by side and look at the chocolate bar:

```
the six elements of Z_6, sorted into cosets of H = {0,2,4}:

  coset 0+H :   [ 0 ][ 2 ][ 4 ]      <- the subgroup itself
  coset 1+H :   [ 1 ][ 3 ][ 5 ]      <- H shifted over by 1

  every element appears in exactly one row; both rows have 3 squares
```

Read the three claims straight off the picture. **Equal size:** each row has 3 elements, matching `$|H| = 3$`. **No overlap:** no number appears in both rows — `$0,2,4$` are in the top, `$1,3,5$` in the bottom, and never the twain. **Full cover:** together the rows account for all six elements, leaving none out.

So `$\mathbb{Z}_6$` splits into `$2$` cosets, each of size `$3$`, and `$6 = 3 \times 2$`. The size of the group is the size of the subgroup times the number of cosets. That product is the whole theorem, and it's why `$3$` divides `$6$`.

---

**Check yourself:** In `$\mathbb{Z}_6$`, take the subgroup `$K = \{0, 3\}$` (you can check: `$3 + 3 = 6 = 0$`, so it's closed). What is the coset `$1 + K$`? And how many distinct cosets do you expect `$K$` to have?

<details><summary>Show answer</summary>

`$1 + K = \{1+0,\ 1+3\} = \{1, 4\}$`.

Since `$|K| = 2$` and `$|\mathbb{Z}_6| = 6$`, and the cosets must tile the group into equal blocks of size `$2$`, you expect `$6 \div 2 = 3$` distinct cosets. They are `$\{0,3\}$`, `$\{1,4\}$`, and `$\{2,5\}$` — three blocks of two, covering all six elements with no overlap.

</details>

---

## The theorem, and a careful argument for it

Now the statement, stated once and exactly.

**Theorem (Lagrange).** Let `$G$` be a finite group and `$H$` a subgroup of `$G$`. Then the order of `$H$` divides the order of `$G$`. That is, `$|H|$` divides `$|G|$`.

Before the argument, a word about what comes next, because you may never have read one. What follows is a **proof**: a chain of plain claims, each one you can check, that together force the conclusion to be true — not just true for `$\mathbb{Z}_6$`, but for every finite group at once. There's no trick to spot. Read it as a careful walk: at each step I'll say what I'm claiming and why it holds. The three things we *saw* in the chocolate bar — equal size, no overlap, full cover — are exactly the three things the argument will *establish*.

*Proof.* We sort the elements of `$G$` into cosets of `$H$` and count.

**Step 1 — the cosets cover everything.** Every element `$g$` of `$G$` lands in the coset `$gH$`, because `$gH$` contains `$g * e = g$` (where `$e$` is the identity, which `$H$` always contains). So no element is left out: every element of `$G$` sits in at least one coset. *(This is "full cover.")*

**Step 2 — each coset is the same size as `$H$`.** A coset `$gH$` is formed by combining `$g$` with each element of `$H$`. Could two different members of `$H$`, say `$h_1$` and `$h_2$`, give the same result — could `$g * h_1 = g * h_2$`? If they did, combine both sides with `$g^{-1}$` (the undo of `$g$`, which exists because `$G$` is a group) and you get `$h_1 = h_2$`. So different members of `$H$` give different results: sliding `$H$` over by `$g$` never collapses two squares into one. The coset `$gH$` therefore has exactly as many elements as `$H$` does — `$|H|$` of them. *(This is "equal size.")*

**Step 3 — two cosets are either identical or completely separate.** Suppose two cosets share even a single element — some `$x$` lies in both `$g_1 H$` and `$g_2 H$`. We'll show they must then be the very same coset. Since `$x$` is in `$g_1 H$`, we can write `$x = g_1 * h_1$` for some `$h_1$` in `$H$`; likewise `$x = g_2 * h_2$` for some `$h_2$`. Setting these equal, `$g_1 * h_1 = g_2 * h_2$`. Now take any element of `$g_1 H$`, written `$g_1 * h$`. Using the equation to swap `$g_1$` for an expression in `$g_2$`, a short rearrangement (combining with inverses inside `$H$`, which stay inside `$H$` because `$H$` is closed) rewrites `$g_1 * h$` as `$g_2 * (\text{something in } H)$` — an element of `$g_2 H$`. So everything in `$g_1 H$` is also in `$g_2 H$`, and by the same argument the reverse, making the two cosets identical. The conclusion: two cosets cannot partly overlap. They either coincide exactly or share nothing at all. *(This is "no overlap.")*

**Putting it together.** Steps 1–3 say the cosets carve `$G$` into separate blocks (Step 3) that miss nothing (Step 1) and are each of size `$|H|$` (Step 2). Call the number of distinct blocks `$k$`. Counting the elements of `$G$` one block at a time:

$$
|G| = \underbrace{|H| + |H| + \cdots + |H|}_{k \text{ blocks}} = k \times |H|.
$$

So `$|G|$` is `$|H|$` multiplied by the whole number `$k$` — which is exactly what it means for `$|H|$` to divide `$|G|$`. $\square$

The number `$k$` — how many cosets there are — earns a name in a later course; here, what matters is that it's a whole number, and that whole number is the reason the division comes out even.

---

**Check yourself:** A group `$G$` has `$|G| = 12$`. Could it contain a subgroup of order `$5$`? Of order `$4$`?

<details><summary>Show answer</summary>

Order `$5$`: **no.** By Lagrange, a subgroup's order must divide `$12$`, and `$5$` does not divide `$12$` (it leaves a remainder). No amount of searching could ever find one.

Order `$4$`: **possibly.** `$4$` divides `$12$` (since `$12 = 4 \times 3$`), so Lagrange permits it. Lagrange rules sizes *out*; it does not promise a subgroup of every allowed size exists. It says "if one exists, its size divides 12," not "every divisor occurs."

</details>

---

## Exercises

**1.** (Mechanical) In `$\mathbb{Z}_6$`, the subgroup `$K = \{0, 3\}$` has order `$2$`. List all of its cosets, and confirm they tile `$\mathbb{Z}_6$` into equal, non-overlapping blocks.

<details><summary>Show solution</summary>

Add each element of `$\mathbb{Z}_6$` to `$K$` and collect the distinct results:

$$
\begin{aligned}
0 + K &= \{0, 3\} \\
1 + K &= \{1, 4\} \\
2 + K &= \{2, 5\}
\end{aligned}
$$

(Adding `$3, 4, 5$` just repeats these.) Three distinct cosets, each of size `$2$`, no number appearing twice, covering all of `$\{0,1,2,3,4,5\}$`. And `$6 = 2 \times 3$`: the group size is the subgroup size times the number of cosets.

</details>

---

**2.** (Mechanical) Use Lagrange's theorem to decide which of these are possible orders for a subgroup of a group of order `$10$`: `$1, 2, 3, 4, 5, 10$`.

<details><summary>Show solution</summary>

A subgroup's order must divide `$10$`. The divisors of `$10$` are `$1, 2, 5, 10$`. So `$1, 2, 5, 10$` are possible; `$3$` and `$4$` are ruled out, because neither divides `$10$` evenly (`$10 \div 3$` and `$10 \div 4$` both leave a remainder). Note again: "possible" doesn't guarantee one exists, but `$3$` and `$4$` are flatly impossible.

</details>

---

**3.** (Conceptual) A group has order `$7$`. Which subgroup orders are possible? What does this force about the group's subgroups?

<details><summary>Show solution</summary>

`$7$` is prime: its only divisors are `$1$` and `$7$`. By Lagrange, a subgroup's order must be one of those. The order-`$1$` subgroup is just `$\{e\}$`, the identity element, and the order-`$7$` subgroup is the whole group. So a group of order `$7$` has **no subgroups except the two trivial ones** — nothing genuinely smaller hides inside it. The same reasoning works for any prime order: a group of prime order has no nontrivial subgroups at all. That's a remarkable amount of structure forced by one counting fact.

</details>

---

**4.** (Conceptual) In `$\mathbb{Z}_6$`, why is the coset `$2 + H$` (with `$H = \{0,2,4\}$`) equal to `$H$` rather than a new block? Answer in terms of where `$2$` sits.

<details><summary>Show solution</summary>

`$2$` is already a member of `$H$`. Sliding a subgroup over by one of its own elements doesn't carry it anywhere new — closure means combining `$2$` with each even number gives back even numbers, so `$2 + H = \{2, 4, 0\} = H$`. In general, `$g + H = H$` exactly when `$g$` is inside `$H$`; only an element from *outside* `$H$` produces a fresh, separate coset.

</details>

---

**5.** (Stretch) From module 08, the element `$2$` in `$\mathbb{Z}_6$` generates `$\langle 2 \rangle = \{0, 2, 4\}$`, a subgroup of order `$3$`. Without computing anything new, what does Lagrange tell you about the relationship between the order of an element and the order of the group? Test your guess on the element `$1$`, which has order `$6$`.

<details><summary>Show solution</summary>

The subgroup an element generates has size equal to the element's order (module 08). By Lagrange, that subgroup's order divides the group's order — so **the order of any element divides the order of the group.** For `$2$`: its order is `$3$`, and `$3$` divides `$6$`. ✓ For `$1$`: its order is `$6$` (you add `$1$` six times to return to `$0$`), and `$6$` divides `$6$`. ✓ This is one of Lagrange's sharpest consequences: in a group of order `$n$`, no element can have an order that fails to divide `$n$`.

</details>

---

## Recap

A subgroup cannot be any size it pleases. Sliding the subgroup `$H$` across the group by each element produces its cosets, and those cosets are equal-sized, never overlap, and cover the whole group — so the group breaks into `$k$` equal blocks and `$|G| = k \times |H|$`, which means `$|H|$` divides `$|G|$`. The sharpest consequence: a group of prime order can have no subgroup at all except the trivial two. Every divisor that isn't there tells you something about the shape of what is. Nine modules have been spent watching what lives *inside* a single group. The next question is older and, in its way, more surprising — when are two groups that look completely different actually the same object in different clothes?

---

*Bias screen: examples use clock arithmetic (`$\mathbb{Z}_6$`) and the chocolate-bar image for cosets; no names, cultures, or group identities referenced. Terms group, subgroup, order, operation, identity, inverse/undo, and coset are each glossed or called back at first use. The proof is the only formal block and ends with `$\square$`; all other reasoning is walked in plain words per the highschool level dial.*
