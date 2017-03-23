#!/usr/bin/env bash

git push ui-model `git subtree split --prefix=src/app/_libs/ui-model master`:master
git push ui-model-angular `git subtree split --prefix=src/app/_libs/ui-model-angular master`:master
git push ui-model-angular-bootstrap `git subtree split --prefix=src/app/_libs/ui-model-angular-bootstrap master`:master
