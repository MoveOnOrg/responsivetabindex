const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('default', () => {
  return gulp.src('responsivetabindex.js')
    .pipe(uglify())
    .pipe(rename('responsivetabindex.min.js'))
    .pipe(gulp.dest('.'));
});
