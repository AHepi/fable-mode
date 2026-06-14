---
title: The Rules of Openness
course: topology
order: 3
summary: A topology is a chosen collection of open sets obeying three rules — and those rules are what make all of topology work.
estimatedMinutes: 16
objectives:
  - State the three axioms of a topology (∅ and X are open; arbitrary unions; finite intersections).
  - Verify whether a given collection of sets is a topology.
  - Give a non-example that fails one axiom.
prerequisites: [02-open-sets]
---

Suppose you handed someone a set of points — the number line, say, or the flat plane — and asked them to point out which subsets are "open." Where would they even start? In module 02 we answered that for the line and the plane by hand: an open set is one where every point has a little room around it, room that stays inside the set. But topology turns out to be greedier than that. It wants to do this for *any* set at all — a finite scatter of dots, a sphere's surface, a space of functions, things with no notion of distance to measure "room" with. And on a bare set there is no ruler, so the "room around every point" recipe has nothing to chew on.

So topologists made a bold move. Instead of *computing* which sets are open, you simply *declare* it. You walk up to a set, you hand-pick a family of its subsets, and you announce: "These are the open ones." That declared family is called a **topology** on the set — the chosen collection of open sets, the rulebook of openness for that space.

But you can't declare just anything. A reckless declaration would break everything we want to build on top of open sets later — continuity, sameness, the whole edifice. So the declaration has to obey three conditions. They are not arbitrary red tape; each one is the price of admission for a family that deserves to be called "open." Think of it as a club called *Open*, with three rules for who gets in. Meet the rules first, and you'll see they only ask for things the open sets of module 02 already do for free.

### Three rules, in plain words

Picture your chosen family of subsets sitting in front of you. For it to count as a topology, it has to pass three checks.

**First, the charter members.** The empty set $\varnothing$ and the whole space $X$ must both be in the family. We already saw in module 02 that these two are open in every sensible sense — the whole space has room to spare around every point, and the empty set has no points to make trouble. So the rule just makes that official: these two are always in the club, by charter.

**Second, unions are always welcome.** Take any of the sets you've called open — two of them, ten, a thousand, infinitely many, it doesn't matter how many — and pool all their points together into one big set. That union has to be open too. This matches module 02 exactly: glue together any pile of "room around every point" sets and every point still has its room, because it kept whatever room it had in the piece it came from.

**Third, intersections are welcome — but only finitely many at a time.** Take a *finite* number of your open sets and keep only the points common to all of them. That overlap has to be open too. Two open intervals that overlap, for instance, overlap in an open interval. But notice the careful word: **finite**. With unions you could take as many as you liked; with intersections you may take only finitely many. That single asymmetry is the most surprising thing in this chapter, and we will see exactly why it has to be there.

That's the whole rulebook. Three rules. Now let's state them with no wiggle room.

## Definition (Topology)

Let $X$ be a set. A **topology** on $X$ is a collection $\tau$ of subsets of $X$ satisfying all three of the following:

1. $\varnothing \in \tau$ and $X \in \tau$.
2. The union of any collection of members of $\tau$ (however many) is again a member of $\tau$.
3. The intersection of any **finite** number of members of $\tau$ is again a member of $\tau$.

The pair $(X, \tau)$ is called a **topological space**. The members of $\tau$ are called the **open sets** of $(X, \tau)$.

Let's decode the notation, piece by piece, so it reads as the three plain-words rules and nothing more.

- $\tau$ is the Greek letter *tau*; it's just the name we give the chosen family. Saying $U \in \tau$ means "$U$ is one of the sets we declared open." Saying $\tau$ is "a collection of subsets of $X$" means every member of $\tau$ is itself a set of points drawn from $X$.
- Rule 1 is the charter members: the symbol $\varnothing$ is the empty set and $X$ is the whole space, and $\in \tau$ says each is in the family.
- Rule 2 is "unions always welcome." "Any collection, however many" is the load-bearing phrase — two, or infinitely many, all allowed.
- Rule 3 is "finite intersections only." The word **finite** is the entire difference from rule 2, and it is there on purpose.

The bundle $(X, \tau)$ packages the two things a space needs: the points $X$, and the decision $\tau$ about which subsets count as open. Change $\tau$ and you've changed the space, even if the points are the same — the same dots can carry different topologies, the way the same deck of cards can be dealt into different games.

## Worked example: a collection that *is* a topology

**Problem.** Let $X = \{a, b, c\}$ — just three points. Consider the family

$$
\tau = \{\, \varnothing,\ \{a\},\ \{a, b\},\ \{a, b, c\} \,\}.
$$

Is $\tau$ a topology on $X$?

**Solution.** Check the three rules one at a time. There's nothing to compute — just look.

- *Rule 1 (charter members).* Is $\varnothing$ in the family? Yes, it's listed first. Is the whole space $X = \{a,b,c\}$ in the family? Yes — that's the last entry. **Rule 1 holds.**
- *Rule 2 (unions).* Take any of the listed sets and union them; the result must be on the list. The sets are nested like a ladder — $\varnothing \subseteq \{a\} \subseteq \{a,b\} \subseteq \{a,b,c\}$ — so the union of any bunch of them is just the biggest one you picked, which is already on the list. For instance $\{a\} \cup \{a,b\} = \{a,b\}$, listed. **Rule 2 holds.**
- *Rule 3 (finite intersections).* Same trick. The intersection of any bunch of nested sets is the smallest one you picked, which is already listed. For instance $\{a\} \cap \{a,b\} = \{a\}$, listed. **Rule 3 holds.**

All three pass, so $\tau$ is a topology, and $(X, \tau)$ is a genuine topological space — even though $X$ is just three dots with no distance, no ruler, nothing to measure "room" with. We declared the open sets, the declaration obeyed the rules, and that is all it takes.

## Check yourself

On the same three points $X = \{a, b, c\}$, is the family $\{\, \varnothing,\ \{a, b, c\} \,\}$ a topology? (This is the smallest declaration you could possibly make.)

<details><summary>Show answer</summary>

Yes. Rule 1 asks for $\varnothing$ and $X$, and those are the only two members, so it holds. Any union of members is again $\varnothing$ or $\{a,b,c\}$ (you're choosing among just those two), and any finite intersection is too — for example $\varnothing \cap \{a,b,c\} = \varnothing$, which is listed. All three rules pass with nothing to spare. This bare-minimum topology, holding only the two charter members, works on *any* set at all; it's the most frugal way to make a space.

</details>

## Worked example: a collection that is *not* a topology

**Problem.** On $X = \{a, b, c\}$ again, consider

$$
\sigma = \{\, \varnothing,\ \{a\},\ \{b\},\ \{a, b, c\} \,\}.
$$

Is $\sigma$ a topology?

**Solution.** Run the same three checks, and watch for the first failure.

- *Rule 1.* $\varnothing$ is in, $X$ is in. **Holds.**
- *Rule 2 (unions).* Here's the trouble. Union the two singletons: $\{a\} \cup \{b\} = \{a, b\}$. Is $\{a, b\}$ on the list? Look — no, it isn't. We declared $\{a\}$ open and $\{b\}$ open, but we never declared $\{a, b\}$ open, and rule 2 says the union of open sets *must* be open. **Rule 2 fails.**

One broken rule is enough. $\sigma$ is **not** a topology. It's a perfectly fine collection of subsets — just not one that earns the name "open." This is the standard trap worth naming outright:

> **A tempting wrong answer:** "Any collection of subsets I write down is a topology." Not so. A topology is a *disciplined* family, not just any pile of sets. The collection $\sigma$ above contains $\{a\}$ and $\{b\}$ but not their union $\{a,b\}$, and that omission alone disqualifies it. To repair $\sigma$ you'd have to add $\{a, b\}$ (and then re-check that nothing new breaks). The lesson: declaring sets open is a promise, and the three rules are the promises you can't go back on. Most random collections of subsets fail at least one of them.

## Why "finite" in the third rule?

The asymmetry between rules 2 and 3 looks like a typo. Unions of *any* number of open sets stay open, but intersections only of *finitely* many? Why would topology trust unlimited unions and get nervous about unlimited intersections? Let's watch it break, on the most familiar space we have: the real line $\mathbb{R}$, with the open intervals from module 02 as our open sets.

Take the open intervals

$$
\left( -\tfrac{1}{1}, \tfrac{1}{1} \right),\quad \left( -\tfrac{1}{2}, \tfrac{1}{2} \right),\quad \left( -\tfrac{1}{3}, \tfrac{1}{3} \right),\quad \left( -\tfrac{1}{4}, \tfrac{1}{4} \right),\quad \dots
$$

— one for each whole number $n$, the interval $\left( -\tfrac{1}{n}, \tfrac{1}{n} \right)$. Each one is an open interval, so each one is open. There are infinitely many of them.

Now picture them. They're all centered at $0$, and as $n$ grows, the interval squeezes inward: $(-1, 1)$, then $(-\tfrac12, \tfrac12)$, then $(-\tfrac13, \tfrac13)$, tighter and tighter, hugging the point $0$ from both sides. Ask: which points survive in *all* of them at once — what is the intersection?

A point like $0.1$ lives in the first few intervals, but once $n$ passes $10$ the interval $(-\tfrac{1}{n}, \tfrac{1}{n})$ is narrower than $0.1$, so $0.1$ drops out and is not in the intersection. The same fate meets *every* number except one: pick any point other than $0$, however close to $0$, and a tight-enough interval eventually slips inside it and leaves that point out. Only $0$ itself is in every single interval — it sits dead center in all of them. So

$$
\left(-\tfrac11,\tfrac11\right) \cap \left(-\tfrac12,\tfrac12\right) \cap \left(-\tfrac13,\tfrac13\right) \cap \cdots = \{0\}.
$$

The infinite intersection of these open intervals is the single point $\{0\}$. And a single point is **not open** — it has no room around it at all (any wiggle off $0$, to the left or the right, lands outside $\{0\}$). So an infinite intersection of open sets just produced something that isn't open.

That's the whole reason for the word "finite." If rule 3 allowed infinitely many intersections, the open sets of the line would no longer be closed under their own intersection rule — the system would contradict itself. A *finite* intersection never does this: chop the list off at any whole number and the overlap is a genuine open interval (the widest left endpoint to the narrowest right endpoint), with room to spare. It's only the unending squeeze, all the way down to a point, that does the damage. Unions can pile up forever and stay roomy; intersections, pushed to infinity, can strangle the room out of a set. Hence: unions, any number; intersections, finitely many.

## Exercises

Work each one straight off the three rules. For the "is it a topology?" problems, check all three rules and stop at the first failure.

**1.** On $X = \{1, 2\}$, is $\tau = \{\, \varnothing,\ \{1\},\ \{1, 2\} \,\}$ a topology?

<details><summary>Show solution</summary>

Yes. Rule 1: $\varnothing$ and $X = \{1,2\}$ are both listed. Rule 2: the only nontrivial union is $\{1\} \cup \{1,2\} = \{1,2\}$, listed (and any union involving $\varnothing$ just gives back the other set). Rule 3: the only nontrivial intersection is $\{1\} \cap \{1,2\} = \{1\}$, listed. All three hold, so it's a topology. (Note $\{2\}$ is *not* declared open here, and that's allowed — a topology doesn't have to make every subset open.)

</details>

**2.** On $X = \{a, b, c\}$, show that $\tau = \{\, \varnothing,\ \{a, b\},\ \{b, c\},\ \{a, b, c\} \,\}$ is **not** a topology by finding a rule it breaks.

<details><summary>Show solution</summary>

It fails rule 3 (finite intersections). Take $\{a, b\} \cap \{b, c\} = \{b\}$ — the only point common to both is $b$. But $\{b\}$ is not on the list, and rule 3 demands the intersection of open sets be open. So $\tau$ is not a topology. (Rule 2 is fine here: $\{a,b\} \cup \{b,c\} = \{a,b,c\}$, which *is* listed — so you have to check intersections too, not just unions. This is exactly the trap of assuming any collection works: this one looks reasonable but quietly violates rule 3.)

</details>

**3.** Find the single subset you could add to $\sigma = \{\, \varnothing,\ \{a\},\ \{b\},\ \{a, b, c\} \,\}$ (the non-example from the chapter, on $X = \{a,b,c\}$) to make it a topology.

<details><summary>Show solution</summary>

Add $\{a, b\}$. The only failure was rule 2: $\{a\} \cup \{b\} = \{a, b\}$ was missing. Putting $\{a, b\}$ in repairs that union. Now re-check everything with the enlarged family $\{\, \varnothing,\ \{a\},\ \{b\},\ \{a, b\},\ \{a, b, c\} \,\}$: every union of members lands on the list ($\{a\}\cup\{a,b\}=\{a,b\}$, etc.), and every intersection does too ($\{a\} \cap \{a,b\} = \{a\}$; $\{a,b\}\cap\{a,b,c\}=\{a,b\}$; $\{a\}\cap\{b\}=\varnothing$, which is listed). All three rules hold, so it's now a topology. The takeaway: fixing one broken rule means re-checking that you didn't break another.

</details>

**4.** True or false: on any set $X$, the collection $\{\, \varnothing,\ X \,\}$ — only the two charter members — is always a topology. Explain.

<details><summary>Show solution</summary>

True. Rule 1 asks for exactly $\varnothing$ and $X$, and those are the only members. Any union you can form uses only $\varnothing$ and $X$, and gives back $\varnothing$ or $X$ (for example $\varnothing \cup X = X$) — still on the list. Any finite intersection does the same ($\varnothing \cap X = \varnothing$). So all three rules hold no matter what $X$ is. This frugal topology always works; it's the smallest possible declaration of openness on a space.

</details>

**5.** Explain in your own words why we are allowed to intersect *finitely* many open sets but not infinitely many. Give the example the chapter used.

<details><summary>Show solution</summary>

A finite intersection of open sets is safe because chopping the list off at any whole number leaves a set with room around every point: the overlap of finitely many open intervals is a genuine open interval (run from the largest left endpoint to the smallest right endpoint). An *infinite* intersection can squeeze that room down to nothing. The chapter's example: the intervals $\left(-\tfrac{1}{n}, \tfrac{1}{n}\right)$ for $n = 1, 2, 3, \dots$ all contain $0$, but as $n$ grows they tighten around $0$ and shed every other point. Their infinite intersection is the lone point $\{0\}$, which has no room around it — not open. Allowing infinite intersections in rule 3 would let open sets produce non-open sets, contradicting the system. So the rule is capped at finitely many.

</details>

**6.** *(Conceptual.)* The whole space $X$ is always open, by rule 1. Using only the rules, argue that the intersection of *all* the open sets in a finite topology is itself open — and then explain why this can fail if the topology is infinite.

<details><summary>Show solution</summary>

If the topology $\tau$ has only finitely many members, then "all the open sets" is a finite list, and rule 3 applies directly: the intersection of finitely many open sets is open. Done — no squeeze possible, because there are only finitely many sets to intersect. If $\tau$ is infinite (as the real line's topology is, with its endless supply of open intervals), then "intersect all the open sets" asks for an *infinite* intersection, which rule 3 does **not** promise to keep open — and the $\left(-\tfrac{1}{n}, \tfrac{1}{n}\right)$ example shows it genuinely can fail, collapsing to a single non-open point. So the conclusion holds for finite topologies for free, and the finiteness in rule 3 is exactly what's protecting it.

</details>

## Recap

A topology is a deliberate choice, not a measurement: on any set $X$ you declare which subsets are open, and that declaration earns the name $(X, \tau)$ only if it keeps three promises — the charter members $\varnothing$ and $X$ are in, unions of any size stay in, and intersections of finitely many stay in. Most collections of subsets break at least one promise, so checking the rules really is checking, not a formality. The one rule that surprises everyone — finite intersections, not infinite — earns its keep on the number line, where the intervals $\left(-\tfrac{1}{n}, \tfrac{1}{n}\right)$ tighten down to the bare point $\{0\}$ and quietly leave openness behind. With $\tau$ in hand we finally have open sets on *any* space, not just the line and the plane — and that is exactly the ground we need to stand on next, when we rebuild continuity itself out of nothing but open sets and their preimages.
