# gulp-email-generator
> Gulp workflow for preparing HTML email content using Jade templating engine, LESS stylesheets converted to inline CSS and minified image files. Generator is inspired mainly by grunt-email-workflow and gulp-email-creator, takes the best ideas from both adding a little more modularity.

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
Read more in [secret.json](#secret.json) subsection of this document.  

## Configuration

There are two configuration files: [config.json](#config.json) and [secret.json](#secret.json).

### config.json

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

### secret.json

This file should be placed in the root directory of generator. You can simply change the name of ```secret.json.example``` to ```secret.json``` and fill all required fields.

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

```secret.json``` file is by default added to ```.gitignore``` to prevent publishing confidential data on github :) 


## Basic usage

### Output minification
By default, the generated HTML files are not minified. If you want to minify output, run generator with ```--minify``` flag, as in the example below:

```
$ gulp --minify
```

### Sending test email message

```
$ gulp send --to=email@example.com [--template=template-name.html]
```
By default, template variable is set to `index.html`

### Automatic page reloading

```
$ gulp serve [--template=template-name.html]
```

By default, template variable is set to `index.html`