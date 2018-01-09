webpack -p
mkdir build
commit=$(git log -1 --pretty=%B)
rsync -ruvv --include-from=build-include.txt ./* build
cd build
git add .
git commit -am "Build $(date +%s) of commit: $($commit)"