let fs = require('fs');
// //可写流 默认要占用16384 = 16k
// let ws = fs.createWriteStream('1.txt',{hightWaterMark:1});
// //可写流有两个方法 write 恩典res.write() res.end();
// ws.write('1'+' ');//可流写数据必须是字符串类型或者是buffer类型
// ws.write('1'+' ');
// ws.end('吃饱了');
// ws.on('drain',finction(){
// 	console.log('吃完了');
// });
//在end后边不能在write了，write after end调用end后不能在用write
// console.log(ws);
function pipe(source,target){
	let rs = fs.createReadStream(source,{hightWaterMark:4});
	let ws = fs.createWriteStream(target,{hightWaterMark:1});
	// rs.on('data',function(chunk){
	// 	if(ws.write(chunk) === false){
	// 		rs.pause();
	// 	}
	// });
	// ws.on('drain',function(){
	// 	rs.resume();
	// });
	// rs.on('end',function(){//当读取完毕，强制将内存中未写完的内容写入到文件中
	// 	ws.end();
	// });
	rs.pipe(ws);//可读流.pipe(可写流)，会自动调用write方法
}
pipe('1.txt','2.txt');