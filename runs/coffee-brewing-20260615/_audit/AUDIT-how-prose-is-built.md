# How a Course Is Built — From the Perspective of Prose

*An audit with a live test run. The worked example is the `coffee-brewing` run; the featured module
is **Module 02, "The Four Levers"**, traced from constraint → raw draft → edited.*

---

## Part 1 — The machine, in human terms

A course's prose is not written in one go by one author. It is **grown on a skeleton, in parallel,
by blind authors, and then reconciled by a single editor.** Six stages, but only four of them touch
words a learner will read:

| Stage | What it does to the prose |
|------|----------------------------|
| **01 Research** | Gathers facts. **Writes no learner-facing prose** — it's a dossier of concepts, hooks, and "common pitfalls" for later stages to draw on. |
| **02 Curriculum** | Decides the *shape* (one big idea per module, in order) and writes the **`canon.md`** — the single most important prose-governing artifact. No prose yet, but every constraint the prose must obey is fixed here. |
| **03 Authoring** | **Where prose is born.** One sub-agent per module, **working blind to the others, in parallel.** Each grows a full module from its spec + the canon + the house voice. |
| **04 Editorial** | **Where prose is reconciled.** *One* editor reads **all modules together** and rewrites them so they read as a single book. Edits **prose only**. |
| **05 Assembly** | Mechanical: pours the edited modules into the site, adds metadata + provenance. Barely touches prose (only the course-intro blurb). |
| **06 Verify** | Lints prose continuity, validates the schema, smoke-builds the site. |

### The two facts that explain everything

**1. Authoring is blind and parallel — on purpose.** Speed and independence come at a cost: blind
authors *drift*. They re-explain the same idea, name the same thing differently, open every module
the same way, and wander in tone. The system accepts this cost because the alternative (one author
writing 11 modules in sequence) is slow and still drifts. The drift is **designed to be cleaned up
downstream**, not prevented upstream.

**2. The `canon.md` is the leash, and the editor is the hand holding it.** Because the authors can't
see each other, they're each handed the same contract at stage 02 — the canon — which fixes, *before
a word is written*:
- **one name per recurring thing** (a naming registry: "extraction", never "pulling flavour");
- **one owner per fact** (module 1 *owns* "what extraction is"; later modules **call back**, never
  re-derive);
- **one running image per module** (and a standing ban on images that point the wrong way — e.g. a
  "slot machine" for a deterministic process);
- **caps on stock phrases** (kill the third "perfect cup");
- **one voice target** (the narrator's temperature, in a sentence).

The canon reduces drift; the **editorial stage enforces what the canon couldn't prevent.**

### The voice the prose is held to

Prose is styled by one reference — `_config/voice/literary-maverick.md` — which is essentially
*Pinker's classic style* turned into a procedure. Its stance: **prose is a window onto a thing, not a
performance.** Show, don't announce. Concrete over abstract. Living verbs over "zombie nouns" (*decide*,
not *make a decision*). End sentences on a strong word. Break folklore grammar rules; keep the ones
that carry meaning. Crucially, it operates at **three scopes**, and the pipeline maps each scope to a
stage:

- **The phrase/sentence** (a 3-pass rewrite loop, tested on *relevance / effectiveness /
  appropriateness*) → the **author's** job in stage 03.
- **The whole piece** (no contradictions, one image per idea, no worn-flat tics, strong open *and*
  close, *don't expose the scaffolding*) → partly author, fully checked in **stage 04**.
- **The whole course** (one voice, one name for everything, remind-don't-re-derive, vary the edges)
  → **only** visible to stage 04, "because no single writer can see them."

### The one hard boundary: prose vs. formal

In a STEM course, the editorial pass is forbidden from touching **Definition / Theorem / Proof /
Example blocks or any equation** — they're frozen byte-for-byte (they answer to `math-style.md`, not
the prose loop). Editorial may only change a symbol *inside* a formal block when the canon's registry
demands it, and then identically everywhere. *(This run is a `skill` course, which has no formal
blocks, so the boundary is described here rather than demonstrated — everything in it is prose.)*

---

## Part 2 — The live run

I ran a real, scaled-down course through the pipeline: **`coffee-brewing`**, a 3-module `skill`
mini-course for an absolute beginner. Topic chosen because all three modules lean on **one shared
idea** (*extraction*) and **one shared taste-vocabulary** (*sour = under-extracted, bitter =
over-extracted*) — the exact conditions under which blind authors drift, so the editorial stage has
real work to do.

- **02 (me):** wrote `curriculum.md` + a `canon.md` engineered so the drift would be visible.
- **03 (3 sub-agents, parallel, blind):** each wrote one module from its spec + the canon + the
  voice references, *without seeing the other two*.
- **04 (1 sub-agent):** read all three together and reconciled them against the canon, emitting edited
  modules + an `editorial-report.md`.

Every stage's output is on disk under `runs/coffee-brewing-20260615/NN_*/output/`, so the "how it
changes over time" is literally the file history: `03_authoring/output/` is the raw draft,
`04_editorial/output/` is the edited version, same filenames.

### What the blind authors actually did (the drift, measured)

Even with a decisive canon, the three drafts diverged exactly where the theory predicts:

| Drift | Where it showed up |
|------|--------------------|
| **Voice temperature** | M1 & M3 warm and second-person; **M2 went clinical** — bold "Finer grind → more extraction" stamps, a reference table, a bare recitation of °C thresholds. |
| **Off-canon naming** | M2 wrote extraction "**pulls flavour** out" — the one phrase the canon's registry explicitly bans. (M3 had one "pulling" too.) |
| **Exposed scaffolding** | M1 & M3 shipped visible `## The hook` / `## Framework / principles` headings (the voice ref forbids naming the device); M2 didn't — so headings were also *inconsistent*. |
| **Un-varied edges** | M2 & M3 opened on the **same move** (cup tasted wrong → you did the obvious wrong thing); M1 & M2 closed on the **same** "the next module…" formula. |
| **Extra metaphors** | M2 invented *two* images (a sugar cube, a guitar) where the canon wanted one. |
| **Re-derivation** | M3 re-taught *why* under-extraction tastes thin — content module 1 owns. |

Naming mostly held and callbacks mostly held — because the canon told the authors to call back. The
canon **reduced** drift; it did not **eliminate** it. That gap is the editor's entire job.

---

## Part 3 — One module, over time: "The Four Levers" (M02)

M02 is the richest specimen because it drifted the most. Here is its life.

### Stage 02 — the constraint (before any prose)

The canon fixed, in advance, that M02 **owns** "the four levers," must **call back** to extraction +
the compass (owned by M01) rather than re-derive them, must use the names *extraction / grounds /
brew ratio / levers* (and *not* "pulling flavour" or "knobs"), and must sound like "a warm,
plain-spoken friend who knows coffee cold."

### Stage 03 — the raw draft (blind author)

The author covered the content correctly and completely — but under the pressure of writing a clean
reference, the **voice drifted clinical**, and it tripped three canon wires:

> Remember the core idea from module 1: extraction is the dissolving-over-time process that **pulls
> flavour out** of the grounds and into your water. […]
> **Finer grind → more extraction. Coarser grind → less extraction.**
> Think of it like dissolving sugar. A sugar cube dissolves slowly in cold tea. […]
> *(recap)* …these levers tell you which **knob** to reach for. Module 3 puts it into practice…

Off-canon name ("pulls flavour", "knob"), encyclopedic stamps, a second metaphor (sugar), and a
recap closing on the same forward-pointer formula as M01.

### Stage 04 — the edited version (one editor, reading all three)

The editor changed **15 passages (~270 words reworked)** in M02 — by far the most of the three
(M01: 6 small hunks; M03: 10 hunks, net −72 words as re-derivations became callbacks). Each change
traces to a specific rule:

| Change | Rule it serves |
|--------|----------------|
| "pulls flavour out" → "water **draws soluble compounds out** of the grounds" | Canon §1 naming registry |
| "**Finer grind → more extraction.**" → "Grind finer and extraction goes up." | Voice target (kill the clinical stamp) |
| temperature recitation → "Hotter water extracts more, and faster. […] Below about 85 °C the cup tends to taste sour and grassy" | Voice target (warm the reference card; keep the numbers) |
| sugar-cube image **cut**; guitar image kept | "One idea, one image" / canon §3 |
| opening rewritten to lead on *"four predictable things"* instead of the wrong-move vignette | "Vary the edges" (M2≠M3 openings) |
| recap re-shaped so the forward-pointer is embedded, not the closing beat | "Vary the edges" (M1≠M2 closings) |
| "which **knob** to reach for" → "which **one** to reach for" | Canon §1 naming registry |

**Before → after, the signature fix:**

> **03:** *"…extraction is the dissolving-over-time process that pulls flavour out of the grounds…
> **Finer grind → more extraction. Coarser grind → less extraction.** Think of it like dissolving
> sugar…"*
>
> **04:** *"Extraction — the dissolving-over-time process from module 1, where water draws soluble
> compounds out of the grounds — responds to four inputs you can actually control… Grind finer and
> extraction goes up. Grind coarser and extraction goes down. You can feel why: a coarser grind
> keeps more of the bean's interior locked away from the water…"*

Same facts, same teaching, same table. What changed is the **register** (friend, not manual), the
**names** (on-canon), the **image budget** (one), and the **edges** (no longer a stamped twin of its
neighbours). **No information was deleted** — only re-teaching was compressed to callbacks and clinical
phrasing was warmed.

---

## Part 4 — What this tells you about the machine

1. **The prose is a negotiation between speed and coherence.** Blind parallelism buys speed; the
   canon + editorial pass buy coherence back. Neither half works alone — a canon with no editor leaves
   drift on the page; an editor with no canon has nothing to enforce.
2. **The single highest-leverage prose artifact is written before any prose exists** — the `canon.md`
   at stage 02. Get the names, owners, images, and voice target right there and the whole course holds
   together; get them wrong and every module inherits the mistake.
3. **The editorial stage is the only place the course is seen whole.** Voice-leveling,
   vary-the-edges, and remind-don't-re-derive are *invisible to every individual author by
   construction*. That's why the pipeline spends a whole stage, with a human review gate, on it.
4. **"Style" here is mechanical where it can be and semantic where it must be.** A linter
   (`lint-prose.mjs`) catches tics and worn-flat phrases; but "does this metaphor point at the right
   thing?" and "does this voice match its neighbours?" are judgement calls a model/human makes by
   reading — which is exactly what stage 04 is for.
5. **A good canon makes the editor's job smaller, not nonexistent.** In this run, naming and callbacks
   *mostly* held because the authors were briefed; the residual drift (voice, edges, one banned phrase,
   an extra image) is what survived a *good* canon — and it was still enough to rework a quarter of one
   module.

*Artifacts: `runs/coffee-brewing-20260615/` — `02_curriculum/output/canon.md` (the constraint),
`03_authoring/output/*` (raw), `04_editorial/output/*` (edited) + `editorial-report.md` (the gate's
changelog).*
