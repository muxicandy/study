let express = require('express');
let app = express();
app.listen(3000);

//不能直接返回对象。res.json()//返回json
//返回html页面，res.sendFile()//返回文件
//	res.statusCode res.end=> res.sendStatus();
//	res.send() res.header()=> res.sen();
//	路由是严格匹配，use匹配开头
app.get('/json',function(req,res){
	res.json({name:'阳',age:9});
});
app.get('/',function(req,res){
	//不能通过../获取文件的上一级../查找（root是不支持的，想读取到确切的文件，用path模块进行拼接即可）
	//res.sendFile(__dirname+'/index.html');
	res.sendFile('./index.html',{root:__dirname});
	//res.sendFile(require('path').join(__dirname,'..','index.html'));
});
app.get('/status',function(req,res){
	res.sendStatus(400);
});
app.use(function(req,res,next){
	res.mysend = function(data){
		if(typeof data === 'object'){
			res.setHeader('Content-Type','application/json;cahrset=utf8');
			res.send(JSON.stringify(data));
		}
		if(typeof data === 'string'){
			res.setHeader('Content-Type','text/plain;cahrset=utf8');
			res.send(data);
		}
		if(typeof data === 'number'){
			res.statusCode = data;
			res.end(require('_http_server').STATUS_CODES[data]);
		}
	}
	next();
});
app.get('/send',function(req,res){
	//res.send('中文');
	res.mysend({name:'阳',age:9});
});