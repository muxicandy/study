import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
// this.props.children是获取组件中间的内容
// 1、默认不传递是undefined
// 2、传入一个时时对象类型
// 3、传入多个就是数组类型
// 我们可以用React.Chilnren.map去遍历children
class Dinner extends Component{
	render(){
		return (<div>
			<ul>
			{React.Children.map(this.props.children,(item,index)=>(
				<li>{item}</li>
				))}
				</ul>
		</div>)
	}
}

ReactDOM.render(<Dinner>
	<div>汉堡</div>
</Dinner>,window.root);