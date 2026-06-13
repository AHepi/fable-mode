// Minimal YAML-frontmatter parser for the controlled subset this pipeline emits.
// Handles: `key: scalar`, quoted strings, numbers, booleans, inline arrays
// `[a, b]`, and block arrays (lines of `  - item`). Not a general YAML parser —
// it covers exactly the schema in _config/content-schema.md.
import { readFileSync } from 'node:fs';

function parseScalar(raw) {
  let v = raw.trim();
  if (v === '' || v === '~' || v === 'null') return null;
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  return v;
}

function parseInlineArray(raw) {
  const inner = raw.trim().slice(1, -1).trim();
  if (inner === '') return [];
  return inner.split(',').map((s) => parseScalar(s));
}

// Returns { data, body }.
export function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: text };
  const [, fm, body] = m;
  const lines = fm.split('\n');
  const data = {};
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '' || line.trim().startsWith('#')) {
      i++;
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_]+):(.*)$/);
    if (!kv) {
      i++;
      continue;
    }
    const key = kv[1];
    const rest = kv[2].trim();
    if (rest === '') {
      // Block array follows: subsequent indented `- item` lines.
      const arr = [];
      let j = i + 1;
      while (j < lines.length && /^\s*-\s+/.test(lines[j])) {
        arr.push(parseScalar(lines[j].replace(/^\s*-\s+/, '')));
        j++;
      }
      data[key] = arr;
      i = j;
    } else if (rest.startsWith('[')) {
      data[key] = parseInlineArray(rest);
      i++;
    } else {
      data[key] = parseScalar(rest);
      i++;
    }
  }
  return { data, body };
}

export function readFrontmatter(path) {
  return parseFrontmatter(readFileSync(path, 'utf8'));
}
