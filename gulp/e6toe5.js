'use strict';

var path = require('path');
var gulp = require('gulp');
var babel = require('gulp-babel');

var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('e6toe5', function() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe($.jshint())
        .pipe(babel())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe($.size())
});
