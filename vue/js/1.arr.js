//数组方法：
let arr = [1,2,3,4,5];
arr.b = '100';//数组的私有属性
for(let i = 0;i< arr.length;i++){//编程式
	console.log(arr[i]);
}

//面试：forEach\for\for in\for\for of的区别
//1、forEach不支持return
arr.forEach(function(item,index){//声明式，不关心如何实现
	console.log(item);
});

for(let key in arr) {//key会变成字符串类型，包括数组的私有属性，也可以打印出来
	console.log(key);/*012345b*/
}

let obj = {
	school: 'yang',
	age: 10
};
for(let val of arr) { //支持return，并且值是数组，不能便利对象
	console.log(val);/*012345*/
}
//下边代码说明of不能便利对象，会报错
// for(let val of obj) {//报错：obj is not iterable
// 	console.log(val);
// }

for(let val of Object.keys(obj)) {//Object.keys将对象的key作为新的数组
	console.log(obj[val]);
}

//2）filter 是否操作原数组：不 ； 返回结果：过滤后的新数组； 回调函数的返回结果：如果返回true，表示这一项放到新数组中，如果返回false,bu放进新数组
//删除数组中某一项，可以用filter
let newArr = [1,2,3,4,5].filter((item,index)=>{
	return item < 5 && item > 2; 
});
console.log(newArr);
//3）map 映射 将原油数组映射成一个新的数组,不操作原数组，返回新数组，回调函数的返回什么这一项就是什么
//更新数组中某一下可以用map
let arrMap = [1,2,3].map((item)=>{
	return `<li>${item}</li>`;//``是es6中的摸板字符串，遇到变量用${}取值
});
console.log(arrMap.join(' '));

//4）includes返回的是boolean类型
//
let arr3 = [1,2,3,4,55,555];
console.log(arr3.includes(5));

//5)find返回找到的那一项，不会改变原数组,回调函数中返回true，找到后停止循环
//找不到返回的是undefined
let result = arr3.find(function(item,index){//找到具体的某一项，用find,
	return item.toString().indexOf(5) > -1
});
//6)some找true,找到true就停止，找不到就返回false
//7）every 找false,找到false就停止	,找不到就返回false
console.log(result);
//8)reduce(减少，缩小)收敛，4个参数,返回的是叠加后的结果，原数组不会发生变化，
//回调函数返回的结果
//pre是数组的第一项，next是数组的第二项
//第二次pre是undefined了，next是数组的第三项了
[1,2,3,4,5].reduce(function(pre,next,index,item){
	return pre + next;
});

let sum2 = [{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function(prev,next){
	console.log(prev,next);
	// 0+60
	// 60+90
	// 150+120
	return prev + next.price * next.count;
},0);//默认指定第一次的prev
console.log(sum2);//NAN第一次没问题，返回结果是数字，第二次开始数字是没有price和count的

let arr5 = [[1,2,3],[4,5,6],[7,8,9]].join(',');
let arr6 = [[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev,next){
	return prev.concat(next);
});
console.log(arr5);
console.log(arr6);