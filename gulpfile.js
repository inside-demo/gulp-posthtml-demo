const gulp = require('gulp')
const posthtml = require('gulp-posthtml')

gulp.task('html1', () => {
  return gulp.src('src/input-with-options.html')
    .pipe(posthtml([], {
    	closingSingleTag: 'slash'
  	}))
    .pipe(gulp.dest('dist'))
})

gulp.task('html2', () => {
  return gulp.src('src/input-without-options.html')
    .pipe(posthtml([]))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['html1', 'html2'])