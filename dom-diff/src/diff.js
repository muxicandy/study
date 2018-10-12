function diff(oldTree,newTree) {
	let patchs = {};
	let index = 0;
	//递归树，比较后的结果放到补丁包中
	walk(oldTree, newTree, index, patchs);
	return patchs;
}
// 规则：当前节点类型相同时，去看一下属性是否相同产生一个属性的补丁包{type:'ATTRS',attrs:{class:'xxx'}}
// 新的dom节点不存在{type:'REMOVE',index:xxx}
// 节点类型不相同，直接采用替换模式{type:'REPLACE',newNode:newNode}
// 文本的变化{type:"TEXT",text:1}
function diffAttr(oldAttrs, newAttrs){
	let patch = {};
	//判断老的属性中和新的属性的关系
	for(let key in oldAttrs){
		if (oldAttrs[key] !== newAttrs[key]) {
			patch[key] = newAttrs[key];//有可能undefined	
		}
	}
	for(let key in newAttrs){
		//老节点没有新节点的属性
		if (!oldAttrs.hasOwnProperty(key)) {
			patch[key] = newAttrs[key];
		}
	}
	return patch;
}
const ATTRS = 'ATTRS';
const TEXT = 'TEXT';
const REMOVE = 'REMOVE';
const REPLACE = 'REPLACE';
let Index = 0;
function diffChildren(oldChildren,newChildren,patches){
	oldChildren.forEach((child,idx)=>{
		//index每次传递给waik时index是递增的,所有的人都基于一个序号来实现
		walk(child, newChildren[idx], ++Index,patches);
	});
}
function isString(node){
	return Object.prototype.toString.call(node) === '[object String]';
}
function walk(oldNode, newNode, index, patchs){
	let currentPatch = [];//每个元素都一个补丁对象REMOVE
	if(!newNode){
		currentPatch.push({type:REMOVE,index});
	} else if(isString(oldNode) && isString(newNode)){
		if(oldNode !== newNode){
			currentPatch.push({type:TEXT,text: newNode});
		}
	} else if(oldNode.type === newNode.type){
		// 比较属性是否有更改
		let attrs = diffAttr(oldNode.props, newNode.props);
		if(Object.keys(attrs).length > 0){
			currentPatch.push({type:ATTRS,attrs:attrs});
		}
		// 如果有儿子节点，遍历儿子
		diffChildren(oldNode.children,newNode.children,patchs);
	} else {
		currentPatch.push({type:REPLACE,newNode});
	}
	//当前元素确实有补丁
	if (currentPatch.length > 0) {
		//将元素和补丁对应起来放到大补丁中
		patchs[index] = currentPatch;
	}
}
export default diff;