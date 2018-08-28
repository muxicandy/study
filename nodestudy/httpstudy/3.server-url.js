let http = require('http');//引用http模块
let port = 3000;
let fs = require('fs');
let url = require('url');//把一个路径解析成一个对象
let path = require('path');
http.createServer((req,res)=>{//监听函数，当请求到来时会执行回调函数
	//req代表的是客户端，它是一个可读流
	//res代表的是服务端，它是一个可写流
	//let urlObj = url.parse(req.url);
	let {pathname,query} = url.parse(req.url);
	fs.stat('.'+pathname,function(err,stats){
		console.log(err);
		if (err) {
			res.statusCode = 404;//找不到就404
			res.end(`${pathname} not found`);
		} else if(stats.isFile()){//是文件的情况
			//没有写头
			fs.createReadStream('.'+pathname).pipe(res);
		} else if(stats.isDirectory()){//如果是文件夹，默认查找index.html
			// console.log('.'+pathname);
			//./也是一个文件夹，获取到当前的路径和我的index.html进行拼接去读取这个文件也有可能不存在
			// console.log(path.join('.'+pathname,'./index.html'));
			res.setHeader('Content-type','text/html;charset=utf8');
			let p = path.join('.'+pathname,'./index.html');
			fs.createReadStream(p).pipe(res);
		}
	});
	//路由作用：根据不同路径返回不同的内容
	//如果访问的是/，显示回主页html
	//如果访问的是文件，将文件读取返回
	//如果是文件夹，默认去找index.html文件
	//文件不存在，返回404
	//let urlObj = url.parse('http://username:passworld@localhost:3000/s?a=1&b=2#hash',true);
	//true的作用是将query转换成对象
	// console.log(urlObj);
	// res.setHeader('Content-type','text/html;charset=utf-8');
	// fs.createReadStream('index.html').pipe(res);
	// fs.readFile('index.html',function(err,data){
	// 	res.end(data);
	// });
}).listen(port,()=>{
	console.log(`服务器已经启动在${port}上`);
});
//端口号尽量使用3000以上端口