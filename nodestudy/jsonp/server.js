let http = require('http');//引用http模块
let port = 63342;
let fs = require('fs');
let url = require('url');//把一个路径解析成一个对象
let path = require('path');
let mime = require('mime');//实现类型转化
let users = [{
	username: '李阳阳',
	password:'admin',
	id: 1
},
{
	username: '李阳阳2',
	password:'admin2',
	id: 2
}];
http.createServer((req,res)=>{//监听函数，当请求到来时会执行回调函数
	let {pathname,query} = url.parse(req.url);
	// console.log(req.headers);//获取请求头 小写的
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    //试探性的请求头判断下，put请求是有的
	if (req.method === 'OPTIONS') {
		res.end();
	}
	if (pathname ==='/jsonp'){
		console.log('ok');
		// let school = {name:'muxi'};
		// res.end(JSON.stringify(school));
		res.end(`${query.cb(1)}`);
		return;
	}
	// if (pathname==='/user'){//如果是/	就是对用户的增删改查	
	// 	let id = /id/.test(query);
	// 	//在查询参数中取出id,看是否有值，有值就表示操作的某个
	// 	switch (req.method) {
	// 		case 'GET':
	// 			if(!id) {//查询所有
	// 				//防止有乱码
	// 				res.setHeader('Content-Type','application/json;charset=utf8');
	// 				res.end(JSON.stringify(users));
	// 			} 
	// 			break;
	// 		case 'POST'://添加的逻辑
	// 			let str = '';
	// 			req.on('data',function(chunk){
	// 				str+=chunk;//拼接后的结果是字符串
	// 			});
	// 			req.on('end',function(){
	// 				let user = JSON.parse(str);//将字符串转换成对象
	// 				//如果有数据取最后一项的id + 1
	// 				user.id = users.length ? users[users.length - 1].id + 1: 1;
	// 				users.push(user);
	// 				res.end(JSON.stringify(user));
	// 			});
	// 			break;
	// 		case 'DELETE':
	// 			if(id){
	// 				users = users.filter(item=>item.id!=id);
	// 				res.end(JSON.stringify({}));
	// 			}
	// 			break;
	// 		case 'PUT':
	// 			break;
	// 	}	
	// 	return;
	// }
	fs.stat('.'+pathname,function(err,stats){
		if (err) {
			res.statusCode = 404;//找不到就404
			res.end(`${pathname} not found`);
		} else if(stats.isFile()){//是文件的情况,index/css,index.js/index/html
			//没有写头?!!!
			let extname = pathname.match(/\.\w+$/)[0];
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