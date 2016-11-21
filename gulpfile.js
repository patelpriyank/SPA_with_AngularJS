 /*,
    jshint = require('gulp-jshint'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');*/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var source = require('vinyl-source-stream'); // use the original module directly where you can, which is what vinyl-source-stream handles for you.
var browserify = require('browserify');

var paths = {
    scripts: 'app/**/*.js',
    index: './app/index.html',
    partials: ['app/**/*.html', '!app/index.html'],
    distProd: './dist.prod',
    distScriptsProd: './dist.prod/scripts',
    vendorScripts: ['./node_modules/angular/angular.min.js']
};

var pipes = {};

/*** Vendor scripts *********/
pipes.orderedVendorScripts = function() {
    return plugins.order(['angular.js']);
};

pipes.builtVendorScriptsProd = function() {
    return gulp.src(paths.vendorScripts)
        .pipe(plugins.debug({title: "vendorScripts:"}))
        .pipe(pipes.orderedVendorScripts())
        .pipe(plugins.concat('vendor.min.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(paths.distScriptsProd));
};

// concatenates, uglifies, and moves vendor scripts into the prod environment
gulp.task('build-vendor-scripts-prod', pipes.builtVendorScriptsProd);

/**** END OF Vendor scripts ***/


// JSHint task
gulp.task('lint', function() {
  gulp.src('./app/**/*.js')
  .pipe(plugins.jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(plugins.jshint.reporter('default'));
});

gulp.task('browserify', function() {
  var bundleStream = browserify('./app/app.js').bundle()
 
  bundleStream
    .pipe(source('./app/app.js'))
    .pipe(plugins.streamify(plugins.uglify()))
    .pipe(plugins.rename('bundle.js'))
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

gulp.task('default', ['lint', 'browserify', 'views', 'build-vendor-scripts-prod', 'watch']);