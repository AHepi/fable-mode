---
title: "Beyond Groups: Rings and Fields"
course: abstract-algebra
order: 11
summary: Add a second operation and the landscape opens up — the integers, the rationals, and the structures that organize all of algebra.
estimatedMinutes: 18
objectives:
  - Describe what a ring and a field add to the idea of a group
  - Classify the integers as a ring and the rationals as a field
  - Explain what being able to divide buys you
prerequisites: []
---

## The hook

A group is a world with one verb. You can combine two things and get a third, and that single act — call it addition, call it composition, call it a quarter-turn — is the whole of the law. It carried us a long way. But look at the number line you have known since childhood and you will notice it speaks two verbs, not one. You can *add* numbers. You can also *multiply* them. And the moment a second operation walks into the room, the floor tilts and a much larger country comes into view.

That country has a map, and the map has two regions on it with names: **rings** and **fields**. The integers live in one. The rationals and the reals live in the other. The border between them is a single question, the most ordinary question in school arithmetic — *can you divide?* — and the answer turns out to govern almost everything algebra can do.

## Intuition

Back in the early modules we boiled arithmetic down to four rules and called the result a group. We were stingy on purpose: one operation, four laws, nothing more. That austerity is what made groups turn up everywhere, but it also left a glaring omission. The integers under addition form a group — and yet nobody who has done arithmetic thinks of the integers as having *only* addition. They have multiplication too, woven right through the addition, and the two are not strangers. They cooperate. Multiply a sum and you can hand out the multiplication across the pieces: $a(b+c) = ab + ac$. That handshake, **distribution**, is the rule that binds the two operations into one structure instead of two unrelated ones.

A set carrying both operations, with addition behaving like a (well-mannered, commutative) group and multiplication distributing over it, is a **ring**. The integers are the picture to keep in your head. You can add, subtract, and multiply all day and never leave them.

But try to *divide* inside the integers and you fall straight out. Cut $1$ by $2$ and the answer, $\tfrac{1}{2}$, is nowhere to be found among the whole numbers. The integers can add, subtract, multiply — and then they stop. To divide, you have to widen the world to the fractions. A ring where division *always* works (except by zero, which is forbidden everywhere and always) is the richer structure: a **field**. The rationals are a field. The reals are a field. And the difference between a ring and a field is exactly the difference between a number system that can solve every equation $ax = b$ and one that chokes on half of them.

So: a group has one operation. A ring has two that cooperate. A field is a ring generous enough to let you divide. Each step adds a verb or a power, and each step opens new ground.

## Definitions

We keep these light — describe, don't belabor. A ring asks addition to be a familiar group and multiplication to play nicely with it.

## Definition (Ring)

A **ring** is a set $R$ together with two operations, *addition* and *multiplication*, such that:

- $R$ is an abelian group under addition (addition is associative and commutative, there is a zero element, and every element has a negative);
- multiplication is associative; and
- multiplication **distributes** over addition: $a(b+c) = ab + ac$ and $(b+c)a = ba + ca$ for all $a, b, c \in R$.

A field is a ring that also lets you divide by anything nonzero.

## Definition (Field)

A **field** is a ring $F$ in which multiplication is commutative, there is a multiplicative identity $1 \neq 0$, and every nonzero element $a$ has a **multiplicative inverse** $a^{-1}$ with $a \cdot a^{-1} = 1$.

Equivalently: in a field, the nonzero elements form a group under multiplication. That single line is the punchline of the whole course — a field is a structure where *both* operations give you a group (addition on everything, multiplication on everything but zero), stitched together by distribution.

## Worked examples

## Example (The integers are a ring but not a field)

**Problem.** Show that $\mathbb{Z}$ is a ring, and explain why it is not a field.

**Solution.** Under addition the integers are an abelian group: addition is associative and commutative, $0$ is the identity, and each $n$ has the negative $-n$. Multiplication of integers is associative, and the distributive law $a(b+c) = ab + ac$ is ordinary arithmetic. So $\mathbb{Z}$ is a ring.

It is not a field. For that, every nonzero integer would need a multiplicative inverse *inside* $\mathbb{Z}$. But take $2$. Its inverse would have to be $\tfrac{1}{2}$, since $2 \cdot \tfrac{1}{2} = 1$ — and $\tfrac{1}{2}$ is not an integer. There is no integer you can multiply by $2$ to get $1$. Division fails, so $\mathbb{Z}$ stops short of being a field.

## Example (The rationals are a field)

**Problem.** Explain why $\mathbb{Q}$, the set of fractions, is a field.

**Solution.** Everything that made $\mathbb{Z}$ a ring still holds in $\mathbb{Q}$. The new ingredient is inverses: take any nonzero rational, written $\tfrac{p}{q}$ with $p, q$ nonzero. Flip it. The number $\tfrac{q}{p}$ is again a rational, and $\tfrac{p}{q} \cdot \tfrac{q}{p} = 1$. So every nonzero element has a multiplicative inverse, and $\mathbb{Q}$ is a field. The same reasoning, with decimals instead of fractions, makes $\mathbb{R}$ a field too.

## Example (A finite field, and a near miss)

**Problem.** The clock arithmetic from early in the course gives finite rings $\mathbb{Z}_n$. Show that $\mathbb{Z}_5$ is a field, and that $\mathbb{Z}_6$ is not.

**Solution.** In $\mathbb{Z}_5$ — the numbers $0, 1, 2, 3, 4$ with addition and multiplication done "mod 5" — we hunt for an inverse of each nonzero element, a partner whose product is $1$:

$$
1 \cdot 1 = 1, \quad 2 \cdot 3 = 6 \equiv 1, \quad 4 \cdot 4 = 16 \equiv 1.
$$

So $1, 2, 3, 4$ each have a multiplicative inverse, and $\mathbb{Z}_5$ is a (finite!) field. This is no accident: $\mathbb{Z}_p$ is a field exactly when $p$ is prime.

Now $\mathbb{Z}_6$. Here $6$ is not prime, and it shows. Look at $2$: its multiples mod 6 run $2, 4, 0, 2, 4, 0, \ldots$ — they never hit $1$. So $2$ has no inverse, and $\mathbb{Z}_6$ is a ring but not a field. The crack is the same one that cracked the integers: an element you cannot divide by.

## Exercises

1. **(Mechanical)** In $\mathbb{Z}_7$, find the multiplicative inverse of $3$ — that is, the element $a^{-1}$ with $3 \cdot a^{-1} \equiv 1$.
   *Hint: test the products $3 \cdot 1, 3 \cdot 2, 3 \cdot 3, \ldots$ mod 7 until one equals $1$.*

2. **(Mechanical)** Solve $5x = 3$ in the field $\mathbb{Q}$. Then explain why the same equation has no solution in the ring $\mathbb{Z}$.
   *Hint: dividing by $5$ is legal in $\mathbb{Q}$; the answer is a fraction, which is exactly what $\mathbb{Z}$ lacks.*

3. **(Conceptual)** The even integers — $\ldots, -4, -2, 0, 2, 4, \ldots$ — are closed under addition, subtraction, and multiplication. Are they a field? Why or why not?
   *Hint: ask whether $2$ has a multiplicative inverse among the even numbers — and whether there is even a $1$ to aim for.*

4. **(Conceptual)** Being able to divide buys you the power to solve $ax = b$ for any nonzero $a$. Using $a^{-1}$, write down the solution in one line, and say which property of a field you used.
   *Hint: multiply both sides by $a^{-1}$.*

5. **(Conceptual)** Find an element of $\mathbb{Z}_6$, other than $2$, that has no multiplicative inverse. What do the elements *without* inverses have in common with $6$?
   *Hint: try $3$ and $4$; think about shared factors with $6$.*

6. **(Stretch)** $\mathbb{Z}_4$ has four elements. Decide whether it is a field by checking each nonzero element for an inverse. Which one is the troublemaker, and how does this echo the $\mathbb{Z}_6$ example?
   *Hint: $2 \cdot 2 \equiv 0$ in $\mathbb{Z}_4$ — an element that multiplies with itself to give zero can never have an inverse.*

## Recap — and the road on from here

We opened this course with a coaster that refused to admit it had been turned, and a promise: that abstract algebra is the study of *operations* and the *structure* they obey, not the particular objects being operated on. We made good on it. We distilled arithmetic into four rules and called the result a group. We found groups hiding in clocks, in fractions, in the symmetries of a triangle, in the shuffles of a deck — the same machinery, again and again, wearing different costumes. Then, in this final module, we added a second operation and watched the one-verb world of groups open into the two-verb world of rings and fields, where the integers, the rationals, and the reals finally sit in their proper places on the map.

You can see it now. A symmetry is a group. A number system is a ring, and a good one is a field. The word *structure*, which sounded like a slogan in the first module, has become something you can point at. That is the real graduation: not a list of facts, but a new pair of eyes.

And the country keeps going past the border we've drawn. A second course would push deeper into rings and fields — into which equations a given field can solve and which it cannot, and into the astonishing bridge that ties the symmetries of an equation's solutions back to groups, the very objects we started with. That bridge is called *Galois theory*, and it answers a question that stumped mathematicians for three centuries: there is a formula for solving quadratics, even cubics and quartics — but there is *no* such formula for the general fifth-degree equation, the quintic, and the reason is a fact about a particular group being too tangled to take apart. Operations and structure, the two words we began with, turn out to decide what can be solved at all. That is where the next door opens. You now know how to walk through it.
