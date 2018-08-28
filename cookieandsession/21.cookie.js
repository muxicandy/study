let http = require('http');
let fs = require('fs');
let url = require('url');
let querystring = require('querystring');
http.createServer(function(req,res){
	let urlObj = url.parse(req.url,true);
	let pathname = urlObj.pathname;
	if (pathname == '/buy') {
		let ts = new Date(Date.now() + 20 * 1000).toGMTString();
		res.setHeader("Set-Cookie","goodsname"+Math.random()+"=phone"+Math.random()+"; Expires=" + ts);
		res.end('buy');
	} else if (pathname == '/cart') {
		let cookie = req.headers.cookie;
		let cookieObj = querystring.parse(cookie,'; ');
		res.end(JSON.stringify(cookieObj));
	}
}).listen(8080);