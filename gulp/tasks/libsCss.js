const gulp = require('gulp');

const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const debug = require('gulp-debug');



module.exports = function libsCss() {
    return gulp.src('src/libs/**/*.css')
        .pipe(cleanCSS({
            debug: true,
            compatibility: '*'
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(debug({title: 'css-libs:'}))
        .pipe(gulp.dest('build/libs'))
}