let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();

app.use(cookieParser());

app.get('/',function(req,res){
	//req.cookies指的是用户提交过来的对象
	let isVisited = req.cookies.isVisisted;
	if (isVisited) {
		res.send('欢迎老朋友');
	} else {
		//res.cookie用于向客户端写入cookie
		res.cookie('isVisisted','1',{maxAge:200000});
		res.send('欢迎新朋友');
	}
}).listen(8080);