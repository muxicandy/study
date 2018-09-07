<template>
  <div class="detail-content">
  	<MHeader :back="true">详情</MHeader>
  	<div class="detail">
  		<h2>书的名称</h2>
  		<input type="text" v-model="book.bookName">
  		<h2>书的信息</h2>
  		<input type="text" v-model="book.bookInfo">
  		<h2>书的价格</h2>
  		<input type="text" v-model="book.bookPrice">
  		<button @click="update(bid,book)">确认修改</button>
  	</div>
  </div>
</template>
<script>
	import MHeader from '../base/MHeader';
	import {getOneBook,updateBook} from '../api';
	export default {
		data(){
			return {book: {}}
		},
		computed: {
			bid(){
				return this.$route.params.bid;
			}
		},
		created(){
			this.getData();
		},
		methods:{
			async getData() {
				this.book = await getOneBook(this.bid);
				//如果是空对象，需要跳转回列表页
				Object.keys(this.book).length > 0?void 0:this.$router.push('/list');
			},
			async update(){//修改图书信息
				await updateBook(this.bid,this.book);
				this.$router.push('/list');
			}
		},
		components: {
			MHeader
		}
	}
</script>
<style scoped lang="less">
	.detail-content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		background-color: #fff;
		.detail {
			padding: 60px 17px 0 17px;
			input {
				border-color: #f1f1f1;
				height: 28px;
				line-height: 28px;
				width: 100%;
			}
			button {
				height: 30px;
				width: 60px;
				background-color: blue;
				margin-top: 30px;
				color: #fff;
				border: none;
				border-radius: 4px;
			}
		}
	}
</style>