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
prerequisites: [04-what-is-a-group, 06-symmetries-of-a-triangle]
---

Set a clock to even hours only — 0, 2, 4, 6, 8, 10 — and add as usual. Two evens make an even; you never once land on an odd number. The little world of even hours sits *inside* the full twelve-hour clock, closed up and self-contained, running its own arithmetic without ever needing the odd numbers at all.

A group can shelter smaller groups inside itself, complete and self-sufficient, like a room inside a house. Find those rooms and you start to see the floor plan — the hidden structure that makes one group different from another. We have a name for such a room: a **subgroup**.

You already met $\mathbb{Z}_6$ — the integers $\{0,1,2,3,4,5\}$ added mod $6$ — and you met $D_3$, the six symmetries of an equilateral triangle. Each is a group: it has an identity, every element has an inverse, and combining two elements always lands you back inside the set.

Now grab a handful of elements from one of them — say $\{0,2,4\}$ from $\mathbb{Z}_6$ — and ask a simple question: *does this handful form a group all on its own, using the same operation?* If it does, it is a subgroup. If it doesn't, it's just a random subset with no structure of its own.

For the handful to stand on its own as a group, it must pass the four-axiom check from module 04 — closure, associativity, identity, inverses — but two of those four take care of themselves here, leaving only three things to verify:

- The identity has to be present.
- Combining two elements of the handful must keep you *inside* the handful. (Step outside and the handful isn't self-contained.) This is **closure**.
- Every element's inverse — its "undo" — must also be in the handful.

Associativity comes for free: if the operation was associative on the whole group, it stays associative on any piece of it. So we never have to recheck that one. The three bullets above are the entire test.

## Definition (Subgroup)

Let $G$ be a group with operation $*$, and let $H$ be a subset of $G$, written $H \subseteq G$. Then $H$ is a **subgroup** of $G$ if $H$ is itself a group under the same operation $*$. We write $H \leq G$.

Concretely, $H \leq G$ exactly when all three hold:

1. **Identity.** The identity element $e$ of $G$ lies in $H$.
2. **Closure.** For all $a, b \in H$, the combination $a * b$ lies in $H$.
3. **Inverses.** For every $a \in H$, its inverse $a^{-1}$ lies in $H$.

These three conditions together are called the **subgroup test**. (Associativity is inherited from $G$ and need not be checked.)

Every group $G$ has two subgroups you get for free: the whole group $G$ itself, and the one-element set $\{e\}$ containing only the identity. These are the **trivial subgroups**. The interesting question is always whether there's anything *between* them.

## Worked example

**Problem.** Show that $H = \{0, 2, 4\}$ is a subgroup of $\mathbb{Z}_6$ (addition mod $6$).

**Solution.** The identity of $\mathbb{Z}_6$ is $0$, and $0 \in H$, so condition 1 holds.

For closure, add every pair within $H$ and reduce mod $6$:

$$
\begin{aligned}
2 + 2 &= 4, & 2 + 4 &= 6 \equiv 0, & 4 + 4 &= 8 \equiv 2.
\end{aligned}
$$

Each sum — $4$, $0$, $2$ — lands back in $H$, so condition 2 holds.

For inverses, each element must have an "undo" inside $H$: the inverse of $a$ is the element you add to reach $0$. Here $0$ is its own inverse, $2 + 4 = 0$ so $2$ and $4$ undo each other, and both $2$ and $4$ are in $H$. Condition 3 holds.

All three conditions pass, so $H = \{0,2,4\} \leq \mathbb{Z}_6$. (This same set turns up again in module 08, where we *grow* it from the single element $2$ rather than testing it whole.) Notice its size: $|H| = 3$, while $|\mathbb{Z}_6| = 6$. Keep that pair of numbers in view — $3$ and $6$ — we'll come back to it.

## Check yourself

Is $\{0, 3\}$ a subgroup of $\mathbb{Z}_6$?

<details><summary>Show answer</summary>

Yes. The identity $0$ is present. For closure: $0+3=3$, $3+3=6 \equiv 0$, and both results ($3$ and $0$) are in the set. For inverses: $0$ is its own inverse, and $3+3=0$ so $3$ is its own inverse too. All three conditions hold, so $\{0,3\} \leq \mathbb{Z}_6$. Its size is $|\{0,3\}| = 2$.

</details>

## A subset that fails the test

Not every subset is a subgroup, and seeing one break is as instructive as seeing one work. Take $\{0, 2, 3\} \subseteq \mathbb{Z}_6$. The identity $0$ is there, so condition 1 is fine. But check closure: $2 + 3 = 5$, and $5 \notin \{0,2,3\}$. The sum escaped the set. Closure fails, so $\{0,2,3\}$ is **not** a subgroup — no matter that it contained the identity. One escape is enough to disqualify it.

The lesson: the identity being present is necessary, not sufficient. You must actually check that nothing leaks out.

## A subgroup inside the triangle

Subgroups aren't a numbers-only phenomenon. Recall $D_3$ from module 06, the six symmetries of an equilateral triangle: the identity $e$, two rotations $r$ (by $120^\circ$) and $r^2$ (by $240^\circ$), and three reflections (flips). Composition of symmetries is the operation.

Look at just the rotations: $R = \{e, r, r^2\}$. Do them in succession and you only ever get another rotation — spinning then spinning again is still a spin. Concretely, $r * r = r^2$, and $r^2 * r = r^3 = e$ (three turns of $120^\circ$ bring the triangle home). The identity $e$ is present; composing any two rotations gives a rotation in $R$; and each rotation's inverse is a rotation ($r$ and $r^2$ undo each other, $e$ undoes itself). All three conditions hold, so

$$
R = \{e, r, r^2\} \leq D_3.
$$

Here $|R| = 3$ and $|D_3| = 6$. There's that $3$-and-$6$ pattern again.

## Check yourself

In $D_3$, is $\{e, s\}$ a subgroup, where $s$ is a single reflection (a flip)?

<details><summary>Show answer</summary>

Yes. A flip done twice returns the triangle to its starting position, so $s * s = e$. The identity $e$ is present; composing the two elements stays inside ($e * s = s$, $s * s = e$, both in the set); and $s$ is its own inverse while $e$ is its own inverse. All three conditions hold, so $\{e, s\} \leq D_3$, with size $|\{e,s\}| = 2$.

(A single reflection always pairs with the identity to make a subgroup of size $2$, because doing any flip twice undoes it.)

</details>

## The sizes are trying to tell us something

Line up every subgroup we've found and write down its size next to the size of the group it lives in:

| Subgroup | Group | $\lvert H\rvert$ | $\lvert G\rvert$ |
|---|---|---|---|
| $\{0,2,4\}$ | $\mathbb{Z}_6$ | $3$ | $6$ |
| $\{0,3\}$ | $\mathbb{Z}_6$ | $2$ | $6$ |
| $\{e,r,r^2\}$ | $D_3$ | $3$ | $6$ |
| $\{e,s\}$ | $D_3$ | $2$ | $6$ |

The subgroup sizes are $3, 2, 3, 2$. The group sizes are all $6$. Every subgroup size — $2$ and $3$ — divides $6$ evenly. We never once found a subgroup of size $4$ or $5$ sitting inside a group of size $6$, and that is not an accident you got lucky with. There's a theorem coming (module 09, Lagrange) that says the size of a subgroup *must* divide the size of the group. For now, just notice the pattern and let it sit: subgroup sizes seem to be sharply constrained, not free for the taking.

## Exercises

**1. (mechanical)** Is $\{0, 4\}$ a subgroup of $\mathbb{Z}_8$ (addition mod $8$)?

<details><summary>Show solution</summary>

No. The identity $0$ is present, and $4 + 4 = 8 \equiv 0$, so closure and inverses look fine *among these two elements*. But wait — let's confirm carefully. $0+0=0$, $0+4=4$, $4+4=0$: every result lands in $\{0,4\}$, and each element is its own inverse ($4+4=0$). So in fact all three conditions **do** hold, and $\{0,4\} \leq \mathbb{Z}_8$, with size $2$. (The tempting trap is to assume "only two elements" must fail; size $2$ subgroups are perfectly legitimate whenever the non-identity element is its own inverse.)

</details>

**2. (mechanical)** Show that $\{0, 3, 6\}$ is a subgroup of $\mathbb{Z}_9$ (addition mod $9$), and state its size.

<details><summary>Show solution</summary>

Identity: $0 \in \{0,3,6\}$. Closure: $3+3=6$, $3+6=9\equiv 0$, $6+6=12\equiv 3$ — all results land in the set. Inverses: $0$ undoes itself, $3+6=0$ so $3$ and $6$ undo each other, both present. All three conditions hold, so $\{0,3,6\} \leq \mathbb{Z}_9$, with size $3$. (Note $3$ divides $9$ — the size pattern again.)

</details>

**3. (conceptual)** The subset $\{0, 2, 4, 5\} \subseteq \mathbb{Z}_6$ contains the identity. Explain why it is nonetheless not a subgroup.

<details><summary>Show solution</summary>

Containing the identity is necessary but not sufficient — you must also check closure. Here $2 + 5 = 7 \equiv 1$, and $1 \notin \{0,2,4,5\}$. The sum escaped the set, so closure fails and the subset is not a subgroup. (You could stop at the first escape; that one failure disqualifies it.) This is the same trap as $\{0,2,3\}$ earlier: the identity is present, but the set leaks.

</details>

**4. (conceptual)** A friend claims that $\{1, 2\}$ is a subgroup of $\mathbb{Z}_6$ because it's "small and simple." What is the first condition you should check, and does it pass?

<details><summary>Show solution</summary>

Check for the identity first — it's the quickest condition to test. The identity of $\mathbb{Z}_6$ is $0$, and $0 \notin \{1,2\}$. Condition 1 fails immediately, so $\{1,2\}$ is not a subgroup, and there's no need to check closure or inverses. "Small and simple" has nothing to do with it; a subgroup must contain the group's identity, full stop.

</details>

**5. (conceptual)** Using only the sizes, explain why a group of size $5$ can have no subgroup of size $2$, $3$, or $4$ — only the trivial subgroups of size $1$ and $5$.

<details><summary>Show solution</summary>

Notice from the table in this module that every subgroup size divided the group size. A group of size $5$ would therefore only admit subgroups whose sizes divide $5$. The only divisors of $5$ are $1$ and $5$, since $5$ is prime — so the only possible subgroup sizes are $1$ (the trivial subgroup $\{e\}$) and $5$ (the whole group). Sizes $2$, $3$, $4$ don't divide $5$, so no subgroup can have them. (This is exactly the kind of conclusion Lagrange's theorem will make airtight in module 09 — here you're reading it off the pattern.)

</details>

## Recap

A subgroup is a group hiding inside a group: a subset closed under the operation, containing the identity, and holding every element's inverse — the three-part subgroup test, with associativity inherited for free. We found real subgroups in $\mathbb{Z}_6$ (like $\{0,2,4\}$) and in $D_3$ (the rotations $\{e,r,r^2\}$), and we watched a leaky subset fail closure. Most of all, we noticed that subgroup sizes never wandered freely — they always divided the size of the whole group. That pattern is the door into the next two modules: cyclic groups, which build subgroups from a single element, and Lagrange's theorem, which explains exactly why the sizes line up.
</content>
</invoke>
