# Canon — Abstract Algebra Course Style & Consistency Bible

**Status:** Authored after the fact, against the 11 shipped modules
(`site/src/content/courses/abstract-algebra/01-*.md` … `11-*.md`). This is the artifact that
*should* have governed authoring and didn't; its absence let symbols drift, facts get
re-derived from scratch, and a few phrases wear out. Every entry below is a decision, not a
suggestion. An editor should execute against it directly.

These are 11 chapters of **one book by one narrator**, not 11 essays. Treat continuity as law:
a fact taught once is *owned* once; later modules call back to it, they do not re-teach it.

---

## 1. Symbol & Naming Registry

One symbol per recurring object. The left column is canonical; the right column lists where the
modules currently deviate and must be fixed.

### 1.1 The generic / abstract group operation → **`$*$`** (asterisk via `*`)

**Decision:** The abstract, "any group" operation is written `$*$` everywhere — in the group
definition, in subgroups, in homomorphism statements that talk about a generic group. This
matches the already-corrected **module 03** (`$* : S \times S \to S$`, `$a * b$`) and
**module 05** (`$(G, *)$`). Do **not** mix in `$\star$`, `$\ast$`, or `$\cdot$` for the
generic operation.

> Editor note: `$\ast$` and `$*$` *render identically* in KaTeX, but they read as two
> different tokens in source and invite exactly the drift we are fixing. Standardize the
> source on `*`.

**Current state, by module:**

| Module | Symbol now used for the generic operation | Action |
|---|---|---|
| 01 | none (prose only — "combine") | OK, leave prose |
| 03 | `$*$` | ✓ canonical — the reference |
| 04 | `$\star$` ("operation $\star$", `$a \star b$`, `$a \star x = b$`) | **FIX → `$*$`** throughout: the Definition (Group) block, axioms 1–4, the Intuition line "solve $a \star x = b$", and Exercise 6's `$b \star a \star c$` derivation |
| 05 | `$*$` | ✓ canonical |
| 06 | `$\cdot$` (composition) + juxtaposition `$rs$` | **Legitimate** for $D_3$ — see 1.2 |
| 07 | `$\ast$` ("operation $\ast$", `$a \ast b$`, `$H \leq G$ test`) | **FIX → `$*$`** in the Definition (Subgroup), the three-condition test, and worked examples |
| 08 | `$\cdot$` (for the generic multiplicative case, `$a \cdot a$`, `$a^i \cdot a^j$`) | **Acceptable as multiplicative-group convention**, but where the text is making a *generic-group* claim, prefer `$*$`. See 1.3 |
| 10 | `$\ast$` (group $G$) and `$\star$` (group $H$), deliberately | **Legitimate** — see 1.4 |
| 11 | `$\times$` + juxtaposition (ring multiplication) | **Legitimate** — ring has its own operation; see 1.5 |

### 1.2 Per-group operation symbols that are **legitimate** and must NOT be flattened to `$*$`

These are real, named operations on specific concrete groups. Keep them.

- **`$\mathbb{Z}_n$` (additive):** the operation is `$+$`. Always. (Modules 02, 04, 05, 07, 08, 09.)
- **`$D_3$` composition:** written by **juxtaposition** — `$rs$`, `$r^2s$`, `$sr$` — with
  `$\cdot$` permitted only when a binary dot aids reading a composition statement
  (`$g \cdot h$`). Module 06 does this correctly; keep it.
- **Multiplicative number groups** (`$\{1,-1\}$`, fourth roots of unity `$\{1,i,-1,-i\}$`,
  `$\mathbb{Q}^\times$`): the operation is `$\times$` (or juxtaposition / `$\cdot$` for the
  roots of unity). Modules 04, 05, 10 — keep.
- **Ring multiplication** (module 11): `$\times$` or juxtaposition (`$ab$`); ring addition `$+$`.

### 1.3 Module 08 specifically

Module 08 talks about powers `$a^k$` in a *generic* group, then specializes. Rule:

- When stating a definition or property for an **arbitrary group**, use `$*$`
  (e.g. "$a^i * a^j = a^{i+j}$" should be `$*$`, not `$\cdot$`).
- The line `$a^i \cdot a^j = a^{i+j}$` (Definition of cyclic subgroup) and Exercise 4's
  `$g^i \cdot g^j$` are generic-group claims → **change `$\cdot$` to `$*$`** for consistency
  with 04/07's now-fixed `$*$`.
- Keep `$\cdot$` only where 08 is explicitly in a multiplicative-group example.

### 1.4 Module 10's two-symbol scheme is intentional — keep it

Module 10 maps group $G$ (operation `$\ast$`) to group $H$ (operation `$\star$`) and explicitly
says so: *"we write the operation of the first group as `$\ast$` and the operation of the second
as `$\star$`."* This is a *deliberate* device to make `$\varphi(a \ast b) = \varphi(a) \star
\varphi(b)$` legible. **Do not "fix" this to `$*$`.** It is the one place two distinct operation
symbols carry real meaning.

> Caveat for the editor: because we are standardizing the *generic* operation on `$*$`
> everywhere else, add one clause to 10's notation note so the reader isn't jarred:
> "(Elsewhere in the course a single generic operation is written `$*$`; here we need two
> symbols at once, one per group.)"

### 1.5 The equilateral triangle's reflection → **`$s$`** (module 07 currently wrong)

**Decision:** The chosen reflection of the triangle is **`$s$`**. Rotation is **`$r$`** (by
`$120^\circ$`), with `$r^2$` (by `$240^\circ$`) and `$r^3 = e$`. A single generic flip, when one
is needed, is still **`$s$`** (or "$s$, $rs$, $r^2s$" for the three reflections).

- **Module 06** introduces and uses `$s$` correctly: `$D_3 = \{e, r, r^2, s, rs, r^2s\}$`,
  `$s^2 = e$`, `$sr = r^2s$`. ✓ This is the owner.
- **Module 07 VIOLATION:** the "Check yourself" and its answer call the reflection **`$f$`**
  ("is `$\{e, f\}$` a subgroup, where `$f$` is a single reflection") and the recap implicitly
  follows. **FIX → `$s$`** so it reads `$\{e, s\}$`, `$s * s = e$`, etc. Naming drift between
  consecutive modules (06 → 07) is the single most jarring continuity break in the course.

### 1.6 Identity element → **`$e$`**; nickname "the do-nothing element" — CAP IT

**Decision:** Symbol is `$e$` everywhere (already consistent across 03, 04, 06, 07, 08, 10).
The nickname **"the do-nothing element / move / number"** is good pedagogy on first contact but
is **massively overused** — it appears in 01, 02, 03, 06, 11. See §4 for the cap. Short version:

- **Module 01 owns the coinage** of "do-nothing" (and the triad *combine, do-nothing, undo*).
- Modules 02–11 may use "do-nothing" **at most once per module**, as a deliberate callback to
  01, and should otherwise say **identity** (the technical term) once it's been defined in 03.
- After module 04 (where `$e$` is formally the identity), prefer "identity" in body prose and
  reserve "do-nothing" for a single warm aside.

### 1.7 `$\mathbb{Z}_n$` — first-mention convention

**Decision:** On the **first mention within a module**, introduce it as
**"`$\mathbb{Z}_n$` (the `$n$`-hour clock)"** (or "the `$n$`-mark clock"), then plain
`$\mathbb{Z}_n$` thereafter. Concrete instances on first mention in a module:
"`$\mathbb{Z}_5$` (a 5-hour clock)", "`$\mathbb{Z}_6$`", etc.

- Module 02 owns the full construction; it earns the long form repeatedly there. ✓
- Modules 04, 05, 07, 08, 09, 11 currently re-gloss `$\mathbb{Z}_n$` inconsistently — sometimes
  "the integers mod $n$", sometimes "clock arithmetic from module 02", sometimes nothing.
  **Standardize:** one parenthetical clock-gloss on first mention, then bare `$\mathbb{Z}_n$`,
  plus a one-line callback to module 02 (see §2) rather than a re-explanation of wrap-around.

### 1.8 Other fixed names (already consistent — protect them)

| Object | Canonical | Notes |
|---|---|---|
| Group | `$G$`; operation `$*$` | |
| Subgroup | `$H$`, relation `$H \leq G$`, `$H \subseteq G$` | module 07 |
| Order of a group | `$|G|$` | 05 |
| Order of an element | `$|a|$` | 08 |
| Cyclic subgroup gen. by `$a$` | `$\langle a \rangle$` | 08 |
| Generic homomorphism | `$\varphi$` (phi) | 10 |
| Isomorphic | `$G \cong H$`; not isomorphic `$G \not\cong H$` | 10 |
| Cayley table | **"Cayley table"** | First named in **05**; 02 calls the same object an "addition table" (fine, pre-naming). 06, 10 reuse "Cayley table" correctly. Don't reintroduce the term as if new in 06. |
| Inverse of `$a$` | `$a^{-1}$` | 04+ |
| Imaginary unit | `$i$` with `$i^2=-1$` | 05, 10 |
| `$\mathbb{Z}_2 \times \mathbb{Z}_2$` | that notation; gloss "two light switches" | 10 owns the metaphor |

---

## 2. "Already Taught" Ledger + Dedup Plan

The rule: **one owner module gives the full treatment; every later module replaces the
re-derivation with a one-line callback.** Callbacks/reminders are good and encouraged — a fresh
from-scratch re-derivation is the defect. Below, "OWNER" = keep the full derivation; "CALLBACK" =
delete the re-derivation, insert the suggested one-liner.

| # | Fact | OWNER (full treatment) | Re-derived in (FIX → callback) | Suggested one-line callback |
|---|---|---|---|---|
| A | **The four group axioms** (closure, associativity, identity, inverses), each stated + tested | **03** (states all four against `$+$` and clock) and **04** (assembles them into the Definition of a group). Treat **04** as the canonical *statement*; 03 as the canonical *motivation*. | **05** re-lists/re-checks axioms in the zoo; **06** re-walks all four for `$D_3$`; **07** re-derives "identity present, closure, inverses" from scratch; **11** re-states the abelian-group axioms inside the ring def. | "Run the four-axiom check from module 04 (closure, associativity, identity, inverses)…" — then show **only** the line that is *new* for this example. 06 legitimately needs to *verify* `$D_3$`, but should cite the axiom list, not re-explain what each axiom means. |
| B | **`$2$` has no multiplicative inverse in `$\mathbb{Z}$`** ("would need `$\tfrac12$`, not an integer") | **04** ("When it fails: the integers under multiplication") | **05** worked example (`$\mathbb{Q}^\times$`, "why throw zero out"); **05 Ex.5**; **11** worked example (`$\mathbb{Z}$` a ring not a field) and **11 Ex.4** | "Just as `$2$` had no inverse in `$(\mathbb{Z}, \times)$` back in module 04, …" Keep the *new* point (here: which set repairs it), drop the re-derivation of `$\tfrac12 \notin \mathbb{Z}$`. |
| C | **Inverse of `$a$` in `$\mathbb{Z}_n$` is `$n-a$`** (because `$a+(n-a)=n=0$`) | **04** (Check-yourself + Example: `$\mathbb{Z}_n$`, "$a^{-1} = n-a$") | **02 Ex.4** (derives the `$\mathbb{Z}_6$` case); **04 Ex.1** re-derives all of `$\mathbb{Z}_5$`'s inverses; **07** worked example re-derives `$2+4=0$` in `$\mathbb{Z}_6$` | "Recall the `$\mathbb{Z}_n$` inverse rule from module 04: the inverse of `$a$` is `$n-a$`." (02 *predates* 04, so 02 keeps its hands-on version — it's the seed, not a duplicate. The fix is 04 Ex.1 and 07: cite the rule, don't rebuild it.) |
| D | **Powers of `$2$` in `$\mathbb{Z}_6$` give `$\{0,2,4\}$`** (the even-subgroup loop) | **08** worked example ("Order of an element in `$\mathbb{Z}_6$`": `$2^1=2, 2^2=4, 2^3=0$", `$\langle 2 \rangle = \{0,2,4\}$`) — this is where it earns full treatment | **07** worked example builds `$\{0,2,4\}$` as a subgroup by checking closure; **09** worked example re-generates `$\{0,2,4\}$` from `$2$` *again* | 09 should say: "From module 08, `$\langle 2 \rangle = \{0,2,4\}$` (the even subgroup); by Lagrange its size `$3$` divides `$6$`." Drop 09's re-computation of `$2, 2+2, 4+2…$`. 07 owns it as a *subgroup-test* example (different lens), so 07 keeps its version but should foreshadow rather than overlap 08. |
| E | **Fourth-roots-of-unity `$\leftrightarrow \mathbb{Z}_4$` correspondence** ("same-shaped Cayley table") | **10** worked example (the explicit isomorphism `$\varphi(i^k)=k$`, `$G \cong \mathbb{Z}_4$`) — full ownership | **05** plants it ("notice it has the same *shape* as the roots-of-unity table… not an accident, a hint of something we'll chase down") | 05 is correctly a *teaser*, not a derivation — keep it as is. Ensure 10 explicitly pays off 05's promise: "Back in the zoo (module 05) we noticed these two tables had the same shape; here is why." (10 already gestures at this — tighten the callback to name module 05.) |

**Additional re-derivation to dedup (not in the required list, but flagged):**

| F | **"Every element appears exactly once in each row/column of a Cayley table"** | **05 Ex.5** (first stated) | **06** ("a fingerprint of every group's Cayley table"), **06 Ex.4** (re-proves it via `$g^{-1}$`) | 06 may keep the *proof* once (Ex.4) since it's a genuine lemma; the body mention in 06 should call back to 05, not re-assert as new. |
| G | **`$\mathbb{Z}_6$` is not a field / `$2$` has no inverse mod 6 / `$2\cdot3=0$`** | **11** owns it | repeated three times *within* 11 (worked example, Check-yourself, Ex.5) | Internal to 11: state the `$2\cdot3=0$` zero-divisor fact **once** in the worked example; the Check-yourself and Ex.5 should reference it, not recompute the full multiplication run each time. |

---

## 3. Metaphor-Ownership Map

Each running image belongs to **one** module as a set-piece. Other modules may *reference* it
("the clock from module 02") but must not re-introduce or re-explain it as if new.

**Ownership is not endorsement.** A metaphor earns a place here only if it (1) points at exactly
**one correct** real-world referent and carries no misleading association (a "machine with slots and
a crank" evokes a *slot machine* — randomness, gambling — the opposite of a deterministic operation);
(2) is **paid off**, not announced-as-central and then dropped; and (3) can be **cashed into the
formal definition** — the prose must map each piece of the image onto the notation it motivates.
An image that fails any of these is **cut, not assigned** — and sometimes the right call is no
metaphor at all, just a clean concrete "shape" the definition reads straight off.

| Metaphor / image | OWNER | May be referenced by | Current offenders |
|---|---|---|---|
| **Square: quarter-turn / flip "kept its secret"** | **01** | 11 (closing callback) | OK. 11's recap callback to the square is intentional and good — it bookends the course. |
| **Clock face / hours wrapping / "the hand sweeps past 12"** | **02** | 03, 04, 05, 07, 08, 09, 11 | Mild: several modules re-narrate "the hand wraps around." Reduce to "on the clock (module 02), …". The full hand-sweep story stays in 02 only. |
| **The *shape* of an operation: "two in, one of the same kind out"** | **03** | — | **No slot/crank/contraption image.** 03 motivates a binary operation as a plain shape — two from $S$ in, one from $S$ out — and reads the notation $* : S \times S \to S$ straight off it (the bridge *is* the motivation). The earlier "two-slot machine with a crank" is **removed**: it evoked a slot machine (randomness/gambling — the wrong referent), was billed as "the star of this module," and then abandoned. Module 10's separate "group-as-machine" image must not reference it. |
| **Key & lock / "once you know the shape of a key you see locks everywhere"** | **05** | — | OK, unique to 05. |
| **Cardboard/paper triangle in a triangular hole; "seats" for corners** | **06** | 07, 08 (rotations callback) | 07 and 08 re-describe the triangle's rotations. **Fix:** cite "$D_3$ from module 06" and the seat-tracking convention rather than re-explaining what a rotation does. |
| **Rooms inside a house / floor plan (subgroups)** | **07** | — | OK, unique to 07. |
| **Seed → grown plant ("grow a group from a seed")** | **08** | — | OK, unique to 08. |
| **Chocolate bar cut into equal slices (cosets)** | **09** | — | OK, unique to 09. |
| **Costume / disguise / "same group in different clothes"; translation dictionary** | **10** | 01 & 05 plant "in disguise" | **Offender:** "in disguise" leaks into 01 ("one group or another in disguise"), 02 ("identity/inverse distinction in disguise"), and 10's title/summary/body. **Decision:** 10 owns "disguise / costume / dictionary" as a set-piece. 01 may keep its single "in disguise" as foreshadowing; **02's "in disguise" should be cut** (it's a throwaway, not load-bearing). See §4. |
| **Light switches (`$\mathbb{Z}_2 \times \mathbb{Z}_2$`)** | **10** | — | OK, unique to 10. |
| **Ladder with rungs (group → ring → field)** | **11** | — | OK, unique to 11. |

---

## 4. Stock-Phrase Caps

These phrases are doing real work the *first* time and dead weight afterward. For each: keep the
**single strongest instance** in the listed owner, cut or rephrase the rest. Counts are from the
shipped modules.

| Phrase | Occurrences (modules) | Cap | Keeper | Cut/rephrase elsewhere |
|---|---|---|---|---|
| **"Hold that thought" / "Hold onto that" / "Hold those facts"** | 02 (×2: "Hold that thought" / "…too"), 01 ("Hold onto that"), 07 ("Hold onto that pair"), 11 ("Hold those two facts") | **2 total across the course** | 02's first "Hold that thought" (line 86) — it's the cleanest setup-for-payoff | Cut 02's second "Hold that thought too" → "and note this one as well." 01/07/11: replace with varied phrasing ("Keep that in view", "File that away", "Note the pair `$3$` and `$6$`"). |
| **"the whole point / the whole idea / the whole module / the whole trick / the entire idea / the whole job"** | 01 ("the whole point" ×1, "that is the whole point"), 02 ("the whole idea", "the whole point"), 06 ("the whole point"), 07 ("the whole idea of this module"), 08 ("the whole module"), 09 ("the whole trick", "the entire idea"), 11 ("the whole point", "the whole module") | **1 per module, max** | Let each module keep its single strongest "whole ___" if it lands; **09 must drop one** ("the whole trick" *and* "the entire idea" within two paragraphs — keep "the whole trick", cut "That is the entire idea"). | 11 has "the whole module" (line 65) and "the whole point" (line 149) — keep "the whole point", rephrase line 65 to "the rest of the module unpacks them." |
| **"one X is enough" / "one ___ is enough to disqualify/sink it"** | 03 ("One counterexample is enough"), 04 ("One missing inverse is enough", "Naming *any* failing axiom is enough"), 05 ("one honest difference is enough"), 06 ("a single counterexample… is all it takes"), 07 ("One escape is enough", "one failure is enough"), 09 ("one nonzero element… is enough" via 11), 11 ("One nonzero element without an inverse is enough") | **1 per module** | The counterexample logic genuinely recurs, so it earns one instance each — but **07 uses it twice** ("One escape is enough" + "one failure is enough" two paragraphs apart). Keep "One escape is enough"; cut the second. | Vary the wording across modules so it doesn't read as a tic: "a single counterexample sinks it", "that one failure disqualifies it", "you need only one." |
| **"no accident / not a coincidence / not an accident"** | 02 ("not a coincidence of the number 3"), 05 ("That is not an accident"), 06 (—), 08 ("no accident"), 10 ("not a coincidence, and… not a curiosity") | **1 per module** (already roughly met) | Keep each — they mark genuine foreshadowing. | 10's "not a coincidence, and it is not a curiosity" is the strongest; keep it. Ensure no module stacks two. |
| **"in disguise"** | 01 ("in disguise"), 02 ("in disguise"), 10 (title + summary + body) | **10 owns it** (set-piece); 01 keeps one (foreshadow) | 10 (the costume module) | **Cut 02's "in disguise"** (line 138) → "This is the identity/inverse distinction again." |
| **"the trap / the tempting wrong answer / a tempting wrong answer / classic trap"** | 02 ("tempting wrong answer", "classic trap"), 03 ("tempting wrong answer"), 04 ("Here is the trap", "tempting wrong answer"), 05 ("the trap", "tempting wrong answer"), 07 ("the tempting trap"), 08 ("common trap"), 09 ("tempting mistake"), 10 ("that's the trap") | **1 per module** | The "common-misconception" beat is a deliberate pedagogical device (and per `course-design.md`, surfacing misconceptions is wanted) — so keep one per module, but **standardize the label**. | Pick **one** standard phrasing for the misconception callout — recommend **"A tempting wrong answer:"** — and use it consistently instead of cycling through "trap / classic trap / tempting mistake / common trap." 02 uses two ("tempting wrong answer" *and* "classic trap"): keep one. |
| **"same machine" / "the same machine"** | 10 (×3: "the same machine", "are the same machine") | **2 in module 10** | 10 | 10's worked examples say "same machine" three times; keep the two payoff lines, cut the middle one. Internal to 10 only. |
| **"combine, do-nothing, undo" (the triad)** | 01 (×5), 03 (echoed), 11 (×2, closing) | **01 owns it; 11 may close with it** | 01 (coinage) + 11 (bookend) | Fine as-is — this is a deliberate motif. Just ensure 02–10 don't *re-coin* it; they may *reference* it. (03 re-states it as the four-questions list, which is OK.) See also §1.6 on "do-nothing." |

---

## 5. Voice Target

Write as **one narrator across all eleven modules**: a warm, plain-spoken classic-style
storyteller who turns the reader's head toward something real and trusts them to keep up. The
register is *concrete first, name second* — meet the idea in the hands (a paper triangle, a
clock hand sweeping past twelve, two switches flipping) before the term lands, then state the
definition cleanly and never hedge it. Sentences are mostly right-branching and end on a strong
stressed word; abstractions get unpacked into objects a reader can picture; the formal math
(definitions, theorems, proofs) stays crisp and is **never** prettified — literary-maverick
styles the prose *around* the math, not the math itself (`_config/math-style.md`). The voice is
bold but disciplined: it will open a module with a small scene and close with a forward-looking
promise, but it won't perform cleverness or pile on soggy intensifiers.

**Current drift to correct — warm → dry.** Modules **01 and 11 are the lyrical poles** ("The
square keeps its own secret"; "a square that kept a secret… the pattern *combine, do-nothing,
undo*") and set the target register. Modules **09 and 10 drift drier and more clinical** — 09
leans on bare exposition ("Here is the picture to carry with you… The claim is that…") and 10
front-loads abstract "machine/wiring" framing before giving the reader anything to hold. **Fix:**
bring 09 and 10 up to the 01/11 warmth — lead each with a concrete image (09: the chocolate bar
*before* the coset abstraction; 10: the two Cayley tables side by side *before* "wiring vs.
labels"), and trim their explanatory throat-clearing ("Here is the picture to carry with you",
"Think of a group as a machine") to a single concrete opening. Conversely, don't let 01/11's
lyricism metastasize: the warmth is in the *images and the rhythm*, not in extra adjectives.
The test for every module: read its hook and recap aloud back-to-back with module 01's — they
should sound like the same person.
