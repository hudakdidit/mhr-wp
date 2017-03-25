mkdir build
find . -name \*.php -exec cp {} build \;
find . -name \*.css -exec cp {} build \;
find . -name **\*.twig -exec cp {} build \;
cp static build;