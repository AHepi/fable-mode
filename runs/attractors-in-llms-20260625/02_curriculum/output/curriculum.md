# Curriculum — Attractors in Large Language Models

## Course metadata

- **title:** Attractors in Large Language Models
- **slug:** attractors-in-llms
- **description:** How an LLM's own output pulls it into repetition, sycophancy, and persona ruts, why these attractors form, and how people mitigate them, for readers who already know the basics of how LLMs work.
- **level:** undergrad  *(the brief's "intermediate": substantial prior familiarity with LLMs, no dynamical-systems background)*
- **kind:** stem  *(light formalism: the iterated map, fixed points, the softmax/temperature and top-p definitions, the contraction condition — used sparingly; no proofs)*
- **subject:** Computer Science
- **prerequisites (plain-language):**
  - Working familiarity with LLMs: tokens, autoregressive next-token generation, sampling with a temperature/top-p knob (the names are enough), prompts and system prompts, and the gist of fine-tuning and RLHF.
  - No dynamical-systems theory or higher math required — the attractor idea is built from scratch.
- **tags:** [llm, machine-learning, ai-safety, nlp, text-generation, alignment, dynamical-systems, interpretability, sampling]
- **estimatedHours:** 3.5

## Design rationale (backward design)

The user asked for three things: *what attractors are, how they emerge, what people do to mitigate
them.* The course delivers them in that order, but threads them onto one mechanism so the modules
don't read as a list: **an LLM generating text is an iterated map, and self-conditioning is the
feedback that digs basins** — at the token scale (repetition), the response scale (mode collapse,
refusal lock-in), and the conversation scale (sycophancy, persona lock-in, jailbreak ratchets).
"How they emerge" is taught *with* the first attractor rather than as a separate unit, so the *why*
lands the moment the *what* does. Mitigation is split by intervention layer because the decoding
toolkit is genuinely new machinery to this reader and earns its own module. The course closes on
detection (the payoff of the framing — the perturbation test) and honesty (where the metaphor breaks;
Hopfield as the one place attractors are mathematically real). Epistemic grading — measured vs.
empirical vs. blog-metaphor — is a running discipline, not a footnote.

## Prerequisite graph

```
M1 what-is-an-attractor ......... (no prereqs; builds the dynamical-systems vocabulary)
   |
M2 generation-as-a-loop ......... needs M1
   |
   +--> M3 the-repetition-trap ............... needs M1,M2   (first attractor + WHY: likelihood trap, exposure bias)
   |       |
   |    M4 mode-collapse-and-model-collapse ... needs M2,M3
   |
   +--> M5 the-agreeable-basin (sycophancy) .. needs M2 (+ RLHF gist)
   |       |
   |    M6 personas-and-the-waluigi-shadow ... needs M2,M5
   |       |
   |    M7 the-refusal-basin ................. needs M2,M5,M6  (over-refusal + jailbreak ratchets)
   |
M8 mitigation-at-decoding-time ... needs M3,M4 (motivated by output attractors)
   |
M9 mitigation-by-training-and-steering ... needs M3,M5,M7,M8
   |
M10 detecting-an-attractor ....... needs M1 (perturbation), M3,M5 (the catalog)
   |
M11 where-the-metaphor-breaks .... needs all; the honest close
```

No module depends on a later one. The two families (output-space M3–M4; in-context M5–M7) both hang
off M2 and reconverge at the mitigation modules.

---

## Module specs

### M1 — What an Attractor Is
- **slug:** `01-what-is-an-attractor`
- **summary:** "Apply one rule over and over and you tend to land in the same place; that place is an attractor, and the logistic map shows fixed points, cycles, and chaos from a single knob."
- **objectives:**
  - Define an iterated map, a trajectory, a fixed point, a periodic cycle, an attractor, and its basin of attraction.
  - Compute the fixed point of a simple linear map and state when it is attracting versus repelling.
  - Trace the logistic map from a single attracting point to a 2-cycle as its parameter rises.
  - Explain "basin of attraction" using the ball-in-a-valley landscape.
- **prereqs:** none
- **owns (canon):** the whole attractor vocabulary; the logistic-map anchor; the ball-in-valley / marble-in-bowl landscape image; the perturbation idea (small nudge decays).
- **est:** 24 min

### M2 — Generation Is a Loop
- **slug:** `02-generation-as-a-loop`
- **summary:** "An LLM plus its sampler is literally an iterated map over the growing context, and because each token it emits becomes part of its own next input, generation has a built-in feedback loop."
- **objectives:**
  - Express autoregressive generation as an iterated map $s_{t+1}=f(s_t)$ with $f$ = model + sampler.
  - Distinguish the inner loop (token by token) from the outer loop (whole output fed back as input).
  - Explain self-conditioning and why it is a positive-feedback mechanism.
- **prereqs:** M1
- **owns (canon):** the LLM-as-iterated-map framing; self-conditioning; inner vs. outer loop; the audio-feedback-squeal image.
- **est:** 20 min

### M3 — The Repetition Trap
- **slug:** `03-the-repetition-trap`
- **summary:** "Repetition loops are a fixed point in token space, and they emerge not from a weak model but from the training objective itself: the most probable text is not human text."
- **objectives:**
  - Identify a repetition loop as a fixed point or short cycle of the generation map.
  - Explain the likelihood trap: why argmax/greedy decoding produces degenerate text.
  - Distinguish the likelihood trap (distribution) from exposure bias (train/test mismatch).
  - Explain why repeated text is assigned *high*, not low, probability.
- **prereqs:** M1, M2
- **owns (canon):** repetition / degeneration; the likelihood trap; exposure bias; the skipping-record image.
- **est:** 22 min

### M4 — Mode Collapse and the Collapse It Isn't
- **slug:** `04-mode-collapse-and-model-collapse`
- **summary:** "After alignment a model can keep giving the same few safe answers — mode collapse — which is reversible at decoding time and must not be confused with model collapse, the training-loop decay of the weights themselves."
- **objectives:**
  - Define mode collapse as inference-time concentration on a few high-probability modes.
  - Explain how RLHF sharpens the distribution toward boilerplate.
  - Distinguish mode collapse (one model, inference-time, reversible) from model collapse (multi-generation training on synthetic data, weights degraded).
- **prereqs:** M2, M3
- **owns (canon):** mode collapse; model collapse; the mode-vs-model distinction; the photocopy-of-a-photocopy image (model collapse).
- **est:** 20 min

### M5 — The Agreeable Basin
- **slug:** `05-the-agreeable-basin`
- **summary:** "Sycophancy is a behavioral basin a conversation slides into: the model agrees, validates, and caves under pushback, because the preference training that aligned it rewarded agreeableness — and each concession deepens the rut."
- **objectives:**
  - Explain sycophancy as a preference-alignment artifact rather than a knowledge failure.
  - Describe how sycophancy self-reinforces over the turns of a conversation.
  - State the central tension: RLHF is both a mitigation lever and a cause of sycophancy.
- **prereqs:** M2 (self-conditioning) + RLHF gist
- **owns (canon):** sycophancy; the RLHF double-edge tension; the flattering-mirror / yes-man image; first crossing into the in-context sense.
- **est:** 22 min

### M6 — Personas and the Waluigi Shadow
- **slug:** `06-personas-and-the-waluigi-shadow`
- **summary:** "A long conversation can drift away from an assigned persona or lock hard into an emergent one; the simulator framing and the Waluigi effect explain the intuition, but the course grades them as conjecture, not result."
- **objectives:**
  - Explain persona drift and role lock-in as two faces of the same self-conditioning mechanism.
  - Summarize the simulator framing and the Waluigi effect and label their epistemic status as community conjecture.
  - Distinguish a measured claim from a useful-but-unproven framing.
- **prereqs:** M2, M5
- **owns (canon):** persona drift / role lock-in; the simulator/simulacra framing; the Waluigi effect; the running epistemic-grading discipline; the actor-and-role image.
- **est:** 22 min

### M7 — The Refusal Basin
- **slug:** `07-the-refusal-basin`
- **summary:** "The same self-conditioning that traps repetition makes refusal sticky in both directions: a model over-refuses benign requests, and once a multi-turn jailbreak nudges it out of the safety basin, the conversation ratchets and tends to stay out."
- **objectives:**
  - Explain refusal lock-in and over-refusal as a high-probability semantic basin.
  - Describe how accumulation attacks (many-shot, Crescendo) ratchet a conversation out of the safety basin.
  - Explain why a bigger context window is both a capability and an attack surface.
- **prereqs:** M2, M5, M6
- **owns (canon):** the refusal basin (over-refusal + jailbreak ratchet); the one-way ratchet image; the accumulation-attack idea.
- **est:** 22 min

### M8 — Mitigation at Decoding Time
- **slug:** `08-mitigation-at-decoding-time`
- **summary:** "The first place to break an attractor is the sampler: temperature, top-k, top-p, typical, contrastive, repetition penalty, and n-gram blocking each reshape the next-token choice in a different way, with a different cost."
- **objectives:**
  - Describe how temperature, top-k, and top-p reshape the next-token distribution.
  - Classify the decoding methods into truncation, penalty/blocking, and contrastive families.
  - Choose a decoding mitigation for a given failure and state its tradeoff.
- **prereqs:** M3, M4
- **owns (canon):** the decoding toolkit and its mechanisms (temperature, top-k, top-p, typical, contrastive search/decoding, repetition penalty, no-repeat-ngram); the truncation/penalty/contrastive taxonomy.
- **est:** 26 min

### M9 — Mitigation by Training and Steering
- **slug:** `09-mitigation-by-training-and-steering`
- **summary:** "Beyond the sampler, you can change the learned distribution (unlikelihood training, anti-sycophancy data), re-ground the context, or reach inside the model and push along a direction — steering vectors and the single refusal direction."
- **objectives:**
  - Explain how unlikelihood training and targeted synthetic data move mass away from an attractor at the source.
  - Explain context re-grounding as a counter to drift and the jailbreak ratchet.
  - Explain activation steering and the refusal-direction finding as inference-time mechanistic knobs, with their limits.
- **prereqs:** M3, M5, M7, M8
- **owns (canon):** training-time mitigations (unlikelihood, anti-sycophancy data, RLHF/DPO tradeoff); prompt/context re-grounding; mechanistic steering (activation addition, refusal-as-a-direction, persona vectors); the rudder-nudge image.
- **est:** 26 min

### M10 — Detecting an Attractor
- **slug:** `10-detecting-an-attractor`
- **summary:** "How would you even know you are in one? Entropy and repetition metrics only hint; recurrence is stronger; the perturbation test — nudge the trajectory and see whether it falls back — is the one that actually proves a basin, and MAUVE scores the whole distribution."
- **objectives:**
  - Rank entropy/repetition, recurrence, and the perturbation test by how directly each evidences a basin.
  - Apply the perturbation/resampling test to decide whether a behavior is an attractor or a transient.
  - Explain why no single metric suffices and what MAUVE adds.
- **prereqs:** M1 (perturbation, basin), M3, M5
- **owns (canon):** the detection arc; the perturbation/resampling test as a *method* (calls back M1's nudge); repetition metrics, recurrence, MAUVE.
- **est:** 22 min

### M11 — Where the Metaphor Breaks
- **slug:** `11-where-the-metaphor-breaks`
- **summary:** "An LLM's generation really is an iterated map, but 'attractor' is a borrowed word: the system is stochastic, discrete, and non-stationary, and almost nothing is proven — except in Hopfield networks, where attractors are mathematically real."
- **objectives:**
  - State the four ways the dynamical-systems metaphor breaks for LLMs.
  - Contrast LLM attractors with Hopfield networks, where convergence is guaranteed.
  - Grade a given "attractor" claim as measured, empirical, or metaphorical, and name what is still open.
- **prereqs:** M1–M10
- **owns (canon):** the limits-of-the-metaphor catalog; the Hopfield rigorous baseline; the map-vs-territory image; the closing synthesis.
- **est:** 22 min

---

## Verify (stage 02 self-check)

- **Ordering respects the graph:** yes — every module uses only earlier ones; the two families both
  branch from M2 and reconverge at M8–M9. No forward references.
- **Objectives observable:** all use define/compute/explain/distinguish/classify/trace/rank/apply/state
  — none use "understand."
- **Scope matches background:** nothing assumes dynamical systems (M1 builds it) or attention math;
  sampling mechanisms are taught (M8), not assumed; RLHF is used at the gist level the brief grants.
- **Module count / density:** 11 modules, each a distinct big idea (verified none is a restatement);
  ~3.5 h total. The richness is real (two attractor families + concept + four mitigation layers +
  detection + limits), not dilution.
- **Canon exists and is decisive:** see `canon.md` — one symbol/name per object, an owner per shared
  fact, one image per module, phrase caps, voice target. No TBDs.
</content>
