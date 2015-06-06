'use strict';

var gulp = require('gulp'),
    wrench = require('wrench'),
    options = require('./config.json'),
    secret = require('./secret.json')

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
    require('./gulp/' + file)(options, secret);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});