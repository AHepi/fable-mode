---
title: Clock Arithmetic
course: abstract-algebra
order: 2
summary: Adding on a clock face introduces a finite world of arithmetic that wraps around — our first concrete playground.
estimatedMinutes: 18
objectives:
  - Compute sums in modular arithmetic using the wrap-around rule
  - State what "a mod n" means in plain words and with a formula
  - Read an addition table for a clock group and use it to find sums and "undo" elements
prerequisites:
  - 01-the-secret-life-of-symmetry
---

Here is an arithmetic question with a wrong answer: what is $9 + 5$?

On a standard clock face, the hands read $2$. Not $14$. The clock runs from $1$ to $12$, and when you go past $12$ it doesn't keep counting — it starts over. That starting-over is not a quirk or a rounding error. It is a rule, and arithmetic built on that rule has all the structure we are chasing through this course.

Module 01 found one idea — structure — hiding in turning shapes, clock arithmetic, and triangle flips, and the idea of combining moves. This module is where we make the clock version precise.

## The clock as a number system

Picture a clock face. Not a 12-hour clock yet — start smaller. Draw a circle, mark four equally-spaced positions, and label them $0, 1, 2, 3$ going clockwise. (Starting from $0$ instead of $1$ will keep the arithmetic cleaner.)

```
        0
      /   \
    3       1
      \   /
        2
```

This is the **4-clock**. Its only numbers are $\{0, 1, 2, 3\}$.

Addition on the 4-clock works like turning the hand. Start at a position, move clockwise by a number of steps. When the hand sweeps past $3$ it wraps back to $0$, then $1$, and so on.

Try it: start at $2$, move $3$ steps. You land on $2 \to 3 \to 0 \to 1$. So on the 4-clock, $2 + 3 = 1$.

Or: start at $3$, move $2$ steps. $3 \to 0 \to 1$. So $3 + 2 = 1$ as well.

The wrap-around is the whole idea. On the 4-clock, four steps is zero steps — you end exactly where you began.

## The rule: mod n

The term for this wrap-around is **modular arithmetic**, and the rule has a precise form.

**Definition (modular arithmetic).** Let $n$ be a positive integer. For any integer $a$, the expression **$a \bmod n$** (read "$a$ mod $n$") is the remainder when $a$ is divided by $n$.

In other words: divide $a$ by $n$, throw away the whole number part, keep what's left. The result is always one of $\{0, 1, 2, \ldots, n-1\}$.

A few examples to anchor this:

- $14 \bmod 12 = 2$, because $14 = 1 \times 12 + 2$.
- $7 \bmod 4 = 3$, because $7 = 1 \times 4 + 3$.
- $8 \bmod 4 = 0$, because $8 = 2 \times 4 + 0$.
- $3 \bmod 5 = 3$, because $3 = 0 \times 5 + 3$.

The **bridge** from the clock picture to this rule: "divide by $n$ and keep the remainder" is exactly what the clock's hand does when it sweeps past $n-1$ back to $0$. Moving $14$ steps on a 12-clock lands on $2$ because $14 = 1 \times 12 + 2$ — you did one full lap, then $2$ extra steps.

**Addition mod $n$** works by computing the ordinary integer sum and then applying mod:

$$
a + b \pmod{n} \;=\; (a + b) \bmod n
$$

The parenthetical "(mod $n$)" signals that we are working inside the $n$-clock. The sum is taken ordinarily, then wrapped back into $\{0, 1, \ldots, n-1\}$.

---

**Check yourself.** On the 12-clock — the numbers $\{0, 1, 2, \ldots, 11\}$ — what is $9 + 5$?

<details><summary>Show answer</summary>

$9 + 5 = 14$ as ordinary integers. Now wrap: $14 \bmod 12 = 2$, since $14 = 1 \times 12 + 2$. The answer is $2$.

This matches the clock story at the top of the module: "9 hours plus 5 more hours lands on 2."

</details>

---

## The group $\mathbb{Z}_n$

The set $\{0, 1, 2, \ldots, n-1\}$ together with addition mod $n$ is written **$\mathbb{Z}_n$** (pronounced "Z mod n" or "the integers mod n"). $\mathbb{Z}$ is the letter mathematicians use for the ordinary integers; the subscript $n$ signals that we are working inside the $n$-clock.

So $\mathbb{Z}_4 = \{0, 1, 2, 3\}$ with addition mod $4$, and $\mathbb{Z}_{12} = \{0, 1, 2, \ldots, 11\}$ with addition mod $12$.

The operation is always $+$, and the rule is always: add, then wrap.

Two things are worth noticing right away — call them the **identity element** and the **undo element**, because we will meet them formally in module 03.

- **The do-nothing element** in $\mathbb{Z}_n$ is $0$. Adding $0$ to any number leaves it unchanged: $a + 0 = a$ for every $a$ in $\{0, 1, \ldots, n-1\}$.
- **The undo element** for any $a$ in $\mathbb{Z}_n$ is $n - a$. Adding them gives $a + (n - a) = n \equiv 0 \pmod{n}$ — back to $0$, the identity. On the 4-clock, the undo element of $3$ is $4 - 3 = 1$, because $3 + 1 = 4 \equiv 0 \pmod{4}$.

---

**Check yourself.** What is the undo element of $7$ in $\mathbb{Z}_{12}$?

<details><summary>Show answer</summary>

The undo element of $7$ is $12 - 7 = 5$, because $7 + 5 = 12 \equiv 0 \pmod{12}$.

You can check: if you are 7 hours ahead of midnight and you "undo" 7 hours, you land back at midnight (0). Adding 5 does exactly that on the 12-clock.

</details>

---

## The addition table for $\mathbb{Z}_4$

The clearest way to see a clock group is to write out all its sums in a single table. The entry in row $a$, column $b$ is $a + b \pmod{4}$.

$$
\begin{array}{c|cccc}
+ & 0 & 1 & 2 & 3 \\ \hline
0 & 0 & 1 & 2 & 3 \\
1 & 1 & 2 & 3 & 0 \\
2 & 2 & 3 & 0 & 1 \\
3 & 3 & 0 & 1 & 2
\end{array}
$$

Three things to notice:

1. **Every entry is in $\{0, 1, 2, 3\}$.** The sum never escapes the clock. A set that stays inside itself under the operation is called **closed** — that word will become official in module 03.
2. **The row for $0$ is the same as the column header, and vice versa.** Adding $0$ changes nothing — $0$ is the identity.
3. **Every number appears exactly once in each row and each column.** This means every element has a unique undo partner. For example, the entry $0$ in row $3$ is in column $1$, confirming $3 + 1 = 0$.

---

**Check yourself.** Use the table to find: (a) $3 + 3$ in $\mathbb{Z}_4$. (b) The entry in row $2$, column $3$.

<details><summary>Show answer</summary>

(a) Row $3$, column $3$: the entry is $2$. So $3 + 3 = 2$ in $\mathbb{Z}_4$ (since $6 \bmod 4 = 2$).

(b) Row $2$, column $3$: the entry is $1$. So $2 + 3 = 1$ in $\mathbb{Z}_4$ (since $5 \bmod 4 = 1$).

</details>

---

## Worked example: three sums on the 12-clock

Let's work through several sums in $\mathbb{Z}_{12}$ — the numbers $\{0, 1, \ldots, 11\}$ with addition mod $12$ — to build fluency with the method.

**Problem.** Compute: (a) $9 + 5$, (b) $8 + 7$, (c) $11 + 11$ in $\mathbb{Z}_{12}$.

**Solution.**

(a) $9 + 5 = 14$. Now $14 \bmod 12$: $14 = 1 \times 12 + 2$, so the remainder is $2$.
$$9 + 5 \equiv 2 \pmod{12}$$

(b) $8 + 7 = 15$. Now $15 \bmod 12$: $15 = 1 \times 12 + 3$, so the remainder is $3$.
$$8 + 7 \equiv 3 \pmod{12}$$

(c) $11 + 11 = 22$. Now $22 \bmod 12$: $22 = 1 \times 12 + 10$, so the remainder is $10$.
$$11 + 11 \equiv 10 \pmod{12}$$

**Method to remember:** add as usual, then ask "how far past a full lap is this?" The answer is the remainder. One quick shortcut: if the sum is between $n$ and $2n-2$, subtract $n$ once. For example, $14 - 12 = 2$ and $15 - 12 = 3$, matching the work above.

## Exercises

**Exercise 1.** Compute each sum in $\mathbb{Z}_5 = \{0, 1, 2, 3, 4\}$.

(a) $3 + 4$ (b) $4 + 4$ (c) $2 + 3$

<details><summary>Show solution</summary>

(a) $3 + 4 = 7$. Since $7 = 1 \times 5 + 2$, we get $3 + 4 \equiv 2 \pmod{5}$.

(b) $4 + 4 = 8$. Since $8 = 1 \times 5 + 3$, we get $4 + 4 \equiv 3 \pmod{5}$.

(c) $2 + 3 = 5$. Since $5 = 1 \times 5 + 0$, we get $2 + 3 \equiv 0 \pmod{5}$. Five steps lands exactly back at $0$.

</details>

---

**Exercise 2.** In $\mathbb{Z}_7 = \{0, 1, 2, 3, 4, 5, 6\}$, find the undo element for each of these:

(a) $3$ (b) $6$ (c) $0$

<details><summary>Show solution</summary>

The undo element of $a$ in $\mathbb{Z}_n$ is $n - a$ (for $a \neq 0$), because $a + (n-a) = n \equiv 0 \pmod{n}$.

(a) Undo element of $3$: $7 - 3 = 4$. Check: $3 + 4 = 7 \equiv 0 \pmod{7}$. ✓

(b) Undo element of $6$: $7 - 6 = 1$. Check: $6 + 1 = 7 \equiv 0 \pmod{7}$. ✓

(c) Undo element of $0$: $0$ itself, because $0 + 0 = 0$. The identity is always its own inverse.

A tempting wrong answer for (b): some readers instinctively write $7$. But $7$ is not in $\mathbb{Z}_7$ — the numbers stop at $6$, and $7 \bmod 7 = 0$, which is already in the set.

</details>

---

**Exercise 3.** Build the full addition table for $\mathbb{Z}_3 = \{0, 1, 2\}$ with addition mod $3$. Then use your table to answer: does every row contain a $0$? What does that tell you?

<details><summary>Show solution</summary>

$$
\begin{array}{c|ccc}
+ & 0 & 1 & 2 \\ \hline
0 & 0 & 1 & 2 \\
1 & 1 & 2 & 0 \\
2 & 2 & 0 & 1
\end{array}
$$

Yes, every row contains a $0$: it appears in column $2$ of row $1$, column $1$ of row $2$, and column $0$ of row $0$. That $0$ in each row is the undo sum — it marks the column of the undo partner. So every element has an undo element in $\mathbb{Z}_3$.

</details>

---

**Exercise 4.** (Conceptual.) Suppose someone claims that $\mathbb{Z}_6$ with addition mod $6$ has an element with no undo partner. Without computing the whole table, explain why that is impossible.

<details><summary>Show solution</summary>

For any $a$ in $\mathbb{Z}_6 = \{0, 1, 2, 3, 4, 5\}$, the number $6 - a$ is also in $\mathbb{Z}_6$ (or equals $6 \bmod 6 = 0$ when $a = 0$). And $a + (6 - a) = 6 \equiv 0 \pmod{6}$.

So $6 - a$ is always available as the undo partner. No element is left without one.

The general rule: in $\mathbb{Z}_n$, the undo element of $a$ is $n - a$ (and $0$ is its own undo element). This works for every $n \geq 1$.

</details>

---

**Exercise 5.** (Stretch.) Consider $\mathbb{Z}_4$. Start at $1$ and keep adding $1$ repeatedly: $1, 1+1=2, 2+1=3, 3+1=0, 0+1=1, \ldots$. List the sequence of positions you visit. What do you notice?

<details><summary>Show solution</summary>

Starting at $1$: $1, 2, 3, 0, 1, 2, 3, 0, \ldots$. You cycle through all four elements $\{0, 1, 2, 3\}$ and then repeat.

Starting from $1$ and adding $1$ repeatedly visits every element of $\mathbb{Z}_4$ before looping back. This means $1$ can **generate** the entire group by repeated addition — a hint at a concept called a **cyclic group** and a **generator** that we'll explore in module 08. Not every element can do this: starting at $2$ gives $2, 0, 2, 0, \ldots$ — it only visits two elements. The difference turns out to matter a great deal.

</details>

---

## Recap

Addition mod $n$ takes any two elements of $\{0, 1, \ldots, n-1\}$ and wraps their ordinary sum back around the clock. The set with this operation is written $\mathbb{Z}_n$ (the $n$-hour clock), and it has an identity ($0$) and an inverse for every position ($n - a$ undoes $a$). The addition table for $\mathbb{Z}_4$ shows all of this at once: the entries stay inside the set, adding $0$ leaves every row unchanged, and a $0$ entry sits in every row marking each inverse pair. That pattern — a closed set, a wrap-around rule, an identity, and an inverse for every element — is the skeleton module 03 will name.
