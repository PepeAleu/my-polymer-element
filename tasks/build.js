(function () {
  'use strict';

  module.exports = function(gulp, $) {

    gulp.task('build', ['clean'], function () {
      return gulp.src(['!index.html','./*.html', './demo/**/*'], { base: './' })
        .pipe(gulp.dest($.paths.dist));
    });

  };

})();
