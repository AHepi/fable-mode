# Curriculum — Abstract Algebra

## Course metadata (for _course.md)

- **title:** Abstract Algebra
- **slug:** abstract-algebra
- **description:** Discover the hidden rules behind symmetry, arithmetic, and structure — a first
  course in group theory built entirely from high-school math.
- **level:** highschool
- **prerequisites:** Comfortable manipulating algebraic expressions and solving equations;
  familiarity with functions and basic geometry. No calculus or proof experience needed.
- **tags:** algebra, group-theory, pure-math, symmetry
- **estimatedHours:** 5
- **schemaVersion:** 1

## Prerequisite graph (ordering check)

```
01 symmetry/motivation
      ↓
02 clock arithmetic ──┐
      ↓               │
03 operations & rules │
      ↓               │
04 what is a group ←──┘
      ↓
05 a zoo of groups
      ↓
06 symmetries of a triangle (non-commutative)
      ↓
07 subgroups
      ↓
08 cyclic groups & generators
      ↓
09 order & Lagrange's theorem
      ↓
10 homomorphisms & isomorphisms
      ↓
11 beyond groups: rings & fields
```

Each module uses only earlier modules. No forward references. 11 modules, ~5 hours total.

## Module specs

Each authoring sub-agent gets one spec below plus the L3 voice/math references.

### 01 — The Secret Life of Symmetry
- **slug:** `01-the-secret-life-of-symmetry`
- **summary:** What abstract algebra is really about — structure, not numbers — and why symmetry is
  the way in.
- **objectives:** Explain what abstract algebra studies; recognize symmetry as a kind of structure;
  describe why "operations" matter more than the objects they act on.
- **prerequisites:** none
- **estimatedMinutes:** 12
- **notes:** Pure motivation + the big picture. Almost all prose (literary-maverick territory).
  Minimal formal content. Set up the journey: by the end you'll see arithmetic and symmetry as the
  same kind of thing.

### 02 — Clock Arithmetic
- **slug:** `02-clock-arithmetic`
- **summary:** Adding on a clock face introduces a finite world of arithmetic that wraps around —
  our first playground.
- **objectives:** Compute sums in modular arithmetic; explain what "mod $n$" means; identify the
  wrap-around (identity) and how to "undo" a step.
- **prerequisites:** 01
- **estimatedMinutes:** 18
- **notes:** Teach $\mathbb{Z}_n$ concretely via clocks. Define $a \bmod n$. Build the addition
  table for $\mathbb{Z}_5$ or $\mathbb{Z}_{12}$. Foreshadow identity/inverse without naming them yet.

### 03 — Operations and Their Rules
- **slug:** `03-operations-and-their-rules`
- **summary:** Strip arithmetic down to its bones: a set, a way to combine two things, and four
  rules worth caring about.
- **objectives:** Define a binary operation; state closure, associativity, identity, and inverse;
  test whether a given operation has each property.
- **prerequisites:** 01, 02
- **estimatedMinutes:** 20
- **notes:** The conceptual heart of the on-ramp. Introduce binary operation as a function. Define
  closure/associativity/identity/inverse precisely (formal blocks), each motivated by clock
  arithmetic and ordinary addition. This assembles the parts the group axioms will bolt together.

### 04 — What Is a Group?
- **slug:** `04-what-is-a-group`
- **summary:** Put the four rules together and you get the single most important object in modern
  algebra.
- **objectives:** State the group axioms; verify that a given set-with-operation is a group; give
  an example of something that is *not* a group and say which axiom fails.
- **prerequisites:** 02, 03
- **estimatedMinutes:** 18
- **notes:** The payoff of the on-ramp. Formal **Definition (Group)**. Show $\mathbb{Z}$ under $+$
  and $\mathbb{Z}_n$ under $+$ are groups; show $\mathbb{Z}$ under $\times$ is not (no inverses).
  Gently introduce what it means to *check* axioms — the reader's first taste of proof.

### 05 — A Zoo of Groups
- **slug:** `05-a-zoo-of-groups`
- **summary:** Groups are everywhere once you know the shape — numbers, fractions, roots of unity,
  and more.
- **objectives:** Identify groups among varied examples; distinguish finite from infinite groups;
  recognize when an operation is commutative (abelian).
- **prerequisites:** 04
- **estimatedMinutes:** 16
- **notes:** Breadth module. $\mathbb{Z}$ under $+$, $\mathbb{Q}^{\times}$ under $\times$,
  $\{1,i,-1,-i\}$ under $\times$, $\mathbb{Z}_n$. Define **abelian**. Cayley tables for small cases.

### 06 — Symmetries of a Triangle
- **slug:** `06-symmetries-of-a-triangle`
- **summary:** The symmetries of a triangle form a group where order matters — our first taste of
  non-commutative structure.
- **objectives:** List the six symmetries of an equilateral triangle; compose two symmetries;
  show by example that the operation is not commutative.
- **prerequisites:** 04, 05
- **estimatedMinutes:** 22
- **notes:** The $D_3$ module. Concrete: rotations + reflections of a paper triangle. Composition as
  the operation. Build the Cayley table. Exhibit two symmetries that don't commute — kill the
  "everything commutes" misconception. This is the course's vivid centerpiece.

### 07 — Subgroups
- **slug:** `07-subgroups`
- **summary:** Sometimes a group hides smaller groups inside it — and finding them reveals its
  structure.
- **objectives:** Define a subgroup; test whether a subset is a subgroup; find the subgroups of a
  small group.
- **prerequisites:** 04, 06
- **estimatedMinutes:** 18
- **notes:** Formal **Definition (Subgroup)** + the subgroup test (closure + inverses + identity).
  Examples in $\mathbb{Z}_n$ and $D_3$. Set up the counting that Lagrange will explain.

### 08 — Cyclic Groups and Generators
- **slug:** `08-cyclic-groups-and-generators`
- **summary:** Start with one element and keep applying it — sometimes you generate the whole group.
- **objectives:** Define the order of an element; generate a cyclic subgroup from one element;
  recognize cyclic groups and their generators.
- **prerequisites:** 07
- **estimatedMinutes:** 18
- **notes:** Powers of an element; **order of an element**; **cyclic group**. $\mathbb{Z}_n$ is
  cyclic; rotations of the triangle form a cyclic subgroup. Generators.

### 09 — Counting Tells the Truth: Lagrange's Theorem
- **slug:** `09-lagranges-theorem`
- **summary:** A simple counting fact constrains every subgroup — the size of a subgroup must divide
  the size of the group.
- **objectives:** State Lagrange's theorem; use it to rule out impossible subgroup sizes; explain
  the "equal-sized slices" idea behind it.
- **prerequisites:** 07, 08
- **estimatedMinutes:** 20
- **notes:** State **Lagrange's theorem**. Make it plausible with the cosets-as-equal-slices
  picture (name cosets lightly; do NOT build quotient groups). Applications: a group of order 7 has
  no nontrivial subgroups; element orders divide the group order. Gentle, picture-driven argument.

### 10 — When Two Groups Are Secretly the Same
- **slug:** `10-homomorphisms-and-isomorphisms`
- **summary:** Maps that respect the operation reveal when two different-looking groups are really
  the same group in disguise.
- **objectives:** Define a homomorphism and an isomorphism; check whether a map preserves the
  operation; recognize two small groups as isomorphic (or not).
- **prerequisites:** 05, 08
- **estimatedMinutes:** 20
- **notes:** **Definition (Homomorphism / Isomorphism)**. The "structure-preserving map" idea.
  Example: $\{1,i,-1,-i\}$ under $\times$ is isomorphic to $\mathbb{Z}_4$ under $+$. Contrast two
  groups of the same order that are NOT isomorphic ($\mathbb{Z}_4$ vs the symmetries... keep simple:
  $\mathbb{Z}_4$ vs $\mathbb{Z}_2\times\mathbb{Z}_2$ described concretely, or note abelian vs not).

### 11 — Beyond Groups: Rings and Fields
- **slug:** `11-rings-and-fields`
- **summary:** Add a second operation and the landscape opens up — the integers, the rationals, and
  the structures that organize all of algebra.
- **objectives:** Describe what a ring and a field add to the idea of a group; classify the
  integers as a ring and the rationals as a field; explain what "being able to divide" buys you.
- **prerequisites:** 04, 05
- **estimatedMinutes:** 18
- **notes:** Horizon module. A ring = abelian group under $+$ with a compatible $\times$; a field =
  a ring where nonzero elements form a group under $\times$. $\mathbb{Z}$ is a ring, $\mathbb{Q}$
  and $\mathbb{R}$ are fields, $\mathbb{Z}_p$ is a field. Keep it light and motivating — point at the
  view, don't hike it. Close the course: name what a second course would explore.
```
