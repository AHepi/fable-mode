# Curriculum — Lines Through Data (series: Statistics, From the Ground Up · role: course)

A standalone sibling mini. Reads `runs/statistics-20260615/series-canon.md` as binding: it reuses the
shared terms/metaphors and **calls back** to Essentials for *variation* and *signal vs. noise* rather
than re-deriving them. Takeable on its own. One idea-cluster: **how to read a relationship between two
things — and why "they move together" is not "one causes the other."**

## Course metadata (for `_course.md`)

- **title:** Lines Through Data
- **description:** How to read a relationship between two measurements — scatter plots, what correlation does and doesn't capture, the best-fit line as a summary, and the single most important caution in statistics: correlation isn't causation.
- **level:** intro
- **kind:** stem  *(light math only; correlation and the best-fit line are taught as ideas, never derived)*
- **prerequisites:** reading a simple x–y plot and plotting a point (the **Statistics Essentials** mini is the ideal warm-up but not required)
- **tags:** [statistics, correlation, regression, causation, scatter, relationships]
- **estimatedHours:** 0.8
- **series:** `{ slug: statistics, title: "Statistics, From the Ground Up", role: course, order: 3 }`

## Prerequisite graph

M1 → M2 → M3 (linear). M2 (the line) builds on M1 (scatter/correlation); M3 (causation) builds on both.
All call back to Essentials' **variation** and **signal vs. noise**.

## Modules

### M1 — Two Things at Once  ·  slug `01-scatter-and-correlation`  ·  ~15 min
- **summary:** Plot two measurements against each other and a cloud appears — sometimes a trend, sometimes a blob. How tight that cloud is, captured by correlation, and the trap of the number zero.
- **objectives:** (1) Read a **scatter plot** (each subject a point; the cloud's tilt and tightness). (2) Describe **correlation** as the strength and direction of a *straight-line* relationship, on a −1 to +1 scale. (3) Explain why correlation 0 means no *linear* relationship (a strong curve can hide there), and why an outlier can fake or inflate it.
- **owns (course-local):** term *correlation*; Pitfall #8 (correlation 0 ≠ no relationship).
- **calls back:** *variation* and *signal vs. noise* (Essentials) — a tilted cloud is signal; the scatter around it is noise.
- **prereqs:** none (callbacks self-contained).

### M2 — The Line Through the Cloud  ·  slug `02-the-best-fit-line`  ·  ~14 min
- **summary:** The single straight line that comes closest to all the points at once — what it summarizes, why it predicts averages not individuals, and why trusting it past the edge of the data is a mistake.
- **objectives:** (1) Explain the **best-fit line** as the line making the vertical misses smallest overall — a summary of the average trend (taught as an idea, not derived). (2) Explain why the line describes the *average* y for an x, not any individual (points scatter around it — signal vs. noise). (3) Explain why **extrapolating** far beyond the data is unreliable.
- **owns (course-local):** term *best-fit line*; Pitfall #9 (line predicts individuals / works for any x).
- **calls back:** *signal vs. noise* (the line is the signal; the scatter is noise).
- **prereqs:** M1.

### M3 — Together Isn't Because  ·  slug `03-correlation-not-causation`  ·  ~14 min
- **summary:** The headline caution: two things rising together can be coincidence, reverse cause, or both driven by a hidden third thing — and how to spot which.
- **objectives:** (1) Explain why **correlation isn't causation** (coincidence, reverse causation, or a hidden cause). (2) Identify a **lurking/confounding variable** that drives both (ice cream sales & drownings ← hot weather). (3) Recognize a purely coincidental correlation (one Tyler Vigen-style example, no specific figures) and ask "what third thing could explain this?"
- **owns (course-local):** terms *lurking/confounding variable*; Pitfall #7 (correlation ≠ causation).
- **calls back:** *signal vs. noise* (a correlation can be noise dressed as signal).
- **prereqs:** M1, M2.

## Notes for authoring
- Use the **ice-cream/drownings** confounder + at most **one** Tyler Vigen example, with **no specific
  numbers/years** (`[verify figures]`). Keep correlation and the best-fit line as *ideas* — never derive
  least squares.
- Binding contracts: `runs/statistics-20260615/series-canon.md` + this course's `canon.md`.
