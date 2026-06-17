---
title: Commitments and Verdicts
course: conjecture-criticism-calculus
order: 2
summary: A commitment pairs a test program with a resource budget; its verdict on any piece of content is exactly one of pass, fail, or overrun — and overrun is not a loss.
estimatedMinutes: 18
objectives:
  - State Definition 3.1 and identify each component of a commitment κ = (τ, β)
  - Distinguish the three verdict outcomes and explain why overrun ≠ fail
  - Explain in one line why the budget is necessary for verdicts to be decidable
  - Trace a toy commitment through all three possible outcomes
prerequisites:
  - the-game
---

A marathon referee holds a stopwatch and a clipboard. When the gun fires, she tracks a runner over the course. At the finish line, she marks **pass** — the runner finished within the qualifying time. If the runner pulls up injured, she marks **fail**. But if the time limit expires — the meet is running long, the venue closes — she marks **time's up, no decision**: the runner was still on the road when the clock ran out.

Three outcomes, not two. That middle one — not a loss, not a win, just no verdict under this limit — is the key idea of this module.

The conjecture–criticism loop from Module 1 needs to *settle* something when it runs a test. A test with no finish line could run forever, leaving the system in permanent suspension. What the calculus does is pair every test with a budget, so the loop always terminates with exactly one outcome in hand: the test passed, the test failed, or the budget ran out before it could decide. That last outcome is as legitimate as the other two — it just means the budget was too small, not that the content under test is wrong.

---

## The objects: a test, a budget, a piece of content

Before the definition, let's be concrete about what each piece is.

A **test program** $\tau$ is some fixed procedure that examines a piece of content and tries to determine whether it satisfies some criterion — does this proposed solution to a problem actually solve it? does this explanation account for the phenomenon? The test probes the content; we treat it as a black box.

A **resource budget** $\beta$ is a cap on how long (or how many steps) the test may run. It is a concrete bound — a number of computational steps, not an infinite limit. Without such a cap, a test could run forever; with it, every run terminates.

**Content** $c$ is whatever the test is probing — a piece of text, a formula, a candidate explanation, a proposed criterion.

Now the budget is doing something essential: it makes the verdict *computable in finite time*. Without it, Rice's theorem would make the general problem of deciding whether an arbitrary program has a given property undecidable. The budget is what keeps us on solid ground. You don't need to know Rice's theorem — just register this: the cap is not a shortcut, it is what makes the whole edifice work.

## Definition 3.1 (Commitment, verdict)

A **commitment** is a pair $\kappa = (\tau, \beta)$ of a test program $\tau$ and a resource budget $\beta$. Its **verdict** on content $c$ is

$$
V(\kappa, c) \;=\; U^{\leq \beta}(\tau, c) \;\in\; \{\text{pass},\, \text{fail},\, \text{overrun}\}.
$$

Here $U^{\leq \beta}$ denotes the universal machine running $\tau$ on $c$ for at most $\beta$ steps. The three outcomes are mutually exclusive and exhaustive: running $\kappa$ on $c$ yields exactly one of pass, fail, or overrun. Verdicts are extensional (they depend on the content, not on how the content was generated), bounded (the run always terminates), and decidable by construction.

## Bridge: reading the definition back as the stopwatch

The definition packages exactly the three pieces of the referee picture:

- $\tau$ is **the test procedure** — the referee's clipboard of what she's checking.
- $\beta$ is **the budget** — her stopwatch set to a fixed limit.
- $c$ is **the content under examination** — the runner on the road.
- $V(\kappa, c)$ is **the outcome she writes down** — one of three, no partial marks.
- **pass**: the test completed within $\beta$ steps and accepted $c$.
- **fail**: the test completed within $\beta$ steps and rejected $c$.
- **overrun**: $\beta$ steps elapsed and the test had not yet finished — *no verdict was reached under this budget*.

The notation $U^{\leq \beta}(\tau, c)$ makes the budget limit formal: the machine runs at most $\beta$ steps, then reports whichever of the three states it is in. The crucial point is that **overrun is not a form of fail**. A fail means the test completed and found $c$ wanting. An overrun means the test never completed — the budget ran out mid-run, before any verdict was reached.

---

## Check yourself

Before continuing: can you name the three possible values of $V(\kappa, c)$ and say in one sentence what distinguishes overrun from fail?

<details><summary>Show answer</summary>

$V(\kappa, c) \in \{\text{pass}, \text{fail}, \text{overrun}\}$. An overrun means the test ran out of budget before finishing — no verdict was reached. A fail means the test *did* finish, and rejected the content. Overrun is "no decision under this budget," not "the content is wrong."

</details>

---

## Worked example: tracing three commitments

Let $\pi$ be a problem: *"Find a positive integer greater than 100."* Consider content $c_1 = 101$.

**Commitment $\kappa_1 = (\tau_{\text{check}},\, \beta_{\text{large}})$.**
$\tau_{\text{check}}$ verifies: parse as a positive integer, compare to 100. Budget $\beta_{\text{large}}$ is generous — 1,000 steps. Running $\kappa_1$ on $c_1$: the test parses $101$ in a few steps, confirms $101 > 100$, and reports $V(\kappa_1, c_1) = \text{pass}$.

**Commitment $\kappa_2 = (\tau_{\text{check}},\, \beta_{\text{large}})$ on $c_2 = 7$.**
Same test, same budget, different content. $\tau_{\text{check}}$ parses $7$, finds $7 \not> 100$, and reports $V(\kappa_2, c_2) = \text{fail}$.

**Commitment $\kappa_3 = (\tau_{\text{prime}},\, \beta_{\text{tiny}})$ on $c_3 = 101$.**
$\tau_{\text{prime}}$ checks: is this integer prime? Budget $\beta_{\text{tiny}} = 2$ steps — absurdly small. The primality check needs to divide $101$ by all primes up to $\sqrt{101} \approx 10$; that takes more than 2 steps. After $2$ steps the test is still running, the budget expires, and the machine reports $V(\kappa_3, c_3) = \text{overrun}$.

Observe: the overrun on $\kappa_3$ tells us *nothing* about whether $101$ is prime. It only tells us that this budget was too small to decide. (101 is in fact prime — but the system can't know that under $\kappa_3$.)

---

## Check yourself

Suppose you have a commitment $\kappa = (\tau, \beta)$ where $\tau$ halts in at most $\beta - 1$ steps on every input. Can $V(\kappa, c)$ ever equal overrun?

<details><summary>Show answer</summary>

No. If $\tau$ always halts in strictly fewer than $\beta$ steps, the test always finishes before the budget is exhausted. So the verdict is always either pass or fail — never overrun. Overrun is only possible when the test might run for more than $\beta$ steps on some input.

</details>

---

## Exercises

**Exercise 1.** A student argues: "The verdict `overrun` is really just a special kind of `fail` — if a content can't be decided under the budget, it hasn't passed, which is as good as failing." Identify the precise error in this reasoning and explain what the student has overlooked about the system's behaviour in later modules.

<details><summary>Show solution</summary>

The error is conflating "not pass" with "fail." A verdict of fail means the test *completed* and found the content deficient. A verdict of overrun means the test *did not complete* — no evidence either way was gathered under this budget. The distinction becomes critical later: a failing verdict can be packaged as a demonstrative warrant for an attack (a criticism that says "this content failed this specific test"). An overrun verdict cannot serve that role, because no test result was reached. Treating overrun as fail would allow an undecided test to count as a criticism, which the calculus must prevent. The overrun is genuinely a third outcome.

</details>

---

**Exercise 2.** Let $\tau_A$ be a test program that, on any input, halts and outputs `accept` after exactly 50 steps. Let $\tau_B$ be a test program that, on any input, runs for exactly 200 steps before halting and outputting `reject`. Fill in the table:

| Commitment | Budget $\beta$ | Verdict |
|---|---|---|
| $(\tau_A, 100)$ on $c$ | 100 | ? |
| $(\tau_A, 40)$ on $c$ | 40 | ? |
| $(\tau_B, 300)$ on $c$ | 300 | ? |
| $(\tau_B, 150)$ on $c$ | 150 | ? |

<details><summary>Show solution</summary>

| Commitment | Budget $\beta$ | Verdict |
|---|---|---|
| $(\tau_A, 100)$ on $c$ | 100 | **pass** — $\tau_A$ halts at step 50 (within 100), outputs accept |
| $(\tau_A, 40)$ on $c$ | 40 | **overrun** — $\tau_A$ needs 50 steps but budget is 40; budget expires first |
| $(\tau_B, 300)$ on $c$ | 300 | **fail** — $\tau_B$ halts at step 200 (within 300), outputs reject |
| $(\tau_B, 150)$ on $c$ | 150 | **overrun** — $\tau_B$ needs 200 steps but budget is 150; budget expires first |

</details>

---

**Exercise 3.** Two commitments $\kappa_1 = (\tau, \beta_1)$ and $\kappa_2 = (\tau, \beta_2)$ share the same test $\tau$ but have different budgets, with $\beta_1 < \beta_2$. Suppose $V(\kappa_1, c) = \text{overrun}$. What are the possible values of $V(\kappa_2, c)$? Can you rule any out?

<details><summary>Show solution</summary>

$V(\kappa_2, c)$ could be pass, fail, or overrun — none can be ruled out from $V(\kappa_1, c) = \text{overrun}$ alone. The overrun under $\kappa_1$ only tells us that $\tau$ did not halt within $\beta_1$ steps on $c$. Under the larger budget $\beta_2$:

- If $\tau$ halts on $c$ between step $\beta_1 + 1$ and step $\beta_2$ and accepts: **pass**.
- If it halts in that range and rejects: **fail**.
- If it still hasn't halted by step $\beta_2$: **overrun** again (under a bigger budget).

So a larger budget can convert an overrun into a pass or fail — but only if the test eventually halts. No information about which of the three outcomes will occur under $\kappa_2$ is derivable from the overrun under $\kappa_1$ alone.

</details>

---

**Exercise 4.** Explain why the formula $V(\kappa, c) = U^{\leq \beta}(\tau, c)$ produces a function (in the mathematical sense: a single output for every input) even though an arbitrary program $\tau$ might loop forever on some inputs.

<details><summary>Show solution</summary>

Without the budget cap, $U(\tau, c)$ might not be total — on inputs where $\tau$ loops, the computation never terminates and there is no output. But $U^{\leq \beta}(\tau, c)$ adds an unconditional stopping rule: after $\beta$ steps, the machine halts and outputs overrun if the test has not yet produced a verdict. This ensures the computation always terminates. The three-valued range $\{\text{pass}, \text{fail}, \text{overrun}\}$ is total over all $(\kappa, c)$: for every commitment and every content, the machine halts in at most $\beta$ steps and the verdict is defined. The budget transforms a potentially partial procedure into a guaranteed total function.

</details>

---

**Exercise 5.** A commitment $\kappa = (\tau, \beta)$ returns $V(\kappa, c) = \text{pass}$. A student claims: "That proves $c$ is correct — the test passed!" Identify the two implicit assumptions in this claim and say whether each is guaranteed by Definition 3.1.

<details><summary>Show solution</summary>

The student's claim rests on two assumptions:

1. **The test $\tau$ is sound**: that a pass from $\tau$ genuinely means $c$ satisfies the intended criterion. Definition 3.1 makes no such guarantee — $\tau$ is a test program, and whether it correctly measures what it claims to measure is a separate question. A test can pass faulty content if the test itself is poorly designed. (This is exactly why demonstrative warrants in later modules require a *validity node* $\nu(\kappa)$ attesting that the test is sound and relevant.)

2. **The budget was sufficient**: that $\beta$ was large enough that if $c$ had failed, the test would have detected it within $\beta$ steps. Definition 3.1 also makes no such guarantee. A pass under a small budget could reflect the test simply not checking deeply enough.

Neither is guaranteed by Definition 3.1. The definition gives us an exact three-valued outcome; it does not certify the test's design or its thoroughness. Those are matters for warrants and validity nodes, which come later.

</details>

---

## Recap

A commitment $\kappa = (\tau, \beta)$ packages a test and a resource cap into a single unit; running it on content $c$ yields exactly one of three verdicts: **pass**, **fail**, or **overrun**. The budget is what makes the verdict decidable — without it, the system could be left waiting forever. And overrun is a genuine third outcome, not a softened form of failure: it reports that the test ran out of time before it could conclude, which is informative in its own right. That distinction — between "the content failed the test" and "the budget ran out before any test result" — will prove load-bearing when we build the attack structure that criticisms rely on.
