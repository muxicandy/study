
import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import oldJSONP from 'jsonp';
function jsonp(url, opts={}){
	return new Promise((resolve,reject)=>{
		//url是jsonp请求的路径，opts是请求的属性，第三个参数是成功的回调
		oldJSONP(url,opts,function(err,data){
			if(err)reject(err);
			resolve(data);
		});
	});
}
//async和await，await跟的是promise,有await就要有async来修饰此函数
class Search extends Component{
	constructor(){
		super();
		this.state = {val: '',arr: [],index: -1};
	}
	// async componentDidMount(){
	// 	let result = await jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=p',{param:'cb'});
	// 	console.log(result);
	// 	this.state.setState({
	// 		val:q,
	// 		arr:s
	// 	});
	// }
	handleChange = async (e)=>{
		let wd = e.target.value;
		this.wd = wd;//保存输入的内容，挂载到实例上
		let {s} = await jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd= '+ wd,{param:'cb'});
		this.setState({
			val:wd,
			arr:s
		});
	}
	changeIndex = (e)=>{
		let index = this.state.index;//默认的索引
		if (e.keyCode === 38 || e.keyCode === 40) {
			e.preventDefault();
			if (e.keyCode === 38) {
				index--; 
				if (index === -2) {//目前在-1，--变成了-2,回到最后一个
					index = this.state.arr.length - 1;
				}
			} else {
				index++;
				if (index === this.state.arr.length) {//当越界，回到-1
					index = -1
				}
			}
			this.setState({index,val:this.state.arr[index]||this.wd})
		}
	}
	enter = (e)=>{
		if (e.keyCode === 13) {
			window.open('https://www.baidu.com/s?wd='+this.state.val);
		}
	}
	render(){
		return (
			<div className="container">
				<div className="panel panel-default">
					<div className="panel-heading">
						<input type="text" className="form-control" value={this.state.val} onChange={this.handleChange} onKeyDown={this.changeIndex} onKeyUp={this.enter}/>
					</div>
					<div className="panel-body">
						<ul className="list-group">
							{this.state.arr.map((item,index)=>(
								<li className={(this.state.index === index ? 'active' : '') + " list-group-item"} key={index}>{item}</li>
							))}		
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
render(<Search/>,window.root);