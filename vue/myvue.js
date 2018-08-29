// let book = {};
// let name = '';
// Object.defineProperty(book, 'name', {
// 	set: function(value){
// 		name = value;
// 		console.log(name+'被修改了');
// 	},
// 	get: function(){
// 		console.log('输出name');
// 		return '<' + name + '>'
// 	}
// });
// book.name = '哈利波特';
// console.log(book.name);
// 
function defineReactive(data,key,val) {
	observe(val);//这里的值是新传过来的值
	Object.defineProperty(data,key,{
        enumerable:true,         //当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。
        configurable:true,       //当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中
        get:function() {
            return val;
        },
        set:function(newVal) {
            val = newVal;
            console.log('属性'+key+'已经被监听,现在值为:"'+newVal.toString()+'"');
        }
    })
}

function observe(data) {
	if(!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach(function(key){
        defineReactive(data,key,data[key]);
    });
}

var library = {
    book1: {
        name: ''
    },
    book2: ''
};
observe(library);
library.book1.name = 'vue权威指南'; // 属性name已经被监听了，现在值为：“vue权威指南”
library.book2 = '没有此书籍';  // 属性book2已经被监听了，现在值为：“没有此书籍”