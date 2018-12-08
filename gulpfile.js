const gulp = require("gulp");
const connect = require("gulp-connect");
const proxy = require("http-proxy-middleware");
const cssMin = require("gulp-sass-china");

//压缩css 编译sass
gulp.task("cssMin",function(){
	gulp.src("src/sass/**/*")
	//压缩并编译
	.pipe(cssMin({
			//sass编译的样式
			outputStyle:"compact"
	}))
	.pipe(gulp.dest("src/css"))
})
gulp.task("watch",function(){
	//当sass文件夹下面的文件发送变化的时候我就去执行cssMin这个任务
	gulp.watch("src/sass/**/*",["cssMin"])
})


//服务器
gulp.task("server",function(){
	connect.server({
		root:"./src",
		port:8877,
		livereload:true,
		middleware:function(){
			return [
				proxy("/index",{
					target:"https://www.hao24.com",
					changeOrigin:true
				}),
				proxy("/uc",{
					target:"https://www.hao24.com",
					changeOrigin:true
				}),
				proxy("/cart",{
					target:"http://localhost:9000",
					changeOrigin:true
				})
			]
		}
	})
})
//热更新
gulp.task("watch-server",function(){
	gulp.watch("src/**/*",function(){
		gulp.src("src/**/*")
		.pipe(connect.reload())
	})
})


gulp.task("F5",["server","watch-server","watch"])