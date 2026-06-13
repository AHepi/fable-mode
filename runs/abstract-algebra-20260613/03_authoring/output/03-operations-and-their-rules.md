---
title: Operations and Their Rules
course: abstract-algebra
order: 3
summary: "Strip arithmetic down to its bones: a set, a way to combine two things, and four rules worth caring about."
estimatedMinutes: 20
objectives:
  - Define a binary operation
  - State closure, associativity, identity, and inverse
  - Test whether a given operation has each property
prerequisites: []
---

## The hook

Addition feels like one thing. Press it a little and it splits into several.

When you write $3 + 5 = 8$, at least four separate promises are being kept at once, and you have never once stopped to check them. That the answer is still a whole number. That if you add three numbers, it doesn't matter where you put the parentheses. That zero leaves everything alone. That every number has an opposite that cancels it back to zero. Drop any one of those promises and addition stops behaving like addition — but you'd be hard pressed to say, off the top of your head, which promise broke.

This module takes the promises apart and lays them on the table, one at a time. By the end you'll have four rules, each with a name, each something you can *test* — and the rest of the course is mostly the story of who keeps them and who doesn't.

## Intuition

Strip away the particular numbers and here is what addition really is: a set of things (the whole numbers), and a way to take two of them and get back a third (the plus sign). That's the skeleton. A bunch of stuff, plus a way to mash two pieces of it together into one piece of it.

Mathematicians call that mashing-together an **operation**, and "two pieces in, one piece out" is so common it gets its own name: a **binary operation** — *binary* meaning it eats exactly two inputs. Ordinary addition is one. So is multiplication. So is the clock arithmetic from the last module, where the hours wrap around and $9 + 5$ lands on $2$ instead of running off to $14$. Different operations, same skeleton: feed in two, get back one.

Once you have an operation, you can ask whether it keeps the four promises. We'll meet them in plain words first, then nail each one down.

- **Closure** — *do you stay inside the set?* Add two whole numbers and you get a whole number, never a fraction sneaking in. The operation never spits out something that wasn't on the menu to begin with.
- **Associativity** — *does grouping matter?* Whether you compute $(2 + 3) + 4$ or $2 + (3 + 4)$, you land on $9$. The parentheses are just bookkeeping; the answer doesn't care where you put them.
- **Identity** — *is there a do-nothing element?* Zero. Add it to anything and nothing changes. Every well-behaved operation tends to have one of these — an element that leaves its partners untouched.
- **Inverse** — *can you undo?* For every number there's an opposite — $7$ and $-7$ — that combine back to the do-nothing element. An undo button, one for each element.

To keep things general we'll stop saying "the numbers" and "plus." Call the set $S$ — any set — and write the operation as $a * b$, read "$a$ star $b$," or sometimes $a \cdot b$. The do-nothing element, when there is one, gets the name $e$. The undo of $a$ gets written $a^{-1}$. None of these symbols mean ordinary arithmetic; $*$ is whatever combining rule we're studying at the moment. Think of $a * b$ as "do $a$, then combine with $b$" and let the context fill in the rest.

## Definitions

Each rule gets its own statement. The first defines the skeleton; the four after it are the promises.

> **Definition (binary operation).** A **binary operation** on a set $S$ is a rule that assigns, to every ordered pair $(a, b)$ of elements of $S$, a single element of $S$, written $a * b$.

The phrase *ordered pair* matters: $a * b$ and $b * a$ are allowed to be different (subtraction will care; addition won't). The phrase *a single element* matters too — one input pair, one output, no ambiguity. A binary operation is really just a function whose inputs come in pairs.

> **Definition (closure).** A binary operation $*$ on $S$ is **closed** if, for every $a$ and $b$ in $S$, the result $a * b$ is also in $S$.

Closure is quietly baked into the definition of a binary operation above — "a single element *of $S$*" — but it's worth naming on its own, because the usual way an operation fails is by leaking. Subtraction on the whole numbers $\{0, 1, 2, \dots\}$ leaks: $3 - 5 = -2$, and $-2$ isn't on the menu.

> **Definition (associativity).** A binary operation $*$ on $S$ is **associative** if, for every $a$, $b$, $c$ in $S$,
> $$(a * b) * c = a * (b * c).$$

Associativity is permission to drop the parentheses. If an operation is associative, then $a * b * c$ is unambiguous — every way of grouping gives the same answer — and you can write long chains $a * b * c * d$ without a forest of brackets.

> **Definition (identity element).** An element $e$ in $S$ is an **identity** for $*$ if, for every $a$ in $S$,
> $$e * a = a \quad \text{and} \quad a * e = a.$$

The identity is the do-nothing element: combining with it on either side gives you back exactly what you started with. For addition, $e = 0$. For multiplication, $e = 1$.

> **Definition (inverse).** Suppose $*$ has an identity $e$. An element $b$ in $S$ is an **inverse** of $a$ if
> $$a * b = e \quad \text{and} \quad b * a = e.$$
> When such a $b$ exists it is written $a^{-1}$ — the *undo* of $a$.

An inverse sends $a$ back to the do-nothing element. Notice inverses only make sense *after* you have an identity — you can't talk about undoing back to a starting line that doesn't exist. For addition the inverse of $a$ is $-a$, since $a + (-a) = 0$. The notation $a^{-1}$ is general; it does *not* mean the fraction $1/a$ unless the operation happens to be multiplication.

## Worked examples

### Addition on the whole numbers and integers

Let $S = \mathbb{Z}$, the integers $\dots, -2, -1, 0, 1, 2, \dots$, with $*$ being ordinary addition. Walk the four rules.

- **Closed?** Yes. Add any two integers and you get an integer.
- **Associative?** Yes. $(2 + 3) + 4 = 5 + 4 = 9$ and $2 + (3 + 4) = 2 + 7 = 9$, and the same agreement holds for every triple.
- **Identity?** Yes, $e = 0$, since $0 + a = a$ and $a + 0 = a$ for every integer $a$.
- **Inverses?** Yes. The inverse of $a$ is $-a$, because $a + (-a) = 0$. Every integer has one.

Addition on $\mathbb{Z}$ keeps all four promises. Hold that thought — it's the model the next module is built around.

### Addition on the clock (mod 5)

Now take the finite set $S = \{0, 1, 2, 3, 4\}$ — the hours on a five-hour clock — with $*$ being addition that wraps around. After you add, you keep only the remainder on division by $5$. So $3 * 4 = 7$, which wraps to $2$. Write it $3 + 4 \equiv 2 \pmod 5$. Here is the full table:

$$
\begin{array}{c|ccccc}
+ & 0 & 1 & 2 & 3 & 4 \\
\hline
0 & 0 & 1 & 2 & 3 & 4 \\
1 & 1 & 2 & 3 & 4 & 0 \\
2 & 2 & 3 & 4 & 0 & 1 \\
3 & 3 & 4 & 0 & 1 & 2 \\
4 & 4 & 0 & 1 & 2 & 3
\end{array}
$$

- **Closed?** Yes — and you can *see* it. Every entry in the table is one of $0, 1, 2, 3, 4$. Nothing leaks out.
- **Associative?** Yes. Wrapping doesn't disturb the grouping: $(2 + 3) + 4$ wraps to $0 + 4 = 4$, and $2 + (3 + 4)$ wraps to $2 + 2 = 4$. (In general, mod-$n$ addition inherits associativity from ordinary addition.)
- **Identity?** Yes, $e = 0$. Read the top row and left column: adding $0$ leaves everything where it was.
- **Inverses?** Yes, and the table shows them — each inverse is the partner that lands you back on $0$. Scan each row for the $0$: the inverse of $1$ is $4$, of $2$ is $3$, of $3$ is $2$, of $4$ is $1$, and $0$ is its own inverse. Every element has one.

A finite world built out of wrap-around addition keeps all four promises too — exactly the same four that ordinary addition keeps. That's not a coincidence, and it's the kind of hidden sameness this course is hunting for.

### A non-example: subtraction is not associative

Watch a promise break. Let $S = \mathbb{Z}$ with $*$ being subtraction, $a * b = a - b$. Test associativity on $a = 8$, $b = 4$, $c = 2$:

$$(8 - 4) - 2 = 4 - 2 = 2, \qquad 8 - (4 - 2) = 8 - 2 = 6.$$

One grouping gives $2$, the other gives $6$. They disagree, so subtraction is **not associative** — and a single counterexample is enough to settle it. The parentheses are no longer bookkeeping; move them and the answer moves with them. This is why $8 - 4 - 2$ is genuinely ambiguous until someone tells you to read it left to right. Subtraction is a perfectly good binary operation, and it's even closed on $\mathbb{Z}$ — but it flunks the second promise, and that single failure will keep it out of the club we build next.

## Exercises

1. **(Mechanical.)** Let $S = \mathbb{Z}$ with $a * b = a \cdot b$ (ordinary multiplication). Check each of the four rules: closed? associative? is there an identity $e$? does every element have an inverse in $S$?
   *Hint:* the first three are yes. For inverses, ask what you'd have to multiply $2$ by to get the identity, and whether that thing lives in $\mathbb{Z}$.

2. **(Mechanical.)** On the clock set $S = \{0, 1, 2, 3\}$ with addition mod $4$, build the $4 \times 4$ table. Then read off the identity and the inverse of each element.
   *Hint:* the identity is the row that copies the header. For each element, find the partner that sums (with wrap-around) to that identity.

3. **(Conceptual.)** Division on the nonzero numbers is a binary operation, $a * b = a / b$. Show it is **not** associative by finding one triple $a, b, c$ where $(a / b) / c$ and $a / (b / c)$ disagree.
   *Hint:* small numbers like $8, 2, 2$ make the mismatch easy to see.

4. **(Conceptual.)** Define an operation on the integers by $a * b = a + b + 1$. Find its identity element $e$ — the value with $e * a = a$ for every $a$ — and then find the inverse of a general integer $a$.
   *Hint:* set $e + a + 1 = a$ and solve for $e$. For the inverse, set $a * b = e$ and solve for $b$.

5. **(Conceptual.)** Give an example of a set and a binary operation on it that is closed but has **no** identity element. Explain in a sentence why no element does the do-nothing job.
   *Hint:* try the even integers $\{\dots, -2, 0, 2, \dots\}$ under multiplication, and ask which element could play the role of $1$.

6. **(Stretch.)** Subtraction on $\mathbb{Z}$ has the curious feature that $a * 0 = a$ for every $a$, yet $0$ is **not** an identity. Explain why, using the exact wording of the identity definition.
   *Hint:* the definition demands $e * a = a$ *and* $a * e = a$. Test the first one: what is $0 * 5$?

## Recap

An operation is a skeleton — a set $S$ and a binary rule $*$ that takes two elements and returns one — and four promises that rule might keep: **closure** (you stay inside the set), **associativity** (grouping doesn't matter), an **identity** (a do-nothing element $e$), and **inverses** (an undo $a^{-1}$ for each element). Ordinary addition keeps all four; so does wrap-around clock addition, which is the quiet hint that they're running the same machinery. Subtraction keeps closure but breaks associativity, and that one broken promise will be enough to disqualify it.

You now have four rules you can test, by hand, on any operation put in front of you. In the next module those four stop being a loose checklist and become a single word: bolt all four onto one set-and-operation and you have built a **group** — the structure the rest of this course is about.
