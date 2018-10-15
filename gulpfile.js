// Include gulp & gulp plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
// var connect = require('gulp-connect');

//Gulp Connect
// gulp.task('connect', function() {
//     connect.server({
//       root: 'project',
//       livereload: true
//     });
// });

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('project/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('project/css'));
        // .pipe(connect.reload());
});

// Concatenate JS
gulp.task('scripts', function() {
    return gulp.src('project/scripts/src/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('project/scripts'));
        // .pipe(connect.reload());
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('project/scripts/src/*.js', gulp.series('scripts'));
    gulp.watch('project/scss/*.scss', gulp.series('sass'));
});

// Default Task
gulp.task('default', gulp.series(
    gulp.series('scripts'),
    gulp.series('sass'),
    gulp.series('watch')
));