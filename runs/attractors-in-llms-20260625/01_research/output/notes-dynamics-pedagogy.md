# Research Dossier — Dynamical-Systems Framing & Pedagogy

**Slice:** the attractor concept and its transfer to LLM generation; hooks, analogies, misconceptions, measurement.
**Audience:** intermediate, non-math-specialist. Intuition-level only — no measure theory, no proofs.
**Run:** attractors-in-llms-20260625 / Stage 01 research.

Convention used below for each concept: **plain sentence → dependency (needs first) → concrete example → sticking point.** Claims I could not verify are tagged `[verify]`.

---

## 1. Dynamical-systems vocabulary (intuition level)

The whole field studies one question: *if you apply the same rule over and over, where do you end up?* That's it. Everything below is vocabulary for answering it. The unifying object for this course is the **iterated map**: a rule $f$ you feed a state into, then feed the result back in. We deliberately stay in *discrete time* (step 1, step 2, step 3…) because that matches autoregressive generation token by token — no differential equations needed.

### State
- **Plain:** A complete snapshot of the system right now — everything you'd need to compute the next step.
- **Needs first:** nothing; this is the ground floor.
- **Example:** In $x_{t+1}=\tfrac12 x_t + 1$, the state is just the single number $x_t$. For an LLM, the state is "the sequence of tokens so far" (or, internally, the hidden activations).
- **Sticking point:** State must be *sufficient* — if computing the next step needs information not in your state, you've drawn the boundary wrong. (For LLMs this matters: the "state" is the whole context, not just the last token.)

### Iterated map $x_{t+1}=f(x_t)$
- **Plain:** A fixed rule applied repeatedly, output becomes the next input.
- **Needs first:** state.
- **Example:** $f(x)=\tfrac12 x + 1$. Start at $x_0=10$: $10 \to 6 \to 4 \to 3 \to 2.5 \to 2.25 \to \dots \to 2$. The "$\tfrac12$" pulls things inward each step.
- **Sticking point:** "Iterated" means the *same* $f$ every step. If the rule changes step to step, it's **non-autonomous / non-stationary** — and (important foreshadowing) LLM generation is non-stationary because the context grows, so $f$ effectively changes.

### Trajectory (orbit)
- **Plain:** The sequence of states you visit: $x_0, x_1, x_2, \dots$
- **Needs first:** iterated map.
- **Example:** The list $10, 6, 4, 3, 2.5, \dots$ above is one trajectory; starting from $x_0=-4$ gives a *different* trajectory that also ends at $2$.
- **Sticking point:** A trajectory is the *path*, not the destination. Many trajectories can share one destination — that's the seed of "basin."

### Fixed point
- **Plain:** A state the rule leaves unchanged: $f(x^\star)=x^\star$. Once there, you stay.
- **Needs first:** iterated map.
- **Example:** For $f(x)=\tfrac12 x+1$, solve $x=\tfrac12 x+1 \Rightarrow x^\star=2$. The trajectory above homes in on exactly this.
- **Sticking point:** A fixed point can be **attracting** (nearby trajectories fall in) or **repelling** (they're pushed away). Existence of a fixed point says nothing about whether you'll ever reach it — stability is a separate question.

### Stability / contraction
- **Plain:** A fixed point is stable (attracting) if small nudges away from it shrink back; a map is a **contraction** if it always pulls any two points closer together.
- **Needs first:** fixed point.
- **Example:** $f(x)=\tfrac12 x+1$ multiplies distances by $\tfrac12$ each step, so it's a contraction → its fixed point at $2$ is attracting. By contrast $f(x)=2x$ *doubles* distances → its fixed point at $0$ is repelling. Rule of thumb for smooth 1-D maps: the fixed point is attracting when $|f'(x^\star)|<1$ and repelling when $|f'(x^\star)|>1$.
- **Sticking point (verified):** The **Banach / contraction-mapping** result — a contraction on a complete space has a *unique* fixed point that *every* starting point converges to — is the clean math behind "everything funnels to one place." But real systems are usually contractions only *locally* (near the fixed point), which is exactly why basins exist. Sources: [Wikipedia: Contraction mapping](https://en.wikipedia.org/wiki/Contraction_mapping), [Banach fixed-point theorem](https://en.wikipedia.org/wiki/Banach_fixed-point_theorem).

### Periodic cycle (limit cycle, in discrete time = periodic orbit)
- **Plain:** Instead of resting at one point, the system settles into a repeating loop of states: $a \to b \to a \to b \to \dots$ (period 2), or longer.
- **Needs first:** fixed point (a cycle is the next thing up).
- **Example:** The logistic map (below) at $r=3.2$ settles into a period-2 cycle, bouncing between two values forever. (This is the structure the LLM paraphrasing paper finds — see §3.)
- **Sticking point:** A period-2 cycle is *not* "unstable" or "broken" — it's a perfectly stable attractor that just happens to be a loop instead of a point. Learners conflate "periodic" with "chaotic"; they're opposites.

### Attractor
- **Plain:** A set of states the system settles onto and won't leave — the long-run destination. The simplest attractors are attracting fixed points; next are attracting cycles; the wild ones are "strange/chaotic" attractors.
- **Needs first:** fixed point + cycle + stability.
- **Example:** $2$ is the attractor of $f(x)=\tfrac12 x+1$. The period-2 loop is the attractor of the logistic map at $r=3.2$.
- **Sticking point (verified definition):** An attractor is defined by two properties together — **invariant** (once in, you stay) and **attracting** (nearby states are drawn in). A repelling fixed point is invariant but is *not* an attractor. Sources: [Scholarpedia: Attractor](http://www.scholarpedia.org/article/Attractor), [Wikipedia: Attractor](https://en.wikipedia.org/wiki/Attractor).

### Basin of attraction
- **Plain:** All the starting states that eventually end up at a given attractor — the attractor's "catchment area."
- **Needs first:** attractor.
- **Example:** For $f(x)=\tfrac12 x+1$ the basin of the fixed point $2$ is *every* real number (global contraction). For systems with several attractors, space is carved into separate basins — different starts, different destinies.
- **Sticking point:** Two trajectories can start arbitrarily close yet land in different basins (basin *boundaries* can be sharp, even fractal — but we skip fractals here). The everyday intuition "close start → same outcome" fails near boundaries. Source: [Scholarpedia: Attractor](http://www.scholarpedia.org/article/Attractor); basin-zoo examples [arXiv:2504.01580](https://arxiv.org/html/2504.01580v1).

### Perturbation / robustness
- **Plain:** Nudge the state a little; does the system return to its attractor (robust) or run off somewhere else (fragile)?
- **Needs first:** stability, basin.
- **Example:** Sitting at $x=2$ for $f(x)=\tfrac12 x+1$, bump to $2.1$ → next steps $2.05, 2.025,\dots$ → back to $2$. Robust. Bump a logistic-map system across a basin boundary and it never comes back.
- **Sticking point:** Robustness is *local* to a basin. "Robust" never means "can't be knocked out" — it means "small enough nudges decay." This is exactly the **resampling/perturbation test** used to detect LLM attractors (§6).

### Transient vs. attractor
- **Plain:** The **transient** is the early, one-time approach phase; the **attractor** is the long-run behavior you keep returning to.
- **Needs first:** trajectory, attractor.
- **Example:** $10 \to 6 \to 4 \to 3$ is transient; the limit value $2$ is the attractor. The transient is "how you get there," the attractor is "where you live."
- **Sticking point:** People mistake a long transient for an attractor (it looks settled but is still drifting), or mistake the attractor's *internal* motion (a cycle keeps moving!) for a transient. Test: does the behavior *recur*? Then it's on the attractor.

### Anchor worked example — the logistic map (verified numbers)
$$x_{t+1} = r\,x_t\,(1 - x_t), \qquad x_t \in [0,1].$$
One knob $r$, one variable. As you turn $r$ up, the *same* rule produces qualitatively different attractors — a perfect "one rule, many destinies" demo:
- $1 < r < 3$: single **attracting fixed point** at $x^\star = (r-1)/r$. (e.g. $r=2 \Rightarrow x^\star=0.5$.)
- $r = 3$: fixed point goes unstable → **period-2 cycle** begins.
- $r \approx 3.449$: period-2 → **period-4**; then 8, 16, … (the *period-doubling cascade*). The exact onset of period-4 is $r = 1+\sqrt6 \approx 3.44949$.
- $r \approx 3.56995$: cascade accumulates → **chaos** (aperiodic, sensitive to initial conditions). The spacing of doublings shrinks by Feigenbaum's constant $\delta \approx 4.669$.
- Inside chaos: **periodic windows**, famously a stable period-3 window near $r\approx 3.83$. `[verify]` exact 3.83 (commonly cited; confirm before printing).

Sources: [Wikipedia: Logistic map](https://en.wikipedia.org/wiki/Logistic_map); period-doubling/Feigenbaum values [Vanderbilt bifurcation notes](https://www.vanderbilt.edu/AnS/psychology/cogsci/chaos/workshop/BD.html). Numbers $r=3$, $r=1+\sqrt6$, $r_\infty\approx3.56995$, $\delta\approx4.669$ are verified.

**Why this anchors the course:** it shows *fixed point → cycle → chaos* from one equation. The LLM paraphrasing result (§3) lands squarely in the "period-2 cycle" regime — so the logistic map gives learners a mechanical mental model *before* they meet the messy LLM version.

---

## 2. The transfer to LLMs — where it's tight, where it breaks

### The tight part (the analogy is genuinely structural, not decorative)
Autoregressive generation **is literally an iterated map.** Each step:
1. Current state = the context (token sequence so far), $s_t$.
2. The model maps $s_t$ → a probability distribution over the next token, $p_\theta(\cdot \mid s_t)$.
3. A **sampler** (greedy / temperature / top-$p$) picks a token $w$.
4. New state $s_{t+1} = s_t \,\Vert\, w$ (append).

So $s_{t+1} = f(s_t)$ where $f = \text{model} + \text{sampler}$. This is a bona-fide dynamical system over the space of contexts. Two natural state spaces:
- **Sequence/context space** (discrete, the tokens) — what the paraphrasing paper iterates over.
- **Hidden-state space** (continuous activations) — closer to the classical attractor-network picture (Hopfield, §3), and where "latent-space basin" talk lives.

A second, *outer-loop* iterated map is the **text→text** map: feed the model's output back in as input (paraphrase-of-paraphrase, summarize-of-summary, self-distillation). This is where clean fixed points and period-2 cycles actually show up (§3). Distinguish the two loops explicitly for learners — they are different dynamical systems:
- **Inner loop:** token-by-token within one generation.
- **Outer loop:** whole-output fed back as whole-input across calls.

### Where the analogy BREAKS (teach this honestly — it's a course value)
1. **Stochastic, not deterministic.** Classical attractors assume a deterministic $f$. With sampling, $f$ is a *random* map; "attractor" must be reinterpreted as a *distribution* the process concentrates on (a stationary/quasi-stationary distribution), not a single point trajectories provably reach. The dynamical-systems vocabulary is being borrowed by analogy.
2. **Enormous discrete state space.** Context space is $V^{L}$ (vocab to the power of length) — astronomically large and discrete. No phase portraits, no $f'(x^\star)<1$ derivative test. "Nearby states" needs a *semantic* notion of nearness, not Euclidean distance.
3. **Non-stationary because context grows.** The rule isn't truly iterated — appending a token changes the state's *dimension* and what the model attends to. The map $f$ effectively changes every step, so it's a non-autonomous system. Classic attractor theory assumes a fixed $f$. This is the single biggest caveat.
4. **"Attractor" is used loosely / metaphorically.** In the LLM community the word ranges from (a) a *measured* period-2 cycle in output space (paraphrasing paper — fairly rigorous) to (b) a hand-wavy "the model keeps slipping into this persona" (blog-level metaphor). The course should grade its own claims on this spectrum.
5. **No proved convergence.** We observe concentration empirically; we generally cannot *prove* a basin or guarantee return. Contrast with Hopfield nets, where energy-descent *guarantees* convergence to a local minimum — that's why Hopfield is the honest "real attractor" baseline and LLMs are the "attractor-flavored" case.

**Net framing for the course:** the iterated-map structure is *exact*; the *attractor* language is a powerful, partially-earned metaphor. Use the metaphor to build intuition, then immediately mark which specific claims are measured vs. asserted.

---

## 3. Literature explicitly using attractor / dynamical-systems framing

### Direct, central hit — successive paraphrasing (verified, peer-reviewed)
**"Unveiling Attractor Cycles in Large Language Models: A Dynamical Systems View of Successive Paraphrasing,"** Wang et al. — arXiv:2502.15208; **accepted ACL 2025** (long paper, 2025.acl-long.624). This is the spine paper for the course.
- **Framing:** explicitly invokes dynamical systems — "repetitive transformations can lead to stable configurations, known as attractors, including fixed points and limit cycles." Treats the text→text map (paraphrase∘paraphrase…) as an iterated map.
- **Finding:** successive paraphrasing **converges to stable periodic states, notably 2-period attractor cycles** — the model oscillates between two phrasings rather than exploring diverse paraphrases. Attributed to LLMs' **self-reinforcing** tendency to favor/amplify certain forms.
- **Generality:** the limit-cycle behavior generalizes beyond paraphrasing to other invertible/iterative tasks.
- **Mitigation:** a random-sampling strategy disrupts the cycles (trade-off: less periodicity vs. semantic fidelity).
- **Limitation (honesty note):** the abstract does **not** discuss limitations of the dynamical-systems framing itself, and gives no explicit math definitions tied to LLMs — so the "attractor" claim is empirical/observational. `[verify]` exact detection metric — fetch full PDF (arxiv.org/pdf/2502.15208) for their concrete period-detection method before authoring.
- Sources: [arXiv:2502.15208](https://arxiv.org/abs/2502.15208), [ACL Anthology](https://aclanthology.org/2025.acl-long.624/).

### Classical attractor networks — the honest baseline (verified)
**Hopfield (1982), "Neural networks and physical systems with emergent collective computational abilities."** The canonical *attractor network*: stored memories are **attracting fixed points / local minima of an energy landscape**; a noisy/partial input flows downhill to the nearest stored pattern (content-addressable / associative memory). Energy is non-increasing under the update rule → guaranteed convergence. **Hopfield shared the 2024 Nobel Prize in Physics** (with Hinton); the Nobel materials explicitly credit connecting "dynamical attractors" from physics to memory. Use this as the *rigorous* contrast to LLM hand-waving — here attractors are mathematically real.
- Sources: [Nobel Prize Physics 2024 press release](https://www.nobelprize.org/prizes/physics/2024/press-release/), [Princeton announcement](https://www.princeton.edu/news/2024/10/08/princetons-john-hopfield-receives-nobel-prize-physics), [ScienceDirect: Hopfield & attractor dynamics in neuroscience](https://www.sciencedirect.com/science/article/pii/S089662732400802X). Bridge to modern LLMs: "modern Hopfield networks" relate to transformer attention `[verify]` (Ramsauer et al. 2020, "Hopfield Networks is All You Need" — well known but not re-verified this session).

### Transformers / in-context learning as dynamical systems (verified, but adjacent)
- **"Transformers learn in-context by gradient descent"** (von Oswald et al., arXiv:2212.07677, ICML 2023): ICL on linear regression ≈ one step of gradient descent on a context-dependent loss — i.e. the forward pass *implements* an optimization dynamics. Foundational for "ICL as an iterative process."
- **"Transformers as Implicit State Estimators: ICL in Dynamical Systems"** (arXiv:2410.16546): transformers infer hidden states of dynamical systems in-context.
- **"Transformers for dynamical systems learn transfer operators in-context"** (arXiv:2602.18679) `[verify]` date/venue — uses delay embedding to recover invariant sets / global flow.
- **Note:** these treat the model as *learning/estimating* dynamical systems, which is a *different* claim from "generation *is* an attractor dynamics." Keep the distinction sharp for learners.
- Sources: [arXiv:2212.07677](https://arxiv.org/abs/2212.07677), [arXiv:2410.16546](https://arxiv.org/html/2410.16546v2), [arXiv:2502.08136](https://arxiv.org/html/2502.08136v3).

### Degeneration / repetition — the "fixed point" everyone has seen (verified)
**Holtzman et al. (2019/2020), "The Curious Case of Neural Text Degeneration"** (arXiv:1904.09751, ICLR 2020): greedy/likelihood decoding produces "bland and strangely repetitive" text — repetition at token/phrase/sentence level. **Nucleus (top-$p$) sampling** introduced to truncate the unreliable tail and avoid degeneration. In dynamical terms, a **repetition loop is exactly a fixed point / short cycle** in token space; greedy decoding is the deterministic regime where these are *most* likely. Relevant follow-ups: "Non-Halting Queries: Exploiting Fixed Points in LLMs" (arXiv:2410.06287) — *uses the fixed-point word literally*; "The Hyperfitting Phenomenon" (arXiv:2412.04318). Sources: [arXiv:1904.09751](https://arxiv.org/abs/1904.09751), [arXiv:2410.06287](https://arxiv.org/pdf/2410.06287).

### Latent-space / persona "basins" — metaphor-heavy, flag carefully (mixed reliability)
- **"The Waluigi Effect"** (LessWrong, Cleo Nardo 2023): reinforcing a persona can amplify its opposite; oppositional traits described as "attractor states" in latent space. Influential, *non-peer-reviewed, conceptual*. `[verify]` — treat as cultural/metaphor source, not evidence.
- **Persona-basin work** `[verify]`: recent papers/posts (e.g. arXiv:2604.17031 "Persona Vectors and LLM Individuation"; arXiv:2604.04743 "Hallucination Basins") define a region as a basin to the extent it is *privileged* (model converges on it) and *sticky* (resists leaving). These dates are 2026 and unverified beyond search snippets — **fetch and verify before citing**; likely the freshest but least settled material.
- **Caution for the course:** this cluster is where "attractor" is most metaphorical. Cite as "framing under active development," not established result.

---

## 4. Hooks & analogies (with accuracy grading)

| Hook | What it conveys | Accuracy | Use it for |
|---|---|---|---|
| **Ball rolling into a valley** | basin → low point = fixed-point attractor; nudge & it rolls back = stability | **Accurate** — this *is* the Hopfield energy-landscape picture. Best primary metaphor. | basin, fixed point, robustness, Hopfield |
| **Marble in a bowl with several dips** | multiple attractors, separate basins, basin boundaries (the ridges) | **Accurate**; the cleanest multi-attractor intuition | basins, boundaries, persona-basins |
| **Song stuck in your head ("earworm")** | self-reinforcing loop you keep returning to | **Good for cycles**, but oversells determinism (your brain isn't running fixed $f$). Label as analogy. | periodic cycle, repetition loops |
| **Conversation that keeps circling back** | period-2/short-cycle attractor in dialogue | **Tight for the paraphrasing result** — maps directly to 2-period cycles | limit cycles, outer-loop dynamics |
| **Gravity well** | strong pull toward a state; escape needs energy | **Mostly accurate** but implies a smooth deterministic force; LLM pull is statistical, not literal gravity. Don't over-physicalize. | attractor strength, why temperature ≠ escape velocity |
| **Drain / whirlpool** | everything funnels to one outlet | Accurate for a single global attractor (contraction); **oversells** when there are many basins | single-fixed-point case only |

**Rule for authors:** lead with the **ball-in-valley / marble-in-bowl** family (it's literally the Hopfield model, so it's *earned*). Use earworm/conversation hooks for *cycles* but explicitly flag "this is an analogy, the brain/LLM isn't a clean deterministic map." Avoid implying gravity wells are physically real forces in the model.

---

## 5. Common misconceptions / sticking points

1. **"Attractors are a bug unique to bad models."** No — they're **structural** to any iterated map, including healthy ones (Hopfield *needs* attractors to function as memory). Reframe: the question is never "are there attractors" but "which ones, and are they where we want?"
2. **Conflating the two senses of "attractor."** (a) *output-loop* attractor: visible repetition / period-2 paraphrase cycle in token space. (b) *persona/latent basin*: the model settling into a behavioral mode. These are different state spaces and different evidence levels. Keep them in separate boxes.
3. **"Temperature = 0 removes attractors."** Backwards — greedy/$T{=}0$ is the **deterministic** regime where repetition loops and fixed points are **most** likely (Holtzman: greedy degenerates worst). Lowering temperature *deepens* basins; raising it adds the noise that can *escape* them. Sampling is the perturbation that breaks cycles (the paraphrasing paper's own fix).
4. **"'Attractor' is a rigorous, proven claim about LLMs."** Mostly it's a **useful metaphor with patches of measurement.** Rigorous for Hopfield; empirical/observational for the paraphrasing cycles; purely metaphorical for most "latent-space persona basin" talk. Grade every claim.
5. **Mode collapse ≠ model collapse.** **Mode collapse:** *one* model's outputs lose diversity, converging to a few "safe" responses (often post-RLHF) — a *within-model, single-generation* phenomenon. **Model collapse:** quality degrades *across successive generations* when models are trained on predecessors' synthetic output — a *training-loop, multi-generation* phenomenon. Easy to swap; they have different causes and fixes. Sources: [Wikipedia: Mode collapse](https://en.wikipedia.org/wiki/Mode_collapse), [IBM: Model collapse](https://www.ibm.com/think/topics/model-collapse).
6. **"Cycle = chaos = broken."** A period-2 cycle is a *stable, orderly* attractor; chaos is the *opposite* (aperiodic, sensitive). The logistic map separates them cleanly — use it to inoculate against this.
7. **"Close starts → same outcome."** Fails near basin boundaries (and entirely under chaos). Two nearly identical prompts can diverge into different basins.
8. **Treating the LLM map as stationary.** Because context grows, the "rule" changes step to step — so naïve "it'll converge to a fixed point" reasoning from textbook autonomous systems doesn't directly apply. (See §2 break #3.)

---

## 6. Measurement / detection (conceptual)

The honest question: *how would you even know you're in an attractor?* Signals, roughly weakest-to-strongest evidence:

1. **Probability concentration / low next-token entropy.** On a fixed point or in a deep basin, the next-token distribution spikes — one token gets almost all the mass; entropy collapses toward 0. Track entropy over the trajectory; a sustained low-entropy stretch = "stuck." Caveat: low entropy can also just mean an easy, confident continuation — necessary not sufficient.
2. **Repetition metrics.** $n$-gram repetition rate, distinct-$n$, repeated-substring detection. A literal repetition loop is a fixed point/short cycle in token space (Holtzman's degeneration). Cheap, classic, but only catches *surface* loops.
3. **Trajectory recurrence in state space.** Does the process keep returning to *similar* states? In hidden-activation space: cosine similarity of states across steps; recurrence plots / return maps. In output space: semantic-embedding similarity of successive outputs. The paraphrasing paper's period-2 finding is exactly "output at step $t$ ≈ output at step $t+2$." (`[verify]` their precise metric via the PDF.)
4. **The perturbation / resampling test (strongest, most attractor-specific).** Nudge the trajectory — resample with a different seed, raise temperature, inject a token, paraphrase the context — and watch: if the process **falls back** into the same loop/mode, you've demonstrated a *basin* (robustness, the defining attractor property §1). If a small nudge sends it elsewhere, it was a transient, not an attractor. This is the operational, dynamical-systems-faithful test and it directly mirrors the "small perturbation decays" definition of stability.
5. **Basin probing (advanced/optional).** Vary initial conditions (prompts/seeds) and map which ones land in which attractor → empirical basin map. Estimate "stickiness" (resistance to leaving) and "privilege" (rate of convergence into) — the persona-basin papers' two-property criterion `[verify]`.

**Teaching arc for measurement:** entropy/repetition are easy but only *suggestive*; **recurrence + perturbation tests are what actually distinguish an attractor from a coincidence**, because they test the *defining* properties (invariance + attraction). Make learners run a perturbation test, not just eyeball repetition.

---

## Notable gaps / to-verify before authoring
- **Fetch the full PDF of arXiv:2502.15208** for the *exact* period-detection metric and any limitations the authors state — abstract alone lacks the operational detail the course's measurement module needs. (`[verify]` flagged in §3, §6.)
- **2026-dated persona/basin papers** (2604.17031, 2604.04743) seen only via search snippets — verify they exist and say what's claimed before citing; this is the least-settled cluster.
- **Logistic period-3 window** $r\approx 3.83$ and **modern-Hopfield↔attention** (Ramsauer 2020) cited from memory — confirm exact values/claims.
- Did not deep-verify the von Oswald "ICL = gradient descent" mechanics beyond abstracts; fine for framing, verify if the course makes strong claims.
- No source explicitly *unifies* "inner-loop token dynamics" and "outer-loop text→text dynamics" under one attractor account — that synthesis is the course's own contribution and should be presented as framing, not citation.
