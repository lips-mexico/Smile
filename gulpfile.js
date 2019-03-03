'use strict';
// =====================================================================================================
//     ____       _        __ _ _
//    / ___|_   _| |_ __  / _(_) | ___
//   | |  _| | | | | '_ \| |_| | |/ _ \
//   | |_| | |_| | | |_) |  _| | |  __/
//    \____|\__,_|_| .__/|_| |_|_|\___|
//                 |_|
// =====================================================================================================
// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
sass.compiler = require('node-sass');
let sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');

// Routes
var file = {
  test: './app/test/test.scss',
  test_units: './app/test/units/**/*.scss',
  result: './app/test/result.css',
  main: './app/src/main.scss',
  smile: './app/dist/smile.css',
  sass: './app/src/**/*.scss',
  templates: './templates/*.scss'
};

var here = './';

var app = {
  test: './app/test',
  dist: './app/dist',
  logs: './app/logs'
};
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * @name test
 * @description - Compiles the main test file and places the compiled results under the same directory.
 */
gulp.task('test', function() {
  return gulp
    .src(file.test)
    .pipe(sass())
    .pipe(rename('result.css'))
    .pipe(gulp.dest(app.test));
});
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * @name compile
 * @description - Compiles the main.scss file into an import ready smile.css  and creates a sourcemap.
 */
gulp.task('compile', function() {
  return gulp
    .src(file.main)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(rename('smile.css'))
    .pipe(sourcemaps.write(here))
    .pipe(gulp.dest(app.dist));
});
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * @name minify
 * @description - Transfoms the importable file smile.css into a minified version.
 */
gulp.task('minify', function() {
  return gulp
    .src(file.main)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename('smile.min.css'))
    .pipe(gulp.dest(app.dist));
});
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * @name doc
 * @description - Parses all SassDoc comments and creates a configured web documentation library.
 */
gulp.task('doc', function() {
  return gulp.src([file.sass,  file.templates]).pipe(sassdoc());
});
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * @name produce
 * @description - Calls all tasks that make for a deploy-ready system.
 */
gulp.task('produce', function() {
  return gulp.series('compile', 'minify', 'doc');
});
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * @name default
 * @description -
 */
gulp.task('default', function() {
  gulp.watch(file.sass, gulp.series('compile'));
  gulp.watch(file.sass, gulp.series('minify'));
  gulp.watch(file.sass, gulp.series('doc'));
});