import React from 'react';
import './index.less';
import {NavLink} from 'react-router-dom';
export default class Tab extends React.Component{
	render(){
		return (
				<div className="nav">
					<nav>
						<NavLink to="/" exact={true}>首页</NavLink>
					</nav>
					<nav>
						<NavLink to="/lesson">我的课程</NavLink>
					</nav>
					<nav>
						<NavLink to="/profile">个人中心</NavLink>
					</nav>
				</div>
			)	
	}
}