
import React,{Component} from 'react';
import {render} from 'react-dom';
class Sum extends Component{
	constructor(){
		super();
		this.state = {a:1,b:1};
	}
	//key表示的是当前状态改的是哪一个
	//e表示的是事件源
	handleChange= (key,e) =>{//处理多个输入框的值映射到状态的方法
		this.setState({//[key]指的是[]里边的值取出来
			[key]: Number(e.target.value)
		})
	}
	render(){
		return (
				<div>
					<input type="text" value={this.state.a} onChange={(e)=>{
						this.handleChange('a',e)
					}}/>
					<input type="text" value={this.state.b} onChange={e=>{
						this.handleChange('b',e);
					}}/>
					{this.state.a + this.state.b}
				</div>
			)
	}
}
render(<Sum/>,window.root);