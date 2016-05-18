var gutil         = require('gulp-util');
var sass          = require('gulp-sass');
var autoprefixer  = require('autoprefixer');
var stylelint     = require('stylelint');

module.exports = function (gulp, config, argv) {

  gulp.task('styles', function () {

    return gulp.src(config.paths.source.sass + 'main.scss')
      .pipe(sass())
      .pipe(gulp.dest(config.paths.build.styles));
  });
};
