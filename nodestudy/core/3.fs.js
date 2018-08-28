//filesystem文件系统 文件的读写 
let fs = require('fs');
//既有同步，又有异步
//同步的读取
//1、读取文件，文件必须存在,不能通过/读取内容，/表示的是根目录
//2、读取的默认类型是buffer
// let result = fs.readFileSync('./1.core.js','utf8');
// console.log(result);
//第一次的输出是下一次的输入
// let content1 = fs.readFileSync('./1.txt');
// let content2 = fs.readFileSync(content1,'utf8');
// console.log(content2);

// 异步的方案会导致回调地狱
// fs.readFile('./1.txt','utf8',function(err,data){
// 	if(err) return console.log(err);
// 	console.log(data);
// 	fs.readFile(data,'utf8',function(err,data){
// 		console.log(data);
// 	});
// });
//promise resolve成功，reject失败，实例上有个then方法，方法中有两个参数，success,error
let util = require('util');
// function read(url) {
// 	return new Promise((resolve,reject)=>{
// 		fs.readFile(url, 'utf8',function(err,data){
// 			if(err) reject(err);
// 			resolve(data);
// 		});
// 	});
// }
// let read = util.promisify(fs.readFile);
// read('./1.txt','utf8').then(function(data){
// 	return read(data,'utf8');
// }).then(function(data){
// 	console.log(data);//如果返回的不是promise会把结果继续向下传
// }).catch(()=>{
// 	//处理错误欧，如果写了错误callback走自己的，没写统一走catch
// });

async function result(){
	let content1 = await read('./1.txt','utf8');
	let content2 = await read(content1,'utf8');
	let str = content2 + 'yang';
	console.log(str);
}
result();