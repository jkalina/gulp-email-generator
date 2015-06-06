'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del']
    });

module.exports = function (options) {

    gulp.task('build', ['templates', 'styles', 'images'], function () {

        if ($.util.env.minify === true) {
            gulp.start('minifyHtml');
        }

    });

    gulp.task('minifyHtml', ['templates', 'styles', 'images'], function () {
        return gulp.src(options.paths.build + '/**/*.html')
            .pipe($.minifyHtml())
            .pipe(gulp.dest(options.paths.build));
    });

    gulp.task('clean', function (done) {
        $.del([options.paths.build], done);
    });

};