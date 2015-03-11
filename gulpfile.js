var gulp = require('gulp')
,	watch = require('gulp-watch')
,	plumber = require('gulp-plumber')
,	stylus = require('gulp-stylus')
,	shell = require('gulp-shell')
;

gulp.task('style', function() {
	return gulp.src('styl', {cwd: 'public/stylesheets/'})
		.pipe(plumber())
		.pipe(watch('styl/*.styl', {cwd: 'public/stylesheets/', verbose: true}))
		.pipe(stylus())
		.pipe(gulp.dest('./public/stylesheets/'));
});



gulp.task('default', ['sass']);
