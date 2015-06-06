'use strict';

var gulp = require('gulp'),
    nodemailer = require('nodemailer'),
    htmlstrip = require('htmlstrip-native'),
    fs = require('fs'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

module.exports = function (options, secret) {

    gulp.task('send', function () {
        return sendEmail($.util.env.template, $.util.env.to);
    });

    var sendEmail = function (template, recipient) {

        try {

            var opts = {
                include_script: false,
                include_style: false,
                compact_whitespace: true,
                include_attributes: {'alt': true}
            };

            var templatePath = options.paths.build + '/' + template;

            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: secret.gmail.username,
                    pass: secret.gmail.password
                }
            });

            var templateContent = fs.readFileSync(templatePath, {encoding: 'utf8'});

            var mailOptions = {
                from: options.mail.from,
                to: recipient,
                subject: 'test',
                html: templateContent,
                text: htmlstrip.html_strip(templateContent, opts)
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return $.util.log(error);
                } else {
                    return $.util.log('Message sent: ' + info.response);
                }
            });

        } catch (e) {
            if (e.code == 'ENOENT') {
                $.util.log('There was an error. Check your template name to make sure it exists in ./output');
            } else if (e instanceof TypeError) {
                $.util.log('There was an error. Please check your config.json to make sure everything is spelled correctly');
            } else {
                $.util.log(e);
            }
        }
    }
};
