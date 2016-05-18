import gutil         from 'gulp-util';
import sass          from 'gulp-sass';
import autoprefixer  from 'autoprefixer';
import stylelint     from 'stylelint';

module.exports = function (gulp, config, argv) {

  gulp.task('styles', function () {

    return gulp.src(config.paths.source.sass + 'main.scss')
      .pipe(sass())
      .pipe(gulp.dest(config.paths.build.styles));
  });
};
