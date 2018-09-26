import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import {Provider} from './react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
		<Provider store={store}><Counter/></Provider>
	,window.root);


//高阶函数，多余一个=>就是高阶函数
//高阶组件（一个组件返回一个组件）