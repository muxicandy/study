import React from 'react';
import {render} from 'react-dom';
import Slider from './Slider';
import './index.less';
import a from './111.png';
import b from './112.png';
import c from './113.jpg';
let imgs = [{src:a},{src:b},{src:c}];
//再渲染
//delay 2秒动一次
//speed 每隔0.5s动一次
render(<Slider
	delay={2}
	speed={0.5}
	autoplay={true}
	dots={true}
	arrows={true}
	items={imgs}
	/>,window.root);