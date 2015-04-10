var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    csso = require('gulp-csso');



gulp.task('jade', function() {
    gulp.src('res/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('dev/templates'));

    gulp.src('res/jade/*.jade')
        .pipe(jade({
            pretty: false
        }))
        .pipe(gulp.dest('build/templates'));
});

gulp.task('stylus', function() {
    gulp.src('res/stylus/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dev/css'));

    gulp.src('res/stylus/*.styl')
        .pipe(stylus())
        .pipe(csso())
        .pipe(gulp.dest('build/css'));
});
