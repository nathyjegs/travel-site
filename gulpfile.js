let gulp = require('gulp');
let watch = require('gulp-watch');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssvars = require('postcss-simple-vars');
let nested = require('postcss-nested');
let cssImport = require('postcss-import');
let browserSync = require('browser-sync').create();

gulp.task('default', function () {
	console.log('Hooray - you created a Gulp task.')
});


gulp.task('html', function () {
	console.log('Imagine something useful done to your page')
});

gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
	watch('./app/index.html', function () {
		gulp.start('html');
	})

	watch('./app/assets/**/*.css', function () {
		gulp.start('styles');
	})
});

