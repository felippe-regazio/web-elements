const gulp = require('gulp');
const sass = require('gulp-sass');
const clean_css = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
const uglify_js = require('gulp-uglify');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');

const elements = './elements';
const bundle = './bundle';

// construct "elements" a la carte

gulp.task('styles', function(){
	return gulp.src('./source/**/*.scss')
	.pipe(plumber(true))
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(clean_css())
	.pipe(prefix())
	.pipe(gulp.dest(elements));
});

gulp.task('scripts', function(){
	return gulp.src('./source/**/*.js')
	.pipe(plumber(true))
	.pipe(babel({presets: ['@babel/preset-env']}))
	.pipe(uglify_js())
	.pipe(gulp.dest(elements));
});

// construct "elements" bundle .min

gulp.task('bundle-css', function(){
	return gulp.src(`${elements}/**/*.css`)
	.pipe(plumber(true))
	.pipe(concat('elements.min.css'))
	.pipe(gulp.dest(bundle));
});

gulp.task('bundle-js', function(){
	return gulp.src(`${elements}/**/*.js`)
	.pipe(plumber(true))
	.pipe(concat('elements.min.js'))
	.pipe(gulp.dest(bundle));
});

//  --------------------------------

gulp.task('watch', function(done) {
	if (process.argv[2] === '--dev') {
		gulp.watch('./source/**/*.scss', gulp.series('styles', 'bundle-css'));
		gulp.watch('./source/**/*.js', gulp.series('scripts', 'bundle-js'));
	} else {
	  done();
	}
});

gulp.task('default', gulp.series([
	'styles',
	'scripts',
	'bundle-css',
	'bundle-js',
	'watch'
]));