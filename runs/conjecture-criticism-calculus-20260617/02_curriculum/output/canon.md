# Canon — The Conjecture–Criticism Calculus

The consistency contract. **Binding** on every authoring sub-agent (Stage 03) and on the editorial
stage (04). Its job is to stop eleven blind-parallel authors from drifting. Be decisive.

> **Formal-content rule (from `_config/math-style.md`).** Definitions, the Lemma, its proof, the rule
> statements, and every equation are **formal** — written once, correctly, never run through the prose
> rewrite loop. Use the symbols below **identically**, including inside formal blocks. Each definition
> must be reached by a **bridge** (prose that decodes the notation), but the bridge never alters it.

## 1. Symbol & naming registry

One name and one symbol per recurring object. Use exactly these; invent no synonyms.

| Thing | Canonical name / symbol | Not |
|------|--------------------------|-----|
| A piece of content under discussion + its finite commitment interface | **artifact** `a = (c(a), I(a))` | object, item, statement, entry |
| The content of an artifact | `c(a)` | "the string", "the value" |
| The finite set of commitments an artifact answers to | **commitment interface** `I(a)` | "its tests", "its API" |
| A test program paired with a resource budget | **commitment** `κ = (τ, β)` (`τ` test, `β` budget) | check, test (alone), constraint |
| The outcome of running a commitment on content | **verdict** `V(κ,c) ∈ {pass, fail, overrun}` | result, score |
| "Ran out of budget before deciding" | **overrun** | timeout, fail, undecided-fail |
| A description + a growing set of criteria + provenance | **problem** `π = (d_π, Crit_π, prov_π)` | question, goal, task |
| The criteria of a problem (commitment schemas) | `Crit_π` | "the rules of π" |
| An artifact introduced to answer a problem | **conjecture** | hypothesis, idea, proposal |
| An artifact whose job is to attack another, carrying a warrant | **criticism** | objection, rebuttal, counter |
| The directed relation "x attacks y" | **attack** `att ⊆ A × A`; edge `(k,a) ∈ att` | objection-edge, conflict, defeats |
| The justification an attack edge must carry | **warrant** (two kinds: **demonstrative**, **argumentative**) | reason, ground, proof-of-attack |
| The artifact a demonstrative warrant depends on (asserts the test is sound) | **validity node** `ν(κ)` | soundness node, checker |
| The addressing relation "artifact addresses problem" | `addr ⊆ A × Π` | "targets", "covers" |
| A snapshot of inquiry | **epistemic state** `S = (A, Π, addr, att, W)` (`A` artifacts, `Π` problems, `W` warrant map) | configuration, world, knowledge base |
| The whole running machine | **system** `Σ_sys` | engine, model |
| The generator that produces conjectures | **conjecture operator** `γ` | generator (alone), producer |
| A one-step state rewrite | **transition** `S ⇝ S′` | move, update, step |
| The five transitions | exactly **(Conj), (Crit), (Adj), (Spawn), (Refl)** | renaming any of these |
| The operator behind adjudication | `F(S) = { a : every attacker of a is attacked by some member of S }` | the "defense function" under another name |
| The unique least fixed point of `F` (iterate from `∅`) | **grounded extension** `G` | the accepted set, the winners |
| The three statuses | **accepted / refuted / suspended** (exact words) | in/out, valid/invalid, true/false |
| The set of edits sampled from an artifact | **variation kernel** `µ(·|a)` | mutation, neighbourhood |
| An artifact's commitments + the criteria of problems it addresses | **battery** `B(a)` | test suite, its tests |
| "Same verdicts across `B(a)`" | **battery-equivalent** `a′ ≈_B a` | equal, identical, equivalent (alone) |
| Has a nonempty attack surface (`I(a) ≠ ∅`) | **criticizable** `crit(a)` | falsifiable, testable |
| Has a nontrivial variation surface | **modifiable** `mod(a)` | changeable, flexible |
| Both hold | **epistemically active** | live, valid |
| Survival probability of inequivalent edits | `s(a)` | survival rate |
| `1 − s(a)`, graded rigidity | **hard to vary** `HV_B(a)` | rigidity, robustness (alone) |
| Problems beyond its origin that an artifact meets at time `t` | **reach** `R_t(a)` | scope, generality |
| The two fallibilism axioms | **N1** (no absorbing status), **N2** (perpetual proposability) | "the axioms" without their names |

Notation house-style (per `math-style.md`): inline `$...$`, display `$$...$$`; the status function as a
KaTeX `cases` block; `\subseteq`, `\in`, `\emptyset`, `\mapsto`, `\Pr`, `\mid` (for `µ(·\mid a)`). Define
every symbol in words before first use.

## 2. "Already-taught" ledger & dedup plan

Each shared fact has **one owner** giving the full treatment; every later use is a one-line **callback**,
never a re-derivation.

| Fact | Owner | Callback in | Suggested callback line |
|------|-------|-------------|-------------------------|
| The informal loop (problem → conjecture → criticism → what survives) | M1 | M6, M8, M11 | "the conjecture–criticism loop from module 1" |
| commitment / verdict / the three outcomes | M2 | M5, M9 | "a verdict (pass / fail / overrun) — module 2" |
| artifact = content + interface; artifact-uniformity | M3 | M5, M6, M9 | "every criticism is itself an artifact (module 3)" |
| problem `π` and its criteria | M3 | M6, M11 | "a problem in the sense of module 3" |
| epistemic state `S=(A,Π,addr,att,W)`; the attack graph | M4 | M6, M7, M8 | "the attack graph `att` from module 4" |
| warrants (demonstrative/argumentative); validity-node closure | M5 | M6, M8 | "the warrant an attack carries (module 5)" |
| "nothing is ever deleted; refuted is a computed status" | M6 | M8, M11 | "nothing is deleted — module 6" |
| operator `F`; iterate-from-∅; grounded extension `G`; statuses | **M7** | M8, M10, M11 | "the grounded extension `G` we built in module 7" |
| Reinstatement Lemma 3.1 + proof | M8 | M11 | "reinstatement (module 8)" |
| battery `B(a)`, `≈_B`; criticizable/modifiable | M9 | M10, M11 | "battery-equivalence `≈_B` from module 9" |
| variation kernel `µ(·|a)` + the minimal probability | M9 | M10 | "the variation kernel from module 9" |
| hard to vary `HV_B(a)`; reach `R_t(a)` | M10 | M11 | "hard-to-vary (module 10)" |

The grounded-extension construction (M7) is the spine; M8, M10, M11 lean on it heavily — **call back, never
rebuild it**.

## 3. Metaphor-ownership map

One running image per module, and only where it points true (one correct referent, paid off, cashed into
the formal content). Otherwise use a clean concrete shape or none.

| Image | Owner | Why it points true |
|-------|-------|--------------------|
| A **referee with a stopwatch**: pass / fail / **time's up, no decision** | M2 | exactly the three verdicts; `overrun` is genuinely "time ran out", not a loss |
| The attack graph as a **map of arrows: "k → a" means "k attacks a"** | M4 | a directed edge is precisely an attack; no second reading |
| The grounded extension by **rounds of standing**: round 0 the unattacked stand; each round, add everyone whose every attacker has already been knocked down; stop when no one new joins | M7 | this *is* the `∅, F(∅), F(F(∅)), …` iteration; monotone accumulation, no misleading sense |
| **Rigid vs floppy**: a hard-to-vary artifact breaks under almost any genuine change; an easy one survives any edit because it commits to nothing | M10 | maps to `s(a)` small vs large; "floppy = passes everything = says nothing" |

> **Standing warning (per literary-maverick).** Do **not** image the adjudicator as a *judge/jury deciding by
> opinion* or a *vote* — the grounded extension is a mechanical fixed point, not a verdict of taste. Do not
> image conjecture as *random mutation* — provenance is irrelevant here, but "random" wrongly imports chance.
> Avoid "tournament/knockout" as the headline image for `G` (it suggests single-elimination and a champion;
> `G` is a *set* that accumulates). The "rounds of standing" image above is the sanctioned one.

## 4. Stock-phrase caps

| Phrase | Cap | Keeper |
|--------|-----|--------|
| "what survives" / "left standing" | keep as occasional plain language; **cap 2 per module** | — |
| "Intuitively," as a sentence-opener | ≤ 1 per module | — |
| "It's worth noting that" / "Note that" pile-ups | trim; ≤ 2 per module | — |
| "the machine" / "the machinery" for the system | ≤ 2 per module (prefer "the system", "the calculus") | — |
| empty hedges ("arguably", "in some sense", "more or less") | 0 | — |
| empty openers ("Let's dive in", "In this module we will", "Now,") | 0 | — |

## 5. Voice target

One narrator across all eleven: **a sharp, generous proof-mentor** — the kind who makes an abstract
definition feel inevitable, talks *to* a capable first-year (occasional "you"; "we" for shared
construction), and never condescends or gushes. Plain, exact, warm-but-rigorous. Prose carries the
intuition and the bridges; formal blocks are clean and conventional (math-style). Sentences end on the
strong word; jargon is glossed on first use (these readers know proofs and sets, **not** computability,
fixed-point theory, argumentation theory, or epistemology).

**Drift to watch for** (correct in editorial): a module that goes **dry/encyclopedic** (stacks of
definitions with no bridge) gets pulled toward the mentor who motivates first; a module that goes
**chatty/hand-wavy** about the philosophy gets pulled back to the formal spine. Every definition must have
a bridge; no module may open with the same move as its neighbours; the grounded-extension vocabulary and
symbols must be identical in M7, M8, M10, M11.
