
//1、属性是有外界传递的，外边不能改属性，只有状态是属于组件自己的
//2、声明方式有两种，一种是函数声明方式（没有生命周期，状态this也没有），类声明（componentDidMount渲染完成，componentWillUnmount,组件将要卸载）

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//父传子 通过属性
//子传父 通过父亲传给儿子一个函数，儿子调用父亲的函数，将值传递给父亲，父亲更新值 刷新视图
// import PropTypes from 'prop-types';//属性校验的包
//1、什么是符合组件，将多个组件进行组合，例如调用了两次Counter
//2、解构非常复杂时可以把组件分离
//3、符合组件，有平级的，有父子关系的，父亲的数据传递给子的数据
// class Counter extends Component{//this.setState()
// 	static propTypes = {//静态属性
// 		age:PropTypes.string 
// 	};
// 	constructor(props){//在构造函数中拿到属性，
// 		super(props);//子类继承父类的私有属性
// 		console.log(props);
// 		this.state = {count:{number:1}};
// 	}
// 	static defaultProps = {//校验默认熟悉
// 		age: '18'
// 	}
// 	render(){
// 		//组件长什么样子，render的返回值只能有一个根元素
// 		return (<div>
// 			{this.state.count.number}
// 			<button onClick={this.handleClick}>+点击</button>
// 		</div>)
// 	}
// 	handleClick = ()=>{
// 		this.setState({count:{number:this.state.count.number+1}});
// 	}
// }
class Panel extends Component {
	constructor(){
		super();
		this.state = {color: 'primary'};
	}
	changeColor=(color)=>{//到时候儿子传递一个颜色
		this.setState({color});
	}
	//第一步，将函数传递给儿子
	render(){
		return (
			<div className="container">
				<div className={"panel-"+ this.state.color +" panel"}>
					<Header
					header={this.props.header}
					change={this.changeColor}
						/>
				</div>
			</div>
		)
	}
}//react中需要将属性一层层向下传递，而且数据时单项数据流a
class Header extends Component {
	handleClick=()=>{
		this.props.change('warning');//调用父亲的方法
	}
	render(){
		return (
			<div className = "panel-heading">
				{this.props.header}
				<button className="btn btn-danger" onClick={this.handleClick}>改变颜色</button>
			</div>
		)
	}
}
let data = {header:'我非常帅'};
ReactDOM.render(<Panel {...data}/>,window.root);