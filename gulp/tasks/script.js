const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

module.exports = function script (cb) {
    gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['@babel/env']
            }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))

    cb();
}

