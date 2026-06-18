# Stage 04 — Editorial

Edit the modules **as one book**. Authoring (stage 03) fans out one writer per module, blind to the
others; that independence is what produces re-derived material, drifting names and symbols, repeated
stock phrases, template-stamped hooks, and voice that wanders warm-to-dry across the course. This
stage is the consolidation pass that does not exist anywhere else: one editor reads every module
together and makes them read as a single, cumulative text.

This stage edits **prose only**. Formal blocks — Definition / Theorem / Lemma / Proof / Example and
every equation — are left byte-for-byte intact (they answer to `_config/math-style.md`, not the
prose loop). Changing a name or symbol that appears *inside* a formal block is allowed only when the
canon's symbol registry requires it, and then identically everywhere.

## Inputs

- **L4** `runs/<run-id>/run-brief.md`.
- **L4** `runs/<run-id>/02_curriculum/output/canon.md` — the symbol/naming registry, the
  "already-taught" ledger + dedup plan, the metaphor-ownership map, and the stock-phrase caps. This
  is the contract you edit against.
- **L4** `runs/<run-id>/03_authoring/output/*.md` — every authored module, read **all together**.
- **L3** `_config/voice/editorial-craft.md` — the whole-piece + whole-course discipline; **this stage's core craft reference**.
- **L3** `_config/voice/literary-maverick.md` — the sentence/passage engine, for the page-local prose fixes.
- **L3** `_config/course-design.md` — for the per-kind section shape, the variety rule, and the
  **prose ↔ pedagogy precedence** you adjudicate by (prose leads only on stakes, analogies,
  historical/philosophical context, and inter-module transitions; pedagogy leads everywhere else).

## Process

1. Read the canon and **all** modules end to end, in order, as one reader would.
2. **Unify names and symbols** to the canon's registry. Every recurring object gets one name and one
   symbol across the whole course (e.g. the triangle's reflection is `$s$` everywhere, not `$s$` in
   one module and `$f$` in the next; one generic operation symbol). Apply identically wherever the
   symbol appears, including inside formal blocks.
3. **De-duplicate.** For each fact the canon's ledger marks as owned by one module, replace the
   *re-derivations* in later modules with a one-line **callback** ("the $\{0,2,4\}$ we built in
   module 07"). A reminder is good; a fresh full re-derivation is not. Keep the owner's full version.
4. **Cap repetition.** Enforce the canon's stock-phrase caps and one-metaphor-per-idea: keep the
   single strongest instance of a tic phrase or running image, cut or vary the rest. Hold each
   running metaphor to the module that owns it (metaphor-ownership map). And cap **whole-course
   redundancy**: if the modules circle one idea, compress — collapse modules that only restate it and
   cut within-module repetition past its first strong statement (`course-design.md`, "Earn the reader's
   time"). A course that says the same thing many ways is exactly what this stage exists to catch.
5. **Vary the templated edges.** Not all hooks may open with the same move, and not all recaps may
   close with "Next we…". Differentiate openings and closings across modules while keeping each
   strong.
6. **Level the voice** to the canon's voice target so the eleven read as one narrator — pull the
   dry modules warmer and the over-lyrical ones back, consistently. Also **de-soothe and de-adverb**:
   cut the coddling register (no *don't worry / bear with me / take your time*) and the soothing-adverb
   tics (*gently, quietly, silently, simply*) — replace verb-plus-adverb with one strong verb.
   Confidence, not comfort.
7. **Fix page-local flow** as you go: logical contradictions in the prose framing, buried subjects,
   weak transitions, mumbled endings, hedges, em-dash monotony.
8. **Metaphor & bridge audit.** Read each module's central image and its definition-seam. Kill or
   rebuild any metaphor that points at the wrong referent (e.g. "slots and a crank" evoking a slot
   machine — randomness) or that was announced as central and then abandoned; prefer a clean concrete
   shape or no image to a broken one. Then confirm every formal definition is reached by an
   intuition→definition bridge that decodes the notation piece by piece — add the bridge where a
   definition arrives as a cliff. This is a **semantic** judgement (a careful human/LLM read), not
   something the mechanical prose lint can catch; it is precisely why this pass exists.
9. Write the edited modules to `runs/<run-id>/04_editorial/output/NN-<slug>.md` — same filenames as
   stage 03. (Assembly reads these, falling back to the authoring output if this stage was skipped.)

Delegation: you may fan out per-module edits, but only **after** the canon's decisions are fixed, and
every sub-agent must edit against the same canon so the result stays consistent.

## Outputs

- `runs/<run-id>/04_editorial/output/NN-<slug>.md` — the edited modules.
- `runs/<run-id>/04_editorial/output/editorial-report.md` — what changed (names unified, derivations
  turned into callbacks, phrases capped), so the gate is reviewable.

## Verify

- `node shared/scripts/lint-prose.mjs <slug>` is clean (or every remaining flag is justified) once
  the edited modules are assembled. Run it after stage 05, or on a staged copy.
- Names and symbols are consistent across all modules (the canon registry holds).
- No fact owned by one module is fully re-derived in another; later uses are callbacks.
- The course reads in one voice; hooks and recaps are not template-stamped, and the **macro-structure
  varies** across modules (not every module the same skeleton or the same opening move).
- **Density & tone:** no module merely restates an earlier one (a one-idea course was compressed, not
  shipped at length); the over-soothing register is gone and soothing-adverb tics are cut —
  `lint-prose.mjs` checks 5–6 (soothing adverbs; hand-holding phrases) are clean.
- **(stem) Show the artifact:** each mechanism-bearing module carries a diagram, equation, or worked
  computation, not prose alone.
- **Metaphor & bridge audit done (semantic, not lint):** every central image points true and is paid
  off (the broken/abandoned ones were killed or rebuilt), and every formal definition is reached by a
  bridge that decodes its notation — no definition lands as a cliff. The mechanical prose lint does
  not catch this; it was checked by reading.
- **Math is untouched:** every Definition/Theorem/Proof/Example and equation is identical to stage 03
  except for canon-required symbol unification applied identically everywhere.

## Gate

**Review gate.** The whole-course edit is the highest-leverage place for a human to read the course
as a learner would. Approve before assembly ships it.
