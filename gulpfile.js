// Gulpfile
// v3.0.1

var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	stylus = require('gulp-stylus'),
	shell = require('gulp-shell');

// STYLUS -----------------------
gulp.task('stylus', function() {
  var path = ['./public/styl',
              '-o',
              './public/css'].join(' ');

  return gulp.src('')
    .pipe(shell([
      'stylus --watch '+path
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
