let express = require('express');
let app = express();
app.listen(8080);
let fs = require('fs');
app.use(express.static('dist'));
// function static(p){//dist目录下的是一个静态文件
// 	return function(req,res,next){
// 		let path = require('path').join(p,req.path);
// 		fs.stat(path,function(err,stats){
// 			if(err){
// 				return next();
// 			}
// 			if(stats.isFile()) {
// 				fs.createReadStream(path).pipe(res);
// 			}
// 		});
// 	}
// }

// app.use(static('dist'));//静态服务中间件

// app.get('/index.html',function(req,res){
// 	res.sendFile('./dist/index.html',{root:__dirname});
// });
// app.get('/index.html',function(req,res){
// 	res.sendFile('./dist/index.css',{root:__dirname});
// });