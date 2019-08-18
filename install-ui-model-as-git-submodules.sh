#!/usr/bin/env bash

git submodule add git@github.com:ui-model/angular.git projects/ui-model/angular
git submodule add git@github.com:ui-model/angular-bootstrap.git projects/ui-model/angular-bootstrap
git submodule add git@github.com:ui-model/angular-d3.git projects/ui-model/angular-d3
git submodule add git@github.com:ui-model/angular-markdown.git projects/ui-model/angular-markdown
git submodule add git@github.com:ui-model/angular-svg.git projects/ui-model/angular-svg
git submodule add git@github.com:ui-model/chart.git projects/ui-model/chart
git submodule add git@github.com:ui-model/common.git projects/ui-model/common
git submodule add git@github.com:ui-model/core.git projects/ui-model/core

echo please add path maps to tsconfig.json/compilerOptions/paths
