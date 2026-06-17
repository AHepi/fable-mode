---
title: "The Conjecture–Criticism Calculus"
description: "A self-contained formal system for how knowledge grows — guesses, attacks, and what survives — built from sets, relations, and one fixed-point construction."
level: undergrad
kind: stem
subject: "Mathematics"
prerequisites:
  - Reading and writing short proofs
  - "Basic set theory: sets, subsets, relations as sets of ordered pairs, functions"
  - Mathematical induction
tags: [formal-systems, logic, argumentation, discrete-mathematics, fixed-points]
estimatedHours: 4
schemaVersion: 1
aiGenerated: true
model: Fable Academy pipeline
generatedDate: "2026-06-17"
reviewed: false
sources:
  - title: "P. M. Dung, On the acceptability of arguments and its fundamental role in nonmonotonic reasoning, logic programming and n-person games, Artificial Intelligence 77 (1995)"
    url: "https://doi.org/10.1016/0004-3702(94)00041-X"
  - title: "K. Popper, Conjectures and Refutations (Routledge, 1963)"
  - title: "D. Deutsch, The Beginning of Infinity (Allen Lane, 2011)"
moduleOrder:
  - 01-the-game
  - 02-commitments-and-verdicts
  - 03-artifacts-and-problems
  - 04-states-and-attack-graph
  - 05-warrants-and-well-formedness
  - 06-conjecture-and-criticism-rules
  - 07-the-grounded-extension
  - 08-adjudication-and-reinstatement
  - 09-criticizable-and-modifiable
  - 10-hard-to-vary-and-reach
  - 11-spawning-and-fallibilism
---

Two people disagree. One floats a guess; the other finds a hole in it; a third points out that the hole isn't really a hole. Who is right *now* — and what happens to the first guess when its objection is itself knocked down? We argue this way all the time, and almost never with any precision about it.

This course makes that dance exact. You will build, piece by piece, a small formal system — a calculus of **conjecture and criticism** — in which ideas are *artifacts*, objections are *warranted attacks* in a directed graph, and "what currently survives" is computed, not voted on: it is the **grounded extension**, the unique set you reach by starting from nothing and repeatedly admitting whatever all of whose attackers have already fallen. From that one construction a short, satisfying theorem drops out — refute a criticism and the idea it attacked comes back, automatically — and from there you get a graded measure of how *hard to vary* an explanation is, a notion of *reach*, and two axioms that keep the whole system honestly open-ended, with even its own rules left inside it and open to attack.

Everything is built from tools you already have: sets, relations, functions, a little probability, and induction — which is all the fixed-point construction really is, wearing a different hat. No computability theory, no prior logic-beyond-proofs, no philosophy background is assumed; the one place the machine touches a universal computer, we treat it as a black box and move on. By the end you will be able to read a tangle of competing claims, draw it as an attack graph, compute by hand exactly which claims stand, and prove why. (This formal system is drawn from the "Level 1" calculus of a 2026 research note; the theorem that this machinery was *built* to prove — that creativity is unavoidable for any system that aims to solve every soluble problem — lives just past the edge of this course.)
