#!/usr/bin/env node
// Advisory PROSE-continuity audit for a shipped course. Catches the cross-module
// and within-module *prose* problems the schema/reference validators miss: tic
// phrases that repeat across modules, words hammered too hard inside one module,
// runaway em-dash density, and inconsistent math symbol/naming choices.
// This is a STYLE editor, not a correctness gate — it reads PROSE only (math,
// code, and frontmatter are stripped first) and never inspects definitions or
// proofs. Usage:
//   node shared/scripts/lint-prose.mjs <slug>          report; exit 1 on hard caps
//   node shared/scripts/lint-prose.mjs <slug> --warn   report only, always exit 0
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

// --- tunables (the "house style" knobs) -------------------------------------

// Cross-module tic phrases. A phrase is a hard flag if it shows up in more than
// MAX_PHRASE_MODULES modules OR more than MAX_PHRASE_TOTAL times overall.
const STOCK_PHRASES = [
  'hold that thought',
  'hold onto',
  'the whole point',
  'the whole idea',
  'the whole module',
  'no accident',
  'no coincidence',
  'enough to',
  'do-nothing',
  'in disguise',
  'secretly the same',
  'the most important object',
];
const MAX_PHRASE_MODULES = 2; // appears in >2 modules => hard flag
const MAX_PHRASE_TOTAL = 4; // appears >4 times total => hard flag

// Within-module word overuse. Generic content words capped at MAX_WORD; the
// vivid "image" words (the cute concrete nouns the voice leans on) capped lower.
const MAX_WORD = 8; // a content word used >8 times in one module => hard flag
const IMAGE_WORDS = new Set([
  'machine', 'clock', 'coaster', 'costume', 'gadget',
  'zoo', 'menagerie', 'room', 'dance',
]);
const MAX_IMAGE_WORD = 5; // an image word used >5 times in one module => hard flag

// Em-dash density: advisory only.
const MAX_EMDASH_PER_1000 = 12;

// Manner / soothing adverbs — usually a weak verb apologizing for itself ("moved
// gently" -> "drifted"), and the engine of an over-soothing register. Capped by
// per-module density AND course total. Hard flags (this is a known house failure).
// The soothing manner cluster: adverbs that rarely earn their place in exposition
// and are the audible texture of an over-soothing narrator. Treated as TICS — a
// single one spread across many modules (e.g. "quietly" in nine of twelve) is the
// smell, exactly like a stock phrase. Hard.
const SOOTHING_ADVERBS = [
  'gently', 'quietly', 'softly', 'silently', 'smoothly', 'calmly', 'patiently',
  'deftly', 'gracefully', 'effortlessly', 'seamlessly', 'elegantly', 'tenderly',
  'lovingly', 'soothingly', 'reassuringly', 'warmly', 'lightly', 'serenely',
  'peacefully', 'comfortably', 'happily', 'nicely', 'gladly', 'neatly', 'cleanly',
];
const MAX_SOOTHING_MODULES = 3; // one soothing adverb in >3 modules => hard
const MAX_SOOTHING_WORD_TOTAL = 6; // one soothing adverb >6 times total => hard
// Minimizers — usually deletable filler ("simply", "merely"); advisory only, since
// the occasional one is fine and they are not the soothing problem.
const MINIMIZER_ADVERBS = ['simply', 'merely', 'plainly', 'easily', 'naturally', 'surely', 'readily'];
const MAX_MINIMIZER_TOTAL = 10; // course-wide => soft

// Over-soothing / hand-holding register — phrases that coddle the reader instead
// of trusting them. Near-banned: confidence, not comfort.
const SOOTHING_PHRASES = [
  "don't worry", 'do not worry', 'no need to worry', 'not to worry', 'worry not',
  'rest assured', 'bear with me', 'fear not', 'never fear', 'no cause for alarm',
  'as you might expect', 'as you would expect', "as you'd expect", 'trust me',
  'take my word', 'no shame in', 'take your time', 'gently now', 'ease into',
];
const MAX_SOOTHING_PHRASE_TOTAL = 2; // > this across the course => hard

// Stopwords ignored by the word-overuse check (function words carry no style).
const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'of', 'to', 'in', 'is', 'it', 'that',
  'this', 'you', 'we', 'on', 'for', 'with', 'as', 'at', 'be', 'are', 'its',
  'if', 'so', 'i', 'no', 'not', 'all', 'any', 'can', 'do', 'does', 'has',
  'have', 'had', 'he', 'she', 'they', 'them', 'their', 'our', 'us', 'your',
  'my', 'me', 'was', 'were', 'will', 'would', 'what', 'when', 'where', 'which',
  'who', 'how', 'why', 'from', 'by', 'up', 'out', 'about', 'into', 'over',
  'than', 'then', 'there', 'here', 'these', 'those', 'just', 'one', 'two',
  'each', 'every', 'some', 'more', 'most', 'other', 'such', 'only', 'also',
  'like', 'get', 'got', 'let', 'now', 'too', 'very', 'much', 'same', 'both',
  'because', 'while', 'after', 'before', 'between', 'through', 'being', 'been',
  'his', 'her', 'him', 'were', 'am', 'were', 's', 't', 're', 'll', 've', 'd',
]);

// --- prose isolation --------------------------------------------------------

// Reduce a raw module file to PROSE only: drop YAML frontmatter, fenced code,
// display ($$...$$) and inline ($...$) math (each math span -> a space so word
// boundaries survive). What's left is the editorial surface we lint.
function isolateProse(raw) {
  let text = raw;
  // 1. frontmatter
  text = text.replace(/^---\n[\s\S]*?\n---\n?/, '');
  // 2. fenced code blocks
  text = text.replace(/```[\s\S]*?```/g, ' ');
  // 3. display math (before inline so $$ isn't mistaken for two $ spans)
  text = text.replace(/\$\$[\s\S]+?\$\$/g, ' ');
  // 4. inline math (skip escaped \$)
  text = text.replace(/(?<!\\)\$[^\n$]+?(?<!\\)\$/g, ' ');
  // 5. inline HTML tags (e.g. <details>/<summary>) so markup isn't counted as words
  text = text.replace(/<[^>]+>/g, ' ');
  return text;
}

function countWords(prose) {
  const m = prose.match(/[A-Za-z][A-Za-z'-]*/g);
  return m ? m.length : 0;
}

function tokenize(prose) {
  const m = prose.toLowerCase().match(/[a-z][a-z'-]*/g);
  return m ? m : [];
}

// Count overlapping... no, non-overlapping occurrences of a literal phrase,
// case-insensitive. Used for the stock-phrase tic list.
function countPhrase(prose, phrase) {
  const hay = prose.toLowerCase();
  const needle = phrase.toLowerCase();
  let count = 0;
  let idx = hay.indexOf(needle);
  while (idx !== -1) {
    count++;
    idx = hay.indexOf(needle, idx + needle.length);
  }
  return count;
}

// --- the lint ---------------------------------------------------------------

// Returns { hard: [...], soft: [...], heuristic: [...], report: <string> } so
// the CLI can decide the exit code while a caller gets the structured findings.
function lintProse(slug) {
  const dir = join(ROOT, 'site', 'src', 'content', 'courses', slug);
  if (!existsSync(dir)) {
    return { error: `course folder not found: ${dir}` };
  }

  // Module files: NN-*.md, skipping _course.md (and any other underscore file).
  const files = readdirSync(dir)
    .filter((f) => /^\d+-.*\.md$/.test(f) && !f.startsWith('_'))
    .sort();

  if (files.length === 0) {
    return { error: `no NN-*.md module files found in ${dir}` };
  }

  // Per-module prose + word counts.
  const modules = files.map((f) => {
    const raw = readFileSync(join(dir, f), 'utf8');
    const prose = isolateProse(raw);
    return { file: f, prose, words: countWords(prose) };
  });

  const hard = [];
  const soft = [];
  const heuristic = [];
  const lines = [];

  lines.push(`Prose audit — courses/${slug} (${modules.length} module${modules.length === 1 ? '' : 's'})`);
  lines.push('');

  // --- check 1: cross-module stock phrases ---------------------------------
  lines.push('1. Cross-module stock phrases');
  const phraseFindings = [];
  for (const phrase of STOCK_PHRASES) {
    let total = 0;
    const hitFiles = [];
    for (const mod of modules) {
      const c = countPhrase(mod.prose, phrase);
      if (c > 0) {
        total += c;
        hitFiles.push(`${mod.file} (${c})`);
      }
    }
    if (total === 0) continue;
    const isHard = hitFiles.length > MAX_PHRASE_MODULES || total > MAX_PHRASE_TOTAL;
    phraseFindings.push({ phrase, total, modules: hitFiles.length, files: hitFiles, isHard });
  }
  if (phraseFindings.length === 0) {
    lines.push('   (none of the tracked tic phrases appear)');
  } else {
    for (const f of phraseFindings) {
      const tag = f.isHard ? 'HARD' : 'ok';
      const msg = `"${f.phrase}" — ${f.total}x across ${f.modules} module(s) [${tag}]\n     ${f.files.join(', ')}`;
      lines.push(`   ${msg}`);
      if (f.isHard) hard.push(`stock phrase "${f.phrase}": ${f.total}x in ${f.modules} module(s) — ${f.files.join(', ')}`);
    }
  }
  lines.push('');

  // --- check 2: within-module word overuse ---------------------------------
  lines.push('2. Within-module word overuse');
  const overuseFindings = [];
  for (const mod of modules) {
    const counts = new Map();
    for (const w of tokenize(mod.prose)) {
      if (STOPWORDS.has(w)) continue;
      if (w.length < 3 && !IMAGE_WORDS.has(w)) continue; // tiny words are noise
      counts.set(w, (counts.get(w) || 0) + 1);
    }
    for (const [word, count] of counts) {
      const isImage = IMAGE_WORDS.has(word);
      const cap = isImage ? MAX_IMAGE_WORD : MAX_WORD;
      if (count > cap) {
        overuseFindings.push({ word, count, file: mod.file, isImage, cap });
      }
    }
  }
  overuseFindings.sort((a, b) => b.count - a.count);
  if (overuseFindings.length === 0) {
    lines.push(`   (no content word exceeds ${MAX_WORD}/module; no image word exceeds ${MAX_IMAGE_WORD}/module)`);
  } else {
    for (const f of overuseFindings) {
      // Image words (the cute concrete nouns the voice over-leans on) are a hard
      // flag; generic content words are advisory only — in a STEM course the
      // domain vocabulary ("group", "field") *must* repeat, so it shouldn't gate.
      const kind = f.isImage ? 'image word' : 'word';
      const tag = f.isImage ? 'HARD' : 'soft';
      lines.push(`   ${kind} "${f.word}" — ${f.count}x (cap ${f.cap}) in ${f.file} [${tag}]`);
      if (f.isImage) hard.push(`overused image word "${f.word}": ${f.count}x in ${f.file} (cap ${f.cap})`);
      else soft.push(`frequent word "${f.word}": ${f.count}x in ${f.file} (advisory — check it's domain vocab, not a tic)`);
    }
  }
  lines.push('');

  // --- check 3: em-dash density --------------------------------------------
  lines.push('3. Em-dash density (advisory)');
  const dashFindings = [];
  for (const mod of modules) {
    const dashes = (mod.prose.match(/—/g) || []).length;
    if (dashes === 0) continue;
    const per1000 = mod.words > 0 ? (dashes / mod.words) * 1000 : 0;
    const hot = per1000 > MAX_EMDASH_PER_1000;
    dashFindings.push({ file: mod.file, dashes, words: mod.words, per1000, hot });
  }
  if (dashFindings.length === 0) {
    lines.push('   (no em-dashes found)');
  } else {
    for (const f of dashFindings) {
      const tag = f.hot ? `SOFT — above ~${MAX_EMDASH_PER_1000}/1000` : 'ok';
      lines.push(`   ${f.file} — ${f.dashes} em-dash(es), ${f.per1000.toFixed(1)}/1000 words [${tag}]`);
      if (f.hot) soft.push(`high em-dash density in ${f.file}: ${f.per1000.toFixed(1)}/1000 words (${f.dashes} dashes)`);
    }
  }
  lines.push('');

  // --- check 4: symbol / naming heuristics ---------------------------------
  // These re-scan the RAW files for math tokens (the prose strips math away),
  // then correlate with nearby prose vocabulary. Pure heuristic — warnings only.
  lines.push('4. Symbol / naming heuristics (advisory)');
  const rawByFile = new Map();
  for (const f of files) rawByFile.set(f, readFileSync(join(dir, f), 'utf8'));

  // 4a. reflection-symbol conflict: $s$ and $f$ both used near "reflection"/"flip".
  const reflectFiles = [];
  for (const [file, raw] of rawByFile) {
    const hasS = /\$\s*s\s*\$/.test(raw) || /\bs\b/.test(raw.match(/\$[^$]*\$/g)?.join(' ') || '');
    const hasF = /\$\s*f\s*\$/.test(raw);
    const hasSdollar = /\$\s*s\s*\$/.test(raw);
    const reflectish = /reflection|flip/i.test(isolateProse(raw));
    if (hasSdollar && hasF && reflectish) {
      reflectFiles.push(file);
    }
  }
  if (reflectFiles.length > 0) {
    lines.push(`   possible reflection-symbol conflict ($s$ vs $f$ near "reflection"/"flip"):`);
    lines.push(`     ${reflectFiles.join(', ')}`);
    heuristic.push(`reflection-symbol conflict ($s$ vs $f$): ${reflectFiles.join(', ')}`);
  } else {
    lines.push('   no reflection-symbol conflict detected');
  }

  // 4b. operation-symbol inconsistency: more than one generic-operation glyph in
  // use across the course ($*$, $\star$, $\ast$, $\cdot$).
  const opGlyphs = [
    { name: '*', re: /\*/ },
    { name: '\\star', re: /\\star/ },
    { name: '\\ast', re: /\\ast/ },
    { name: '\\cdot', re: /\\cdot/ },
  ];
  const opUsage = new Map(); // glyph -> [files]
  for (const [file, raw] of rawByFile) {
    // Only look inside math spans so prose asterisks/bullets don't count.
    const mathSpans = (raw.match(/\$\$[\s\S]+?\$\$/g) || []).concat(raw.match(/(?<!\\)\$[^\n$]+?(?<!\\)\$/g) || []);
    const math = mathSpans.join(' ');
    for (const g of opGlyphs) {
      // \star / \ast / \cdot are unambiguous; bare * counts only inside math.
      const present = g.name === '*' ? /(?<!\\)\*/.test(math) : g.re.test(math);
      if (present) {
        if (!opUsage.has(g.name)) opUsage.set(g.name, []);
        opUsage.get(g.name).push(file);
      }
    }
  }
  if (opUsage.size > 1) {
    lines.push(`   possible operation-symbol inconsistency (${opUsage.size} generic-op glyphs in use):`);
    for (const [glyph, fs] of opUsage) {
      lines.push(`     ${glyph} — ${[...new Set(fs)].join(', ')}`);
    }
    heuristic.push(`operation-symbol inconsistency: ${[...opUsage.keys()].join(', ')} all used as generic operations`);
  } else if (opUsage.size === 1) {
    lines.push(`   operation symbol consistent (${[...opUsage.keys()][0]} only)`);
  } else {
    lines.push('   no generic operation glyphs detected');
  }
  lines.push('');

  // --- check 5: soothing manner adverbs (tics) + minimizers ----------------
  lines.push('5. Soothing manner adverbs (the over-soothing register)');
  const sootheSet = new Set(SOOTHING_ADVERBS);
  const sootheTally = new Map(); // word -> { total, files: [] }
  for (const mod of modules) {
    const counts = new Map();
    for (const w of tokenize(mod.prose)) if (sootheSet.has(w)) counts.set(w, (counts.get(w) || 0) + 1);
    for (const [w, c] of counts) {
      if (!sootheTally.has(w)) sootheTally.set(w, { total: 0, files: [] });
      const e = sootheTally.get(w);
      e.total += c; e.files.push(`${mod.file}(${c})`);
    }
  }
  if (sootheTally.size === 0) {
    lines.push('   (no soothing manner adverbs found)');
  } else {
    for (const [w, e] of [...sootheTally].sort((a, b) => b[1].total - a[1].total)) {
      const isHard = e.files.length > MAX_SOOTHING_MODULES || e.total > MAX_SOOTHING_WORD_TOTAL;
      lines.push(`   "${w}" — ${e.total}x across ${e.files.length} module(s) [${isHard ? 'HARD' : 'ok'}]`);
      if (isHard) hard.push(`soothing adverb "${w}": ${e.total}x across ${e.files.length} module(s) — a soothing tic; cut it or fold it into one strong verb`);
    }
  }
  // minimizers — advisory
  const minSet = new Set(MINIMIZER_ADVERBS);
  const minCounts = new Map();
  let minTotal = 0;
  for (const mod of modules) for (const w of tokenize(mod.prose)) if (minSet.has(w)) { minTotal++; minCounts.set(w, (minCounts.get(w) || 0) + 1); }
  if (minTotal > 0) {
    const top = [...minCounts.entries()].sort((a, b) => b[1] - a[1]).map(([w, c]) => `${w}(${c})`).join(' ');
    const hot = minTotal > MAX_MINIMIZER_TOTAL;
    lines.push(`   minimizers — ${minTotal} total (cap ${MAX_MINIMIZER_TOTAL}) [${hot ? 'SOFT' : 'ok'}]  ${top}`);
    if (hot) soft.push(`minimizer adverbs overused course-wide: ${minTotal} (${top}) — usually deletable filler`);
  }
  lines.push('');

  // --- check 6: over-soothing register (hand-holding phrases) --------------
  lines.push('6. Over-soothing register (hand-holding phrases)');
  let sootheTotal = 0;
  const sootheHits = [];
  for (const phrase of SOOTHING_PHRASES) {
    for (const mod of modules) {
      const c = countPhrase(mod.prose, phrase);
      if (c > 0) { sootheTotal += c; sootheHits.push(`"${phrase}" — ${mod.file} (${c})`); }
    }
  }
  if (sootheHits.length === 0) {
    lines.push('   (none of the tracked hand-holding phrases appear)');
  } else {
    for (const h of sootheHits) lines.push(`   ${h}`);
    const isHard = sootheTotal > MAX_SOOTHING_PHRASE_TOTAL;
    lines.push(`   total: ${sootheTotal} (cap ${MAX_SOOTHING_PHRASE_TOTAL}) [${isHard ? 'HARD' : 'ok'}]`);
    if (isHard) hard.push(`over-soothing register: ${sootheTotal} hand-holding phrase(s) (cap ${MAX_SOOTHING_PHRASE_TOTAL})`);
  }
  lines.push('');

  // --- summary -------------------------------------------------------------
  lines.push('Summary');
  lines.push(`   hard flags:      ${hard.length}`);
  lines.push(`   soft (advisory): ${soft.length}`);
  lines.push(`   heuristic:       ${heuristic.length}`);

  return { hard, soft, heuristic, report: lines.join('\n') };
}

// --- CLI --------------------------------------------------------------------

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const warnOnly = args.includes('--warn');
  const slug = args.find((a) => !a.startsWith('--'));
  if (!slug) {
    console.error('usage: lint-prose.mjs <slug> [--warn]');
    process.exit(1);
  }

  const result = lintProse(slug);
  if (result.error) {
    console.error(`✗ ${result.error}`);
    process.exit(1);
  }

  console.log(result.report);
  console.log('');

  if (result.hard.length === 0) {
    console.log(`✓ courses/${slug}: no hard prose caps exceeded.`);
    process.exit(0);
  }

  console.error(`✗ courses/${slug}: ${result.hard.length} hard prose flag(s):`);
  for (const e of result.hard) console.error(`  - ${e}`);
  if (warnOnly) {
    console.error('(--warn) advisory mode — exiting 0 despite hard flags.');
    process.exit(0);
  }
  process.exit(1);
}

export { lintProse };
