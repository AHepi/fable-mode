---
title: A Zoo of Groups
course: abstract-algebra
order: 5
summary: Groups are everywhere once you know the shape — numbers, fractions, roots of unity, and more.
estimatedMinutes: 16
objectives:
  - Identify groups among varied examples
  - Distinguish finite from infinite groups
  - Recognize when an operation is commutative (abelian)
prerequisites: []
---

## The hook

You just spent a whole module assembling the definition of a group: a set, an operation, and four
rules — closure, associativity, an identity, and inverses. It was careful work, and it might have
left you with the suspicion that a group is a rare and delicate thing, something you build in a lab
under glass.

The opposite is true. Groups are weeds. They grow in the cracks of ordinary arithmetic, in the
fractions you learned in grade school, in four little numbers that circle a clock face, in the way a
calendar resets every seven days. Once you know the shape, you cannot stop seeing it. This module is
a walk through the zoo — a parade of wildly different-looking things that are all, underneath, the
same animal.

## Intuition

Here is the trick to spotting a group in the wild. Don't look at the objects. Look at the *doing*.

Forget for a moment what the elements are — numbers, fractions, whatever. Ask four blunt questions
about the operation. Combine two of these things: do you always land back inside the set
(**closure**)? Is there a "do nothing" element that leaves everything alone (an **identity**)? Does
every element have a partner that cancels it back to that do-nothing element (an **inverse**)? And
does regrouping leave the answer untouched (**associativity**)? Four yeses and you have a group, no
matter what the things are made of.

So we go shopping. We'll grab the integers and add them. We'll grab the nonzero fractions and
multiply them. We'll grab four numbers that spin around in a tiny loop. We'll grab the hours on a
clock. Different objects, different operations — and each one passes the four-question test.

Along the way, two new ways to sort our specimens. The first is **size**. Some groups have a
finite herd of elements you could count on your fingers; others run off to infinity. The second is
subtler and worth a name of its own. In some groups the order you combine things never matters —
$3 + 5$ and $5 + 3$ both give $8$. That politeness, that *combine-in-any-order* property, is so
useful and so common that it gets its own word. We define it next.

## Definition (Abelian group)

A group is **abelian** (also called **commutative**) if its operation does not depend on order:
for all elements $a$ and $b$ in the group,

$$
a * b = b * a,
$$

where $*$ denotes the group's operation. A group that fails this — one with at least one pair where
$a * b \neq b * a$ — is called **non-abelian**.

The word honors Niels Henrik Abel, a Norwegian mathematician. Every group in this module is abelian;
the first non-abelian group waits for you in the next one.

## Definition (Order of a group)

The **order** of a group is the number of elements in it — its size. A group with finitely many
elements is a **finite group**; a group with infinitely many is an **infinite group**.

## The zoo

Four exhibits. For each, we name the set, name the operation, and check the shape.

### Example (The integers under addition)

**Problem.** Is $\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}$ a group under ordinary addition?

**Solution.** Run the four questions on $+$.

- **Closure.** Add two integers and you get an integer. $\;(-3) + 7 = 4$. Yes.
- **Associativity.** Regrouping never changes a sum: $(2 + 3) + 4 = 2 + (3 + 4)$. Yes.
- **Identity.** Adding $0$ changes nothing: $\;n + 0 = n$. The identity is $0$.
- **Inverses.** Every integer $n$ has $-n$, and $n + (-n) = 0$. Yes.

So $\mathbb{Z}$ under $+$ is a group. It is **infinite** — the integers never run out. And it is
**abelian**, since $a + b = b + a$ always.

This is the group to keep as your mental home base: when a new example confuses you, ask "how is this
like the integers?"

### Example (The nonzero rationals under multiplication)

**Problem.** A *rational* is a fraction $\tfrac{p}{q}$ of integers. Let $\mathbb{Q}^{\times}$ be the
set of all rationals *except* $0$. Is $\mathbb{Q}^{\times}$ a group under multiplication?

**Solution.** Notice first *why* we threw out zero — it will matter at the inverse step.

- **Closure.** A nonzero fraction times a nonzero fraction is a nonzero fraction:
  $\tfrac{2}{3} \times \tfrac{5}{7} = \tfrac{10}{21}$. Yes.
- **Associativity.** Multiplication regroups freely. Yes.
- **Identity.** Multiplying by $1$ changes nothing. The identity is $1$.
- **Inverses.** Every nonzero fraction $\tfrac{p}{q}$ has the flipped fraction $\tfrac{q}{p}$, and
  $\tfrac{p}{q} \times \tfrac{q}{p} = 1$. This is where the missing zero earns its keep: $0$ has no
  reciprocal — you cannot divide by it — so leaving it out is exactly what lets every remaining
  element have an inverse.

So $\mathbb{Q}^{\times}$ under $\times$ is a group: **infinite**, and **abelian** since order never
matters in multiplication. Same shape as the integers, completely different costume.

### Example (Four numbers in a loop)

This exhibit needs one small new creature: a number $i$ whose square is $-1$. No ordinary number does
that — any real number squared comes out positive or zero. So mathematicians simply *named* such a
number into existence and built a perfectly consistent arithmetic around it:

$$
i^2 = -1.
$$

Take that on faith for now; it behaves like any other number under multiplication. Watch what happens
when you keep multiplying $i$ by itself:

$$
i^1 = i, \qquad i^2 = -1, \qquad i^3 = i^2 \cdot i = -i, \qquad i^4 = i^2 \cdot i^2 = (-1)(-1) = 1.
$$

The powers of $i$ cycle through exactly four values and then loop: $i, -1, -i, 1, i, -1, \ldots$,
forever. So the natural set to study is those four values.

**Problem.** Is $\{1,\, i,\, -1,\, -i\}$ a group under multiplication?

**Solution.** The honest way to check a small set is to build its whole operation table and read off
the answers. Each cell holds the product of its row label times its column label.

| $\times$ | $1$  | $i$  | $-1$ | $-i$ |
|:--------:|:----:|:----:|:----:|:----:|
| **$1$**  | $1$  | $i$  | $-1$ | $-i$ |
| **$i$**  | $i$  | $-1$ | $-i$ | $1$  |
| **$-1$** | $-1$ | $-i$ | $1$  | $i$  |
| **$-i$** | $-i$ | $1$  | $i$  | $-1$ |

This is a **Cayley table** — a complete map of the operation. Now read the four questions straight
off it.

- **Closure.** Every cell holds one of the four original numbers; the table never spills outside the
  set. Yes.
- **Identity.** The row and column for $1$ just copy the labels — multiplying by $1$ changes nothing.
  The identity is $1$.
- **Inverses.** A $1$ appears in every row, so every element has a partner that multiplies back to the
  identity. (Here $i$ and $-i$ pair up; $-1$ is its own partner.) Yes.
- **Associativity.** Multiplication of numbers is associative, so we inherit it for free.

So $\{1, i, -1, -i\}$ under $\times$ is a group: **finite**, with **order $4$**. It is **abelian** —
and you can *see* the abelian-ness in the table, because it is symmetric across the diagonal running
top-left to bottom-right. (These four numbers are called the fourth *roots of unity*: the four
solutions to "what raised to the fourth power gives $1$?")

### Example (Clock arithmetic, all grown up)

Back in an earlier module you met the clock, where numbers wrap around. Let $\mathbb{Z}_n$ be the set
$\{0, 1, 2, \ldots, n-1\}$, and let the operation be addition that *wraps*: add as usual, then take
the remainder after dividing by $n$.

**Problem.** Take $n = 4$, so $\mathbb{Z}_4 = \{0, 1, 2, 3\}$. Is this a group under wrap-around
addition?

**Solution.** Here "add and wrap" means, for instance, $3 + 2 = 5$, and $5$ wraps to $1$ (the
remainder of $5$ divided by $4$). The full Cayley table:

| $+$     | $0$ | $1$ | $2$ | $3$ |
|:-------:|:---:|:---:|:---:|:---:|
| **$0$** | $0$ | $1$ | $2$ | $3$ |
| **$1$** | $1$ | $2$ | $3$ | $0$ |
| **$2$** | $2$ | $3$ | $0$ | $1$ |
| **$3$** | $3$ | $0$ | $1$ | $2$ |

Read the questions off the table again:

- **Closure.** Every entry lands in $\{0, 1, 2, 3\}$. Yes.
- **Identity.** Adding $0$ does nothing. The identity is $0$.
- **Inverses.** A $0$ shows up in every row, so every element has an inverse: $1$ pairs with $3$,
  $2$ with itself. Yes.
- **Associativity.** Inherited from ordinary addition.

So $\mathbb{Z}_4$ under wrap-around addition is a group: **finite**, **order $4$**, and **abelian**
(its table is symmetric across the diagonal too).

Now look back at the two order-$4$ tables side by side. The objects could not be more different —
exotic numbers built from $i$ in one, plain clock hours in the other — yet both are finite abelian
groups of size four. That resemblance is not a coincidence, and chasing it down is a thread we pick up
later in the course.

## A pattern, and a warning

Four exhibits, four yeses, four abelian groups. It would be easy to conclude that order never matters
and every group is this polite. Resist that. We deliberately stocked this corner of the zoo with
tame, commutative animals so you could learn the shape without distraction. The wider world is not so
orderly: there are groups where $a * b$ and $b * a$ genuinely disagree, where the order you act in
changes where you end up. The next module hands you one — the symmetries of a triangle — and breaks
the pattern on purpose.

## Exercises

**1 (mechanical).** Using the $\mathbb{Z}_4$ table above, compute $2 + 3$ and $3 + 3$.
*Hint:* find the row, find the column, read the cell.

**2 (mechanical).** What is the inverse of $i$ in the group $\{1, i, -1, -i\}$? What is the inverse of
$-1$?
*Hint:* the inverse of an element is whatever you multiply it by to land on the identity $1$. Scan its
row for the $1$.

**3 (conceptual).** The positive integers $\{1, 2, 3, 4, \ldots\}$ under ordinary addition are *not* a
group. Which of the four group rules fails? Name it and give an example.
*Hint:* you need a "do nothing" element and a partner that cancels each element back to it. Is either
available here?

**4 (conceptual).** Is the set $\{1, -1\}$ a group under multiplication? Build its $2 \times 2$ Cayley
table, check the four rules, and state its order. Is it abelian?
*Hint:* there are only four products to compute. Remember $(-1) \times (-1) = 1$.

**5 (conceptual).** The whole set of rationals *including* zero, under multiplication, fails to be a
group — even though it has an identity. Which rule breaks, and which single element breaks it?
*Hint:* this is exactly the reason we wrote $\mathbb{Q}^{\times}$ with the zero removed. What number
has no reciprocal?

**6 (stretch).** A group's Cayley table has a hidden rule: every element appears **exactly once** in
each row and each column (a "Latin square"). Check that this holds for the $\mathbb{Z}_4$ table. Then
explain in a sentence why a row could never contain the same element twice.
*Hint:* if $a * b$ and $a * c$ gave the same answer, what would combining both sides with $a$'s
inverse force about $b$ and $c$?

## Recap

A group is not a rare specimen; it is a shape that shows up everywhere once you stop staring at the
objects and start interrogating the operation. We checked four: the integers under addition and the
nonzero rationals under multiplication (both infinite), and the four roots of unity and $\mathbb{Z}_4$
under wrap-around addition (both finite, both of order $4$). Every one of them is **abelian** —
combine in any order, same answer — and we learned to read that property, along with all four group
rules, straight off a Cayley table. We also learned to sort groups by **order**, finite against
infinite. Next we leave the tame wing of the zoo: the symmetries of a triangle form a group where
order suddenly *does* matter, and "abelian" stops being free.
