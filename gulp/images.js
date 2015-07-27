'use strict';

var gulp = require('gulp'),
    pngquant = require('imagemin-pngquant'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

module.exports = function (options, secret) {

    gulp.task('minifyImages', function () {
        return gulp.src(options.paths.src + '/**/*.{jpg,jpeg,png,gif}')
            .pipe($.imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
            }))
            .pipe(gulp.dest(options.paths.build))

    });

    //gulp.task('uploadImages', ['minifyImages'], function () {
    //    return gulp.src(options.paths.build + '/**/*.{jpg,jpeg,png,gif}')
    //        .pipe($.ftp({
    //            host: options.ftp.host,
    //            user: secret.ftp.username,
    //            pass: secret.ftp.password,
    //            remotePath: options.ftp.remotePath
    //        }))
    //});

    gulp.task('images', ['templates'], function () {
        return gulp.src(options.paths.build + '/**/*.html')
            .pipe($.cdnify({
                base: options.ftp.url
            }))
            .pipe(gulp.dest(options.paths.build))
    });

};