import React from 'react';
export default class TodoFooter extends React.Component{
	render(){
		return (
				<nav className="nav nav-pills">
					<li><a href="">全部</a></li>
					<li><a href="">未完成</a></li>
					<li><a href="">已完成</a></li>
				</nav>
			)
	}
}