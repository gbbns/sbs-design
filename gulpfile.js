var gulp 			= require('gulp');
var argv			= require('yargs').argv;
var runSeq    = require('run-sequence');

/* ============================================================ *\
	CONFIG
\* ============================================================ */

const config = {
  paths: require('./project_config/paths.json'),
  stylelint: require('./project_config/stylelint.json')
}


/* ============================================================ *\
    Require tasks
\* ============================================================ */

require('./project_tasks/clean.js')(gulp, config, argv);
require('./project_tasks/html.js')(gulp, config, argv);
// require('./project_tasks/server.js')(gulp, config, argv);
require('./project_tasks/styles.js')(gulp, config, argv);

/* ============================================================ *\
    Watch tasks
\* ============================================================ */

gulp.task('watch', function () {

  gulp.watch([
    config.paths.source.sass + '/**/*.scss'
  ], ['styles']);
});

/* ============================================================ *\
    Task aliases
\* ============================================================ */

gulp.task('dev', function (callback) {
  runSeq(
    'default',
    'watch',
    'browser-sync',
    callback
  );
});

gulp.task('default', function (callback) {
  runSeq(
    'clean',
    'styles',
    'html'
  );
});
