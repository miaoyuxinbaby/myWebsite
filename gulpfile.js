var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');
var rename = require('gulp-rename');

gulp.task('fileinclude', function() {
    gulp.src(['./src/gulp-html/*.html'])
        .pipe(fileinclude({
          prefix: '@@',     //前缀
          basepath: '@file'
        }))
    .pipe(gulp.dest('./src/html')); // 输出路径

    // gulp.src(['./src/html/index-gulp.html'])
    //     .pipe(fileinclude({
    //       prefix: '@@',     //前缀
    //       basepath: '@file'
    //     }))
    //     .pipe(rename('index.html'))
    // .pipe(gulp.dest('./src/html')); // 输出路径

    // gulp.src(['./src/html/resume-gulp.html'])
    //     .pipe(fileinclude({
    //       prefix: '@@',     
    //       basepath: '@file'
    //     }))
    //     .pipe(rename('resume.html'))
    // .pipe(gulp.dest('./src/html'));

    // gulp.src(['./src/html/myComponents-gulp.html'])
    //     .pipe(fileinclude({
    //       prefix: '@@',     
    //       basepath: '@file'
    //     }))
    //     .pipe(rename('myComponents.html'))
    // .pipe(gulp.dest('./src/html'));  
});

var watcher = gulp.watch('./src/gulp-html/*.html', ['fileinclude']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

// var watcher = gulp.watch('./index-gulp.html', ['fileinclude']);
// watcher.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });

// var watcher = gulp.watch('./src/html/resume-gulp.html', ['fileinclude']);
// watcher.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });

// var watcher = gulp.watch('./src/html/myComponents-gulp.html', ['fileinclude']);
// watcher.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });