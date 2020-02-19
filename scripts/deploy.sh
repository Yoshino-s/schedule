#!/bin/sh

set -e

cd dist/pwa
git init
git remote add origin git@github.com:Yoshino-s/schedule.git
git remote add coding-origin git@e.coding.net:Yoshino-s/sche.git
git add .
git commit -m "deploy"

git checkout -b gh-pages
git push --force origin gh-pages

git checkout -b coding-pages
git push --force coding-origin coding-pages

echo "deploy success."