
//Provider是一个组件，接受了一个store的属性，内部将其挂在在了context上
import React from 'react';
import PropTypes from 'prop-types';
class Provider extends React.Component{
	static childContextTypes = {
		store: PropTypes.object
	}
	getChildContext(){
		return {
			store: this.props.store
		}
	}
	render(){
		return this.props.children
	}
}
let connect = (mapStateToProps,mapDIspatchToProps)=>(Component)=>{
	return class Proxy extends React.Component {
		constructor(props,context){
			//constructor的第二个参数是context
			super();//默认情况下，先调用mapStateToProps返回结果
			//this.state = mapStateToProps(context.store.getSate());//n:state.number
		}
		componentDidMount(){//每次更新重新执行mapStateToProps方法
			this.context.store.subscribe(()=>{
				this.setState(mapStateToProps(this.context.store.getSate()));
			});
		}
		static contextTypes = {
			store: PropTypes.object
		}
		render(){
			return <Component {...mapStateToProps(this.context.store.getSate())} {...mapDIspatchToProps(this.context.store.dispatch)}/>
		}
	}
};
export {Provider,connect}
