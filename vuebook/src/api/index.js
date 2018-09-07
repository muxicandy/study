import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
//增加默认的请求的路径
axios.interceptors.response.use((res)=>{
	return res.data;//在这里拦截结果，统一处理成res.data
	//拦截器
});
//获取轮播图数据,返回的是一个promise对象
export let getSliders = () =>{
	return axios.get('/sliders');
};
//获取热门图书接口
export let getHotBook = ()=>{
	return axios.get('/hot');
};
//获取全部图书
export let getBooks = ()=> {
	return axios.get('/book');
}
//删除某一本图书
export let removeBook = (id)=>{
	return axios.delete(`/book?id=${id}`);
}
//获取一本图书
export let getOneBook = (id)=>{
	return axios.get(`/book?id=${id}`);
}
//修改一本图书
export let updateBook = (id, data)=>{
	return axios.put(`/book?id=${id}`,data);
};
//添加一本书
export let addBook = (book)=>{
	return axios.post('/book', book);
}
export let getAll = ()=>{
	return axios.all([getSliders(),getHotBook()]);
}
//根据偏移量返回对应的数据5=>5-10个
export let pagination = (offset, pageSize)=>{
	return axios.get(`page?offset=${offset}&pageSize=${pageSize}`);
}