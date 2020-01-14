const gulp = require('gulp');
const sass = require('gulp-sass');
const clean_css = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
const uglify_js = require('gulp-uglify');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const clean_dir = require('gulp-clean');
const edit = require('gulp-append-prepend');

const elements = './elements';
const bundle = './';

// define a UMD (Universal Module Definition)
// as wrapper to every single element, and as
// a single wrapper to the bundle

const umd_init = `
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['dependency'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('dependency'));
    } else {
        root.returnExports = factory(root.dependency);
    }
}(this, function (dependency) {`;

const umd_end = '}))';

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
  .pipe(edit.prependText(umd_init))
  .pipe(edit.appendText(umd_end))
	.pipe(uglify_js())
	.pipe(gulp.dest(elements));
});

// construct "elements" bundle .min

gulp.task('bundle-css', function(){
	return gulp.src(`${elements}/**/*.css`)
	.pipe(plumber(true))
	.pipe(concat('elements.css'))
	.pipe(gulp.dest(bundle));
});

gulp.task('bundle-js', function(){
	return gulp.src(`source/**/*.js`)
	.pipe(plumber(true))
	.pipe(babel({presets: ['@babel/preset-env']}))
	.pipe(concat('elements.js'))
  .pipe(edit.prependText(umd_init))
  .pipe(edit.appendText(umd_end))
	.pipe(uglify_js())
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

gulp.task('clean', function(done) {
	return (process.argv[2] === '--clean') ? gulp.src([elements]).pipe(clean_dir()) : done();
});

gulp.task('default', gulp.series([
	'clean',
	'styles',
	'scripts',
	'bundle-css',
	'bundle-js',
	'watch'
]));