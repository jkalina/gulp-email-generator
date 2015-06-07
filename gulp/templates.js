'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

module.exports = function (options) {

    gulp.task('templates', ['buildTemplates', 'cdnifyImages']);

    gulp.task('buildTemplates', function () {

        return gulp.src(options.paths.src + '/*.jade')
            .pipe($.jade({
                pretty: true,
                locals: {
                    width: 740  //TODO: extract from variables.less
                }
            }))
            .pipe($.rename(function (path) {
                path.extname = '.html'
            }))
            .pipe(gulp.dest(options.paths.build));
    });

};