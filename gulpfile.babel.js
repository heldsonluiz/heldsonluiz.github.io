import gulp from 'gulp';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';

const paths = {
  styles: {
    src: 'src/css/**/*.css',
    dest: 'dist/css/'
  },
  images: {
    src: 'src/img/**/*',
    dest: 'dist/img/'
  }
};

export function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

var build = gulp.series(images, gulp.parallel(styles));

export default build;