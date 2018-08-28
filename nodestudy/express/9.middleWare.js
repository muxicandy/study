function app(){}
//每次调用use方法都会将方法存入数组中，默认调用数组的第一项，将next方法传递给数组中的函数
//如果调用此函数，会继续执行数组中的下一项
app.middleWare = [];
app.use = function(cb){
	this.middleWare.push(cb);
};
app.use(function(req,res,next){
	console.log(1);
	next();
});
app.use(function(req,res,next){
	console.log(2);
	next();
});
app.use(function(req,res,next){
	console.log(3);
	next();
});
let index = 0;
function next(){
	app.middleWare[index++](null,null,next);
}
next();