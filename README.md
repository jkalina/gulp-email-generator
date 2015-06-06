# gulp-email-generator
> Gulp workflow for preparing HTML email content using Handlebars templating engine, LESS stylesheets converted to inline CSS and minified image files. Generator is inspired mainly by grunt-email-workflow and gulp-email-creator, takes the best ideas from both adding a little more modularity.

## Before you start...
...please have in mind, that I've just started developing this plugin - not every functionality works well, as it is the first time I write gulp plugin ;) therefore your contribution is very welcome!


## Getting started

To install all required dependencies, just run (assuming you have already installed node.js):

```
$ npm install
```

After that you can build sample template by running:

```
$ gulp
```

Before you start sending emails, you need to create ```secret.json``` file which contains mail account / mail sending service credentials. 
Read more in [secrets.json](#secrets.json) subsection of this document.  

## Configuration

There are two configuration files: [config.json](#config.json) and [secrets.json](#secrets.json).

### config.json file

In this file you can reconfigure directory layout of project.

```
{
  "paths" : {
    "src" : "src",
    "build" : "build",
    "styles" : "styles"
  },
  "mail" : {
    "from" : "Jakub Kalina"
  },
  "ftp" : {
    "host" : "YOUR_FTP_HOST",
    "remotePath" : "DESTINATION_DIRECTORY",
    "url" : "URL_TO_ACCESS_DESTINATION_DIRECTORY"
  }
}
```

### secrets.json file

This file should be placed in the root directory of generator. You can simply change the name of ```secret.json.example``` to ```secret.json``` and fill the necessary fields.

As the result, this file should look like in example below:

```
{
  "gmail" : {
    "username" : "YOUR_USERNAME@gmail.com",
    "password" : "YOUR_PASSWORD"
  },
  "ftp" : {
    "username" : "YOUR_USERNAME",
    "password" : "YOUR_PASSWORD"
  }
}
```

```secret.json``` file is by default added to ```.gitignore```, but still remember that sharing password with community can be quite risky ;)


## Basic usage

### Output minification
By default, the generated HTML files are not minified. If you want to minify output, run generator with ```--minify``` flag set, as in the example below:

```
$ gulp --minify
```

### Sending test email message

### Creating template

