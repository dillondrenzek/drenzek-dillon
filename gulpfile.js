<<<<<<< HEAD
var gulp = require('gulp')
,	watch = require('gulp-watch')
,	plumber = require('gulp-plumber')
,	stylus = require('gulp-stylus')
,	shell = require('gulp-shell')
;
=======
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	stylus = require('gulp-stylus');
>>>>>>> a50fffb

gulp.task('style', function() {
	return gulp.src('styl', {cwd: 'public/stylesheets/'})
		.pipe(plumber())
		.pipe(watch('styl/*.styl', {cwd: 'public/stylesheets/', verbose: true}))
		.pipe(stylus())
		.pipe(gulp.dest('./public/stylesheets/'));
<<<<<<< HEAD
=======
});

gulp.task('style-app', function() {
	return gulp.src('styl/index.styl', {cwd: 'public/stylesheets/'})
		.pipe(watch('styl'))
>>>>>>> a50fffb
});

gulp.task('default', function() {

});

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var watch = require('gulp-watch');

// gulp.task('default', function() {
//   return gulp.src('sass/*.scss')
//     .pipe(watch('sass/*.scss'))
//     .pipe(sass())
//     .pipe(gulp.dest('dist'));
// });


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