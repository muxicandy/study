# vue的理解笔记

## Vue.js是一套构建用户界面的渐进式框架

> Vue的核心功能是一个视图模版引擎，在声明式渲染（视图模版引擎）的基础上，我们可以通过：添加组件系统、客户端路由、大规模状态管理来构建一个完整的框架。可以在核心功能的基础上，选用其他的部件，不一定要全部整合到一起，所谓的渐进式，就是Vue的使用方式。

## Vue的双向绑定原理及实现

> vue的双向绑定是由数据劫持结合发布者-订阅者模式实现的，数据劫持是通过Object.defineProperty()来劫持对象属性的getter和setter方法，在数据变动时做你想做的事情

```
let book = {};
let name = '';
Object.defineProperty(book, 'name', {
	set: function(value){
		name = value;
		console.log(name+'被修改了');
	},
	get: function(){
		console.log('输出name');
		return '<' + name + '>'
	}
});
book.name = '哈利波特';
console.log(book.name);
```

## 订阅者和发布者实现消息队列的模式，就是订阅者模式

> 如： 所谓的订阅者，就像我们在日常生活中，订阅报纸一样。我们订阅报纸的时候，通常都得需要在报社或者一些中介机构进行注册。当有新版的报纸发刊的时候，邮递员就需要向订阅该报纸的人，依次发放报纸。

> 如果用代码实现该模式，需要进行两个步骤：

1、初始化发布者、订阅者。
2、订阅者需要注册到发布者，发布者发布消息时，依次向订阅者发布消息。

## 思路分析

> 视图变化更新数据，数据变化更新视图

1、视图变化更新data，可以通过事件监听实现，比如input标签监听input事件
2、data变化更新视图，通过Object.definePrototype()对属性设置一个set函数，当数据发生变化时就会触发这个函数，所以只需要将一些方法放到set函数中就可以实现data变化更新视图了

## 实现过程

### 三步实现双向绑定

1、实现一个监听器Observer，用来劫持和监听所有属性，如果有变动，通知订阅者
2、实现一个订阅者Watcher，用来接收属性的变化通知并执行相应的函数，来更新视图
3、实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并初始化模板数据和初始化相应的订阅器。

#### 实现一个监听者Observer

- 数据监听器的核心方法就是Oobject.definePrototype(),通过遍历循环对所有属性进行监听，并对其进行Object.defineProperty( )处理

```

function defineReactive(data,key,val) {
	observe(val);//递归调用
	Object.definePrototype(data,key,{
		get: function(){
			return val;
		},
		set: function(newVal){
			val = newVal;
			console.log('属性'+key+'已经被监听到值为'+newVal.toString());
		}
	});
}
function observer(data){
	if (!data || typeof data !== 'object') {
		return;
	}
	Object.keys(data).forEach(function(key){
		defineReactive(data,key,data[key]);
	});
}
```

> 我们需要一个可以容纳消息订阅者的消息订阅器Dep，订阅器主要收集消息订阅者，然后在属性变化时执行相应订阅者的更新函数，那么消息订阅器Dep需要有一个容器，用来存放消息订阅者．我们将上面的监听器Observer稍微修改一下：

```
function defineReactive(data,key,val) {
	observe(val);//递归调用
	let dep = new Dep();
	Object.definePrototype(data,key,{
		get: function(){
			if (是否需要添加订阅者) {
				sub.addSub(wather);
			}
			return val;
		},
		set: function(newVal){
			val = newVal;
			console.log('属性'+key+'已经被监听到值为'+newVal.toString());
			dep.notify();//通知订阅者执行相应的函数
		}
	});
}
function observer(data){
	if (!data || typeof data !== 'object') {
		return;
	}
	Object.keys(data).forEach(function(key){
		defineReactive(data,key,data[key]);
	});
}
function Dep() {
	this.subs = [];
}
Dep.prototype = {
	addSub: function(sub){
		this.subs.push(sub);//添加订阅
	},
	notify: function(){
		this.subs.forEach(function(sub){
			sub.update();//通知没个订阅者检查更新
		});
	}
};
```
> 将订阅器Dep添加进一个订阅者设计在get里，为了让Wather在初始化时触发，因此需要判断是否需要添加订阅者，在set方法中，如果函数变化，就会通知所有的订阅者，并执行相应的函数

#### 实现一个订阅者Watcher

> 我们已经知道监听器Observer是在get函数中执行了添加订阅者的操作的，所以我们只需要在订阅者Watcher在初始化时触发相对应的get函数来执行添加订阅者的操作即可．那么怎么触发对应的get函数呢？我们只需要获取对应的属性值，就可以通过Object.defineProperty( )触发对应的get了．

> 我们只需要在订阅者初始化时才执行添加订阅者，所以我们需要一个判断，在Dep.target上缓存一下订阅者，添加成功后去除就行了

```
	function Watcher() {
		this.vm = vm;//指向SelfVue的作用域
		this.exp = exp; //绑定属性的key值
		this.cb = cb;    //闭包
		this.value = this.get();
	}

	Watcher.prototype = {
		update: function(){
			this.run;
		},
		run: function(){
			let value = this.vm.data[this.exp];
			let oldVal = this.value;
			if (value!== oldVal) {
				this.value = value;
				this.cb.call(this.vm,value,oldVal);
			}
		},
		get: function(){
			Dep.target = this;                   // 缓存自己
	        var value = this.vm.data[this.exp];  // 强制执行监听器里的get函数
	        Dep.target = null; 
	        return value;                  // 释放自己
		}
	}
```
> 这个时候我们需要对监听器Observer中的defineReactive()做稍微的调整：
```
function defineReactive(data,key,val) {
    observe(val);
    var dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if(Dep.target) {   //判断是否需要添加订阅者
                 dep.addSub(Dep.target);
            }
            return val;
        },
        set: function(newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”');
            dep.notify(); // 如果数据变化，通知所有订阅者
        }
    });
}
```
