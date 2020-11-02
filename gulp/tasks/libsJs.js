const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");

module.exports = function  libsJs() {
    return gulp.src('src/libs/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/libs'))
}

