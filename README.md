# grunt-doof-lightning-linter

> Grunt wrapper for the Lightning linter

## Why?
So you can lint your Lightning files from Grunt builds, without having to use the Heroku Toolbelt.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-doof-lightning-linter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-doof-lightning-linter');
```

## The "dooflinter" task

### Overview
In your project's Gruntfile, add a section named `dooflinter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dooflinter: {
    target: {
      src: 'src/aura',
      flags: { // For more info: https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/cli_options.htm
          quiet: true     // Report errors only. Defaults to reporting both errors and warnings. Example: --quiet
          //ignore: [],   // Pattern to ignore some folders. Example: --ignore **/foo/**
          //json: true    // Output JSON to facilitate integration with other tools. Defaults to standard text output format. Example: --json,
          //files: []     // Pattern to include specific files. Defaults to all .js files. Example: --files **/*Controller.js
          //config: ''    // Path to a custom ESLint configuration. Only code styles rules will be picked up, the rest will be ignored. Example: --config path/to/.eslintrc
      }
    }
  }
});
```
