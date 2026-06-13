---
title: What Is a Group?
course: abstract-algebra
order: 4
summary: Put the four rules together and you get the single most important object in modern algebra.
estimatedMinutes: 18
objectives:
  - State the group axioms
  - Verify that a given set-with-operation is a group
  - Give an example of something that is not a group and say which axiom fails
prerequisites: []
---

## The hook

For three modules we have been collecting parts. Closure, associativity, an identity, inverses — four rules, each met on its own, each looking like a modest bookkeeping demand on a set and its operation. They have felt like a checklist a math teacher might tape to the wall.

Now we screw the parts together. The moment all four hold at once, something rigid and powerful clicks into being, and it has a name. Mathematicians have spent two centuries chasing it through arithmetic, geometry, physics, and the secret structure of equations. It is called a **group**, and almost everything ahead in this course is the study of this one object. This module is where the on-ramp ends and the road begins.

## Intuition

Think of the four rules as four hinges. Any one of them, alone, lets a set-with-operation flop around. Closure alone says you never fall out of the set, but tells you nothing about undoing a move. Inverses alone are meaningless if you can't even say what "undo" combines back to. The rules only do real work *together* — and together they describe a world where you can always combine, always regroup, always stand still, and always step back.

Here is the picture worth keeping. A group is a set of *moves* you can perform, with a way to do one move and then another and call the result a single move. Doing nothing is allowed (that is the identity). Every move can be reversed (that is the inverse). And it never matters how you bracket a string of moves (that is associativity). Closure is just the promise that combining two moves always lands you on another move in the set, never somewhere outside it.

Quarter-turns of a square fit this. Hours on a clock fit this. The plain integers fit this. They look nothing alike, and yet they run the same machinery — which is exactly the promise we made in module 1. The definition below is the machine's blueprint.

One rule you might expect is missing on purpose. Nobody requires that the order of combining doesn't matter — that doing $a$ then $b$ gives the same result as doing $b$ then $a$. Plenty of groups have that nicety and plenty don't, so it is left *out* of the definition. When a group does have it, we give it a special name, **abelian**, and that is the subject of the next module.

## Definition (Group)

A **group** is a set $G$ together with an operation $*$ that combines any two elements $a, b \in G$ into an element $a * b$, satisfying these four axioms:

1. **Closure.** For all $a, b \in G$, the element $a * b$ is again in $G$.
2. **Associativity.** For all $a, b, c \in G$, $(a * b) * c = a * (b * c)$.
3. **Identity.** There is an element $e \in G$, called the **identity**, such that $e * a = a * e = a$ for every $a \in G$.
4. **Inverses.** For each $a \in G$ there is an element $a^{-1} \in G$, called the **inverse** of $a$, such that $a * a^{-1} = a^{-1} * a = e$.

The operation is **not** required to be commutative: $a * b$ and $b * a$ may differ.

## Worked examples

What does it mean to "check the definition"? It means walking down the four axioms one at a time, and for each one giving an honest reason it holds — or finding the case where it fails. You may never have done this before. We will go slowly and say *why* at every step.

### Example (The integers under addition form a group)

**Problem.** Show that the set of integers $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ with the operation of ordinary addition is a group.

**Solution.** Take the operation $*$ to be $+$. We check the four axioms in turn.

*Closure.* Add any two integers and you get an integer: $3 + 5 = 8$, $(-4) + 1 = -3$. Adding whole numbers never produces a fraction or anything stranger, so $a + b \in \mathbb{Z}$ for all $a, b \in \mathbb{Z}$. Closure holds.

*Associativity.* Grouping does not change a sum. For instance,

$$
(2 + 3) + 4 = 5 + 4 = 9 \qquad\text{and}\qquad 2 + (3 + 4) = 2 + 7 = 9.
$$

This is a fact about ordinary addition you have relied on your whole life: $(a + b) + c = a + (b + c)$ for any integers $a, b, c$. Associativity holds.

*Identity.* We need an element that changes nothing when added. That element is $0$, because $0 + a = a + 0 = a$ for every integer $a$. So $e = 0$. The identity exists.

*Inverses.* Given an integer $a$, we need some integer that adds back to $0$. The negative $-a$ does exactly that: $a + (-a) = (-a) + a = 0$. And $-a$ is itself an integer, so it lives in the set. Here the inverse of $a$ is $a^{-1} = -a$. Inverses exist.

All four axioms hold, so $\mathbb{Z}$ under addition is a group. $\square$

A note on notation: we wrote the inverse of $a$ as $-a$, not $a^{-1}$, because the operation is addition. The symbol $a^{-1}$ in the definition just means "the thing that undoes $a$." When the operation is addition, that thing is the negative; when the operation is multiplication, it is the reciprocal. Same idea, different costume.

### Example (Clock arithmetic $\mathbb{Z}_n$ is a group)

**Problem.** Fix a whole number $n \geq 1$. Show that $\mathbb{Z}_n = \{0, 1, 2, \dots, n-1\}$ — the numbers on an $n$-hour clock — with **addition mod $n$** is a group. (Addition mod $n$ means: add as usual, then keep only the remainder after dividing by $n$.)

**Solution.** Write the operation as $+$ here too, understanding it as addition mod $n$. To keep the arithmetic concrete, we will illustrate with $n = 5$, so $\mathbb{Z}_5 = \{0, 1, 2, 3, 4\}$, but every step holds for any $n$.

*Closure.* Adding two numbers mod $n$ and taking the remainder always lands in $\{0, 1, \dots, n-1\}$, because a remainder after dividing by $n$ is never smaller than $0$ nor larger than $n - 1$. For example, in $\mathbb{Z}_5$, $4 + 3 = 7$, and $7$ leaves remainder $2$, so $4 + 3 = 2$. The result is back in the set. Closure holds.

*Associativity.* Regrouping ordinary sums doesn't change them, and taking remainders afterward respects that, so addition mod $n$ inherits associativity from ordinary addition. In $\mathbb{Z}_5$:

$$
(4 + 3) + 2 = 2 + 2 = 4 \qquad\text{and}\qquad 4 + (3 + 2) = 4 + 0 = 4.
$$

Associativity holds.

*Identity.* Adding $0$ changes nothing, even after taking remainders: $0 + a = a + 0 = a$ for every $a$. So $e = 0$. The identity exists.

*Inverses.* Given an element $a$ in $\mathbb{Z}_n$, we need a partner that adds back to $0$ mod $n$. Take $n - a$ (and take $0$ itself as its own inverse). Then $a + (n - a) = n$, which leaves remainder $0$. In $\mathbb{Z}_5$, the inverse of $3$ is $5 - 3 = 2$, and indeed $3 + 2 = 5 = 0$ on the clock. Every element has an inverse inside the set. Inverses hold.

All four axioms hold, so $\mathbb{Z}_n$ under addition mod $n$ is a group. $\square$

### Example (A non-group: the integers under multiplication)

Checking the axioms is only half the skill. The other half is recognizing when something *isn't* a group, and naming the rule that breaks. A definition you can only confirm, never refute, is a definition you don't really understand.

**Problem.** Decide whether the integers $\mathbb{Z}$ with the operation of ordinary **multiplication** form a group. If not, name the axiom that fails.

**Solution.** Take $*$ to be $\times$ and check.

*Closure.* The product of two integers is an integer. Holds.

*Associativity.* $(a \times b) \times c = a \times (b \times c)$ for all integers. Holds.

*Identity.* Multiplying by $1$ changes nothing: $1 \times a = a \times 1 = a$. So $e = 1$. Holds.

*Inverses.* Here it breaks. For an element $a$ to have an inverse, we need an *integer* $b$ with $a \times b = 1$. Try $a = 2$: the only number with $2 \times b = 1$ is $b = \tfrac{1}{2}$, which is not an integer. There is no integer that multiplies with $2$ to give $1$. So $2$ has no inverse inside $\mathbb{Z}$, and the inverse axiom fails.

Three axioms hold, but one is enough to disqualify it. The integers under multiplication are **not** a group; the failing axiom is **inverses**. $\square$

This is the typical shape of a non-example. The structure looks group-like, sails through the first axioms, and then trips on exactly one. Pinning down *which* one is the whole answer. (For a second non-example, try the positive integers $\{1, 2, 3, \dots\}$ under addition: there is no identity, since $0$ isn't in the set, and so no inverses either.)

## Exercises

1. **(Mechanical)** Verify that $\mathbb{Z}_4 = \{0, 1, 2, 3\}$ under addition mod $4$ is a group by finding the identity and writing down the inverse of each of the four elements.
   *Hint: the identity is $0$; for the inverse of $a$, ask what adds to $a$ to give $4$ (which is $0$ on this clock).*

2. **(Mechanical)** The set $\{1, -1\}$ under ordinary multiplication has just two elements. Check all four axioms and confirm it is a group. What is the identity, and what is the inverse of $-1$?
   *Hint: compute every product — $1\times 1$, $1\times(-1)$, $(-1)\times(-1)$ — and notice you never leave the set.*

3. **(Conceptual)** The set of **odd** integers $\{\dots, -3, -1, 1, 3, \dots\}$ under addition is *not* a group. Which axiom fails first, and why? Give a specific pair of elements that demonstrates the failure.
   *Hint: add two odd numbers and look at whether the result is still odd.*

4. **(Conceptual)** The positive real numbers without zero, $\{x : x > 0\}$, under ordinary multiplication, *is* a group. Identify the identity element and describe the inverse of a number $a$. Why was it important to throw zero out?
   *Hint: the inverse of $a$ is its reciprocal $\tfrac{1}{a}$; ask what goes wrong if $a = 0$.*

5. **(Conceptual)** Commutativity is not one of the four axioms. Explain in a sentence or two why a set-with-operation could satisfy all four group axioms and still have $a * b \neq b * a$ for some elements. (You do not need to produce such a group yet — just argue why nothing in the definition forbids it.)
   *Hint: reread the four axioms and check that none of them mentions the order of $a$ and $b$.*

6. **(Stretch)** Consider $\{0, 1, 2, 3\}$ under **multiplication mod $4$** (multiply, then take the remainder). Show this is *not* a group by finding an element with no inverse. Which element is the troublemaker, and which axiom fails?
   *Hint: the identity would be $1$; check whether $0$ — or $2$ — can ever be multiplied up to $1$ on this clock.*

## Recap

A group is the four rules bolted into one object: a set $G$ with an operation that is closed and associative, has an identity $e$, and gives every element an inverse $a^{-1}$. We confirmed that the integers under addition and the clocks $\mathbb{Z}_n$ under addition mod $n$ pass all four tests, and we watched the integers under multiplication fail the single test of inverses — the move that tells a group from a near-miss. You have now done your first real mathematics: checking a definition, axiom by axiom, and saying why. Next we look at the rule we deliberately left out — commutativity — and meet the groups polite enough to obey it, the **abelian** groups.
