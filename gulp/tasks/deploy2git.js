const gulp = require('gulp');
const deploy = require('gulp-deploy-git');

const repozitoryAdress = 'https://github.com/LeginchukYurij/exp.git';


module.exports = function deploy2git() {
    return gulp.src('build/**/*', { read: false })
        .pipe(deploy({
            repository: repozitoryAdress,
            branches:   ['master']
        }))
};