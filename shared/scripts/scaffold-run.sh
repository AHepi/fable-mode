#!/usr/bin/env bash
# Create a per-run working folder under runs/, namespaced by <slug>-<date>.
# Usage: bash shared/scripts/scaffold-run.sh <slug>
# Prints the run-id (and the run dir path on stderr).
set -euo pipefail

SLUG="${1:-}"
if [[ -z "$SLUG" ]]; then
  echo "usage: scaffold-run.sh <slug>" >&2
  exit 1
fi

# Resolve repo root from this script's location (shared/scripts/..).
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
DATE="$(date +%Y%m%d)"
RUN_ID="${SLUG}-${DATE}"
RUN_DIR="${ROOT}/runs/${RUN_ID}"

for stage in 01_research 02_curriculum 03_authoring 04_assembly 05_verify; do
  mkdir -p "${RUN_DIR}/${stage}/output"
done

BRIEF="${RUN_DIR}/run-brief.md"
if [[ ! -f "$BRIEF" ]]; then
  sed -e "s/SLUG-DATE/${RUN_ID}/g" \
      -e "s/SLUG/${SLUG}/g" \
      -e "s/DATE/${DATE}/g" \
      "${ROOT}/shared/templates/run-brief.md" > "$BRIEF"
fi

echo "run dir: ${RUN_DIR}" >&2
echo "$RUN_ID"
