# Editorial Decisions — The Conjecture–Criticism Calculus

Phase-1 editorial pass. This document does **not** edit the modules. It reads all eleven
together as one book and fixes the decisions that the per-module editors will apply, so the
blind-parallel authors end up consistent. Binding on Phase-2 editors.

Scope note: formal-block content (definitions, the Lemma + proof, rule statements, equations)
is **out of scope** except for the symbol-rendering unification in §1, which is applied
identically everywhere — inside formal blocks included. Everything in §2–§8 is prose work.

---

## 1. Canonical-rendering table (notation unification)

The blind authors rendered the shared symbols four different ways. Decide one KaTeX rendering
per recurring object and apply it identically across every module, **including inside
definitions, the Lemma, proofs, rule statements, and the status `cases` block.** This is the
single licensed crossing into formal content.

Guiding principle (from `math-style.md` and canon §1): relations and multi-letter operator
names that are *names of objects in the theory* render upright with `\mathrm{...}`; the three
status words and the three verdict words render with `\text{...}` (they are words, not
operators); single-letter mathematical objects stay as plain math italics.

### Find → use table

| Object | Drift seen in the wild | **Canonical rendering** | Notes |
|--------|------------------------|--------------------------|-------|
| attack relation | `att` (M7 bare), `\mathit{att}` (M4, M6), `\mathrm{att}` (M8), `{att}`, `\text{att}` (M5, M10) | **`\mathrm{att}`** | The worst single drift — five renderings. Canon §1 prints it as `att`; we standardize on upright `\mathrm{att}` everywhere, prose backticks included (`\mathrm{att}` in math, `att` in inline code spans). |
| addressing relation | `\text{addr}` (M5), `\mathit{addr}` (M4), bare `addr` (M9, M11) | **`\mathrm{addr}`** | Same rule as `att`. |
| verdict outcomes | `\text{pass}`, `\text{fail}`, `\text{overrun}` (M2, common) **but** `\mathit{fail}` (M6 ×several) | **`\text{pass}`, `\text{fail}`, `\text{overrun}`** | M6's `\mathit{fail}` is the deviation — convert every `\mathit{fail}` to `\text{fail}`. |
| three statuses | `\text{accepted}` etc. (M7) **vs** `\textbf{accepted}` etc. (M8 `(Adj)` cases block) | **`\text{accepted}`, `\text{refuted}`, `\text{suspended}`** | M8's `\textbf{...}` in the status `cases` is the deviation. Bold the status word in *prose* with markdown `**accepted**`; inside math use `\text{...}`. |
| criteria set | `\text{Crit}_\pi` (M3, M4) vs `Crit_\pi` bare (M9, M11) | **`\mathrm{Crit}_\pi`** | Multi-letter name → upright. Unify M9/M11 bare forms. |
| operator | `F(S)` (uniform) | **`F(S)`** | Clean already. Confirm M7/M8/M11 identical. |
| defended-set round step | `\mathrm{round}(S)` (M7 only) | **`\mathrm{round}(S)`** | Local to M7's intuition; keep upright, fine as-is. |
| criticizable / modifiable | `crit(a)`, `mod(a)` bare italic (M9, M10) | **`\mathrm{crit}(a)`, `\mathrm{mod}(a)`** | Multi-letter predicate names → upright. M9 and M10 currently bare. |
| hard-to-vary | `HV_B(a)` bare (M10) vs `\text{HV}_B(a)` (M11) | **`\mathrm{HV}_B(a)`** | Two renderings; unify on upright `\mathrm{HV}`. |
| survival prob. | `s(a)` (M9, M10) | **`s(a)`** | Single letter → plain italic. Clean. |
| probability | `\Pr[\cdot]`, `\Pr_{a'\sim\mu(\cdot\mid a)}` (M9, M10) | **`\Pr`** with `\mid` | Clean; confirm `\mid` (not bare `|`) inside `\mu(\cdot\mid a)` everywhere. |
| variation kernel | `\mu(\cdot \mid a)` (M3, M9, M10, M11) | **`\mu(\cdot \mid a)`** | Clean and consistent; just confirm `\mid`. |
| validity node | `\nu(\kappa)` (M5, M6, M8, M11) | **`\nu(\kappa)`** | Clean. |
| battery / equivalence | `B(a)`, `\approx_B`, `a' \approx_B a` (M9, M10, M11) | **`B(a)`, `\approx_B`** | Clean and consistent. |
| grounded extension | `G` (M7, M8, M10, M11) | **`G`** | Clean; canon §1 calls it `G`, never `F`-the-set. Confirm no stray `F` used for the *set*. |
| reach | `R_t(a)` (M10, M11) | **`R_t(a)`** | Clean. |
| problem library | `\Pi^{\mathrm{lib}}_t` (M10) | **`\Pi^{\mathrm{lib}}_t`** | Local to M10/M11; upright `\mathrm{lib}` superscript, fine. |

### Flags against canon §1

- **`att` is NOT printed as `\mathrm{att}` in canon §1** — canon shows the plain token `att`.
  We are *tightening* canon's house-style to one explicit KaTeX macro (`\mathrm{att}`) because
  the authors produced five variants; record this as an editorial refinement of §1, not a
  contradiction. Same for `addr`, `Crit`, `crit`, `mod`, `HV`.
- **M6 `\mathit{fail}`** directly contradicts canon §1's verdict words (`\text{fail}`). Highest-
  priority single fix; appears in the Rule (Crit) check-yourself and worked example.
- **M8 `\textbf{accepted/refuted/suspended}`** inside the `(Adj)` `cases` block contradicts
  canon's "exact words" status convention rendered as `\text{...}` (as M7 already does). Fix the
  cases block; leave M8's *prose* bolding (`**accepted**`) alone.
- No symbol was found *renamed* against canon (no `s`↔`f`, no alias for `G`, no second name for
  any object). The drift is purely rendering, not naming — good news for Phase 2.

---

## 2. Hook table

Opening move of each module, ≤10 words, with collision analysis.

| M | Opening move (≤10 words) | Verdict |
|---|---------------------------|---------|
| 1 | "Three friends are arguing about why bread rises." | **Keep** — concrete, owns the bread thread. |
| 2 | "A marathon referee holds a stopwatch and clipboard." | **Keep** — the sanctioned referee metaphor (canon §3). |
| 3 | "Every noun in this calculus needs a place to stand." | **Keep** — fresh, structural. |
| 4 | "Picture a debate frozen mid-argument." | **COLLISION** (see below). Re-open. |
| 5 | "An attack edge is never a bare accusation." | **Keep** — declarative, strong. |
| 6 | "The system so far is a very detailed snapshot." | **Keep** — but recap-flavored; see §3. |
| 7 | "We have a graph of attacks and a standing promise." | **Keep** — strong, sets up the build. |
| 8 | "A criticism can be wrong." | **Keep** — punchy four-word open. |
| 9 | "Two artifacts survive adjudication. Call them a1 and a2." | **Keep** — sharp, in-medias-res. |
| 10 | "Two theories can both pass every test today." | **SOFT COLLISION** with M9 (both open "two X… can both…"). Vary lightly. |
| 11 | "A detective who only ever closes cases…" | **Keep** — vivid, distinct register. |

### Collisions and recommended re-opens

- **M4 vs M1 — "imagine a debate/argument."** M1 opens on three friends arguing; M4 opens
  "Picture a debate frozen mid-argument." Same move (a staged dispute), and M4 is the weaker of
  the two because the dispute is generic. **Re-open M4** on its actual subject: the *snapshot
  structure* — e.g. lead with the five-slot tuple as the thing you must write down to freeze a
  scene, not with the scene itself. Angle: "What do you have to record to capture inquiry at a
  single instant?" Keeps the bread/dispute imagery for M1 alone.
- **M10 vs M9 — "Two artifacts/theories that both pass."** M9: "Two artifacts survive
  adjudication." M10: "Two theories can both pass every test on the shelf today." Near-identical
  rhythm and setup. M9 owns this move (it introduces the survivors). **Re-open M10** on the
  *grading* angle directly — e.g. lead with the question "what's the difference between an idea
  you can't edit and one you can edit endlessly?" (rigid vs floppy), which is M10's real content.

Everything else is sufficiently varied. M6 opens on a recap of prior state — acceptable as a
hook because it's a genuine pivot ("a snapshot does not move"), but watch it against §3.

---

## 3. Recap table

Closing move of each module, with templated-signpost flags.

| M | Closing move | Forward-signpost? | Verdict |
|---|--------------|-------------------|---------|
| 1 | "…the next ten modules give it mathematical teeth." | soft (whole-course) | Keep. |
| 2 | "…load-bearing when we build the attack structure criticisms rely on." | yes ("will prove") | Keep — earns it. |
| 3 | "Module 4 places these artifacts… and draws the first attack graph." | **explicit "Module 4…"** | Vary — see below. |
| 4 | "Module 5 opens the warrant map W…; module 7 builds the machinery…" | **explicit "Module 5… module 7…"** | Vary — double signpost. |
| 5 | "These conditions are what module 6's transition rules… preserve." | explicit "module 6" | Keep one; borderline. |
| 6 | "…the grounded extension that module 7 builds." | explicit "module 7" | Vary — see below. |
| 7 | "…the case the next module turns into a proof." | yes (no number) | Keep — strong, varied phrasing. |
| 8 | "Next we turn from which artifacts stand to what makes an artifact worth standing for." | yes (no number) | Keep — strong close. |
| 9 | "…carry directly into module 10, where they are the foundation for the hard-to-vary measure." | explicit "module 10" | Vary. |
| 10 | "Module 11 closes the loop: it shows how (Spawn)…" | **explicit "Module 11…"** | Vary. |
| 11 | "…computable at each step, and open at every horizon." | none (terminal) | Keep — excellent terminal close. |

**Pattern flag.** Modules 3, 4, 6, 9, 10 all close on the template *"Module N+1 [verb] the
[thing]."* Five of eleven recaps end with the same machine-stamped forward pointer. Canon's
whole-course rule ("signpost only when it pays; cap it") is violated by the *uniformity*, not by
any single instance.

**Recommendation.** Keep an explicit numbered forward-pointer in **M3 and M8 only** (the two
biggest structural hand-offs: into the state, and into demarcation). For **M4, M6, M9, M10**,
rewrite the final sentence to land on the module's *own* payoff with at most an unnumbered
gesture forward — end on the strong word, not the administrative pointer. M7's and M8's
unnumbered "next module" phrasing is the model to copy.

---

## 4. Voice temperature

Target (canon §5): one narrator — a **sharp, generous proof-mentor**, warm-but-rigorous, plain
and exact, motivates before formalizing.

| M | Temperature | Vs. target |
|---|-------------|------------|
| 1 | warm | On target. |
| 2 | warm | On target (referee carries it). |
| 3 | warm-neutral | On target. |
| 4 | **dry-encyclopedic in the middle** | OUTLIER — see below. |
| 5 | neutral-warm | On target. |
| 6 | neutral | On target; slightly procedural but fine. |
| 7 | warm | On target — best-calibrated module. |
| 8 | warm | On target. |
| 9 | neutral, **dry in the primer** | mild outlier — the probability primer reads textbook-flat. |
| 10 | warm | On target. |
| 11 | **chatty-handwavy in spots** | OUTLIER — see below. |

### Outliers to pull

- **M4 — pull warmer (toward motivation).** The middle stretch (the "Decoding each component"
  list and the directed-graph preamble) stacks definitions and bullet glosses with thin
  motivation between them — the dry/encyclopedic drift canon §5 names. Direction: add one
  motivating sentence per component that says *why the slot exists* before defining it; the
  bullets themselves are fine. Do **not** touch the Definition 3.3 block.
- **M11 — pull back toward the spine.** Two spots go chatty/hand-wavy about the philosophy:
  the parenthetical asides ("Avoid the phrase 'unbounded support' here…", and the meta-comment
  about measure-theoretic connotations) read as author-to-author notes, not mentor-to-student;
  and Exercise 5's *solution* contains a visible self-correction ("…wait. Correction:…") that
  must be cleaned to a single correct computation. Direction: cut the meta-asides or fold their
  content into plain statements; rewrite Ex-5 solution to present only the right derivation.
- **M9 — light warm-up of the primer.** The four-paragraph probability primer is correct but
  flat. One bridge sentence connecting "random-choice machine" to *why the calculus needs it
  here* (the variation kernel) would level it to the mentor voice. Minor.

---

## 5. Re-derivation vs callback (canon §2 ledger)

Conservative pass — a reminder is fine; only genuine re-teaching of an owned idea is flagged.

**No hard re-derivation violations found.** The owners hold their material and later modules
mostly call back correctly. Two items to watch, neither a full rebuild:

- **M11, "Status exit" worked example + Exercises 1 and 5 re-run the F-iteration at length.**
  The grounded-extension iteration is owned by M7 (the spine; canon §2 says "call back, never
  rebuild"). M11 re-computes `\emptyset, F(\emptyset)=\{j\}, F(\{j\})=\{j,a\}` from scratch in
  the worked example, and again fully in Ex 1 and Ex 5. This is borderline. **Decision:** the
  worked example and Ex 1/Ex 5 may keep the computation (they are *exercises* in re-running it on
  new graphs, which is legitimate practice), but the **worked example's** main-body iteration
  should open with the callback line and then show only the *result*, not re-narrate the vacuous-
  truth reasoning M7 and M8 already taught. Substitute callback: **"the grounded extension `G`
  we built in module 7"** then state `G=\{j,a\}` and move on. (M8 already does this correctly —
  copy its handling.)
- **M8 worked example** already calls back to M7 cleanly ("This is the grounded extension G we
  built in module 7, so we state the iteration rather than re-derive it"). **Good — this is the
  model.** No change.

Callbacks that are correct and should be preserved (spot-check): M5 "a verdict (pass/fail/
overrun) was introduced in module 2; the attack graph… built in module 4"; M8 "the grounded
extension `G` we built in module 7"; M9 reach back to M2/M3/M7/M8; M11 "nothing is deleted
(module 6)". These match canon §2's suggested callback lines — leave them.

---

## 6. Bridge & metaphor audit

### Bridges (canon: every definition reached by a bridge; a cliff is a defect)

All eleven formal definitions arrive with a bridge — the authors were disciplined here. Verified:
- M2 Def 3.1 → "Bridge: reading the definition back as the stopwatch" ✓
- M3 Def 3.2 → "Bridge: reading the tuples" ✓
- M4 Def 3.3 → "Decoding each component" ✓ (but dry; see §4)
- M5 Def 3.4 → "Bridge: unpacking Definition 3.4" ✓; well-formedness → "Bridge: what each condition is doing" ✓
- M6 (Conj)/(Crit) → explicit "The bridge:" before each rule ✓
- M7 operator F → "The bridge into the notation, piece by piece" ✓; status labelling → "The bridge:" ✓
- M8 Lemma 3.1 → "Decode the statement before we prove it" ✓
- M9 Def 3.5 (battery) → "Bridge to the definition" ✓; crit/mod → "Bridge." each ✓
- M10 Def 3.6/3.7 → bridge prose present ✓
- M11 N1 → "The bridge:" ✓

**No cliffs.** One soft note: **M11 (Spawn) and (Refl) rule statements** are reached by prose but
not a labeled bridge that decodes the tuple-rewrite notation piece by piece the way M6 does for
(Conj)/(Crit). Recommend Phase 2 add one short decode sentence after each (mapping
`\Pi \cup \{\pi_{\text{new}}\}` etc. to "only `\Pi` grows") to match the house standard. Minor,
not a defect.

### Metaphors (canon §3 standing warning)

- **No judge/jury/vote/opinion image for `G`** found in the prose. M8's HTML comment (see §7)
  *names* the courtroom-appeal framing as a risk and explicitly steers around it; the rendered
  prose uses "structural consequence," not a judge's verdict. **Clean** — but delete the comment
  (§7).
- **"Rounds of standing"** (M7) is used as the sanctioned `G` image. ✓
- **No "tournament/knockout" as headline image for `G`.** M4 Exercise 5 uses "tournament" but
  strictly in its *graph-theory* sense (a complete directed graph) with a definition given — not
  as an image for the adjudicator. Acceptable; leave, but confirm Phase 2 doesn't let it bleed
  into describing `G`.
- **No "random mutation" image for conjecture.** M9/M10 use "random-edit machine" for the
  *variation kernel* `\mu(\cdot\mid a)` — which is the correct referent (edits, not conjecture-
  from-nothing) and canon §3 allows the rigid/floppy image there. The word "mutation" does not
  appear. ✓
- **Referee-with-stopwatch** (M2) and **map-of-arrows** (M4) are used by their correct owners. ✓

**One metaphor-hygiene flag:** M2 line 16 says the referee "marks **time's up, no decision**" —
good, exactly the three-verdict mapping. No drift.

---

## 7. Phrase-cap violations & exposed scaffolding

### Exposed scaffolding (canon: device-labels belong in the outline, not the page)

- **M8 — HARD FLAG.** Lines 14–20 are a visible HTML comment block beginning
  `<!-- OPENING (PROSE). Distinct hook: a courtroom-overturned-on-appeal framing… -->`. This is
  raw scaffolding left in the file. **Delete the entire comment block.** (Its steering content is
  already honored by the prose; nothing of value is lost.)
- No visible `## The hook` or `## Intuition` headings anywhere. Bridges are labeled "Bridge:"
  which is borderline-scaffolding but is the **house convention** from `math-style.md` (the
  bridge is a named, sanctioned device) — **keep** "Bridge" labels; they are not the forbidden
  "Intuition"/"The hook" device-names.
- "Check yourself" headings appear throughout — these are pedagogical section labels, not
  device-names, and are consistent with the course template. Keep.

### Stock-phrase caps (canon §4)

- **"what survives" / "left standing"** — cap 2/module. Within cap everywhere. M7 uses "stand/
  standing" heavily but as the *defined* round-vocabulary, which is exempt domain language, not
  the stock phrase. No action.
- **"Intuitively," as opener** — ≤1/module. **Zero occurrences** course-wide. Clean.
- **"Note that"/"It's worth noting"** — ≤2/module. Within cap; scattered single uses. Clean.
- **"the machine"/"the machinery" for the system** — ≤2/module. M1 uses "formal machine/
  machinery" 3× (lines 68, 82, 84, 118 region — "formal machine," "this machinery," "formal
  machinery"). **FLAG M1:** at/over cap. Recommend replacing one or two with "the system" / "the
  calculus." Note: M2's "universal machine"/"the machine reports," and M9's "random-edit
  machine," are *different referents* (the computational machine, the kernel) and are **exempt** —
  do not count them against the cap.
- **empty hedges** ("arguably," "in some sense," "more or less") — cap 0. None found. Clean.
- **empty openers** ("Let's dive in," "In this module we will," "Now,") — cap 0. None found;
  openers are all contentful. Clean.

---

## 8. Per-module edit checklist

Notation fixes from §1 apply to **every** module (replace each shared symbol with its canonical
rendering); below lists only the *additional* prose/structural work.

- **M1 — light.** (a) Reduce "machine/machinery" for the system to ≤2 (§7); swap 1–2 for "system"/
  "calculus." (b) Notation: confirm no formal symbols (mostly prose module). Otherwise clean.
- **M2 — clean (notation-only).** Verdict words already `\text{...}`. Verify `\square`-free
  (no proofs). Nothing else.
- **M3 — light.** (a) Recap: keep the numbered M4 pointer (sanctioned hand-off). (b) Notation:
  `\text{Crit}` → `\mathrm{Crit}`; confirm `att` rendering in recap line. Else clean.
- **M4 — moderate (most prose work alongside M11).** (a) **Re-open** the hook off the
  debate-collision with M1 → lead on the snapshot/tuple (§2). (b) **Warm up** the dry
  "Decoding each component" stretch — one motivation sentence per slot (§4). (c) Recap: de-
  template the double "Module 5… module 7…" pointer (§3). (d) Notation: `\mathit{att}` →
  `\mathrm{att}`, `\mathit{addr}` → `\mathrm{addr}` throughout (heavy in this module).
- **M5 — light.** (a) Notation: `\text{att}`/`\text{addr}` → `\mathrm{att}`/`\mathrm{addr}`
  (21 hits — the heaviest single-module notation load). (b) Recap forward-pointer fine. Prose
  clean.
- **M6 — moderate.** (a) **Notation priority:** `\mathit{att}` → `\mathrm{att}` and **all
  `\mathit{fail}` → `\text{fail}`** (canon §1 violation). (b) Recap: de-template the "module 7
  builds" pointer (§3). (c) Hook is a recap-pivot; acceptable, leave.
- **M7 — light (notation-only + callback hygiene).** (a) Notation: bare `att` → `\mathrm{att}`
  (9 hits in `$...$`); keep `\mathrm{round}`. (b) This module *owns* the iteration — leave the
  full derivation. Otherwise the best-calibrated module; minimal touch.
- **M8 — moderate (two hard flags).** (a) **DELETE the HTML comment block** (lines 14–20, §7).
  (b) **Notation:** `\textbf{accepted/refuted/suspended}` → `\text{...}` in the `(Adj)` cases
  block; `\mathrm{att}` is already correct here (this is the rendering we standardize to). (c)
  Worked-example handling of the iteration is the model — leave. Recap close is strong — keep.
- **M9 — light–moderate.** (a) **Warm** the probability primer with one connecting sentence (§4).
  (b) **Re-open** lightly is *not* needed for M9 (it owns the "two survivors" move) — leave hook.
  (c) Notation: bare `crit`/`mod`/`Crit`/`addr`/`att` → `\mathrm{...}` forms; `\approx_B`, `B(a)`,
  `\mu(\cdot\mid a)` already clean.
- **M10 — moderate.** (a) **Re-open** the hook off the M9 soft-collision → lead on rigid-vs-
  floppy / "edit it and it breaks" (§2). (b) Recap: de-template "Module 11 closes the loop" (§3).
  (c) Notation: `HV_B` → `\mathrm{HV}_B`; `crit`/`mod`/`att` → `\mathrm{...}`; `\text{att}` → `\mathrm{att}`.
- **M11 — moderate (most prose work).** (a) **Pull back chatty/meta asides** — cut or fold the
  "Avoid the phrase 'unbounded support'" and measure-theory meta-notes (§4). (b) **Fix Exercise 5
  solution** — remove the visible "…wait. Correction:…" self-correction; present only the correct
  `G=\{j,a\}` derivation (§4). (c) **Callback, don't re-narrate** the F-iteration in the worked
  example — open with "the grounded extension `G` we built in module 7," state the result (§5).
  (d) Add short decode sentences after the (Spawn)/(Refl) rule statements to match the bridge
  house-style (§6). (e) Notation: `\text{HV}_B` → `\mathrm{HV}_B`; bare `att`/`addr`/`Crit` →
  `\mathrm{...}`.

---

### Summary

Canonical renderings chosen: relations and multi-letter theory-names go **upright** —
`\mathrm{att}`, `\mathrm{addr}`, `\mathrm{Crit}`, `\mathrm{crit}`, `\mathrm{mod}`, `\mathrm{HV}`;
the verdict and status words stay `\text{pass/fail/overrun}` and `\text{accepted/refuted/
suspended}`; single letters (`s(a)`, `G`, `F`, `B`, `\nu`, `R_t`) stay plain italic; `\Pr`/`\mid`/
`\approx_B`/`\mu(\cdot\mid a)` are already clean. The three worst drift problems: (1) the attack
relation rendered **five** different ways across the course (`att`/`\mathit{att}`/`\mathrm{att}`/
`{att}`/`\text{att}`) — standardize on `\mathrm{att}`; (2) **M6's `\mathit{fail}`** and **M8's
`\textbf{...}` status labels**, both direct canon-§1 violations inside formal blocks; (3) a
**left-in HTML scaffolding comment in M8** that must be deleted. Naming is sound — no object was
renamed, only re-rendered, so Phase 2 is mostly mechanical find-and-replace plus targeted prose.
The modules needing the most prose work are **M11** (chatty meta-asides, a broken exercise
solution, an over-long iteration re-narration), **M4** (dry definition-stack and a hook that
collides with M1), and **M10** (soft hook collision with M9, templated recap). The recap layer
has a course-wide tic: five of eleven modules close on "Module N+1 [verb] the [thing]" — keep
the numbered pointer only in M3 and M8 and let the rest land on their own payoff. Bridges and
metaphors are otherwise in good shape: every definition has a bridge, no cliffs, and the
forbidden judge/vote/tournament/mutation images for `G` and conjecture were all avoided.
