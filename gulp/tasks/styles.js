const gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  // sourceMaps = require("gulp-sourcemaps"),
  plumber = require("gulp-plumber");

gulp.task("styles", function() {
  return (
    gulp
      .src("./app/assets/styles/styles.scss")
      .pipe(plumber())
      // .pipe(sourceMaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([autoprefixer]))
      // .pipe(sourceMaps.write())
      /* .on("error", function() {
      this.emit("end");
    }) */
      .pipe(gulp.dest("./app/temp/styles"))
  );
});
