# Brand

Identity reference for Fable Academy. Read on any run that writes **course-facing copy**:
course titles, course descriptions, module summaries, taglines, and intro/landing text.
This file governs *how the brand sounds and presents*. Prose craft lives in
`_config/voice/literary-maverick.md`; structure in `_config/course-design.md`; formal
content in `_config/math-style.md`.

---

## Identity

- **Name**: Fable Academy.
- **Tagline**: *Learn a subject the way it deserves to be taught.*
- **Aesthetic**: **industrial brutalism / tactical telemetry.** One dark substrate, full
  commitment (no light/dark alternation): a near-black CRT canvas (`#0a0a0a`) with white-phosphor
  text and a single **hazard-red** accent (`#e61919`) used exclusively. Oversized heavy grotesk
  headers in uppercase with compressed line-height carry the chrome and catalog; monospace,
  bracketed **telemetry** labels (`[ SUBJECT ]`, `// FILTER`, `>>>`) carry metadata. Hard
  90-degree corners everywhere, solid 1px/2px rules and grid-determinism dividers, hard-offset
  shadows on interaction, a subtle CRT scanline overlay. **Banned:** gradients, soft shadows,
  translucency, rounded corners, and any second accent colour. Subjects are differentiated
  **typographically**, not by colour. The one concession: the reading surface *inside* a lesson
  stays legible (comfortable measure, normal case) so the drama lives on the wayfinding while the
  content stays readable. Motion is sharp and motivated; reduced-motion honoured.

---

## Voice and tone for course-facing copy

The brand voice is **warm, precise, confident — never hypey.**

- **Warm**: speak to one reader, like a knowledgeable friend who respects them. Inviting,
  not stiff.
- **Precise**: say what the course actually is and does. Concrete nouns, real subject
  matter, accurate scope.
- **Confident**: state things plainly. No hedging, no apology, no "we hope you'll enjoy."
- **Never hypey**: no superlatives, no urgency, no exclamation points, no marketing
  inflation. Banned moves: *revolutionary, ultimate, master X in N days, unlock,
  game-changing, the only course you'll ever need, transform your life, secrets.* If a
  line would fit a late-night ad, cut it.

The reader is sharp and busy. Earn attention with a real, contentful promise about what
they'll be able to do — not with volume.

---

## Course titles

- **Plain and specific.** Name the subject. "Linear Algebra, From Pictures" beats
  "Mastering the Math of the Matrix."
- Title Case. No trailing punctuation. No colons-with-buzzword subtitles unless the
  subtitle adds real information.
- A little character is welcome if it stays accurate and calm — a title can have a point
  of view ("Probability for the Stubbornly Skeptical") as long as it does not oversell.
- Keep it short enough to read at a glance.

## One-sentence course descriptions

- **Exactly one sentence**, ~12–30 words, that says what the course covers and what the
  reader will be able to do by the end.
- Concrete and honest about scope and level. Name the audience if it sharpens the
  promise.
- No hype, no filler clause like "in this course you will learn." Lead with the content.
- Good: *"A first course in calculus that builds the derivative and the integral from
  the single idea of a limit, for readers comfortable with algebra and functions."*
- Weak: *"An amazing journey into the exciting world of calculus that will change how
  you see math forever!"*

## Module summaries

- The `summary` field: **one sentence**, what this module teaches, observable and
  concrete. A reader scanning the table of contents should know whether they need it.
- Same voice as descriptions: warm, precise, no hype. It is a signpost, not a pitch.

---

## How the literary-maverick voice applies here

Marketing and intro copy — taglines, landing text, course descriptions, the hook at the
top of a module — are **prose**, so `literary-maverick` applies: strong openings, living
verbs, fresh images, run through the rewrite loop.

But two brand constraints rein the loop in (they live in the loop's **appropriateness**
test):

1. **Accuracy outranks vividness.** A description must be true to the course's real
   content, scope, and level. A line that is vivid but oversells fails appropriateness —
   discard it. Never let rhythm talk you into a promise the course doesn't keep.
2. **Match the room: warm and calm, never hypey.** The maverick boldness here shows up
   as a *clean, confident* line, not a loud one. Edgy-for-its-own-sake and ad-copy
   energy both fail the appropriateness test for this brand.

So: use the rewrite loop to make course-facing copy *clear and alive*, then check every
candidate against "is this true?" and "is this calm and warm?" before locking it.

---

## Quick checklist for course-facing copy

- [ ] Title is plain, specific, accurate; Title Case; no hype.
- [ ] Description is one honest sentence stating coverage + what the reader can do.
- [ ] Module `summary` is one concrete sentence; a useful signpost.
- [ ] Voice is warm, precise, confident; zero hype words, zero exclamation points.
- [ ] Every claim is true to the course's real content and `level`.
- [ ] Prose was sharpened via `literary-maverick`, then passed the accuracy + calm-tone
      check.
