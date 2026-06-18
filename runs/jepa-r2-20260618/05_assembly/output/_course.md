---
title: "How JEPA Learns: Prediction in Representation Space"
description: "Why a machine that predicts the gist of what it sees — not the pixels — is a bet about how intelligence should be built. JEPA from scratch, for readers new to machine learning."
level: intro
kind: stem
subject: "Computer Science"
prerequisites:
  - Curiosity about AI — no machine-learning background needed
  - "Light arithmetic: a list of numbers, and the idea of two points being near or far"
tags: [machine-learning, ai, self-supervised-learning, jepa, world-models, representation-learning]
estimatedHours: 2
schemaVersion: 1
aiGenerated: true
model: Fable Academy pipeline
generatedDate: "2026-06-18"
reviewed: false
sources:
  - title: "M. Assran et al., Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA), CVPR 2023"
    url: "https://arxiv.org/abs/2301.08243"
  - title: "A. Bardes et al., V-JEPA: Latent Video Prediction for Visual Representation Learning, 2024"
    url: "https://arxiv.org/abs/2404.08471"
  - title: "Y. LeCun, A Path Towards Autonomous Machine Intelligence, 2022"
    url: "https://openreview.net/forum?id=BZ5a1r-kVsf"
moduleOrder:
  - 01-the-wrong-target
  - 02-representations-and-distance
  - 03-the-jepa-architecture
  - 04-why-latent-prediction-wins
  - 05-collapse-and-the-fix
  - 06-i-jepa-v-jepa-world-models
---

Teach a machine to fill in a hidden patch of an image and you face a choice that turns out to be about much more than images. You can have it repaint the missing pixels exactly — every leaf, every fleck of light — or you can have it predict only the *gist* of what's missing: a short summary of what's there, with the unpredictable detail thrown away. The first path spends almost all of its effort guessing noise no method could get right. The second is a bet that understanding lives in the gist, not the pixels — and that same bet, scaled up, is one serious answer to how machine intelligence might actually work.

That second path is JEPA, the **Joint-Embedding Predictive Architecture**. This course builds it from nothing: what a *representation* is and how you measure the distance between two of them; the three boxes that make a JEPA run and the loss that trains them; why predicting a representation beats reconstructing an image; the trap of *collapse* and the asymmetric trick that escapes it; and finally I-JEPA, V-JEPA, and the larger argument — Yann LeCun's — that an intelligence has to model the world in an abstract space rather than in raw sensation.

You need no machine-learning background and no calculus — just a little arithmetic and a willingness to follow a diagram, an equation, and a few lines of code when they show up. Each module shows the actual machinery, not a parade of analogies. By the end you will be able to draw the architecture, compute its loss by hand, explain why it doesn't collapse, and say clearly what JEPA is betting on — and what it still has to prove.
