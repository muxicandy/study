import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store/index1.js';
ReactDOM.render(
		<Provider>
		<App/>
		</Provider>
	,window.root);