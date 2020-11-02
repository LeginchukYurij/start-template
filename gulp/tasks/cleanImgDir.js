const del = require('del')

module.exports = function cleanImgDir(cb) {
    return del('build/img').then(() => {
        cb()
    })
}