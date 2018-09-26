import React from 'react';
import local from './Local';
class Passworld extends React.Component{
	render(){
		return (
			<div>
				<input type="text" value={this.props.passworld} onChange={()=>{
					
				}}/>
			</div>
			)
	}
}
export default local('passworld')(Passworld)