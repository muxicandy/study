import React from 'react';
import actions from '../store/action/todo';
import {connect} from 'react-redux';
class Todo extends React.Component {
	render(){
		return <div>
			<input type="text" onKeyUp={(e)=>{
				if(e.keyCode === 13){
					this.props.addTodo(e.target.value);
					e.target.value = '';
				}
			}}/>
			{this.props.todos.map((item,index)=>(
					<li key={index}>{item}</li>
				))}
		</div>
	}
}
export default connect(state=>({todos: state.todo},actions))(Todo)