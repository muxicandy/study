import React from 'react';
import ReactDOM from 'react-dom';
let lessons = [
	{
		name:'react',
		price:'1000'
	},
	{
		name: 'vue',
		price: '800'
	}
];//find,map,filter,reduce
function toLesson(item){
	return `课程是：${item.name},价格是：${item.price}`;
}
let ele = (
			<ul>
				{lessons.map((item,index)=>(
						{/*null在react中也是一个合法的元素，表示不存在，没有*/}
						item.price < 1000 ? null : <li key={index}>{toLesson(item)}</li>
				))}
			</ul>
		);
ReactDOM.render(ele,document.getElementById('root'));//或者用window.root,相当于直接去id