const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const debug = require('gulp-debug');

module.exports = function  libsJs() {
    return gulp.src('src/libs/**/*.js')
        .pipe(uglify())
        .pipe(debug({title: 'js-libs:'}))
        .pipe(gulp.dest('build/libs'))
}

