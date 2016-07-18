(function() {

  var gulp = require('gulp');
  var del = require('del');
  var sequence = require('gulp-sequence');
  var pug = require('gulp-pug');
  var markdown = require('gulp-markdown');

  gulp.task('clean', function(cb){
    del('dist').then(function() {
      cb();
    });
  });

  gulp.task('posts', function(){
    gulp.src('src/posts/**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist/blog'));
  });

  gulp.task('pages', function(){
    gulp.src('src/pages/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'));
  });

  gulp.task('default', sequence('clean', 'posts', 'pages'));

}());
