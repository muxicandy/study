//虚拟dom元素的类，构造出一个实例对象
class Element{
	constructor(type, props, children){
		this.type = type;
		this.props = props;
		this.children = children;
	}
}
// 返回虚拟节点，对象的
function createElement(type, props, children){
	return new Element(type, props, children);
}
//设置属性
function setAttr(node, key, value){
	switch (key) {
		case 'value': //node是一个input或者textarea
			if(node.tagName.toUpperCase === 'INPUT' || node.tagName.toUpperCase === 'TEXTAREA'){
				node.value = value;
			}else{
				node.setAttribute(key, value);
			}
			break;
		case 'style':
			node.style.cssText = value;
		default:
			node.setAttribute(key, value);
			break;
	}
}
// render方法可以将vnode转化为真实dom
function render(eleObj){
	let el = document.createElement(eleObj.type);
	for(let key in eleObj.props){
		//设置属性的方法
		setAttr(el, key, eleObj.props[key]);
	}
	// 如果是虚拟dom继续渲染
	eleObj.children.forEach(child => {
		child = (child instanceof Element)?render(child):document.createTextNode(child);
		el.appendChild(child);
	});
	return el;
}
//将元素插入到页面内
function renderDom(el, dom){
	dom.appendChild(el);
};
export { createElement, render ,Element, renderDom}