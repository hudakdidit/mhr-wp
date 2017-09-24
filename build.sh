webpack -p
rm -rf build
mkdir build
cp -r static build/static
cp -r templates build/templates
cp *.php build
cp style.css build/style.css