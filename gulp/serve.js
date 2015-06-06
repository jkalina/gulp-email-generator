'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

module.exports = function (options) {

    gulp.task('watch', function() {
        gulp.watch(options.paths.src + '/' + options.paths.styles + '/**/*.less', ['styles']);
        gulp.watch(options.paths.src + '/**/*.{hbs,handlebars}', ['templates']);
    });

    gulp.task('browser-sync', function() {
        browserSync.init({
            server: "./app"
        });
    });
};
