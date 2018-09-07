import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
Vue.use(Vuex);
//状态
let state = {cartList: []};
import mutations from './mutations';
import getters from './getter';
export default new Vuex.Store({
	state,
	mutations,
	getters,
	plugins:[logger()],
	strict: true
});
