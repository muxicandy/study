class EventEmitter {
	constructor(){
		this._events = {};
	}
	on(eventName,callback){
		if(!this._events[eventName]){
			this._events[eventName] = [callback];
		} else {
			this._events[eventName].push(callback);
		}
	}
	emit(eventName){
		if (this._events[eventName]) {
			this._events[eventName].forEach(cb=>cb());
		}
	}
	removeListener(eventName,callback){
		if (this._events[eventName]) {
			this._events[eventName] = this._events[eventName].filter(cb=>cb!=callback);
		}
	}
	once(eventName,callback){
		let fn = ()=>{
			callback();
			this.removeListener(eventName,fn);
		}
		this.on(eventName,fn);
	}
}
// let e = new EventEmitter();
// let cry = ()=>{console.log('cry');}
// e.once('失恋',cry);
// // e.removeListener('失恋',cry);
// e.emit('失恋');

//流，可读流，可写流
//流：边读边写。不是疯狂的读
let fs = require('fs');
//highWaterMark每次能读取多少 默认64k我们默认不需要更改
////默认读取buffer
let rs = fs.createReadStream('1.txt',{highWaterMark:1});
//需要监听事件，数据到来的事件rs.emit('data',数据);
//默认叫非流动模式监听了data事件后就变成了流动模式
let arr = [];
rs.on('data',function(chunk){
	arr.push(chunk);
	rs.pause();//暂停 暂停是on('data')的触发
	setTimeout(function(){
		rs.resume();//恢复data事件的触发
	},1000);
});
//默认data事件是不停的触发，直到文件中的数据全部读出来
rs.on('end',function(){
	console.log(Buffer.concat(arr).toString());
});
//流的方法都是异步的
//文件不存在 错误
//on('data') on('err')on('end')resume() pause()
rs.on('err',function(){

});