var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var shell = require('shelljs');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');

gulp.task('clean', () => {
  return gulp.src('./publish')
    .pipe(rimraf());
});

gulp.task('compile', () => {
  shell.exec('./node_modules/.bin/ngc -p ./src/app/@ui-model/tsconfig.libs.json');
});

gulp.task('copy-files', () => {
  return gulp.src(['./src/app/@ui-model/**/*', '!./src/app/@ui-model/**/*.ts'])
    .pipe(gulp.dest('./publish'));
});

gulp.task('inline-templates', () => {
  return gulp.src('./publish/**/*.component.js')
    .pipe(replace(/\btemplateUrl:\s+'(.+?.component.html)'/g, 'template: require(\'./$1\')'))
    .pipe(replace(/\bstyleUrls:\s+\['(.+?.component.scss)']/g, 'styles: [require(\'./$1\')]'))
    .pipe(gulp.dest('./publish'));
});

gulp.task('default', () => {
  return runSequence('clean', 'compile', 'copy-files', 'inline-templates');
});
