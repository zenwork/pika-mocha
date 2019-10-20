set -o errexit
set -o nounset
set -o pipefail

target=${1:-"web-project"}
archive=/tmp/pika-mocha.zip
echo "downloading"
wget --no-check-certificate --quiet --output-document $archive https://github.com/zenwork/pika-mocha/archive/master.zip
echo "unpacking"
unzip -oq -d . $archive
rm -rf $archive
rm -rf pika-mocha-master/.git
rm -rf pika-mocha-master/README.md
echo "preparing $target"
sed -i -e "s/pika-mocha/$target/" pika-mocha-master/package.json
sed -i -e "s/^.*author.*$//" pika-mocha-master/package.json
sed -i -e '/^\s*$/d' pika-mocha-master/package.json
mv pika-mocha-master "$target"
echo "done"

