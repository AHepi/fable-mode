#!/usr/bin/env bash
# Smoke-build the site (a real Astro build also re-validates the content schema).
# Usage: bash shared/scripts/build-site.sh
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "${ROOT}/site"
[[ -d node_modules ]] || npm ci
# Clear the content-layer cache so a clean render is guaranteed — the cache does
# not bust on remark/rehype/config changes, only on content changes.
rm -rf .astro
npm run build
