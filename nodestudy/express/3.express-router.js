let express = require('express');
let app = express();
app.listen(3000);
//app监听函数上扩展了很多方法，包括get, post,delete,
//RESTful风格中的动词
//app/方法名('路径名'，cb)
//从上到下匹配，如果匹配到了，就不会继续向下走了
//路径指的是pathnama,没有问好后边的内容，
//express重点扩展了req和res的属性
app.get('/signin',function(req,res){
	res.setHeader('Content-Type','text/plain;charset=utf8')
	res.end('登陆2');
});
app.post('signin',function(req,res){
	res.end('post登陆');
});
app.get('/signup',function(req,res){
	res.end('注册');
});
//all表示所有的方法*表示所有的路径，一般放在最后
app.all('*',function(req,res){
	res.end('404');
});