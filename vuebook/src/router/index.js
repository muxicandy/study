import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// import Home from '../components/Home.vue';
// import List from '../components/List.vue';
// import Collect from '../components/Collect.vue';
// import Detail from '../components/Detail.vue';
// import Add from '../components/Add.vue';
//和以前不一样的地方，引入router必须use
//注册一些全局的内容

export default new Router({
	routes:[
		{
			path: '/',
			component: ()=> import('../components/Home.vue')
		},//this.$route.meta.matched.keepAlive
		{path: '/home',component: ()=> import('../components/Home.vue'),
			meta: {
				keepAlive: true,title: '首页'

			}},
		{path: '/list',component: ()=> import('../components/List.vue'),meta:{title: '列表'}},
		{path: '/collect', component: ()=> import('../components/Collect.vue'),meta:{title: '收藏'}},
		{path: '/detail/:bid', component: ()=> import('../components/Detail.vue'),meta:{title: '详情'},name:'detail'},
		{path: '/add', component: ()=> import('../components/Add.vue'), meta:{title: '添加'}},
		{path: '*', component: ()=> import('../components/Home.vue'), meta:{title: '首页'}}
	],
	linkActiveClass: 'myactive'
});


