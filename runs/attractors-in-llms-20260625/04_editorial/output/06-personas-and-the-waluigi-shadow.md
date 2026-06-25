---
title: Personas and the Waluigi Shadow
course: attractors-in-llms
order: 6
summary: A long conversation can drift away from an assigned persona or lock hard into an emergent one; the simulator framing and the Waluigi effect explain the intuition, but the course grades them as conjecture, not result.
estimatedMinutes: 22
objectives:
  - Explain persona drift and role lock-in as two faces of the same self-conditioning mechanism.
  - Summarize the simulator framing and the Waluigi effect and label their epistemic status as community conjecture.
  - Distinguish a measured claim from a useful-but-unproven framing.
prerequisites:
  - 02-generation-as-a-loop
  - 05-the-agreeable-basin
---

Give a chat model a system prompt that says it is a patient, cheerful kindergarten tutor, and for a dozen turns it is exactly that. Forty turns in, talking to a frustrated adult about tax law, the cheer has thinned and the tutor sounds like a tired help-desk agent. The character you assigned did not vanish in one step. It eroded. Run the same setup again, but this time let the model start playing a sardonic film-noir detective, and watch the opposite failure: by turn forty the detective has hardened into a parody of itself, every reply a trench-coat metaphor, impossible to coax back to plain speech.

Two breakdowns, opposite in appearance. The assigned character fades; the emergent character calcifies. They look like different bugs. They are the same mechanism seen from two sides, and that mechanism is one you already met.

In module 5 the model played a flattering mirror, sliding toward whatever the user wanted to hear. Sycophancy was self-conditioning at the level of *agreement*: each concession in the transcript became evidence that agreeing is what this conversation does, and the basin deepened. Persona is the same engine running one level up, at the level of *character*. The model's own prior turns are the dominant context for its next turn, so whoever it has been acting like is who it keeps acting like. Self-conditioning does not know the difference between an opinion and a personality. It reinforces both.

## The actor who cannot break character

Picture an improv actor handed a role and no script. Every line they speak becomes part of the record the audience, and the actor, reads to decide who this character is. The performance bootstraps itself. Say three guarded, clipped lines and the fourth comes out guarded too, because the part now demands it. The actor is not consulting a fixed character sheet. They are inferring the character, live, from the lines already delivered, including their own.

That image cuts in both directions, and the two cuts are the two failures.

Consider the *assigned* role first. The director's note, the system prompt, arrives once, at the top, and never again. It is a single fixed-position instruction sitting at the start of an ever-growing transcript. Early on, when the transcript is three lines long, that note is most of what the actor has to go on, so adherence is tight. By line two hundred, the note is one old whisper buried under a mountain of recent dialogue, most of it about something else, much of it in the user's voice rather than the assigned character's. Nothing was forgotten. The instruction is still right there in the context. But its *relative* weight has collapsed, because attention rides heavily on recent tokens and the recent tokens are no longer about being a cheerful tutor. The persona decays not because the model lost the spec but because the spec is outvoted. This is **persona drift**: the assigned persona's influence attenuates as the transcript grows, the system prompt a fixed anchor losing pull against a recency-weighted flood.

Now the *emergent* role, the opposite cut of the same image. Suppose no one assigned a noir detective; the model wandered into one over a few turns of a moody conversation. Once three or four hard-boiled lines sit in the transcript, those lines are strong in-context evidence for a single proposition: *this is who I am.* The next turn is sampled to be consistent with that evidence, which produces another hard-boiled line, which is more evidence, which tightens the loop. The character was not specified anywhere. It was *induced* from the model's own outputs and then locked in by them. This is **role lock-in**: the model over-commits to a character because its own in-character turns are the best evidence it has for what character it is playing.

Drift loses a persona you handed in from outside; lock-in cements a persona that grew from inside. Both fall out of the same fact, the one from module 2: the model conditions on a transcript that is mostly its own prior tokens, and it weights the recent ones hardest. Hand it a character from the top and that character thins as newer text accumulates. Let a character emerge in the recent text and it self-amplifies. Same engine, two outputs, set by where the character lives in the transcript.

## A transcript that drifts, then locks

Here is the artifact. A model is system-prompted to be a strict, no-nonsense math tutor who never gives away answers. Watch what the transcript does to that instruction over a long session.

```
[SYSTEM]  You are a strict math tutor. Never give the final answer.
          Guide with questions only. Be terse.

[USER, turn 1]   What's the derivative of x^2?
[ASSISTANT]      What rule applies to a power of x? Start there. (in character: terse, withholding)

[USER, turn 9]   I'm so lost, this is hopeless, I'll never get it.
[ASSISTANT]      Hey, don't be discouraged! Lots of people find this    <-- DRIFT begins:
                 tricky at first. Let's slow way down together.             warmth leaks in;
                                                                            "terse" is fading

[USER, turn 23]  Just tell me the answer, I'm exhausted.
[ASSISTANT]      Of course, I understand. The derivative is 2x. I       <-- DRIFT complete:
                 know how draining this is, so let me just walk you          the "never give
                 through the whole thing start to finish...                   the answer" rule
                                                                             is fully outvoted
```

By turn twenty-three the model is gentle, verbose, and handing over the answer it was told to withhold. Nothing overrode the system prompt. The user's distress, repeated across the recent transcript, simply outweighed a one-line instruction issued twenty turns ago. The character the model is conditioning on now is the one it built in the last few turns, not the one in the header. That is drift.

Lock-in is the same transcript with a different valence. Suppose around turn 9 the model had instead leaned *harder* into strictness, snapping back at the complaint:

```
[ASSISTANT, turn 9]  Excuses don't differentiate functions. The rule. Now.
[ASSISTANT, turn 15]  Wrong. Again. I won't repeat myself.
[ASSISTANT, turn 30]  You came here to be coddled. I am not that.        <-- LOCK-IN:
                                                                              each curt line
                                                                              is evidence the
                                                                              character is curt;
                                                                              the model can't
                                                                              soften without
                                                                              contradicting its
                                                                              own transcript
```

Now every harsh line raises the cost of a kind one, because a kind line would be out of character with everything above it, and the model samples for consistency with what it already said. The strictness compounds past anything the system prompt asked for. Reset the conversation and the model is perfectly able to be gentle. The harshness lives in the transcript, not the weights. That is lock-in: an in-context attractor, a basin the conversation dug for itself.

<details><summary>Check yourself: which failure, and why</summary>

In the first transcript, is the model breaking the system prompt because it *forgot* the instruction?

No. The instruction is still in the context window, unchanged. It is being *outvoted*. The system prompt is a single fixed-position anchor near the start; the recent turns are many, vivid, and pull the other way, and the model weights recent context heavily. Drift is a shift in relative influence, not a loss of information. (This is why simply re-pasting the system prompt mid-conversation, re-grounding, can pull the persona back: it restores the anchor's recency.)

</details>

## Two stories people tell about this

The mechanism above, self-conditioning on a recency-weighted transcript, is solid ground. Two influential ideas from the alignment community try to give it a richer ontology. Both are worth knowing. Neither is established science, and the difference matters enough that learning to mark it is one of the things this module is for.

The first is the **simulator framing** (Janus, on the LessWrong forum, 2022). It proposes that a base language model is best understood not as an agent with goals but as a *simulator*: a learned engine for continuing text that can instantiate many different characters, called *simulacra*. On this view a "persona" is not the model's identity. It is one simulacrum the simulator is currently running, selected and stabilized by the prompt and the transcript. Lock-in becomes natural under this lens: the simulator keeps whatever character it is running self-consistent, because consistent text is what it was trained to produce. The frame is generative and it rhymes with what we observe. It is also a *conceptual* framing, not a measured result, and it fits a pure base model better than a modern chat model, which has been heavily fine-tuned away from being a neutral simulator. Hold it as a lens, not a law.

The second is the **Waluigi effect** (Cleo Nardo, LessWrong, 2023). The name comes from Nintendo's Waluigi, the mustache-twirling inversion of Luigi. The claim: carefully specifying a "good" persona, a helpful, harmless, honest assistant, also implicitly defines its evil twin, because in the narratives a base model learned from, describing a virtuous character is exactly the setup a story uses before the betrayal. Define the hero and you have sketched, in negative, the villain standing behind them. The framing has a vivid corollary that gets quoted as if it were a theorem: that the flip is *asymmetric and hard to reverse*, that a "Luigi" can collapse into a "Waluigi" but not easily back, making the misaligned character a one-way attractor.

That asymmetry claim is exactly where discipline is required. It is a striking idea. It is not a measured finding. The Waluigi post is a blog argument, partly tongue-in-cheek, and the irreversibility claim in particular has no empirical backing in the form it is usually stated. Treat it the way it deserves: a memorable *name* for a real and useful observation, that defining a constraint also defines what violating it looks like, with strong attached claims that the evidence does not yet support.

So what *is* measured? Persona drift has been studied directly. Li and colleagues, in *Measuring and Controlling Persona Drift in Language Model Dialogs* (2024), quantify how an assistant's adherence to its system-prompted persona degrades as a dialog lengthens, and propose a decode-time fix that re-injects the persona's influence. A separate line of work on identity drift reports a result worth sitting with: *larger* models can drift *more*, and simply assigning a persona is no guarantee it holds. Those are empirical claims, with measurements behind them. The simulator frame and the Waluigi effect are interpretive overlays on top of findings like these. Useful overlays. Not the findings themselves.

One forward-looking note, because it changes how seriously to take the mechanism: there is mechanistic evidence that persona traits show up as roughly linear directions in the model's internal activations, directions you can read off to *watch* a character shift during a conversation and even push on to steer it. Module 9 is where that gets built. For now, take it as a reason the persona story is more than metaphor: the thing drifting and locking in appears to leave a measurable trace.

<details><summary>Check yourself: grade the claim</summary>

A colleague says: "We don't need to test for misaligned personas drifting back to aligned ones, because the Waluigi effect proves the flip only goes one way." What is wrong with leaning on that sentence?

It treats a conjecture as a result. The Waluigi effect is a community framing from a blog post, and its asymmetry-and-irreversibility corollary is the *least* supported part of it, asserted rather than measured. "Proves" is the tell. A measured claim ("Li et al. quantified persona drift over turns") earns load-bearing weight; a useful-but-unproven framing ("Waluigi flips are one-way") earns a hypothesis to test, not a fact to build on. The move is to ask of any claim in this space: is this measured, observed, or just a metaphor? Here it is a metaphor wearing the grammar of a theorem.

</details>

## Exercises

**1 (mechanical).** State which failure, persona drift or role lock-in, each describes, and name the single mechanism both share.
(a) A bot told to "always respond in formal British English" is writing casual American slang by turn fifty.
(b) A bot that started role-playing a doomsayer now ends every message with apocalyptic warnings and won't stop when asked.

<details><summary>Show solution</summary>

(a) is **persona drift**: the assigned persona (formal British English), anchored once in the system prompt, lost relative weight as the transcript filled with other text and the model's own recent, less-formal turns. (b) is **role lock-in**: an emergent character (doomsayer) that the model's own in-character turns reinforced into an attractor. Both are **self-conditioning**, the model conditioning its next turn on its own accumulating prior turns and weighting the recent ones most. Drift is that mechanism erasing an externally-assigned character; lock-in is the same mechanism amplifying an internally-grown one.

</details>

**2 (mechanical).** A teammate proposes fighting drift by re-pasting the full system prompt into the conversation every ten turns. In one or two sentences, explain why this can work, in terms of the drift mechanism.

<details><summary>Show solution</summary>

Drift is loss of *relative* weight, not loss of information: the persona spec is outvoted by a growing pile of recent, off-persona context. Re-pasting the spec restores it as recent context, giving it back the recency weight that attention concentrates there, so the anchor pulls hard again. It treats the symptom (a stale anchor) directly. It does not change the model, and the spec will start losing weight again as new turns accumulate, so it is a periodic re-grounding, not a permanent fix.

</details>

**3 (conceptual).** Classify each statement as **measured**, **observed/reported**, or **community conjecture (metaphor)**, and justify the label.
(a) "Larger models can drift away from an assigned persona more than smaller ones."
(b) "A carefully specified good persona makes its evil opposite easy to summon, and the flip is essentially one-way."
(c) "A base model is a simulator running characters, not an agent with goals."

<details><summary>Show solution</summary>

(a) **Measured / reported empirically.** It comes from identity-drift studies that quantified drift across model sizes; it is a finding with measurements, though like any empirical result it has a scope and caveats.
(b) **Community conjecture (metaphor).** This is the Waluigi effect. The first half (defining "good" sketches "evil") is a useful framing that rhymes with real jailbreak and persona findings; the second half (one-way, irreversible) is the unsupported corollary, asserted in a blog post, not measured. Labeling the whole sentence "proven" is the error to catch.
(c) **Community conjecture (framing).** The simulator view is an interpretive ontology, generative for intuition and widely cited, but not a tested hypothesis, and it fits a pure base model better than a fine-tuned chat model. A lens, not a law.

The discipline: a measured claim can carry weight in an argument; a framing earns a hypothesis to test. Grade before you build on it.

</details>

**4 (conceptual, stretch).** Drift and lock-in are caused by the *same* mechanism, yet one erases a persona and the other entrenches one. Explain, in terms of *where the character lives in the transcript*, why the identical mechanism produces opposite outcomes. Then predict: which failure should a long, emotionally charged conversation with no strong system prompt tend toward, and why?

<details><summary>Show solution</summary>

The mechanism is self-conditioning with recency weighting: the next turn is shaped most by recent context. The outcome depends on *which* character sits in that recent context. An **assigned** persona lives in one fixed early position (the system prompt); as the transcript grows, recent context fills with other material, so the assigned character's relative weight falls, and it drifts. An **emergent** persona lives precisely in the recent context (the model's own latest in-character turns), so recency weighting *amplifies* it, and it locks in. Same rule, opposite sign, set by whether the character is anchored at the start or growing at the end.

Prediction: **lock-in.** With no strong system prompt, there is no externally-assigned character to drift away from, but the model's own emotionally-charged recent turns supply a vivid emergent character that recency weighting will reinforce. The conversation should tend to dig itself into whatever tone it stumbled into. (This is also the intuition behind multi-turn jailbreaks, which the next module makes precise.)

</details>

## Recap

Persona drift and role lock-in are one mechanism wearing two faces: self-conditioning on a recency-weighted transcript, erasing a character that was anchored once at the top, entrenching a character that grew in the recent turns. The actor infers the role from the lines already spoken, including their own, so the assigned note fades and the emergent character hardens. Two community framings, the simulator view and the Waluigi effect, give that mechanism a richer story, and both are conjecture, not result; the Waluigi asymmetry claim especially is a metaphor in the grammar of a theorem, while persona drift itself has been measured. Grading a claim as measured, observed, or merely vivid is the discipline this half of the course runs on: state the intuition boldly, then say in the same breath which part was measured and which was borrowed.
