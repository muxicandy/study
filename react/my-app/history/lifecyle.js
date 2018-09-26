import React,{Component} from 'react';
import {render} from 'react-dom';

class Counter extends Component {//PureComponent,浅比较，比较前后两次，没变化就不会更新
	//defaultProps->constructor
	static defaultProps = {
		name: 'study react'
	}
	constructor(props){
		super();
		this.state = {number: 0}
		console.log('第一步，constructor构造函数');
	}
	componentWillMount(){//去本地的数据，同步的方式，采用渲染之前获取数据，只渲染一次
		console.log('第二步：组件将要加载');
	}
	componentDidMount(){
		console.log('第四步：组件挂载完成');
	}
	//react可以在shouldcomponentUpdate方法中优化，PureComponent可以帮我做这件事情
	shouldComponentUpdate(nextProps,nextState){//代表的是下一次的属性和下一次的状态
		console.log('第五步：组件是否应该更新了shouldComponentUpdate');
		return nextState.number%2;//如果此函数中，返回了false，就不会调用render方法了
	}
	//不要随便用setState可能会死循环
	componentWillUpdate(){
		console.log('第六步：组件将要更新componentWillUpdate');
	}
	componentDidUpdate(){
		console.log('第七步：组件更新完componentDidUpdate');
	}
	handleClick = ()=>{
		this.setState({number:this.state.number + 1});
	}
	render(){
		console.log('第三步：render');
		return (
				<div>
					<p>{this.state.number}</p>
					<ChildCounter n={this.state.number}/>
					<button onClick={this.handleClick}>点击</button>
				</div>
			)
	}
}
class ChildCounter extends Component{
	componentWillMount(){
		console.log('child componentWillMount');
	}
	render(){
		console.log('child-render');
		return (
			<div>
				{this.props.n}
			</div>
		)
	}
	componentDidMount(){
		console.log('child componentDidMount');
	}
	componentWillReceiveProps(newProps){//第一次不会执行，之后更新时才会执行
		console.log('child componentWillReceiveProps');
	}
	shouldComponentUpdate(nextProps,nextState){
		return nextProps.n % 3;//自组件判断接收的属性，是否满足更新条件更新的条件
	}
}
render(<Counter name="计数器"/>, window.root);