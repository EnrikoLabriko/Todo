var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    csso = require('gulp-csso');



gulp.task('default', function() {
    return gulp.src('res/jade/*.jade')
        .pipe(jade())
        .pipe(stylus())
        .pipe(csso())
        .pipe(gulp.dest('dest/'));
});
