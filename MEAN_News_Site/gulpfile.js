var gulp=require("gulp"),
	jshint=require("gulp-jshint");


gulp.task("lint",function(){
	return gulp.src("./js/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});