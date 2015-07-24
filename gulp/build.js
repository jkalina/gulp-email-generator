'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del']
    });

module.exports = function (options) {

    gulp.task('build', ['templates', 'styles', 'images', 'purge'], function () {
        if ($.util.env.minify === true) {
            gulp.start('minifyHtml');
        }
    });

    gulp.task('minifyHtml', ['templates', 'styles', 'images'], function () {
        return gulp.src(options.paths.build + '/**/*.html')
            .pipe($.minifyHtml({
                conditionals: true
            }))
            .pipe(gulp.dest(options.paths.build));
    });

    //post build task for removing temporary files
    gulp.task('purge', ['purgeStyles']);
    
    //pre build task for cleaning workspace
    gulp.task('clean', function (done) {
        $.del([options.paths.build], done);
    });

};