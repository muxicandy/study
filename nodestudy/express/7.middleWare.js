//中间件 当我们访问到最终目标之前执行的内容
let express = require('express');
let app = express();
app.listen(8080);
//1、进行权限判断
//2、可以进行对req和res的属性扩充
//3、中间件放到要执行路径的上边
//4、中间件默认情况下都匹配，可以指定匹配什么开头的
app.use('/water',function(req,res,next){
	//不调用next就不继续往下走
	console.log('guolvshitou');
	req.stone="tpp big";
	next();
});
app.use('/water',function(req,res,next){
	//不调用next就不继续往下走
	console.log('guolvshazi');
	req.sand="tpp small";
	next();
});
//同意给get的路径增加的编码设置
app.use(function(req,res,next){
	res.header('Content-Type','text/plain;charset=utf8');
	next();
});
//走get前都会走中间件
app.get('/water',function(req,res){
	console.log(req.stone,res.sand);
	res.end('water');
});
app.get('/food',function(req,res){
	console.log(req.stone,res.sand);
	res.end('food');
});
app.use(function(err,req,res,next){//错误中间件有四个参数
	console.log(err);
});