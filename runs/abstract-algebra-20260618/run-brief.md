---
runId: abstract-algebra-20260618
topic: Abstract algebra — a first course in group theory built from high-school math
slug: abstract-algebra
assumedBackground: High-school math. Comfortable manipulating algebraic expressions and solving equations; knows functions and basic geometry. NO calculus, NO set-theoretic rigor, and NO proof experience — the reader has likely never read or written a proof.
kind: stem
level: highschool
mode: autonomous
gates: []
createdAt: 20260618
---

## Interpretation notes

**Full redo of the shipped `abstract-algebra` course** (built before the pipeline upgrades) through
the current pipeline. The 11-module syllabus and the symbol canon are reused (copied); the delta is
quality under the upgraded rules — and, above all, the **level dial** (`course-design.md` §2). This
course is `highschool` with **no proof experience**, so it sits at the beginner end: the dial's
protections are mandatory, not optional.

**Binding for this run (the level dial at `highschool`):**
- **Define every term from scratch.** No set-theoretic rigor, no proof background. Gloss in plain
  words on first use: set, function, binary operation, closure, associativity, identity, inverse,
  modular ("clock") arithmetic, group, subgroup, order, coset, cyclic, generator, homomorphism,
  isomorphism, ring, field. A term used but neither in prerequisites nor glossed is a defect
  (no orphan terms, §3).
- **Introduce *proof* gently.** The reader has never read one. Where an argument is made (esp.
  module 09, Lagrange), walk every step and say *why* in prose; frame it as careful reasoning, not
  formal machinery.
- **An analogy OR a picture in every module — required, not rationed.** Symmetry you can see, a clock
  face, an operation table you can read. **Reuse the existing `./assets/triangle-symmetries.svg`** in
  module 06 (with real alt text).
- **Show the artifact.** Cayley / operation tables, worked computations with real numbers, the
  symmetry diagram — never prose-only. (This is `stem`; the artifact is reachable arithmetic, not
  heavy notation.)
- **Callbacks re-gloss.** A highschooler has forgotten; "the operation `$*$` — combining two elements
  to get a third (module 03)", not a bare name.
- **De-soothe.** No soothing manner adverbs (gently/quietly/simply…) and no hand-holding phrases
  (lint checks 5–6 must pass). Warmth comes from vivid concrete prose, not coddling.
- **Precedence (§ "When prose and pedagogy conflict"):** prose leads on stakes (module 01's "these
  are the same idea in three disguises"), analogies, the historical/where-this-reaches context, and
  transitions; pedagogy leads the definitions, tables, and the Lagrange argument. At `highschool`,
  "whether an analogy belongs" resolves to *yes, and a picture too*.
- **Reinforcement is welcome** (spiral earlier ideas, used more fluently); 11 genuinely distinct ideas,
  so the density rule does **not** force compression.

**Symbol canon (reuse, fix drift):** the generic/abstract group operation is `$*$` **everywhere**
(fix any `$\star$`/`$\ast$`); legitimate per-group operations stay — `$+$` for `$\mathbb{Z}_n$`,
juxtaposition for `$D_3$` (`$rs$`, `$sr$`), `$\times$`/juxtaposition for multiplicative number groups,
and the ring's own `$+$`/`$\times$` (module 11). One reflection symbol for the triangle, used identically.

**Scope (in):** the reused 11-module arc (symmetry → clock arithmetic → operations → group → zoo →
triangle/`$D_3$` → subgroups → cyclic/generators → Lagrange → homo/isomorphisms → rings & fields).
**(out):** quotient groups, normal subgroups beyond a mention, deep ring/field theory, formal proof
technique as a subject.
