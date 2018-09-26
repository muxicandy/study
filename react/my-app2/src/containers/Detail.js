import React from 'react';
export default class Detail extends React.Component{
	render(){
		console.log(this.props);
		let user = this.props.location.state || {};
		if(user==null){//如果没有拿到id去laocalStorage取值
			let id = this.props.match.params.id;//这里的id是字符串
			let users = JSON.parse(localStorage.getItem('users'))||[];
			user = users.find(item=>item.id == id) || {};
		}
		return (<div>
			ID：{user.id}用户名：{user.username}
			</div>)
	}
}