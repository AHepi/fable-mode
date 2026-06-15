---
title: "How JEPA Works: Predicting the Gist, Not the Pixels"
description: "How JEPA learns from images and video by predicting the gist of what's hidden instead of the raw pixels — built from scratch for readers new to machine learning, and how it differs from LLMs."
level: intro
kind: stem
prerequisites:
  - Curiosity about AI — no machine-learning background needed
  - Comfort with everyday reasoning and very light arithmetic (a list of numbers; the idea of two things being close or far apart)
  - "Helpful but not required: having used an AI chatbot such as ChatGPT"
tags: [machine-learning, ai, self-supervised-learning, jepa, world-models, deep-learning]
estimatedHours: 3
schemaVersion: 1
aiGenerated: true
model: Fable Academy pipeline
generatedDate: "2026-06-14"
reviewed: false
sources:
  - title: "LeCun, A Path Towards Autonomous Machine Intelligence (2022)"
    url: https://openreview.net/forum?id=BZ5a1r-kVsf
  - title: "Assran et al., Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA), CVPR 2023"
    url: https://openaccess.thecvf.com/content/CVPR2023/html/Assran_Self-Supervised_Learning_From_Images_With_a_Joint-Embedding_Predictive_Architecture_CVPR_2023_paper.html
  - title: "Bardes et al., Revisiting Feature Prediction for Learning Visual Representations from Video (V-JEPA), 2024"
    url: https://arxiv.org/abs/2404.08471
  - title: "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning, 2025"
    url: https://arxiv.org/abs/2506.09985
  - title: "Meta AI, I-JEPA blog post"
    url: https://ai.meta.com/blog/yann-lecun-ai-model-i-jepa/
moduleOrder:
  - 01-filling-in-the-blank
  - 02-the-black-box
  - 03-representation-space
  - 04-how-machines-learn
  - 05-self-supervised-learning
  - 06-generative-prediction
  - 07-the-jepa-core
  - 08-why-latent-prediction
  - 09-collapse-and-the-fix
  - 10-i-jepa
  - 11-v-jepa
  - 12-world-models-and-the-bet
---

Cover the bottom half of this page with your hand and you can still read the words: the tops of
the letters are enough, and you fill in the rest without trying. Tear the last page out of a mystery
and most readers can still tell you, roughly, who did it. That small, constant act — being handed
part of something and supplying the rest — is quiet proof that you understood it. It is also the
seed of one of the most interesting bets in modern AI.

JEPA — short for Joint Embedding Predictive Architecture, the approach Yann LeCun and Meta have been
building — is a machine designed to learn the same way: by hiding part of the world from itself and
predicting what's missing, with nobody labeling the answers. But it predicts the *gist* of what's
hidden, not the raw pixels or the exact words. That one choice is what sets it apart from the systems
behind today's chatbots and image generators, and unpacking it is the whole of this course.

This is a course for readers with **no machine-learning background**. It builds every idea from
scratch and in order — what an encoder is, what a "representation" is, how a machine learns at all,
what self-supervised learning means — and only then assembles JEPA itself: its three parts, why
predicting in representation space is the point, the failure it has to avoid, and how it actually
works on images (I-JEPA) and video (V-JEPA). By the end you'll be able to explain, to a friend, why
JEPA predicts an *idea* of the missing piece rather than the piece itself, how that differs from how
an LLM works, and why some researchers think it's a path worth taking — stated honestly, as the open
question it still is.
