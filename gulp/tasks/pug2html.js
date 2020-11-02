const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const htmlValidator = require('gulp-w3c-html-validator');

module.exports = function pug2html(cb) {
    return gulp.src('src/pages/*.pug')
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('build'))
}