# Research Dossier — The Conjecture–Criticism Calculus (§3)

**Run:** conjecture-criticism-calculus-20260617  
**Stage:** 01_research  
**Date:** 2026-06-17  
**Audience:** First-year undergrad, proof-literate, set theory comfortable, NO computability / fixed-point / argumentation / epistemology background.

---

## Scope

### IN — teach fully
All of §3, treated as a self-contained formal system:
- §3.1 Primitives: commitment κ=(τ,β), verdict V(κ,c)∈{pass,fail,overrun}, artifact a=(c(a),I(a)), problem π=(d_π,Crit_π,prov_π), variation kernel µ(·|a), epistemic state S=(A,Π,addr,att,W), system Σ_sys, warrants (demonstrative and argumentative).
- §3.2 Formation rules / well-formedness: warrant registration, commitment-schema criteria, declared addressing, validity-node closure.
- §3.3 Inference (transition) rules: (Conj), (Crit), (Adj) — grounded extension G as least fixed point of F, status labelling — (Spawn), (Refl). The "nothing is ever deleted" principle. Lemma 3.1 (Reinstatement) and its 4-line proof.
- §3.4 Measures and demarcation: criticizability crit(a), modifiability mod(a), battery equivalence ≈_B, hard-to-vary HV_B(a)=1−s(a), reach R_t(a).
- §3.5 Fallibilism axioms: N1 (no absorbing status), N2 (perpetual proposability).

### OUT — name in one line as context only
- §1: the D1–D10/M1–M2 constraints and language choice (may be named in one sentence as motivation)
- §2 Level 0: constructor theory, substrate independence, digitality theorem (name in one line)
- §4: the necessity-of-creativity theorem and corollaries (the payoff — name as "this machinery proves X")
- §§5–7: constraint derivations, constructor theory assessment, synthesis

---

## Core Concepts — Dependency Sketch

Listed in teaching/dependency order. An arrow A→B means "B depends on A being defined first."

### Layer 0 — Primitives (no internal dependencies, must come first)

**1. Verdict / Commitment** (Def 3.1)
- κ=(τ,β): test program + resource budget. V(κ,c)∈{pass,fail,overrun}.
- Black-box the computation: "run a fixed test with a fixed time/step budget; get one of three outcomes." Do NOT teach Turing machines or Rice's theorem (one-line aside at most).
- Dependency: none. This is the ground floor.

**2. Artifact** (Def 3.2, first part)
- a=(c(a),I(a)): content + commitment interface (a finite set of commitments).
- Dependency: commitment.

**3. Problem** (Def 3.2, second part)
- π=(d_π, Crit_π, prov_π): description, a growing set of criteria (commitment schemas), provenance.
- Dependency: artifact (criteria are schemas instantiable against artifacts).

**4. Variation kernel** (Def 3.2, third part)
- µ(·|a): a probability distribution over bounded edits of c(a). Samplable.
- Dependency: artifact, and a minimal probability concept (the first place probability appears).

### Layer 1 — States and Warrants

**5. Epistemic state S=(A,Π,addr,att,W)** (Def 3.3)
- A: finite set of artifacts. Π: finite set of problems. addr⊆A×Π: addressing relation. att⊆A×A: warranted attack relation. W: warrant map.
- Dependency: artifact, problem, commitment. Introduces directed-graph structure (att is the edge set).

**6. Warrants — demonstrative and argumentative** (Def 3.4)
- Demonstrative: packages a failing verdict + trace + validity node ν(κ); closure rule: attacker of ν(κ) attacks the warrant carrier.
- Argumentative: an explanatory artifact whose commitments claim a's deficiency.
- Both kinds are themselves artifacts, hence attackable.
- Dependency: epistemic state, verdict, artifact.

### Layer 2 — Well-Formedness and Transitions

**7. Formation rules** (§3.2)
- Well-formedness conditions on states: warrant registration, schema criteria, declared addr, validity-node closure.
- Dependency: epistemic state, warrants. Conceptually "type-checking the system before running it."

**8. The five transition rules** (§3.3)
Ordered by complexity:
- **(Refl)**: Rules are artifacts — pancritical closure. Dependency: artifact, formation rules.
- **(Conj)**: Conjecture introduction — requires a problem premise. Dependency: epistemic state, problem.
- **(Crit)**: Criticism introduction — requires a valid warrant. Dependency: warrants, epistemic state.
- **(Spawn)**: Problem generation — five trigger types (failed verdict, surviving rivals, low HV, reach event, critic-gaming). Dependency: (Adj) status, HV, reach — teach after Adj and measures.
- **(Adj)**: Adjudication — depends on the grounded extension. This is the hardest transition and needs its own scaffolding (see Layer 3 below).

**Note:** Teach (Conj), (Crit), (Refl) first, then (Adj), then (Spawn). The grounded extension is a necessary detour before (Adj) can be stated.

### Layer 3 — Grounded Extension (the Adjudicator)

**9. Directed attack graph** (setup for Adj)
- att as a directed graph: nodes = artifacts, edges = attacks. Small examples needed here.
- Dependency: att, epistemic state.

**10. Operator F and its least fixed point** (§3.3, Adj rule)
- F(S) = {a : every attacker of a is attacked by some member of S}.
- Least fixed point: iterate from ∅. F(∅)=unattacked nodes, F(F(∅))=nodes defended by F(∅), etc.
- G = least fixed point of F = grounded extension.
- Status assignment: accepted iff a∈G, refuted iff ∃b∈G with (b,a)∈att, suspended otherwise.
- Properties to state (no proof required at this level): unique; skeptical; computable in polynomial time. These are imported from Dung 1995 — state and use, do not derive.
- Dependency: directed attack graph. Pedagogy: connect to induction they know — "each application of F is one step of an inductive construction from ∅."

**11. Reinstatement Lemma (Lemma 3.1)**
- If k attacks a, j attacks k, and j is unattacked, then {j,a}⊆G.
- Proof: F(∅)∋j (j unattacked); F({j}) contains a (a's attacker k is attacked by j∈{j}); so a∈F(F(∅))⊆G.
- This is the one proof the course should carry in full — it is short, it illustrates the fixed-point iteration concretely, and it discharges the key epistemological claim about reinstatement.
- Dependency: grounded extension (def 10), operator F iteration.

### Layer 4 — Measures and Demarcation

**12. Battery B(a) and battery equivalence ≈_B** (Def 3.5)
- B(a) = a's own commitments plus instantiated criteria of all problems a addresses.
- a'≈_B a iff a' and a receive identical verdicts across B(a). "Same explanation, possibly reworded."
- Dependency: artifact, problem, commitment, addr relation.

**13. Criticizability crit(a) and modifiability mod(a)** (Def 3.5)
- crit(a) ⟺ I(a)≠∅ (nonempty attack surface).
- mod(a) ⟺ Pr_{a'∼µ(·|a)}[a'≉_B a]>0 (nontrivial variation surface).
- Epistemically active = both hold.
- Replaces Popperian falsifiability: crit is the generalization (math, philosophy, arts all admitted).
- Dependency: battery equivalence, variation kernel, probability (basic).

**14. Hard-to-vary HV_B(a)** (Def 3.6)
- s(a) = Pr_{a'∼µ(·|a)}[a' passes B ∧ a'≉_B a]
- HV_B(a) = 1−s(a). High HV = few inequivalent edits survive the battery. Low HV = many do.
- Battery-relative, graded, re-estimated as battery grows.
- Hoeffding (ε,δ) estimability: one-line remark only, do not teach.
- Dependency: battery, battery equivalence, variation kernel, probability.

**15. Reach R_t(a)** (Def 3.7)
- R_t(a) = problems in Π^lib_t beyond a's origin problem that a meets at t.
- A reach event triggers (Spawn) to open an explanation-debt problem.
- Dependency: problems, addr, Crit, time-indexed library.

### Layer 5 — Axioms

**16. N1 — No absorbing status** (Axiom 2)
- Every status admits an exit: accepted→refuted (new warranted attack), refuted→accepted (reinstatement), demonstrative refutation reopened (attack on validity node).
- No state is final, including the rule-artifacts.
- Dependency: status labelling (grounded extension), reinstatement lemma.

**17. N2 — Perpetual proposability** (Axiom 3)
- Generator support is unbounded: for every accepted a, there exist proposable successors with strictly extended batteries.
- "Knowledge at t" = trajectory (G_t, HV-profile, R-profile): an open process.
- Dependency: grounded extension, HV, reach.

---

## Prerequisite Analysis (First-Year Proof-Literate)

### Assumed Known — no teaching needed

| Concept | Calibration note |
|---------|-----------------|
| Proof structure (direct, contradiction, cases) | They can read and write proofs. The reinstatement proof will be followable as-is. |
| Sets and set-builder notation | A, Π, B(a), Crit_π are all sets. No special treatment needed. |
| Subsets and subset relations | att⊆A×A, addr⊆A×Π. Brief reminder on reading "⊆ A×A" as "a set of ordered pairs from A" is enough. |
| Relations as sets of ordered pairs | att, addr. A one-sentence reminder suffices; do not re-teach. |
| Functions (domain, codomain, evaluation) | V(κ,c), W, µ(·|a). Standard. |
| Mathematical induction | Required for the fixed-point construction. Can be connected to explicitly: "this is structured induction on the iteration count." |
| Basic counting and finite sets | A and Π are finite. Exercises can count nodes, edges. |

### MUST TEACH from Scratch or Black-Box

**B1. The bounded verdict idea** — black-box treatment
- Teach: "A commitment κ=(τ,β) is a test paired with a budget. Running it on content c gives exactly one of three outcomes: pass, fail, overrun (ran out of steps before finishing)."
- Why three and not two: overrun means "we can't tell" under this budget — not that c fails. This motivates the suspended status later.
- Cleanest way in: analogy to a referee who stops a match after a time limit with "no decision" — it's a real outcome, not a cop-out.
- Budgeting note: one aside sentence — "Without the budget, Rice's theorem would make verdict computation undecidable. The budget is what makes it computable." No further computability theory.

**B2. Directed graphs of attacks** — teach from scratch (first-year may not have graph theory)
- Teach: nodes, directed edges, in-degree/out-degree, the meaning of (k,a)∈att as "k attacks a (edge from k to a)."
- A 3-node worked example to set up the grounded-extension computation.
- Cleanest way in: draw the graph before giving the algebra. "k→a means k attacks a. No edge means no attack."

**B3. Least-fixed-point construction via iteration** — teach from scratch, connect to induction
- This is the most technically demanding new concept. First-years have induction; use it.
- Teach: "We build G from nothing. Start with S_0=∅. At each step, S_{n+1}=F(S_n). Stop when S_{n+1}=S_n. The result is G."
- Why this terminates: A is finite. F is monotone (S⊆S' ⟹ F(S)⊆F(S')). So the sequence S_0⊆S_1⊆... is non-decreasing in a finite set, hence reaches a fixed point.
- Connection to induction: "Each application of F is one inductive step. The fixed point is the strongest thing induction can prove into acceptance."
- Key property to assert (cite Dung 1995): the fixed point is unique for the grounded semantics. No proof needed; it is an imported result.
- Cleanest way in: work a 3-node hand-example first, then give the general definition.

**B4. Enough probability for modifiability and HV** — teach from scratch, minimal
- Needed concepts: probability distribution over a finite or countable sample space; Pr[event] notation; expectation (for reach, if used); "support is unbounded" (for N2).
- Not needed: continuous distributions, density functions, conditional probability beyond the obvious, any statistics.
- Cleanest way in: "µ(·|a) is a way of randomly sampling edits of a — think of it as a random-edit machine. We ask: what fraction of edits produce something genuinely different from a (by the battery's reckoning) that still passes?"
- Keep HV as a "survival probability of inequivalent edits." The formal definition follows naturally.

**B5. Conjecture–criticism motivation** — conceptual setup, keep brief
- Needed before the formal system makes sense: what is a problem? what is a conjecture? what does "attack" mean epistemically?
- Cleanest way in: a one-module orienting narrative using a simple real example (e.g., "why does bread rise?" — a problem; guesses = conjectures; an objection = an attack; the objection can itself be objected to = the uniformity of attack).
- Keep the spotlight on the formal system. This is scaffolding, not the lesson.

---

## Hooks & Examples

### Hook 1 — Orienting narrative (B5)
"Three friends argue about why bread rises. Friend 1 says 'yeast produces gas.' Friend 2 says 'you haven't accounted for temperature.' Friend 3 says 'Friend 2's temperature objection ignores that we're discussing a controlled oven.' The system we're building will give an exact mathematical meaning to this dance, track which ideas are currently winning, and prove that if an objection is itself refuted, the original idea comes back."

### Hook 2 — Hand-computed grounded extension (3 nodes)
**Setup:** Artifacts A={a,k,j}. Attack relation: k attacks a, j attacks k. No other attacks.

**Iteration:**
- S_0 = ∅
- F(S_0) = {a∈A : every attacker of a is attacked by some member of ∅} = {j} (j has no attacker, vacuously satisfied; k has no attacker either — wait: j attacks k, so k has attacker j; a has attacker k, so a is NOT in F(∅) yet... checking: F(S_0) = {j} because j has no attacker, and k has attacker j ∉ S_0, and a has attacker k ∉ S_0.)
  - Actually: F(∅) = {a : every attacker of a is in ∅ or unattacked}. More precisely: F(S) = {a : ∀b, (b,a)∈att ⟹ ∃c∈S, (c,b)∈att}. For j: j has no attackers → condition vacuously true → j∈F(∅). For k: j attacks k; is j attacked by something in ∅? No. So k∉F(∅). For a: k attacks a; is k attacked by something in ∅? No. So a∉F(∅).
  - S_1 = F(∅) = {j}.
- F(S_1) = F({j}): For j: still j∈F({j}) (vacuous). For k: j attacks k; j∈S_1 → k∈F({j}). For a: k attacks a; is k attacked by something in {j}? Yes: j attacks k, and j∈{j}. So a∈F({j}).
  - S_2 = F({j}) = {j,k,a}.
- F(S_2) = {j,k,a} (check: same reasoning, all still in). Fixed point reached.
- G = {j,k,a}. Status: j=accepted (∈G, no attacker from G); k=accepted (∈G); a=accepted (∈G). Wait — k attacks a but k∈G... re-check: "refuted iff ∃b∈G: (b,a)∈att." k∈G and k attacks a, so a should be refuted?

**Correction:** G = {j,k,a} is wrong for grounded semantics with k attacking a and j attacking k. Let me re-examine. The grounded extension is the LEAST fixed point, and it's the unique semantics where a is in the grounded extension only if it is defended against all attackers.

Correct working: S_0=∅. S_1=F(∅)={j} (only j has no attacker). S_2=F({j})={j,k} — because k's attacker j∈S_1, so k is "defended." But a's attacker k: is k attacked by something in S_1={j}? j attacks k, yes → a∈F(S_1). So S_2={j,k,a}? Then F(S_2)={j,k,a}. Fixed point is {j,k,a}.

Status labels then: j∈G (accepted). k∈G but also k attacks a AND k∈G → a is refuted? No — "refuted iff ∃b∈G: (b,a)∈att." k∈G, (k,a)∈att, so a IS refuted even though a∈G? That's a contradiction.

**Clarification needed:** In Dung grounded semantics, G = the least fixed point of F, where F(S)={a: all attackers of a are attacked by some element of S}. The status is then: accepted=∈G, refuted=attacked by some element of G, suspended=neither. These are mutually exclusive by the properties of grounded semantics — if a∈G, then a cannot be attacked by any element of G (because if k∈G and k attacks a, then a's attacker k must itself be attacked by some element of G for a to be in G... actually the fixed point property handles this).

Let me re-examine the 3-node example with the correct graph. In Dung standard: if k attacks a and j attacks k (only attacks), then: unattacked = j. F(∅)={j}. Now F({j}): a is attacked by k — is k attacked by some member of {j}? Yes (j attacks k). So a∈F({j}). k is attacked by j — is j attacked by some member of {j}? j is not attacked by anyone, so vacuously... wait. k∈F({j}) iff every attacker of k is attacked by some member of {j}. j attacks k. Is j attacked by some member of {j}? j∉att as an attacked node (no one attacks j). So j does NOT attack j, and there's no c∈{j} with (c,j)∈att. Hmm, but j is unattacked — so "is j attacked by some member of {j}" is vacuously satisfied? No: the condition is "every attacker of k is attacked by some member of S." j is the attacker of k. Is j attacked by some member of S={j}? That requires some c∈{j} with (c,j)∈att. Since j∉domain(att-as-target) (no one attacks j), no such c exists. So k∉F({j}).

So: F({j}) = {j, a}. Because: a's only attacker is k; is k attacked by some member of {j}? j attacks k, j∈{j}. Yes! So a∈F({j}). k's only attacker is j; is j attacked by some member of {j}? No (j is unattacked). So k∉F({j}).

S_2 = {j,a}. Now F({j,a}): j∈F({j,a}) (unattacked, vacuous). a∈F({j,a}): a's attacker k — is k attacked by some member of {j,a}? j∈{j,a} and j attacks k → yes. So a∈F({j,a}). k∈F({j,a}): k's attacker j — is j attacked by some member of {j,a}? No. So k∉F({j,a}). S_3={j,a}=S_2. Fixed point.

**G = {j,a}** (the correct answer). Status: j=accepted (∈G, no attacker from G attacks it — in fact no one attacks j); a=accepted (∈G, and k∉G so no G-member attacks a); k=refuted (∃j∈G with (j,k)∈att). This is the reinstatement case: a was attacked by k, k was attacked by j, j is in G ⟹ a is accepted.

**Worked example for the course (corrected):**

> Artifacts: a (a conjecture), k (a criticism of a), j (a criticism of k). Attacks: k→a, j→k. No other attacks.  
> Iteration: S_0=∅. S_1={j}. S_2={j,a}. S_3={j,a}=S_2. Done. G={j,a}.  
> Status: j=accepted, a=accepted, k=refuted.  
> Reading: j refuted the criticism k, so the original conjecture a is reinstated. This is Lemma 3.1 computed by hand.

### Hook 3 — Worked reinstatement proof
The hand-example above IS the reinstatement lemma. The proof in the paper is:
"F(∅) contains all unattacked arguments, hence j; then a is acceptable w.r.t. {j} [a's attacker k is attacked by j∈{j}], so a∈F(F(∅))⊆G."
This should be spelled out step-by-step matching the iteration above.

### Hook 4 — Two rival conjectures for one problem
**Setup:** Problem π: "Why does water expand when it freezes?" Conjectures a₁ (hydrogen bonding creates open lattice) and a₂ (density anomaly from quantum effects). Each addresses π. Neither attacks the other directly (they'd need a warrant tied to π's criteria). If both survive adjudication, (Spawn) opens a discrimination problem: "design a test that distinguishes a₁ from a₂."
- Shows: rivals don't attack by fiat (need a warrant). Survival of two creates a new problem.

### Hook 5 — Hard-to-vary contrast
**Rigid explanation (high HV):** "Objects fall because gravity pulls mass toward mass with force F=Gm₁m₂/r²." Battery: dozens of precision tests (planetary orbits, pendulums, tidal data). Randomly editing the formula (change r² to r^2.01, change the constant) fails almost all tests. s(a) ≈ 0, HV ≈ 1.

**Easy-to-vary (low HV):** "Objects fall because nature abhors emptiness." Battery: same tests. Edits: replace "abhors emptiness" with "seeks the center," "prefers lower states," etc. All pass (the theory has no testable commitments beyond "things fall"). s(a) ≈ 1, HV ≈ 0.

**Key teaching point from ≈_B:** A mere rewording of the gravity law ("attractive force between masses varies inversely as the square of separation") receives the same verdicts across B — it's battery-equivalent to the original and does NOT count as a distinct survivor. HV is about genuinely inequivalent variants that still pass, not stylistic rewrites.

---

## Common Pitfalls / Misconceptions

**P1. "Refuted = deleted"**
The system never deletes artifacts. Refuted is a computed status produced by the adjudicator (Adj) based on the current attack graph. If the graph changes (a new attack on the refuter), the refuted artifact can become accepted. This is the reinstatement lemma. Emphasize early and repeat.

**P2. "The grounded extension is a choice we make"**
The grounded extension is the unique least fixed point of a specific operator F. There is no selection among multiple options. This is an import from Dung 1995; the course states and uses uniqueness without proving it. Common confusion arises because students know that sets have multiple possible subsets; stress that the iteration from ∅ pins down exactly one.

**P3. "Criticizability = Popperian falsifiability"**
Popperian falsifiability requires the possibility of an empirical test. Criticizability (crit(a)) requires only a nonempty commitment interface I(a) — any commitment, empirical or not. Mathematical proofs, aesthetic standards, philosophical arguments all have nonempty commitment interfaces. The note is explicit: "empirical falsifiability is the special case of crit in which some commitment is observation-valued." Students from a science background will conflate the two.

**P4. "Hard-to-vary penalizes mere renaming or re-voicing"**
Battery equivalence ≈_B is precisely designed to block this. Two artifacts that receive identical verdicts across B(a) are considered the same explanation for HV purposes. Rewording "gravitational attraction" as "attractive gravitational force" is battery-equivalent. HV is about genuinely distinct behavioral variants — ones that the battery can distinguish.

**P5. "'Overrun' means the conjecture failed"**
Overrun means "we ran out of budget before a verdict." It is a third outcome, not a form of failure. An overrun verdict makes the relevant commitment unable to contribute to refutation under this budget. This is why the budget matters: it prevents an infinite computation from blocking the system. Students will want to read overrun as fail.

**P6. "Suspended means probably wrong"**
Suspended means neither accepted nor refuted given the current attack graph. It is an epistemic state about what the graph supports, not a judgment about truth. An artifact can be suspended because it hasn't been adequately attacked, or because it is in an unresolved cycle.

**P7. "The (Adj) rule runs at the end"**
Adjudication (recomputation of G) happens after every registration. It is not a final step — it is continuous. Statuses are always up-to-date snapshots of the current attack graph.

**P8. "N1 and N2 are theorems we could prove"**
They are axioms — constitutive choices. The paper is explicit: "one cannot derive that there is no final theory." The impossibility of proving fallibilism from within the system is itself a key philosophical point worth one sentence in the course.

---

## Sources

**Primary source (the only source needed):**
- Source note: *"The Necessity of Creativity: A Substrate-Independent Calculus of Conjecture and Criticism"* (June 2026, working draft). All definitions, rules, lemmas, and axioms cited by Definition/Lemma/Axiom number as given in §3.

**Named-but-not-taught imports (state, use, do not derive):**
- Dung, P.M. (1995). "On the acceptability of arguments and its fundamental role in nonmonotonic reasoning, logic programming and n-person games." *Artificial Intelligence* 77(2), 321–357. — Grounded semantics, uniqueness, skeptical properties. Imported wholesale into (Adj).
- Popper, K. (1963). *Conjectures and Refutations.* — Named when explaining what criticizability replaces. Out of scope to teach.
- Deutsch, D. (1997, 2011). *The Fabric of Reality* / *The Beginning of Infinity.* — Named once as the epistemological motivation. Out of scope.
- Kolmogorov complexity (Li & Vitányi) — named in the paper's §1.2 as one of the imported tools for hard-to-vary. The course's treatment of HV via the probability formula does not require this. No teaching needed.
- Hoeffding sampling (statistical estimation theory) — named in Def 3.6 remark. One line only: "HV can be estimated from a finite random sample of edits to within (ε,δ) accuracy — but we won't derive the statistics here."

---

## Open Questions for Curriculum

**Q1. Module count.** §3 has five natural layers: primitives, state structure, transition rules, measures, axioms. Within those, the grounded extension / adjudication is a sub-topic dense enough for its own module. Proposed count: **10 modules** (fits within the 8–14 first-course range; avoids the 3–6 mini-course range since the topic has genuine breadth). Rough sketch:

| # | Working title | Key content |
|---|--------------|-------------|
| 1 | Orientation — problems, conjectures, and the game | Narrative setup; what the calculus is for; naming §4 as the payoff without teaching it |
| 2 | Commitments and verdicts | Def 3.1, the three-outcome structure, black-boxing computation |
| 3 | Artifacts and problems | Def 3.2; content + interface; problems as growing criterion sets; provenance |
| 4 | Epistemic states | Def 3.3; S=(A,Π,addr,att,W); the attack relation as a directed graph; warrants (Def 3.4) |
| 5 | Well-formedness and the first two rules | §3.2 formation rules; (Conj) and (Crit) |
| 6 | The grounded extension | F operator, iteration from ∅, least fixed point, status labelling; connect to induction |
| 7 | Adjudication and reinstatement | (Adj) rule, Lemma 3.1 with full proof, (Refl) |
| 8 | Problem generation | (Spawn) and its five triggers; reach events |
| 9 | Measures and demarcation | Def 3.5 (crit, mod, battery equivalence), Def 3.6 (HV), Def 3.7 (reach) |
| 10 | Fallibilism as structure | N1 and N2; why axioms rather than theorems; the system as self-referential (Refl revisited); one-line forward pointer to §4 |

**Q2. Does the grounded extension deserve its own module?** Yes, strongly. The fixed-point iteration is the hardest new concept and requires: probability-free, directed-graph-based, induction-flavored, patience. Bundling it with (Adj) in one module risks a too-heavy first encounter. Proposed split: Module 6 = operator + iteration + status labelling. Module 7 = (Adj) rule formally stated + Lemma 3.1 proof + (Refl).

**Q3. Where to place the reinstatement-lemma proof?** Module 7, immediately after the grounded extension is established. The proof is 4 lines and is a perfect first proof that uses the new machinery. It should be fully carried (not "left to the reader"). It is also the payoff of Module 6's iteration work.

**Q4. Measures before or after axioms?** Measures (Module 9) before axioms (Module 10). Reasons: (a) mod(a) appears in the N1/N2 discussion; (b) the axioms make more sense when HV has been defined ("N2 says the battery can always grow — there's always a new HV question to ask"). (c) the axioms are a fitting capstone.

**Q5. Where does probability enter?** First needed in Module 9 (modifiability = Pr[a'≉_B a]>0; HV = 1−s(a)). Brief probability scaffold should be at the START of Module 9, not a standalone module (the amount needed is small: probability of an event, support of a distribution). If course-design.md's "one big idea per module" rule is being strict, this scaffold could be the hook/intuition of Module 9, not a separate module.

**Q6. What is too hard for first-years without heavier scaffolding?**

- **Validity-node closure** (Def 3.4, demonstrative warrants): "any attacker of ν(κ) attacks k." This double-level indirection (warrant has a validity node; attacks on the validity node propagate to the warrant) is subtle. Recommend: work a concrete example before stating the rule abstractly. Risk level: medium-high.
- **The (Spawn) triggers in full generality**: five trigger types in one rule. The course should present 2–3 of them and acknowledge the rest exist. Full coverage risks drowning the module in cases.
- **Battery equivalence ≈_B as a formal relation**: the definition is clean, but students will need a worked example where two artifacts ARE battery-equivalent (both pass/fail identically) vs. where they are not. Without this, HV becomes meaningless. One worked example is mandatory.
- **N2 with "unbounded support"**: the phrase "support is unbounded" is from measure theory. For first-years, rephrase as: "For any accepted artifact a, there always exist proposable variations with more commitments — the battery can always grow." Avoid measure-theoretic language.

---

## Dependency Order (summary for curriculum stage)

verdict/commitment → artifact → problem → kernel → epistemic state S → warrants → formation rules → (Conj)/(Crit) → directed attack graph → operator F → grounded extension G → status labelling → reinstatement lemma → (Adj) → (Spawn) → battery/≈_B → criticizability/modifiability → HV → reach → N1/N2

Proposed module count: **10**.

Concepts needing most scaffolding for first-years: (1) the fixed-point iteration behind the grounded extension, (2) validity-node closure in demonstrative warrants, (3) battery equivalence before HV.
