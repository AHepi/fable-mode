---
title: "How JEPA Learns: Prediction in Representation Space"
description: "How a Joint-Embedding Predictive Architecture learns by predicting the representation of what's hidden, not its pixels — the architecture, the loss, and the collapse-fix shown, not just described. For readers new to machine learning."
level: intro
kind: stem
subject: "Computer Science"
prerequisites:
  - Curiosity about AI — no machine-learning background needed
  - Light arithmetic — a list of numbers, subtraction and squaring, two points being near or far
tags: [machine-learning, ai, self-supervised-learning, jepa, world-models, representation-learning]
estimatedHours: 2
schemaVersion: 1
aiGenerated: true
model: Fable Academy pipeline
generatedDate: "2026-06-18"
reviewed: false
sources:
  - title: "A. Assran et al., Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA), CVPR 2023"
    url: "https://arxiv.org/abs/2301.08243"
  - title: "A. Bardes et al., V-JEPA: Latent Video Prediction for Visual Representation Learning (2024)"
  - title: "Y. LeCun, A Path Towards Autonomous Machine Intelligence (2022)"
moduleOrder:
  - 01-the-wrong-target
  - 02-representations-and-distance
  - 03-the-jepa-architecture
  - 04-why-latent-prediction-wins
  - 05-collapse-and-the-fix
  - 06-i-jepa-v-jepa-world-models
---

A machine trained to repaint every pixel of a hidden patch spends almost all of its effort on detail that nothing could have predicted: the exact scatter of leaves, the grain of the noise. JEPA — a Joint-Embedding Predictive Architecture — makes a different bet. It predicts a *representation* of the hidden part, a short list of numbers that captures the structure, and it is graded by the distance between its guess and the answer in that representation space. No pixels are ever reconstructed; there is no decoder.

This course builds the architecture from nothing and shows it working at every step. You will compute a real distance between two representations, trace one input through the three boxes — context encoder, target encoder, predictor — to an actual loss value, watch how the whole system can cheat by collapsing every input to the same vector, and see the asymmetric fix (a stop-gradient and a slowly trailing target encoder) that shuts the cheat down. It closes on the instantiations that made the idea matter — I-JEPA on images, V-JEPA on video — and the larger thesis they serve: that a machine which predicts in an abstract space, not in pixels, is a step toward a usable world model. That last claim is a live bet, not a settled result, and the course says so.

Light arithmetic is all the math you need; every term is defined where it first appears. What you will not get is hand-waving — each mechanism arrives as a diagram, an equation, a worked number, or a few lines of pseudocode you can read.
