---
description: Research, write, and ship a complete course from a single prompt.
argument-hint: <topic> [assuming <background>]
---

You are running the **course production pipeline** in this ICM workspace. The user wants a finished,
deployable course. Their request:

$ARGUMENTS

Do this:

1. **Activate fable-mode** (`.claude/skills/fable-mode/SKILL.md`): map the stages, delegate
   independent work to sub-agents, verify before advancing.
2. **Read the routing.** Read `CLAUDE.md` (the map) and `CONTEXT.md` (the routing + gate rules) if
   you have not already.
3. **Step 0 — run brief.** Derive the slug with `shared/scripts/slugify.mjs`, run
   `bash shared/scripts/scaffold-run.sh <slug>`, then fill in `runs/<run-id>/run-brief.md` —
   especially the **Interpretation notes**: state in plain words what you take the topic, scope,
   rigor, and assumed background to mean.
4. **Walk the pipeline** `01_research → 02_curriculum → 03_authoring → 04_assembly → 05_verify`,
   in order. At each stage, read its `CONTEXT.md`, load only the files its Inputs section names, do
   the work, write to that stage's `runs/<run-id>/` output folder, and run its Verify section before
   advancing. Stage 03 fans out: one sub-agent per module, in parallel.
5. **Default to autonomous mode** but honor the brief's `gates` (the curriculum gate blocks by
   default — pause there for approval unless the user told you to run unattended).
6. **Ship.** The verify stage's clean build is the signal. Tell the user the course is at
   `site/src/content/courses/<slug>/`, summarize what shipped, and note that merging to `main`
   triggers the GitHub Pages deploy.

Keep every stage's output as a plain file on disk — the run is fully inspectable and re-runnable.
