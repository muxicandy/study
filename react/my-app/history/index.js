import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store';
ReactDOM.render(
		<Provider>
		<App/>
		</Provider>
	,window.root);