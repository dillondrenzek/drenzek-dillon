var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	stylus = require('gulp-stylus');
var browserSync = require('browser-sync'),
	reload = browserSync.reload;

gulp.task('style', function() {
	return gulp.src('styl', {cwd: 'public/stylesheets/'})
		.pipe(plumber())
		.pipe(watch('styl/*.styl', {cwd: 'public/stylesheets/', verbose: true}))
		.pipe(stylus())
		.pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('serve', function() {
	browserSync({
		proxy: "localhost:4567"
	});

	

});

gulp.task('default', ['style']);



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