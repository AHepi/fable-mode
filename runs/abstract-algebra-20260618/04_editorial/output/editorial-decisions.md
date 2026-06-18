# Editorial Decisions — Abstract Algebra (redo, 2026-06-18)

**Phase 1 of Stage 04.** Read against `02_curriculum/output/canon.md` (binding), `editorial-craft.md`,
`course-design.md` §2 (level = **`highschool`, no proof experience**), and `math-style.md`.
Scope: prose continuity, level-dial scaffolding, hooks/recaps, voice, metaphors. **Formal blocks are
out of scope except canon-required symbol unification.** This document tells a phase-2 editor exactly
what to change; it does not change the modules.

Headline: **this redo is in much better shape than the canon's "authored after the fact" warnings
imply.** The two worst pre-existing continuity breaks the canon flagged — the `$\star`/`$\ast$` drift and
the `$s$`-vs-`$f$` reflection rename — are **already fixed** in these eleven files. The remaining work is
mostly small: a couple of scaffolding leaks, the "do-nothing" stock-phrase cap, recap-formula sameness,
and one verification note for M10's two-operation scheme.

---

## 1. Notation unification

**Generic operation `$*$` — VERIFIED.** A full scan found **no `\star` and no `\ast`** in any module.
Every generic-group claim uses `$*$`. The canon's §1.1 fix list (M04, M07 were the offenders) is
**already applied**: M04 uses `$*$` throughout its Definition/axioms/intuition; M07 uses `$*$` in the
Definition (Subgroup), the three-condition test, and the worked examples. No action.

**Reflection `$s$` — VERIFIED FIXED.** Canon §1.5 flagged M07's "Check yourself" using `$f$` for the
reflection. In this redo M07 uses `$s$` correctly everywhere (`$\{e, s\}$`, `$s * s = e$`, the nesting
diagram). The 06→07 naming break the canon called "the single most jarring continuity break" is gone.
No action.

**Per-object symbols — all consistent with the registry (§1.8):**

| Object | Canonical | State in redo | Action |
|---|---|---|---|
| Reflection | `$s$` | M06 owns; M07 uses `$s$` | none |
| Identity | `$e$` (formal); "do-nothing" (informal) | consistent symbol; see §5 + nickname note below | cap nickname only |
| Generated subgroup | `$\langle a\rangle$` | M08 introduces; M09 calls back correctly | none |
| Order of group / subgroup | `$|G|$`, `$|H|$` | M05 introduces `$|G|$`; M09 introduces `$|H|$` | none |
| Order of element | `$|a|$` | M08 | none |
| `$\mathbb{Z}_n$` op | `$+$` | consistent everywhere | none |
| `$D_3$` op | juxtaposition + `$\cdot$` where a dot aids reading | M06 correct (`$rs$`, `$g \cdot h$`) | none |
| Multiplicative groups | `$\times$` / juxtaposition | M03/M05/M11 correct | none |
| Ring op | `$+$` and `$\times$` (or `$ab$`) | M11 correct | none |
| M08 generic powers | `$*$` (was `$\cdot$`) | **already `$*$`** (`$a^2 = a * a$`, line 32) | none |

**Identity bridge — the "do-nothing → `$e$`" handoff is sound.** The informal coinage "do-nothing"
(owned by M01, reused in M02) is **explicitly bridged to the formal identity** at two clean seams:
M03 line 123 ("the **identity element** for addition — the do-nothing element (module 01 coined that
nickname; here we pin down exactly what 'do-nothing' means)") and M04 line 34 ("The identity (line 3) is
the element that changes nobody — `$e$`, the do-nothing element"). The nickname is *not* left as a
floating separate name. No structural fix needed — but the nickname is over-used (see below).

**M10's two-operation scheme — ONE VERIFICATION + ONE CANON DEVIATION TO RESOLVE.**
- M10 (line 36) writes the first group `$G$` with operation `$*$` and the second group `$H$` with
  operation **`$\diamond$`**. The prompt's checklist names "M10's `$\diamond$` for the second group `$H$`"
  as the intended rendering, so **keep `$*$` / `$\diamond$`** as written. (Note: canon §1.4 literally
  says `$\ast$`/`$\star$`; this redo supersedes that pair with `$*$`/`$\diamond$`, which is *better* —
  it keeps `$*$` as the familiar generic operation and reserves a single distinct symbol for the second
  group. The deviation from the canon's exact glyphs is the right call; flagging it only so phase-2 is
  not tempted to "restore" `$\ast`/`$\star$`.) The map symbol is `$f$` (not the registry's `$\varphi$`).
  **Decision:** `$f$` is fine and self-consistent across M10's body and exercises; the prompt does not
  require `$\varphi$`, and switching now would touch every formal line. Leave `$f`. (If a later pass
  wants registry-strict `$\varphi$`, it is a mechanical global rename inside M10 only.)
- M10 already carries the canon's required jarring-prevention clause (§1.4 caveat): line 36 reads
  "(Elsewhere in this course a single generic operation is written `$*$`; here we need both at once,
  one per group.)" **VERIFIED present.** No action.

**`$\mathbb{Z}_n$` first-mention clock-gloss (§1.7) — consistent.** Every module that uses `$\mathbb{Z}_n$`
or a concrete instance gives the parenthetical clock gloss on first mention (e.g. M04 "the 4-hour clock",
M09 "the 6-hour clock", M11 "the 5-hour clock from module 02"). No action.

**Net for §1:** notation is essentially clean. The only notation-adjacent edit is the "do-nothing"
nickname cap (a stock-phrase issue, handled in §5/§7), not a symbol fix.

---

## 2. Level dial — `highschool`, no proof (the most important check)

### (a) Every module carries an analogy OR a picture — PASS for all eleven

| M | Analogy / picture present | Named |
|---|---|---|
| 01 | picture + analogy | square coaster turned by hand; ASCII square + triangle corner diagrams; the "three disguises" |
| 02 | picture + analogy | clock face (ASCII); `$\mathbb{Z}_4$` addition table; worked mod sums |
| 03 | picture | `$\mathbb{Z}_5$` operation table; worked closure/identity/inverse checks; `max`/subtraction non-examples. (Analogy is deliberately thin — see §3 prose note; the "shape: two in, one out" is the clean concrete *shape* the canon §3 endorses over a metaphor.) |
| 04 | picture + analogy | `$\mathbb{Z}_4$` addition table read axiom-by-axiom; "do-nothing", "undo", `$a*x=b$` solving framing |
| 05 | analogy + picture | "key & lock" image; comparison table + two Cayley tables |
| 06 | picture (required SVG) | `./assets/triangle-symmetries.svg` (alt text present, line 41); `$D_3$` Cayley table; flip-then-spin worked |
| 07 | analogy + picture | "house inside a city"/rooms; restricted Cayley table + ASCII nesting diagram |
| 08 | analogy + picture | "seed → grown plant"; tables of powers; clock-as-loop picture |
| 09 | analogy + picture | **chocolate-bar partition** (the central image); ASCII coset rows; worked cosets |
| 10 | analogy + picture | costume/disguise + translation-dictionary; two Cayley tables matched cell-for-cell; two light switches |
| 11 | analogy + picture | apples/oranges packs (distributive); ladder group→ring→field; `$\mathbb{Z}_5$` multiplication table |

**No module is missing its analogy or picture.** M06's required SVG is referenced with alt text.

### (b) Callbacks re-gloss heavy terms — PASS, with two minor cold spots

Callbacks generally re-gloss in a few words, as the level dial demands. Good examples:
- M07 line 17 re-glosses `$D_3$` ("The triangle's six symmetries — the group `$D_3$` you met in module 06").
- M08 line 25 re-glosses subgroup ("In module 07 we met **subgroups** — subsets of a group that are
  themselves groups under the same operation").
- M09 line 19 re-glosses group, subgroup, and order all in one paragraph before using them.
- M10 line 133 re-glosses order ("the same order, `$|G|$` (the count of elements, from module 05)").

Two spots name a heavy term slightly cold (low severity — fix if cheap):
- **M08 line 19** — first sentence of the intro names **"generator"** and **"cyclic"** as the module's
  destination ("Such an element is called a **generator**, and a group with one is called **cyclic**")
  *before* the body defines them. This is acceptable as a hook-promise (the formal definitions follow at
  lines 55–65), but a phase-2 editor should ensure the hook reads as a promise, not a definition. No
  hard fix required.
- **M11 line 37** uses **"abelian group"** inside the ring definition. It *is* re-glossed in-line
  ("an **abelian group** — a group (closure, associativity, identity `$0$`, inverses `$-a$`) where
  addition also commutes"), so this is fine — noting it only to confirm the gloss is present.

No genuinely cold callback (a bare "subgroup/coset/homomorphism" with no gloss handed to a beginner) was
found. This is a level-dial **pass**.

### (c) Orphan terms — PASS

Every load-bearing term is glossed at first use within the highschool prerequisite set (algebra,
functions, basic geometry/trig). Checked: set, function, binary operation, closure, associativity,
identity, inverse, modular arithmetic, subgroup, order, coset, cyclic, generator, homomorphism,
isomorphism, ring, field — all defined on first use. Two terms reach slightly past the floor but are
**each glossed in place**, so they are not orphans:
- M08 Ex.6 "**pigeonhole principle**" — glossed parenthetically ("if you have more pigeons than holes,
  two pigeons share a hole"). OK.
- M08 Ex.4 "**`$\gcd$`**" — used as "`$\gcd(7,12) = 1$`" then explained in words ("7 is odd and not
  divisible by 3"). Borderline; a phase-2 editor may add three words ("their greatest common divisor")
  for a beginner. Low priority.
No fix mandatory.

### (d) M9 Lagrange proof walked gently — PASS (strong)

The proof is the one formal block in M09 and it is **walked carefully, every step justified in plain
words**, exactly per the dial. Specifically:
- Line 109–111 prepares the reader who has "never read one": names that a *proof* is coming, says
  "There's no trick to spot," and maps the three proof steps onto the three things already *seen* in the
  chocolate bar (equal size / no overlap / full cover).
- Step 1 (cover), Step 2 (equal size), Step 3 (no overlap) each state the claim, then justify it; inverses
  are glossed as "the undo of `$g$`" at point of use (line 116).
- "Putting it together" shows the `$|G| = k \times |H|$` count explicitly before declaring divisibility.
- The one soft spot: **Step 3 (line 118)** compresses the key algebra into "a short rearrangement
  (combining with inverses inside `$H$`…)" rather than showing it. For this level that abstraction is
  *appropriate* (showing the full coset-equality manipulation would over-formalize), but a phase-2 editor
  should confirm the hand-wave reads as deliberate, not as a skipped step. **No leap is left
  unexplained-in-principle.** Pass.

---

## 3. Hook table (opening move, ≤10 words)

| M | Opening move (≤10 words) |
|---|---|
| 01 | Pick up a square coaster; rotate a quarter-turn |
| 02 | A wrong answer: what is 9 + 5? |
| 03 | You've spent two modules watching arithmetic wrap |
| 04 | For three modules you've been collecting parts |
| 05 | Once you have a key, you see locks |
| 06 | Cut a paper triangle; drop it in |
| 07 | A house inside a city — smaller, self-contained |
| 08 | Pick one rotation; apply it over and over |
| 09 | A 12-element group — could it hide a 5-subgroup? |
| 10 | Here are two groups that behave identically |
| 11 | The square at the start kept a secret |

**Collision check:** No two hooks collide in *kind*. The set is well-varied: a physical imperative (01, 06),
a provocative question (02, 09), a "you have been building" recap-open (03, 04), an aphorism (05), a
concrete object-as-container (07), a procedure (08), a paired-example (10), a bookend callback (11).
- **Mild watch, not a collision:** 03 and 04 both open by summarizing the journey so far ("You have spent
  two modules…" / "For three modules you have been collecting parts…"). They are adjacent and use the same
  *recap-open* move. Not identical wording, but a phase-2 editor should consider varying one (e.g. let 03
  open on the bare question "What is a 'way of combining two elements,' exactly?") so consecutive modules
  don't both begin with a tally of prior modules. Low severity.
- 06 ("Cut a paper triangle") echoes 01's physical-imperative open, but they are five modules apart and
  the objects differ — acceptable spacing.

No fix mandatory; one optional variation (M03).

---

## 4. Recap table (closing move) — the weakest macro-pattern

| M | Closing move | Templated "next module…"? |
|---|---|---|
| 01 | names the four-part skeleton; "module 02 builds clock arithmetic… module 04 names it" | yes (forward) |
| 02 | "Module 03 will name these features — closure, identity, inverse" | **yes (forward, formulaic)** |
| 03 | "Module 04 takes these four properties and asks…" | **yes (forward, formulaic)** |
| 04 | "The answer, in the next module, is: everywhere — a whole zoo" | **yes (forward, formulaic)** |
| 05 | "Module 06 builds the symmetries of a triangle… commutativity breaks" | **yes (forward, formulaic)** |
| 06 | "Next we look *inside* a group — the subgroups" | **yes (forward, formulaic)** |
| 07 | "Module 08 pivots from *finding* subgroups to *building* them" | **yes (forward, formulaic)** |
| 08 | "Module 09 picks up the question of *size*: Lagrange" | **yes (forward, formulaic)** |
| 09 | "Module 10 turns outward: when are two groups secretly the same" | **yes (forward, formulaic)** |
| 10 | "Next we add a second operation… rings and fields" | **yes (forward, formulaic)** |
| 11 | bookend to the square; "find [the ladder] there under your feet" | **no (lyrical close)** |

**This is the single most machine-stamped surface in the course.** Ten of eleven recaps end with an
explicit "Module N+1 will…" forward pointer in nearly the same cadence. The canon (§5 voice target) and
`editorial-craft` ("Signpost only when it pays… cap it") both call this out. Per the prose↔pedagogy
precedence, inter-module transitions are **prose's call**, so a phase-2 editor has latitude to vary them.

**Recommendation — vary at least four of the middle recaps (06–10) so the forward pointer is not the
*only* closing instrument:**
- Keep the strong lyrical/bookend closes: **01** (forward but earned, sets up the whole arc) and **11**
  (the course's payoff close — protect it).
- Vary **M06, M07, M08, M09** at minimum: end at least two of them on a *result* or a *resonant image*
  rather than "Module N will…". E.g. M06 could end on "order matters now, and it will not stop mattering";
  M09 could end on the prime-order consequence rather than the M10 teaser.
- Where a forward pointer stays, **vary the cadence** (not all "Module N + verb…"): some can look back, some
  can pose the next question without naming the module number.

This is the highest-value polish in the whole course.

---

## 5. Voice + de-soothe

**One narrator — PASS.** Read end to end, the voice is consistent: warm, concrete-first, right-branching,
ends on stressed words. The canon §5 worried M09 and M10 drifted "drier/clinical"; in this redo **both
lead with their concrete image** (M09 opens on the hidden-5-subgroup question and reaches the chocolate
bar before the abstraction; M10 opens on the two behaving-identically groups before "underneath"). The
01/11 lyrical poles are intact and not over-adjectived. Hook-and-recap read-aloud test (canon §5): M01 and
M11 sound like the same person; the middle modules match in temperature.

**De-soothe — VERIFIED CLEAN.** A scan for soothing manner adverbs (*gently, quietly, silently, simply*)
and hand-holding phrases (*don't worry, no need to panic, it's okay, easy, take a deep breath*) returned
**zero hits across all eleven modules.** The lint 5–6 concern is satisfied. No action.
(Note: M11 line 17 uses "kept a secret" and M09 line 110 says "There's no trick to spot" — these are
confident framing, not soothing; they stay.)

**Stock-phrase / nickname caps still owed (canon §4 + §1.6) — the main voice cleanup:**
- **"do-nothing" overuse (canon §1.6 cap: ≤1 per module in 02–11 after the M03/M04 definition).** Actual
  counts: M01 12 (owner — fine), **M02 6**, M03 3, **M04 5**, M05 1, M06 2, M07 1, M08 1, **M09 6**
  (one is in the bias-screen footer), M10 1, M11 0. **Fix M02, M04, M09 down to one warm "do-nothing"
  each**, replacing the rest with "identity" (the defined term) once it exists. M09's six are mostly
  legitimate proof-gloss uses of "the do-nothing element" for `$e$` — but six is too many in one module;
  keep the first gloss, then say `$e$`/"identity" and let one warm "do-nothing" remain.
- **"the whole point/idea/trick" family (canon §4, cap 1 per module):** spot-check during phase 2 — M04
  line 88 "the whole point", M09 lines 33/88-ish "the whole theorem", M11 line 81/242 "the whole point".
  Keep one per module; M11's closing "That is the whole point of a first course" (line 242) is the keeper.
- **"tempting wrong answer" misconception label (canon §4):** standardize on **"A tempting wrong
  answer:"** everywhere. The redo is already close — M02, M05, M06, M08, M11 use "tempting wrong answer";
  M08 line 123/M09 use "tempting wrong answer"/"tempting mistake"-style variants. Normalize the few stragglers.
- **"one X is enough" family (canon §4, cap 1 per module):** the redo is well-behaved here; each module
  uses it roughly once ("One missing inverse is enough", "One escape is enough", "One nonzero element…").
  Just confirm no module stacks two.

---

## 6. Metaphor & bridge audit

**Every central image points true, is paid off, and is cashed into the formalism. No broken or
abandoned images.** The canon §3 specifically demanded the "two-slot machine with a crank" image be
**cut** from M03 — **VERIFIED removed**: M03 motivates the operation as a plain *shape* ("two inputs from
a set, one output that lands back in the same set," line 24) and reads `$* : S \times S \to S$` straight
off it. No slot/crank/contraption language anywhere. M10's "group-as-machine" framing the canon warned
about is **also gone** — M10 leads with the costume/dictionary image, not "think of a group as a machine."

| M | Central image | Points true? | Paid off? | Bridged to formalism? |
|---|---|---|---|---|
| 01 | square keeps its secret; three disguises | yes | yes (bookended in M11) | yes (skeleton → "group", M04) |
| 02 | clock hand sweeping past 12 | yes | yes | yes (clock → `$a \bmod n$`, "The bridge", line 58) |
| 03 | operation as a *shape* (two in, one out) | yes | yes | yes (shape → `$* : S\times S \to S$`, line 42) |
| 04 | four promises / "solve `$a*x=b$`" | yes | yes | yes (each axiom read off the `$\mathbb{Z}_4$` table) |
| 05 | key & lock | yes | yes | yes (definition as a "lens", examples follow) |
| 06 | paper triangle in a triangular hole; seats | yes | yes | yes (seats → permutation tracking → `$rs \neq sr$`) |
| 07 | house inside a city; rooms | yes | yes | yes ("The bridge from definition to picture", lines 52–56 — maps each subgroup condition) |
| 08 | seed → grown plant | yes | yes | yes (`$\langle a\rangle$` "Bridge" lines 51, 65) |
| 09 | **chocolate bar cut into equal slices** | yes | yes (drives the whole proof) | yes (three bar-claims → three proof steps, line 110) |
| 10 | costume / translation dictionary; two switches | yes | yes (pays off M05's "same shape" teaser, line 129) | yes (dictionary → `$f(a*b)=f(a)\diamond f(b)$`) |
| 11 | apples/oranges packs; ladder | yes | yes (ladder closes the course) | yes (distributive "Bridge" line 45; field "Bridge" line 94) |

**Bridges:** every formal Definition/Theorem in the course is reached by an explicit bridge — no cliffs.
Several modules name the bridge in-text ("The bridge", M02/M07/M11; "*Bridge.*", M08/M11). M09's proof has
its own gentle on-ramp (§2d). **No metaphor fails point-true / pay-off / cash-in.** This section is clean.

**Cross-module image hygiene (canon §3 ownership) — two small callbacks to verify, not defects:**
- M07/M08 reference the triangle's rotations; both **cite "module 06"** and use the seat convention rather
  than re-explaining a rotation. Compliant.
- "in disguise" (canon §3 offender): M01 keeps its single foreshadowing use; **M02's throwaway "in
  disguise" the canon told us to cut is NOT present in this redo** (no "in disguise" in M02). M10 owns the
  costume set-piece. Compliant — no cut needed.

---

## 7. Per-module edit checklist (for phase-2 editors)

Severity: **[clean]** = ship as-is; **[polish]** = small, optional; **[do]** = should fix.

- **M01 — [clean].** Owner of "do-nothing" (12 uses OK as coinage) and the combine/do-nothing/undo triad.
  Hook and lyrical register are the target. No action.
- **M02 — [do]** "do-nothing": 6 uses → reduce to one warm callback + "identity"/`$0$` elsewhere.
  **[polish]** recap is a formulaic forward pointer (see §4).
- **M03 — [polish].** Notation/metaphor clean (machine image correctly removed). Optional: vary the hook so
  it doesn't share the "you've spent N modules" open with M04 (§3). Confirm "the whole ___" cap.
- **M04 — [do]** "do-nothing": 5 uses → one warm callback; the line-34 bridge gloss ("`$e$`, the
  do-nothing element") is the keeper. **[polish]** recap forward pointer (§4). Notation already `$*$`/`$e$`
  clean.
- **M05 — [do] scaffolding leak:** line 43 "**Note on notation.** … **per the canon**: legitimate
  per-group operations stay as themselves; do not flatten them to `$*$`." This **exposes the production
  apparatus to the reader** (`editorial-craft`: "Don't expose the scaffolding"). Cut the meta-sentence or
  rewrite as plain reader-facing prose ("Because the operation here is honest addition, we write `$+$`,
  not the generic `$*$`."). **[polish]** recap forward pointer.
- **M06 — [do] recap** (vary the close, §4). **[clean]** otherwise: SVG + alt text present, `$D_3$` table
  correct, `$s$`/juxtaposition correct, non-commutativity worked cleanly.
- **M07 — [do] scaffolding leak / think-aloud:** Ex.3 solution (line 256) contains "...$= r^2 s$ — wait,
  let's be careful." plus a meta "actually let's read it from the full Cayley table." This is visible
  authoring scratch-work and reads as an error left in. **Rewrite the solution cleanly:** state `$r * s =
  rs$`, note `$rs \notin \{e,r,s\}$`, conclude closure fails. **[polish]** recap forward pointer (§4).
  Otherwise notation is fully canon-compliant (the `$f$`→`$s$` fix is done).
- **M08 — [polish].** Hook names "generator/cyclic" before defining (acceptable as promise, §2b).
  Optional: gloss `$\gcd$` in Ex.4 in three words. **[do] recap** forward pointer (§4) — strong candidate
  to vary, end on the order-divides consequence.
- **M09 — [do]** "do-nothing": 6 uses (incl. bias-screen footer) → trim to one warm use + `$e$`/identity.
  **[clean]** the proof itself — the gentle Lagrange walk is a model for the level; protect it.
  **[do] recap** forward pointer (§4). Confirm "the whole theorem"/"the whole point" cap.
- **M10 — [clean]** for content: costume/dictionary/switches images land; M05 teaser is paid off (line
  129); the `$*$`/`$\diamond$` two-operation note is present (line 36). **[verify only]** the `$*$`/`$\diamond$`
  glyph choice deviates from canon §1.4's `$\ast`/`$\star$` but is the better choice — do **not** "restore"
  the old glyphs (§1). Map symbol `$f$` (not `$\varphi$`) is acceptable. **[do] recap** forward pointer.
- **M11 — [clean]** voice/metaphor/bridge — the bookend close (line 242) is the course's payoff; protect
  it. **[polish]** confirm "the whole point" appears once (line 242 is the keeper); the §1.6 internal-dedup
  of the `$2 \times 3 = 0$` zero-divisor fact (canon item G) recurs in worked example + two checks — at
  this level the repetition is **defensible reinforcement** (course-design §2 dial), but trim if the
  Check-yourself can *reference* rather than recompute the full run.

---

## Summary (for the caller)

1. **Notation is essentially clean and the canon's two scariest drifts are already fixed.** Verified: no
   `\star`/`\ast` anywhere (generic op is `$*$` everywhere); the reflection is `$s$` (the old M07 `$f$`
   rename is gone); M08's generic powers are `$*$` (not `$\cdot$`); M10 carries its required
   two-operation note. The only notation-class edit is capping the "do-nothing" nickname.
2. **De-soothe is verified clean** — zero soothing adverbs or hand-holding phrases across all eleven
   modules. One consistent warm narrator; M09/M10 no longer drift dry (both lead with their image).
3. **Level dial PASSES:** every module has an analogy or picture (M06's SVG has alt text), no orphan
   terms, callbacks re-gloss, and the M09 Lagrange proof is walked gently with every step justified in
   plain words — the strongest single piece in the course.
4. **Worst issues (do these first):**
   - **(a) Recap sameness** — 10 of 11 recaps end with a near-identical "Module N+1 will…" forward
     pointer. The most machine-stamped surface in the course; vary at least M06–M09 (§4).
   - **(b) Two scaffolding leaks** — M05 line 43 says "**per the canon**" in reader-facing prose;
     M07 Ex.3 left in "—wait, let's be careful" / "actually let's read it from the table" authoring
     scratch-work. Both must be rewritten to hide the apparatus.
   - **(c) "do-nothing" overuse** — M02 (6), M04 (5), M09 (6) exceed the ≤1-per-module cap; trim to one
     warm callback each and use "identity"/`$e$` otherwise.
5. **No module is missing its analogy/picture, and no cold callback was found** — there are no level-dial
   failures. The borderline cases (M08 naming "generator/cyclic" in the hook before defining; `$\gcd$`)
   are acceptable.
6. **Modules needing the most work:** **M07** (think-aloud leak in Ex.3 + recap), **M05** (canon-leak
   sentence + recap), and the **whole-course recap pass** (M06–M10). **Cleanest:** M01 and M11 (the
   lyrical poles — protect them), M06 content (only its recap needs varying), and the M09 proof body.
