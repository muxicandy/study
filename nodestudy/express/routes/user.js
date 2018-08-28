let express = require('express');
let router = express.Router();// 创建一个路由池子
let path = require('path');

//Router也是一个函数
router.get('/login',function(req,res){
	res.end('登陆');
});

router.get('/reg',function(req,res){
	// path.resolve是根据运行的文件位置来解析的，所以此时不能用resolve
	res.sendFile(path.join(__dirname,'../views/reg.html'));
});

router.post('/reg',function(req,res){
	//如果有二级的文件夹，就
	res.render('result',{...req.body,arr:[1,2,3,4,5],html:'<h1>wphenshuai</h1>'});
});

router.post('/login',function(req,res){

});

module.exports = router;