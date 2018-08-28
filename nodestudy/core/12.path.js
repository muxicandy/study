// let path = require('path');
// //拼一个路径出来
// console.log(path.join(__dirname,'./b'));
// //解析一个路径出来
// console.log(path.resolve('/a','/b'));
// //环境变量分隔符，join和resolve
// console.log(path.delimiter);
// 发布订阅
let {inherits} = require('util');
let EventEmitter = require('events');
function Girl() {

}
let girl = new Girl();
//inherits(girl,EventEmitter);
girl.on('失恋',function(){
	console.log('哭');
});
girl.on('失恋',function(){
	console.log('吃');
});
