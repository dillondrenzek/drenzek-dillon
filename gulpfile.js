// Gulpfile
// version 2.2.0

var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	stylus = require('gulp-stylus'),
	shell = require('gulp-shell');

// STYLUS -----------------------
gulp.task('stylus', function() {
  var input = 'styl',
      output = '';

  return gulp.src('')
    .pipe(shell([
      'stylus --watch ./public/stylesheets/'+input+' -o ./public/stylesheets/'+output
    ]))
});

// SERVE ------------------------
gulp.task('serve', function() {
	return gulp.src('')
    .pipe(shell([
      'npm start'
    ]))
});


var defaults = function() {
  return ['stylus', 'serve'];
};


gulp.task('default', defaults());
