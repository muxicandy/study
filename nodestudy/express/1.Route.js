let express = require('express');
let app = express();
app.listen(3000);

let user = require('./routes/user');
let article = require('./routes/article');

// /user/login

app.all('*', function (req, res, next) {
	res.header("Content-Type", "text/html;charset=utf-8");
	next();
});
// app.get('/login',function(req,res){
// 	res.send('登陆');
// });
// app.get('/reg',function(req,res){
// 	res.send('注册');
// });
function bodyParser() {
	return function(req,res,next){
		let str = '';
		req.on('data',function(chunk){
			str += chunk;
		});
		req.on('end',function(){
			req.body = require('querystring').parse(str);
			next();
		});
	}
}
app.use(bodyParser());
app.use('/user',user);
app.use('/article', article);
// /artical/post
// app.get('/post',function(req,res){
// 	res.send('发表');
// });
// app.get('/delete',function(req,res){
// 	res.send('删除');
// });