import React from 'react';
import {render} from 'react-dom';

let school = {name:'yang',age:18};
let school1 = {name:'yang',age:0};
//1、复用 2、组合3、可维护
//组件声明有两种方式，一种是函数声明，类声明
//react怎么区分是组件还是jsx元素，组件名开头大写
//react组件可以和jsx混合使用
//可以通过属性给组件传值props
// function Build(props){//函数的参数是属性
// 	return <p>{props.school&&props.school.name}{props.school&&props.school.age}</p>
// }
// render(<div>
// 	<Build school={school1}/>
// 	<Build school={school}/>
// 	</div>,window.root);

function Build(props){//函数的参数是属性
	return <p>{props.name}{props.age}</p>
}
render(<div>
	<Build name={school1.name} age={school1.age}/>
{/*将对象中的内容解构出来传递给Build，不用一个一个传了*/}
	<Build {...school}/>
	</div>,window.root);