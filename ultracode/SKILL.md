---
name: ultracode
description: >
  Maximum-rigor coding mode. Activates aggressive multi-agent orchestration for software
  engineering: parallel codebase exploration, planned diffs, test-first implementation, and
  hard verification gates between stages. Use this skill for high-stakes or large-surface code
  work — multi-file refactors, new subsystems, tricky bug hunts, migrations, or anything where
  a one-shot edit would likely miss edge cases. Trigger when the user says "ultracode", "enable
  ultracode mode", "do this properly", "no shortcuts", or when a coding task spans many files or
  carries real correctness/regression risk. Prefer this over a naive edit whenever the blast
  radius is large or the cost of a wrong change is high.
---

# Ultracode Mode

Ultracode is `fable-mode` specialized for code. Same discipline — decompose, delegate, verify —
but every stage is tuned to how software actually breaks: hidden callers, untested error paths,
implicit invariants, and changes that look local but aren't.

The governing rule: **never edit code you haven't read, and never advance past a stage you
haven't verified.**

## The Loop

**1. Map the blast radius (before any edit)**
Write the stage plan first. For a code task that means answering, on paper:
- What files/symbols does this touch, and who calls them?
- What invariants must hold after the change that held before?
- What's the smallest diff that fully satisfies the requirement?

Number the stages with an expected, checkable output for each:
```
Stage 1: Locate all call sites of X    → list of files:lines
Stage 2: Characterize current behavior → 2-3 sentences + the test that proves it
Stage 3: Plan the diff                 → per-file change description
Stage 4: Implement                     → edits applied
Stage 5: Verify                        → tests/build green, error paths walked
```

**2. Fan out exploration to subagents (Agent tool)**
This is where ultracode earns its name. Reading a large codebase serially is slow and burns
context. Instead, spawn `Explore` / `general-purpose` agents in parallel — in a *single message
with multiple Agent calls* — for independent questions:
- "Find every caller of `foo()` and how they handle its return"
- "Map the test coverage around module Y"
- "Trace where config value Z originates and who consumes it"

Each agent returns a conclusion, not a file dump, so you keep the signal and not the noise.
Delegate independent work; never serialize what can run concurrently. Do **not** split a single
coherent edit across agents just to look busy — delegation is for independent investigation and
independent edits, not for fragmenting one change.

**3. Plan the diff, then execute it**
Don't improvise edits. Once exploration lands, describe the change per file before touching
anything. A planned diff catches "oh, this also breaks the caller in module C" *before* you've
written it three times. Match the surrounding code's style, naming, and idioms — the best diff
is the one that looks like it was always there.

**4. Test alongside, not after**
Write or identify the test that proves the behavior before/while implementing. If the change
fixes a bug, first reproduce it with a failing test. If it adds a feature, the test is the spec.

**5. Verification gate (mandatory between stages)**
A stage is not done because the edit applied. It's done when:
- The build compiles / linter passes.
- Relevant tests run **and pass** — actually run them, don't assume.
- You've walked the **error paths**, not just the happy path: nulls, empties, concurrent access,
  partial failure, the caller that ignores your return value.
- The diff is minimal — no drive-by changes smuggled in.

If verification fails, fix it before advancing. The cost of catching a regression at stage 3 is
trivial; at stage 8, after five dependent edits, it's a rollback.

**6. Skeptical self-review before delivery**
Read your own diff as a hostile reviewer would. Name at least one real weakness — a missed edge
case, an untested branch, a perf cliff, an assumption that might not hold. Fix it or flag it
explicitly. Report results faithfully: if a test was skipped or a check failed, say so with the
output. Never claim "done and verified" for something you only assume works.

---

## Operating rules

- **Read before write.** Read the full relevant section — definition, callers, tests — before
  the first edit. No exceptions.
- **Parallelism is the default for investigation.** If two questions don't depend on each other,
  they go to two agents in one turn.
- **Minimal diffs.** Solve the stated problem and nothing else. Refactors are their own task.
- **Determinism over cleverness.** Prefer the obvious, debuggable implementation that the next
  reader will understand at a glance.
- **Branch hygiene.** Commit logically grouped changes with clear messages; never push to a
  branch you weren't asked to.

## When NOT to use ultracode

Small, local, low-risk edits — a typo, a one-line config change, a single obvious fix — don't
need the full loop. Ultracode's overhead pays off when the surface is large or the cost of being
wrong is high. For a true one-liner, just make the change and move on.

## What this skill doesn't do

It doesn't make the model a better programmer. Novel algorithm design and deep domain reasoning
still depend on the underlying model. Ultracode shapes the *process* — exploration, planning,
verification, parallelism — so that the capability the model already has isn't squandered on a
careless one-shot. When a task is genuinely beyond reach, say so plainly instead of shipping
plausible-looking wrong code.
