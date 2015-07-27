'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

module.exports = function (options) {
    
    gulp.task('templates', ['extractLessVariables'], function () {
        
        var lessVars = JSON.parse(fs.readFileSync(options.paths.build + '/config/variables.json', 'utf8'));
        
        return gulp.src(options.paths.src + '/*.jade')
            .pipe($.jade({
                pretty: true,
                locals: lessVars
            }))
            .pipe($.rename(function (path) {
                path.extname = '.html'
            }))
            .pipe(gulp.dest(options.paths.build));
    });
    
};