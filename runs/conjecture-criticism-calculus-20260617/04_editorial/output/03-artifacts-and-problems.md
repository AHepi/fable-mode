---
title: Artifacts and Problems
course: conjecture-criticism-calculus
order: 3
summary: Everything in the system is an artifact — content paired with a finite list of commitments it answers to. A problem is a description plus a growing set of criteria. This uniformity is what makes "whatever can attack can be attacked" enforceable.
estimatedMinutes: 18
objectives:
  - State Definition 3.2 for artifact and problem, identifying each component of the tuples
  - Explain what the commitment interface $I(a)$ represents and why it is finite
  - Construct a small artifact with a two-commitment interface and verify a verdict against it
  - Explain why conjectures, criticisms, and even the system's own rules are all artifacts
  - Distinguish an artifact's content $c(a)$ from its commitment interface $I(a)$
prerequisites: [commitments-and-verdicts]
---

Every noun in this calculus is going to need a place to stand. In module 2 we gave commitments their footing — a test paired with a budget, returning one of three verdicts. Now the question is: what are the *things* those commitments test?

The answer turns out to be the same for everything: conjectures, criticisms, the standards that judge them, even the rules governing the calculus itself. They are all **artifacts**. That uniformity is not a convenience — it is the engine behind the system's most important property, and we will keep returning to it.

## From pairs to everything else

Picture the simplest possible content: a string of symbols, a sentence claiming something. On its own it is just ink. It becomes a player in the calculus when you attach to it a finite roster of commitments — the tests it is officially answerable to. Strip away all the philosophy, and an artifact is exactly that: content plus a list.

A problem is a different shape. It has a description (what the problem is asking), a set of criteria (what a solution would have to satisfy), and a provenance record (where the problem came from). The criteria are not arbitrary: they are *commitment schemas* — templates that can be instantiated against any candidate artifact to produce actual commitments. A problem's criteria grow as inquiry proceeds; the artifact's commitment interface is fixed at registration time (though more commitments can be added by introducing a new artifact).

These two shapes — artifact and problem — are the two nouns the whole calculus runs on. The next definition gives them precisely.

## Definition 3.2 (Artifact, Problem)

An **artifact** is $a = (c(a),\, I(a))$: a content $c(a)$ together with a finite **commitment interface** $I(a)$, a finite set of commitments (each in the sense of Definition 3.1) that $a$ is answerable to.

A **problem** is $\pi = (d_{\pi},\, \mathrm{Crit}_{\pi},\, \text{prov}_{\pi})$: a description $d_{\pi}$, a growing finite set of criteria $\mathrm{Crit}_{\pi}$ (commitment schemas instantiable against candidate artifacts), and a provenance record $\text{prov}_{\pi}$.

Artifacts are untyped beyond this: conjectures, criticisms, aesthetic standards, problem criteria, experimental reports, and the calculus's own rules are all artifacts. This uniformity is what makes "whatever can attack can be attacked" enforceable.

### Bridge: reading the tuples

Let's decode each piece.

**For an artifact $a = (c(a), I(a))$:**
- $c(a)$ is the *content* — the thing the artifact actually says or proposes. Think of it as the payload: a conjecture about bread chemistry, a criticism of that conjecture, a rule saying "attacks must carry warrants." All of these have content.
- $I(a)$ is the *commitment interface* — a finite set of commitments $\{\kappa_1, \kappa_2, \ldots\}$, each of the form $\kappa = (\tau, \beta)$ from Definition 3.1, that $a$ is officially answerable to. Running $V(\kappa_i, c(a))$ for each $\kappa_i \in I(a)$ is the formal meaning of "testing $a$ against its interface."
- The interface being **finite** matters: it keeps the question "does $a$ pass all its commitments?" decidable in bounded time.

**For a problem $\pi = (d_{\pi}, \mathrm{Crit}_{\pi}, \text{prov}_{\pi})$:**
- $d_{\pi}$ is the *description* — the prose statement of what is being asked ("Why does ice expand instead of contracting like most solids?").
- $\mathrm{Crit}_{\pi}$ is the *criteria set* — a finite (and *growing*) collection of commitment schemas. A schema is like a commitment with a blank where the content goes; plug in a candidate artifact $a$ and you get an actual commitment $\kappa_{a}$ whose verdict tells you whether $a$ meets that criterion.
- $\text{prov}_{\pi}$ is the *provenance* — a record of how this problem arose: from a failed verdict, from two surviving rivals, from a reach event, and so on. We will meet these triggers when we reach the (Spawn) rule in a later module; for now, provenance is the problem's birth certificate.

The crucial asymmetry: a problem's criteria set can grow (as inquiry proceeds, new demands may be placed on any solution), while an artifact's commitment interface is fixed at the moment the artifact enters the system. New demands on an artifact are handled by introducing a *new* artifact that answers to an extended interface.

**The artifact-uniformity principle:** Nothing in the definition distinguishes a conjecture from a criticism from a methodological standard. They all have content and a commitment interface. This means any artifact can be the target of an attack (provided the attacker has a warrant), and any artifact can serve as attacker. "Whatever can attack can be attacked" follows directly — not as a philosophical commitment added from outside, but as a consequence of the uniform definition.

<details><summary>Check yourself: what does $I(a) = \emptyset$ mean for an artifact?</summary>

An artifact with $I(a) = \emptyset$ has an empty commitment interface — no commitments it is answerable to. No commitment can return $\text{fail}$ on it, because there are no commitments to run. Such an artifact has no attack surface: it cannot be criticised via a demonstrative warrant (which requires a failing verdict), and in the measures we will define in module 9, it will turn out to be *not criticizable*. An empty interface is not a virtue — it means the artifact makes no testable commitment, which is as close to epistemically inert as the system allows.

</details>

## Worked example

Let's build a concrete artifact and a concrete problem and see how they fit the definitions.

**Artifact.** Let $a$ be the conjecture: *"Yeast fermentation produces carbon dioxide, which causes bread dough to rise."*

We register it with a two-commitment interface $I(a) = \{\kappa_1, \kappa_2\}$:

- $\kappa_1 = (\tau_1, \beta_1)$ where $\tau_1$ checks whether the content mentions a specific gas and its role. Running $V(\kappa_1, c(a))$ on the sentence above returns $\text{pass}$ — it does identify $\text{CO}_2$.
- $\kappa_2 = (\tau_2, \beta_2)$ where $\tau_2$ checks whether the content predicts a measurable volumetric increase in dough under standard fermentation conditions. Running $V(\kappa_2, c(a))$ returns $\text{pass}$ if the content quantifies the expansion, $\text{fail}$ if it does not. Suppose our sentence does not quantify it: then $V(\kappa_2, c(a)) = \text{fail}$.

So $a$ passes $\kappa_1$ and fails $\kappa_2$. It has a partial attack surface — $\kappa_2$ failing is exactly the kind of foothold a demonstrative criticism needs (more on that structure in module 5). The artifact is a pair $(c(a), \{\kappa_1, \kappa_2\})$; that is everything the system needs to track it.

**Problem.** Let $\pi$ be the problem: *"Why does bread dough rise during baking?"*

As a tuple: $\pi = (d_{\pi}, \mathrm{Crit}_{\pi}, \text{prov}_{\pi})$ where:
- $d_{\pi}$ is the description above.
- $\mathrm{Crit}_{\pi}$ initially contains one criterion schema: *a solution must identify a specific physical or chemical mechanism.* Instantiated against candidate $a$, this schema produces a commitment whose test checks for mechanism-identification — $a$ satisfies it.
- $\text{prov}_{\pi}$ records that this problem was posed by the user at the start of the session (provenance type: initial problem). 

Later, after seeing two surviving rival conjectures, $\mathrm{Crit}_{\pi}$ could grow to include a discrimination criterion: *any solution must make a prediction that distinguishes it from the rival.* The problem's criteria set grows; the existing artifacts' interfaces do not change automatically. A new artifact addressing the expanded criteria would need a correspondingly extended interface.

<details><summary>Check yourself: if someone offers a criticism $k$ of the conjecture $a$ above, what kind of object is $k$?</summary>

$k$ is itself an **artifact**: a tuple $(c(k), I(k))$ with its own content and its own commitment interface. The content $c(k)$ might say "the conjecture $a$ fails $\kappa_2$ because it gives no quantitative prediction." The interface $I(k)$ consists of whatever commitments $k$ is answerable to — at minimum, the commitments required by the warrant $k$ carries for its attack on $a$.

This is the artifact-uniformity principle in action. $k$ is not a special "criticism object" with different rules — it is an artifact, the same kind of object as $a$, which means it can in turn be attacked by another artifact carrying a suitable warrant. The criticism is itself criticizable.

</details>

## The variation kernel: a signpost

Definition 3.2 in the source includes one more item alongside artifact and problem: the **variation kernel** $\mu(\cdot \mid a)$, a samplable distribution over bounded edits of $c(a)$. This object belongs to the demarcation and modifiability story, which module 9 develops in full. We name it here because it appears in the definition; we will not use it until then.

## Exercises

**1.** Consider a conjecture $b$ with content "all metals conduct electricity" and commitment interface $I(b) = \{\kappa\}$, where $\kappa$ tests whether the content makes a universal claim about a named material class. What is $V(\kappa, c(b))$?

<details><summary>Show solution</summary>

The test $\kappa$ checks for a universal claim about a named material class. The content "all metals conduct electricity" makes exactly such a claim — it uses "all" and names the class "metals." So $V(\kappa, c(b)) = \text{pass}$.

Note: this verdict says $b$ satisfies *that particular commitment*. It says nothing about whether the claim is true in the world — the commitment is testing a formal property of the content (does it make a universal claim?), not doing physics.

</details>

**2.** You are given a problem $\pi'$ with description "Which alloys conduct electricity at room temperature?" and an initial $\mathrm{Crit}_{\pi'}$ containing one schema: *a solution must name at least one specific alloy.* Conjecture $b$ from Exercise 1 does not name any alloy. Describe what $V(\kappa_{b}, c(b)) $ looks like when the schema in $\mathrm{Crit}_{\pi'}$ is instantiated against $b$.

<details><summary>Show solution</summary>

Instantiating the schema against $b$ produces a commitment $\kappa_{b}$ whose test checks whether $c(b)$ names at least one specific alloy. The content "all metals conduct electricity" names no specific alloy — "metals" is a category, not an alloy. So $V(\kappa_{b}, c(b)) = \text{fail}$.

This is the mechanism by which a problem's criteria can reject a candidate: the criterion schema, when instantiated against $b$, produces a failing verdict. $b$ is answerable to this commitment (once it is added to $I(b)$ by an appropriate transition — but that mechanism belongs to module 6). What matters here is the shape: criteria are schemas, schemas instantiate against artifacts to produce commitments, commitments produce verdicts.

</details>

**3.** Explain, in one paragraph, why the statement "this proof is incorrect" (presented as a criticism) must also be an artifact in the sense of Definition 3.2.

<details><summary>Show solution</summary>

The definition of an artifact makes no distinction by type: anything in the system is an artifact if it has content and a commitment interface. The statement "this proof is incorrect" has content ($c(k)$ = the claim of incorrectness) and it can be paired with a commitment interface — for instance, a commitment that tests whether the stated error location actually exists in the target proof. That commitment produces a verdict on $c(k)$.

Because it is an artifact, "this proof is incorrect" can itself be attacked by another artifact carrying a warrant. If someone shows that the identified error is not actually an error, that is a criticism of the criticism — and the machinery for handling it is exactly the same as for any other attack. This is the artifact-uniformity principle: the system does not special-case criticisms, and so criticisms are always criticizable. That is not an add-on; it follows from the definition.

</details>

**4.** *Stretch.* A conjecture $a$ has interface $I(a) = \{\kappa_1, \kappa_2\}$. A critic proposes to add a third commitment $\kappa_3$ to $a$'s interface, claiming $V(\kappa_3, c(a)) = \text{fail}$. Explain why this proposal is itself an artifact, and what its commitment interface might look like.

<details><summary>Show solution</summary>

The proposal "add $\kappa_3$ to $a$'s interface, with $V(\kappa_3, c(a)) = \text{fail}$" is a claim — it has content. For it to function as a criticism in the calculus, it must be an artifact: a tuple $(c(k), I(k))$ where $c(k)$ states the proposed extension and the failing verdict, and $I(k)$ contains at least the commitments that the warrant type requires. A demonstrative warrant, for instance, requires that the commitment $\kappa_3$ be packaged into the content of $k$, together with a trace establishing $V(\kappa_3, c(a)) = \text{fail}$ and a validity node asserting that $\kappa_3$ is a sound and relevant test for $a$ (we will make this precise in module 5). Those are the things $k$'s own commitment interface can test: does $k$ correctly exhibit the failing verdict? Does it reference a valid validity node?

The proposal to modify $a$'s interface is not an administrative act outside the calculus — it enters as an artifact, is subject to the same warrant discipline, and can be attacked like any other artifact.

</details>

## Recap

An artifact $a = (c(a), I(a))$ is content paired with a finite commitment interface; a problem $\pi = (d_{\pi}, \mathrm{Crit}_{\pi}, \text{prov}_{\pi})$ is a description paired with a growing set of criteria and a provenance record. The verdicts from module 2 are what run against both: each $\kappa \in I(a)$ returns $V(\kappa, c(a)) \in \{\text{pass}, \text{fail}, \text{overrun}\}$. The central payoff of these definitions is uniformity — conjectures, criticisms, methodological standards, and the calculus's own rules are all artifacts, which is what makes every object in the system equally open to attack. Module 4 places these artifacts and problems into an epistemic state $S = (A, \Pi, \mathrm{addr}, \mathrm{att}, W)$ and draws the first attack graph.
