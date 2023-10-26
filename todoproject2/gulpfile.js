const { series, parallel } = require('gulp');
const gulp = require("gulp");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var browserSync = require('browser-sync').create();
var declare = require('gulp-declare');
var concat = require('gulp-concat');


gulp.task('css',()=> {
  gulp.src([
    './static/css/*.css'])
 .pipe(concat('site.css'))
 .pipe(cleanCSS({compatibility: 'ie8'}))
 .pipe(rename({extname:'.min.css'}))
 .pipe(gulp.dest('./static/build/css'));
})


gulp.task('js',()=> {
  gulp.src([
    './static/js/django_ajax.js',
    './static/js/base.js',
    './static/js/create.js',
    './static/js/form.js',
    './static/js/list.js',
    './static/js/update_delete.js',
  ])
 .pipe(concat('site.js'))
 .pipe(minify())
 .pipe(gulp.dest('./static/build/js'));
});


gulp.task('templates',()=> {
    gulp.src('./static/js/handlebars_templates/source/*.handlebars')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
          namespace: 'app.templates',
          noRedeclare: true, // Avoid duplicate declarations
        }))
        .pipe(concat('templates.js'))
        .pipe(minify())
        // .pipe(rename({extname:'.min.js'}))
        .pipe(gulp.dest('./static/build/js'));
});





// Define a task to serve your Django project with proxy
gulp.task('serve', () => {
  browserSync.init({
    proxy: '127.0.0.1:8009', // Django development server address
    port: 3000, // Port for BrowserSync
  });
  browserSync.watch("./static/**/*.css", gulp.parallel('css'));
  browserSync.watch("./static/js/handlebars_templates/source/*.handlebars", gulp.parallel('templates'));
  browserSync.watch("./static/js/*.js", gulp.parallel('js'));


});

// Watch for changes in static files and trigger the reload task
gulp.task('watch', () => {
  // Add the paths to your static files
  const staticFiles = [
    './static/**/*.*',
  ];
  gulp.watch(staticFiles).on('change', browserSync.reload);
});

// Set up the default Gulp task

gulp.task('default', gulp.parallel('css', 'js', 'templates','watch','serve'));
