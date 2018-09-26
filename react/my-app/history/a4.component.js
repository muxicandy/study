
//1、属性是有外界传递的，外边不能改属性，只有状态是属于组件自己的
//2、声明方式有两种，一种是函数声明方式（没有生命周期，状态this也没有），类声明（componentDidMount渲染完成，componentWillUnmount,组件将要卸载）

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
	render(){
		let {header, body} = this.props;
		return (
			<div className="container">
				<div className="panel-default panel">
					<Header header={header}/>
					<Body body={body}/>
				</div>
			</div>
		)
	}
}//react中需要将属性一层层向下传递，而且数据时单项数据流a
class Body extends Component {
	render(){
		return (
			<div className = "panel-body">{this.props.body}</div>
			)
	}
}
class Header extends Component {
	render(){
		return (
			<div className = "panel-heading">{this.props.header}</div>
			)
	}
}
let data = {header:'我非常帅',body:'ennen'};
ReactDOM.render(<Panel {...data}/>,window.root);