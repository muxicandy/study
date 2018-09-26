import * as Types from '../action-types';
//ActionCreater就是一个普通的函数，返回一个action对象
function add(count){
	return {type:Types.INCREMENT,count}
}
function minus(count){
	return {type:Types.DECREMENT,count}
}

export {add,minus}