"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssmin = require("gulp-csso");
var imagemin = require("gulp-imagemin")
var server = require("browser-sync").create();
var jsmin = require("gulp-js-minify");
var del = require("del");
var rename = require("gulp-rename");
var runSequence = require("gulp4-run-sequence");
var fileSystem   = require("fs");

var path = {
  build: {
      html: "build/",
      js: "build/js/",
      css: "build/css/",
      img: "build/img/",
      fonts: "build/fonts/",
      favicon: "build/favicon.ico"
  },
  src: {
      html: "source/*.html",
      js: "source/js/**/*.js",
      style: "source/sass/style.scss",
      img: "source/img/build/**/*.*",
      fonts: "source/fonts/**/*.*"
  },
  watch: {
      html: "source/**/*.html",
      js: "source/js/**/*.js",
      style: "source/sass/**/*.{scss,sass}",
      img: "source/img/**/*.{png,jpg,svg}",
      fonts: "source/fonts/**/*.*",
      favicon: "source/favicon.ico"
  },
  clean: "build"
};

gulp.task("dir", function (done) {
  if(!fileSystem.existsSync(path.clean)) {
    fileSystem.mkdirSync(path.clean);
  }
  done();
});

gulp.task("clean", function (done) {
  del(path.clean);
  done();
});

gulp.task("fonts", function(done) {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts));
  done();
});

gulp.task("css", function (done) {
  gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({cascade: false})
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(path.build.css))
    .pipe(server.stream());
  done();
});

gulp.task("js", function(done) {
  gulp.src(path.src.js)
    .pipe(gulp.dest(path.build.js))
    .pipe(jsmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(path.build.js))
    .pipe(server.stream());
  done();
});

gulp.task("html", function (done) {
  gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html));
  done();
});

gulp.task("favicon", function (done) {
  gulp.src(path.src.favicon)
    .pipe(gulp.dest(path.build.favicon));
  done();
});

gulp.task("img", function(done) {
  gulp.src(path.src.img)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(gulp.dest(path.build.img))
    .pipe(server.stream());
    done();
});

gulp.task("server", function () {
  server.init({
    server: path.build.html,
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch(path.watch.js, gulp.series("js"));
  gulp.watch(path.watch.html, gulp.series("html"));
  gulp.watch(path.watch.fonts, gulp.series("fonts"));
  gulp.watch(path.watch.img, gulp.series("img",server.reload));
  gulp.watch(path.watch.style, gulp.series("css"));
  gulp.watch(path.watch.html).on("change", server.reload);
});

gulp.task("build", function(done) {
  runSequence(
    "dir",
    "img",
    "fonts",
    "css",
    "js",
    "html",
    done
  );
});
