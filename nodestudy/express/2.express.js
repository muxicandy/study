let express = require('express');
//引用express模块，express是一个函数
//express函数执行后，返回的是一个叫http的监听函数,就是http.createserver中的函数
let app = express();
//在此函数上扩展了一个listen可以监听的端口
// app.listen就是基于以前封装的
app.listen1= function(...args){
	require('http').createServer(app).listen(...args);
}
app.listen1(8080,function(req,){
	console.log(`start8080`);
});