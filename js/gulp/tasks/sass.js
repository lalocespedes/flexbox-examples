var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var concat = require('gulp-concat');

gulp.task('sass', function () {

    return gulp.src('./scss/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
    }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/css/'))
    .pipe(notify('css minified'));

});
