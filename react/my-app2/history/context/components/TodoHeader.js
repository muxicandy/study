import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/action';
//actions是actionCreator组成的对象
class TodoHeader extends React.Component{
	getUnfinishedCount = ()=>{
		return this.props.todos.filter(item=>!item.isSelected).length;
	}
	render(){
		console.log(this.props);
		return (
				<div>
					<h3>亲 你有{this.getUnfinishedCount()}件事没完成</h3>
					<input type="text" className="form-control" onKeyUp={(e)=>{
						if (e.keyCode === 13) {
							this.props.addTodo({id:Math.random(),title:e.target.value,isSelected:false});
							e.target.value = '';
						}
					}}/>
				</div>
			)
	}
}
//{todos:[{title:'xxx'}]}
export default connect(state=>({...state}),actions)(TodoHeader)