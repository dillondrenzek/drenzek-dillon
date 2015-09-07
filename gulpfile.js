// Gulpfile
// version 2.0.0

var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	stylus = require('gulp-stylus'),
	shell = require('gulp-shell'),
  browserSync = require('browser-sync'),
  nodemon = require('gulp-nodemon');

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

// GLOBAL SYNC ------------------
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    port: 7000,
    files: ["public/stylesheets/**", "*.js", "views/**/**"]
  });
});

// NODEMON ----------------------
gulp.task('nodemon', function (cb) {
  return nodemon({
    script: 'index.js'
  }).on('start', function () {
    cb();
  });
});



var defaults = function() {
  return ['stylus', 'serve'];
};


gulp.task('default', defaults());








// Later Versions

// var browserSync = require('browser-sync');
// var reload = browserSync.reload;

// // watch files for changes and reload
// gulp.task('serve', function() {
//   browserSync({
//     server: {
//       baseDir: 'app'
//     }
//   });

//   gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
// });





// var sass = require('gulp-ruby-sass');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;

// gulp.task('sass', function() {
//   return sass('scss/styles.scss')
//     .pipe(gulp.dest('css'))
//     .pipe(reload({ stream:true }));
// });

// // watch files for changes and reload
// gulp.task('serve', function() {
//   browserSync({
//     server: {
//       baseDir: 'app'
//     }
//   });

//   gulp.watch('scss/*.scss', ['sass']);
// });