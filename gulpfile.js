 /*,
    jshint = require('gulp-jshint'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');*/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var source = require('vinyl-source-stream'); // use the original module directly where you can, which is what vinyl-source-stream handles for you.
var browserify = require('browserify');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
 
// Not necessary, but it automatically adds prefixes for all browsers
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    appJS: './app/app.js',
    allScripts: 'app/**/*.js',
    allViews: 'app/**/*.html',
    allStyles: 'app/styles/*.css',
    allImages: 'app/Assets/images/*',
    index: './app/index.html',
    partials: ['app/**/*.html', '!app/index.html'],
    distDev: './dist.dev',
    distScripts: './dist.dev/scripts',
    distStyles: './dist.dev/styles',
    distImages: "./dist.dev/Assets/images/",
    vendorScripts: ['./app/VendorScripts/*.js']
};

var pipes = {};

/*** Vendor scripts *********/
pipes.orderedVendorScripts = function() {
    return plugins.order(['angular.js']);
};

pipes.builtVendorScripts = function() {
    return gulp.src(paths.vendorScripts)
        .pipe(plugins.debug({title: "vendorScripts:"}))
        .pipe(pipes.orderedVendorScripts())
        .pipe(plugins.concat('vendor.min.js'))
        .pipe(plugins.uglify().on('error', errorHandler))
        .pipe(gulp.dest(paths.distScripts));
};

// concatenates, uglifies, and moves vendor scripts into the  environment
gulp.task('build-vendor-scripts', pipes.builtVendorScripts);

/**** END OF Vendor scripts ***/


// JSHint task
gulp.task('lint', function() {
  gulp.src(paths.allScripts)
  .pipe(plugins.jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(plugins.jshint.reporter('default'));
});

gulp.task('browserify', function() {
  var bundleStream = browserify(paths.appJS).bundle()
 
  bundleStream
    .pipe(source(paths.appJS))
    .pipe(plugins.streamify(plugins.uglify().on('error', errorHandler)))
    .pipe(plugins.rename('bundle.js'))
    .pipe(gulp.dest(paths.distDev))
});

/**** Views task *****/
gulp.task('views', function() {
  // Get our index.html
  gulp.src(paths.allViews)
  .pipe(plugins.debug({title: "views:"}))
  // And put it in the dist folder
  .pipe(gulp.dest(paths.distDev));
});

/**** Styles task *****/
gulp.task('styles', function() {
  gulp.src(paths.allStyles)
  .pipe(plugins.debug({title: "styles:"}))
  // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
  .pipe(sass({onError: errorHandler }))
  // Optionally add autoprefixer
  .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
  // These last two should look familiar now :)
  .pipe(gulp.dest(paths.distStyles))
  //.pipe(refresh(lrserver));
});

/***** Images task ******/
gulp.task('images', () =>
    gulp.src(paths.allImages)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.distImages))
);


/**** Watch task ******/
gulp.task('watch', ['lint'], function() {
  // Watch our scripts
  gulp.watch(['app/index.html', 'app/**/*.html', 'app/**/*.js', 'app/**/*.js', 'app/styles/**/*.css'],[
    'lint',
    'browserify',
    'views',
    'styles'
  ]);
});

//gulp.task('default', ['lint', 'browserify', 'views', 'build-vendor-scripts', 'styles', 'images', 'watch']);
gulp.task('default', ['lint', 'browserify', 'views', 'styles', 'images', 'watch']);


//browser-sync start --server --directory --files '**/*'

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}