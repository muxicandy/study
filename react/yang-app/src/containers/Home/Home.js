import React from 'react';
import './index.less';
import HomeHeader from './HomeHeader.js';
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import HomeSliders from './HomeSliders';
import Loading from '../../components/Loading/Loading';
@connect(state=>({...state.home}),actions)//修饰类
export default class Home extends React.Component{
	componentDidMount(){
		this.props.getSlidersAPI();
		if(this.props.sliders.length === 0){
			this.props.getSlidersAPI();
		}
	}
	selectCurrentLesson = (val)=>{//选择当前是哪门课程，做筛选用的，val是当前选择的课程
		this.props.updateCurrentLesson(val);
	};
	render(){
		return (<div>
			<HomeHeader selectCurrentLesson={this.selectCurrentLesson}/>
			<div className="content">
				{this.props.sliders.length ? <HomeSliders lists={this.props.sliders}/>:<Loading/>}
			</div>
			</div>)
	}
}