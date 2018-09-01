const vm = new Vue({
	el: '#app',
	created(){
		this.todos = JSON.parse(localStorage.getItem('data'));
		//监控hash值的变化,如果页面已经有hash了，重新刷新页面也要获取hash值
		this.hash = window.location.hash.slice(2) || 'all';
		window.addEventListener('hashchange', ()=>{
			this.hash = window.location.hash.slice(2);
		},false);
	},
	directives:{
		focusAa(el,bindings) {
			if (bindings.value) {
				el.focus();
			}
		}
	},
	watch:{
		todos:{//watch默认只监控一层的数据变化，深度监控
			handler(){//默认写成函数，就相当于默认写了个handler,localStorage默认存的是字符串
				localStorage.setItem('data', JSON.stringify(this.todos));
			},deep:true
		}
	},
	methods:{
		add(){
			//keydown,keyup差一个单词，keydown的时候内容没有进入输入框，差一个单词
			this.todos.push({
				isSelected: false,
				title: this.title
			});
			this.title = '';
		},
		remove(todo){
			this.todos = this.todos.filter(item=>item!==todo);
		},
		remember(todo){//当前传递的是todo(当前点击的这一项)
			this.cur = todo;
		},
		cancel(){
			this.cur = '';
		}
	},
	data: {
		todos:[
			{
				isSelected: false,
				title: '睡觉'
			},
			{
				isSelected: false,
				title: '吃饭'
			},
			{
				isSelected: false,
				title: '睡觉'
			},
			{
				isSelected: false,
				title: '睡觉'
			},
			{
				isSelected: false,
				title: '睡觉'
			}
		],
		title: '',
		cur: '',
		hash: ''
	},
	computed:{
		filterToDos(){
			if (this.hash === 'all') return this.todos;
			if (this.hash === 'unfinish') return this.todos.filter(item=>!item.isSelected);
			if (this.hash === 'finish') return this.todos.filter(item=>item.isSelected);
			return this.todos;
		},
		count(){
			return this.todos.filter(item=>!item.isSelected).length;
		}
	}
});
//将数据显示到页面上
//敲回车时添加新数据（需要加入isSelected）
//删除功能
//计算一下，当前没有被选中的个数