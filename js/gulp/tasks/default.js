var gulp = require('gulp');

gulp.task('default', ['dev']);

gulp.task('dev', ['sass', 'watch', 'lite-server']);
