#!/bin/bash

timestamp() {
  date +"%T"
}

git branch -d build-deploy
git checkout -b build-deploy

webpack -p
./scripts/build.sh
git checkout build
git add -f build
git commit -am "Build__$(date +%s)"
git filter-branch -f --prune-empty --subdirectory-filter build
git push origin build
git push staging build:master
git checkout master
