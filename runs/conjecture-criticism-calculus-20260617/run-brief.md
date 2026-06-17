---
runId: conjecture-criticism-calculus-20260617
topic: The conjecture–criticism calculus (Level 1 of "The Necessity of Creativity") as a self-contained formal system
slug: conjecture-criticism-calculus
assumedBackground: First-year mathematics students comfortable with proofs and some set theory (sets, subsets, relations, functions, induction). Nothing beyond that.
kind: stem
mode: autonomous
gates: [curriculum]     # pause for human approval of the module breakdown
createdAt: 20260617
---

## Interpretation notes

**Source.** A research note, *"The Necessity of Creativity: A Substrate-Independent Calculus of
Conjecture and Criticism."* Full extracted text at `01_research/inputs/source-note.txt`. The course
covers **only Section 3, "Level 1: the conjecture–criticism calculus,"** treated as a self-contained
formal system.

**Scope — IN (all of §3):**
- §3.1 Primitives: commitments & verdicts (test program + budget; pass/fail/overrun); artifacts
  (content + commitment interface), problems (description + growing criteria set + provenance),
  variation kernels; epistemic states `S = (A, Π, addr, att, W)` and systems; warrants — the two
  kinds, **demonstrative** (a packaged failing verdict + a validity node) and **argumentative**.
- §3.2 Formation rules / well-formedness (every attack edge carries a registered warrant; criteria
  are commitment schemas; addressing declared; validity-node closure).
- §3.3 Inference (transition) rules: **(Conj)** conjecture (needs a problem premise), **(Crit)**
  criticism, **(Adj)** adjudication via the **grounded extension** (least fixed point of the
  "every attacker is attacked" operator → accepted / refuted / suspended), **(Spawn)** problem
  generation, **(Refl)** reflexive registration (the rules are themselves artifacts). The
  **"nothing is ever deleted"** principle and the **Reinstatement Lemma (3.1)** with its proof.
- §3.4 Measures & demarcation: criticizability + modifiability as the demarcation that **replaces
  falsifiability**; **hard-to-vary** (HV) as a graded, battery-relative measure; **reach**.
- §3.5 Fallibilism as two axioms: **N1** (no absorbing status) and **N2** (perpetual proposability).

**Scope — OUT (do not teach):** §1 intro (the D1–D10 constraints, choice-of-language); §2 Level 0
(constructor theory, resilient knowledge, digitality); §4 the necessity-of-creativity theorem and its
corollaries; §§5–7. These may be *named in one line* as context ("this machinery is later used to
prove…") but are not taught.

**Rigor / calibration.** `level: undergrad` but pitched at *first-year*. The reader can read and write
proofs and is comfortable with set-builder notation, subsets, relations (`att ⊆ A×A`), functions, and
induction. The reader has **NOT** seen: computability theory or the notion of a universal machine,
Kolmogorov / algorithmic information theory, Dung argumentation theory, process calculi / labelled
rewriting systems, fixed-point theory, or any Popper/Deutsch epistemology. Therefore:
- **Black-box** the computational substrate: a *verdict* is "run a test with a fixed budget; it says
  pass, fail, or overrun (ran out of budget)." No Turing machines, no Rice's theorem (mention only as
  a one-line aside on *why* the budget is there).
- **Teach from scratch**: the least-fixed-point construction behind the grounded extension (monotone
  operator on subsets, iterate from ∅ — connect to induction they know); enough probability for the
  modifiability/HV definitions (a probability over a sampled edit being > 0; an expectation).
- The **hard-to-vary** measure: present the idea and the formula `HV = 1 − s` with the battery-relative
  survival probability; the Hoeffding (ε,δ) estimability is a one-line remark, not taught.
- Give *just enough* conjecture/criticism motivation (a problem; a guess; an attack; what survives) for
  the objects to mean something — but keep the spotlight on the formal system.

**Why this is a good course.** §3 is a genuine, self-contained formal system: a labelled rewriting
system on states built from sets and relations, with a real least-fixed-point semantics and a short
provable lemma (reinstatement). It exercises exactly the muscles a proof-literate first-year is
building — definitions, relations, fixed points, a clean inductive proof — on unusually fresh material.

**Notation to fix in the canon (the paper's own symbols):** `S=(A,Π,addr,att,W)`, `κ=(τ,β)`,
`V(κ,c)∈{pass,fail,overrun}`, artifact `a=(c(a),I(a))`, problem `π=(d_π,Crit_π,prov_π)`, attack
`att⊆A×A`, grounded extension `G`, operator `F(S)={a : every attacker of a is attacked by some member of S}`,
`HV_B(a)=1−s(a)`, reach `R_t(a)`, axioms N1/N2. Keep these identical across all modules.
