import { src, dest, series, parallel, watch } from 'gulp';
import rigger from 'gulp-rigger';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import gulpImagemin, { mozjpeg, optipng } from 'gulp-imagemin';

function compileJS(cb) {
  src('src/js/libs/*.js')
    .pipe(concat('libs.js'))
    .pipe(dest('./build/js/'));

  src('src/js/modules/*.js')
    .pipe(concat('modules.js'))
    .pipe(dest('build/js/'));

  src('src/js/*.js')
    .pipe(dest('./build/js/'));

  cb();
}

function compileCSS(cb) {
  src('src/css/*.css')
    .pipe(concat('style.css'))
    .pipe(dest('./src/css/'))
    .pipe(dest('./build/css/'));

  cb();
}

function compileHTML(cb) {
  src('src/*.html')
    .pipe(rigger())
    .pipe(dest('build/'));
  cb();
}

function watchChanges(cb) {
  browserSync.init({
    server: "./build",
  });

  watch(['src/**/*.html', 'src/**/*.js'], series(compileJS, compileHTML)).on('change', browserSync.reload);
  cb();
}

function compressImages(cb) {
  src('src/images/*', { encoding: false })
    .pipe(gulpImagemin([
      mozjpeg({ quality: 75, progressive: true }),
      optipng({ optimizationLevel: 5 }),
    ]))
    .pipe(dest('build/images/'));
  cb();
}

export default function(cb) {
  // Return the series call
  return series(parallel(compileJS, compileCSS), compileHTML, watchChanges)(cb);
}

export {
  compressImages,
  watchChanges,
  compileCSS,
  compileJS,
  compileHTML,
};
