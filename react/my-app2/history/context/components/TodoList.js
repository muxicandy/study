import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/action';
import TodoOtem from './TodoOtem'
class TodoList extends React.Component{
	filterData(){
		let todos = [];
		if(this.props.type==='all'){
			todos = this.props.todos
		} else if(this.props.type==='finish'){
			todos = this.props.todos.filter(item=>item.isSelected);
		} else if(this.props.type === 'unfinish'){
			todos = this.props.todos.filter(item=>!item.isSelected);
		}
		return todos;
	}
	render(){
		return (
				<div>
					<ul className="list-group">
						{this.filterData().map((item,index)=>(
							<TodoOtem key={index} item={item} changeSelected={(id)=>{
								this.props.changeSelected(id);
							}} deleteTodo={(id)=>{
								this.props.deleteTodo(id);
							}}/>
							))}
					</ul>
				</div>
			)
	}
}
export default connect(state=>({...state}),actions)(TodoList)