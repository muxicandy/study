//管理员
let initState = {
	todos: [
		{isSelected: false,title: '今天吃药了吗？', id:1},
		{isSelected: true,title: '今天吃药了吗2？', id:2}
	]
};
function reducer(state=initState,action){
	return state;
}
export default reducer;
