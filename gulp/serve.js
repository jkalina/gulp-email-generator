'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

module.exports = function (options) {

    gulp.task('serve', ['build'], function () {
        browserSync.init({
            server: {
                baseDir: options.paths.build,
                index: $.util.env.template ? $.util.env.template : 'index.html'
            }
        });

        gulp.watch(options.paths.src + '/**/*.{less,jade,jpg,jpeg,png,gif}', ['watch']);

    });

    gulp.task('watch', ['templates', 'styles', 'images'], function () {
        browserSync.reload();
    });

};
