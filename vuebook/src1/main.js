//vuex 平级组件交互，找共同的父级解决，跨组件交互eventBus混乱（发布订阅）
//vuex主要借鉴了flux框架模式思想 redux,vuex只能在vue中使用（单独为vue开发的）
//vuex为了大型项目，主要是（状态）管理,指的是数据，将数据统一起来管理

// data(){

// }

import Vue from 'vue';
import App from './App';
import store from './store';

new Vue({
	el: '#app',
	...App,
	store//特点，store被注册到了实例上，所有组件都会有一个属性，叫this.$store
});