# 学习笔记

## vue数据驱动(主要操作的是数据)
- 操作dom

## js中数据类型
- 基本 number string boolean null undefine
- object func... []...
- Symbol(es6)

## {} []
### 数组的变异（）中的能改变原数组
- 操作数组的方法 (pop push unshift shift splice reverse sort这些可以改变原数组) indexOf lastIndexof concat slice

## forEach filter map some every reduce (find includes 是es6的)

## 框架和库
- 框架 vue拥有完整的解决方案我们写好人家调用我
- 库 jquery underscore zopto animate.css我们调用它

## 渐进式（渐进增强）
- vue全家桶 vue.js + vue-router + vuex（状态管理） + axios- 通过组合 完成一个完整的框架		

## MVC（backbone）
- model数据
- view视图
- controller 控制器

## MVVM（angular,vue）
- model数据
- view视图
- viewmodel视图模型

## Object.defineObject(es5)的没有替代方案
- 不支持ie8以下<=

## 安装vue
- cdn的方式
```
npm init
```
> 初始化会产生一个package.json的文件，藐视当前项目的依赖，名字不能有大写，特殊字符，中文，vue
> npm init -y 保证文件夹的名字是正确的	

## vue笔记1
- vm=>viewModel 数据最终都会被vm代理
- {{a}}取值表达式，通过{{}}来进行取值，默认可以不写this，表达式赋值运算 计算
三元表达式尽量少写逻辑(computed)
- 指令：dom元素的行间属性，vue提供了内置的指令，必须v-开头，后面的值均为变量
	- v-model：input、忽略掉value,checked,selected,将数据绑定到视图上，数据改变后会影响数据的变化
	- v-text取代{{}} v-cloak可以解决闪烁（块）问题,后期都可以不采用，使用v-cloak要加央视
	- v-once绑定一次，数据再变化也不会导致视图更新，写在不想刷新的标签上
	- v-html 将html字符串转化成html
	- v-for循环（数组，对象，字符串，数字）

### 事件v-on(@)
- 绑定给dom元素，函数需要定义在methods中，不能和data重名，this指向的是实例，不能使用箭头函数，事件源对象如果不写括号，可以自动传入，否则只能手动传入

## vue笔记2

- v-model（如果checkbox,select多选是数组，提供一个value属性）(radio checkbox分组靠的是v-model),checked selected不存在
- 修饰符，number.lazy
- 按键修饰符 .enter.ctrl.keyCode
- 事件.stop用法：@事件.stop='xxxx值' stopPropagation,cancelBabbel = true 
preventDefault = false
- @事件.capture = xxxx.addEventListener
- Jquery中的Once
- e.srcElement && e.target判断事件源绑定事件
- @事件.once表示 on('click') off('click')

## filters实例上可以用

```
{{'123'|my方法名(1,2,3)}}
filters:{
	my方法名(data,param1,param2,param3){

	}
}
```
## computed计算‘属性’不是方法
- 方法不会缓存，computed会根据依赖（归vue管理的数据，可以响应式变化的）的属性进行缓存
- 两部分组成，有get和set(不能只写set)，一般情况下，通过js赋值，影响其他人或者表单元素设置值的时候会调用set方法

## v-if/v-show
- v-if操作的是dom v-if可以和v-else-if，v-else连写
- v-show操作的是样式	

## v-bind简写：
- 动态绑定"属性"
```
<img :src="src" />
```
##实现单页开发的方式
- 通过hash记录跳转的路径(可以产生历史管理)	
- 浏览器自带的历史管理的方法，history（history.pushState()）可能导致404

> 开发时使用hash方式，上线的话，我们会使用history的方式
