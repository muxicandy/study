//redux‘统一’的状态管理，不能直接更改状态
const CHANGE_TITLE_TEXT = 'change_title_text';
function createStore(reducer){
	let state;
	function dispatch(action){//派发 参数时actiona动作，规定action是一个对象，这个对象必须有一个type属性
		state = reducer(state, action);//调用写好的方法，这个方法会返回一个新的状态
	}
	dispatch({});
	let getState = ()=> JSON.parse(JSON.stringify(state));//获取状态的方法
	return {getState,dispatch}
}
let initState = {
	titleState:{
		color:'red',
		text:'标题'
	},
	contentState:{
		color:'green',
		text:'内容'
	}
}
function reducer(state=initState,action){//管理员，负责如何更改状态
	//{type:'自定义的'}
	//更改状态，要用一个新的状态覆盖掉
	switch(action.type){
		//把state放进来直接
		case CHANGE_TITLE_TEXT:
			return {...state,titleState:{...state.titleState,text:action.text}};
			break;
	}
	return state;
}
let store = createStore(reducer);//创建容器时，需要传递一个管理员
//宏，常量
function renderTitle(){
	let title = document.querySelector('.title');
	title.innerHTML = store.getState().titleState.text;
	title.style.color = store.getState().titleState.color;
}
function renderApp(){
	renderTitle();
}
renderApp();
setTimeout(()=>{
	store.dispatch({type:'change_title_text',text:'长标题'});
	renderApp();
	//除了type的其他的叫他payload载荷
},3000);