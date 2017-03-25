#!/bin/bash

timestamp() {
  date +"%T"
}

webpack -p
./scripts/build.sh
git checkout build
git add -f build
git commit -am "Build$(date +%s)"
git filter-branch -f --prune-empty --subdirectory-filter build
git push origin build
git push staging build:master
git checkout master
