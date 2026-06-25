# Verify Report — Attractors in Large Language Models

**Run:** attractors-in-llms-20260625 · **Slug:** attractors-in-llms · **Date:** 2026-06-25
**Shipped to:** `site/src/content/courses/attractors-in-llms/` (11 modules + `_course.md`)

## Checks

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | Reference integrity (`validate-references.mjs`) | **PASS** | No broken internal references. |
| 2 | Schema + math + invariants (`validate-schema.mjs`) | **PASS** | Valid against schema (field-level, with site deps). `moduleOrder` matches the 11 module files one-to-one; every `order`/filename/`course` consistent. |
| 3 | Prose continuity (`lint-prose.mjs`) | **PASS** | 0 hard flags after fixing one (`"enough to"` 5×→3×). Soft advisories (250) are texture on a 35k-word course: domain term "model" (exempt), minimizer adverbs, colon/`?` density — weighed and accepted by the editorial pass. 0 em dashes course-wide. No backtick-wrapped math. |
| 4 | Cross-stage consistency | **PASS** | All 11 approved curriculum modules exist and match their specs (titles, objectives, prereqs, est. minutes). Canon symbols held ($s_t$ context, $\tau$ temperature, $x^\star$ fixed point); editorial reported no symbol unification was needed. |
| 5 | Voice boundary & coherence | **PASS** | Prose is literary-maverick, one consistent narrator; Definition/Worked-Example/equation blocks left intact by the editorial loop (verified: editorial touched prose only). |
| 5a | Metaphor & bridge (by reading) | **PASS** | Editorial bridge sweep + spot review: each definition reached by a notation-decode bridge (M1 fixed-point/contraction/logistic, M2 generation-map, M8 softmax/top-p — no cliffs). One image per module, each points true and cashes in (ball-in-valley M1, audio-feedback M2, skipping-record M3, photocopy M4, flattering-mirror M5, actor-and-role M6, one-way-ratchet M7, rudder M9, map-vs-territory M11); M8 artifact-first and M10 reuses M1's valley — no competing images. |
| 6 | Pedagogy & governance | **PASS** | Every module carries 2–3 distributed attempt-before-reveal `<details>` checks and elaborated worked exercise solutions. `_course.md` provenance complete (`aiGenerated: true`, `model`, `generatedDate`, `reviewed: false`, 21 real resolvable `sources`). Bias screen run per authoring contract (examples are technical/non-demographic). |
| 6a | Level fit (`undergrad`/intermediate) | **PASS** | Dynamical-systems vocabulary built from scratch (M1); sampling mechanisms taught, not assumed (M8); RLHF used at the gist level the brief grants; no attention/transformer math. No orphan terms vs. prerequisites. |
| 7 | Base-path lint | **PASS** | No hand-written absolute internal links (`](/…` or `href="/…"`) in shipped markdown. |
| 8 | Build (`build-site.sh`) | **PASS** | Clean Astro build: **144 pages**, including `/courses/attractors-in-llms/` and all 11 module pages. Schema re-validated and **every KaTeX expression rendered** (incl. `\underbrace`, `\Vert`, softmax-with-temperature, top-p cutoff, logistic map). No build errors. |

## Fixes made during verify
- **Frontmatter YAML (build-blocking, pre-existing from authoring):** quoted four `summary:` fields containing an unquoted colon-space (M3, M5, M7, M11); M11 also had embedded double quotes, escaped. Without this the strict YAML loader would have read the text after the colon as a nested mapping and broken the build.
- **Prose hard flag:** varied two of five `"enough to"` instances (M4, M9) to clear the stock-phrase cap.

## Epistemic-hygiene spot check (course value)
- 🟠 framings (Waluigi, Simulators) labeled community conjecture wherever they appear (M6, M11); the Waluigi asymmetry/irreversibility claim never stated as fact.
- The two persona papers kept distinct: Anthropic *Persona Vectors* (Chen et al.) vs. OpenAI *Persona Features Control Emergent Misalignment* (Wang et al.) — not conflated (M6, M9).
- No `[verify]` figure printed as fact (Crescendo ASR %, persona "8-turn" numbers kept qualitative).
- M11 grades the course's own claims: Hopfield = proven; paraphrasing 2-cycles = measured; persona "basins" = metaphor.

## Verdict

**SHIP.** The course validates against the schema, the math compiles, the voice boundary held, prose
continuity is clean, and the site builds green. Merging the branch to `main` triggers the GitHub
Pages deploy.
</content>
