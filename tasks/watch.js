(function () {
  'use strict';

  module.exports = function(gulp, $) {

    gulp.task('watch', function() {
      $.livereload.listen();
      gulp.watch([$.path.join($.paths.src, '/**/*.*'), $.path.join($.paths.demo, '/index.html')], ['inject']);
    });

  };

})();
