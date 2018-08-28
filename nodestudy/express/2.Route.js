let express = require('express');
let app = express();
app.listen(3000);

let user = require('./routes/user');
let article = require('./routes/article');
let bodyParser = require('body-parser');

// /user/login

// app.all('*', function (req, res, next) {
// 	res.header("Content-Type", "text/html;charset=utf-8");
// 	next();
// });
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "text/html;charset=utf-8");
  next();
});
//解析表单格式，把表单内的数据，解析后放在req.body上
app.use(bodyParser.urlencoded({extended:false}));
//解析json格式，把json字符串转化成对象，解析后放在req.body上
app.use(bodyParser.json());
//告诉他页面上所有的render方法的html，都用ejs渲染
app.engine('html',require('ejs').__express);
//更改模版路径
app.set('views','static');//默认叫views
//配置默认后缀名
app.set('view engine','html');
app.use('/user',user);
app.use('/article', article);
// /artical/post
// app.get('/post',function(req,res){
// 	res.send('发表');
// });
// app.get('/delete',function(req,res){
// 	res.send('删除');
// });