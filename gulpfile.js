const gulp = require('gulp');

const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html');
const libsCss = require('./gulp/tasks/libsCss');
const libsJS = require('./gulp/tasks/libsJs');
const styles = require('./gulp/tasks/styles');
const stylesMin = require('./gulp/tasks/stylesMinify');
const scriptsMinify = require('./gulp/tasks/scriptsMinify');
const scripts = require('./gulp/tasks/script');
const imgMinify = require('./gulp/tasks/imageMin');
const fonts = require('./gulp/tasks/fonts');

const clean = require('./gulp/tasks/clean');

const dev = gulp.series(fonts, pug2html, styles, scripts, imgMinify, libsCss, libsJS);

module.exports.start = gulp.series( dev, serve);
module.exports.build = gulp.series(clean, pug2html, styles, scripts, imgMinify, libsCss, libsJS);
module.exports.buildMinify = gulp.series(clean, pug2html, stylesMin, scriptsMinify, imgMinify, libsCss, libsJS);

module.exports.clean = gulp.series(clean);


