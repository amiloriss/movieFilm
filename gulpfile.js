const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('style-set', function() {
  return gulp
    .src('./styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest('./styles/css'));
});

gulp.task('default', function() {
  gulp.watch('./styles/scss/*.scss', gulp.series('style-set'));
});
