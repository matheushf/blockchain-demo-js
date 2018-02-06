const gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  del = require('del'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass'),
  csswring = require('csswring'),
  autoprefixer = require('autoprefixer'),
  babel = require('gulp-babel'),
  refresh = require('gulp-refresh'),
  browserSync = require('browser-sync').create();

const distDir = './dist';
const srcStyles = ['src/assets/styles.scss'];
const srcJs = ['src/*.js'];
const srcHtml = ['src/*.html'];
const srcAssets = ['src/assets/**/**.png', 'src/assets/**/fonts/**.*'];

const src = [...srcStyles, ...srcJs, ...srcHtml, ...srcAssets];

gulp.task('styles', ['clean'], () => {
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

gulp.task('babel', ['clean'], () => {
  gulp.src(srcJs)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest(distDir));
});

gulp.task('webpack', ['clean'], () => {
  return gulp.src(srcJs)
    .pipe(webpack(require('./webpack.config.babel')))
    .pipe(gulp.dest(distDir));
});

gulp.task('html', ['clean'], () => {
  return gulp.src(srcHtml)
    .pipe(gulp.dest(distDir));
});

gulp.task('assets', ['clean'], () => {
  return gulp.src(srcAssets)
    .pipe(gulp.dest(`${distDir}/assets/`));
});

gulp.task('clean', () => {
  return del(['./dist/**']);
});

gulp.task('build', ['clean', 'styles', 'webpack', 'html', 'assets']);

gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: ['./', './dist'],
      routes: {
        './': './node_modules'
      }
    }
  });

  gulp.watch(srcStyles, ['styles']);
  gulp.watch(srcJs, ['webpack']);
  gulp.watch(srcHtml, ['html']);
  gulp.watch(srcAssets, ['assets']);
  gulp.watch(src).on('change', browserSync.reload);

});

gulp.task('default', ['serve']);
