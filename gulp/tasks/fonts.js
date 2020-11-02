const isWin = process.platform === "win32";

const gulp = require('gulp');

const fontfacegen = require('fontfacegen');
const  map = require('map-stream');

if(!isWin) {
    module.exports =  function fontgen() {
        return gulp.src("src/fonts/**/*.{ttf,otf}")
            .pipe(map(function(file, cb) {
                fontfacegen({
                    source: file.path,
                    dest: 'build/fonts',
                    css_fontpath: '../fonts/',
                    css: 'build/fonts/fontface.css',
                    collate: true
                });
                cb(null, file);
            }));
    };
} else {
    module.exports =  function fontgen() {
        return gulp.src("src/fonts/**/*")
            .pipe(gulp.dest('build/fonts'))

    };
}
