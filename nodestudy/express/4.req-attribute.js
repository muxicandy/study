let express = require('express');
let app = express();
app.listen(8080);
//想区分是查询一个还是查询所有
app.get('/user',function(req,res){
	console.log(req.query.id);//express扩展的属性
	console.log(req.url);//获取整个路径包括问号
	console.log(req.path);//express扩展的属性
	console.log(req.headers);//所有的都是小写
	console.log(req.method);//所有的方法都是大写
});