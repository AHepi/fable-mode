---
title: Subgroups
course: abstract-algebra
order: 7
summary: Sometimes a group hides smaller groups inside it — and finding them reveals its structure.
estimatedMinutes: 18
objectives:
  - Define a subgroup and state the three-condition subgroup test
  - Apply the subgroup test to decide whether a given subset is a subgroup
  - Identify the subgroups of $D_3$ and of $\mathbb{Z}_6$
  - Give an example of a subset that fails the test and name which condition it breaks
prerequisites: [06-symmetries-of-a-triangle]
---

There is a house inside a city — a smaller, self-contained thing living inside a larger one. You can describe the city without ever mentioning the house, but the house is real, it has its own rooms, and once you notice it you can't unsee it.

Groups are like that. The triangle's six symmetries — the group $D_3$ you met in module 06 — form a group under composition (set + operation + four rules; module 04). But inside $D_3$, three of those six symmetries close up on themselves, keep the identity, include their own inverses, and form a group all on their own. A group living inside a group. That is the idea this module owns: the **subgroup**.

## Intuition: a group-inside-a-group

Take $D_3 = \{e, r, r^2, s, rs, r^2s\}$, the six symmetries of the equilateral triangle from module 06. Recall: $e$ is the identity (do nothing); $r$ is a $120^\circ$ rotation; $r^2$ is a $240^\circ$ rotation; $s$, $rs$, $r^2s$ are the three reflections. The operation is composition — do one move, then the other.

Now zoom in on just the three rotations: $\{e, r, r^2\}$. Ask: can these three form a group on their own, using the same composition operation?

- **Closure:** $r * r = r^2$, $r * r^2 = r^3 = e$, $r^2 * r^2 = r^4 = r$. Every combination of rotations lands back in $\{e, r, r^2\}$. The set doesn't escape.
- **Associativity:** Composition of symmetries is always associative (established in module 06), so it stays associative on this smaller set too.
- **Identity:** $e$ is in the set, and $e * r = r * e = r$. Check.
- **Inverses:** $r^{-1} = r^2$ (because $r * r^2 = e$), and $r^2$ is in the set. $(r^2)^{-1} = r$, also in the set. $e^{-1} = e$. Every element has its inverse inside the set. Check.

All four axioms hold. The three rotations form a group — a smaller group sitting inside $D_3$.

That is a subgroup.

Now consider the three reflections alone: $\{s, rs, r^2s\}$. Closure already fails: $s * rs = r^2$ (you can read this off the $D_3$ Cayley table from module 06), and $r^2$ is not in $\{s, rs, r^2s\}$. The reflections escape the set the moment you compose two of them. They do not form a subgroup.

One set passes, one fails. The difference is closure — and two other conditions that pin down what "living inside" really means.

## Definition (Subgroup)

Let $(G, *)$ be a group — a set $G$ with an operation $*$ satisfying the four axioms (closure, associativity, identity, inverses; module 04). A subset $H \subseteq G$ is a **subgroup** of $G$, written $H \leq G$, if $H$ is itself a group under the same operation $*$.

Equivalently, $H \leq G$ if and only if:

1. **Closed:** for every $a, b \in H$, the result $a * b$ is also in $H$.
2. **Identity:** the identity element $e$ of $G$ is in $H$.
3. **Inverses:** for every $a \in H$, the inverse $a^{-1}$ is also in $H$.

*(Associativity is automatic: if $*$ is associative on all of $G$, it stays associative on any subset. So you never need to check it separately.)*

This three-condition list is the **subgroup test**.

### The bridge from definition to picture

Read each condition against the group-inside-a-group picture. "Closed" means: combining two elements from $H$ keeps you inside $H$ — the operation never pushes you out into the larger group. "Identity present" means: $H$ has its own do-nothing element — without $e$, the subset can't be a group at all. "Inverses present" means: every move in $H$ has an undo inside $H$ — you don't have to reach outside to reverse a step.

If any condition fails, the subset is not a group on its own; it borrows something essential from the larger group and cannot stand alone.

---

**Check yourself**

Is $\{e\}$ — the set containing just the identity — a subgroup of any group $G$?

<details><summary>Show answer</summary>

Yes. Run the test: $e * e = e$, so it's closed. The identity $e$ is present. $e^{-1} = e$, which is in the set. All three conditions hold. $\{e\}$ is always a subgroup of any group — called the **trivial subgroup**. (The whole group $G$ is also always a subgroup of itself: run the test and all three conditions hold trivially. These two — $\{e\}$ and $G$ itself — are the trivial subgroups every group contains.)

</details>

---

## Worked examples

### Example 1: Even integers inside $(\mathbb{Z}, +)$

The integers $\mathbb{Z}$ under addition form an infinite group (module 04). The operation is ordinary addition; the identity is $0$; the inverse of $n$ is $-n$.

Let $H = \{\ldots, -4, -2, 0, 2, 4, \ldots\}$ — the even integers.

**Test:**

1. **Closed?** The sum of two even integers is even. (If $a = 2m$ and $b = 2n$, then $a + b = 2(m+n)$.) Yes.
2. **Identity?** $0$ is even; $0 \in H$. Yes.
3. **Inverses?** The inverse of $2m$ under addition is $-2m = 2(-m)$, which is also even. Yes.

**Verdict:** $H \leq \mathbb{Z}$. The even integers are a subgroup.

Now ask about the **odd integers**: $\{\ldots, -3, -1, 1, 3, \ldots\}$.

1. **Closed?** $1 + 1 = 2$, which is even — not in the set of odd integers. Fails immediately.

One failure is enough. The odd integers are not a subgroup of $(\mathbb{Z}, +)$.

### Example 2: The rotations inside $D_3$

We worked this out in the intuition section, but let's write it up cleanly with the test in hand.

Let $H = \{e, r, r^2\} \subseteq D_3$, using composition $*$.

Here is the Cayley table restricted to $H$:

$$
\begin{array}{c|ccc}
* & e & r & r^2 \\
\hline
e & e & r & r^2 \\
r & r & r^2 & e \\
r^2 & r^2 & e & r \\
\end{array}
$$

Every entry in the table belongs to $\{e, r, r^2\}$ — the set is closed. The identity $e$ appears. And you can read off inverses: $r * r^2 = e$, so $r^{-1} = r^2$ and $(r^2)^{-1} = r$; $e^{-1} = e$.

**Verdict:** $H = \{e, r, r^2\} \leq D_3$.

This is the "rotation subgroup" of $D_3$. It has three elements; the full group has six. Notice that $3$ divides $6$ — that relationship between subgroup size and group size is not an accident. You'll see exactly why in module 09 (Lagrange's theorem).

### Example 3: A single reflection fails

Consider $K = \{e, s\} \subseteq D_3$.

1. **Closed?** $s * s = e$ (reflecting twice returns to the start). $e * s = s$. $s * e = s$. $e * e = e$. Every result lands in $K$. Yes.
2. **Identity?** $e \in K$. Yes.
3. **Inverses?** $s^{-1} = s$ (because $s * s = e$), and $s \in K$. $e^{-1} = e$. Yes.

**Verdict:** $K = \{e, s\} \leq D_3$. Each of the three reflections, paired with the identity, forms a subgroup of size 2.

What about $\{s, rs\}$ — two reflections, no identity?

1. **Identity?** $e \notin \{s, rs\}$. Fails at condition 2.

No need to check further. A subset without the identity cannot be a group.

---

**Check yourself**

In $\mathbb{Z}_6$ (the 6-hour clock, where the operation is addition mod 6 and the identity is $0$), is $H = \{0, 2, 4\}$ a subgroup?

<details><summary>Show answer</summary>

Run the test.

**Closed?** Check all sums mod 6: $0+2=2$, $0+4=4$, $2+2=4$, $2+4=6=0$, $4+4=8=2$, and $0+0=0$. Every result is in $\{0, 2, 4\}$. Yes.

**Identity?** $0 \in \{0,2,4\}$. Yes.

**Inverses?** The inverse of $a$ in $\mathbb{Z}_6$ is $6-a$ (recall from module 04: the inverse of $a$ in $\mathbb{Z}_n$ is $n - a$). So: $-0 = 0$, $-2 = 4$, $-4 = 2$. All inverses land in $\{0, 2, 4\}$. Yes.

**Verdict:** $\{0, 2, 4\} \leq \mathbb{Z}_6$. This is the "even" subgroup inside the 6-clock — the same idea as the even integers, now wrapped onto a finite circle.

</details>

---

## A nested picture

Here is a nesting diagram for $D_3$. Each oval is a subgroup; smaller ovals sit inside larger ones.

```
┌─────────────────────────────────────┐
│              D₃                     │
│  { e, r, r², s, rs, r²s }           │
│                                     │
│  ┌───────────────┐  ┌───┐  ┌───┐   │
│  │  { e, r, r² } │  │{e,│  │{e,│   │
│  │  (rotations)  │  │s} │  │rs}│   │
│  └───────────────┘  └───┘  └───┘   │
│                                     │
│         ┌───┐                       │
│         │{e}│  (trivial)            │
│         └───┘                       │
└─────────────────────────────────────┘
```

Every group contains two trivial subgroups: the single-element set $\{e\}$ at the bottom, and the whole group at the top. The interesting subgroups live in between. For $D_3$: the rotation subgroup $\{e, r, r^2\}$ (size 3), and the three "flip-plus-identity" subgroups $\{e, s\}$, $\{e, rs\}$, $\{e, r^2s\}$ (each size 2). Every subgroup's size divides 6 — that pattern waits for its explanation in module 09.

---

**Check yourself**

In $\mathbb{Z}_4$ (the 4-clock), the elements are $\{0, 1, 2, 3\}$ with addition mod 4. Is $H = \{0, 2\}$ a subgroup? Is $K = \{1, 3\}$?

<details><summary>Show answer</summary>

**$H = \{0, 2\}$:**
- Closed? $2 + 2 = 4 = 0 \in H$. $0 + 2 = 2$. $0 + 0 = 0$. Yes.
- Identity? $0 \in H$. Yes.
- Inverses? $-0 = 0$, $-2 = 2$ (since $2 + 2 = 4 = 0$). Yes.
$H \leq \mathbb{Z}_4$. ✓

**$K = \{1, 3\}$:**
- Identity? $0 \notin K$. Fails immediately.
$K$ is not a subgroup.

Notice the asymmetry: you can drop the identity from a set and it instantly disqualifies. The identity is not optional equipment for a group.

</details>

---

## Exercises

**1.** Let $G = (\mathbb{Z}, +)$ (integers under addition). Which of the following subsets are subgroups? For each, either verify all three conditions or name the first one that fails.

(a) $H = \{0\}$ &nbsp;&nbsp;&nbsp; (b) $H = \{n \in \mathbb{Z} : n \text{ is a multiple of } 3\}$ &nbsp;&nbsp;&nbsp; (c) $H = \{1, 2, 3\}$

<details><summary>Show solution</summary>

**(a) $H = \{0\}$:**
- Closed? $0 + 0 = 0 \in H$. Yes.
- Identity? $0 \in H$. Yes.
- Inverses? $-0 = 0 \in H$. Yes.
$H \leq \mathbb{Z}$. (The trivial subgroup.)

**(b) $H = \{\ldots, -6, -3, 0, 3, 6, \ldots\}$ (multiples of 3):**
- Closed? The sum of two multiples of 3 is a multiple of 3: $(3m) + (3n) = 3(m+n)$. Yes.
- Identity? $0 = 3 \cdot 0$ is a multiple of 3. Yes.
- Inverses? The inverse of $3m$ is $-3m = 3(-m)$, a multiple of 3. Yes.
$H \leq \mathbb{Z}$. The multiples of any integer form a subgroup of $(\mathbb{Z}, +)$.

**(c) $H = \{1, 2, 3\}$:**
- Identity? $0 \notin H$. Fails.
Not a subgroup. (Also fails closure: $2 + 3 = 5 \notin H$.)

</details>

---

**2.** In $\mathbb{Z}_8$ (the 8-clock, operation $+$ mod 8), is $H = \{0, 4\}$ a subgroup? Is $K = \{0, 2, 4, 6\}$?

<details><summary>Show solution</summary>

**$H = \{0, 4\}$:**
- Closed? $4 + 4 = 8 = 0$; $0 + 4 = 4$; $0 + 0 = 0$. All results in $H$. Yes.
- Identity? $0 \in H$. Yes.
- Inverses? $-0 = 0$; $-4 = 4$ (since $4 + 4 = 8 \equiv 0$). Yes.
$H \leq \mathbb{Z}_8$.

**$K = \{0, 2, 4, 6\}$:**
- Closed? Adding any two even numbers mod 8 gives an even number. $2+2=4$, $2+4=6$, $2+6=8=0$, $4+4=0$, $4+6=10=2$, $6+6=12=4$. All results in $K$. Yes.
- Identity? $0 \in K$. Yes.
- Inverses? $-2 = 6$, $-4 = 4$, $-6 = 2$, $-0 = 0$. All inverses in $K$. Yes.
$K \leq \mathbb{Z}_8$.

Notice $H \leq K \leq \mathbb{Z}_8$ — subgroups can nest. The sizes are $2$, $4$, $8$: each divides the next.

</details>

---

**3.** Consider $D_3$ with its six elements $\{e, r, r^2, s, rs, r^2s\}$. Is $\{e, r, s\}$ a subgroup?

<details><summary>Show solution</summary>

Test closure. In $D_3$, composing $r$ and $s$ (reading right to left: first $s$, then $r$) gives the element $rs$ — a reflection distinct from $s$. Reading off the Cayley table from module 06: the $r$-row, $s$-column entry is $rs$. Since $rs \notin \{e, r, s\}$, the set escapes immediately.

Closure fails. $\{e, r, s\}$ is not a subgroup.

A tempting wrong answer is to assume that any three elements including $e$ form a subgroup. They don't — you must check that composing any two elements stays inside the set.

</details>

---

**4.** True or false: if $H$ is a subgroup of $G$ and $K$ is a subgroup of $H$, then $K$ is a subgroup of $G$.

<details><summary>Show solution</summary>

True. Think about it: $K \subseteq H \subseteq G$, so $K$ is a subset of $G$. The operation on $G$ restricts to the same operation on $H$ and on $K$. Since $K$ satisfies the three conditions inside $H$ (closure, identity, inverses), it satisfies them inside $G$ too — nothing about the conditions depends on the *ambient* group, only on what happens within $K$.

This means subgroups can nest arbitrarily deep: $K \leq H \leq G$.

</details>

---

**5. (Stretch)** Let $G = (\mathbb{Z}_{12}, +)$, the 12-clock. List all subgroups of $G$.

*(Hint: try $\{0\}$, $\{0,6\}$, $\{0,4,8\}$, $\{0,3,6,9\}$, $\{0,2,4,6,8,10\}$, and $\mathbb{Z}_{12}$ itself. For each, what is the size? What does each size divide?)*

<details><summary>Show solution</summary>

The subgroups of $\mathbb{Z}_{12}$ are exactly the sets of multiples of a divisor of $12$.

| Divisor $d$ of 12 | Subgroup | Size |
|---|---|---|
| 12 | $\{0\}$ | 1 |
| 6 | $\{0, 6\}$ | 2 |
| 4 | $\{0, 4, 8\}$ | 3 |
| 3 | $\{0, 3, 6, 9\}$ | 4 |
| 2 | $\{0, 2, 4, 6, 8, 10\}$ | 6 |
| 1 | $\mathbb{Z}_{12}$ | 12 |

Notice: the sizes are $1, 2, 3, 4, 6, 12$ — precisely the divisors of $12$. Every subgroup's size divides the group's size. That is Lagrange's theorem (module 09), and it tells you exactly which subgroup sizes are possible without constructing each one by hand.

Verifying each with the subgroup test is a good exercise — pick one (say $\{0, 3, 6, 9\}$) and check all three conditions. Closure: $3+3=6$, $3+6=9$, $3+9=12=0$, $6+6=0$, $6+9=15=3$, $9+9=18=6$. All stay in the set. Identity: $0$ is there. Inverses: $-3=9$, $-6=6$, $-9=3$, $-0=0$. All present.

</details>

---

## Recap

A **subgroup** is a subset of a group that forms a group on its own under the same operation. To check: three conditions — the set is closed (combining two elements stays inside), the identity belongs to the set, and every element's inverse belongs to the set. Associativity is free, because it already holds for the whole group.

Inside $D_3$ live the rotation subgroup $\{e, r, r^2\}$ and three single-reflection subgroups $\{e, s\}$, $\{e, rs\}$, $\{e, r^2s\}$. Inside $\mathbb{Z}_6$ lives $\{0, 2, 4\}$. Every subgroup size divides the group size: $3 \mid 6$, $2 \mid 6$, $1 \mid 6$. That pattern has held in every example — the house is always a whole fraction of the city, never a fractional room. The question is why it cannot fail. The answer requires knowing not just that subgroups exist, but how they are built.
