import React from 'react';
import local from './Local';
class UserName extends React.Component{
	render(){
		return (
			<div>
				<input type="text" value={this.props.username} onChange={()=>{

				}}/>
			</div>
			)
	}
}
export default local('username')(UserName)