'use strict';

var path = require('path');
var gulp = require('gulp');
var babel = require('gulp-babel');

var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();
var babelify = require('babelify');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');

gulp.task('jscomp', function() {
    return gulp.src(path.join(conf.paths.src,'/app/**/*.js'))
        .pipe($.jshint({
            esnext: true // Enable ES6 support
        }))
        .pipe($.jshint.reporter('jshint-stylish'));
});


gulp.task('scripts', ['jscomp'], function() {

    var sources = browserify({
        entries: path.join(conf.paths.src,'/app/index.module.js'),
        debug: true // Build source maps
    })
        .transform(babelify.configure({
            // You can configure babel here!
            // https://babeljs.io/docs/usage/options/
            presets: ["es2015"]
        }));

    return sources.bundle()
        .pipe(vinylSourceStream("app.js"))
        .pipe(vinylBuffer())
        .pipe($.sourcemaps.init({
            loadMaps: true // Load the sourcemaps browserify already generated
        }))
        .pipe($.ngAnnotate())
        //.pipe($.uglify())
        .pipe($.sourcemaps.write('./', {
            includeContent: true
        }))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')))
        .pipe(browserSync.reload({
            stream: true
        }));;

});
