const gulp = require('gulp')
const posthtml = require('gulp-posthtml')

gulp.task('html1', () => {
  let plugins = [
    require('posthtml-email-remove-unused-css')({ whitelist: ['.ExternalClass', '.ReadMsgBody', '.yshortcuts', '.Mso*', '#outlook', '.module-*'] })
  ]
  return gulp.src('src/input-with-options.html')
    .pipe(posthtml(plugins, {
      closingSingleTag: 'slash'
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('html2', () => {
  let plugins = [
    require('posthtml-email-remove-unused-css')({ whitelist: ['.ExternalClass', '.ReadMsgBody', '.yshortcuts', '.Mso*', '#outlook', '.module-*'] })
  ]
  return gulp.src('src/input-without-options.html')
    .pipe(posthtml(plugins))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['html1', 'html2'])
