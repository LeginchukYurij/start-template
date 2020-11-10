const gulp = require('gulp');

const clean = require('./cleanImgDir');
const imageMinify = require('./imageMin');
const styles = require('./styles');
const pug2html = require('./pug2html');
const script = require('./script');
const fonts = require('./fonts');
const libsJS = require('./libsJs');
const libsCss = require('./libsCss');
const cleanImgDirectory = require('./cleanImgDir');

const server = require('browser-sync').create()

function readyReload(cb) {
    server.reload()
    cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/img/**/*.{gif,png,jpg,svg,webp}', gulp.series(cleanImgDirectory, imageMinify, readyReload))
    gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))
    gulp.watch('src/pages/**/*.pug', gulp.series(pug2html, readyReload))
    gulp.watch('src/fonts/**/*.{ttf,otf}', gulp.series(fonts, readyReload))
    gulp.watch('src/libs/**/*.css', gulp.series(libsCss, readyReload))
    gulp.watch('src/libs/**/*.js', gulp.series(libsJS, readyReload))


    return cb()
}