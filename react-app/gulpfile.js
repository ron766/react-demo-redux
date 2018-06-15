var gulp = require('gulp');
var cp = require('child_process');
// var webpack = require('webpack-stream');
// var webpackConfig = require('./webpack.config.js');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var batch = require('gulp-batch');




var browserify                = require('browserify');
var babelify                  = require('babelify');
var source                    = require('vinyl-source-stream');
var watchify                  = require('watchify');
var notify                    = require("gulp-notify");


gulp.task('generate-bundle',()=>{
 var bundler =browserify({
   entries: ['app/app.js'],
   ignoreWatch: ['**/node_modules/**'],
   debug:true,
   cache: {}, // required for watchify
   packageCache: {}, // required for watchify
   fullPaths: true // required to be true only for watchify
 });
bundler.transform('babelify', {presets: ['es2015', 'react']})
       // .transform('uglifyify', { global: true  })
       .bundle()
         .on('error',function(error){
               console.log('Error:',error);
         })
         .pipe(source('./public/js/bundle.js'))
         .pipe(gulp.dest('./'))
})


gulp.task('CacheWatchify', function() {
var bundler = watchify(browserify({
              entries: ['app/app.js'],
              ignoreWatch: ['**/node_modules/**'],
              debug:true,
              cache: {}, // required for watchify
              packageCache: {}, // required for watchify
              fullPaths: true // required to be true only for watchify
            }));
    bundler.transform('babelify', {presets: ['es2015', 'react']})
    var rebundle = function() {
      var start = Date.now();
      console.log('Rebundling...');
      return  bundler.bundle()
                    .on('error',function(error){
                          console.log('Error:',error);
                    })
                    .pipe(source('./public/js/bundle.js'))
                    .pipe(gulp.dest('./'))
                    .pipe(notify('Rebundled in ' + (Date.now() - start) + 'ms'));
    };
    bundler.on('update', rebundle);
return rebundle();

});

gulp.task('gulp-build', ['CacheWatchify'], function() {
 watch('./public/css/style.css', batch(function(events, done) {
   gulp.start('minify-css', done)
 }))
 console.log('running default task ended')
});
