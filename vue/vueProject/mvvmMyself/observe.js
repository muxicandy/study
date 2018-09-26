class Observer{
	constructor(data){
		this.observe(data);
	}
	observe(data){
		// 要对这个data数据将原有属性改为set和get的形式
		if (!data || typeof data !== 'object') {
			return;
		}
		//要将数据一一劫持
		Object.keys(data).forEach(key=> {
			// 劫持
			this.defineReactive(data, key, data[key]);
			this.observe(data[key]); //深度递归劫持
		});
	}
	// 定义响应式
	defineReactive(obj, key, value){
		// 在获取某个值的时候，设置获取，或者操作
		let that = this;
		let dep = new Dep();//每个变化的数据都会对应一个数组，这个数组是存放所有更新的操作
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: true,
			get(){ // 当取值时调用的方法
				Dep.target && dep.addSub(Dep.target);
				return value;
			},
			set(newValue) { // 当给data属性中设置值的时候，更改获取属性的值
				if (newValue != value) {
					// 如果实例改了字段，需要重新劫持
					//这里的this不是实例 ， 我们改数据的时候是给实例vm上进行修改
					that.observe(newValue); //如果是对象，继续劫持
					value = newValue;
					dep.notify();//通知所有人，数据更新了
				}
			}
		})
	}
}

class Dep{
	constructor() {
		this.subs = [];
	}
	addSub(watcher){
		this.subs.push(watcher);
	}
	notify(){
		this.subs.forEach(watcher=>{
			watcher.update();
		});
	}
}