// 观察者的目的，就是给需要变化的那个元素增加一个观察者，当数据变化后，执行对应的方法
class Watcher{
	constructor(vm, expr, cb){
		this.vm = vm;
		this.expr = expr;
		this.cb = cb;
		// 先存取一下老值
		this.value = this.get(); 
	}
	getVal(vm, expr) {
        expr = expr.split('.'); // [a,b,c,d]
        return expr.reduce((prev,next) => {// vm.$data.a
            return prev[next];//取到的结果作为下一次的prev
        }, vm.$data);//vm.$data这个参数作为prev
    }
	get(){
		Dep.target = this;
		let value = this.getVal(this.vm, this.expr);
		Dep.target = null;
		return value;
	}
	// 对外暴漏的方法
	update(){
		let newValue = this.getVal(this.vm, this.expr);
		let oldValue = this.value;
		if (newValue != oldValue) {
			this.cb(newValue); // 调用watch的callback
		}
	}
}
// 用新值和老值进行比对，如果发生变化，几句调用更新方法
//  vm.$data expr
