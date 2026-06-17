# Curriculum — The Conjecture–Criticism Calculus

**kind:** stem · **level:** undergrad (pitched at first-year) · **subject:** Mathematics
**modules:** 11 · **estimatedHours:** ~4

**Title:** The Conjecture–Criticism Calculus
**Description:** A self-contained formal system for how knowledge grows — guesses, attacks, and what survives — built from sets, relations, and a single fixed-point construction, and provable by hand.

**Course prerequisites:** Comfort reading and writing short proofs; basic set theory (sets, subsets, relations as sets of ordered pairs, functions); mathematical induction.

**Tags:** formal-systems, logic, argumentation, discrete-mathematics, fixed-points

> **Scope reminder.** This course teaches **only §3 (Level 1)** of the source note, as a formal system.
> The intro (§1), Level 0 (§2), and the §4 necessity-of-creativity theorem are **out of scope** — §4 is
> named once, in Module 1 and Module 11, as "the theorem this machinery was built to prove," never taught.

## Prerequisite graph

Strictly linear with two spirals: M7 (grounded extension) is the technical spine that M8 proves with;
M9's battery/≈_B is reused by M10's hard-to-vary. No forward references.

`M1 → M2 → M3 → M4 → M5 → M6 → M7 → M8 → M9 → M10 → M11`

## Module specs

### 01 — The Conjecture–Criticism Game  (slug: `the-game`)
- **Summary:** What this calculus is for: problems provoke guesses, guesses get attacked, attacks can themselves be attacked — and we want a precise machine that tracks what currently survives.
- **Objectives:** Describe the conjecture→criticism→adjudication loop in plain terms; explain why criticisms are themselves things that can be criticized; state what the rest of the course will build.
- **Owns:** the informal vocabulary (problem / conjecture / criticism / attack / "what survives"); the running orientation example.
- **Prereqs:** none. **est:** 15 min. *(Light, motivating; names §4 as the payoff in one line. Keep short.)*

### 02 — Commitments and Verdicts  (slug: `commitments-and-verdicts`)
- **Summary:** The atom of the system: a commitment is a test plus a budget, and its verdict on a piece of content is exactly one of pass, fail, or overrun.
- **Objectives:** State Definition 3.1; explain the three outcomes and why `overrun` is not `fail`; explain (in one line) why the budget is there (decidability) without invoking computability theory.
- **Owns:** commitment `κ=(τ,β)`; verdict `V(κ,c)∈{pass,fail,overrun}`; the budget/black-box framing.
- **Prereqs:** M1. **est:** 18 min.

### 03 — Artifacts and Problems  (slug: `artifacts-and-problems`)
- **Summary:** Everything in the system is an artifact (content plus a finite set of commitments it answers to); a problem is a description plus a growing set of criteria. The uniformity — "whatever can attack can be attacked" — starts here.
- **Objectives:** State Definition 3.2 for artifact and problem; explain the commitment interface `I(a)`; explain why conjectures, criticisms, and standards are all artifacts.
- **Owns:** artifact `a=(c(a),I(a))`; problem `π=(d_π,Crit_π,prov_π)`; the artifact-uniformity principle. *(Variation kernel deferred to M9.)*
- **Prereqs:** M2. **est:** 18 min.

### 04 — Epistemic States and the Attack Graph  (slug: `states-and-attack-graph`)
- **Summary:** A snapshot of inquiry is a tuple `S=(A,Π,addr,att,W)`; the heart of it is `att`, a directed graph of attacks between artifacts.
- **Objectives:** State Definition 3.3; read `att⊆A×A` and `addr⊆A×Π` as relations; draw and read a small directed attack graph (nodes, directed edges, who-attacks-whom).
- **Owns:** the state tuple `S=(A,Π,addr,att,W)`; the directed-attack-graph picture; the teaching of directed graphs.
- **Prereqs:** M3. **est:** 20 min.

### 05 — Warrants and Well-Formedness  (slug: `warrants-and-well-formedness`)
- **Summary:** An attack edge is never bare: it carries a warrant — either a packaged failing verdict (demonstrative) or an explanatory artifact (argumentative) — and a state is well-formed only when every edge is warranted.
- **Objectives:** State Definition 3.4 and distinguish demonstrative vs argumentative warrants; explain validity-node closure on a worked example before the abstract rule; state the §3.2 well-formedness conditions.
- **Owns:** warrants (demonstrative / argumentative); validity node `ν(κ)` + closure; well-formedness.
- **Prereqs:** M4. **est:** 22 min. *(Validity-node closure flagged hard — concrete example FIRST.)*

### 06 — Conjecture and Criticism: the Building Rules  (slug: `conjecture-and-criticism-rules`)
- **Summary:** Two transition rules grow a state: (Conj) adds a conjecture (and needs a problem to answer), (Crit) adds a warranted attack. And a standing principle: nothing is ever deleted.
- **Objectives:** State and apply (Conj) and (Crit) as premise/conclusion rewrites `S ⇝ S′`; explain why (Conj) is disabled when `Π=∅`; explain the "nothing is ever deleted — refuted is a *computed status*" principle.
- **Owns:** (Conj), (Crit); the no-deletion principle.
- **Prereqs:** M5. **est:** 20 min.

### 07 — The Grounded Extension  (slug: `the-grounded-extension`)
- **Summary:** Given an attack graph, which artifacts "stand"? Build the answer from nothing: start at ∅ and repeatedly add every artifact all of whose attackers are already attacked. The process settles at a unique set, the grounded extension.
- **Objectives:** Define the operator `F(S)={a : every attacker of a is attacked by some member of S}`; compute the iteration `∅,F(∅),F(F(∅)),…` to its fixed point on a 3–4 node graph by hand; assign statuses accepted/refuted/suspended; explain why the process terminates (finite, monotone) and connect it to induction.
- **Owns:** operator `F`; the iterate-from-∅ / least-fixed-point construction; grounded extension `G`; status labelling; the worked 3-node example.
- **Prereqs:** M6. **est:** 28 min. *(Hardest module — hand example BEFORE the general definition; cite Dung-uniqueness, don't prove.)*

### 08 — Adjudication and Reinstatement  (slug: `adjudication-and-reinstatement`)
- **Summary:** The (Adj) rule recomputes statuses after every change — and the grounded extension delivers reinstatement for free: refute a criticism and its target comes back, with a four-line proof.
- **Objectives:** State the (Adj) rule using `G`; state and **prove** the Reinstatement Lemma (3.1) using the iteration from Module 7; explain why adjudication runs continuously, not "at the end."
- **Owns:** (Adj); the Reinstatement Lemma 3.1 + its proof.
- **Prereqs:** M7. **est:** 24 min. *(The course's one full proof; carry it completely.)*

### 09 — Demarcation: Criticizable and Modifiable  (slug: `criticizable-and-modifiable`)
- **Summary:** What makes an artifact a live part of inquiry? It must have an attack surface (criticizable) and a nontrivial space of genuinely different variants (modifiable) — a demarcation that admits mathematics and the arts, not just the empirically testable.
- **Objectives:** Define the variation kernel `µ(·|a)` and the minimal probability needed (probability of an event, `>0`); define battery `B(a)` and battery-equivalence `≈_B`; define `crit(a)` and `mod(a)` and "epistemically active"; explain how this replaces falsifiability (empirical testing as a special case).
- **Owns:** variation kernel `µ(·|a)`; the bit of probability; battery `B(a)`, equivalence `≈_B`; `crit`, `mod`, epistemically-active; the demarcation point.
- **Prereqs:** M8. **est:** 24 min. *(Introduce ≈_B with a worked "equivalent vs inequivalent variant" example — mandatory before M10.)*

### 10 — Hard to Vary, and Reach  (slug: `hard-to-vary-and-reach`)
- **Summary:** Two graded measures: how hard an artifact is to vary while still passing its battery, and how far beyond its origin problem it reaches.
- **Objectives:** Define the survival probability `s(a)` and `HV_B(a)=1−s(a)`; explain why `≈_B` means re-wordings don't lower HV; define reach `R_t(a)`; read both as graded, battery-/time-relative quantities (one-line note that HV is sample-estimable, not taught).
- **Owns:** `s(a)`, hard-to-vary `HV_B(a)`; reach `R_t(a)`.
- **Prereqs:** M9. **est:** 22 min.

### 11 — Spawning Problems, and Fallibilism  (slug: `spawning-and-fallibilism`)
- **Summary:** The system makes its own future work — (Spawn) turns failures, ties, and reach into new problems — and two axioms (N1, N2) guarantee no status and no theory is ever final, with the rules themselves inside the system (Refl).
- **Objectives:** State (Spawn) and walk 2–3 of its triggers (failed verdict→successor; surviving rivals→discrimination; reach→explanation-debt); state (Refl) and explain self-reference/pancritical closure; state axioms N1 and N2 and explain why fallibilism must be an axiom, not a theorem; name (one line) that this is the premise §4's theorem consumes.
- **Owns:** (Spawn) + triggers; (Refl); axioms N1, N2; the "knowledge at t is a trajectory" framing.
- **Prereqs:** M10. **est:** 22 min. *(Capstone; the only place §4 is named as the payoff.)*
