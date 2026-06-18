# Math Style

Reference for authoring mathematical content in Fable Academy courses. Read this on
every authoring run. This file governs **formal content**; its counterpart,
`_config/voice/literary-maverick.md`, governs **prose**. They do not overlap, and the
boundary between them is the most important thing in this document.

Math renders at **build time** via `remark-math` + `rehype-katex`. Malformed LaTeX does
not degrade gracefully — it **breaks the build**. KaTeX supports only a subset of LaTeX.
Every equation you write is a build-time assertion that must be valid KaTeX.

---

## 1. The prose / formal boundary

A module is a weave of two kinds of text, held to two different standards.

**Prose** — intuition, motivation, module openings, transitions, the sentences that
connect one formal block to the next, the "why this matters" and "here's the picture"
passages. Prose is governed by `literary-maverick`. It can be punched up, sharpened,
re-imaged, and run through the rewrite loop.

**Formal content** — Definitions, Theorems, Lemmas, Propositions, Corollaries, Proofs,
the precise statement of an Example's setup and result, and every equation. Formal
content is governed by **this file**. It is precise, conventional, and verifiable.

> **Hard rule: `literary-maverick` must never rewrite a formal statement.**
> The rewrite loop optimizes for vividness, surprise, and fresh phrasing. Those are
> exactly the wrong objectives for a definition or a theorem, where a single changed
> word can make the statement false. Definitions, theorems, lemmas, proofs, and
> equations are **excluded from the literary rewrite loop**. They are written once,
> correctly, and edited only for correctness — never for style.

How to apply the boundary in practice:

- A motivating sentence *before* a definition is prose. The definition itself is formal.
- "Intuitively, a limit pins down where a function is headed" is prose. `\lim_{x\to a} f(x) = L` and its `\epsilon`-`\delta` statement are formal.
- If a sub-agent is told to "punch up this module," it punches up the prose between the
  blocks and **leaves every Definition/Theorem/Lemma/Proof/Example block byte-for-byte
  intact** unless a math reviewer flags a correctness error.
- When in doubt about whether a sentence is prose or formal: if changing a word could
  change a truth value, it is formal. Hands off.

> **The one sanctioned crossing: the bridge.** The boundary forbids prose from *rewriting*
> a definition; it does **not** license prose to *abandon* the reader at the definition's
> door. Between an intuition and the formal statement it motivates there must be an explicit
> connective passage — the **bridge** — that decodes the notation back into the intuition,
> mapping **each piece** of the formalism onto the picture that motivated it. For a binary
> operation: "the two inputs are the ordered pair $(a,b)$; '$S \times S$' means pick one
> element of $S$, then another; and the result $a * b$ must land back in $S$." This is prose
> reaching deliberately across the boundary — and it is the *only* place it may. The bridge
> reads the definition; it never changes it (every symbol and condition stays exactly as the
> formal block states them). A definition that arrives with no bridge is a defect — a cliff.
>
> **Two kinds of bridge — and the second is the one most often missing.**
> 1. **Notation-decode bridge.** The intuition and the definition are the *same idea* in two
>    registers; the bridge translates the symbols back to the picture (the binary-operation
>    example above). This is the common case and the one the rules already name.
> 2. **Framing-shift bridge.** The definition reframes the idea through a *different model*
>    than the intuition built (the intuition counts steps and wraps around a clock; the
>    definition speaks of *dividing and taking the remainder*). Here the two models are
>    equivalent, but that equivalence is exactly the hard, non-obvious thing — and it must be
>    **constructed, not asserted.** Show the mechanism that makes them the same ("14 steps on a
>    12-clock is one full lap of 12 then 2 left over — the leftover *is* the remainder $14 = 1
>    \times 12 + 2$"), so the reader *derives* the new model from the old one. A sentence that
>    merely claims "this is exactly what the clock does" is an assertion, not a bridge.
>
> **Ordering: the bridge comes before or with the definition, never only after.** A bridge
> placed after the formal block is a patch — the reader already hit the cliff. Build the
> connective passage so the definition lands as the expected next step, not a surprise the
> prose then apologizes for. (A framing-shift bridge that arrives only *after* its definition is
> the canonical instance of this defect.)

---

## 2. Notation conventions

- **Define before use.** No symbol appears before it is introduced. The first time a
  quantity shows up, name it.
- **Words first, then symbols.** Introduce a concept in words, then attach the symbol:
  "the error term, which we write $\varepsilon$, ..." Thereafter use the symbol freely.
- **One symbol, one meaning, per module.** Do not reuse $n$ for both an index and a
  dimension in the same module. Name recurring things the same way every time (this is
  the formal-content echo of the prose rule "name each recurring thing the same way").
- **Conventional choices.** Follow the field's defaults so the reader spends no effort
  decoding notation:
  - Integers/indices: $i, j, k, m, n$. Reals: $x, y, z, t$. Small reals/errors: $\varepsilon, \delta$.
  - Functions: $f, g, h$. Sets: $A, B, S$. Set of reals/integers/naturals: $\mathbb{R}, \mathbb{Z}, \mathbb{N}$.
  - Vectors: bold or arrow, but pick one per course and keep it. Matrices: capital $A, M$.
  - Probability: $P(\cdot)$, expectation $\mathbb{E}[\cdot]$, random variables capital $X, Y$.
- **Prefer `\mathbb`, `\mathcal`, `\mathbf` deliberately**, not decoratively. A blackboard-bold
  $\mathbb{R}$ means "the reals," not "a fancy R."
- **Units and words inside math** go in `\text{}`: `5\,\text{m/s}`, not `5 m/s` (which
  italicizes the letters as variables).
- **Spacing**: use `\,` for thin spaces (before $dx$ in integrals, between a number and
  its units). Do not hand-pad with literal spaces.

---

## 3. KaTeX-supported subset

KaTeX is **not** full LaTeX. Stay inside the subset below or the build dies.

### Delimiters

- **Inline math**: `$...$` — math set into a sentence. Example: `$e^{i\pi}+1=0$`.
- **Display math**: `$$...$$` on their own lines — centered, on its own line.
- Do **not** use `\(...\)`, `\[...\]`, or `\begin{math}` — use the dollar forms, which
  is what `remark-math` parses.
- **Never wrap math in backticks.** A code span around inline math — `` `$x$` `` — is Markdown
  *code*, not math: KaTeX never sees it, so it ships as literal red text (`$x$`), not a rendered
  symbol. Inline math is **bare** `$x$`; display is `$$...$$`. (The canon and these docs show symbols
  in backticks to display them literally — that is for documentation; never copy that style into a
  module's prose.) The verify lint (`lint-prose.mjs`) hard-flags backtick-wrapped math.

### Multi-line and aligned math

Put the environment **inside** `$$...$$`:

```
$$
\begin{aligned}
  f(x) &= (x+1)^2 \\
       &= x^2 + 2x + 1
\end{aligned}
$$
```

**KaTeX supports** these environments: `aligned`, `array`, `cases`, `matrix`,
`pmatrix`, `bmatrix`, `Bmatrix`, `vmatrix`, `Vmatrix`, `gathered`, `alignedat`,
`smallmatrix`.

**KaTeX does NOT support** (these break the build):

- Bare `align` / `align*` / `equation` / `equation*` / `eqnarray` environments —
  use `aligned` (inside `$$`) instead.
- `\label{}` and `\ref{}` / `\eqref{}` — there is no equation auto-numbering. If you
  must refer to an equation, restate it or name it in prose ("the identity above").
- `\tag{}` works in KaTeX, but prefer not to number equations at all.
- `\newcommand` defined inline per file is fragile; avoid it. Write macros out in full.
- Raw `\def`, TikZ, `\usepackage`, `figure`, `tabular`, and any document-level LaTeX.

### Common safe macros (use freely)

`\frac`, `\dfrac`, `\sqrt`, `\sum`, `\prod`, `\int`, `\oint`, `\lim`, `\sup`, `\inf`,
`\max`, `\min`, `\partial`, `\nabla`, `\infty`, `\to`, `\mapsto`, `\implies`, `\iff`,
`\forall`, `\exists`, `\in`, `\notin`, `\subseteq`, `\subset`, `\cup`, `\cap`,
`\emptyset`, `\setminus`, `\leq`, `\geq`, `\neq`, `\approx`, `\equiv`, `\cong`, `\sim`,
`\cdot`, `\times`, `\pm`, `\mp`, `\langle \rangle`, `\lfloor \rfloor`, `\lceil \rceil`,
`\binom`, `\overline`, `\hat`, `\vec`, `\bar`, `\dot`, `\left( \right)` (auto-sizing
delimiters), Greek letters (`\alpha`...`\omega`, `\Gamma`, `\Delta`, `\Sigma`,
`\Omega`), `\mathbb`, `\mathcal`, `\mathbf`, `\mathrm`, `\text`, `\sin \cos \tan \log
\ln \exp`, `\cases`, `\begin{cases}...\end{cases}`.

### Things that bite

- **Always close every brace.** `\frac{a}{b}`, never `\frac{a}{b`. An unclosed brace
  takes the whole build down.
- **Escape literal characters**: `\%`, `\$` (rare inside math), `\#`, `\&`, `\_` when
  you mean a literal underscore rather than a subscript. A bare `_` or `^` with no
  operand errors.
- `\left` must be paired with a matching `\right` (use `\right.` for an invisible one).
- Newlines inside `$$...$$` are fine; a stray `$` mid-expression is not.
- Multi-character subscripts/superscripts need braces: `x^{10}`, `a_{ij}`, never `x^10`.

### Verify each equation

Treat every formula as code that must compile. Before considering a module done, each
inline and display expression must be **known-valid KaTeX**. If you are unsure whether a
macro is in the subset, do not gamble — rewrite using a macro from the safe list above,
or hand it to the verify stage to render-check. **A single bad equation fails the whole
site build.**

---

## 4. Stating formal blocks in Markdown

Use plain Markdown — no custom components. Conventions:

### Definitions

Use a heading so it lands in the table of contents:

```
## Definition (Continuity)

A function $f$ is **continuous at $a$** if $\lim_{x \to a} f(x) = f(a)$.
```

- The defined term is **bolded** at the point of definition.
- One definition per block. State it; do not motivate it inside the block (motivation is
  prose, and belongs before the block).

### Theorems, Lemmas, Propositions, Corollaries

Inline-bold label, then the statement:

```
**Theorem (Intermediate Value Theorem).** If $f$ is continuous on $[a,b]$ and $y$ lies
between $f(a)$ and $f(b)$, then there is a $c \in [a,b]$ with $f(c) = y$.
```

- Name the result when it has a standard name; otherwise just `**Theorem.**`.
- State hypotheses fully. A theorem with implicit hypotheses is a bug.

### Proofs

Open with `*Proof.*` and **end with `$\square$`**:

```
*Proof.* Suppose ... Then ... Therefore the claim holds. $\square$
```

- A proof is formal content end to end. Keep it correct and complete; do not "punch it
  up." Connective words (*so, because, therefore, hence*) are allowed and encouraged for
  readability, but they serve logic, not style.
- If a proof is omitted, say so: "*Proof omitted; see [reference] or the exercises.*"

### Worked Examples

```
## Example (Differentiating a polynomial)

**Problem.** Find $f'(x)$ for $f(x) = 3x^2 - 5x + 2$.

**Solution.** Apply the power rule term by term:

$$
f'(x) = 6x - 5.
$$
```

- Show the steps, not just the answer. The point of a worked example is the *method*.
- The setup and the result are formal (must be correct); the connecting narration
  ("apply the power rule term by term") is light prose and may be readable, but stays
  accurate.

---

## 5. Author + verify checklist

Apply before marking any module with math complete.

- [ ] Every formal block (Definition/Theorem/Lemma/Proof/Example) is correct and
      complete; no implicit hypotheses.
- [ ] No formal statement has been run through the literary rewrite loop.
- [ ] Every symbol is defined before first use; words-then-symbol on introduction.
- [ ] One symbol = one meaning across the module; recurring things named consistently.
- [ ] All math uses `$...$` (inline) or `$$...$$` (display) — no `\(`, `\[`, `\begin{math}`.
- [ ] Multi-line math uses `aligned`/`cases`/`array`/`*matrix` inside `$$` — no bare
      `align`/`equation`, no `\label`/`\ref`/`\eqref`.
- [ ] Every brace closed; every `\left` paired with `\right`; multi-char sub/superscripts
      braced.
- [ ] No unsupported macros (`\newcommand`, `\def`, TikZ, `\usepackage`, `tabular`,
      `figure`).
- [ ] Literal `%  # & _ $` escaped where they appear in math.
- [ ] Definitions bold the defined term; proofs end with `$\square$`.
- [ ] Every inline and display expression is valid KaTeX — render-check passes, build
      does not break.
