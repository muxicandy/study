let express = require('express');
let app = express();
app.listen(8080);
///user?id=1查一个，/user查所有 路径都是/user
///user/1查一个， /user查所有
app.get('/user',function(req,res){
	res.end('select all');
});
//表示占位符 必须有 但是可以随便写
// /user/1/2=>{id:1,name:2}=>params
app.get('/user/:id/:name',function(req,res){
	res.end('elected one'+ req.params.id+req.params.name);
});
let url = '/user/1/2/a';
let url2 = '/user/:id/:name/a';
//将url2转化成可以匹配url的正则，
let arr = [];
let newReg = url2.replace(/:[^\/]+/g,function(){
	arr.push(arguments[0].slice(1));
	return '([^\/]+)';
});
console.log(newReg);
let reg = new RegExp(newReg);
let newArr = reg.exec(url);
console.log(newArr);
let result = {};
arr.forEach(function(item,index){
	result[item] = newArr[index+1];
});
console.log(result);