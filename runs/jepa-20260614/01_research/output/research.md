# Research Dossier — How JEPA Works

Run: `jepa-20260614` · Topic: How JEPA (Joint Embedding Predictive Architecture) works ·
Audience: **no ML background at all** (curious adult, everyday reasoning, very light arithmetic).
Stage 01 notes for the curriculum stage — **not** learner-facing prose.

Web verification: **succeeded.** Core facts checked against Meta AI research pages, the CVPR 2023
open-access proceedings, and arXiv. Items still uncertain are tagged `[verify]` inline.

---

## Scope

Mirrors the run brief. The course teaches *how JEPA works at a conceptual level*, with the
LLM contrast as a recurring spine.

**IN**
- What a model / encoder is, at the "black box: input → list of numbers" level — only as deep as JEPA needs.
- **Embeddings / representation (latent) space** — the single most load-bearing prerequisite.
- **Training / learning from data** as adjusting a black box so its outputs get better, at the intuition level.
- **Self-supervised learning**: hide part of the data, predict it, no human labels.
- **Generative/reconstructive vs. joint-embedding vs. JEPA** prediction — what each predicts and *where* it compares.
- **Core JEPA mechanism**: context encoder (x) + target encoder (y) + a **predictor** that maps the
  context representation to the *target's representation*; loss is a distance **in representation space**.
- **Why predict in representation space**: it lets the model discard unpredictable/irrelevant detail (the payoff intuition).
- **Representation collapse** (the central failure mode) and how JEPA avoids it: asymmetry,
  stop-gradient + EMA ("momentum") target encoder, the predictor, masking.
- **I-JEPA** (images) and **V-JEPA** (video) as the two concrete instances the reader asked for.
- **World models & motivation**: LeCun's case for prediction-as-understanding; JEPA as one piece of a larger plan.
- **How JEPA differs from LLMs** — recurring, plus a dedicated synthesis near the end.

**OUT (mention at most; do not develop)**
- Math of backprop/gradient descent; transformer/attention internals; exact loss formulas beyond "a distance between two lists of numbers."
- Training infrastructure, hyperparameters, exhaustive benchmark tables.
- LeCun's full cognitive architecture (configurator/actor/cost) — *name* it as the bigger picture only.
- A survey of other SSL methods (contrastive, BYOL, MAE) — used only briefly for contrast.
- Action-conditioned/agentic variants beyond a one-line "where next" (V-JEPA 2 gets one paragraph, not a module).

---

## Core concepts + dependency sketch

Two strands. The **ML-prerequisite ladder** (P1–P6) must be built before the **JEPA-specific
concepts** (J1–J9). Arrows mean "must come before."

```
PREREQUISITE LADDER (build from scratch, in this order)
  P1 model as a black box: input -> output ...................... (nothing assumed but everyday reasoning)
  P2 the output is a "list of numbers" (an embedding/representation) ... needs P1
  P3 representation space: similar things -> nearby lists; "close/far" = distance ... needs P2
  P4 training/learning: nudge the black box so its outputs get better ... needs P1
  P5 supervised vs. self-supervised: labels vs. hide-a-part-and-predict-it ... needs P4
  P6 prediction target & comparison: you predict something, then measure how wrong ... needs P3,P4

JEPA-SPECIFIC CONCEPTS
  J1 generative/reconstructive prediction: predict the raw pixels/tokens themselves ... needs P5,P6
  J2 the "wasted effort" problem: raw signals contain unpredictable detail ... needs J1
  J3 joint-embedding idea: compare two inputs in representation space, not pixel space ... needs P3
  J4 JEPA core: context encoder + target encoder + PREDICTOR; predict the target's
     REPRESENTATION from the context's representation; loss is a distance in latent space ... needs J3,J2,P6
  J5 why latent-space prediction is the point: model can ignore unpredictable detail (payoff) ... needs J4,J2
  J6 representation collapse: encoder cheats by outputting a constant; loss is tiny but useless ... needs J4
  J7 collapse avoidance: asymmetry (online vs. target encoder), stop-gradient + EMA target,
     the predictor, masking ... needs J6
  J8 I-JEPA (images): one context block predicts representations of several target blocks (ViT) ... needs J4,J7
  J9 V-JEPA (video): same idea on masked spatiotemporal regions; video as a world-structure teacher ... needs J8
  WORLD MODELS / MOTIVATION (LeCun): prediction-as-understanding; JEPA as a step toward planning ... needs J5,J9
  LLM CONTRAST (recurring + final synthesis): generative/autoregressive vs. non-generative latent prediction ... needs J1,J4
```

Note the spine: **J1 (predict the thing) → J2 (that's wasteful) → J4 (predict the *idea* of the
thing instead) → J5 (so you can throw away noise) → J6/J7 (but you must stop it from cheating) →
J8/J9 (and here it is, on images and video).** The LLM contrast rides alongside from J1 onward.

---

## Prerequisite analysis (no silent gaps)

The reader has **no ML background**, so almost everything ML is "must teach." Listing both sides so
nothing needed to reach I-JEPA/V-JEPA is left implicit.

**Assumed known (do NOT teach; may rely on)**
- Everyday reasoning, analogy, cause-and-effect ("if I do this, then that happens").
- Very light arithmetic: what a *list of numbers* is; that two numbers (or two lists) can be
  *close or far apart*; the idea of an *average*.
- The reader has *used* ChatGPT/LLMs as a consumer and has heard "JEPA is different" — but knows **no** ML vocabulary.
- Common sense about photos/video (a photo has detail; some detail is predictable, some isn't).

**Must teach from scratch (in dependency order; each is a candidate module beat)**
1. **Model / encoder** as a black box: input → list of numbers. *(P1, P2)* No "neural network" assumed —
   "neural network" can be named once as "the kind of black box used here" and otherwise left as out-of-scope plumbing.
2. **Embedding / representation** — that list of numbers is a *summary* of the input. *(P2)*
3. **Representation (latent) space** — similar inputs land at nearby lists; "distance" measures similarity. *(P3)* **The keystone idea.**
4. **Training / learning from data** — the black box starts useless and is *nudged* to do better over many examples. *(P4)* (No gradients/backprop — just "adjusted to reduce mistakes.")
5. **Self-supervised learning** — hide part of the data, ask the model to predict the hidden part, *no human labels needed*. *(P5)* Contrast briefly with "labels" (supervised).
6. **Prediction + comparison** — you predict something, then measure how wrong you were (a "distance"/loss in plain words). *(P6)*
7. **Generative/reconstructive prediction** — predicting the *raw* hidden pixels/tokens (this is what LLMs and image-inpainting do). *(J1)*
8. **The wasted-effort problem** — raw signals hold unpredictable detail you can never get exactly right. *(J2)*
9. **Joint embedding** — compare two inputs by their representations, not their raw pixels. *(J3)*
10. **The predictor and latent-space loss** — the JEPA core. *(J4)*
11. **Why latent prediction pays off** — discard the unpredictable, keep the gist. *(J5)*
12. **Representation collapse** and its fix. *(J6, J7)*
13. **I-JEPA, then V-JEPA.** *(J8, J9)*
14. **World models / motivation; LLM contrast synthesis.**

**Known sticking points at this level** (flag for curriculum):
- "Representation space" is abstract; learners want it to *be* the image. Needs a concrete, non-pixel anchor early.
- "Predict a representation, not the thing" is genuinely counterintuitive — it is the course's whole pivot and likely needs its own module plus repeated reinforcement.
- Collapse ("the model cheats by saying the same thing every time") is subtle; the *fix* (stop-gradient/EMA) is the deepest point — see Open Questions on how far to go.

---

## Hooks & examples (accurate; each with a misuse guard)

1. **Describe the room with your eyes closed.** Cover your eyes and predict what's behind you: you
   won't get the exact wood grain, but you'll nail "there's a door, a desk, a window." That gist is a
   *representation*; JEPA predicts the gist, not the grain.
   *Guard:* don't imply JEPA "imagines a picture" — it produces a list of numbers, not a mental image.
2. **Painting in every pixel vs. naming what's there.** A generative model asked to fill a blanked-out
   photo region tries to *paint* every pixel (leaves, ripples, texture). JEPA instead predicts a
   *description* of what should be there ("tree foliage, water") in representation form.
   *Guard:* JEPA's "description" is not English words or a readable label — it's an internal numeric summary.
3. **Predicting the plot vs. the exact wording.** If a page is torn out of a novel, you can predict
   *what happens* without predicting the *exact sentences*. LLMs predict the exact next words; JEPA-style
   prediction is more like predicting the plot beat.
   *Guard:* useful for the LLM contrast, but don't overstate — JEPA isn't a text model by default; keep it as analogy.
4. **A weather forecast is a representation.** "70% chance of rain, mild" is a compact, useful summary
   you can *act on* — you don't need to predict the exact position of every raindrop. Latent prediction is forecasting at the level you can actually get right.
   *Guard:* forecasts are human-readable; embeddings are not. Use only to motivate "useful summary," then drop.
5. **Throwing away the noise / TV static.** You can't predict the exact pixels of TV static, and trying
   wastes all your effort. Predicting "it's static" is easy and is all that matters. Motivates J2/J5.
   *Guard:* real images aren't pure noise; the point is that *some* detail is noise-like, not that everything is.
6. **The lazy student who answers "I don't know" to everything (collapse).** A student who gives the
   *same blank answer* to every question is never wrong by their own measure but has learned nothing.
   That's representation collapse; JEPA's tricks stop the model from taking this shortcut.
   *Guard:* the fix isn't "punish sameness" directly — it's the asymmetry/stop-gradient setup; don't let the analogy imply a simple penalty.
7. **The teacher who changes slowly (EMA target encoder).** The "answer key" (target encoder) is a
   slow-moving average of the student (context encoder), so the student can't trivially copy it into a
   constant — it's always a half-step ahead.
   *Guard:* `[verify]`-grade subtlety — present as "one accepted intuition," not a proof that collapse is impossible (it isn't, see pitfalls).

---

## Common pitfalls / misconceptions (for the curriculum + exercise design)

1. **"JEPA generates images/video."** It does not, by default. It predicts *representations*, not pixels; there's no pixel decoder in the core architecture. (Contrast: I-JEPA explicitly has no pixel decoder; generative methods do.)
2. **"Representation space = pixel space."** The whole point is that the comparison happens in an abstract latent space, *not* on raw pixels/tokens.
3. **"It's just an LLM for images."** No — LLMs are generative and autoregressive (predict the next token, reconstruct symbols); JEPA is non-generative and predicts abstract representations.
4. **"Predicting a representation = reconstructing the input."** Reconstruction recreates the raw signal; JEPA predicts a *summary* and never reconstructs the signal. This is the most important distinction to drill.
5. **"Embeddings are human-readable."** A representation is a list of numbers with no built-in words/labels; its meaning is *relational* (nearby = similar), not legible.
6. **"Collapse can't happen / is fully solved."** Collapse is a real, ever-present risk; the mechanisms *mitigate* it. Even with stop-gradient + EMA, dimension-wise collapse can still occur with poor masking or predictor capacity; some variants add VICReg-style regularizers as a safety net. **Mark the exact reason EMA+stop-gradient prevents collapse as not-fully-settled `[verify]` — it is debated in the literature.**
7. **"The two encoders must be identical."** In the general JEPA formulation the x- and y-encoders may differ and need not share architecture; in practice (I-JEPA/V-JEPA) the target encoder is an EMA copy of the context encoder, but conceptually they are distinct roles.
8. **"Self-supervised means unsupervised/no objective."** There *is* a prediction objective; the "labels" are simply *manufactured from the data itself* (the hidden part), not provided by humans.
9. **"JEPA needs hand-crafted data augmentations like other SSL."** I-JEPA's selling point is the opposite: it learns semantic features *without* relying on hand-crafted augmentations/invariances.
10. **"More detail predicted = better."** Forcing pixel-perfect prediction wastes capacity on unpredictable detail and tends to yield *less* semantically useful representations — the inversion beginners expect.
11. **"The predictor is the main network."** The predictor is deliberately *smaller/less expressive* than the encoders; its asymmetry is part of the collapse-avoidance, not the heavy lifting of perception.
12. **"World model = it stores a literal map/movie of the world."** A world model here predicts *future representations* (state of the world in latent form), not a stored video.
13. **"V-JEPA / V-JEPA 2 is a video generator like Sora."** It is non-generative; V-JEPA 2 is a *world model* used for understanding/prediction/planning, not for producing video for viewing.
14. **"JEPA replaced/beat LLMs."** Overclaim. It's a different research direction (LeCun's bet); honest framing is "an alternative path," with open empirical questions — do not assert superiority.
15. **"Latent prediction means the model understands meaning like a human."** Avoid anthropomorphism; "semantic" here means "useful for downstream tasks," not human comprehension.

**Honest similarities to keep (so the LLM contrast isn't a strawman):** both LLMs and JEPA learn by
**prediction** and are **self-supervised** (no human labels for pretraining); both can use **transformer
encoders** (ViT in I-JEPA/V-JEPA). The difference is *what* is predicted and *where* the comparison
lives, not "prediction vs. no prediction."

---

## Sources (verified unless tagged)

Primary (highest trust):
- **LeCun, Y. (2022). "A Path Towards Autonomous Machine Intelligence."** Position paper, posted on
  OpenReview, June 27 2022. Introduces JEPA, H-JEPA, the energy-based-model framing, and the broader
  cognitive architecture (configurator, actor, cost module, world model, perception). PDF mirror:
  https://cis.temple.edu/tagit/presentations/A%20Path%20Towards%20Autonomous%20Machine%20Intelligence.pdf
  *(Treat the exact "version 0.9.2 / OpenReview" provenance as `[verify]`; the author/year/content are confirmed.)*
- **Assran, M., Duval, Q., Misra, I., Bojanowski, P., Vincent, P., Rabbat, M., LeCun, Y., Ballas, N. (2023).
  "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture" (I-JEPA).** CVPR 2023,
  pp. 15619–15629. https://openaccess.thecvf.com/content/CVPR2023/html/Assran_Self-Supervised_Learning_From_Images_With_a_Joint-Embedding_Predictive_Architecture_CVPR_2023_paper.html
  Code: https://github.com/facebookresearch/ijepa
- **Bardes, A., Garrido, Q., Ponce, J., Chen, X., Rabbat, M., LeCun, Y., Assran, M., Ballas, N. (2024).
  "Revisiting Feature Prediction for Learning Visual Representations from Video" (V-JEPA).** arXiv:2404.08471;
  Meta announcement Feb 2024. https://ai.meta.com/blog/v-jepa-yann-lecun-ai-model-video-joint-embedding-predictive-architecture/
  Code: https://github.com/facebookresearch/jepa
- **V-JEPA 2 (2025). "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning."**
  arXiv:2506.09985 (June 2025). Action-conditioned variant **V-JEPA 2-AC**, fine-tuned on <62h of the
  Droid robot dataset; zero-shot pick-and-place planning on Franka arms; pretrained on >1M hours of video.
  Meta page: https://ai.meta.com/research/vjepa/ · Code: https://github.com/facebookresearch/vjepa2

Official expository (good for hooks/framings; facts cross-checked against the above):
- Meta AI blog, **"I-JEPA: The first AI model based on Yann LeCun's vision for more human-like AI."**
  https://ai.meta.com/blog/yann-lecun-ai-model-i-jepa/

Secondary expository (framings/intuitions only — **not** for facts):
- "JEPA: Fundamentals, Mathematics, and Literature Review" (Univ. of Tartu lecture notes),
  https://kodu.ut.ee/~hadachi/Lecture_Notes/JEPA.html
- Rohit Bandaru, "Deep Dive into Yann LeCun's JEPA," https://rohitbandaru.github.io/blog/JEPA-Deep-Dive/
- deepsense.ai, "World Models Explained: JEPA, Energy-Based Learning and the Limits of LLMs."

**Confidence summary:** author/year/venue for all four primary works are **verified**. The
collapse-avoidance *mechanism explanation* (why EMA + stop-gradient + asymmetric predictor prevents
collapse) is **reported consistently but is genuinely debated** — keep it framed as "the accepted
recipe and one accepted intuition," not a proof. `[verify]` the precise H-JEPA timescale claims if the
curriculum chooses to go there.

---

## Open questions for the curriculum stage

1. **Module count & split.** This is a rich ~10–13 module course (well within the 8–14 first-course
   band). Candidate split: (1) black box/encoder, (2) embeddings, (3) representation space, (4) training,
   (5) self-supervised learning, (6) generative prediction + its waste, (7) the JEPA core (predictor +
   latent loss), (8) why latent prediction is the point, (9) collapse + the fix, (10) I-JEPA, (11) V-JEPA
   (+ one paragraph on V-JEPA 2 / world models), (12) the LLM contrast synthesis, (13 optional) the bigger
   picture/motivation. Confirm whether 9 (collapse) and its fix should be one module or two.
2. **Where to place the LLM contrast.** Recurring beat from module 6 onward, or a dedicated late
   module, or both? Brief says "first-class + a dedicated synthesis near the end" — recommend a light
   recurring callback plus a capstone contrast module. Confirm.
3. **How deep on collapse.** The honest mechanism (stop-gradient/EMA, asymmetry) is the course's
   hardest idea and is partly debated. Decide: teach the *intuition* of the fix only, or also name
   "this isn't fully settled"? Recommend intuition + one honest "researchers still study why this works" line.
4. **How much world-model / LeCun-vision framing.** Brief says *name* the cognitive architecture, don't
   teach it. Decide whether motivation opens the course (hook) or closes it (payoff) — or both.
5. **V-JEPA 2 placement.** Keep to a one-paragraph "where this is going" (action-conditioned world model
   for robot planning), per scope. Confirm it stays a coda, not a module.
6. **Math dosage.** kind=stem allows KaTeX, but the brief expects few/no formal blocks. Confirm the
   only "formalism" is the light "list of numbers / distance between two lists" framing, and that most
   modules carry no KaTeX — which is expected and fine here.
7. **Keystone reinforcement.** "Representation space" (P3) and "predict the representation, not the
   thing" (J4/J5) are the two ideas most likely to slip. Decide where they spiral back.
