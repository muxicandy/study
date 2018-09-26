import React from 'react';
import {render} from 'react-dom';

//1、普通属性，和html中的一样
//2、特殊属性 class,for
//3、style必须是一个对象
//4、危险的插入innerHTML，xss攻击，跨域攻击的脚本攻击,基本用不到
let str = '<h1>纯标签</h1>';
let styl={backgroundColor:'red'};
render(<div>
	<ul>
		<li className="aaa"></li>
		<li htmlFor="a" style={styl}></li>
		<li dangerouslySetInnerHTML={{__html:str}}></li>
	</ul>
	</div>,window.root);