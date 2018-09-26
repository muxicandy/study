import React from 'react';
import ReactDOM from 'react-dom';
//jsx元素->React.createElement -> 虚拟dom对象 -> render方法
// let str = 'test阳阳加油';
//1、在react中想将js当作变量引入到jsx中，需要使用{}

// 2、在jsx中相邻的两个jsx元素，渲染时需要相邻的元素需要包裹一层元素

//3、{}取值表达式，取的是有返回值的结果
//4、如果多个元素想在return后边换行，我们需要加一个（）当作整体返回
//5、<{来判断当前js还是html
function build(str){
	return (
		<div>
			{/*这是js中的注释*/}
			<h1>呃呃，今年好好的换个工作；{str.name}1</h1>
			<h1>呃呃，今年好好的换个工作；{str.name}2</h1>
		</div>
		)
}

let el = <div>{build({name:'test阳阳加油'})}</div>;
ReactDOM.render(el,document.getElementById('root'));