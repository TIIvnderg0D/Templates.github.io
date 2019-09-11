const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./Foundation/scss/**/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('./Foundation/css'))
                .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './Foundation'
        }
    })
    gulp.watch('./Foundation/scss/**/*.scss', style);
    gulp.watch('./Foundation/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;