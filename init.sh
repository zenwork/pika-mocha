set -o errexit
set -o nounset
set -o pipefail

target=""
archive=/tmp/pika-mocha.zip

echo "creating new pika-mocha project"
printf "project name (web-project): "
read -r target

if [[ -z "$target" ]]
then
  target=web-project
fi

if [[ -d ./"$target" ]]
then
    echo "$target already exists"
    exit 1
fi

printf "downloading and preparing %s" "$target"
wget --no-check-certificate --quiet --output-document $archive https://github.com/zenwork/pika-mocha/archive/master.zip
unzip -oq -d . $archive
rm -rf $archive
rm -rf pika-mocha-master/.git
rm -f yarn.lock
rm -rf pika-mocha-master/README.md
sed -i -e "s/pika-mocha/$target/" pika-mocha-master/package.json
sed -i -e "s/\"version\".*:.*\"[0-9].[0-9].[0-9]\",/\"version\"        : \"0.0.1\",/" pika-mocha-master/package.json
sed -i -e "s/^.*author.*$//" pika-mocha-master/package.json
sed -i -e '/^\s*$/d' pika-mocha-master/package.json
mv pika-mocha-master "$target"
printf " ... initializing the project\n"
cd $target
npm install
echo ""
echo "run 'npm run serve' and open http://localhost:8888/assets "


