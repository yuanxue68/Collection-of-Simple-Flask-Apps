var gulp=require("gulp"),
	jshint=require("gulp-jshint"),
	karmar=require("karma").server;


gulp.task("test",function(done){

});

gulp.task("lint",function(){
	return gulp.src("./*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});