# Research Dossier — Topology (high-school-assumed first course)

Stage 01 output. This is a dossier of notes for the curriculum stage, **not** learner-facing prose.
Level target: `highschool` — algebra, functions, coordinates, basic set notation, open/closed
intervals, distance formula are assumed; **no calculus, no proof experience, no point-set vocabulary**.
Rigor is intuition-first; definitions are earned via intuition→definition bridges; proofs are short,
combinatorial, or invariant-based; **no epsilon-delta anywhere**.

---

## Scope

### In scope
- **Topological equivalence / homeomorphism** as the organizing idea: "same up to continuous
  deformation" (stretch, bend, twist — not tear, not glue). Built from the mug-and-doughnut
  intuition *before* any formalism, then named precisely as a continuous bijection with a
  continuous inverse.
- **Open sets and the open-set definition of a topology**, motivated from open intervals on the
  number line and open disks in the plane. A topology = the declared collection of open sets,
  closed under unions and finite intersections, containing the whole space and the empty set.
- **Neighborhoods** as the local language ("points near a point"), bridging from open disks.
- **Continuity via preimages** ("the preimage of every open set is open"), bridged from the
  high-school "no sudden jumps / no tearing" picture — explicitly *not* via limits.
- **Connectedness** ("one piece" / cannot be split into two separated open parts) as the first
  invariant that can *prove* two shapes differ.
- **The cut/removal argument**: removing a point (or a small set) and asking what happens to
  connectedness — the technique behind "a line is not a circle," "Y-shape vs. interval," etc.
- **Counting holes (genus), informally**: the doughnut has one hole, the two-holed surface has two.
  Kept intuitive; tied later to Euler characteristic.
- **Euler characteristic V − E + F** as a *computable* invariant: sphere = 2, torus = 0, with the
  payoff that different values ⇒ no homeomorphism.
- **Surfaces, the Möbius band, and orientability** as a concrete, buildable payoff (one side, one
  edge; cutting experiments).
- **The classification of surfaces** as a *gesture*: closed orientable surfaces are sphere,
  torus, two-holed torus, … indexed by genus; with non-orientable ones as the "other family."
- **Capstone**: invariants in concert — why mug = doughnut but neither = sphere, made
  rigorous-enough by exhibiting a distinguishing invariant.

### Out of scope (out of band for this audience / this course)
- Full metric-space machinery and **epsilon-delta proofs** of continuity. (Explicitly excluded by
  brief and by `course-design.md` highschool calibration.)
- General point-set pathology: nets, filters, ultrafilters, separation axioms beyond a passing
  mention, pathological counterexamples.
- The **fundamental group / homotopy / π₁** and algebraic topology proper. We may *gesture* at
  "loops you can't shrink on a torus" as color, but do not develop it.
- **Compactness via open covers as a proof engine** (no Heine–Borel proofs). "Closed and bounded"
  may be mentioned as intuition only.
- **Manifolds in full generality**; differential topology.
- **Knot theory** beyond a one-paragraph "where this goes next."
- Homology, cohomology, fixed-point theorems as machinery. (Brouwer / hairy-ball at most as
  one-line optional color — see Hooks.)

---

## Core concepts

Each entry: one-sentence idea · depends on · misconception/sticking point (cross-ref to Pitfalls).

1. **Topological equivalence (homeomorphism), intuitive form** — two shapes are "the same" if one
   can be continuously deformed into the other without tearing or gluing.
   *Depends on:* everyday notion of stretching/bending; functions as maps. *Sticking point:* P3, P4.

2. **Open sets (number line, then plane)** — a set with no "boundary points included"; around every
   point there's a little room (an interval/disk) still inside the set.
   *Depends on:* open intervals, distance formula, the plane. *Sticking point:* P1.

3. **Topology (open-set axioms)** — a chosen collection of "open" sets closed under arbitrary unions
   and finite intersections, including ∅ and the whole space.
   *Depends on:* open sets (2); set notation ∪, ∩, ∈, ⊆. *Sticking point:* P6.

4. **Neighborhoods** — an open set (or set containing an open set) around a point; "the points near
   here." *Depends on:* open sets (2). *Sticking point:* P1 (over-narrow mental image).

5. **Continuity via preimages** — a map is continuous if the preimage of every open set is open;
   the topological restatement of "nearby points stay nearby / no sudden jumps."
   *Depends on:* open sets (2), topology (3), functions, "preimage." *Sticking point:* P7.

6. **Homeomorphism, formal** — a continuous bijection whose inverse is also continuous; the precise
   form of "topologically the same." *Depends on:* continuity (5), bijection (one-to-one + onto).
   *Sticking point:* P4, P8 (inverse-must-also-be-continuous).

7. **Topological invariant (concept)** — a property preserved by homeomorphism, so a difference in
   it *proves* two spaces are not homeomorphic. *Depends on:* homeomorphism (6). This is the logical
   engine for everything after. *Sticking point:* P9 (direction of the implication).

8. **Connectedness** — a space is connected if it cannot be split into two non-empty, separated open
   pieces ("one piece"). The first concrete invariant. *Depends on:* open sets (2), invariant idea
   (7). *Sticking point:* P10.

9. **Cut/removal argument** — remove a point (or small set) and compare connectedness/number of
   pieces; an invariant-style argument distinguishing shapes (interval vs. circle; line vs. plane).
   *Depends on:* connectedness (8), invariant idea (7). *Sticking point:* P10, P11.

10. **Holes / genus (informal)** — the number of "handles/holes" in a surface; sphere 0, doughnut 1,
    two-holed surface 2. *Depends on:* intuitive surface picture; deformation (1). *Sticking point:* P5.

11. **Euler characteristic χ = V − E + F** — for a polyhedral decomposition of a surface, vertices
    minus edges plus faces; a computable number independent of the decomposition (a topological
    invariant). Sphere = 2, torus = 0. *Depends on:* counting; invariant idea (7); surfaces (10).
    *Sticking point:* P12, P13.

12. **Surfaces** — 2-dimensional shapes that locally look like the plane (sphere, torus, Möbius
    band, Klein bottle as gesture). *Depends on:* the plane, deformation (1). *Sticking point:* P5.

13. **Möbius band & orientability** — a surface with one side and one edge (Möbius) versus
    two-sided (cylinder); orientability as the property of having a consistent notion of "front."
    *Depends on:* surfaces (12), hands-on construction. *Sticking point:* P14.

14. **Classification of surfaces (gesture)** — every closed surface is, up to homeomorphism, a
    sphere with some number of handles (orientable, indexed by genus) or with cross-caps
    (non-orientable); χ packages this. *Depends on:* genus (10), χ (11), orientability (13).
    Presented as a result to admire, **not** to prove. *Sticking point:* none specific; scope risk.

15. **Capstone synthesis** — distinguishing mug/doughnut/sphere by invariants (connectedness after
    cuts, hole count, χ): equal invariants don't *prove* sameness, but a single differing invariant
    *proves* difference. *Depends on:* 6, 7, 8, 9, 10, 11.

### Dependency sketch

```
                 functions / set notation / coordinates  (assumed)
                                  |
        [1] homeomorphism (intuitive: mug = doughnut)  <-- the hook & spine
                                  |
        [2] open sets (line -> plane)
                                  |
            +---------------------+---------------------+
            |                                           |
        [4] neighborhoods                       [3] topology (open-set axioms)
            |                                           |
            +---------------------+---------------------+
                                  |
        [5] continuity via preimages
                                  |
        [6] homeomorphism (formal: cts bijection, cts inverse)
                                  |
        [7] topological invariant (the proof engine)
                                  |
            +----------------+----------------+-------------------+
            |                                 |                   |
        [8] connectedness               [10] holes/genus    [12] surfaces
            |                                 |                   |
        [9] cut/removal argument              |             [13] Mobius / orientability
            |                                 |                   |
            +----------------+----------------+-------------------+
                                  |
        [11] Euler characteristic V-E+F  (sphere=2, torus=0)
                                  |
        [14] classification of surfaces (gesture)
                                  |
        [15] capstone: mug = doughnut =/= sphere, via invariants
```

Notes on ordering choices for the curriculum stage:
- The **intuitive** homeomorphism [1] is deliberately first (the motivating slogan) but is
  *re-earned* formally at [6] after open sets and continuity exist. This is a spiral, not a
  duplication — flag for curriculum so it isn't collapsed into one module.
- Open sets [2] are the true gateway: nearly everything formal depends on them. They must be solid
  before topology [3], neighborhoods [4], and continuity [5].
- Two roughly parallel tracks descend from the invariant idea [7]: a **point-set track**
  (connectedness → cut/removal) and a **combinatorial/surface track** (holes → surfaces →
  orientability → Euler characteristic). They reconverge at the capstone. Euler characteristic [11]
  is the natural climax because it is computable and delivers the sphere=2/torus=0 payoff.

---

## Prerequisite analysis (no silent gaps)

Every concept on the path to the payoff is classified **assumed known** or **must teach**.

### Assumed known (from the brief's stated background)
- Cartesian coordinates and the plane.
- Functions as maps; one-to-one (injective) and onto (surjective) informally.
- Open vs. closed intervals on the number line.
- Basic set notation: ∈, ⊆, ∪, ∩, ∅.
- The distance formula / "how far apart two points are."
- An intuitive sense of "getting close to" (but **not** limits in the calculus sense).

### Must teach from scratch (in course)
- **Bijection** as a named concept (light reintroduction: one-to-one *and* onto, with an inverse).
  Assumed loosely; must be pinned down because homeomorphism needs it. (Small; can ride inside the
  formal-homeomorphism module.)
- **Preimage of a set** under a function ("everything that maps into here"). Likely *not* fluent for
  this audience; required for the continuity definition. Must teach explicitly before [5].
- **Open set** (the general topological notion beyond "open interval"). Must teach — the single most
  important new primitive.
- **Topology / open-set axioms** — must teach.
- **Neighborhood** — must teach (short, builds on open set).
- **Continuity, topological form** — must teach; bridge carefully from "no tearing," **not** from
  limits (which are not assumed).
- **Homeomorphism (formal)** — must teach.
- **Topological invariant** as a concept and as a proof strategy — must teach; this is also the
  course's first real encounter with *proof*, so the *idea of proof* must be introduced gently here
  (per highschool calibration: walk every step, say why in prose).
- **Connectedness** — must teach.
- **The cut/removal argument** as a technique — must teach (it is a method, not just a fact).
- **Genus / "hole count"** informal — must teach.
- **Surfaces** as objects (sphere, torus, cylinder, Möbius) — must teach.
- **Orientability / one-sidedness** — must teach.
- **Euler characteristic V − E + F** and its invariance (stated, lightly justified, not fully
  proved) — must teach.
- **Classification of surfaces** — must teach as a gesture (state, don't prove).

### Deliberately avoided so no prerequisite is silently needed
- Limits / epsilon-delta → continuity is reframed via preimages so calculus is never required.
- Metric/Heine–Borel → "closed and bounded" only mentioned, never load-bearing.
- π₁ / homotopy → "loops you can't shrink" is color only; nothing downstream depends on it.
- Formal proof technique → introduced gently at the invariant stage; never assumed.

**Gap check:** every node in the dependency sketch traces back to either "assumed known" or a
"must teach" item above. No concept is used before it is introduced.

---

## Hooks & examples

For each: the framing, and what it unlocks. (Curriculum picks which to foreground; several are
strong enough to open a module.)

- **Coffee mug = doughnut** — the canonical hook. A topologist can't tell them apart because each
  has exactly one hole and one can be continuously deformed into the other. *Unlocks:* the whole
  idea of topological equivalence [1]; the "what's preserved vs. what isn't" question. Best opener
  for the course.
- **Rubber-sheet geometry** — imagine every shape drawn on infinitely stretchy rubber; topology
  studies what survives any stretch/bend short of tearing or gluing. *Unlocks:* the
  allowed-vs-forbidden operations (stretch/bend/twist yes; tear/glue no), which is exactly the
  intuitive content of continuity + its inverse. Good for [1] and as the running image.
- **Build a Möbius band** — tape a strip with a half-twist; draw a line down the middle and it
  returns on the "other side"; cut along the middle and get one longer band, not two. *Unlocks:*
  one-sidedness, orientability [13], and a hands-on "topology is real" moment. Strong module hook.
- **Königsberg bridges** — Euler's walk-every-bridge-once puzzle. *Unlocks:* the idea that a problem
  can depend only on *connection structure*, not distance/geometry — a clean on-ramp to
  connectedness [8] and to Euler's broader legacy (sets up Euler characteristic thematically).
  *Note:* historically this is graph theory, not surface topology; use it as a *connection-not-
  geometry* hook, not as a derivation of χ. **[verify]** the exact node/edge counts if quoted.
- **Euler's formula on a cube** — count V=8, E=12, F=6 → 8 − 12 + 6 = 2; try a tetrahedron (4−6+4=2)
  and a pyramid; all give 2 because all are sphere-like. *Unlocks:* Euler characteristic [11] as
  something the reader computes with their own hands, and the "it's always 2 — why?" hook that
  motivates invariance. Best hook for the χ module.
- **The torus computed** — decompose a doughnut surface and get V − E + F = 0, *different* from the
  sphere's 2 → therefore sphere and torus are not homeomorphic. *Unlocks:* the payoff that an
  invariant *proves* a difference [7][11][15]. The course's emotional climax.
- **"You can't comb a hairy ball flat"** (hairy-ball theorem) — every continuous combing of a sphere
  has a cowlick; a doughnut you *can* comb smoothly. *Unlocks:* optional color showing invariants
  have surprising consequences and that sphere ≠ torus shows up physically. **Optional / color
  only** — do not develop (it needs vector-field machinery out of scope). Mark as enrichment.
- **A line is not a circle (remove a point)** — cut one point from a line and it falls into two
  pieces; cut one point from a circle and it stays one piece. *Unlocks:* the cut/removal argument
  [9] in its simplest, most convincing form. Excellent worked example for the connectedness track.
- **Letters of the alphabet as topological classes** — sort A–Z by topology (e.g. C, I, L, M, N, S,
  U, V, W, Z all equivalent; O, D one loop; B, etc.) — a low-stakes classification game.
  *Unlocks:* practice distinguishing shapes by holes and junction points; great exercise material.
  **[verify]** any specific equivalence-class list before publishing (font-dependent).

---

## Common pitfalls / misconceptions

Each: the mistake → the correction (for the authoring/exercise stages to target per
`course-design.md §5`).

- **P1 — "Open set = open interval (only)."** Learners anchor on `(a,b)` and miss open disks,
  unions of intervals, the whole line, ∅. *Correction:* define open via "room around every point,"
  then show open disks, half-planes, arbitrary unions, and the boundary cases ∅ and the whole space.
- **P2 — "Open is the opposite of closed."** They assume every set is one or the other. *Correction:*
  sets can be both (∅, whole space) or neither (half-open `[a,b)`); "closed" means complement is
  open, not "not open."
- **P3 — "Deformation allows cutting and re-gluing."** Learners let themselves snip a knot or pinch
  two points together. *Correction:* the *only* allowed moves are continuous stretch/bend/twist with
  a continuous way back; tearing and gluing change topology (that's the whole point). Tie to the
  rubber-sheet image.
- **P4 — "Homeomorphic = same size / angles / lengths."** Confusing topology with geometry/congruence.
  *Correction:* topology forgets distance and angle entirely; a tiny circle and a huge wobbly loop
  are the same; a square and a circle are the same.
- **P5 — "A hole is a dent / a concavity / a bowl."** Conflating an indentation with a genuine
  through-hole (genus). *Correction:* a bowl (sphere-like, genus 0) has no topological hole; a
  doughnut's through-hole (genus 1) is what counts. A coffee cup's hole is in the *handle*, not the
  bowl.
- **P6 — "Any collection of sets is a topology."** Forgetting the closure axioms. *Correction:*
  must contain ∅ and the whole space, be closed under arbitrary unions and **finite** intersections;
  give a non-example.
- **P7 — Defining continuity by limits / "you can draw it without lifting your pen."** The pen
  picture fails for many spaces and smuggles in calculus. *Correction:* use the preimage definition;
  show the pen-picture as motivation only, then replace it.
- **P8 — "A continuous bijection is automatically a homeomorphism."** Forgetting the inverse must
  also be continuous. *Correction:* note (gently, by example) that the inverse can fail to be
  continuous, so it's a separate requirement; e.g. wrapping a half-open interval onto a circle is a
  continuous bijection but not a homeomorphism. **[verify]** keep this example at gesture level for
  highschool; may be too subtle to fully justify — flag to curriculum whether to include.
- **P9 — Reversing the invariant logic.** Thinking "same invariant ⇒ same space." *Correction:*
  invariants only *prove difference*: differing invariant ⇒ not homeomorphic; equal invariants
  prove nothing by themselves. State this direction explicitly and repeatedly.
- **P10 — "Connected = drawn in one stroke / looks joined."** *Correction:* connectedness is about
  not splitting into two separated open pieces; e.g. two tangent circles, the rationals, etc. Keep
  examples at the intuitive level but be precise about "one piece."
- **P11 — Cut/removal: assuming all points are alike.** Removing a *generic* point vs. a special
  point (junction of a Y, center of an X) gives different piece-counts; learners pick the convenient
  point. *Correction:* the argument must consider *which* point and compare the best/worst case; a
  Y has a point whose removal gives 3 pieces, an interval never does — that distinguishes them.
- **P12 — Miscounting V, E, F.** Double-counting shared edges/vertices, forgetting the outer/back
  face, or counting curved faces inconsistently. *Correction:* a careful counting procedure; count
  each shared edge once; for a closed surface every face is bounded. Worked count on the cube.
- **P13 — "Euler characteristic depends on how you draw it."** Expecting different decompositions to
  give different numbers. *Correction:* demonstrate two decompositions of the sphere giving 2;
  state invariance (justify lightly, don't prove fully). The invariance is *why* it's useful.
- **P14 — "The Möbius band has two sides, I just can't see the other."** *Correction:* trace a path
  and return to the start on the "opposite" face without crossing an edge — one continuous side; one
  edge. The cutting experiment makes it undeniable.
- **P15 — Treating the classification of surfaces as something they should be able to prove.**
  *Correction:* frame it explicitly as a deep theorem to admire; the course earns *belief* via χ and
  examples, not a proof. (Manages expectations; prevents over-reach.)

---

## Sources

No web access for this run; the following are standard, well-established references relied on from
established mathematical knowledge. Specific page/example claims are **not** verified against an
edition and are marked where relevant. Nothing exotic or contested is used.

- **Munkres, *Topology* (2nd ed.)** — canonical point-set reference (open sets, topology axioms,
  continuity via preimages, connectedness, homeomorphism). The formal definitions in this dossier
  follow the standard treatment it represents. *(Undergraduate-level; used here only to anchor
  definitions, not for depth.)*
- **Armstrong, *Basic Topology*** — intuition-forward undergraduate text; good model for the
  deformation/surface emphasis and Euler-characteristic-as-invariant arc.
- **Hatcher, *Algebraic Topology* (intro/Ch. 0)** — for the *gesture* toward classification of
  surfaces and "loops you can't shrink"; used only at the gesture level, π₁ kept out of scope.
- **Euler's polyhedron formula V − E + F = 2** for convex polyhedra / sphere-like surfaces, and
  χ(torus) = 0 — standard, well-established results. **[verify]** only the historical Königsberg
  node/edge counts and any specific alphabet equivalence-class list if quoted verbatim.
- **General mathematical common knowledge** for the mug=doughnut framing, rubber-sheet metaphor,
  Möbius band properties, and the hairy-ball gesture — all standard expository topology.

Confidence: definitions and the core invariant facts (χ sphere=2 / torus=0, Möbius one-sided,
connectedness/cut arguments) are well-established and high-confidence. Items tagged **[verify]**
above (historical specifics, the half-open-interval-onto-circle subtlety's pedagogical fit, alphabet
classes) should be checked or held at gesture level before authoring builds on them.

---

## Open questions for the curriculum stage

These are genuine scope/sequencing decisions. The brief fixes *what's in*; these fix *how it's
packaged* (~8–11 modules' worth of material is sketched above, but the final module list is the
curriculum stage's call).

1. **Intuitive vs. formal homeomorphism — one module or two?** The arc spirals: deformation hook
   first, formal homeomorphism after open sets + continuity. Recommend two separated modules with an
   explicit callback. Confirm.
2. **How much point-set formalism?** Open sets are non-negotiable, but do topology-axioms,
   neighborhoods, and continuity each get a full module, or do neighborhoods fold into open sets and
   continuity ride alongside? Affects module count (this cluster is 2–4 modules).
3. **Does orientability / Möbius get its own module,** or is it a section inside a broader "surfaces"
   module? It's the strongest hands-on payoff and probably earns its own; confirm.
4. **Euler characteristic: state invariance or sketch why?** A full proof is out of scope, but a
   *light* justification (two decompositions agree; subdivision doesn't change V−E+F) is feasible.
   Decide whether to include the sketch or just demonstrate-and-assert. (Pedagogically valuable but
   adds length.)
5. **Classification of surfaces — gesture module or capstone subsection?** Could be a short "the big
   picture" module, or folded into the capstone. Recommend keeping it light either way.
6. **Where does the cut/removal argument live** — inside the connectedness module or as its own
   "how to prove two shapes differ" module? It's a *method* and recurs; may deserve its own short
   module to establish the proof move before genus/χ.
7. **Include the continuous-bijection-without-continuous-inverse subtlety (P8)?** It's the
   technically honest reason homeomorphism needs the inverse condition, but may be too subtle for
   highschool. Decide: include as gesture, relegate to a footnote/stretch exercise, or omit.
8. **Königsberg bridges placement.** Strong hook for "connection, not geometry," but it's graph
   theory. Use as a connectedness hook only, or as a themed lead-in to the whole Euler thread? Don't
   let it imply it derives χ.
9. **Capstone scope.** Confirm the capstone is synthesis-by-invariants (mug=doughnut≠sphere) and
   does *not* attempt a sameness proof — invariants only prove difference (P9). Recommend an
   explicit "what invariants can and can't do" beat here.
10. **Optional color budget.** Hairy-ball, Klein bottle, knot-theory one-paragraph "where next" —
    how much enrichment, and is it inline or end-of-course? Affects tone and length.
