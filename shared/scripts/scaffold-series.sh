#!/usr/bin/env bash
# Create a per-series coordination folder under runs/, seeded with a series-brief
# and an empty series-canon. Each member mini-course is then scaffolded
# separately with scaffold-run.sh.
# Usage: bash shared/scripts/scaffold-series.sh <series-id>
# Prints the series-id (and the series dir path on stderr).
set -euo pipefail

SERIES_ID="${1:-}"
if [[ -z "$SERIES_ID" ]]; then
  echo "usage: scaffold-series.sh <series-id>" >&2
  exit 1
fi

# Resolve repo root from this script's location (shared/scripts/..).
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
DATE="$(date +%Y%m%d)"
SERIES_DIR="${ROOT}/runs/${SERIES_ID}"

mkdir -p "${SERIES_DIR}"

BRIEF="${SERIES_DIR}/series-brief.md"
if [[ ! -f "$BRIEF" ]]; then
  sed -e "s/SERIES-ID/${SERIES_ID}/g" \
      -e "s/DATE/${DATE}/g" \
      "${ROOT}/shared/templates/series-brief.md" > "$BRIEF"
fi

CANON="${SERIES_DIR}/series-canon.md"
if [[ ! -f "$CANON" ]]; then
  cp "${ROOT}/shared/templates/series-canon.md" "$CANON"
fi

echo "series dir: ${SERIES_DIR}" >&2
echo "  - series-brief.md  (fill in members; the Essentials course is authored first)" >&2
echo "  - series-canon.md  (the Essentials course's curriculum stage writes this)" >&2
echo "next: scaffold each member with 'bash shared/scripts/scaffold-run.sh <member-slug>'" >&2
echo "$SERIES_ID"
