# Curriculum — Topology

## Course metadata

- **Title:** Topology, From the Coffee Mug
- **Slug:** `topology`
- **kind:** `stem`
- **level:** `highschool`
- **Description (one sentence):** An intuition-first tour of topology, built from high-school
  math with no calculus: open sets, continuity, and the invariants that prove why a mug equals a
  doughnut but not a sphere.
- **Course prerequisites:** none (assumes high-school algebra, functions, coordinates, and basic
  set notation — see `level`).
- **tags:** `[topology, mathematics, geometry, surfaces, proof]`
- **estimatedHours:** 3
- **Module count:** 11 (within the 8–14 first-course range)

This is the **intuition-first tour that still earns its definitions** fixed in the run brief:
the deformation/invariant spine leads; the open-set formalism enters as the precise language that
backs the intuition; **no epsilon-delta, no fundamental group, no open-cover compactness.** Every
formal block is reached by an intuition→definition bridge.

### Open questions from research — decisions made

| # | Question | Decision |
|---|----------|----------|
| 1 | Intuitive vs. formal homeomorphism: one module or two? | **Two** (module 01 intuitive, module 05 formal), with an explicit callback. A spiral, not a duplication. |
| 2 | How much point-set formalism? | Open sets (02) and topology-axioms (03) get separate modules (the closure axioms are a distinct big idea + a known misconception, P6); neighborhoods **fold into 02**; continuity is its own module (04). |
| 3 | Möbius / orientability its own module? | **Yes** (module 09) — strongest hands-on payoff. |
| 4 | Euler characteristic: state invariance or sketch why? | **Demonstrate-and-assert with a light justification** (two decompositions of the sphere agree; subdivision doesn't change V−E+F). No full proof. |
| 5 | Classification of surfaces: module or subsection? | **Subsection of the capstone** (11), kept as a gesture to admire. |
| 6 | Cut/removal: inside connectedness or its own module? | **Its own short module** (07) — it is a reusable *proof move*, established once before genus/χ deploy it. |
| 7 | Include continuous-bijection-without-continuous-inverse (P8)? | **As a gesture** inside module 05 (one concrete example: wrapping a half-open interval onto a circle), explicitly flagged "this is why the inverse condition is separate," not proved. |
| 8 | Königsberg bridges placement? | **Connectedness hook only** (module 06), framed as "connection, not geometry." Not used to derive χ. |
| 9 | Capstone scope? | Synthesis-by-invariants (mug = doughnut ≠ sphere) + an explicit "what invariants can and can't do" beat (P9). No sameness proof. |
| 10 | Optional color budget? | Light: hairy-ball one-liner (module 09 or 10), Klein bottle one-liner (09), knots/π₁ "where next" paragraph (capstone). All inline, brief. |

---

## Prerequisite graph

```
            high-school algebra / functions / coordinates / set notation  (assumed)
                                        |
   01 Rubber-Sheet Geometry  (intuitive homeomorphism: mug = doughnut)  <- the spine
                                        |
   02 Room Around Every Point  (open sets, line -> plane; neighborhoods)
                                        |
   03 The Rules of Openness  (a topology = open-set axioms)
                                        |
   04 Continuity Without Limits  (preimage; continuity via preimages)
                                        |
   05 Same Shape, Made Precise  (formal homeomorphism; callback to 01)
                                        |
   06 What a Deformation Can't Change  (invariants; connectedness as the first one)
                                        |
   07 Cut It and Count  (the cut/removal proof move)
                                        |
            +---------------------------+---------------------------+
            |                                                       |
   08 Counting the Holes (surfaces, genus)                          |
            |                                                       |
   09 The One-Sided Strip (Mobius band, orientability)              |
            |                                                       |
            +---------------------------+---------------------------+
                                        |
   10 Euler's Number for Shapes  (chi = V - E + F; sphere=2, torus=0)
                                        |
   11 Telling Shapes Apart  (capstone: synthesis by invariants; classification gesture)
```

No module depends on a later one. 08 and 09 both rest on 06–07 (invariants) and feed 10.

---

## Module specs

### 01 — Rubber-Sheet Geometry
- **slug:** `01-rubber-sheet-geometry`
- **summary:** Why a topologist sees a coffee mug and a doughnut as the same shape — the idea of continuous deformation.
- **objectives:**
  - Explain what topological equivalence means in plain terms (continuous deformation).
  - Distinguish allowed moves (stretch, bend, twist) from forbidden ones (tear, glue).
  - Classify simple shapes as "the same" or "different" by deformation alone.
- **prerequisites:** none
- **estimatedMinutes:** 14
- **notes:** Course spine + hook (mug = doughnut, rubber-sheet). Targets P3 (cutting/gluing not allowed), P4 (size/angle irrelevant). Intuitive only — no formalism yet. Owns the rubber-sheet/clay metaphor.

### 02 — Room Around Every Point
- **slug:** `02-open-sets`
- **summary:** The single most important idea in topology: an open set is one where every point has a little room around it that stays inside.
- **objectives:**
  - Define an open set via "room around every point" on the line and in the plane.
  - Identify open and non-open sets, including the boundary cases (∅, the whole space).
  - Describe a neighborhood of a point.
- **prerequisites:** [01-rubber-sheet-geometry]
- **estimatedMinutes:** 18
- **notes:** Open interval → open disk → general open set. Folds in neighborhoods. Targets P1 (open ≠ only intervals), P2 (open is not the opposite of closed — gesture). Owns "elbow room." Introduces $B(x,r)$ (open ball/disk).

### 03 — The Rules of Openness
- **slug:** `03-what-is-a-topology`
- **summary:** A topology is a chosen collection of open sets obeying three rules — and those rules are what make all of topology work.
- **objectives:**
  - State the three axioms of a topology (∅ and X are open; arbitrary unions; finite intersections).
  - Verify whether a given collection of sets is a topology.
  - Give a non-example that fails one axiom.
- **prerequisites:** [02-open-sets]
- **estimatedMinutes:** 16
- **notes:** Introduces $(X, \tau)$. Targets P6 (not every collection is a topology). The "finite" in finite intersections gets a concrete example. First real encounter with axioms — gentle.

### 04 — Continuity Without Limits
- **slug:** `04-continuity`
- **summary:** Continuity rebuilt without calculus: a map is continuous when the preimage of every open set is open.
- **objectives:**
  - Define the preimage of a set under a function.
  - State the topological definition of continuity (preimages of open sets are open).
  - Explain why this matches the intuitive "no sudden jumps / no tearing" picture.
- **prerequisites:** [02-open-sets, 03-what-is-a-topology]
- **estimatedMinutes:** 18
- **notes:** Must-teach **preimage** here (owns it). Targets P7 (don't define continuity by limits / the pen test). Bridge from "no tearing" to preimages carefully. Flag the $f^{-1}$ notation collision (preimage vs. inverse map) — see canon §1.

### 05 — Same Shape, Made Precise
- **slug:** `05-homeomorphism`
- **summary:** The precise version of "the same shape": a continuous bijection whose inverse is also continuous.
- **objectives:**
  - Define a bijection (one-to-one and onto) and a homeomorphism.
  - Explain why the inverse must also be continuous, using a concrete failure example.
  - Connect the formal definition back to the rubber-sheet intuition from module 01.
- **prerequisites:** [01-rubber-sheet-geometry, 04-continuity]
- **estimatedMinutes:** 18
- **notes:** Pays off module 01's intuitive promise (callback, not re-derivation). Reintroduces bijection lightly. P8 as a *gesture* (half-open interval onto a circle: continuous bijection, discontinuous inverse). Owns the "two-way dictionary / translation" image. Introduces $X \cong Y$.

### 06 — What a Deformation Can't Change
- **slug:** `06-invariants-and-connectedness`
- **summary:** A topological invariant is a property deformation can't change — so a difference in one proves two shapes are genuinely different; connectedness is the first.
- **objectives:**
  - State what a topological invariant is and the direction of its logic (differing invariant ⇒ not homeomorphic).
  - Define connectedness ("one piece," not splittable into two separated open sets).
  - Use connectedness to argue two simple shapes are not homeomorphic.
- **prerequisites:** [05-homeomorphism]
- **estimatedMinutes:** 18
- **notes:** Owns the **invariant logic** (the proof engine) — every later module calls back, never re-derives. Targets P9 (the implication runs one way only) and P10 ("connected" ≠ "drawn in one stroke"). Königsberg as the "connection, not geometry" hook. Owns the detective/fingerprint image. First gentle encounter with proof.

### 07 — Cut It and Count
- **slug:** `07-cut-and-count`
- **summary:** A reusable proof move: remove a point and count the pieces — enough to prove a line is not a circle.
- **objectives:**
  - Apply the cut/removal argument to distinguish shapes (interval vs. circle; Y vs. interval).
  - Explain why the choice of which point to remove matters.
  - Construct a removal argument for a new pair of simple shapes.
- **prerequisites:** [06-invariants-and-connectedness]
- **estimatedMinutes:** 16
- **notes:** Owns the cut/removal *technique*. Targets P11 (not all points are alike — the junction of a Y). Deploys connectedness (06) as the invariant. Capstone (11) calls back.

### 08 — Counting the Holes
- **slug:** `08-surfaces-and-holes`
- **summary:** Surfaces and their holes: the sphere has none, the doughnut has one, and that count is what tells them apart.
- **objectives:**
  - Describe what a surface is (locally like the plane) with examples (sphere, torus).
  - Define genus informally as the number of through-holes / handles.
  - Distinguish a genuine topological hole from a dent or a concavity.
- **prerequisites:** [06-invariants-and-connectedness]
- **estimatedMinutes:** 16
- **notes:** Owns surfaces + genus. Targets P5 (a hole is a through-hole, not a dent; the mug's hole is in the handle). Introduces the torus and the two-holed surface. Genus is presented as an invariant (callback to 06). Introduces $S^2$, $T^2$ lightly.

### 09 — The One-Sided Strip
- **slug:** `09-mobius-and-orientability`
- **summary:** Build a Möbius band and meet orientability: a surface that genuinely has only one side and one edge.
- **objectives:**
  - Construct a Möbius band and verify it has one side and one edge.
  - Define orientability informally (a consistent notion of "front").
  - Distinguish an orientable surface (cylinder) from a non-orientable one (Möbius band).
- **prerequisites:** [08-surfaces-and-holes]
- **estimatedMinutes:** 16
- **notes:** Hands-on construction (the real object, not a metaphor). Targets P14 (it really is one-sided — the tracing experiment). Klein bottle as a one-line gesture. Optional hairy-ball one-liner allowed here or in 10.

### 10 — Euler's Number for Shapes
- **slug:** `10-euler-characteristic`
- **summary:** Count vertices minus edges plus faces and you get a number — 2 for anything sphere-like, 0 for the torus — that no deformation can change.
- **objectives:**
  - Compute the Euler characteristic V − E + F for polyhedra (cube, tetrahedron).
  - Explain why it is a topological invariant (light justification, not a full proof).
  - Use χ to prove the sphere and the torus are not homeomorphic.
- **prerequisites:** [06-invariants-and-connectedness, 08-surfaces-and-holes]
- **estimatedMinutes:** 20
- **notes:** The computable climax. Owns $\chi = V - E + F$, sphere $\chi=2$, torus $\chi=0$. Targets P12 (careful counting), P13 (χ doesn't depend on the drawing — show two sphere decompositions). Deploys the invariant logic (06, callback) to conclude sphere ≠ torus. Pays off the genus thread (08).

### 11 — Telling Shapes Apart
- **slug:** `11-telling-shapes-apart`
- **summary:** Bringing the invariants together to settle the opening question — and an honest look at what invariants can and can't prove.
- **objectives:**
  - Combine invariants (connectedness, genus, χ) to classify a set of shapes.
  - Explain why matching invariants do not prove two shapes are the same (the one-way logic).
  - Describe, at a glance, the classification of surfaces and where topology goes next.
- **prerequisites:** [06-invariants-and-connectedness, 07-cut-and-count, 08-surfaces-and-holes, 10-euler-characteristic]
- **estimatedMinutes:** 18
- **notes:** Capstone synthesis (mug = doughnut ≠ sphere via χ). The "invariants convict but don't acquit" beat (P9, owns the detective payoff). Classification of surfaces as a gesture (P15 — admire, don't prove). One "where next" paragraph: knots, Klein bottle, loops you can't shrink (π₁) — color only. Bookends the rubber-sheet image from 01.

---

## Curriculum self-check (against `course-design.md §6`)

- [x] `kind` = stem; `module.md` template applies; math rules on.
- [x] 11 modules (8–14 range).
- [x] One big idea per module.
- [x] Ordering respects the prereq graph; no forward references (the intuitive→formal homeomorphism spiral is deliberate and callback-linked, not a forward reference).
- [x] `level` = highschool; nothing requires calculus / set-theoretic rigor / prior proof experience (proof introduced gently at 06).
- [x] Every module has the stem spine (hook → intuition → definition → worked example → checks → exercises → recap).
- [x] Objectives are observable verbs (state, define, compute, construct, distinguish, explain, apply).
- [x] Each module ~1,000–2,500 words; estimatedMinutes honest (sum ≈ 188 min ≈ 3 h).
- [x] Distributed retrieval + elaborated worked solutions required of authoring (enforced via the template + canon).
- [x] Earlier ideas spiral back (open sets → continuity → homeomorphism → invariants → χ).
- [x] `canon.md` written (see sibling file).
