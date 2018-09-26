import * as Types from '../action-types';
function todo(state=[], action){
	switch(action.type){
		case Types.ADD_TODO:
			return [...state,...action.text];
	}
	return state;//******************返回state
}
export default todo