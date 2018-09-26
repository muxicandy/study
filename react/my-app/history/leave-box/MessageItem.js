import React from 'react';
export default class MessageItem extends React.Component{
	render(){
		let {content,createAt,auth,id} = this.props;
		return (
			<li className="list-group-item">
				留言人：{auth}, 内容：{content}<button className="pull-right btn btn-danger btn-sx" onClick={
					()=>{
						this.props.del(id);
					}
				}>&times;</button> <span className="pull-right">时间：{new Date({createAt}).toLocaleString()}</span>
			</li>
			)
	}
}