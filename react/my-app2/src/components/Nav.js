import React from 'react';
import {Link,withRouter} from 'react-router-dom';
//widthRouter是一个高阶组件 
class Nav extends React.Component{
	render(){
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">
			      	title标题
			      </a>
			    </div>
			    <ul className="nav navbar-nav">
			        <li className="active">
			        	<Link to='/'>首页</Link>
			        	</li>
			        <li>
			        	<Link to={{pathname:'/profile'}}>个人中心</Link>
			        </li>
			        <li>
			        	<Link to={'/user'}>用户</Link>
			        </li>
			    </ul>
			    <button onClick={()=>{
					this.props.history.push('/');
			    }}>+</button>
			  </div>
			</nav>
			)
	}	
}
//withRouter他会把当前组件 包装成一个Route组件，这样就会有我们的match,location，和history
export default withRouter(Nav)