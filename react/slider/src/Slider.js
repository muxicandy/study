import React,{Component} from 'react';
import SliderList from './SliderList';
import SliderArrows from './SliderArrows';
import SliderDots from './SliderDots';
export default class Slider extends Component{
	constructor(){
		super();
		this.state = {index: 0}//表示当前第几张
	}
	go = (step)=>{
		let index = this.state.index + step;//先加的
		if(index > this.props.items.length){//当等于最后一张时，越界回到0
			this.$ul.style.transitionDuration = '';//清除ul上的动画
			this.$ul.style.left = 0;//回到0处
			setTimeout(()=>{//等动画移除后，并回到0时，在增加回动画时间
				this.$ul.style.transitionDuration = this.props.speed + 's';
				index = 1;//下一次该走1了
				this.setState({index});
			},30);
		} 
		if (index < 0) {//当小于第一张时，回到最后一张
			this.$ul.style.transitionDuration = '';//清除ul上的动画
			this.$ul.style.left = this.props.items.length*-1*400+'px';
			setTimeout(()=>{//等动画移除后，并回到0时，在增加回动画时间
				this.$ul.style.transitionDuration = this.props.speed + 's';
				index = this.props.items.length - 1;
				this.setState({index});
			},30);
		}
		this.setState({
			index: this.state.index + step
		})
	}
	turn = ()=>{//轮播图
		this.timer = setInterval(()=>{
			this.go(1);
		},this.props.delay*1000);
	}
	componentDidMount(){//页面加载完成后，看是否需要自动轮播
		if(this.props.autoplay){
			this.turn();
		}
		this.$ul = this.refs.list.refs.ul;
	}
	render(){	
		return (
			<div className="slider-container" onMouseEnter={()=>{
				clearInterval(this.timer);
			}} onMouseLeave={()=>{
				this.turn();
			}}>
				<SliderList ref="list" index={this.state.index} items={this.props.items} speed={this.props.speed}/>
				{this.props.arrows? <SliderArrows go={this.go}/>:null}
				{this.props.dots? <SliderDots items={this.props.items} index={this.state.index} go={this.go}/>:null}
			</div>
			)
	}
}