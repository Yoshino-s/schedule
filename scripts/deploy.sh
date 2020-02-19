#!/bin/sh

set -e

cd dist/pwa
git init
git checkout -b coding-pages
git add .
git commit -m "deploy"
git remote add origin git@e.coding.net:Yoshino-s/sche.git
git push --force origin coding-pages

echo "deploy success."