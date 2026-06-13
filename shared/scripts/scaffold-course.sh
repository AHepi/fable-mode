#!/usr/bin/env bash
# Create the shipped-course folder in the site and seed _course.md from the
# template if it doesn't exist yet. Usage: bash scaffold-course.sh <slug>
set -euo pipefail

SLUG="${1:-}"
if [[ -z "$SLUG" ]]; then
  echo "usage: scaffold-course.sh <slug>" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
DEST="${ROOT}/site/src/content/courses/${SLUG}"
mkdir -p "$DEST"

if [[ ! -f "${DEST}/_course.md" ]]; then
  cp "${ROOT}/shared/templates/_course.md" "${DEST}/_course.md"
fi

echo "$DEST"
