var gulp = require('gulp');
var postcss = require('gulp-postcss');
var flexbox = require('postcss-flexbox'); //postcss-flexbox plugin
var autoprefixer = require('autoprefixer');

gulp.task('process-css', function() {
  var processors = [
    flexbox, autoprefixer
  ]; // We added the flexbox to the processors
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});
