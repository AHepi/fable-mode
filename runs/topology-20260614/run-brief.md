---
runId: topology-20260614
topic: Topology
slug: topology
assumedBackground: High-school mathematics — comfortable with algebra, functions, coordinates, basic set notation, and reading inequalities. No calculus assumed beyond an intuitive sense of "getting close to." No prior proof experience assumed.
kind: stem              # stem | humanities | language | skill | general (sets template + math rules)
mode: autonomous        # autonomous | gated
gates: [curriculum]     # gates that still block even in autonomous mode
createdAt: 20260614
---

## Interpretation notes

**Topic.** "Topology" — the branch of mathematics studying properties of shapes and spaces
preserved under continuous deformation (stretching, bending, twisting — but not tearing or
gluing). The famous slogan is "rubber-sheet geometry," and the famous joke is that a topologist
can't tell a coffee mug from a doughnut.

**Scope — what's in.** A first, intuition-first tour that nonetheless reaches real definitions:
- The big idea: topological equivalence (homeomorphism) as "same up to continuous deformation,"
  built from the mug-and-doughnut intuition before any formalism.
- The objects: points, neighborhoods, open sets — the open-set definition of a topology, motivated
  from the high-schooler's existing intuition of open intervals on the number line and open disks
  in the plane.
- Continuity reframed: the topological "preimages of open sets are open" definition, bridged from
  the high-school epsilon-free "no sudden jumps / no tearing" picture.
- Invariants that let you *prove* two shapes differ: connectedness, the cut/removal argument,
  counting holes (genus) informally, and the Euler characteristic V−E+F as a computable invariant
  (with the sphere = 2, torus = 0 payoff).
- Surfaces and a gentle look at the classification of surfaces; the Möbius band and orientability
  as a concrete, hands-on payoff.
- A capstone that ties invariants together: why the mug = doughnut but neither = sphere, made
  rigorous-enough via an invariant.

**Scope — what's out (out of band for a high-school-assumed first course).** Full metric-space
machinery with epsilon-delta proofs; general point-set pathology (nets, filters, ultrafilters);
the fundamental group / homotopy formalism and algebraic topology proper (we may *gesture* at
"loops you can't shrink" for the torus but will not develop π₁); compactness via open covers as a
proof engine (we can mention "closed and bounded" intuition but not Heine–Borel proofs); manifolds
in full generality. Knot theory at most as a one-paragraph "where this goes next."

**Rigor.** Definition-first where a definition genuinely clarifies (open set, topology,
homeomorphism, continuity, connectedness, Euler characteristic), but every formal block is reached
by an intuition→definition bridge that decodes the notation. Proofs appear, but they are short,
combinatorial, or invariant-based ("these two shapes have different Euler characteristics, so no
homeomorphism can exist") — never epsilon-delta. This is a STEM course, so `_config/math-style.md`
applies: formal blocks are precise and never run through the prose loop; the KaTeX subset is
respected.

**What the assumed background already knows.** Cartesian coordinates and the plane; functions as
maps and the idea of a function being one-to-one and onto (we'll reintroduce "bijection" lightly);
open vs closed intervals on the number line; basic set notation (∈, ⊆, ∪, ∩); the distance formula.
NOT assumed: limits/continuity in the calculus sense, formal proof technique, any set-theoretic
topology vocabulary.

**Ambiguity & the call I made.** "Topology" could mean rigorous point-set topology (a hard
undergraduate course) or the popular intuition-first "shapes and deformation" tour. For a
high-school-assumed audience the right reading is the intuition-first tour that still earns its
definitions — leading with deformation/invariants (the memorable, motivating core) and introducing
the open-set formalism as the precise language that backs the intuition, rather than opening cold
with axioms. The curriculum gate is where this reading gets confirmed before any prose is written.
