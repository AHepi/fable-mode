---
title: The Shape of a Pile of Numbers
course: stats-essentials
order: 2
summary: "How a whole pile of numbers has a shape, and what an average and a spread actually tell you, including when the average quietly lies."
estimatedMinutes: 16
objectives:
  - Describe a distribution as the shape of the data — where the bulk sits, the tails, and whether it leans to one side.
  - Distinguish the mean (the balance point) from the median (the middle value), and say when each one misleads.
  - Explain spread as how wide the variation is, and why the center alone is only half the story.
prerequisites: [01-data-and-variation]
---

Picture the crowd from the last module again — all those real, different heights we lined up and refused to call mistakes. Now stop looking at any single person. Step back until the individuals blur and what you see is the *whole crowd at once*: a low fringe of the very short, a thick middle where most people stand, a thin scatter of the very tall. That overall picture — not any one height, but the look of all of them together — is the thing this module is about. A pile of numbers has a shape, and reading that shape is most of what it means to read data.

## The shape of the pile

Line the crowd up shortest to tallest and bin them by height, and you get a silhouette: a tall stack where heights are common, short stacks out at the rare extremes. We call that silhouette a **distribution** — the shape of the whole pile of numbers, showing which values are common, which are rare, and where the bulk of them sit. Variation (the wobble in real data, from the last module) is *what* differs; the distribution is what that difference looks like when you take it all in at once.

The first thing to drop is the assumption that the silhouette is always a tidy, symmetric mound — high in the middle, tapering off evenly on both sides. Heights roughly do that. Plenty of things don't. Take the incomes in a town: most people cluster in a band near the lower end, and a long thin tail of high earners stretches far to the right, a few of them very far. House prices do the same. A distribution like that is **skewed** — lopsided, with one tail stretched out longer than the other. The bell is one shape among many, not the default; a great deal of real data leans hard to one side. Read the silhouette before you assume it.

<details><summary>Check yourself: which way does it lean?</summary>

In a town, a handful of people earn enormous amounts and most earn modestly. Is the long tail of the income distribution on the high side or the low side?

The long tail stretches toward the **high** side — the rare extreme values are the large incomes, far to the right of where most people sit. Incomes are right-skewed for exactly this reason.

</details>

## Center: the balance point and the middle

We usually don't carry the whole silhouette around in our heads. We reach for one number that stands in for "a typical value" — the **center** of the pile. There are two honest ways to pick that number, and the gap between them is where a lot of everyday confusion lives.

The first is the **mean**, the everyday **average**: add up all the values and divide by how many there are.

$$
\text{mean} = \frac{\text{total}}{\text{count}}
$$

That formula is the whole of it — total shared out equally, as if everyone got the same. The picture worth keeping is a **seesaw**. Lay the pile of numbers along a plank, one weight at each value, and the mean is the point where the plank balances. And here is the property that matters: a weight far out at one end *tilts the whole plank*. The balance point has to slide toward it to keep level. The mean is pulled toward the extremes, because every value, near or far, gets a full vote in the total.

The second is the **median**: line the values up in order, smallest to largest, and take the one in the middle — half the pile below it, half above. The median is a position in a line, not a balance point. It does not care how far the far values are, only how many lie on each side. Move the richest person's income from large to astronomical and the seesaw's balance tips further out, but the middle person in the line hasn't budged. *The seesaw is the mean. The median is the middle-in-line — don't put it on the plank.*

That difference is exactly why skew matters. When the pile is lopsided, the long tail drags the mean toward it while the median holds near the bulk. For right-skewed income, the mean sits above what most people actually earn, and the median sits down where the crowd is. Neither is wrong; they answer different questions. The mean asks "if we shared it all out equally, how much each?" The median asks "what does the person in the middle have?" When a few extreme values or outliers (those far-from-the-rest values from the last module) are in play, the median is usually the better picture of *typical*, and the mean is the one that quietly misleads if you read it as typical.

One more honesty check on any average: it is a summary, not a person. The often-quoted "2.4 children per family" lands on no real household — nobody has four-tenths of a child. An average can be a value no one in the data actually holds. So "the average customer" or "the average household" is a figure of speech about the pile, never a description of someone you could go and meet.

<details><summary>Check yourself: mean or median?</summary>

Nine workers earn modest, similar wages; their boss earns fifty times any of them. You want one number for "what a typical person here earns." Mean or median — and why?

The **median**. The boss's salary is a far-out weight that tilts the seesaw, dragging the mean well above what any of the nine workers actually make. The median — the middle person in line — ignores how extreme the top value is and lands among the workers, where "typical" really sits.

</details>

## Spread: how wide the wobble is

Two piles can share the very same center and still be nothing alike. Imagine two classes with the same mean test score of 70. In one, almost everyone scored between 66 and 74 — a tight pile. In the other, scores ran from 30 to 100 — half the room sailing, half sinking. Same balance point, completely different stories. The center told you where the pile sits; it said nothing about how far the values fan out around it. That fanning-out is the second half of the story, and it has its own name.

**Spread** is how wide the variation is — how far the values scatter from the center. The wide-open class has a large spread; the tight class a small one, the same wobble-and-scatter picture from the last module, now measured by its width rather than just noticed. The crudest way to put a number on it is the **range**: largest value minus smallest. It is easy and honest as far as it goes, but it leans on the two most extreme points alone, so a single outlier can blow it wide open. A steadier idea is the **standard deviation** — a typical distance from the mean, the usual gap between a value and the center of its pile. We won't compute it; the idea is what travels. From here on, "spread" is the word for it: a small spread means the pile huddles near its center, a large spread means it sprawls.

Center and spread are a pair. Give only the center and you have shown someone the address of the pile while hiding its size — true, and half a lie by omission.

## Worked example: where the mean and the median part ways

**The data.** Seven houses on a street sold for these prices, in thousands of dollars:

200, 210, 215, 220, 225, 230, 900.

Six sold in a tight band; one — a mansion at the corner — went for far more. That last figure is an outlier, and the pile is right-skewed.

**The median.** Seven values in order; the middle one is the fourth: **220** (thousand). Three sold for less, three for more. The mansion's price is just "the largest," and pushing it higher wouldn't move the middle of the line at all.

**The mean.** Add them: 200 + 210 + 215 + 220 + 225 + 230 + 900 = 2200. Divide by 7: about **314** (thousand).

**Read it.** The mean, near 314, is higher than *six of the seven* houses actually sold for. One far-out weight tilted the seesaw and dragged the balance point past almost the whole street. "The average house on this street sold for 314" is true arithmetic and a misleading picture of a typical house — that house is closer to 220. Quote the median here, or quote both and say why they differ. And the spread is wide precisely because of that lone high value: the range is 900 − 200 = 700, almost all of it from one sale.

## Exercises

1. A report says the mean household income in a region is 80,000 dollars, but the median is 52,000 dollars. What does the gap between them tell you about the shape of the income distribution?

   <details><summary>Show solution</summary>

   The mean sitting well above the median is the fingerprint of a **right-skewed** distribution: a long high-end tail. A small number of very high incomes act as far-out weights on the seesaw, tilting the mean upward, while the median — the middle person in line — stays down near where most households actually are. So most people in the region earn closer to 52,000 than to 80,000. (This is Pitfall #4 in action: under skew, the mean is the misleading "typical" and the median is the honest one.)

   </details>

2. A teacher reports the class's mean score and stops there. A parent asks, "But how did the class *do* — were they all about the same, or all over the place?" Why can't the mean alone answer that, and what would?

   <details><summary>Show solution</summary>

   The mean gives the center of the pile and nothing about its width. Two classes can share an identical mean while one is tightly bunched and the other is split between very high and very low scores. To answer "all the same or all over the place" you need the **spread** — how far scores scatter from the center (a typical distance from the mean, or at least the range). Center alone is half the story.

   </details>

3. A brochure claims "the average buyer of this car has 2.3 children, so we designed it for a family of four." What's wrong with reading the average that way?

   <details><summary>Show solution</summary>

   An average is a summary of the whole pile, not a real individual. No buyer has 2.3 children — the figure is a balance point across many families, some with none and some with five. Treating it as "a typical buyer" invents a person who may not exist (Pitfall #12). The average tells you about the group's center; it does not hand you a real household to design a car around.

   </details>

4. Someone glances at a chart and says, "The values bunch in the middle and thin out at the edges, so this must be a normal bell curve like everything else." Why is that an unsafe leap?

   <details><summary>Show solution</summary>

   "Bunches in the middle" is true of many shapes, not only the symmetric bell — a right-skewed pile (incomes, house prices, wait times) also has a thick body and thin edges, but one tail is stretched far longer than the other. Assuming bell-shaped by default (Pitfall #11) hides exactly that lopsidedness, and skew is what makes the mean and median diverge. Read the actual silhouette — is it even on both sides, or stretched on one? — before naming the shape.

   </details>

5. (Stretch.) You're handed only the mean and the median of a dataset. What can you already say about its shape, and what still can't you say?

   <details><summary>Show solution</summary>

   Comparing the two locates the lean: mean noticeably above median suggests a long high tail (right skew); mean below median suggests a long low tail (left skew); roughly equal suggests a fairly symmetric pile. What you **can't** say is anything about the **spread** — two datasets can share the same mean and median while one huddles tight and the other sprawls wide. Center, even two measures of it, never reveals width; for that you need a spread number too.

   </details>

## Recap

A pile of numbers has a silhouette — its distribution — and that shape, not any single summary, is what you're really reading: where the bulk sits, how long the tails run, which way it leans. Two numbers stand in for it, and they part ways under skew: the mean is the seesaw's balance point, tipped by far-out values; the median is the middle in line, steady against them. Add spread — how wide the pile fans out — because a center without a width is an address with the size left off. We've described one pile completely; next we ask the harder question of where the pile even came from, when we could only ever scoop up a handful of it.
