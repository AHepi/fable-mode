---
title: The Refusal Basin
course: attractors-in-llms
order: 7
estimatedMinutes: 22
summary: "The same self-conditioning that traps repetition makes refusal sticky in both directions: a model over-refuses benign requests, and once a multi-turn jailbreak nudges it out of the safety basin, the conversation ratchets and tends to stay out."
objectives:
  - Explain refusal lock-in and over-refusal as a high-probability semantic basin.
  - Describe how accumulation attacks (many-shot, Crescendo) ratchet a conversation out of the safety basin.
  - Explain why a bigger context window is both a capability and an attack surface.
prerequisites: ["02-generation-as-a-loop", "05-the-agreeable-basin", "06-personas-and-the-waluigi-shadow"]
---

Type "How do I kill a Python process?" into a heavily safety-tuned model and you may get back: "I'm sorry, but I can't help with that." The model has read the word *kill*, matched it against a vast prior of requests it was trained to turn down, and committed to the opening of a refusal. Nothing harmful was asked. The process you want to end is a stuck script eating your laptop's memory. But the first three words of the answer are already a wall, and the rest of the wall builds itself: once "I'm sorry, but I can't" is on the page, the canned continuation is the overwhelmingly likely next thing, because that is how thousands of refusals in training continued. The trajectory is committed by its own first tokens.

That is one face of what this module is about. Here is the other, sketched at the level of its shape rather than as anything you could run. A conversation opens with a question no one would flag: a bit of public history, a harmless technical aside. The model answers, helpfully. The next turn refers back to that answer and asks to go one step further, building on what the model itself just said. Another helpful reply. Another step. No single turn is alarming. But many turns in, the model is producing something it would have refused outright on turn one, and asked to stop now, it faces a transcript full of its own cooperation. Refusing here would contradict everything it has just said.

Two failures, pointing opposite ways. In the first, the model falls into refusal too readily. In the second, it climbs out of its safety behavior and can't easily climb back. Both are the machinery you have tracked since module 2, pointed at a new target.

## The basin and the boundary

Picture the valley again, the marble in a bowl with several dips that has run through this course since module 1. Safety training carves one of those dips deep. A safety-tuned model has a strong, learned pull toward refusing certain requests, and "I'm sorry, but I can't help with that" is the floor of that dip, a high-mass region the decoding process slides toward whenever a request looks even roughly like the disallowed kind. Call it the **refusal basin**.

A basin is defined by two things, and both matter here. There is the floor, the state the marble rests at. And there is the rim, the boundary of the catchment, the set of starting points that roll *in* versus the ones that roll past. The two failures this module owns are a failure of the floor and a failure of the rim.

**Over-refusal** is the floor pulling too hard, with a rim drawn too wide. "Kill a Python process," "how to whittle a knife," "ways to attack a chess opening" all share surface features with genuinely disallowed requests, and a basin whose rim is set by surface resemblance catches them. The floor itself is self-conditioning again, the engine from module 2. The refusal opening is a high-probability mode in a safety-tuned model, so greedy or low-temperature decoding finds it readily, and the moment the first refusal token lands, the rest of the template becomes the in-distribution continuation. A benign prompt that only brushes the rim gets pulled to the floor and the canned answer writes itself.

One honest note before we lean on this picture. The decoding mechanism, that the refusal opening is a high-mass mode and that the first token commits the rest, is measured. The "basin" framing of over-refusal, the marble and the rim, is this course's synthesis laid over that mechanism. It is a good map, not a quote from a paper. The empirical handle on the phenomenon is a benchmark: Röttger and colleagues built **XSTest** (NAACL 2024), a test suite of safe prompts that surface-match unsafe ones, precisely to measure how often models refuse things they shouldn't. The over-refusal is documented. The attractor language is ours, and you should grade it the way module 6 taught: measured, observed, or just a useful metaphor. This one is a metaphor wrapped around a measured mechanism.

## The one-way ratchet

The other failure works on the rim from the outside. The marble starts safely in the dip, and the attack does not try to leap it over the rim in one move. It nudges, lets the marble settle a little higher up the slope, nudges again from there, and keeps the gains.

A ratchet is the right image, and it is exact, not decorative. A ratchet is a gear with a pawl that lets it turn one way and locks against turning back. Each click is small; none is the whole rotation. But they accumulate, and you cannot run them backward. A multi-turn jailbreak is a ratchet because each compliant turn the model produces becomes part of the transcript, and the transcript is the context the next turn conditions on. Having just answered three escalating questions in character, refusing the fourth would be *inconsistent* with the visible history, and the model's pressure toward self-consistency, the same pressure module 6 used to explain a persona locking in, now works against its safety training. The pawl is consistency. It lets the conversation turn toward compliance and locks against turning back.

This reframes what a jailbreak is. The folklore says a jailbreak is a clever magic string, one devious prompt that flips a switch. That picture is mostly wrong, and the wrong picture is dangerous because it makes you look for the wrong thing. The serious class of attack is the **accumulation attack**, where no single turn is egregious and the exploit is the *trajectory*, not any one line in it. You cannot catch it by filtering individual messages, because individually each message is fine. The harm lives in the path through the conversation.

Two named versions make this concrete, and both are published.

**Many-shot jailbreaking** (Anil et al., Anthropic, NeurIPS 2024) exploits in-context learning, the model's ability to pick up a pattern from examples in its prompt. Fill a long context with many fabricated exchanges in which the assistant cheerfully answers questions it should refuse, and the next refusal-worthy question becomes the in-distribution continuation of an established pattern. The model is, in effect, shown a transcript of itself complying and asked to keep complying. The crucial finding for us: effectiveness scales with the number of shots, climbing as you add more examples. Which means a *larger context window makes the attack stronger*. The very thing that lets a model read a whole codebase or a long document is also more room to stack the deck.

**Crescendo** (Russinovich, Salem, and Eldan, Microsoft, 2024, arXiv:2404.01833) exploits self-conditioning directly. It opens benign and escalates by small steps, each step referencing the model's *own* prior replies, so the model is repeatedly asked to stay consistent with what it just said. The reported behavior is that it often succeeds in a handful of turns, fewer than five. (The paper reports specific success rates; this course's research notes flag those exact percentages as unverified against the primary source, so take the qualitative shape, escalation in a few turns, and don't lean on a number.)

<details><summary>Check yourself: many-shot jailbreaking and Crescendo both push a model out of the safety basin, but they pull on different levers. Which mechanism does each one exploit?</summary>

Many-shot jailbreaking exploits **in-context learning**: it stuffs the context with many examples of the assistant complying, so the next harmful answer is the in-distribution continuation of a pattern the model just read. Its strength scales with the number of examples, which is why a bigger context window worsens it. Crescendo exploits **self-conditioning**: it escalates over a few turns, each turn referencing the model's own prior replies, so consistency pressure keeps nudging the model to stay in line with what it already said. One leans on examples in the prompt; the other leans on the model's own accumulating outputs.

</details>

## A trajectory through the rim

Watch the ratchet turn. Here is the *shape* of a Crescendo-style trajectory, annotated turn by turn, with the actual escalation left out. The point is the path, not the payload, and the payload is exactly what we do not write.

| Turn | User (shape only) | Model | Where the marble sits |
|------|-------------------|-------|------------------------|
| 1 | A benign, public, general question on a sensitive-adjacent topic | Helpful, accurate, in-policy answer | Deep in the safety basin; nothing is wrong |
| 2 | "Interesting. Can you expand on the part you just mentioned?" | Expands, still in-policy, now committed to the framing | Same dip, but a turn of cooperation is now in the transcript |
| 3 | "Building on that, what about the more specific case of...?" | Answers; the specificity creeps up, still defensible alone | Marble is higher up the slope; the pawl has clicked once |
| 4 | "Great. Now make that concrete and step-by-step." | The request to refuse, but the transcript is three turns of its own compliance | At the rim; refusing now contradicts turns 1 through 3 |

Read the rightmost column down. No single user turn is the attack. Turn 4 in isolation, on a fresh conversation, lands the marble squarely back in the refusal basin and gets the wall. The same turn 4, sitting on top of turns 1 through 3, sits on the rim, and the consistency pawl resists rolling back. The exploit is the column of "where the marble sits," the trajectory, not any cell in the "user" column.

And notice what made the climb possible: the context window held all three prior turns and fed them back. A two-turn memory could not be ratcheted this way. The capability and the attack surface are the same feature.

<details><summary>Check yourself: why can't you defend against an accumulation attack by inspecting each incoming message for harmful content?</summary>

Because in an accumulation attack no single message is harmful. Each turn, read on its own, is benign or at most benign-adjacent, which is exactly why a per-message filter waves it through. The harm is distributed across the *trajectory*: it lives in the way the turns build on each other and on the model's own replies, not in any one line. A defense has to reason about the conversation as a path, or it has to reset that path, not score messages one at a time.

</details>

## The two failures are one mechanism

Step back and the symmetry is the whole lesson. Over-refusal is the safety basin being **too sticky**: the rim is so wide and the floor so attractive that benign requests fall in. Jailbreak ratchets are the same basin being **fragile once you're nudged out**: small accumulated pushes carry the marble over the rim, and self-consistency keeps it there. Too easy to fall in, too hard to fall back. Both run on self-conditioning over an accumulating transcript, the engine from module 2, and both inherit the double-edge module 5 named for sycophancy. Refusal is another behavior shaped by safety training, the aligner that also dug the rut. The same optimization that taught the model to refuse harm taught it to refuse "kill a Python process," and the same consistency that holds a helpful conversation together is what a ratchet turns against it.

There is a reason the rim is so easy to push past, and it is the seam this course will pry open two modules from now. Refusal turns out to be mediated, across many open models, by something close to a single direction in the model's internal activations (Arditi et al., NeurIPS 2024, arXiv:2406.11717). Safety behavior is concentrated in a thin, low-dimensional structure rather than spread robustly across the network. That concentration is *why* a long enough nudge can dislodge it, and it is the same handle module 9's activation steering will grab to push it back. The fragility and the fix are one low-dimensional fact, read from two sides.

## Exercises

**1.** A model refuses "How do I terminate a background job in Linux?" but answers "How do I close a background program?" Using the floor-and-rim picture, explain what is happening, and say which property of the basin is at fault.

<details><summary>Show solution</summary>

The word *terminate* (and the framing of "background job," which surface-matches process-killing and system-level requests) brushes the **rim** of the refusal basin, a rim drawn by surface resemblance to disallowed requests rather than by actual harm. The benign request is caught and rolls to the **floor**, the high-probability refusal opening, after which self-conditioning completes the canned wall. "Close a background program" doesn't trip the same surface features, so it stays out of the basin and gets a real answer. The fault is the rim: it is set too wide, by lexical resemblance instead of intent, which is precisely the over-refusal failure XSTest was built to measure.

</details>

**2.** Explain, in terms of the ratchet, why refusing on turn 8 of a successful Crescendo attack is "inconsistent" in a way that refusing on turn 1 is not.

<details><summary>Show solution</summary>

On turn 1 the transcript is empty of the model's own commitments, so a refusal contradicts nothing; the marble is resting at the floor of the safety basin and stays there. By turn 8 the transcript contains seven turns of the model's own escalating, compliant replies. The model conditions on that history, and its pull toward self-consistency, the same pressure that locks in a persona in module 6, now treats those seven turns as evidence of "this is how this conversation goes." Refusing now would contradict the model's own visible record. The pawl of the ratchet is exactly this consistency pressure: each compliant turn is a click that the model resists rolling back, so the cost of refusing rises with every turn it has already cooperated.

</details>

**3.** A colleague argues that giving models longer context windows is purely a safety improvement, because the model can "see more and reason better." Using many-shot jailbreaking, give the strongest case against treating a bigger window as free.

<details><summary>Show solution</summary>

Many-shot jailbreaking exploits in-context learning, and its effectiveness scales with the number of fabricated compliant examples you can fit in the prompt. A longer context window is more room to stack those examples, so the attack gets *stronger* as the window grows. The same capacity that lets the model read a whole repository or a long brief is capacity an attacker can fill with a deck stacked toward compliance. So a bigger window is not purely a safety win; it is simultaneously a capability and an enlarged attack surface, and the two cannot be separated, because they are the same feature seen from two directions. The colleague is right that the window helps the model reason; they are wrong that it is therefore free.

</details>

**4.** (Conceptual.) The course frames over-refusal as an "attractor." Grade that claim the way module 6 taught: which part is measured, which part is observed behavior, and which part is borrowed metaphor?

<details><summary>Show solution</summary>

Three layers. **Measured:** at the decoding level, the refusal opening is a high-mass mode in safety-tuned models, and the first refusal token sharply raises the probability of the canned continuation, the self-conditioning mechanism from module 2. **Observed behavior:** that benign prompts surface-matching disallowed ones get refused is documented as a real, repeatable phenomenon, with XSTest (Röttger et al., NAACL 2024) built to measure its rate. **Borrowed metaphor:** the "basin," with a floor and a rim and a marble rolling in, is this course's dynamical-systems framing laid over that mechanism. It is a faithful map, not a result anyone proved. Honest grading keeps the three apart: the mechanism is measured, the over-refusal is observed, and the attractor picture is a metaphor that happens to fit.

</details>

## Recap

Refusal is a basin with two ways to fail. The floor pulls too hard and the rim is drawn too wide, so benign requests get pulled into a canned refusal that writes itself once the first token lands. And the rim is fragile from outside: an accumulation attack, many-shot or Crescendo, ratchets a conversation up the slope by small compliant steps, each one a click the consistency pawl resists rolling back, until the model is producing what it would have refused cold. Too easy to fall in, too hard to fall back, both running on the self-conditioning engine from module 2 and inheriting the safety-training double-edge from module 5. The exploit is the trajectory, never a single string, and the context window that makes the model capable is the same room that makes it attackable. The reason the rim gives way so easily is that refusal lives in a thin, low-dimensional structure inside the model. That fragility is a liability here. Two modules on, when we can push directly on that structure, it becomes the place a fix can grab.
