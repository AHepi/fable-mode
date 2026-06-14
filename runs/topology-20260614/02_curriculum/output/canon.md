# Canon — Topology Course Style & Consistency Bible

The consistency contract for **Topology, From the Coffee Mug** (11 modules). Written at the
curriculum stage, **binding** on every authoring sub-agent and on the editorial stage. Its job is
to stop blind-parallel authors from drifting apart. Every entry is a decision, not a suggestion —
one call per item, no "TBD"s.

These are 11 chapters of **one book by one narrator**, not 11 essays. A fact taught once is *owned*
once; later modules call back to it, they do not re-teach it.

---

## 1. Symbol & naming registry

One symbol and one name per recurring object. Left column is canonical; use it everywhere.

| Thing | Canonical symbol / name | Notes / legitimate exceptions |
|-------|-------------------------|-------------------------------|
| A topological space | `$(X, \tau)$` — space `$X$`, topology `$\tau$` (tau) | When only the underlying set matters, plain `$X$` (and `$Y$`, `$Z$` for others). |
| A generic open set | `$U$` (then `$V$`, `$W$`) | |
| A point of a space | `$x$` (then `$y$`); a *distinguished/removed* point | `$p$` |
| Neighborhood of `$x$` | "neighborhood"; symbol `$N$` when one is needed | Defined in 02; used sparingly. |
| Open ball / open disk of radius `$r$` about `$x$` | `$B(x, r)$` | Call it an **open disk** in `$\mathbb{R}^2$`, **open interval** on `$\mathbb{R}$`, **open ball** generically. |
| A function / map | `$f : X \to Y$` | |
| **Preimage** of `$U$` under `$f$` | `$f^{-1}(U)$` | **NOTATION COLLISION — see §1.1. This is the preimage of a set, NOT an inverse function.** |
| Inverse map of a homeomorphism | `$f^{-1}$` (a genuine inverse function) | Only exists once `$f$` is known to be a bijection (module 05). |
| Homeomorphism / "homeomorphic" | `$f$` is a homeomorphism; `$X \cong Y$` ("`$X$` is homeomorphic to `$Y$`") | Not homeomorphic: `$X \not\cong Y$`. |
| The real line / the plane | `$\mathbb{R}$` / `$\mathbb{R}^2$` | |
| Open interval / closed interval | `$(a,b)$` / `$[a,b]$` | half-open `$[a,b)$` only where P2/P8 need it. |
| Empty set / whole space | `$\varnothing$` / `$X$` | Both are open in every topology (03). |
| The sphere / the torus | "the sphere" `$S^2$` / "the torus" `$T^2$` | Introduce the word first, the symbol second (08). |
| Genus | `$g$`; "the number of holes/handles" | informal throughout (08). |
| Euler characteristic | `$\chi$` (chi); `$\chi = V - E + F$` | Sphere `$\chi = 2$`, torus `$\chi = 0$` (10). |
| Vertices / edges / faces | `$V$` / `$E$` / `$F$` | counts, in `$\chi = V - E + F$` (10). |

### 1.1 The `$f^{-1}$` collision — handle it explicitly

`$f^{-1}(U)$` (preimage of a *set*, module 04) and `$f^{-1}$` (the *inverse function* of a
homeomorphism, module 05) are the same glyph for two different ideas. This is a genuine
stumbling block, not a thing to paper over.

- **Module 04 owns the preimage.** It must state, in plain words, that `$f^{-1}(U)$` means
  "every point that lands in `$U$`," and that **this makes sense even when `$f$` has no inverse** —
  the symbol here is a name for a set, not a function being applied.
- **Module 05** (homeomorphism), when it first uses `$f^{-1}$` as an actual inverse map, must add
  one clause: "now `$f^{-1}$` is a genuine function — the way back — because `$f$` is a bijection;
  earlier (module 04) the same symbol named a *preimage set*, which needs no inverse to exist."
- Do not silently switch meanings. The one-line callback in 05 is mandatory.

### 1.2 Naming the big words on first use

Gloss each technical term in plain words on first contact, then use the term:
- **open set** — "a set where every point has room around it" (02 owns the gloss).
- **topology** — "the chosen collection of open sets" / "the rulebook of open sets" (03).
- **continuous** — "no tearing: nearby points stay nearby" → then the preimage definition (04).
- **bijection** — "a perfect pairing: one-to-one and onto, nothing left over" (05).
- **homeomorphism** — "rubber-sheet sameness" / "the same shape up to deformation" (05; the
  intuition is owned by 01, the word by 05).
- **topological invariant** — "a property deformation can't change" (06).
- **connected** — "one piece" (06).
- **orientable** — "has a consistent front and back" (09).
- **Euler characteristic** — "a number you get by counting corners, edges, and faces" (10).

---

## 2. "Already-taught" ledger & dedup plan

One **owner** module gives the full treatment; every later use is a one-line **callback**, never a
re-derivation. (A reminder is good; a fresh re-derivation is the bug.)

| Fact / idea | OWNER (full treatment) | Callback in | Suggested callback line |
|-------------|------------------------|-------------|-------------------------|
| **mug = doughnut**; the deformation idea | **01** | 05, 08, 10, 11 | "the mug-and-doughnut deformation from module 01" |
| **Allowed vs. forbidden moves** (stretch/bend/twist yes; tear/glue no) | **01** | 03, 04, 05, 08, 09 | "the no-tearing, no-gluing rule from module 01" |
| **Open set** ("room around every point") | **02** | 03, 04, 05, 06 | "open sets — room around every point, module 02" |
| **The three topology axioms** | **03** | 04, 06 | "the open-set rules from module 03 (∅ and X, unions, finite intersections)" |
| **Preimage** `$f^{-1}(U)$` | **04** | 05 | "the preimage `$f^{-1}(U)$` from module 04 — every point that lands in `$U$`" |
| **Continuity = preimages of open sets are open** | **04** | 05, 06 | "continuity in the module-04 sense (preimages of open sets stay open)" |
| **Homeomorphism** (formal) | **05** | 06, 07, 10, 11 | "a homeomorphism (module 05): a continuous bijection with continuous inverse" |
| **The invariant logic** (differing invariant ⇒ not homeomorphic; matching proves nothing) | **06** | 07, 08, 10, 11 | "the invariant logic from module 06: one differing invariant proves the shapes differ" |
| **Connectedness** ("one piece") | **06** | 07, 11 | "connectedness from module 06" |
| **Cut/removal technique** (remove a point, count pieces) | **07** | 11 | "the cut-and-count move from module 07" |
| **Surfaces & genus** (hole count; through-hole ≠ dent) | **08** | 10, 11 | "the hole count (genus) from module 08" |
| **Orientability / Möbius one-sidedness** | **09** | 11 | "the one-sided Möbius band from module 09" |
| **`$\chi = V - E + F$`; sphere = 2, torus = 0** | **10** | 11 | "by module 10, `$\chi(\text{sphere}) = 2$` and `$\chi(\text{torus}) = 0$`" |

**Spiral note (not a duplication):** module 01 gives the *intuitive* homeomorphism and module 05
gives the *formal* one. 05 must open by explicitly **re-meeting** 01's mug-and-doughnut and saying
"now we make this precise," not by re-explaining deformation from scratch.

---

## 3. Metaphor-ownership map

One running image per module; other modules may *reference* it, they don't reinvent it.

**Ownership is not endorsement.** A metaphor earns a row only if it (1) points at exactly **one
correct** referent with no misleading association, (2) is **paid off** — developed and reused, not
announced then dropped, and (3) can be **cashed into** the formal content, each piece mapped onto
the notation it motivates. A candidate that fails any test is **cut** — replaced with a clean
concrete shape or with no image — not assigned an owner. (See `_config/voice/literary-maverick.md`,
"Metaphors must point true, pay off, and bridge," and `_config/math-style.md` §1.)

| Image / metaphor | Owner | May be referenced by | Notes |
|------------------|-------|----------------------|-------|
| **Rubber sheet / soft clay; the mug deforming into the doughnut** | **01** | all (the course spine) | The one image the whole course leans on. Cash it out: stretching = a continuous map, the way back = its inverse. Tearing/gluing = the forbidden moves. |
| **Elbow room: standing somewhere with space on all sides** | **02** | 04 (continuity preserves "room") | Cashes into the open-set definition: "room around every point" = a small ball `$B(x,r)$` still inside the set. |
| **A rulebook / admission rules for the club called "Open"** | **03** | — | Use lightly. Cashes into the three axioms (charter members ∅ and X; unions always admitted; finite intersections admitted). If it starts to strain, drop it and state the axioms straight. |
| **No tearing: the map keeps neighbors together** | **04** | 05 | Cashes into "preimage of an open set is open." Do **not** use the calculus "draw without lifting your pen" picture except to *reject* it (P7). |
| **A perfect two-way dictionary / translation with no word left out** | **05** | — | Cashes into bijection (every word paired) + continuity both ways (the translation and its reverse both preserve meaning = both continuous). |
| **A fingerprint that survives every disguise** (invariants) | **06** | 07, 10, 11 | Cashes into "preserved by every homeomorphism." Pairs with the detective frame (a clue). Keep "fingerprint" to 06's coinage; later modules *reference* it. |
| **Snip and count the pieces** | **07** | 11 | Cashes into the cut/removal argument. A real, do-it-with-scissors picture. |
| **A through-hole you can thread a string / finger through** (genus) | **08** | 10, 11 | Cashes into genus. Explicitly contrast with a *dent/bowl* (P5): a bowl has no string-hole. |
| **A paper strip with a half-twist** (Möbius) | **09** | 11 | This is a **real object**, not a metaphor — have the reader build it. The tracing/cutting experiments are the payoff. |
| **A shape's counting number** (`$\chi$`) | **10** | 11 | Cashes into `$V - E + F$`. The hook: every sphere-like polyhedron scores 2. Avoid "magic number" — say "a number you compute by counting," which is literally true. |
| **The detective: invariants are clues that can convict but not acquit** | **11** | — | Cashes into P9: a *differing* clue convicts (proves the shapes different); *matching* clues never acquit (never prove them the same). Bookends the course. |

---

## 4. Stock-phrase caps

Phrases that go limp through repetition. Keep the single strongest instance; cut or vary the rest.

| Phrase | Cap | Keeper / owner | Note |
|--------|-----|----------------|------|
| **"no tearing, no gluing" (and variants)** | 1 full statement (01) + short callbacks | 01 owns the full rule | Later modules may say "no tearing (module 01)" but must not re-explain why gluing is banned. It is the course mantra — reference it, don't re-lecture it. |
| **"the whole point / the whole idea / the whole trick"** | 1 per module | each module its strongest | Never stack two in one module. |
| **"A tempting wrong answer:"** (misconception callout) | 1 per module, **standard wording** | — | Standardize on exactly this label for the pitfall beat; do not cycle through "the trap / classic trap / common mistake." Surfacing misconceptions is wanted (`course-design.md §5`), but with one consistent label. |
| **"not a coincidence / no accident"** | 1 per module | — | Reserve for genuine foreshadowing (e.g. "the cube and the tetrahedron both score 2 — no accident," module 10). |
| **"same shape" / "the same shape"** | unmetered in 01/05 (it is the topic), but avoid as filler elsewhere | 01, 05 | Elsewhere prefer "homeomorphic" once the word exists. |
| **Physical-imperative hooks ("Cut…", "Take…", "Pick up…", "Tape…")** | at most ~3 modules may open this way | — | 09 (build a Möbius band) has the strongest claim. Vary the other openings (a question, a scene, a puzzle) so 11 hooks don't read as machine-stamped (`course-design.md §1`). |

---

## 5. Voice target

Write as **one narrator across all eleven modules**: a warm, plain-spoken classic-style
storyteller who turns the reader's head toward something real — a clay mug, a paper strip, a cube
you can count in your hand — and trusts them to keep up. The register is **concrete first, name
second**: meet the idea as an object before the term lands, then state the definition cleanly and
never hedge it. Sentences are mostly right-branching and end on a strong stressed word;
abstractions get unpacked into things a reader can picture. The formal math (definitions, the
continuity and homeomorphism statements, the χ computation) stays crisp and is **never**
prettified — literary-maverick styles the prose *around* the math, not the math itself
(`_config/math-style.md`).

This course's particular risk is **the formal middle going cold**: modules 02–05 (open sets,
topology axioms, continuity, homeomorphism) are where abstraction is densest and the prose is most
tempted to turn into a definitions-dump. Hold those four to the warmth of module 01 — lead each
with a concrete picture (02: standing in an open field with room on all sides; 03: a rulebook you
can violate; 04: a map that tears the fabric vs. one that doesn't; 05: the mug and doughnut again,
now made precise) before the formalism. Conversely, the hands-on modules (09 Möbius, 10 counting)
must not get so chatty they bury the result. The test for every module: read its hook and recap
aloud back-to-back with module 01's — they should sound like the same person.
