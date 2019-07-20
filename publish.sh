#!/bin/sh

npm run build-libs
npm publish --access public ./dist/ui-model/common/
npm publish --access public ./dist/ui-model/core/
npm publish --access public ./dist/ui-model/chart/
npm publish --access public ./dist/ui-model/calendar/
npm publish --access public ./dist/ui-model/angular/
npm publish --access public ./dist/ui-model/angular-svg/
npm publish --access public ./dist/ui-model/angular-d3/
npm publish --access public ./dist/ui-model/angular-markdown/
npm publish --access public ./dist/ui-model/angular-bootstrap/
