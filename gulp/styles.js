'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del']
    });

module.exports = function (options) {

    gulp.task('styles', ['buildStyles', 'cleanStyles']);

    gulp.task('buildStyles', ['templates'], function () {

        return gulp.src(options.paths.build + '/**/*.html')
            .pipe($.usemin({
                css: [
                    $.less(),
                    'concat'
                ],
                path: options.paths.src
            }))
            .pipe(gulp.dest(options.paths.build))
            .pipe($.inlineCss({
                removeStyleTags: false
            }))
            .pipe(gulp.dest(options.paths.build));

    });

    gulp.task('cleanStyles', ['buildStyles'], function (done) {
        $.del([options.paths.build + '/' + options.paths.styles], done);
    });

};