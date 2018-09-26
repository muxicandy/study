import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
//PureComponent纯组件，比较地址,如果是同一个不会更改，更改再变
export default class MessageBox extends React.PureComponent{
	constructor(){
		super();
		this.state = {
			messages:
				[
					{
						id:1,
						content:'今天吃药了吗？',
						auth:'sheep',
						createAt:Date.now()
					}
				]
		};
	}
	deleteMessage=(id)=>{
		let messages = this.state.messages.filter(item=>item.id!==id);
		this.setState({//重新设置状态
			messages
		});
		localStorage.setItem('messages',JSON.stringify(messages));
	}
	addMessage = (message)=> {//儿子传递过来的,实现子父传递
		let messageItem = {...message,id:Math.random(),createAt:Date.now()};
		// this.state.messages.push(messageItem);
		let messages = [...this.state.messages,messageItem]
		this.setState({messages:messages});//放到状态中,push不会改变原有的引用地址
		localStorage.setItem('messages',JSON.stringify(messages));
	}
	//生命周期是同步的，在componentWillMount中setState是同步的
	componentWillMount(){//取localStorage值时，取到后再放入状态中，再进行render执行一次，willMount中的setState会和this.state状态合并	
		let messages = JSON.parse(localStorage.getItem('messages')) || [];
		if(messages && messages.length){
			this.setState({
				messages
			});
		}
	}
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-danger">
							<div className="panel-heading">留言板</div>
							<div className="panel-body">
								<MessageList messages={this.state.messages} delete={this.deleteMessage}/>
							</div>
							<div className="panel-footer">
								<MessageForm addMess={this.addMessage}/>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}