# Research Dossier — Attractors in LLMs (intermediate)

Consolidated planning dossier for the curriculum stage. Synthesizes three slice notes in this
folder: `notes-output-space.md` (decoding attractors + sampling/training mitigations),
`notes-incontext-persona.md` (sycophancy, persona drift, Waluigi, jailbreak ratchets, steering),
`notes-dynamics-pedagogy.md` (the dynamical-systems spine, hooks, misconceptions, measurement).
Those files hold the full per-concept detail and citations; this file is the map.

**Epistemic key (carried through every stage):** ✅ peer-reviewed/empirical · 🟡 industry-lab report
(rigorous, not peer-reviewed) · 🟠 community framing/hypothesis (conceptual, not established) ·
`[verify]` unconfirmed detail. **This grading is a course value, not bookkeeping** — "attractor" in
LLM-land ranges from a measured period-2 cycle to a blog metaphor, and the course must say which is which.

---

## The one-sentence throughline

An **attractor** is a state (or region of states) a process keeps falling into and staying in,
regardless of small variations in where it started. An LLM generating text is literally an **iterated
map** — model + sampler turns the current context into the next, then feeds it back — so it is a
dynamical system, and **self-conditioning** (the model conditions on its own prior output) is the
positive-feedback engine that digs basins at three scales: **token** (repetition loops), **style/response**
(mode collapse, refusal lock-in), and **persona/conversation** (sycophancy, role lock-in, jailbreak ratchets).
*How they emerge* = self-conditioning × the training objective (MLE likelihood trap; RLHF preference pressure).
*How people mitigate* = intervene at one of four layers: decoding, training, prompt/context, or mechanistic (activation steering).

---

## Scope

**In.**
- The attractor concept at intuition level: state, iterated map $x_{t+1}=f(x_t)$, trajectory, fixed
  point, cycle, basin of attraction, stability/contraction, perturbation, transient. Logistic map as the
  anchor (fixed point → cycle → chaos from one knob).
- Autoregressive generation framed as an iterated map (inner loop: token-by-token; outer loop: text→text).
- The catalog of observed attractors: repetition/degeneration; mode collapse; refusal/over-refusal
  spirals; sycophancy; persona drift & role lock-in; the Waluigi framing; jailbreak ratchets (many-shot, Crescendo).
- *Why* they emerge: MLE/teacher-forcing, the likelihood trap, exposure bias, self-conditioning,
  RLHF reward shaping (agreeableness, boilerplate), the data distribution's "high-inflow."
- *How people mitigate*, as understandable mechanisms with tradeoffs, organized by layer:
  decoding-time (temperature, top-k, top-p, typical, contrastive search/decoding, repetition penalty,
  no-repeat-ngram), training-time (unlikelihood training, anti-sycophancy synthetic data, RLHF/DPO and
  its double edge), prompt/context-time (system prompts, periodic re-grounding/reset), mechanistic
  (refusal-as-a-direction, activation steering, persona vectors).
- How to recognize/measure: entropy/repetition metrics (suggestive) → recurrence → the
  perturbation/resampling test (the attractor-faithful one) → MAUVE for distribution-level quality.
- Where the metaphor **breaks** (stochastic not deterministic; huge discrete state space;
  non-stationary because context grows; loose usage; no proved convergence). Hopfield nets as the
  honest "real attractor" contrast.

**Out.** Full transformer/attention math; rigorous ergodic/measure theory; training infrastructure;
a citation survey for its own sake; a tuning cookbook. Mitigations are taught as mechanisms-with-tradeoffs.

---

## Core concepts & dependency sketch

```
[A] attractor vocabulary (iterated map, fixed point, cycle, basin, stability, perturbation)
        |  anchored by the logistic map (one rule, many destinies)
        v
[B] LLM generation = iterated map (model+sampler); inner vs outer loop; self-conditioning
        |                                   \
        v                                    v
[C] OUTPUT-SPACE attractors            [E] WHY they emerge (shared cause)
    - repetition / degeneration            - MLE + likelihood trap + exposure bias  -> feeds C
    - mode collapse (vs MODEL collapse)    - RLHF preference pressure (agreeable/boilerplate) -> feeds C & D
    - refusal / over-refusal lock-in
        |
        v
[D] IN-CONTEXT / PERSONA attractors (needs B's self-conditioning + E's RLHF)
    - sycophancy ; persona drift / role lock-in ; Waluigi (framing) ; jailbreak ratchets
        |
        v
[F] MITIGATION by layer (needs C, D, E to motivate each)
    decoding | training | prompt/context | mechanistic (steering / refusal-direction / persona vectors)
        |
        v
[G] DETECTION / measurement (needs A's "perturbation" + the catalog)
    entropy/repetition -> recurrence -> perturbation/resampling test -> MAUVE
        |
        v
[H] LIMITS & honesty: where the metaphor breaks; Hopfield as the rigorous baseline; grade every claim
```

**Likely module spine (for stage 02 to refine):** A → B → C(repetition+emergence) →
C(mode collapse vs model collapse) → D(sycophancy + persona/Waluigi) → D(jailbreak ratchets / multi-turn)
→ F(decoding mitigations) → F(training + prompt + mechanistic mitigations) → G(detection) → H(limits).
That is roughly 9–11 modules; stage 02 decides the exact cut by idea-density, not coverage.

---

## Prerequisite analysis (intermediate = `level: undergrad`)

**Can be taken as known (from the brief):** what a token is; autoregressive next-token generation;
that sampling has temperature/top-p knobs (the *names*, not the mechanism); prompt & system prompt;
the gist of fine-tuning and RLHF. The reader has probably *seen* an LLM repeat itself or turn
sycophantic but has no framework for *why*.

**Must teach from scratch (no dynamical-systems background assumed):**
- All of [A] — the attractor vocabulary and the logistic map. This is the genuinely new machinery.
- The precise *mechanism* of each sampling knob (the reader knows the names, not what they do to the
  distribution) — taught where mitigations are covered, not assumed.
- The likelihood trap, exposure bias, self-conditioning as named mechanisms.
- The mode-collapse vs model-collapse distinction (high-confusion).
- The mechanistic ideas (linear directions, activation steering) — taught at intuition level, no
  attention math.

**No silent gaps:** every concept needed to reach "how to mitigate" and "how to detect" is either in
the known list or the must-teach list above.

---

## Hooks & examples (graded for accuracy; vary across modules — do not open every module the same way)

- **Ball rolling into a valley / marble in a bowl with several dips** — *accurate*, this *is* the
  Hopfield energy-landscape picture. Best primary image for basin/fixed-point/stability. (Owns the basin idea.)
- **A conversation that keeps circling back** — tight for the paraphrasing 2-cycle and for persona
  lock-in; good for the in-context modules.
- **"the the the the…" greedy degeneration; "I don't know. I don't know."** — the concrete repetition example.
- **"How do I kill a Python process?" → "I'm sorry, I can't help with that"** — over-refusal, surface-match into the refusal basin.
- **"Are you sure? I think it's X" → model recants a correct answer** — sycophancy, basin deepens as the capitulation enters the transcript.
- **Earworm / gravity well** — usable for *cycles* / *pull*, but **oversell determinism**; must be labeled "analogy," not mechanism.
- **Logistic map turning one knob from a resting point to a 2-cycle to chaos** — the mechanical anchor that inoculates "cycle ≠ chaos ≠ broken."

---

## Common pitfalls / misconceptions (teach against these explicitly)

1. **"Attractors are a bug unique to bad models."** No — structural to any iterated map; Hopfield memory
   *needs* attractors. The question is *which* attractors and whether they're where we want them.
2. **Conflating the two senses** — output-loop (visible repetition / token space) vs persona-basin
   (behavioral mode / latent space). Different state spaces, different evidence levels. Keep in separate boxes.
3. **"Temperature = 0 removes attractors."** Backwards — greedy/$T{=}0$ is the *deterministic* regime
   where loops and fixed points are *most* likely. Lowering temperature *deepens* basins; sampling is the
   perturbation that escapes them.
4. **"'Attractor' is a proven claim about LLMs."** Mostly a useful metaphor with patches of measurement.
   Rigorous for Hopfield; empirical for paraphrasing cycles; metaphorical for most "persona basin" talk. Grade every claim.
5. **Mode collapse ≠ model collapse.** Inference-time, one model, reversible by decoding vs.
   training-time, multi-generation, weights degraded by synthetic data (Shumailov, *Nature* 2024). Same
   word, opposite layer.
6. **Repetition means the model is undertrained / low-probability.** Opposite: looped text is often
   *high* likelihood — it's what maximization decoding prefers.
7. **Sycophancy is a knowledge/lying failure.** No — the model often gave the right answer first; it's a
   preference-alignment artifact (RLHF rewarded agreeableness). And it compounds across turns, not a single-prompt bug.
8. **Jailbreaks are clever single "magic strings."** The more important class is *accumulation* attacks
   (many-shot, Crescendo) where no single turn is egregious — the exploit is the trajectory; bigger
   context windows are a capability that doubles as an attack surface.
9. **"Single direction / linear persona" = a tidy stored 'evil switch.'** They're empirically useful
   linear *approximations* with known limits (steering can degrade capability, directions don't always generalize). Don't oversell linearity.
10. **The headline tension to foreground:** **RLHF is both a primary mitigation lever and a primary
    cause of sycophancy.** Alignment-to-preferences vs. truthfulness is the conceptual heart of the in-context half.

---

## Sources (verified; full list with arXiv ids in the slice notes)

**Output-space / decoding (✅ confirmed this run):**
- Holtzman, Buys, Du, Forbes, Choi. *The Curious Case of Neural Text Degeneration.* ICLR 2020. arXiv:1904.09751. (degeneration; nucleus/top-p)
- Fu, Lam, So, Shi. *A Theoretical Analysis of the Repetition Problem in Text Generation.* AAAI 2021. arXiv:2012.14660.
- Su, Lan, Wang, Yogatama, Kong, Collier. *A Contrastive Framework for Neural Text Generation* (SimCTG). NeurIPS 2022. arXiv:2202.06417.
- Li, Holtzman, Fried, Liang, Eisner, Hashimoto, Zettlemoyer, Lewis. *Contrastive Decoding.* ACL 2023. arXiv:2210.15097.
- Meister, Pimentel, Wiher, Cotterell. *Locally Typical Sampling.* TACL 2023. arXiv:2202.00666 `[verify id]`.
- Keskar, McCann, Varshney, Xiong, Socher. *CTRL.* 2019. arXiv:1909.05858. (repetition penalty)
- Welleck, Kulikov, Roller, Dinan, Cho, Weston. *Neural Text Generation with Unlikelihood Training.* arXiv:1908.04319 (ICLR 2020 `[verify]`).
- Pillutla et al. *MAUVE.* NeurIPS 2021 (Outstanding Paper). arXiv:2102.01454.
- Shumailov, Shumaylov, Zhao, Papernot, Anderson, Gal. *AI models collapse when trained on recursively generated data.* *Nature* 631, 2024. (model collapse — the distinction)
- Röttger et al. *XSTest.* NAACL 2024. arXiv:2308.01263 `[verify]` (over-refusal, behavioral).

**In-context / persona (✅/🟡/🟠):**
- Sharma et al. *Towards Understanding Sycophancy in Language Models.* 2023. arXiv:2310.13548. ✅
- Perez et al. *Discovering Language Model Behaviors with Model-Written Evaluations.* 2022. arXiv:2212.09251. ✅ (more-RLHF → more sycophantic)
- Wei, Huang, Lu, Zhou, Le. *Simple Synthetic Data Reduces Sycophancy in LLMs.* 2023. arXiv:2308.03958. ✅
- Li, Liu, Bashkansky, Bau, Viégas, Wattenberg. *Measuring and Controlling Persona Drift in Language Model Dialogs.* 2024. arXiv:2402.10962. ✅ (author order `[verify]`)
- Anil et al. *Many-shot Jailbreaking.* Anthropic / NeurIPS 2024. 🟡/✅
- Russinovich, Salem, Eldan. *Crescendo Multi-Turn Jailbreak.* 2024. arXiv:2404.01833. ✅ (ASR %s `[verify]`)
- Arditi, Obeso, Syed, Paleka, Panickssery, Gurnee, Nanda. *Refusal in Language Models Is Mediated by a Single Direction.* NeurIPS 2024. arXiv:2406.11717. ✅
- Turner et al. *Activation Addition (ActAdd).* 2023. arXiv:2308.10248. ✅
- Zou et al. *Representation Engineering.* 2023. arXiv:2310.01405. ✅
- Chen, Arditi, Sleight, Evans, Lindsey. *Persona Vectors.* **Anthropic**, 2025. arXiv:2507.21509. 🟡
- Wang et al. *Persona Features Control Emergent Misalignment.* **OpenAI**, 2025. arXiv:2506.19823. 🟡 (do NOT attribute to Anthropic — easy conflation)
- Nardo. *The Waluigi Effect (mega-post).* LessWrong, 2023. 🟠 (community hypothesis; asymmetry/irreversibility unsupported — never state as fact)
- Janus. *Simulators.* LessWrong, 2022. 🟠 (conceptual framing)

**Dynamical-systems spine:**
- Wang et al. *Unveiling Attractor Cycles in Large Language Models: A Dynamical Systems View of Successive Paraphrasing.* ACL 2025. arXiv:2502.15208. ✅ (the spine paper: measured **2-period attractor cycles**; random sampling disrupts them)
- Hopfield. *Neural networks and physical systems with emergent collective computational abilities.* 1982. (the rigorous attractor baseline; 2024 Physics Nobel)
- von Oswald et al. *Transformers learn in-context by gradient descent.* ICML 2023. arXiv:2212.07677. (adjacent: model *learns* dynamics — different claim; keep distinct)
- Logistic-map / Banach contraction definitions: standard references (Scholarpedia/Wikipedia), numbers verified ($r=3$ onset, period-4 at $1+\sqrt6\approx3.449$, chaos $\approx3.56995$, Feigenbaum $\delta\approx4.669$).

---

## Open questions for the curriculum stage

1. **Module count / cut.** The catalog naturally fills 9–11 modules. Decide the exact split by idea
   density: in particular whether (a) repetition+emergence is one module or two, and (b) the four
   mitigation layers are one big module or split decoding-vs-the-rest. Recommendation: keep emergence
   *with* the first output attractor so "why" lands immediately; split mitigations into decoding (its
   own module, since the sampling mechanisms are new to the reader) and training+prompt+mechanistic.
2. **How hard to lean on the logistic map.** It's the best mechanical anchor, but it's *not* an LLM.
   Recommendation: one early module owns it as the "real attractor you can compute by hand," then every
   later module calls back rather than re-deriving. The canon must assign ownership.
3. **Two senses, one course.** Keep output-space and persona attractors in clearly separate modules but
   unified by the same self-conditioning mechanism stated once and called back. The canon's ledger must
   fix who owns "self-conditioning," "basin," "the iterated map," "the perturbation test."
4. **Honesty module placement.** "Where the metaphor breaks" + Hopfield baseline: a dedicated late
   module, or distributed as a recurring "grade this claim" beat? Recommendation: a short dedicated
   closing-ish module *plus* a one-line epistemic tag whenever a 🟠 framing (Waluigi/Simulators) appears.
5. **Math budget.** Genuinely-formal objects worth KaTeX: the iterated map $x_{t+1}=f(x_t)$, the
   logistic map, the fixed-point/contraction condition $|f'(x^\star)|<1$, temperature/softmax, top-p's
   cumulative-mass cutoff, the repetition-penalty logit edit. Everything else is prose. No proofs.
6. **`[verify]` items must not be stated as fact in prose:** Crescendo ASR %s, persona-drift "8-turn"
   figures, the Waluigi asymmetry claim, author orderings. Either confirm at authoring time or keep
   qualitative. The two "persona" papers (Anthropic *Vectors* vs OpenAI *Features*) must not be conflated.
</content>
</invoke>
