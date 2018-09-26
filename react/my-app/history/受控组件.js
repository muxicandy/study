//受控组件，非受控组件（受状态控制）
import React,{Component} from 'react';
import {render} from 'react-dom';
//受状态控制的组件，必须要有onChange,否则不能使用
//受控组件，可以赋予默认值，官方推荐使用，受控组件
class Input extends Component{
	constructor(){
		super();
		this.state = {val:'100'};
	}
	handleChange=(e)=>{
		//e时事件源，想获取当前的值
		let val = e.target.value;
		this.setState({val});
	}
	render(){
		return (
			<div>
			<input type="text" value={this.state.val} onChange={this.handleChange}/>
			{this.state.val}
			</div>
			)
	}
}
render(<div><Input/></div>,window.root);