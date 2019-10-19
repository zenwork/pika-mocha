set -o errexit
set -o nounset
set -o pipefail

target=${1:-"web-project"}

wget --no-check-certificate https://github.com/zenwork/pika-mocha/archive/master.zip
unzip master.zip
rm -rf master.zip
rm -rf pika-mocha-master/.git
rm -rf pika-mocha-master/README.md
sed -i -e "s/pika-mocha/$target/" pika-mocha-master/package.json
sed -i -e "s/^.*author.*$//" pika-mocha-master/package.json
sed -i -e '/^\s*$/d' pika-mocha-master/package.json
mv pika-mocha-master "$target"

