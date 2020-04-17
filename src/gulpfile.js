const { src, dest, series, parallel, watch } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const concat = require('gulp-concat');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackDevConfig = require("./webpack.dev.js");
const webpackProdConfig = require("./webpack.prod.js");
const del = require("del");

const paths = {
  srcDir: "./themes/sample",
  distDir: "../wp-content/themes/sample"
};

// clean
const clean = () => del([`${paths.distDir}/**`, "!dist"], { force: true });

// html
function html() {
  return src(`${paths.srcDir}/**/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.distDir));
}

// php
function php() {
  return src(`${paths.srcDir}/**/*.php`)
    .pipe(dest(paths.distDir));
}

// sitemap.xml
function xml() {
  return src(`${paths.srcDir}/sitemap.xml`).pipe(dest(paths.distDir));
}

// robts
function robots() {
  return src(`${paths.srcDir}/robots.txt`).pipe(dest(paths.distDir));
}

// img
function img() {
  return src(`${paths.srcDir}/img/**/*.+(png|jpeg|jpg|svg)`)
    .pipe(dest(`${paths.distDir}/img`));
}

// css
function css() {
  return src(`${paths.srcDir}/**/*.css`)
    .pipe(cleanCSS())
    .pipe(concat('style.css'))
    .pipe(dest(paths.distDir));
}

// js
function devjs() {
  return webpackStream(webpackDevConfig, webpack)
    .pipe(dest(`${paths.distDir}`));
}

function prodjs() {
  return webpackStream(webpackProdConfig, webpack)
    .pipe(dest(`${paths.distDir}`));
}

// watch
function wt() {
  watch(`./${paths.srcDir}/**/*.html`, series(html));
  watch(`./${paths.srcDir}/sitemap.xml`, series(xml));
  watch(`./${paths.srcDir}/robots.txt`, series(robots));
  watch(`./${paths.srcDir}/**/*.css`, series(css));
  watch(`./${paths.srcDir}/js/**/*.js`, series(devjs));
}

const devbuild = series(
  clean,
  parallel(
    php
   ,html
   ,css
   ,robots
   ,xml
   ,img
   ,devjs
  ),
);

const prodbuild = series(
  clean,
  parallel(
    php
   ,html
   ,robots
   ,xml
   ,img
   ,prodjs
   ,css
  ),
);

const prod = series(prodbuild);
const dev = series(devbuild, parallel(wt));

exports.default = prod;
exports.dev = dev;
