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
- **L3** `_config/voice/literary-maverick.md` — read its *whole-piece* and *whole-course* sections.
- **L3** `_config/course-design.md` — for the per-kind section shape and the variety rule.

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
   running metaphor to the module that owns it (metaphor-ownership map).
5. **Vary the templated edges.** Not all hooks may open with the same move, and not all recaps may
   close with "Next we…". Differentiate openings and closings across modules while keeping each
   strong.
6. **Level the voice** to the canon's voice target so the eleven read as one narrator — pull the
   dry modules warmer and the over-lyrical ones back, consistently.
7. **Fix page-local flow** as you go: logical contradictions in the prose framing, buried subjects,
   weak transitions, mumbled endings, hedges, em-dash monotony.
8. Write the edited modules to `runs/<run-id>/04_editorial/output/NN-<slug>.md` — same filenames as
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
- The course reads in one voice; hooks and recaps are not template-stamped.
- **Math is untouched:** every Definition/Theorem/Proof/Example and equation is identical to stage 03
  except for canon-required symbol unification applied identically everywhere.

## Gate

**Review gate.** The whole-course edit is the highest-leverage place for a human to read the course
as a learner would. Approve before assembly ships it.
