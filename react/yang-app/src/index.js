import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import Home from './containers/Home/Home';
import Lesson from './containers/Lesson/Lesson';
import Profile from './containers/Profile/Profile';
import App from './containers/App';
import {Provider} from 'react-redux';
import store from './store';

//组件分为容器组件和基础组件
ReactDOM.render(<Provider store={store}>
	<Router>
		<App>
			<Switch>
				<Route path="/" exact={true} component={Home}/>
				<Route path="/lesson" component={Lesson}/>
				<Route path="/profile" component={Profile}/>
			</Switch>
		</App>
	</Router>
	</Provider>, document.getElementById('root'));