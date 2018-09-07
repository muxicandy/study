let http = require('http');
let fs = require('fs');
let url = require('url');

// 获取轮播图接口/sliders	

let sliders = require('./sliders');
function read(cb) {
	fs.readFile('./book.json', 'utf8', function(err, data){
		if (err || data.length == 0) {
			cb([]);//如果有错误或者文件没长度 就是空数组
		} else {
			cb(JSON.parse(data));//将读出来的内容转化成对象
		}
	});
}
function write(data, cb){
	fs.writeFile('./book.json',JSON.stringify(data),cb);
}
//let pageSize = 5;//默认每页显示五个
http.createServer((req,res)=>{
	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") return res.end('200');/*让options请求快速返回*/

	let {pathname, query} = url.parse(req.url,true);//加true,把query转化成方法
	if(pathname=== '/page') {
		let offset = parseInt(query.offset) || 0;
		let hasMore = true;
		let pageSize = parseInt(query.pageSize) || 5;
		read(function(books){
			let result = books.reverse().slice(offset, offset + pageSize);
			if (books.length <= offset + pageSize){
				hasMore = false;
			}
			res.setHeader('Content-Type','application/json;chartset=utf8');
			res.end(JSON.stringify({
				hasMore,
				books: result
			}));
		});
		return;
	}
	if(pathname === '/sliders') {
		return res.end(JSON.stringify(sliders));
	}
	if (pathname === '/hot') {
		read(function (books){//books代表所有读出的图书结果
			let hot = books.reverse().slice(0,6);
			setTimeout(function(){
				res.end(JSON.stringify(hot));
			}, 500);
		});
		return;
	}
	if(pathname === '/book') {//对书的增删改查
		let id = parseInt(query.id); //取出的是字符串
		switch (req.method) { //?id=1
			case 'GET':
				if(id){//查询一个
					read(function(books){
						let book = books.find(item=> item.bookId === id);
						if (!book) book = {};
						res.setHeader('Content-Type','application/json;chartset=utf8');
						res.end(JSON.stringify(book));
					});
				}else{//获取所有图书
					read(function(books){
						res.setHeader('Content-Type','application/json;chartset=utf8');
						res.end(JSON.stringify(books.reverse()));
					});
				}
				break;
			case 'POST':
				let str = '';
				req.on('data', chunk=>{
					str+=chunk;
				});
				req.on('end',()=>{
					console.log(str);
					let book = JSON.parse(str);
					read(function(books){
						book.bookId = books.length?books[books.length - 1].bookId + 1:1;
						books.push(book);
						write(books,function(){
							res.end(JSON.stringify(book));
						});
					});
				});
				break;
			case 'PUT':
				if (id) {//获取了当前要修改的id
					let str = '';
					req.on('data', chunk=>{
						str+=chunk;
					});
					req.on('end',()=>{
						let book = JSON.parse(str);//book要改成什么样子
						read(function(books){
							books = books.map(item=>{
								if(item.bookId == id){
									return book;//找到id相同的那一本返回
								}
								return item;//其他书正常返回即可
							});
							write(books,function(){//将数据写会JSON
								res.end(JSON.stringify(book));
							});
						});
					});
				}
				break;
			case 'DELETE':
				read(function(books){
					books = books.filter(item=>item.bookId!==id);
					write(books,function(){
						res.end(JSON.stringify({}));
					});
				});
				break
		}
	}
	//读取一个路由
	fs.stat('.'+pathname,function(err,stats){
		if(err){
			fs.createReadStream('index.html').pipe(res);
		} else {
			if (stats.isDirectory()){
				let p = require('path').join('.'+ pathname,'./index.html');
				fs.createReadStream(p).pipe(res);
			} else {
				fs.createReadStream('.'+ pathname).pipe(res);
			}
		}
	});

}).listen(3000);