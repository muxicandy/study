let express = require('express');
let app = express();
let whiteList = ['http://localhost:3000'];
app.use(function(req,res,next) {
	let origin = req.headers.origin;
	if (whiteList.includes(origin)) {
		//设置允许哪个源可以访问
		res.setHeader('Access-Control-Allow-Origin', origin);
		//设置允许哪个头可以访问我
		res.setHeader('Access-Control-Allow-Headers', 'name');
		//设置允许可以访问的方法
		res.setHeader('Access-Control-Allow-Methods', 'PUT');
		//设置预解释的时间,间隔多少时间预解释一次
		//返回结果可以用于缓存的最长时间，单位是秒。在Firefox中，上限是24小时 （即86400秒），而在Chromium 中则是10分钟（即600秒）。Chromium 同时规定了一个默认值 5 秒。
		//如果值为 -1，则表示禁用缓存，每一次请求都需要提供预检请求，即用OPTIONS请求进行检测（即preflight请求-options）。
		//注：需要注意的是Access-Control-Max-Age的设置针对完全一样的url，如果url加上路径参数，其中一个url的Access-Control-Max-Age设置对另一个url没有效果
		res.setHeader('Access-Control-Max-Age', 6);
		//设置允许cookie
		res.setHeader('Access-Control-Allow-Credentials', true);
		//允许返回的头
		res.setHeader('Access-Control-Expose-Headers', 'name');
		if (req.method === 'OPTIONS') {
			res.end(); // OPTIONS请求不做任何处理
		}
	}
	next();
});
//对应put请求的时候
app.put('/getData', function (req, res) {
	res.setHeader('name', 'yangyang');
	res.end('返回的数据');
});
app.get('/getData', function (req, res) {
	console.log(req.headers);
	res.end('返回的数据');
});
app.use(express.static(__dirname));
app.listen(4000);