var del = require('del');

module.exports = function (gulp, config, argv) {
  gulp.task('clean', function () {
    if (!argv.prod) {
      return del([
        config.paths.build.base
      ]);
    }
  });
};
