#!/usr/bin/env bash

set -x
set -e

npm run build

commitMessage=$(git log --oneline -n 1)

kill `lsof -t -i :4000` || true

npx http-server-spa dist/ui-model index.html 4000 &

rm -fr /tmp/ui-model-prerender || true

npx prerender mirror /tmp/ui-model-prerender/  http://localhost:4000/ -r --selector "app-markdown-viewer>div"

kill `lsof -t -i :4000` || true

rm -fr /tmp/ui-model-prebuilt

git clone https://asnowwolf:${GITHUB_ACCESS_TOKEN}@github.com/ui-model/ui-model-prebuilt.git /tmp/ui-model-prebuilt

cp -r ./dist/ui-model/* /tmp/ui-model-prebuilt/

cp -r /tmp/ui-model-prerender/localhost:4000/* /tmp/ui-model-prebuilt/

cd /tmp/ui-model-prebuilt/

git add .
git commit -am "${commitMessage}"

git push

cd -

set +x
set +e
