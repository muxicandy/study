//1、回调地狱，链式写法
//2、解决同步异步的结果，promise.all,如果都成功才算成功，有一个失败就失败了，Promise。race()


let fs = require('fs');
// let {promisify} = require('util');
// let read = promisify(fs.readFile);
// Promise.race([read('1.txt','utf8'),read('2.txt','utf8')]).then(data=>{
// 	console.log(data);
// });
//读取的文件必须存在，写文件的时候不存在会自动创建，
// 里边有内容会自动覆盖掉
// fs.writeFileSync('1.txt',Buffer.from('nenen'));
function copySync(source, target){//带sync是同步，readFileSync+writeFileSync
	let result = fs.readFileSync(source,'utf8');
	fs.writeFileSync(target,JSON.stringify(result));
}
// copySync('1.txt','2.txt');
function copy(source,target,callback){
	fs.readFile(source,function(err,data){
		if(err) return callback(err);
		fs.writeFile(target,data,callback); 
	})
}
copy('1.txt','2.txt',function(err){
	console.log('chenggong');
});