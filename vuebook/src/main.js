// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import Vue from 'vue/dist/vue'
//这个引用引用的vue的运行时
//vue = compiler + runtime(compiler可以编译模版)
//compile有6k
import App from './App.vue';

import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img4.imgtn.bdimg.com/it/u=3823587011,2409501135&fm=26&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536065681861&di=56be6b8ee07e6f19378e816b4937ddc4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4d086e061d950a7be74b4aff01d162d9f2d3c98b.jpg',
  attempt: 1
});
import 'swiper/dist/css/swiper.css';
// import notify from './plugin/notify.js';
// Vue.use(notify,{
// 	delay: 5000
// });//使用带有install的插件
//在进入路由之前都会进入此方法
router.beforeEach(function(to, from, next){
	document.title = to.meta.title;
	if(to.path==='/list'){
		// next({path: '/add'});
		next();
	} else {
		next();
	}
});
import store from './store';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App),
  store
})
// new Vue({
// 	//render函数的作用，是将虚拟的dom渲染成真实的dom
// 	//createElement返回的是虚拟的dom
// 	// template:'<div></div>'
// 	render: (h)=>
// 		h('h1',[
// 			'hello',
// 			h('span','一则头条')
// 		])
// }).$mount('#app');
