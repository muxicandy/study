let http = require('http');//引用http模块
let port = 3000;
let fs = require('fs');
let url = require('url');//把一个路径解析成一个对象
let path = require('path');
let mime = require('mime');//实现类型转化
// let mime = {
// 	'.js': 'application/javascript',
// 	'.html':'text/html',
// 	'.css': 'text/css'
// };
http.createServer((req,res)=>{//监听函数，当请求到来时会执行回调函数
	//req代表的是客户端，它是一个可读流
	//res代表的是服务端，它是一个可写流
	//let urlObj = url.parse(req.url);
	let {pathname,query} = url.parse(req.url);
	// /clock
	if(pathname === '/clock'){
		let date = new Date();
		res.end(JSON.stringify({time:date.toLocaleString()}));
		return;
	}

	// 处理静态文件的
	fs.stat('.'+pathname,function(err,stats){
		if (err) {
			res.statusCode = 404;//找不到就404
			res.end(`${pathname} not found`);
		} else if(stats.isFile()){//是文件的情况,index/css,index.js/index/html
			//没有写头?!!!
			//let extname = pathname.match(/\.\w+$/)[0];
			//res.setHeader('Content-type',mime[extname] + ';charset=utf8');
			res.setHeader('Content-type',mime.getType(pathname) + ';charset=utf8');
			fs.createReadStream('.'+pathname).pipe(res);
		} else if(stats.isDirectory()){//如果是文件夹，默认查找index.html
			// console.log('.'+pathname);
			//./也是一个文件夹，获取到当前的路径和我的index.html进行拼接去读取这个文件也有可能不存在
			// console.log(path.join('.'+pathname,'./index.html'));
			res.setHeader('Content-type','text/html;charset=utf-8');
			let p = path.join('.'+pathname,'./index.html');
			fs.createReadStream(p).pipe(res);
		}
	});
}).listen(port,()=>{
	console.log(`服务器已经启动在${port}上`);
});
//端口号尽量使用3000以上端口