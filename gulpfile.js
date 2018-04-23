var gulp = require('gulp');
    sass = require('gulp-sass');
    sourcemaps = require('gulp-sourcemaps');
    autoprefixer = require('gulp-autoprefixer');
    concatCss = require('gulp-concat-css');
    uglifycss = require('gulp-uglifycss');
    concat = require('gulp-concat');
    uglify = require('gulp-uglify');
    watch = require('gulp-watch');


gulp.task('sass', function () {
    gulp.src('./src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./src/styles/'))
})

gulp.task('styles', function () {
  return gulp.src('./src/styles/**/*.css')
    .pipe(concatCss("style.main.min.css"))
    .pipe(uglifycss())
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('script.main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
});


gulp.task('watch', ['sass', 'styles', 'scripts'], function () {
    gulp.watch('./src/styles/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
    gulp.watch('./src/styles/**/*.css', ['styles']);
})









