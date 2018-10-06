#!/usr/bin/env bash

set -x
set -e

npm run build

npm run build:ssr

kill `lsof -t -i :4000` || true

npm run serve:ssr &

cp -r ./dist/ui-model/* ../ui-model.github.io/

cp ./dist/ui-model/index.html ../ui-model.github.io/404.html

sleep 3

wget -m --adjust-extension localhost:4000 -P /tmp

kill `lsof -t -i :4000`

cp -r /tmp/localhost:4000/* ../ui-model.github.io

rm -fr /tmp/localhost:4000

commitMessage=$(git log --oneline -n 1)

cd ../ui-model.github.io/

git add .
git commit -am "${commitMessage}"

git push

cd -

set +x
set +e
