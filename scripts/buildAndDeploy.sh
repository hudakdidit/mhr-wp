#!/bin/bash

timestamp() {
  date +"%T"
}

git checkout -b build-prep
webpack -p
./scripts/build.sh
git commit -am "Build__$(date +%s)"
git checkout build
git branch -D build-prep
git add -f build
git commit -am "Build__$(date +%s)"
git filter-branch -f --prune-empty --subdirectory-filter build
git push origin build -f
git push staging build:master -f
git checkout master
