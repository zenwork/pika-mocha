set -o errexit
set -o nounset
set -o pipefail

target=${1:-"web-project"}
archive=/tmp/pika-mocha.zip

if [[ -d ./"$target" ]]
then
    echo "$target already exists"
    exit 1
fi

printf "downloading & unpacking"
wget --no-check-certificate --quiet --output-document $archive https://github.com/zenwork/pika-mocha/archive/master.zip
unzip -oq -d . $archive
rm -rf $archive
rm -rf pika-mocha-master/.git
rm -rf pika-mocha-master/README.md
printf " ...preparing %s" "$target"
sed -i -e "s/pika-mocha/$target/" pika-mocha-master/package.json
sed -i -e "s/\"version\".*:.*\"[0-9].[0-9].[0-9]\",/"version"        : "0.0.1",/" pika-mocha-master/package.json
sed -i -e "s/^.*author.*$//" pika-mocha-master/package.json
sed -i -e '/^\s*$/d' pika-mocha-master/package.json
mv pika-mocha-master "$target"
printf " ...done!"


