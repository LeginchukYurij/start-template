const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const debug = require('gulp-debug');


module.exports = function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer({
                cascade: false
            }))
        .pipe(sourcemaps.write())
        .pipe(debug({title: 'styles:'}))
        .pipe(gulp.dest('build/css'))
}