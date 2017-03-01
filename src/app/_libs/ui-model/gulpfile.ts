import {src, task, watch} from 'gulp';
import * as mocha from 'gulp-mocha';
import tslint from 'gulp-tslint';

task('default', () => {
  watch('./src/**/*.ts', ['lint', 'mocha']);
});

task('lint', () => {
  return src('./src/**/*.ts')
    .pipe(tslint({
      configuration: './tslint.json',
    }))
    .pipe(tslint.report());
});

task('mocha', () => {
  return src('./src/**/*.spec.ts')
    .pipe(mocha({reporter: 'nyan'}));
});
