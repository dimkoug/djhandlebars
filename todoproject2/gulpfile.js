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

function css(){
  return gulp.src([
        './static/css/*.css'])
     .pipe(concat('site.css'))
     .pipe(cleanCSS({compatibility: 'ie8'}))
     .pipe(rename({extname:'.min.css'}))
     .pipe(gulp.dest('./static/build/css'));
}

function vendor(){
  return gulp.src([
        './static/js/django_ajax.js',
      ])
     .pipe(concat('vendor.js'))
     .pipe(minify())
     // .pipe(rename({extname:'.min.js'}))
     .pipe(gulp.dest('./static/build/js'));
}

function js(){
  return gulp.src([
        './static/js/base.js',
        './static/js/create.js',
        './static/js/form.js',
        './static/js/list.js',
        './static/js/update_delete.js',
      ])
     .pipe(concat('site.js'))
     .pipe(minify())
     // .pipe(rename({extname:'.min.js'}))
     .pipe(gulp.dest('./static/build/js'));
}

function templates(){
  return gulp.src('./static/js/handlebars_templates/source/*.handlebars')
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
}


// gulp.task('django', function() {
//     browserSync.init({
//       server: "mysite",
//       port: 8009
//     });
//   });




exports.css = css;
exports.js = js;
exports.templates = templates;
exports.vendor = vendor;
exports.default = parallel(css, vendor, js, templates);