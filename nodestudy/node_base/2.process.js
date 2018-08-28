//process进程 设置环境变量
let url='';
if (process.env.NODE_ENV == 'dev') {
	url = "http://localhost:3000";
} else {
	url = 'http://www.zhufengpeixun.cn';
}
// 在命令行里配置NODE_ENV，(mac export/window set)
// 如果代码放到服务器上，那就没有此环境变量，取不到可以走上线环境
//异步的，在当前队列的底部
// process.nextTick(function () {
// 	console.log(this);
// });
// console.log(url);
//第二个队列里边的
// setImmediate(function () {
// 	console.log('this');
// });
//...形参剩余运算符
//...扩展运算符
//（[...[1,2,3],...[4,5,6]]）
console.log([...[1,2,3],...[4,5,6]]);
console.log({...{'ha':'en'},...{'long':'en2'}});
// setTimeout((...args)=>{
// 	//this指向的是timeout自己,箭头函数没有this没有arguments
// 	console.log(args.length);
// },100,‘sha’);