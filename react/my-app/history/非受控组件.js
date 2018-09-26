
import React,{Component} from 'react';
import {render} from 'react-dom';
//输入框value值不受状态控制，不能初始化默认值
class Sum extends Component{
	constructor(){
		super();
		this.state = {result:''}
	}
	//通过ref设置的属性，可以通过this.refs获取到对应的dom元素
	handleChange = ()=>{
		let result = this.refs.a.value + this.refs.b.value;
		this.setState({result});
	}
	render(){
		return (
				<div onChange={this.handleChange}>
					<input type="number" value={this.state.a} ref="a"/>
				{/*x代表真是的dom,把元素直接挂载到了当前实例上*/}
					<input type="number" value={this.state.b} ref={x=>{this.b = x}}/>
					{this.state.result}
				</div>
			)
	}
}
render(<Sum/>,window.root);