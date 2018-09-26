//获取轮播图
import axios from './index';
//每个接口获取的都是promise
export function getSliders(){
	return axios.get('/sliders');
}
//获取所有课程
export function getLessons(offset,limit,type){
	return axios.get(`/lesson/${offset}/${limit}/${type}`);
}