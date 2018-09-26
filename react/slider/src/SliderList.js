import React,{Component} from 'react';
export default class SliderList extends Component{
	render (){
		let style = {
			width: (this.props.items.length + 1)*400+'px',//给ul设置默认宽度
			left: this.props.index*400*-1 + 'px',//根据当前index移动left值
			transition:`left ${this.props.speed}s linear`
		};
		return (
			<ul style={style} ref="ul">
				{this.props.items.map((ietm,index)=>(
					<li><img src={ietm.src} alt="" key={index}/></li>
					))}
				{/*实现无缝轮播，需要在增加一张图*/}
				<li><img src={this.props.items[0].src}/></li>
			</ul>
			)
	}		
}