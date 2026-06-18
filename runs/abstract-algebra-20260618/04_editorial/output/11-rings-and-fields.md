---
title: Beyond Groups: Rings and Fields
course: abstract-algebra
order: 11
summary: Add a second operation and the landscape opens up — the integers, the rationals, and the structures that organize all of algebra.
estimatedMinutes: 18
objectives:
  - Describe what a ring adds to the idea of an abelian group under addition
  - Verify the distributive law in a worked example
  - Classify the integers as a ring but not a field
  - Construct the multiplication table for $\mathbb{Z}_5$ and identify it as a field
  - Explain why $\mathbb{Z}_6$ is not a field by exhibiting a nonzero element with no multiplicative inverse
prerequisites:
  - 10-homomorphisms-and-isomorphisms
---

The square you met at the very start of this course kept a secret. Turn it $90^\circ$ and it looks the same. Flip it about a diagonal and it looks the same. Those two moves interact — if you turn and then flip, you get something different than if you flip and then turn. One operation, four axioms, and a structure fell out. That is what ten modules of group theory taught.

But now look at the integers: $\ldots, -2, -1, 0, 1, 2, \ldots$ They have addition. They also have multiplication. And those two operations do not ignore each other — they are linked by a law you have used since primary school without calling it anything:

$$3 \times (4 + 5) = 3 \times 4 + 3 \times 5.$$

One operation is not the whole story. Sometimes the object on your desk has two.

## Two operations that talk to each other

A group — one set with one operation satisfying the four rules (closure, associativity, an identity element, and inverses) — is the atom of this course. But the integers are not just a group. They carry addition *and* multiplication, and multiplication distributes over addition. That word, **distributes**, names the bridge between the two operations: multiplication spreads across a sum.

Think of it this way. You can buy 3 packs of (4 apples and 5 oranges), or you can buy 3 packs of apples and 3 packs of oranges separately. Either way, $3 \times 9 = 27$. The two operations cooperate.

A structure that formalizes this cooperation is called a **ring**. A structure where cooperation runs deep enough to let you divide is called a **field**. The integers are a ring. The rationals are a field. The difference turns out to matter enormously.

## Definition (Ring)

A **ring** is a set $R$ equipped with two operations, written $+$ (addition) and $\times$ (multiplication, also written as juxtaposition $ab$), satisfying:

1. $(R, +)$ is an **abelian group** — a group (closure, associativity, identity $0$, inverses $-a$) where addition also commutes: $a + b = b + a$ for all $a, b \in R$.
2. Multiplication is **associative**: $(a \times b) \times c = a \times (b \times c)$ for all $a, b, c \in R$.
3. Multiplication **distributes** over addition (on both sides):
$$a \times (b + c) = (a \times b) + (a \times c)$$
$$(b + c) \times a = (b \times a) + (c \times a).$$

**Note.** A ring does not require multiplication to be commutative, and it does not require every nonzero element to have a multiplicative inverse. Those are extra conditions that define stronger structures.

**Bridge.** The definition has exactly three moving parts. The first says the addition side is already a well-behaved, reversible group — you can add and subtract freely. The second says multiplication does not break associativity. The third, the distributive law, is the bridge: it is the rule that forces $+$ and $\times$ to cooperate rather than act as two strangers sharing a set. Without it, the two operations could be defined independently with no connection between them; with it, the ring's arithmetic coheres.

## $\mathbb{Z}$ as a ring

The integers $\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}$ with the usual $+$ and $\times$ are the canonical ring.

**Check: $({\mathbb{Z}}, +)$ is an abelian group.**

| Axiom | Witnessed by |
|---|---|
| Closure | $m + n \in \mathbb{Z}$ for any integers $m, n$ |
| Associativity | $(m+n)+k = m+(n+k)$ — standard arithmetic |
| Identity | $0$: adding $0$ changes nothing |
| Inverses | $-m$: $m + (-m) = 0$ |
| Commutativity | $m + n = n + m$ |

**Check: multiplication is associative.**

$(2 \times 3) \times 4 = 6 \times 4 = 24$ and $2 \times (3 \times 4) = 2 \times 12 = 24$. Standard arithmetic.

**Check: the distributive law.**

$$2 \times (3 + 5) = 2 \times 8 = 16 \qquad\text{and}\qquad 2 \times 3 + 2 \times 5 = 6 + 10 = 16. \checkmark$$

So $\mathbb{Z}$ is a ring.

**But $\mathbb{Z}$ is not a field.** A field requires every *nonzero* element to have a multiplicative inverse inside the set. In $\mathbb{Z}$, the element $2$ has no multiplicative inverse: you would need $\frac{1}{2}$, which is not an integer. (This was the same obstruction that kept $\mathbb{Z}$ under $\times$ from being a group back in module 04.) A ring lets you add and multiply; a field lets you divide too.

<details><summary>Check yourself — the distributive law</summary>

Verify the distributive law $a \times (b + c) = (a \times b) + (a \times c)$ for $a = 5$, $b = -3$, $c = 7$ in $\mathbb{Z}$.

Left side: $5 \times (-3 + 7) = 5 \times 4 = 20$.

Right side: $5 \times (-3) + 5 \times 7 = -15 + 35 = 20$. ✓

The law holds, and the computation is the whole point: both paths through the arithmetic land in the same place.

</details>

## Definition (Field)

A **field** is a ring $(F, +, \times)$ satisfying two additional conditions:

1. Multiplication is **commutative**: $a \times b = b \times a$ for all $a, b \in F$.
2. Every **nonzero** element has a **multiplicative inverse**: for each $a \in F$ with $a \neq 0$, there exists $a^{-1} \in F$ such that $a \times a^{-1} = 1$.

In other words, $(F \setminus \{0\}, \times)$ — the nonzero elements under multiplication — is itself an abelian group.

**Bridge.** The two extra conditions together say: not only can you add and multiply, you can also divide (by anything nonzero). Division is just multiplication by the multiplicative inverse. The rationals $\mathbb{Q}$, the reals $\mathbb{R}$, and the complex numbers $\mathbb{C}$ are all fields in this sense — every nonzero element has a reciprocal that stays in the set. The integers fall short because $\frac{1}{2}$ is not an integer.

The ladder from this course reads: a **group** has one operation with the four rules; a **ring** has two operations where addition makes an abelian group and multiplication distributes; a **field** is a ring where you can also divide.

## $\mathbb{Z}_5$: a finite field

Consider $\mathbb{Z}_5 = \{0, 1, 2, 3, 4\}$, the 5-hour clock from module 02. Clock addition is already familiar: $3 + 4 = 2$ in $\mathbb{Z}_5$ (because $7 = 5 + 2$). The addition side is an abelian group — that was established when we first met $\mathbb{Z}_n$.

Now put a multiplication on $\mathbb{Z}_5$: multiply as usual, then take the remainder after dividing by 5. So $3 \times 4 = 12 = 2 \times 5 + 2$, giving $3 \times 4 = 2$ in $\mathbb{Z}_5$.

The full multiplication table:

$$\begin{array}{c|ccccc}
\times & 0 & 1 & 2 & 3 & 4 \\
\hline
0 & 0 & 0 & 0 & 0 & 0 \\
1 & 0 & 1 & 2 & 3 & 4 \\
2 & 0 & 2 & 4 & 1 & 3 \\
3 & 0 & 3 & 1 & 4 & 2 \\
4 & 0 & 4 & 3 & 2 & 1 \\
\end{array}$$

**Checking for multiplicative inverses (the field condition).** Look at the row for each nonzero element: does a $1$ appear somewhere in that row?

- Row for $1$: $1 \times 1 = 1$. So $1^{-1} = 1$.
- Row for $2$: $2 \times 3 = 6 = 1 \times 5 + 1$, so $2 \times 3 = 1$. So $2^{-1} = 3$.
- Row for $3$: $3 \times 2 = 1$. So $3^{-1} = 2$.
- Row for $4$: $4 \times 4 = 16 = 3 \times 5 + 1$, so $4 \times 4 = 1$. So $4^{-1} = 4$.

Every nonzero element has a multiplicative inverse in $\mathbb{Z}_5$. The distributive law holds because clock-multiplication distributes over clock-addition (the proof uses the same remainder arithmetic). So $\mathbb{Z}_5$ is a field.

The key reason is that 5 is prime. When $n$ is prime, no nonzero element of $\mathbb{Z}_n$ can multiply to give $0$ — there is no way to "split" a prime into two smaller pieces. That is what guarantees every nonzero element is invertible.

<details><summary>Check yourself — reading the multiplication table</summary>

In $\mathbb{Z}_5$, compute $3 \times (2 + 4)$ two ways — directly and using the distributive law — and confirm they agree.

**Directly:** $2 + 4 = 1$ in $\mathbb{Z}_5$ (since $6 = 5 + 1$), so $3 \times 1 = 3$.

**Distributive law:** $3 \times 2 + 3 \times 4 = 1 + 2 = 3$ in $\mathbb{Z}_5$ (reading from the table: $3 \times 2 = 1$, $3 \times 4 = 2$, and $1 + 2 = 3$). ✓

Both paths give $3$. The distributive law works in $\mathbb{Z}_5$ just as it does in $\mathbb{Z}$.

</details>

## $\mathbb{Z}_6$: a ring that is not a field

Now try $\mathbb{Z}_6 = \{0, 1, 2, 3, 4, 5\}$, the standard 6-hour clock. Addition works fine — an abelian group. Multiplication mod 6 is defined the same way. But look at what happens with $2$ and $3$:

$$2 \times 3 = 6 = 1 \times 6 + 0, \quad \text{so } 2 \times 3 = 0 \text{ in } \mathbb{Z}_6.$$

Two nonzero elements multiply to give $0$. This is called a **zero divisor**, and its existence is decisive: if $2 \times 3 = 0$ and $2$ had a multiplicative inverse $2^{-1}$, we could multiply both sides by $2^{-1}$ to get $3 = 0$, which is false in $\mathbb{Z}_6$. So $2$ has no multiplicative inverse in $\mathbb{Z}_6$.

One nonzero element without an inverse disqualifies the whole set: $\mathbb{Z}_6$ is a ring but not a field.

The contrast is sharp. $\mathbb{Z}_5$: prime modulus, no zero divisors, every nonzero element invertible — a field. $\mathbb{Z}_6 = \mathbb{Z}_{2 \times 3}$: composite modulus, zero divisors appear, some elements have no inverse — a ring, nothing more.

**General fact.** $\mathbb{Z}_n$ is a field if and only if $n$ is prime.

<details><summary>Check yourself — spotting a zero divisor</summary>

In $\mathbb{Z}_6$, is $3$ invertible? Find its product with every nonzero element and see whether $1$ appears.

$3 \times 1 = 3$, $3 \times 2 = 0$, $3 \times 3 = 3$ (since $9 = 1 \times 6 + 3$), $3 \times 4 = 0$ (since $12 = 2 \times 6$), $3 \times 5 = 3$ (since $15 = 2 \times 6 + 3$).

The value $1$ never appears. So $3$ is not invertible in $\mathbb{Z}_6$ — another witness that $\mathbb{Z}_6$ is not a field.

</details>

## Exercises

**1.** In $\mathbb{Z}_7$ (the 7-hour clock), compute $4 \times 5$. Then find $4^{-1}$ — the element $x$ such that $4 \times x = 1$ in $\mathbb{Z}_7$.

<details><summary>Show solution</summary>

$4 \times 5 = 20 = 2 \times 7 + 6$, so $4 \times 5 = 6$ in $\mathbb{Z}_7$.

For the inverse: test multiples of $4$ mod $7$:
$4 \times 1 = 4$, $4 \times 2 = 1$ (since $8 = 1 \times 7 + 1$).

So $4^{-1} = 2$ in $\mathbb{Z}_7$. Check: $4 \times 2 = 8 = 7 + 1$, giving $1$. ✓

Since $7$ is prime, $\mathbb{Z}_7$ is a field and every nonzero element is guaranteed to have an inverse.

</details>

**2.** Is $\mathbb{Z}$ under addition and multiplication a field? Give a specific nonzero element that has no multiplicative inverse in $\mathbb{Z}$, and name the element that *would* be its inverse in $\mathbb{Q}$ (the rationals).

<details><summary>Show solution</summary>

No. For example, $3 \in \mathbb{Z}$ has no multiplicative inverse in $\mathbb{Z}$: you would need $3 \times x = 1$, so $x = \frac{1}{3}$, which is not an integer.

In $\mathbb{Q}$, the inverse is $\frac{1}{3}$, which is a rational number and therefore valid there. This is exactly why $\mathbb{Q}$ is a field and $\mathbb{Z}$ is not: $\mathbb{Q}$ contains all those fractions; $\mathbb{Z}$ does not.

**A tempting wrong answer:** one might say $\mathbb{Z}$ fails because $0$ has no inverse. But $0$ is excused — the field condition requires inverses only for *nonzero* elements (dividing by zero is excluded in every field). The failure of $\mathbb{Z}$ is about elements like $2$, $3$, $5$ — ordinary nonzero integers whose reciprocals live outside $\mathbb{Z}$.

</details>

**3.** Verify the distributive law $a \times (b + c) = (a \times b) + (a \times c)$ in $\mathbb{Z}_5$ for $a = 4$, $b = 3$, $c = 4$.

<details><summary>Show solution</summary>

**Left side:** $b + c = 3 + 4 = 2$ in $\mathbb{Z}_5$ (since $7 = 5 + 2$). Then $4 \times 2 = 3$ (from the table, or: $8 = 1 \times 5 + 3$).

**Right side:** $4 \times 3 = 2$ and $4 \times 4 = 1$ (from the table). Then $2 + 1 = 3$ in $\mathbb{Z}_5$.

Both sides equal $3$. ✓

</details>

**4.** Show that $4$ is a zero divisor in $\mathbb{Z}_8$: find a nonzero element $b \in \mathbb{Z}_8$ such that $4 \times b = 0$ in $\mathbb{Z}_8$. Conclude that $\mathbb{Z}_8$ is not a field.

<details><summary>Show solution</summary>

$4 \times 2 = 8 = 1 \times 8 + 0$, so $4 \times 2 = 0$ in $\mathbb{Z}_8$.

Both $4$ and $2$ are nonzero in $\mathbb{Z}_8$, so $4$ is a zero divisor.

Since $4$ is a zero divisor, it has no multiplicative inverse (the same argument as for $2$ in $\mathbb{Z}_6$: if $4^{-1}$ existed, multiply $4 \times 2 = 0$ by $4^{-1}$ to get $2 = 0$, a contradiction). Therefore $\mathbb{Z}_8$ is not a field.

Notice that $8 = 2^3$ is composite. Every composite $n$ produces at least one zero divisor in $\mathbb{Z}_n$, confirming that the field condition forces a prime modulus.

</details>

**5.** (Stretch.) In a field, the cancellation law holds: if $a \times b = a \times c$ and $a \neq 0$, then $b = c$. Use the existence of multiplicative inverses to prove this in one line of algebra.

<details><summary>Show solution</summary>

Multiply both sides of $a \times b = a \times c$ on the left by $a^{-1}$ (which exists since $a \neq 0$ in a field):

$$a^{-1} \times (a \times b) = a^{-1} \times (a \times c).$$

By associativity of multiplication: $(a^{-1} \times a) \times b = (a^{-1} \times a) \times c$, so $1 \times b = 1 \times c$, giving $b = c$. $\square$

This argument is the payoff of having inverses. In $\mathbb{Z}_6$, the law fails: $2 \times 3 = 0 = 2 \times 0$, yet $3 \neq 0$. No inverses, no cancellation.

</details>

## Recap

The course began with a square that kept its own secret — hidden symmetries that combined, undid each other, and left things unchanged. Ten modules followed that thread through clock arithmetic, the four axioms, the zoo of groups, the triangle's six moves, subgroups, generators, Lagrange's counting theorem, and the maps that let two groups be secretly the same. At each step, the object on the table was a set with *one* operation.

This final module opened the door to two.

A ring is an abelian group under addition with a multiplication bolted on by the distributive law. A field is a ring where the nonzero elements also form a group under multiplication — where division is always available. The integers $\mathbb{Z}$ are a ring: you can add, subtract, and multiply, but $\frac{1}{2}$ is not there. The rationals $\mathbb{Q}$ and the reals $\mathbb{R}$ are fields: every nonzero element has a reciprocal. And finite fields exist too — $\mathbb{Z}_5$ is a complete field in just five elements, while $\mathbb{Z}_6$ falls short because $2 \times 3 = 0$ opens a crack division cannot cross.

Where does this reach? Farther than group theory alone can see. Rings and fields are the native language of polynomial equations — the kind of algebra you have been doing since middle school is secretly ring theory. Fields are the setting for everything that goes by the name of "solving equations": the question of which polynomial equations can be solved by radicals, the question Galois answered by connecting field extensions to groups, is the bridge between the two structures this course introduced. Cryptography — the mathematics behind every encrypted message you send — runs on finite fields, specifically $\mathbb{Z}_p$ for large primes $p$ and their extensions. Linear algebra lives over a field; change the field and you get different geometry. Number theory, which asks which integers are prime and how they distribute, is the study of $\mathbb{Z}$ as a ring.

The group you spent ten modules learning to see is one rung on a ladder that rises through rings, fields, modules, algebras, and beyond. You are standing at the base of that ladder, and you can see it now. That is the whole point of a first course: not to climb the ladder, but to find it there under your feet, solid and much taller than it looked from the outside. The square kept a secret. The secret was this.

---

*Bias screen: examples drawn from $\mathbb{Z}$ and $\mathbb{Z}_n$ (universal arithmetic objects); no culturally loaded names or framing; the cryptography and Galois references are historical and context-only, not examples with named actors.*
