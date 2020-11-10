const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const debug = require('gulp-debug');

module.exports = function imageMinify() {
    return gulp.src('src/img/**/*.{gif,png,jpg,svg,webp}')
        .pipe(imagemin())
        .pipe(debug({title: 'images:'}))
        .pipe(gulp.dest('build/img'))
}