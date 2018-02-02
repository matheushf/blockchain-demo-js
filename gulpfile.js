const gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass'),
  csswring = require('csswring'),
  autoprefixer = require('autoprefixer'),
  babel = require('gulp-babel'),
  refresh = require('gulp-refresh'),
  browserSync = require('browser-sync').create();

const distDir = './dist';

const srcStyles = [
  'src/*.scss'
];

const srcJs = [
  'src/*.js'
];

srcHtml = [
  'src/*.html'
]

const src = [...srcStyles, ...srcJs, ...srcHtml];

gulp.task('styles', () => {
  let processors = [
    csswring,
    autoprefixer
  ];

  return gulp.src(srcStyles)
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream());
});

gulp.task('babel', () => {
  gulp.src(srcJs)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest(distDir));
});

gulp.task('webpack', () => {
  return gulp.src(srcJs)
    .pipe(webpack(require('./webpack.config.babel')))
    .pipe(gulp.dest(distDir));
});

gulp.task('html', () => {
  return gulp.src(srcHtml)
    .pipe(gulp.dest(distDir));
});

gulp.task('build', ['styles', 'webpack', 'html']);

gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: './dist'
  });

  gulp.watch(srcStyles, ['styles']);
  gulp.watch(srcJs, ['webpack']);
  gulp.watch(srcHtml, ['html']);
  gulp.watch(src).on('change', browserSync.reload);

});

gulp.task('default', ['serve']);
