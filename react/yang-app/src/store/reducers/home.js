//一个页面一个reducer
import * as Types from '../action-types';
let initState = {
	currentLesson: 'all',
	sliders: [],
	lesson:{
		currentLesson:'all',
		lists:[],//课程的所有数据
		hasMore:true,//默认有更多
		offset: 0,//从第0条开始获取
		limit: 5,//限制一次获取条数
		isLoading: false//默认没有正在加载
	}
};
function home(state=initState,action){
	switch (action.type) {
		case Types.SET_CURRENT_LESSON:
			return {...state,currentLesson:action.lesson}
		case Types.SET_SLIDERS:
			return {...state,sliders:action.payload}
	}
	return state;
}
export default home;