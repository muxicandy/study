import {createStore} from 'redux';
import reducer from './reducer';
//为了在控制台里可以打印store中的内容
let store = createStore(reducer);
window._store = store;
export default store