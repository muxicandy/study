function Parent() {
	this.smoking = '抽烟';
}
Parent.prototype.sleep='睡觉';
function Child(){

}
util.inherits(Child,Parent);
// function create(proto){
// 	let Fn = function() {};
// 	Fn.prototype = proto;
// 	return new Fn();
// }
//es5方法
// Child.prototype = create(Parent.prototype);//只继承公有属性
//Child.prototype.__proto__ = Parent.prototype;//既继承公有属性，也继承私有属性
//Object.setPrototypeOf(Child.prototype,Parent.prototype);//只继承公有属性
let child = new Child();
console.log(child.sleep);
