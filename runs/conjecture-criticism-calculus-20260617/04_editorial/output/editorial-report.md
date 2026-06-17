# Editorial Report — The Conjecture–Criticism Calculus

Stage 04 (editorial) changelog. Full analysis is in `editorial-decisions.md` (the phase-1 decisions
this pass applied); this report records what was changed. Eleven modules, written blind-parallel in
stage 03, edited here to read as one book. Formal blocks (definitions, the Lemma + proof, the rule
statements, the status `cases` block, equations) were left byte-for-byte **except** the canon-required
symbol unification (§1), which is the single sanctioned crossing into formal content. All frontmatter,
`<details>` checks/solutions, and pedagogical structure preserved.

## 1. Notation unification (applied across all modules, formal blocks included)

The blind authors rendered shared symbols up to five ways; standardized to one each:

- attack relation → `\mathrm{att}` (was `att` / `\mathit{att}` / `\mathrm{att}` / `\text{att}` / `{att}`)
- addressing relation → `\mathrm{addr}`; criteria set → `\mathrm{Crit}_\pi`
- predicates → `\mathrm{crit}`, `\mathrm{mod}`; hard-to-vary → `\mathrm{HV}_B`
- verdict words → `\text{pass|fail|overrun}` (fixed M6's `\mathit{fail}`)
- statuses → `\text{accepted|refuted|suspended}` (fixed M8's `\textbf{...}` in the `(Adj)` cases block)
- single letters (`s(a)`, `G`, `F`, `B`, `\nu`, `R_t`), `\Pr`, `\mid`, `\approx_B`, `\mu(\cdot\mid a)` were already clean.

Applied context-aware: only inside math, never touching prose words ("attack", "battery", "address").
**Verified:** 0 residual `\mathit{att|addr|fail}`, `\text{att|addr}`, or `\textbf{status}` in any module.

## 2. Structural / correctness fixes

- **M8:** deleted a left-in HTML scaffolding comment block (the `<!-- OPENING (PROSE)… -->` planning
  note); fixed the `(Adj)` cases block to `\text{…}`. Lemma 3.1 + proof + `$\square$` untouched.
- **M11:** removed the visible "…wait. Correction:…" self-correction inside Exercise 5's solution —
  now a single clean derivation; replaced the re-narrated F-iteration in the worked example with a
  callback to M7's `G` (per canon §2); added decode sentences after the (Spawn) and (Refl) rule
  statements to match the bridge house-style; cut author-to-author meta-asides.

## 3. Whole-course consistency (prose)

- **Hooks de-collided:** M4 re-opened off its collision with M1's "staged debate" (now leads on the
  snapshot/tuple); M10 re-opened off its soft collision with M9 (now leads on rigid-vs-floppy).
- **Recap tic fixed:** five modules had closed on the template "Module N+1 [verb] the [thing]." Kept the
  numbered forward-pointer only in **M3** and **M8** (the two biggest hand-offs); M4, M6, M9, M10 now
  land on their own payoff with at most an unnumbered gesture.
- **Voice leveled:** warmed M4's dry "decoding the components" stretch (one motivating sentence per
  slot, definition block untouched); added a connecting sentence to M9's flat probability primer;
  pulled M11 back from chatty toward the proof-mentor register.

## 4. What was confirmed already-good (no change)

Every definition is reached by a bridge (no cliffs). No object was ever renamed (drift was purely
rendering). The forbidden images were all avoided — no judge/jury/vote/tournament for `G`, no
"random mutation" for conjecture; the sanctioned "rounds of standing" (M7) and referee-with-stopwatch
(M2) images are used by their owners. Phrase caps within bounds. M2 needed no changes.
