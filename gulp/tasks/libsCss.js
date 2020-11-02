const gulp = require('gulp');

const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");



module.exports = function libsCss() {
    return gulp.src('src/libs/**/*.css')
        .pipe(cleanCSS({
            debug: true,
            compatibility: '*'
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/libs'))
}