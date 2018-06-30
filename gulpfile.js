var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var injectHtml = require('gulp-inject-stringified-html');

gulp.task('inject', function () {
  var dest = 'dist';
  var filename = 'app.js'
  
  return gulp.src(['app/js/scripts.js'])
    .pipe(sourcemaps.init())
      .pipe(injectHtml())  // <--- gulp-inject-stringified-html here.
      .pipe(concat(filename))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest));
});

gulp.task('sass', function() {
  gulp.src(['app/scss/*.scss'])
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], {cascade: true}))
    .pipe(gulp.dest('app/css/'))
});