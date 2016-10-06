(function () {
  'use strict';

  module.exports = function(gulp, $) {

    gulp.task('scripts', ['clean'], function () {
      return gulp.src($.path.join($.paths.src, '/js/**/*.js'))
        .pipe($.injectString.wrap('<script>\n', '\n</script>\n'))
        .pipe(gulp.dest($.path.join($.paths.tmp, '/js/')));
    });

  };

})();
