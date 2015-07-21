'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del']
    });

module.exports = function (options) {

    gulp.task('styles', ['templates'], function () {

        return gulp.src(options.paths.build + '/**/*.html')
            .pipe($.usemin({
                css: [
                    $.less({
                        paths: options.paths.src + '/' + options.paths.styles
                    })
                ],
                path: options.paths.src
            }))
            .pipe(gulp.dest(options.paths.build))
            .pipe($.inlineCss({
                removeStyleTags: false
            }))
            .pipe(gulp.dest(options.paths.build));

    });

    gulp.task('extractLessVariables', function () {

        return gulp.src(options.paths.src + '/**/variables.less')
            .pipe($.less2js())
            .pipe($.rename(function (path) {
                path.dirname = '/config';
                path.extname = '.json';
            }))
            .pipe(gulp.dest(options.paths.build));

    });
    
    gulp.task('purgeStyles', ['styles'], function (done) {
        $.del([options.paths.build + '/' + options.paths.styles], done);
    });
    
};