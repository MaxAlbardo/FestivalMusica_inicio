const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// Funcion que compila SASS

function css() {
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function minificarCSS() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

function watchArchivos() {
    watch('src/scss/**/*.scss', css) // * = es igual en la carpeta actual - ** = todo los archivos con esta extension
}

exports.css = css
exports.minificarCSS = minificarCSS
exports.watchArchivos = watchArchivos