#!/bin/bash

timestamp() {
  date +"%T"
}

git checkout build
webpack -p
./scripts/build.sh
git add -f build
git commit -am "Build$(date +%s)"
git filter-branch -f --prune-empty --subdirectory-filter build
git push origin build
git push staging build:master
