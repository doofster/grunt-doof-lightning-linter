/*
 * grunt-doof-lightning-linter
 *
 * Copyright (c) 2016 Dick Doof
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('dooflinter', 'Grunt wrapper for the Lightning linter', function() {
    var cli = require('salesforce-lightning-cli');

    var context = {
      flags : this.data.flags,
      args : {
        path : this.data.src
      }
    };

    console.dir(context);

    cli.commands[0].run(context);
  });

};
