(function () {
  'use strict';

  module.exports = function(gulp, $) {
    gulp.task('inject', ['styles', 'scripts'], function() {
      return gulp.src($.path.join($.paths.src, '/*.html'))
        .pipe($.injectFile())
        .pipe(gulp.dest('.'))
        .pipe($.livereload());
    });
  };
})();
