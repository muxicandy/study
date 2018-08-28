let http = require('http');
let fs = require('fs');
let url = require('url');
let querystring = require('querystring');
let SESSION_KEY = 'SESSION_KEY';
let sessions = {};
http.createServer(function(req,res){
	let urlObj = url.parse(req.url,true);
	let pathname = urlObj.pathname;
	if (pathname == '/') {
		let cookieObj = querystring.parse(req.headers.cookie,'; ');
		let sessionId = cookieObj[SESSION_KEY];
		if (sessionId) {
			let sessionObj = sessions[sessionId];
			if (sessionObj) {
				sessionObj.balance = sessionObj.balance - 10;
				res.setHeader("Content-Type","text/html;charset=utf-8");
				res.end('余额'+sessionObj.balanse);
			} else {
				res.setHeader("Content-Type","text/html;charset=utf-8");
				res.end('可能篡改过了，你的卡不能用了');
			}
			
		} else {
			//生成一个新的会话ID
			let sid = Date.now() + '' + Math.random();
			let sessionObj = {balanse:100};
			//在服务器端开辟内存，存放此ID对应的数据
			sessions[sid] = sessionObj;
			// 把SID也就是会员卡号写给客户端
			res.setHeader("Set-Cookie",SESSION_KEY+"="+sid);
			res.setHeader("Content-Type","text/html;charset=utf-8");
			res.end('余额'+sessionObj.balanse);
		}
	}
}).listen(8080);