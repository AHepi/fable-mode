---
name: editorial-craft
description: The whole-piece and whole-course discipline — reading many pieces as one book. The editorial scope that the sentence-level rewrite engine cannot see.
---

# Editorial Craft — reading many pieces as one book

The discipline of the **whole piece** and the **whole course**. This is the **L3 reference for the
editorial stage (`pipeline/04_editorial`)** — the scope `_config/voice/literary-maverick.md` (the
sentence/passage engine) cannot reach.

A page can pass every local test and still fail as a whole; a *course* of many pieces fails in ways no
single writer, working blind and in parallel, can catch. That is this stage's job. Read everything
together, against the **canon** (which fixes the names, owners, metaphors, and caps before anyone
writes), and alongside `_config/course-design.md` ("Earn the reader's time") and `_config/math-style.md`
(the bridge). literary-maverick is the engine for the phrase, the sentence, the passage; this is the
engine for the book.

> **Precedence (prose ↔ pedagogy).** When prose and teaching conflict, apply the rule in
> `_config/course-design.md` ("When prose and pedagogy conflict"): prose leads only on **stakes,
> analogies, historical/philosophical context, and inter-module transitions**; pedagogy leads
> everywhere else. The editor adjudicates by it — protect a crafted stakes/analogy/context/transition
> passage from over-zealous trimming, but yield prose flourish that blurs a definition, drops a
> retrieval check, or pads the teaching.

---

## The whole piece

Before calling a single page (a module, an essay) done, read it start to finish as one object and check
what only the whole reveals:

- **Logical coherence.** No section may contradict another. If you define a thing one way and later
  describe it as if it could be otherwise, a sharp reader trips. Trace the claims across sections, not
  just within them.
- **One idea, one image.** A vivid metaphor used once lands; the same idea dressed in five different
  metaphors across one page is busyness, not richness. Pick the strongest image for each idea and let
  the others go.
- **No word or image worn flat.** Count the tics. If "machine" appears eleven times, or one phrase opens
  three paragraphs, the repetition has stopped being emphasis and become wallpaper. (Domain terms that
  *must* repeat are exempt — "group" in a group-theory lesson is not a tic.)
- **A strong opening *and* a strong close.** The local loop guards opening lines; the whole-piece read
  must guard closings too. End on a strong, stressed word — not an administrative mumble ("…in the next
  section") and not a deflating "is just a."
- **Don't expose the scaffolding.** Section labels that name the *device* ("The hook", "Intuition")
  belong in the outline, not as visible headings; classic style shows the thing, it doesn't announce the
  move.

### Metaphors must point true, pay off, and bridge

An image is a loan against the reader's trust, and a bad one costs more than it buys. Before a metaphor
is allowed to carry an idea, hold it to three tests — and if it can't clear all three, cut it. A clean
concrete *shape* the definition can be read straight off beats a vivid image that misleads.

- **Point true.** The picture must aim at exactly **one** correct real-world referent and drag no wrong
  association in behind it. "A machine with slots and a crank" sounds harmless until you hear the slot
  machine in it — gambling, chance, randomness — the opposite of the deterministic operation you meant.
  The reader's first instinct is the one that sticks; if the nearest association is wrong, the image has
  already lied. One referent, the right one, or none.
- **Pay it off.** A metaphor announced as central and then dropped is a debt left unpaid — the reader
  keeps waiting for the crank to turn again and it never does. If you raise an image, develop and reuse
  it; don't strand it after one sentence.
- **Cash it in.** Every piece of the image must map onto the thing it motivates. If the machine has two
  slots, say what the two slots *are*; if it has a crank, say what turning it *does*. An image not spent
  on the content is decoration, and decoration in a lesson is noise.

When no image survives all three, write none. A plain exact shape — "two things go in, one comes out, and
what comes out is fixed by what went in" — is the honest version of what the broken metaphor pretended
to do. And wherever an intuition hands off to a formal definition, owe the reader the connective passage
that maps the picture onto the notation, piece by piece — never set an image beside a definition and
trust them to find each other. (That handoff is the **bridge**; `_config/math-style.md` makes it a rule.)

---

## The whole course

When many pieces share one reader and one subject, they must read as one book, not a stack of strangers.
Before a course ships, hold the whole set to these:

- **One voice.** The narrator's temperature must not wander from warm storyteller to dry clinic between
  pieces. Level it.
- **Name everything the same way, everywhere.** One symbol per object, one name per recurring thing,
  across every piece — a thing renamed between consecutive pieces (the same object called `s` here and
  `f` there) reads as a *new* thing.
- **Remind, don't re-derive.** A one-line callback ("the result we built earlier") earns its place;
  re-teaching a settled result from scratch piece after piece tells the reader you don't trust them to
  have learned. Decide once which piece *owns* each idea; everywhere else, call back.
- **Density — advance, don't pad.** The worst whole-course failure is one idea restated for hours (the
  JEPA-redo lesson). If the pieces circle a single point, **compress**: collapse pieces that only restate
  it, and cut within-module repetition past its first strong statement. Every piece must break new
  ground. (Operational rules: `course-design.md`, "Earn the reader's time".)
- **Confidence, not comfort.** Level out any soothing, coddling register and the manner-adverb tics
  (*gently, quietly, silently, simply*) that ride with it — replace verb-plus-adverb with one strong
  verb. (`shared/scripts/lint-prose.mjs` checks 5–6 hard-flag a soothing-adverb tic and hand-holding
  phrases.)
- **Show the artifact (`stem`).** A mechanism explained in prose alone is under-built; every
  mechanism-bearing module should carry a diagram, equation, or worked computation. Flag any that ship
  without one.
- **Signpost only when it pays.** A forward/back pointer is worth it when it genuinely aids learning; the
  same "here's what's coming" promise made piece after piece is noise. Cap it.
- **Vary the edges — and the macro-shape.** If every piece opens with the same kind of move (an everyday
  analogy, a definition) and runs the same skeleton, the set feels machine-stamped however good each
  piece is. Vary how pieces *open and unfold* — a result, a worked case, a diagram, a contrast, a
  failure, real data — not only their first and last lines. Keep each strong *and* different.
- **Level-appropriate scaffolding.** Hold the course to its `level` (the dial in `course-design.md`
  §2): at `intro`, every abstract idea has an analogy or a picture, callbacks **re-gloss** the heavy
  nouns rather than merely name them, and no term is used that a beginner was never given. Strip-mining
  a beginner course of analogies and pictures for the sake of density is a failure this pass must catch.

These checks are not the writer's job alone — when work is produced in parallel, no single writer can see
them. They belong to this dedicated editorial pass, read against the shared canon.
