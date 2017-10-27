var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// misc
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var hashsum = require("gulp-hashsum");


gulp.task('build', shell.task(['bundle exec jekyll build --config _config_dev.yml']));



gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    gulp.watch(['_site/**/*.*', '!_site/**/index.html', '!_site/**/*.scss', '!_site/**/*.css']).on('change', browserSync.reload);
});



gulp.task('sass', function () {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./_site/all_static/css'))
        .pipe(browserSync.stream())
});

gulp.task('sassVersion', function () {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./all_static/css'))
        .pipe(hashsum({filename: './_data/cache_bust_css.yml', hash: 'md5'}))
        .pipe(browserSync.stream())
});



gulp.task('watch', function () {

    gulp.watch('scss/**/*', ['sass']);

    browserSync({
        proxy: "http://127.0.0.1:4000/",   // Set this to whatever you want and then point it to /_site (in mamp or your favorite method)
        files: ["_site/*.html"]

    });

});


//gulp.task('default', 'build');

gulp.task('default', ['sass', 'watch']);

gulp.task('build', ['sassVersion']);
