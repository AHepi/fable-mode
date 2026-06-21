# Canon — The Myth of Barter

The course's consistency contract. Binding on every authoring sub-agent and on the editorial stage.
Humanities course: no math, no Definition/Theorem blocks. "One name per object" means one *term*, one
*gloss*, one *attribution* for each recurring concept and thinker, so the nine blind-parallel authors
do not drift in vocabulary, framing, or who-said-what. Companion to "How Capitalism Came to Seem
Natural"; where they overlap, use the same terms and glosses.

## 0. Non-negotiable rules (read first)

**Stance (carried verbatim from the companion course):**
1. **Steelman, then dismantle.** State the barter story's strongest, most intuitive version before
   any rebuttal. Trade and barter do occur; money is convenient; Smith was reasoning, not lying. The
   course's credibility is the honest steelman.
2. **Evidence vs. interpretation, kept visibly separate.** "Cuneiform tablets ~3000 BCE record debts
   in silver and barley" is evidence. "Therefore money is essentially a measure of debt" (Innes's and
   Graeber's reading) is interpretation. Mark the seam in the prose every time.
3. **Name live debates; don't resolve them.** Four real ones: (a) is the barter story a *historical
   claim* or a *logical fable*? (b) chartalism vs. commodity theory (unsettled); (c) how far to trust
   Graeber's *Debt*; (d) the "primordial debt" over-reach (keep out or flag hard). Flag, pick no winner.
4. **No teleology.** Money's history was not an upward march toward coins and markets. Coinage was
   contingent. Banned move: "money was heading toward its modern form."
5. **No romanticizing the past.** The credit-first past had debt bondage, slavery, hierarchy
   (module 04 carries this anchor). "Credit came first" is not "the past was kinder."
6. **Don't blend the thinkers.** Smith, Menger, Humphrey, Innes, Knapp, Ingham, Grierson, Hudson,
   Graeber are distinct and disagree on specifics. Attribute each claim; never fuse them into one
   "chartalist" voice. Attribute Graeber's *readings* to Graeber, not as settled consensus.
7. **Ideology critique is not conspiracy.** "Whose interests does the myth serve?" (module 08) analyzes
   what a story makes seem natural; it is not a claim that anyone consciously fabricated it.
8. **Integrity lines:** never overclaim "barter never happened" (the claim is: no barter-economy-to-
   money *sequence* in the record); never turn chartalism into MMT policy advocacy; never fabricate
   quotes, page numbers, clause numbers, interest rates, etymologies, or precise dates (use "~3000 BCE",
   "~7th c. BCE"; mark anything uncertain and present it cautiously).

**Hard pipeline rules (new this cycle):**
9. **No em dashes.** The em dash (`—`) is banned in prose. Split into separate sentences (preferred),
   or use a comma, colon, or parentheses. Quotations reproduce their source faithfully. The verify
   lint (`lint-prose.mjs`, check 3) hard-flags any em dash in non-quote prose. **Also:** any
   frontmatter value (summary, objective) containing a colon must be wrapped in quotes, or the YAML
   breaks the build.
10. **Length follows the idea, not a word count.** Cover the idea well at intro level, then stop. Never
    compress prose to hit a number; prefer more short sentences to fewer dense ones.

## 1. Term, gloss & attribution registry

One canonical term, gloss, and attribution per recurring object. At `intro`, glosses are **re-glossed
on every reuse** (a few words restating the term), not merely re-named.

| Thing | Canonical term | First-use gloss (plain words) | Owner / attribution |
|-------|----------------|-------------------------------|---------------------|
| Direct goods-for-goods swap | **barter** | swapping goods directly for goods, with no money in between | 01 |
| Barter's core problem | **the double coincidence of wants** | barter only works if each side happens to want exactly what the other has, at the same time | 01 |
| The standard origin story | **the barter myth** / the standard sequence | barter, then money invented to fix it, then markets and credit | 01 |
| Reasoned-out origin story | **conjectural history** | an origin reasoned out from first principles ("imagine a primitive society…"), not dug from evidence | 01 |
| Close study of living societies | **ethnography** | the close study of how actual societies are organized, by observers among them | 02 |
| Bond-building exchange | **the gift** / **reciprocity** | give-and-take that builds and repays a relationship rather than clearing a price | 02 (compatible w/ companion) |
| Center collects and hands out | **redistribution** | a center (temple, palace, chief) gathering goods and handing them back out | 02 |
| The measuring-stick role | **unit of account** | the measuring-stick you price things and reckon debts in ("you owe me 3 shekels"), even if no coin moves | **03 (hinge)** |
| The thing that changes hands | **medium of exchange** | the thing that physically changes hands in a deal (the coin, the note) | **03 (hinge)** |
| Money before coins | **money-of-account** | prices and debts reckoned in a standard measure with no coin circulating | 03 |
| Physical debt record | **the tally** | a physical record of a debt (a notched stick split in two, one half each) | 03 |
| Owing | **debt** / **credit** | debt is what you owe; credit is the trust that lets you receive now and pay later (the two sides of one relation) | 03 |
| Forced servitude for debt | **debt bondage** | being forced into servitude to work off a debt you cannot pay | 04 (full) |
| Babylonian law code | **the Code of Hammurabi** | a Babylonian law code (~1750 BCE) regulating interest, debt, and bondage | 04 |
| First coins | **coinage** | stamped metal money issued by an authority (first ~7th c. BCE, Lydia/Ionia) | 05 |
| Money's textbook jobs | **the functions of money** | the textbook list: medium of exchange, store of value, unit of account | 06 |
| Money-as-commodity view | **the commodity theory of money** (metallism) | money is a special commodity that grew out of barter to ease trade; its value rests on its material | 06 |
| Money-as-debt view | **the credit theory / chartalism** | money is basically a unit of account and a measure of debt, backed by social and state obligation | 06 |
| Interchangeability | **fungible** | interchangeable: any one shekel of silver, or any one dollar, is as good as any other | 06 |
| Money by declaration | **fiat money** | money that counts as money by declaration and acceptance, not for its material (a banknote) | 06 |
| Periodic debt wipe | **clean-slate cancellation** / **jubilee** | a deliberate, periodic wiping-clean of debts (the biblical Jubilee; Mesopotamia had its own) | 07 |
| Naturalization (shared) | **naturalization** | making a made, recent arrangement seem like an unchangeable fact of nature | 08 (shared w/ companion) |

**Thinker attributions (one identifying clause on first mention in any module; never assume known):**
- **Adam Smith** — 18th-century Scottish moral philosopher (*The Wealth of Nations*, 1776); more careful than his caricature.
- **Carl Menger** — 19th-century Austrian economist; money as the spontaneous rise of the most saleable commodity.
- **Caroline Humphrey** — anthropologist; the verdict that no pure barter economy has been described.
- **R. A. Radford** — economist and former POW; the 1945 account of a prison-camp cigarette economy.
- **A. Mitchell Innes** — early-20th-century writer on money; the 1913–14 credit-theory essays.
- **Georg Friedrich Knapp** — German economist; *The State Theory of Money* (1905), the classic chartalist text.
- **Geoffrey Ingham** — present-day sociologist of money (*The Nature of Money*, 2004).
- **Philip Grierson** — leading numismatist; money as an abstract measure, and coinage and the state.
- **Michael Hudson** — economist and historian of ancient Near-Eastern debt and its cancellation.
- **David Graeber** — anthropologist (*Debt: The First 5,000 Years*, 2011); a contested popular synthesis, attribute his readings as his.
- **Hammurabi** — Babylonian king (~1750 BCE) of the law code.

**Quotation rule:** quote only well-established, verifiable wording, attributed to author + work + year,
with **no invented page numbers, clause numbers, rates, or dates**. Safe anchors: Smith's "propensity
to truck, barter, and exchange." For Humphrey's no-barter-economy verdict and Innes's credit-theory
claims, paraphrase unless the exact wording is certain, and label paraphrase as paraphrase. The
humanities "Primary source" block must use a genuine, accurately-rendered passage (module 04 may use
the Code of Hammurabi; module 07 may use Leviticus 25 on the Jubilee). Reproduce a quotation's own
punctuation faithfully (this is the only place an em dash may appear).

## 2. "Already-taught" ledger & dedup plan

Each shared concept has one **owner module** (full treatment); later uses are one-line **callbacks**
that **re-gloss** at intro level, never re-derivations.

| Concept | Owner | Called back in | Suggested callback line |
|---------|-------|----------------|-------------------------|
| barter, double coincidence, the standard sequence, conjectural history | 01 | 02, 06, 08, 09 | "the barter story (module 01): swap goods for goods, then money to fix it" |
| the ethnographic verdict; gift/reciprocity; barter-as-substitute | 02 | 06, 08 | "the record from module 02: no barter economy ever found, credit instead" |
| **unit of account vs. medium of exchange (the hinge)** | 03 | 05, 06, 07 | "a unit of account (the measuring-stick for debts) versus a medium of exchange (the thing that changes hands), from module 03" |
| money-of-account; the tally; writing-arose-for-accounts | 03 | 05, 06, 09 | "the Mesopotamian ledgers of module 03, debts in silver with no coin" |
| Hammurabi; debt bondage; debt-as-governed-law | 04 | 05, 07, 08 | "debt was governed law before coins (module 04, Hammurabi), bondage and all" |
| coinage's late date; the state/war/tax nexus | 05 | 06, 08 | "coins are late and state-made (module 05): soldiers and taxes, not barter" |
| commodity theory; credit/chartalist theory; fungibility; fiat | 06 | 07, 08, 09 | "the commodity theory the myth needs, versus the credit theory (module 06)" |
| debt-as-relationship → quantity; clean-slate cancellations; morality of debt | 07 | 08, 09 | "debt going from a bond to a collectible number (module 07), and the jubilees" |
| the ideological work of the myth | 08 | 09 | "the work the myth does (module 08): the trading individual made natural" |

**Cross-module integrity:** the **hinge** (unit of account vs. medium of exchange) is owned by 03 and
re-glossed verbatim everywhere it returns. The **commodity theory** is *named* at the close of 01 ("the
theory this story needs") and *fully treated* in 06; the **credit theory** is *named* when the ledgers
land in 03 and *fully treated* in 06. Module 07's "relationship to quantity" is the same family of move
as the companion's commodity fetishism: callback *in spirit* only (do not import the companion's term).

## 3. Metaphor / running-image ownership map

One running image per module; each must point at one correct referent, pay off, and cash into the
history. Other modules may reference an image but not reinvent it.

| Image / device | Owner module | Why it points true |
|----------------|--------------|--------------------|
| **The textbook open to page one** ("long ago, people bartered…") | 01 | the actual site where the myth is taught; concrete, checkable |
| **The running tab at a village where everyone knows everyone** | 02 | what communities actually did instead of haggling: tracked credit, not barter |
| **The clay tablet that is a receipt** (a debt in silver, no coin in sight) | 03 | the image that overturns the sequence; money-of-account made visible |
| **The split tally stick** (notched, snapped in two, halves must match) | 03 | money as a record of who owes whom, held in the hand |
| **The king's stone of laws** (Hammurabi's code on debt) | 04 | debt as governed law, carved a thousand years before coins |
| **The coin stamped to pay a soldier** | 05 | coinage as a state-and-war technology, not barter's climax |
| **Two maps of the same country** (commodity theory vs. credit theory) | 06 | two models of one thing; each shows some roads and hides others |
| **The slate wiped clean** (the jubilee) | 07 | debts cancelled on purpose; "must always be paid" is not a law of nature |
| **The page that keeps getting reprinted** (the myth still taught) | 08 | a false story that survives is doing work for someone |

**Caution:** none of these may tip into nostalgia (the tab and the tablet are not a lost Eden; module
04's bondage is the counterweight) or conspiracy (the reprinted page is about *function*, not a plot).

## 4. Stock-phrase caps

| Phrase | Cap | Keeper module |
|--------|-----|---------------|
| "no example of a barter economy" / Humphrey's verdict | own it | 02 only (others allude once) |
| "credit came first" / "debt came first" | 3 total | 02, 03, plus one |
| "money was invented to fix barter" (stating the myth) | 3 total | 01 mainly; quote the myth, don't adopt it |
| "remembered, or required by a theory" (the diagnostic) | 2 total | 09 owns; 01 may seed it once |
| "whose interests" / *cui bono* | 2 total | 08 owns; may seed once earlier |
| "a state technology" (of coinage) | 1 total | 05 |
| "must always be paid" / "debts must be paid" | 3 total | 07 owns the examination; 08 may echo once |
| rhetorical "But did it?" / "But is that what happened?" opener | 2 total across course | any two |

## 5. Voice target

Identical narrator to the companion course: a **sharp, widely-read writer talking to one intelligent
friend who has never questioned this before**, and who may resist. Warm but not soft; confident, never
hectoring; essayistic, concrete nouns, real history, the occasional dry turn. Closer to a very good
long-form magazine essay than a lecture or a manifesto. It steelmans the other side, admits what
scholars still fight about, never sneers, never says "obviously," and earns each turn with a date, a
tablet, or an example. Pitch every abstraction through something the reader can see (a clay receipt, a
tally stick, a coin in a soldier's hand) before naming it.

**Drift to correct in editorial:** (a) keep the **history modules (02–05, 07)** vivid and narrative,
not a textbook chronology; keep the **one models module (06)** concrete (two maps, real evidence),
never an abstract lecture. (b) Keep no module sliding into sermon: a paragraph of assertion with no
evidence has drifted; pull it back to the tablet or the date. (c) De-soothe and de-adverb (no
*gently/quietly/simply*; confidence, not comfort). (d) **No em dashes** anywhere (rule 0.9): the
editorial pass strips them; the verify lint enforces it.
