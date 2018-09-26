import React from 'react';
export default class TodoOtem extends React.Component{
	render(){
		let item = this.props;
		return (
			<div>
			<li className="list-group-item">
				<input type="checkbox" checked={item.isSelected} onChange={()=>{
					this.props.changeSelected(item.id)
				}}/>
				{item.title}
				<button className="btn btn-danger btn-xs pull-right" onClick={()=>{
					this.props.deleteTodo(item.id);
				}}>&times;</button>
			</li>
			</div>
			)
	}
}