let express = require('express');
let app = express();
let session = require('express-session');

app.use(session({
	resave: true,//每次请求结束都要重新保存，不管有没有修改
	saveUninitialized: true,//保存为修改过的session
	secret: 'yang'//加密的秘要
}));

app.get('/',function(req,res){
	let islogin = req.session.isLogin;
	if(islogin){
		res.send('laopengyou');
	} else {
		req.session.isLogin = 'true';
		res.send('新朋友');
	}
});

app.listen('8080');