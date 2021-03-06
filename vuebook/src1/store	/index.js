import Vue from 'vue';
import logger from 'vuex/dist/logger';//logger是一个日志插件
import Vuex from 'vuex';

Vue.use(Vuex);
//容器是唯一的
const state = {count: 0};
const gettters = {
	val: (state)=> state.count % 2 == 0 ? '奇数':'偶数'
},
import mutations from './mutations';
export default new Vuex.Store({
	//state:state
	state,
	mutations,
	plugins:[logger()],
	strict: true//只能通过mutation（管理员）来更改状态，mutation不支持异步
});
