var gulp = require('gulp')
,	watch = require('gulp-watch')
,	plumber = require('gulp-plumber')
,	sass = require('gulp-sass')
,	shell = require('gulp-shell')
;

// SHELL THIS SHIT
gulp.task('sass', function () {
    return gulp.src('./public/stylesheets/sass/*.scss')
    	.pipe(watch('./public/stylesheets/sass/*.scss'))
    	.pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./public/stylesheets/'));
});



gulp.task('default', ['sass']);
