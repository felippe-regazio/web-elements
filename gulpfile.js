const gulp = require('gulp');
const sass = require('gulp-sass');
const clean_css = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
const uglify_js = require('gulp-uglify');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

gulp.task('styles', function(){
	return gulp.src('./source/**/*.scss')
	.pipe(plumber(true))
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(clean_css())
	.pipe(prefix())
	.pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function(){
	return gulp.src('./source/**/*.js')
	.pipe(plumber(true))
	.pipe(babel({presets: ['@babel/preset-env']}))
	.pipe(uglify_js())
	.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(done) {
	if (process.argv[2] === '--dev') {
		gulp.watch('./source/**/*.scss', gulp.series('styles'));
		gulp.watch('./source/**/*.js', gulp.series('scripts'));
	} else {
	  done();
	}
});


gulp.task('default', gulp.series(['styles', 'scripts', 'watch']));