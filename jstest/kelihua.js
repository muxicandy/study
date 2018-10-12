//写一个func函数，调用func(-, b, c)(a)，按照顺序输出a,b,c

let func = (...args)=>{
	let str = args.join('');
	let index = str.indexOf('-');
	if (index > 0) { // 说明有'-'这个
		//a传到这个函数里
		return function(a){
			//如果有-,将这个字符用a位置的字符替换掉
			args.splice(index, 1, a);
			//将args用,活着其他字符连接起来
			return args.join(',');
		}
	}
}

// console.log(func(4, '-', 5)('哈哈哈'));//输出4,哈哈哈,5

let sum = function(a){
	return function(b){
		return a + b;
	}
}
// console.log(sum(2)(3));//输出5

// 调用func(-, b, c)(a)()，按照顺序输出a,b,c
let func2 = (function(){
	let args = [];
	let index = -1;
	return function(){
		args = args.concat(Array.prototype.slice.call(arguments));
		return function(a){
			let flag = args.includes('-');
			return function(){		
				if (flag) {
					index = args.indexOf('-');
					args.splice(index,1,a);
					return args;
				} else {
					return '没有要替换的内容';
				}
			};
		};
	}
})();

// console.log(func2(2, '-', 1)(3)());//输出2，3，1

// 实现add(1)(2)(3)(4)();
let sum1 = (function(){
	let result = 0;
	return function(){
		for(var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
		return result;
	}
})();
let add = function(fn) {
	var args = [];
	return function(){
		if(arguments.length){
			[].push.apply(args, arguments);
			//arguments.callee指向arguments正在执行的函数
			return arguments.callee;
		} else {
			return fn.apply(null, args);
		}
	}
};
let result = add(sum1);
// console.log(result(1)(2)(3)(10)());//16

// 实现add(1,2)(2,3)(3,1)();
let addSum = function (){
	let sum = 0;
	let args = [].slice.call(arguments);
	sum += args.reduce((prev,next)=>prev+next);
	return function(){
		if(arguments.length === 0){
			return sum;
		} else {
			let newArgs = [].slice.call(arguments);
			sum += newArgs.reduce((prev,next)=>prev+next);
			return arguments.callee;
		}
	}
}
// console.log(addSum(1,2)(2,3)(3,1)());//12

//实现add(1,2)(2,3)(3,1).toString();
let addSum1 = function (){
	let sum = 0;
	let args = [].slice.call(arguments);
	sum += args.reduce((prev,next)=>prev+next);
	let add = function(){
		let newArgs = [].slice.call(arguments);
		sum += newArgs.reduce((prev,next)=>prev+next);
		return arguments.callee;
	}
	add.toString = function (){
		return sum;
	}
	return add;
}
// console.log(addSum1(1,2)(2,3)(3,1).toString());

var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        return function(){
            return that.name;
　　　　　};
　　　}
};


// console.log(object.getNameFunc()());
// object.getNameFunc()返回一个匿名函数，指向window


let a = {name:'yang'}
let b = a ;
console.log(a===b); // true
b.name = 'yangyang'
console.log(a.name); //yangyang

//对象深拷贝
let aa = {name:'yang'}
let bb = Object.assign({}, a);
console.log(aa===bb);// false
bb.name = 'yangyang';
console.log(aa.name); //yang

let cc = {name:{firstName:'li',lastName:'dayang'}};
let dd = Object.assign({}, cc);
console.log(cc===dd);// false
dd.name.firstName = 'han';
console.log(cc.name.firstName);//han


//使用JSON.parse（）与JSON.stringify（）对对象进行拷贝

let cloneObj = function (obj) {
    return JSON.parse(JSON.stringify(obj));
}
let ee = {
	a:function(){
		console.log('hello world')
	},
	b:{c:1},
	c:[1,2,3],
	d:"wanger",
	e:new Date(),
	f:null,
	g:undefined
};
let ff = cloneObj(ee);
console.log(ff);

function Person (name) {
    this.name = name
}
let yang = new Person('lidayang');
let yangda = cloneObj(yang);
console.log(yang.constructor === Person); // true
console.log(yangda.constructor === Object); // true

let obj = {
	name: 'yang',
	array: [1,2,3],
	person: {
		name: 'zhuzhu',
		age: 18,
		like: ['唱歌', '跳舞', '旅游'],
		fn1: function(){
			return 2;
		},
		c: null,
		d: undefined
	},
	fn: function(){
		return 1;
	},
	array: [1,{
		e: '1',
		f: '2'
	},3],
	a: null,
	b: undefined
}
// console.log(obj);

//目前没有发现bug的对象深拷贝方法
let depCopy = function(obj){
	if (obj === null) return null;
	if (typeof obj !== 'object') return obj;
	if (obj.constructor === Date) return new Date(obj);
	if (obj.constructor === RegExp) return new RegExp(obj);
	let newObj = new obj.constructor(); //保持继承链
	for (let key in obj) {
        if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
            let val = obj[key];
            newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
        }
    }  
	return newObj;
}
let newobj = depCopy(obj);
console.log(newobj);