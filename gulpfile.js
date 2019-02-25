const gulp = require('gulp')
const {path, webpackConfig,serverConfig}=require('./config')
const sass=require('gulp-sass')
const webpack = require('webpack-stream')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch') // 监听文件

// 迁移HTML文件
gulp.task('copy-html',()=>{
    let { src,dist } = path;
    console.log(src);
    console.log(dist);
    return gulp.src(src+'/*.html').pipe(gulp.dest(dist))
})

// 迁移Static文件
gulp.task('copy-static', () => {
    let { static, dist } = path
    return gulp.src(static + '/**/*')     //所有文件夹下的所有文件
            .pipe(gulp.dest(dist + '/static'))
})

// 处理sass文件
gulp.task('compile-sass', () => {
    let { src, dist } = path
    return gulp.src(src + '/stylesheets/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest(dist + '/stylesheets'))
})

// 处理JS文件
gulp.task('pack-js', () => {
    let { src, dist } = path
    return gulp.src(src + '/javascripts/**/*.js')   //找到所以的js文件
            .pipe(webpack(webpackConfig))      //webpack做处理
            .pipe(gulp.dest(dist + '/javascripts')) //输出到dist文件里
})

// 开启开发服务器
gulp.task('webserver', () => {
    let { dist } = path
    return gulp.src(dist)   //这里是把服务器放到了dist文件夹下，所以会自动找index.html
            .pipe(webserver(serverConfig))
})

// 监听文件变化
gulp.task('watch', () => {
    let { dist, src } = path
    gulp.watch(src + '/*.html', ['copy-html']);
    gulp.watch(src + '/stylesheets/**/*.scss', ['compile-sass']);
    gulp.watch(src + '/javascripts/**/*', ['pack-js']);
    // 监听static中静态资源的变化
    watch(src + '/static/**/*', (v) => {
        if ( v.event === 'unlink' ) { // 如果是删除文件
            // 将dist/static中的对应文件也删掉
            let _path = Path.resolve(dist + '/static/', v.path.split('\\static\\')[1])
            del(_path) // 删除
        } else {
            gulp.start(['copy-static']) // 执行复制静态文件的任务
        }
    })
})

gulp.task('default',['copy-html','copy-static','compile-sass','pack-js','webserver','watch'],()=>{
    console.log("success")
})