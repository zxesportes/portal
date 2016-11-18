var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');

var modules = 'node_modules/';
var path = {
    scripts: 'web/scripts/**/*',
    styles: 'web/scss/**/*',
    images: 'web/images/**/*'
};

var dist = {
    scripts: 'web/static/js',
    styles: 'web/static/css',
    images: 'web/static/img'
};

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

gulp.task('scripts', function() {
    return gulp.src(path.scripts)
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist.scripts));
});

gulp.task('sass', function() {
    return gulp.src(path.styles)
        .pipe(sourcemaps.init())
            .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(dist.styles));
});

gulp.task('watch', function() {
    gulp.watch(path.scripts, ['scripts']);
    gulp.watch(path.styles, ['sass']);
});

gulp.task('server', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('default', ['sass', 'scripts']);
