import React from 'react';
import PropTypes from 'prop-types';
export default class Title extends React.Component{
	static contextTypes = {
		col: PropTypes.string
	}
	render(){
		return (
			<div style={{color: this.context.col}}>这里是title</div>
			)
	}
}