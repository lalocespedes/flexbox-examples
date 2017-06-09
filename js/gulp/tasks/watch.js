var gulp = require('gulp');

gulp.task('watch', function () {
    function reportChange(event){
        console.log('Event type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path); // The path of the modified file
    }

    gulp.watch('./scss/**/*.scss', ['sass']).on('change', reportChange);

});
