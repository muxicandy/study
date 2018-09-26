// arrow fn 不具备this和grguments
// 自己家不具备this,就找上一级的this

// 如何更改this指向
// 1）call apply bind
// 2) vat that = this
// 3) =>	


// 如何确定this是谁，看谁调用的.	前面是谁this就是谁
let a = b => {
	return a + b;
}
let c = function a(b){
	return function(c){
		return b+c;
	}
}();
let sum = (b)=> (c)=> b+c;//高阶函数，俩箭头以上的包括2，>=2的
console.log(sum(1)(2))
//闭包：函数执行的一瞬间叫做闭包（不销毁的作用域）,当执行后返回的结果必须是引用数据类型，被外界变量接受，此时这个函数不会销毁
//（闭包经常被用作模块化）

[1,2,3].forEach(item=>console.log(item));
//在vue中很多时候不能用箭头函数