#!/usr/bin/env bash
# Smoke-build the site (a real Astro build also re-validates the content schema).
# Usage: bash shared/scripts/build-site.sh
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "${ROOT}/site"
[[ -d node_modules ]] || npm ci
npm run build
