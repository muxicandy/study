import React from 'react';
export default class TodoList extends React.Component{
	render(){
		return (
				<div>
					<ul className="list-group">
						<li className="list-group-item">
							<input type="checkbox"/>
							今天吃药了吗？
							<button className="btn btn-danger btn-xs pull-right">&times;</button>
						</li>
					</ul>
				</div>
			)
	}
}