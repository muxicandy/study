// resolve代表的是转向成功态
// rejiect代表的是转向失败态
// resolve和reject都是函数
// promise的实例就有一个then方法，
// then方法中有两个参数，
let p = new Promise((resolve,reject)=>{
	console.log(1);
	setTimeout(function(){
		let a = '蘑菇';
		reject(a);
	},2000);
});
p.then((data)=>{
	console.log(data);
},(err)=>{
	console.log('err');
});
console.log(2);