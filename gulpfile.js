var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    csso = require('gulp-csso');



gulp.task('jadeg', function() {
    return gulp.src('res/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        //.pipe(stylus())
        //.pipe(csso())
        .pipe(gulp.dest('dev/'));
});
