---
title: "Together Isn't Because"
course: lines-through-data
order: 3
summary: "Two measurements rising together can be coincidence, reverse cause, or both pulled by a hidden third thing — and how to ask which before you believe a headline."
estimatedMinutes: 14
objectives:
  - "Explain why correlation isn't causation, naming the three alternatives: coincidence, reverse causation, and a lurking variable."
  - "Identify a lurking variable that drives two correlated measurements (ice cream sales and drownings, both pulled by hot weather)."
  - "Apply the test \"could this be coincidence, reverse causation, or a hidden third thing?\" to a correlation, and propose a candidate lurking variable."
prerequisites: [01-scatter-and-correlation, 02-the-best-fit-line]
---

The headline almost writes itself: **"Eating Ice Cream Linked to Drowning."** Somewhere a chart backs it up — the more ice cream a town sells, the more people drown that month, and the cloud of points (M1) leans hard in one direction. You could thread the line through the cloud (M2) and read off a confident slope. So should the lifeguards confiscate the cones?

No. And the reason why is the single most important habit of mind in all of statistics — the one that protects you from more bad reasoning than any formula ever will. Two things rising together is a fact about the *data*. It says nothing, on its own, about what *makes* either one move. The work of this module is to put a gap between those two sentences and keep it there.

## Together isn't because

Here is the line to carry out of this course: **correlation isn't causation.** Two measurements can track each other beautifully — tightly enough that the best-fit line through the cloud (M2) looks authoritative — and still, neither one need cause the other at all.

Think back to signal vs. noise, the idea the Essentials course ends on: telling a real pattern from random wobble. A correlation is supposed to be signal — the trend we spotted in the cloud. But a correlation can be *noise dressed as signal*. The points line up; the line draws itself; the eye is satisfied — and underneath, nothing is causing anything. A confident slope is not a promise. It is just a summary of how two columns of numbers happened to move.

When two measurements rise and fall together, there are more explanations than the obvious one. At least three are worth holding up to the light before you believe "X causes Y."

- **Coincidence.** Pure luck. With enough measurements in the world, some pairs will track each other for no reason at all — the way two strangers can walk in step for a block and then part. No mechanism, no connection, just two wobbles that happened to wobble alike.
- **Reverse causation.** There *is* a cause — but the arrow points the other way. You see that wet streets and umbrellas go together and conclude umbrellas dampen the pavement. The rain is doing both, but if you must pick a direction, it is the weather opening umbrellas, not umbrellas summoning weather. Reverse causation is the right idea pointed backward.
- **A lurking variable.** A hidden third thing quietly drives *both* measurements, so they move together without ever touching each other. The lurking variable (also called a confounder) is the most common culprit and the hardest to see, precisely because it isn't on the chart. Both visible measurements are really just two shadows of something offstage.

Name that third thing carefully, because it does the heavy lifting for the rest of this module: a **lurking variable** is a hidden factor that influences both of the measurements you plotted, manufacturing a correlation between them even though neither causes the other.

## Worked example: the ice cream and the drownings

Take the headline apart with the lurking variable in hand.

The data are real enough. Plot a town's monthly ice cream sales against its monthly drownings and the cloud tilts upward: high-ice-cream months are high-drowning months. The correlation is strong. If this were M1's exercise, you'd call it a tight, positive relationship and move on.

Now run the test. *Could this be coincidence, reverse causation, or a hidden third thing?*

**Coincidence?** Unlikely — the pattern is too strong and too repeatable, year after year, town after town. This isn't two wobbles that lined up once.

**Reverse causation?** Try the arrow both ways and listen for the absurdity. Does ice cream cause drowning? There is no path from a cone to a current. Does drowning cause ice cream sales? More absurd still. Neither direction has a mechanism. When *both* directions sound ridiculous, that is your signal to stop looking *between* the two measurements and start looking *behind* them.

**A hidden third thing?** Here it is. Ask what could push *both* numbers up at the same time, and one answer arrives almost at once: **hot summer weather.** When it's hot, more people buy ice cream — and more people swim, so more people drown. Heat doesn't appear anywhere on the scatter plot. It never got plotted. But it is pulling both visible measurements up together, like a single hand lifting two puppets at once. Ice cream and drownings hold hands across the chart only because heat has a grip on each of them.

That is a lurking variable doing exactly what lurking variables do. The correlation is real; the causal story the headline implies is not. Confiscate every cone in town and the drownings won't budge, because the cones were never the cause — the summer was.

Notice what the best-fit line (M2) was doing this whole time. It threaded the cloud and drew a clean, confident slope through ice cream and drownings, exactly as it would for a genuine cause. The line cannot tell the difference. *A line fit to coincidental or confounded data still draws a confident slope.* The slope is honest about the numbers and silent about the cause. Reading causation off a fitted line is reading a meaning that was never written there.

## A high correlation can still be pure chance

Coincidence deserves one more look, because it is stranger than it sounds. Hunt across enough unrelated measurements — national cheese consumption, a rare cause of death, some economy's annual output, a celebrity's number of films that year — and you *will* turn up pairs whose lines march together almost perfectly. Whole collections of these have been assembled for laughs: two utterly unrelated trends that, plotted side by side, hug a line tightly enough to embarrass a real finding. `[verify figures]` (Keep these qualitative — the joke is the shape of the curves, not any particular numbers or years.)

The lesson isn't that the world is full of mysterious links. It's the opposite. With enough measurements being compared, near-perfect matches will appear *by chance alone*, carrying no meaning whatsoever. A tight correlation is not evidence of a connection. It is an invitation to ask where the connection might come from — and "nowhere, it's a fluke" is a legitimate answer.

## Check yourself

A study reports that towns with more firefighters at a blaze tend to suffer more fire damage. A columnist concludes that firefighters cause damage and the fire service should be cut. Which of the three alternatives explains the correlation, and what is the lurking variable?

<details><summary>Show answer</summary>

A lurking variable. The hidden third thing is **the size of the fire**: big fires draw more firefighters *and* cause more damage. Neither visible measurement causes the other — both are pulled up by the blaze's severity, which never made it onto the chart. (It is worth checking reverse causation too — does damage summon firefighters? Partly, but the fire's size is what drives both, so the lurking variable is the cleaner answer.) Cutting the fire service would not reduce damage; it would remove the response to fires that were always going to be destructive.

</details>

You see that students who sleep with the light on are more likely to be nearsighted. Before reading on, name one alternative to "night lights damage eyesight."

<details><summary>Show answer</summary>

A lurking variable fits well: **nearsighted parents**. Parents who need glasses may be more likely both to leave a light on for their child and to pass on a genetic tendency toward nearsightedness — so the parents' eyesight drives both measurements. (Reverse causation is also worth weighing: a child who is already nearsighted might prefer a light on. Either way, "the night light caused it" is the one explanation you should *not* reach for first.)

</details>

## Exercises

Work each one before opening its solution. For every correlation, run the same three-part test — coincidence, reverse causation, lurking variable — and, where the question asks, propose a specific hidden third thing.

**1.** A town finds that months with higher ice cream sales also have more sunburns. A reporter writes that ice cream thins the skin. Diagnose the error and name the lurking variable.

<details><summary>Show solution</summary>

The reporter has read causation off a correlation — the same trap as the drownings headline. Run the test: reverse causation (sunburn causing ice cream sales) and ice-cream-causing-sunburn both lack any mechanism, so look behind the chart. The lurking variable is again **hot, sunny weather**: sun drives both ice cream sales and sunburns. A tempting wrong answer: that the strength of the correlation somehow argues *for* the causal story. It doesn't — strength is about how tightly the cloud hugs a line (M1), and a confounded relationship can hug a line just as tightly as a causal one.

</details>

**2.** Across countries, a higher number of TVs per household correlates with longer life expectancy. Does buying TVs extend life? Propose a lurking variable.

<details><summary>Show solution</summary>

No. There is no plausible mechanism from owning a television to living longer, so don't accept the causal reading. The lurking variable is a country's **wealth** (or general standard of living): richer countries have both more household electronics and better nutrition, sanitation, and health care — which is what actually lengthens lives. TVs and life expectancy are two shadows of prosperity. Shipping TVs to a country would not, by itself, add years to anyone's life.

</details>

**3.** Someone shows you a chart where two completely unrelated national statistics track each other almost perfectly for a decade, and asks what deep force connects them. What's the most likely answer, and how does it connect to signal vs. noise?

<details><summary>Show solution</summary>

The most likely answer is **coincidence** — pure chance. When many unrelated measurements are compared against each other, some pairs will match closely for no reason at all; a near-perfect line is exactly the kind of thing that turns up by luck in a large enough search. In signal-vs-noise terms, this correlation is noise wearing the costume of signal: the tight line *looks* like a real pattern, but there is nothing underneath it. The honest response to "what connects them?" is "probably nothing."

</details>

**4.** Schools with bigger libraries tend to have students with higher test scores. A board member proposes mandating bigger libraries to raise scores. Run the three-part test and propose at least one lurking variable.

<details><summary>Show solution</summary>

Coincidence is unlikely (the pattern is broad and consistent). Reverse causation — high scores causing big libraries — is at most a weak side-effect, not the main story. The strongest explanation is a lurking variable: school **funding**, or the **wealth of the surrounding community**. Well-funded schools in better-off areas can afford bigger libraries *and* tend to post higher scores for many other reasons (smaller classes, more experienced teachers, students with more support at home). The library is one symptom of a richer school, not the cause of the scores — so a bare order to enlarge libraries, with nothing else changed, would likely move the scores very little.

</details>

**5.** *(Stretch.)* Pick any correlation you've seen in the news or noticed in your own life — "people who do X tend to be Y." Write down one coincidence story, one reverse-causation story, and one lurking-variable story that could each explain it. Which feels most likely, and what evidence would help you decide?

<details><summary>Show solution</summary>

There's no single right answer — the exercise is the *habit*. A strong response names a concrete, plausible lurking variable (not just "something else"), checks the reverse-causation arrow honestly rather than dismissing it, and admits when coincidence can't be ruled out. The closing move is the most valuable: notice that the data you've got — a correlation — can't settle the question, and that deciding *which* story is true would take more than a scatter plot. (Sorting out genuine cause is the job of carefully controlled studies, which is where the *Making Sense of Studies* mini in this series picks up.)

</details>

## Recap

You came in able to read a cloud of points, measure how tightly it hugs a line, and summarize its trend with a best-fit line. You leave with the one question that keeps all of that honest: *when two things move together, could it be coincidence, reverse causation, or a hidden third thing?* The ice cream never chilled the swimmers and the cones never caused the drownings — the summer did both, offstage, where the chart couldn't see it. A correlation is a beginning, not a verdict; the line through the cloud describes the numbers and stays silent about the cause. Carry that gap with you, and you've gained the rarest thing a chart can give: the refusal to be fooled by one.
