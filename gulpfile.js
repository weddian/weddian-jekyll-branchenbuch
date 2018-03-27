var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'assets/css/*.scss',
    cssDest = '_includes/css/';

gulp.task('default', function(){
    gulp.src(sassFiles)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});