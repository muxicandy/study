//components 组件
//containers 容器
//ui组件，智能组件
import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import App from './containers/App';
import Home from './containers/Home';
import Profile from './containers/Profile';
import User from './containers/User';
import Detail from './containers/Detail';
import 'bootstrap/dist/css/bootstrap.css';
import ProtectedRoute from './ProtectedRoute';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
//一般情况下，我们在默认的index中，配置路由即可
//switch的作用，Route匹配后就停止匹配下面的内容
//exact确切的，只有路径完全相等时，才匹配
//redirect重定向
ReactDOM.render(<Router>
	<App>
		{/*switch只当路径匹配成功才会调用组件*/}
		<Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/profile" component={Profile} />
		{/*user必须有权限才能访问，模拟如果localStorge有login有值登陆了，没有跳转到首页，不让访问，去首页，官方文档上写是不支持异步的*/}
			<ProtectedRoute path="/user" component={User} />
		{/*进入详情页的时候传入一个id/detail/1 /detail/:id自动放到this.props.match.params={id:1}*/}
			<Route path="/detail/:id" component={Detail}/>
			// <Route component={Home}/>//如果匹配不到会走最后一个路径不会更改
			<Redirect to="/"/>
		{/*Redirect具有重定向的功能*/}
		</Switch>
	</App>
	</Router>,window.root);