import React from 'react';
export default class SliderDots extends React.Component{
	render(){
		return (<div className="slider-dots">
				{this.props.items.map((item,index)=>(
						<span key="index" 
						onClick={()=>{
							this.props.go(index-this.props.index)
						}}
						className={this.props.index === index?'active':''}></span>
					))}
			</div>)
	}
}