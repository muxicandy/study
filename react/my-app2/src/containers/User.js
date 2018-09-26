import React from 'react';
import List from './List';
import Add from './Add';
import {Link,Route,NavLink} from 'react-router-dom';
export default class User extends React.Component{
	render(){
		return (<div>
			<div className="col-md-3">
				<nav className="nav nav-staked">
					<li><NavLink to={'/user/add'}>添加</NavLink></li>
					<li><NavLink to={'/user/list'}>列表</NavLink></li>
				</nav>
			</div>
			<div className="col-md-9">
				<Route path='/user' exact={true} component={Add}/>
				<Route path='/user/add' component={Add}/>
				<Route path='/user/list' component={List}/>
			</div>
			</div>)
	}
}