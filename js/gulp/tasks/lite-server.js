var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('lite-server', function (cb) {
  exec('npm run lite', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
