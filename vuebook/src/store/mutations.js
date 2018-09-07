import * as Types from './mutations-type';

const mutations = {
	[Types.ADD_CART](state, book){
		//如果没有，数量为1
		let product = state.cartList.find(item=>item.bookId===book.bookId);
		if (product) {
			product.bookCount += 1;
			state.cartList = [...state.cartList];
		} else {
			book.bookCount = 1;
			//将原有数据改变或者可以替换的
			//用新数组替换成老数组
			state.cartList = [...state.cartList,book];
			// state.cartList.push(book);
		}
	}
};
export default mutations;