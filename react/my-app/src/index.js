import React from 'react';
import {render} from 'react-dom';
//react 有两部分组成，一个叫做react包，react-dom,语法都是es6

//import语法要放置到页面最顶部		
//ReactDOM中就有一个比较常用的叫render()
//react元素，jsx元素（javascript+xml）,html也是xml的一种，javascript+html
//jsx html部分和原声html基本一样,不是完全一样
//jsx是一个语法糖,最后会通过babel转义ReactElement写法
//最终会转换成对象‘虚拟dom’{type:'h1',props:{className:'blue',childred:[李,{type:'span',props:[id:'beactiful',children:'yang']}}}
//1.先将jsx转换成react元素
//2.将react元素变成一个对象
//3.通过render渲染出一个对象	
/*
React.createElement(
  "h1",
  { className: "blue" },
  "li",
  React.createElement(
    "span",
    { id: "beactiful" },
    "yang"
  )
);
 */
//createelement的简单实现
function ReactElement(type,props){
	this.type = type;
	this.props = props;
}
function createElement(type, props,...children) {//将剩余的参数，变为数组
	if(children.length === 0) children = children[0];
	return new ReactElement(type,{...props,children: children});
}
//最终会转换成对象‘虚拟dom’{type:'h1',props:{className:'blue',childred:[李,{type:'span',props:[id:'beactiful',children:'yang']}}}
let myRender = (obj, container)=> {
	let {type, props} = obj;
	let ele = document.createElement(type);//创建第一层
	for(let key in props){
		if(key === 'children'){
			//children有可能是数组，也可能是一个，判断类型
			if(typeof props[key] === 'object'){//数组
				props[key].forEach(item=>{
					if(typeof item === 'object'){//如果自元素是对象，那就继续调用
						myRender(item, ele);
					} else {
						ele.appendChild(document.createTextNode(item));
					}
				});
			} else {//一个的话，直接插入到h1中
				ele.appendChild(document.createTextNode(props[key]));
			}
		} else if(key === 'className'){
			ele.setAttribute('class',props[key]);
		} else {
			ele.setAttribute(key,props[key]);
		}
	}
	container.appendChild(ele);//将元素插入到页面中
}
console.log(createElement(
  "h1",
  { className: "blue" },
  "li",
  React.createElement(
    "span",
    { id: "beautiful" },
    "yang"
  )
));
myRender(createElement(
  "h1",
  { className: "blue" },
  "li",
  React.createElement(
    "span",
    { id: "beautiful" },
    "yang"
  )
),document.getElementById('root'));
render(<h1 className="blue">李<span id="beautiful">yang</span></h1>,document.getElementById('root'));