(function () {
  'use strict';

  module.exports = function(gulp, $) {

    gulp.task('styles', ['clean'], function () {
      return gulp.src($.path.join($.paths.src, '/scss/**/*.scss'))
        .pipe($.sourcemaps.init())
        .pipe($.sass({style: 'expanded'})).on('error', $.errorHandler('Sass'))
        .pipe($.autoprefixer()).on('error', $.errorHandler('Autoprefixer'))
        .pipe($.sourcemaps.write())
        .pipe($.injectString.wrap('<style>\n', '\n</style>\n'))
        .pipe(gulp.dest($.path.join($.paths.tmp, '/css/')));
    });

  };
})();
