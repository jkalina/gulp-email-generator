'use strict';

var gulp = require('gulp'),
    wrench = require('wrench'),
    util = require('gulp-util'),
    options = require('./config.json'),
    secret = require('./secret.json');

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {

    if (util.env.src) {
        options.paths.src = util.env.src; 
    }
    
    require('./gulp/' + file)(options, secret);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});