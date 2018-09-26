import React from 'react';
import * as actions from '../store/action/counter';
import {connect} from 'react-redux';
//利用react-redux需要导出一个连接后的组件
class Counter extends React.Component {
	render(){
		return <div>
			<button onClick={()=>{
				this.props.add(10)
			}}>+</button>
			<p>{this.props.num}</p>
			<button onClick={()=>{
				this.props.minus(5)
			}}>-</button>
		</div>
	}
}
//connect执行时有两个‘函数’，mapStateToProps mapDispatchToProps(将redux中的状态映射成属性)
// mapStateToProps将redux中的状态映射成属性
// 这两个组件的返回值会作为当前组件的属性
let mapStateToProps = (state)=>{//这个函数的参数是State
	return {n1: state.counter.num}
};
let mapDispatchToProps = (dispatch) => {//这个函数的参数是dispatch
	return {
		add:(count)=>{
			dispatch(actions.add(count))
		},
		minus:(count)=>{
			dispatch(actions.minus(count))
		}
	}
}
//这个方法是redux中的
let bindActionCreators = (actions)=>{
	return (dispatch)=>{
		let obj = {};
		for(let key in actions){
			obj[key] = (...args)=>{
				dispatch(actions[key](...args))
			}
		}
		return obj;
	}
}
//connect中的mapDispatchToProps可以传入一个actionCreator对象
export default connect(state=>({...state.counter}),bindActionCreators(actions))(Counter);//第二次执行的参数是当前组件