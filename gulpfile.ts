import {src, task, watch, dest} from 'gulp';
import * as mocha from 'gulp-mocha';
import tslint from 'gulp-tslint';
import * as ts from 'gulp-typescript';
import * as merge from 'merge2';
import * as sourcemaps from 'gulp-sourcemaps';
import * as rimraf from 'rimraf';
import * as npm from 'npm';

const distDir = './publish';

task('default', () => {
  watch('./src/app/_libs/**/*.ts', ['lint', 'mocha']);
});

task('lint', () => {
  return src('./src/app/_libs/**/*.ts')
    .pipe(tslint({
      configuration: './tslint.json',
    }))
    .pipe(tslint.report());
});

task('mocha', () => {
  return src('./src/app/_libs/**/*.spec.ts')
    .pipe(mocha({reporter: 'nyan'}));
});

task('clean', () => {
  rimraf.sync(distDir);
});

task('compile', ['clean'], () => {
  const compilerOptions = {
    "declaration": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [
      "es6",
      "dom"
    ],
    "module": "commonjs",
    "moduleResolution": "node",
    "target": "es5",
    "typeRoots": [],
    "baseUrl": ".",
    "paths": {
      "ui-model": [
        "./src/app/_libs/ui-model"
      ],
      "ui-model-angular": [
        "./src/app/_libs/ui-model-angular"
      ]
    }
  };

  const tsResult = src(['./src/app/_libs/**/*.ts', '!./src/app/_libs/**/*.spec.ts'])
    .pipe(sourcemaps.init())
    .pipe(ts(compilerOptions));

  return merge([
    tsResult.dts.pipe(dest(distDir)),
    tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(dest(distDir))
  ]);
});

task('build.readme', () => {
  return src('./src/app/_libs/**/*.markdown')
    .pipe(dest(distDir));
});

task('build.package', () => {
  return src('./src/app/_libs/**/package.json')
    .pipe(dest(distDir));
});

task('build', ['compile', 'build.readme', 'build.package'], () => {
});
