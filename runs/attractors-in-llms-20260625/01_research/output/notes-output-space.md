# Research notes — Output / Decoding-Space Attractors

**Slice scope:** degenerate behaviors of the *decoding/generation* process — repetition loops, mode
collapse, refusal lock-in — why they emerge, and how they are mitigated at decode time and train time.
Audience target: intermediate course on "Attractors in LLMs." Research dossier only (no learner-facing prose).

**Citation confidence:** All seven anchor citations below were confirmed against arXiv / official
proceedings during this run (AAAI OJS, NeurIPS proceedings, TACL, ACL Anthology). Items I could not
fully pin are flagged `[verify]` inline.

---

## 1. Neural text degeneration / repetition loops

**Plain sentence.** Left to its own most-confident choices, an LM frequently slides into looping the
same token, phrase, or sentence over and over.

**Mechanism.** Two coupled effects:
- *Self-reinforcement / self-amplification.* Once a token (or n-gram) has appeared, the model
  conditions on its own prior output; the conditional probability of repeating it *rises* with each
  repetition, so the loop becomes more, not less, likely the longer it runs. Holtzman et al. document
  this empirically (repetition probability climbs as a phrase recurs). Su et al. (2022) give a
  representation-level account: degeneration correlates with an **anisotropic** token-embedding space
  (representations crowded into a narrow cone, so distinct tokens look similar and the model
  over-selects a few).
- *Structural inevitability of the language itself.* Fu et al. prove a **"high-inflow"** result: in
  natural language many different contexts predict the same next word with high probability, so the
  generation trajectory has a high chance of returning to a previously seen word and closing a loop —
  repetition is partly a property of the data distribution, not only of a bad decoder.

**Concrete example.** Greedy/beam GPT-2 continuing a prompt produces "...the the the the..." or a
sentence-level loop ("I don't know. I don't know. I don't know."). The classic Holtzman example shows
beam search emitting a paragraph that repeats a clause indefinitely.

**Intermediate sticking point / misconception.** Learners assume repetition means the model is
*undertrained* or *low-probability*. The opposite: looped text is often assigned **high** likelihood by
the model — repetition is what maximization-based decoding *prefers*. It is a property of the
decoding objective interacting with the distribution, not a training failure to fix with "more data."

**Citations.**
- Holtzman, Buys, Du, Forbes, Choi. "The Curious Case of Neural Text Degeneration." ICLR 2020.
  arXiv:1904.09751. (Introduces the degeneration phenomenon, the self-reinforcing repetition curve,
  and nucleus/top-p sampling as the remedy.)
- Fu, Lam, So, Shi. "A Theoretical Analysis of the Repetition Problem in Text Generation."
  AAAI 2021 (Proc. AAAI vol. 35, pp. 12848–12856). arXiv:2012.14660. **Venue confirmed (AAAI 2021).**
  (The "high-inflow problem"; proposes rebalanced encoding.)
- Su, Lan, Wang, Yogatama, Kong, Collier. "A Contrastive Framework for Neural Text Generation"
  (SimCTG / contrastive search). NeurIPS 2022 (Spotlight). arXiv:2202.06417. (Anisotropy account of
  degeneration; cited again under §5.)

---

## 2. Why degeneration emerges (mechanism, precisely)

**Plain sentence.** Standard LMs are trained to maximize likelihood, and the highest-likelihood
continuation is systematically *unlike* human text — so faithfully decoding the most probable string
gives degenerate output.

**Mechanism, component by component.**
- **Maximum-likelihood (MLE) / teacher-forcing training.** The model is trained to predict the next
  ground-truth token given the *true* prefix. It optimizes per-token cross-entropy, never the quality
  of a long *self-generated* sequence.
- **The likelihood trap (a.k.a. the high-probability ≠ human-like gap).** Holtzman's central finding:
  human text does *not* sit at the per-token probability maximum. Humans routinely pick moderately
  surprising words; always taking the argmax (greedy/beam) produces bland, repetitive, "too probable"
  text. Plotting per-token probability shows human text oscillates while beam output hugs near-1.0.
- **Exposure bias.** Train time: the model only ever sees *gold* prefixes. Test time: it conditions on
  its *own* (imperfect) prior tokens. Small early errors are off-distribution from anything seen in
  training, and errors compound — the model has never learned to recover, so it drifts toward whatever
  it can predict confidently (often a repeat).
- **Self-conditioning.** Generation is autoregressive: each emitted token re-enters the context and
  raises the salience of its own continuation, which is the engine behind §1's self-reinforcement.

**Concrete example.** Beam search with width 10 on an open-ended prompt yields a repetitive,
low-diversity paragraph *with higher model probability* than a fluent human paragraph — the optimizer
did exactly what you asked and the result is worse.

**Intermediate sticking point.** Two distinct ideas get conflated: (a) *the likelihood trap* is about
the **objective/distribution** (max-prob text is bad even with a perfect decoder); (b) *exposure bias*
is about the **train/test mismatch** (errors compound because the model never trained on its own
outputs). They reinforce each other but are not the same claim. `[verify — the relative weight of
exposure bias vs. the distribution itself is debated in the literature; present both, don't overclaim
exposure bias as the sole cause.]`

**Citations.** Holtzman et al. 2020 (likelihood trap); exposure bias traces to Ranzato et al.
"Sequence Level Training with Recurrent Neural Networks," ICLR 2016, arXiv:1511.06732 `[verify exact
framing of "exposure bias" term — popularized by Bengio et al. 2015 "Scheduled Sampling," NeurIPS
2015]`.

---

## 3. Mode collapse / low diversity — vs — model collapse (DISTINCT)

These two are routinely confused; keep them firmly separate.

### 3a. Mode collapse / low output diversity (a *decoding/behavior* attractor)
**Plain sentence.** The model keeps producing the same few "safe" outputs, phrasings, or formats
across many prompts — high sameness, low diversity.

**Mechanism.** (i) Maximization decoding concentrates mass on a few high-probability modes. (ii)
**RLHF / preference tuning** sharpens the distribution toward a narrow band of human-preferred
responses; the reward model rewards a particular safe, helpful, formulaic style, so the post-RLHF
policy collapses toward boilerplate (the canonical "Sure! Here's...", bulleted, hedged answer).
Diversity (distinct-n, entropy) measurably drops after RLHF relative to the base model.

**Concrete example.** Ask an aligned chat model for "a creative opening line" 20 times → you get 20
variations on the same templated structure; or every answer opens "Certainly! ..." and closes with a
safety caveat.

**Sticking point.** Mode collapse is reversible at inference (raise temperature, sample, change the
prompt) — it is about *where probability mass concentrates right now*, not damage to the weights'
knowledge. `[verify — strong empirical claims about exact magnitude of post-RLHF diversity loss vary
by paper; keep qualitative.]`

### 3b. Model collapse (a *training-data* failure mode — NOT a decoding attractor)
**Plain sentence.** When a model is trained (recursively, generation after generation) on data
produced by *previous models*, it progressively forgets the tails of the true distribution and
degenerates.

**Mechanism.** Each generation's synthetic output under-represents rare events; training the next
model on it amplifies the loss. Errors accumulate across generations — first the tails vanish ("early
collapse"), eventually the distribution narrows to a low-variance blob ("late collapse"). Driven by
statistical approximation error, functional expressivity limits, and finite-sampling error.

**Concrete example.** Train model_n on text generated by model_{n−1} for several rounds → outputs
converge to repetitive, low-variance, increasingly nonsensical text that has lost the diversity of the
original human corpus.

**THE DISTINCTION (state this explicitly in the course).**
- *Mode collapse* = an **inference-time** behavior of *one* model: it over-selects a few modes now;
  fixable by changing decoding/prompt. No weights were harmed.
- *Model collapse* = a **training-time, multi-generation** degradation of *the weights themselves*
  from learning on synthetic/self-generated data; not fixable by decoding tweaks.
- Same word "collapse," opposite layer of the stack (decoder vs. training loop).

**Citations.**
- Model collapse: Shumailov, Shumaylov, Zhao, Papernot, Anderson, Gal. "AI models collapse when
  trained on recursively generated data." *Nature* 631, 2024 (pp. 755–759). Earlier preprint: "The
  Curse of Recursion: Training on Generated Data Makes Models Forget," arXiv:2305.17493 (2023).
  **Confirmed 2024 Nature publication.**
- Mode-collapse-after-RLHF observations are spread across alignment papers; no single canonical
  citation. `[verify — if a primary source is wanted, cite empirical diversity-loss studies, e.g.
  work measuring distinct-n / entropy drop post-RLHF; I did not pin one specific paper this run.]`

---

## 4. Refusal / over-refusal spirals (decoding-behavior aspect only)

**Plain sentence.** Once an aligned model starts a refusal, it tends to lock into the refusal mode and
emit a templated "I can't help with that" — sometimes for benign requests (over-refusal).

**Mechanism (decoding view).** Refusal openings ("I'm sorry, but I can't...") are very high-probability
trajectories in safety-tuned models; the first refusal token sharply raises the probability of the
rest of the canned refusal (the same self-conditioning attractor as repetition, but toward a
*semantic* basin rather than a literal loop). Because the refusal prefix is a learned high-mass mode,
greedy/low-temperature decoding falls into it readily; benign prompts that merely share surface
features with disallowed ones get pulled into the same basin → **over-refusal**.

**Concrete example.** "How do I kill a Python process?" → "I'm sorry, but I can't help with that,"
because "kill" surface-matches a harm pattern; once "I'm sorry" is emitted, the canned continuation
follows deterministically.

**Sticking point.** Over-refusal is framed by learners as a "values" problem; at the decoding layer it
is also a *probability-mass / attractor* problem — the refusal template is a strong mode and the early
tokens commit the trajectory. Scope note: per the assignment, only the decoding-behavior aspect is in
this slice; the safety-training causes belong to a sibling slice.

**Citation.** `[verify]` Over-refusal benchmarking: Röttger et al., "XSTest: A Test Suite for
Identifying Exaggerated Safety Behaviours in Large Language Models," NAACL 2024, arXiv:2308.01263 —
documents the exaggerated-safety / over-refusal phenomenon. (Behavioral benchmark; the
attractor/self-conditioning framing here is my synthesis, not a direct quote.)

---

## 5. Decoding-time mitigations (mechanism + tradeoffs)

| Method | Mechanism | Tradeoff |
|---|---|---|
| **Greedy** | Take argmax each step. | Fast, deterministic; falls hardest into repetition/blandness (the likelihood trap in pure form). |
| **Beam search** | Keep top-B partial sequences by cumulative log-prob. | Better for closed-ended tasks (MT, summarization); for open-ended generation it *worsens* degeneration — higher-prob beams are more repetitive (Holtzman). |
| **Temperature τ** | Scale logits by 1/τ before softmax. τ>1 flattens (more diverse/random), τ<1 sharpens (safer/duller). | Pure knob on the whole distribution; high τ buys diversity at the cost of coherence/factuality; doesn't *target* the repetition mode specifically. |
| **Top-k** | Truncate to the k highest-prob tokens, renormalize, sample. | Fixed k is distribution-blind: too large in peaked contexts (lets in junk), too small in flat contexts (kills valid diversity). |
| **Top-p / nucleus (Holtzman 2020)** | Sample from the smallest set whose cumulative prob ≥ p. | Adapts the candidate-set size to the distribution's shape — the standard fix for degeneration; choosing p still a tuning problem; can still repeat at low p. |
| **Locally typical sampling (Meister et al.)** | Keep tokens whose information content (−log p) is *close to the conditional entropy* — i.e. "typically surprising," not just high-prob. Information-theoretic motivation. | Targets the human-text property that surprisal stays near the entropy rate; can improve diversity+coherence balance; less mainstream/less tooling than top-p. |
| **Contrastive search (Su et al. 2022, SimCTG)** | At each step score candidates by model confidence *minus* a degeneration penalty (max cosine similarity to already-generated token reps); pick the token balancing both. Pairs with SimCTG contrastive training that de-anisotropizes the rep space. | Strong anti-repetition + coherence; needs the isotropic rep space (works best with SimCTG-trained models); extra per-step compute. |
| **Contrastive decoding (Li et al. 2023)** | Generate from the *difference* in log-probs between a strong "expert" and a weak "amateur" LM; the contrast suppresses the amateur's degenerate/generic modes. | Improves fluency/coherence in open-ended generation; needs a second (amateur) model; hyperparameters (α plausibility constraint). |
| **Repetition penalty (Keskar et al., CTRL 2019)** | Down-weight logits of tokens already in the context by a penalty factor θ before sampling. | Cheap, effective at breaking loops; too aggressive penalizes legitimately recurring tokens (names, function words) → unnatural text. |
| **No-repeat-n-gram blocking** | Hard-ban any n-gram that has already appeared (set its prob to 0). | Guarantees no exact n-gram repeats; brittle — blocks legitimate repeats (e.g. a name in a list) and only stops *exact* loops, not paraphrased ones. |

**Sticking point.** Learners treat these as interchangeable "randomness knobs." Sharpen the taxonomy:
*truncation* methods (top-k, top-p, typical) reshape the candidate **set**; *penalty/blocking* methods
(rep-penalty, no-repeat-ngram) edit logits to punish **already-seen** tokens; *contrastive* methods
re-score using a **second signal** (rep-space similarity or an amateur model). Temperature alone is the
only one that doesn't change *which* tokens are eligible.

**Citations.**
- Holtzman et al. 2020 (top-p / nucleus). arXiv:1904.09751.
- Meister, Pimentel, Wiher, Cotterell. "Locally Typical Sampling." TACL 2023, vol. 11, pp. 102–121.
  arXiv:2202.00666 `[verify arXiv id]`. **Venue TACL 2023 confirmed.**
- Su et al. 2022 (contrastive search / SimCTG). NeurIPS 2022. arXiv:2202.06417. **Confirmed.**
- Li, Holtzman, Fried, Liang, Eisner, Hashimoto, Zettlemoyer, Lewis. "Contrastive Decoding:
  Open-ended Text Generation as Optimization." ACL 2023, pp. 12286–12312. arXiv:2210.15097.
  **Venue ACL 2023 confirmed.**
- Keskar, McCann, Varshney, Xiong, Socher. "CTRL: A Conditional Transformer Language Model for
  Controllable Generation." 2019, arXiv:1909.05858. (Source of the repetition-penalty decoding trick.)

---

## 6. Training-time mitigations

**Plain sentence.** Instead of patching the decoder, change the objective so the model is taught *not*
to assign mass to degenerate continuations.

**Mechanism.**
- **Unlikelihood training (Welleck et al. 2019/2020).** Augment the MLE loss with an *unlikelihood*
  term that explicitly **lowers** the probability of designated negative candidates — e.g. tokens that
  would cause repetition (previously generated context tokens) or frequent over-produced tokens. The
  model learns to push mass *away* from the repetition modes that MLE silently rewards, directly
  attacking the cause in §2 rather than the symptom.
- **Diversity objectives.** Auxiliary losses / training signals (e.g. SimCTG's contrastive objective
  in §5 that spreads token representations to be isotropic; coverage or distinct-n-style objectives)
  that reward spreading mass over varied outputs.

**Concrete example.** A model fine-tuned with unlikelihood training produces far fewer verbatim
repeats under *greedy* decoding than the same model trained with MLE only — the fix survives without a
fancy decoder.

**Sticking point.** Unlikelihood is not the same as just lowering temperature or adding a rep penalty
at decode time: it edits the **learned distribution itself**, so the improvement persists across
decoders, whereas decode-time fixes must be re-applied every generation and can fight the underlying
distribution.

**Citation.** Welleck, Kulikov, Roller, Dinan, Cho, Weston. "Neural Text Generation with Unlikelihood
Training." 2019, arXiv:1908.04319 (ICLR 2020) `[verify ICLR 2020 acceptance]`.

---

## 7. Measurement / metrics

| Metric | What it measures | Higher/lower = better | Note |
|---|---|---|---|
| **rep-n / repetition rate** | Fraction of repeated n-grams in the generation. | Lower = less degenerate. | Direct repetition probe; Su et al. report rep-n heavily. |
| **distinct-n** | # unique n-grams / total n-grams. | Higher = more diverse. | Li et al. 2016 (diversity-promoting objective) origin `[verify]`; standard diversity metric. |
| **self-BLEU** | BLEU of each generated sample against the *other* samples; high overlap ⇒ low diversity. | Lower = more diverse. | Zhu et al., "Texygen," SIGIR 2018 `[verify]`. |
| **perplexity** | Model's own uncertainty / fluency proxy. | Low = fluent, but **trap:** degenerate repetitive text has *very low* perplexity. | Must be paired with a diversity metric — low PPL alone rewards degeneration. |
| **MAUVE (Pillutla et al.)** | Divergence-frontier comparison between the *distribution* of machine text and human text in a quantized embedding space. | Higher = closer to human. | Captures both over-repetition and over-diversity in one scalar; the modern open-ended-generation gold standard. |

**Sticking point.** No single number suffices: perplexity rewards repetition, distinct-n rewards
incoherent randomness. The field converged on **MAUVE** precisely because it penalizes *both* failure
directions (too-repetitive *and* too-random) by comparing full distributions, and it correlates with
human judgment.

**Citation.** Pillutla, Swayamdipta, Zellers, Thickstun, Welleck, Choi, Harchaoui. "MAUVE: Measuring
the Gap Between Neural Text and Human Text using Divergence Frontiers." NeurIPS 2021 (Outstanding Paper
Award). arXiv:2102.01454. **Venue NeurIPS 2021 confirmed.**

---

## Cross-slice / handoff notes
- §2 (exposure bias, MLE) overlaps the *training-dynamics* slice; §4 (refusal) overlaps the
  *safety/alignment* slice — coordinate to avoid double-coverage; this dossier covers only the
  decoding-behavior facet of each.
- The unifying "attractor" framing (self-conditioning pulls the trajectory into a basin) ties §1
  repetition, §3a mode collapse, and §4 refusal into one mechanism at three semantic scales
  (token → style → whole-response). Good candidate for the course's spine.

## Confidence / gaps summary
- **Confirmed this run:** Holtzman ICLR 2020; Fu AAAI 2021; Su NeurIPS 2022; Li ACL 2023; Meister TACL
  2023; MAUVE NeurIPS 2021; Shumailov Nature 2024.
- **`[verify]` outstanding:** exact arXiv ids for Meister (2202.00666) and a couple of secondary
  metrics; Welleck ICLR 2020 acceptance; the "exposure bias" term attribution (Ranzato 2016 vs.
  Bengio scheduled-sampling 2015); a single canonical citation for post-RLHF diversity loss (none
  pinned); distinct-n (Li 2016) and self-BLEU/Texygen (Zhu 2018) origins not independently confirmed
  this run.
- **Open question for course design:** how much of degeneration to attribute to the likelihood trap
  (distribution) vs. exposure bias (train/test mismatch) — literature is not unanimous; present both.
