var source = require('vinyl-source-stream'); // use the original module directly where you can, which is what vinyl-source-stream handles for you.
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// JSHint task
gulp.task('lint', function() {
  gulp.src('./app/**/*.js')
  .pipe(jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
  var bundleStream = browserify('./app/app.js').bundle()
 
  bundleStream
    .pipe(source('./app/app.js'))
    .pipe(streamify(uglify()))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('dist.dev/'))
});

// Views task
gulp.task('views', function() {
  // Get our index.html
  gulp.src('app/**/*.html')
  // And put it in the dist folder
  .pipe(gulp.dest('dist.dev/'));
});

gulp.task('watch', ['lint'], function() {
  // Watch our scripts
  gulp.watch(['app/index.html', 'app/**/*.html', 'app/**/*.js', 'app/**/*.js'],[
    'lint',
    'browserify',
    'views'
  ]);
});

gulp.task('default', ['lint', 'browserify', 'views', 'watch']);