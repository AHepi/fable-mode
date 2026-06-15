---
title: "Together Isn't Because"
course: lines-through-data
order: 3
summary: "Two measurements rising together can be coincidence, reverse cause, or both pulled by a hidden third thing — and how to ask which before you believe a headline."
estimatedMinutes: 14
objectives:
  - "Explain why two measurements rising together does not show that one causes the other."
  - "Distinguish the three innocent explanations for a correlation: coincidence, reverse causation, and a lurking variable."
  - "Identify a plausible lurking variable behind a correlation, using ice cream sales and drownings as the model."
prerequisites: [01-scatter-and-correlation, 02-the-best-fit-line]
---

The headline almost writes itself: **"Eating Ice Cream Linked to Drowning."** And a chart backs it up — the more ice cream a town sells, the more people drown that month, and the cloud of points (M1) leans hard up to the right. You could thread the line through the cloud (M2) and read off a confident slope. So should the lifeguards confiscate the cones?

No. And the reason why is the single most important habit of mind in this whole course — the one that protects you from more bad reasoning than any number ever will. Two things rising together is a fact about the *data*. It says nothing, on its own, about what *makes* either one move.

## Together isn't because

Here is the line to carry out of this course: **correlation isn't causation.** Two measurements can track each other beautifully — tightly enough that the best-fit line through the cloud (M2) looks authoritative — and still, neither one need cause the other.

Think back to signal vs. noise, the idea the Essentials course ends on: telling a real pattern from random wobble. A correlation is supposed to be signal — the trend we spotted in the cloud. But a correlation can be *noise dressed as signal*. The points line up, the line draws itself, the eye is satisfied — and underneath, nothing is causing anything. A confident slope is not a promise. It is only a summary of how two columns of numbers happened to move.

When two measurements rise and fall as a pair, there are more explanations than the obvious one. Three are worth holding up to the light before you believe "X causes Y":

- **Coincidence.** Pure luck. With enough measurements in the world, some pairs track each other for no reason at all — the way two strangers can walk in step for a block and then part. No mechanism, just two wobbles that happened to wobble alike.
- **Reverse causation.** There *is* a cause, but the arrow points the other way. You see wet streets and open umbrellas together and conclude umbrellas dampen the pavement. If you must pick a direction, it is the rain raising umbrellas, not umbrellas summoning rain. The right idea, pointed backward.
- **A lurking variable.** A hidden third thing quietly drives *both* measurements, so they rise together without ever touching each other. A **lurking variable** (also called a confounder) is the most common culprit and the hardest to spot, precisely because it isn't on the chart. Both visible measurements are just two shadows of something offstage.

## Worked example: the ice cream and the drownings

Take the headline apart with the lurking variable in hand.

The data are real enough. Plot a town's monthly ice cream sales against its monthly drownings and the cloud tilts upward: high-ice-cream months are high-drowning months. The correlation is strong. In M1's terms, a tight, positive relationship.

Now run the test. *Could this be coincidence, reverse causation, or a hidden third thing?*

**Coincidence?** Unlikely — the pattern is too strong and too repeatable, year after year, town after town. Not two wobbles that lined up once.

**Reverse causation?** Try the arrow both ways and listen for the absurdity. Does ice cream cause drowning? There is no path from a cone to a current. Does drowning cause ice cream sales? More absurd still. When *both* directions sound ridiculous, stop looking *between* the two measurements and start looking *behind* them.

**A hidden third thing?** Here it is. Ask what could push *both* numbers up at once, and one answer arrives fast: **hot summer weather.** When it's hot, more people buy ice cream — and more people swim, so more people drown. Heat never got plotted; it appears nowhere on the scatter plot. But it is lifting both visible measurements, like one hand raising two puppets. Ice cream and drownings hold hands across the chart only because heat has a grip on each.

That is a lurking variable doing exactly what lurking variables do. The correlation is real; the causal story the headline implies is not. Confiscate every cone in town and the drownings won't budge — the cones were never the cause. The summer was.

Notice what the best-fit line (M2) was doing this whole time. It threaded the cloud and drew a clean, confident slope through ice cream and drownings, just as it would for a genuine cause. *A line fit to coincidental or confounded data still draws a confident slope.* The slope is honest about the numbers and silent about the cause. Reading causation off a fitted line is reading a meaning that was never written there.

And coincidence deserves one last look, because it is stranger than it sounds. Hunt across enough unrelated measurements — a nation's cheese consumption, a rare cause of death, some economy's yearly output — and you *will* turn up pairs whose lines march together almost perfectly. Whole collections of these have been gathered for laughs: two utterly unrelated trends that, side by side, hug a line tightly enough to embarrass a real finding. `[verify figures]` The joke is the shape of the curves, not any particular numbers or years. The lesson is blunt: a tight correlation is not evidence of a connection — it is an invitation to ask where the connection might come from, and "nowhere, it's a fluke" is a legitimate answer.

## Check yourself

A study reports that towns sending more firefighters to a blaze tend to suffer more fire damage. A columnist concludes firefighters cause damage. Which of the three alternatives explains the correlation, and what is the lurking variable?

<details><summary>Show answer</summary>

A lurking variable: **the size of the fire.** Big fires draw more firefighters *and* cause more damage. Neither visible measurement causes the other — both are pulled up by the blaze's severity, which never made it onto the chart. Cutting the fire service wouldn't reduce damage; it would only remove the response to fires that were always going to be destructive.

</details>

You see that students who sleep with the light on are more often nearsighted. Before reading on, name one alternative to "night lights damage eyesight."

<details><summary>Show answer</summary>

A lurking variable fits well: **nearsighted parents.** Parents who need glasses may be more likely both to leave a light on for their child and to pass on a tendency toward nearsightedness — so the parents' eyesight drives both measurements. (Reverse causation is also worth weighing: a child who is already nearsighted might prefer a light on.) Either way, "the night light caused it" is the explanation you should *not* reach for first.

</details>

## Exercises

For each correlation, run the same three-part test — coincidence, reverse causation, lurking variable — and, where asked, propose a specific hidden third thing.

**1.** A town finds that months with higher ice cream sales also have more sunburns. A reporter writes that ice cream thins the skin. Diagnose the error and name the lurking variable.

<details><summary>Show solution</summary>

The reporter has read causation off a correlation — the drownings trap again. Both arrows (sunburn causing ice cream, ice cream causing sunburn) lack any mechanism, so look behind the chart: the lurking variable is **hot, sunny weather**, which drives both. A tempting wrong answer: that the *strength* of the correlation argues for the causal story. It doesn't — strength is about how tightly the cloud hugs a line (M1), and a confounded relationship can hug a line just as tightly as a causal one.

</details>

**2.** Across countries, more TVs per household correlates with longer life expectancy. Does buying TVs extend life? Propose a lurking variable.

<details><summary>Show solution</summary>

No — there is no plausible path from owning a television to living longer. The lurking variable is a country's **wealth**: richer countries have both more household electronics and better nutrition, sanitation, and health care, which is what actually lengthens lives. TVs and life expectancy are two shadows of prosperity. Shipping TVs to a country would add no years to anyone's life.

</details>

**3.** Someone shows you a chart where two completely unrelated national statistics track each other almost perfectly for a decade, and asks what deep force connects them. What's the most likely answer, and how does it connect to signal vs. noise?

<details><summary>Show solution</summary>

The most likely answer is **coincidence.** When many unrelated measurements are compared, some pairs match closely for no reason at all; a near-perfect line is exactly the kind of thing that turns up by luck in a large enough search. In signal-vs-noise terms, this correlation is noise wearing the costume of signal: the tight line *looks* like a real pattern, but nothing is underneath it. The honest response to "what connects them?" is "probably nothing."

</details>

**4.** Schools with bigger libraries tend to have students with higher test scores. A board member proposes mandating bigger libraries to raise scores. Run the three-part test and propose at least one lurking variable.

<details><summary>Show solution</summary>

Coincidence is unlikely (the pattern is broad and consistent), and reverse causation is at most a weak side-effect. The strongest explanation is a lurking variable: school **funding**, or the **wealth of the surrounding community**. Well-funded schools can afford bigger libraries *and* tend to post higher scores for many other reasons (smaller classes, more experienced teachers, more support at home). The library is a symptom of a richer school, not the cause of the scores — so a bare order to enlarge libraries, nothing else changed, would move the scores very little.

</details>

**5.** *(Stretch.)* Pick a correlation you've seen in the news or noticed yourself — "people who do X tend to be Y." Write one coincidence story, one reverse-causation story, and one lurking-variable story that could each explain it. Which feels most likely, and what evidence would help you decide?

<details><summary>Show solution</summary>

No single right answer — the exercise is the *habit*. A strong response names a concrete, plausible lurking variable (not just "something else"), checks the reverse-causation arrow honestly, and admits when coincidence can't be ruled out. The closing move matters most: notice that a correlation alone can't settle the question, and that deciding *which* story is true takes more than a scatter plot. (Sorting out genuine cause is the work of carefully controlled studies — where the *Making Sense of Studies* mini in this series picks up.)

</details>

## Recap

You arrived able to read a cloud of points, measure how tightly it hugs a line, and summarize its trend with a best-fit line. You leave with the one question that keeps all of it honest: *when two things rise together, could it be coincidence, reverse causation, or a hidden third thing?* The ice cream never chilled the swimmers; the summer drove both, offstage, where the chart couldn't see it. A correlation is a beginning, not a verdict — the line through the cloud describes the numbers and stays silent about the cause. Carry that gap with you, and you've gained the rarest thing a chart can give: the refusal to be fooled by one.
</content>
