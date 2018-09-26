import React from 'react';
import './index.less';
import {NavLink} from 'react-router-dom';
import logo from '../../common/images/logo.gif';
import Transition from 'react-transition-group/Transition';
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  display: 'none'
}
const transitionStyles = {//两种状态的变化
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};
export default class HomeHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			isShow: false
		}
	}
	changeShow = ()=>{//改变显示或者隐藏的状态
		this.setState({isShow: !this.state.isShow})
	};
	render(){
		return (
				<div className="home-header">
					<img src={logo} className="home-logo"/>
					<div className="guanbi" onClick={this.changeShow}>
						{this.state.isShow? <div>关闭</div> : <div>打开</div>}
					</div>
					<Transition in={this.state.isShow} timeout={duration} onEnter={(node)=>{
						node.style.display = 'block';
					}} onExited={(node)=>{
						node.style.display = 'none';
					}}>
						{(state)=>(
							<ul className="header-menu" style={{
								...defaultStyle,
								...transitionStyles[state]
							}} onClick={(e)=>{
								this.props.selectCurrentLesson(e.target.dataset.type);
								this.changeShow();//点完后，隐藏掉列表
							}}>
								<li data-type="all">全部课程</li>
								<li data-type="react">React课程</li>
								<li data-type="vue">Vue课程</li>
							</ul>
							)}
					</Transition>
				</div>
			)	
	}
}