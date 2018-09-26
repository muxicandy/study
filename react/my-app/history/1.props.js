//1、属性是有外界传递的，外边不能改属性，只有状态是属于组件自己的
//2、声明方式有两种，一种是函数声明方式（没有生命周期，状态this也没有），类声明（componentDidMount渲染完成，componentWillUnmount,组件将要卸载）

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';//属性校验的包

class School extends Component{//this.setState()
	static propTypes = {//静态属性
		age:PropTypes.string 
	};
	constructor(props){//在构造函数中拿到属性，
		super(props);//子类继承父类的私有属性
		console.log(props);
	}
	static defaultProps = {//校验默认熟悉
		age: '18'
	}
	render(){
		//组件长什么样子，render的返回值只能有一个根元素
		return (<div>
			{/*props*/}
			{JSON.stringify(this.props)}
		</div>)
	}
}
School.propTypes = {age:PropTypes.string};
ReactDOM.render(<School name={'yang'} age={'yang1'}/>,window.root);