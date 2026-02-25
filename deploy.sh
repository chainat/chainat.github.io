#!/bin/bash
set -e

echo "→ Building..."
cd source && npm run build && cd ..
# npm run build moves export to ./out/ (repo root)

echo "→ Cleaning old deployment files..."
rm -rf _next
rm -f *.html icon.png

echo "→ Copying from out/ to root..."
cp -r out/. .

echo "→ Ensuring .nojekyll..."
touch .nojekyll

echo "✓ Done. Review changes with: git diff --stat"
