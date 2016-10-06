(function () {
  'use strict';

  var gulp = require('gulp');
  var taskPath = './tasks/';
  var taskList = require('fs').readdirSync(taskPath);
  var $ = require('gulp-load-plugins')();

  /*
  *  function that listen a error and emit.
  */
  $.path = require('path');
  $.streamRename = require('stream-rename');

  taskList.forEach(function(taskFile) {
      require(taskPath + taskFile)(gulp, $);
  });

  /**
   *  Main paths of the project
   */
  $.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    demo: 'demo'
  };

  /*
  *  function that listen a error and emit.
  */
  $.errorHandler = function(title) {
    return function(err) {
      $.util.log($.util.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  };

  gulp.task('clean', function() {
    return gulp.src($.paths.tmp, {read: false})
      .pipe($.clean({force: true}));
  });

  gulp.task('default', ['polyserve', 'watch']);

  gulp.task('polyserve', ['inject'], $.shell.task('polymer serve --open'));

})();
