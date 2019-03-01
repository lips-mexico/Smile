'use strict';
// =====================================================================================================
//     ____       _        __ _ _      
//    / ___|_   _| |_ __  / _(_) | ___ 
//   | |  _| | | | | '_ \| |_| | |/ _ \
//   | |_| | |_| | | |_) |  _| | |  __/
//    \____|\__,_|_| .__/|_| |_|_|\___|
//                 |_|                 
// =====================================================================================================
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
sass.compiler = require('node-sass');
let sourcemaps = require('gulp-sourcemaps');

var file = {
  test: './app/test/test.scss',
  result: './app/test/result.css',
  main: './app/src/main.scss',
  smile: './app/dist/smile.css'
}

var here = "./";

var app = {
  test: './app/test',
  dist: './app/dist',
  logs: './app/logs'
}
// -----------------------------------------------------------------------------------------------------
/**
 * @name test
 * @description - Compiles the main test file and places the compiled results under the same directory.
 */
gulp.task('test', function () {
  return gulp.src(file.test)
    .pipe(sass())
    .pipe(gulp.dest(app.test));
});
// -----------------------------------------------------------------------------------------------------
/**
 * @name compile
 * @description - Compiles the main.scss file into an import ready smile.css  and creates a sourcemap.
 */
gulp.task('compile', function () {
  return gulp.src(file.main)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(rename('smile.css'))
    .pipe(sourcemaps.write(here))
    .pipe(gulp.dest(app.dist));
});
// -----------------------------------------------------------------------------------------------------
/**
 * @name minify
 * @description - Transfoms the importable file smile.css into a minified version.
 */
gulp.task('minify', function () {
  return gulp.src(file.main)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('smile.min.css'))
    .pipe(gulp.dest(app.dist));
});
// -----------------------------------------------------------------------------------------------------
/**
 * @name produce
 * @description - 
 */
gulp.task('produce', function () {
  return gulp.series('compile', 'minify');
});