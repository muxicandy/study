import {createElement, render, renderDom} from './element.js';
import diff from './diff.js';
import patch from './patch.js';
let vertualDom = createElement('ul',{class:'list'},[
		createElement('li',{class:'item'},['a']),
		createElement('li',{class:'item'},['b']),
		createElement('li',{class:'item'},['c'])
	]);
let vertualDom2 = createElement('ul',{class:'list-group'},[
		createElement('li',{class:'item'},['1']),
		createElement('li',{class:'item'},['b']),
		createElement('div',{class:'item'},['3'])
	]);
let el = render(vertualDom);
renderDom(el, window.root);
// console.log(el);
// console.log(vertualDom);
// console.log(vertualDom2);
let patches = diff(vertualDom, vertualDom2);
//给元素打补丁 重新更新视图
patch(el, patches);
console.log(patches);
// DOM Diff 比较两个虚拟DOM区别 比较两个对象的区别
// dom diff的作用，根据两个虚拟对象创建出补丁，描述改变的内容，将这个补丁用来更新dom
// 新增节点不会更新
// 平级元素会更新
