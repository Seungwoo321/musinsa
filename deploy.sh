#!/usr/bin/env sh
set -e

rm -rf dist
npm run build
# cp -r static/ docs/.vuepress/dist/
cd dist

git init 
git config --local user.name "Seungwoo Lee"
git config --local user.email "seungwoo321@gmail.com"
git add -A
git commit -m "deploy for musinsa"
git push -f git@github.com:Seungwoo321/musinsa-frontend.git master:gh-pages

cd -