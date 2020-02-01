const gulp = require("gulp"),
  browserSync = require("browser-sync").create();

/* gulp 3.9.1 */
/* Gulp verzije preko 4 zahtevaju da se gulp.watch("koji fajl-ovi", gulp.series("koji zadatak")) */

gulp.task("watch", function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch("./app/index.html", function() {
    browserSync.reload();
  });
  gulp.watch("./app/assets/styles/**/*.scss", ["cssInject"]);
});

/* [styles] je dependency task za cssInject */
gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});
