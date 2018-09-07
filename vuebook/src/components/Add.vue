<template>
  <div class="detail-content">
  	<MHeader :back="true">添加书籍</MHeader>
  	<div class="detail">
  		<h2>书的名称</h2>
  		<input type="text" v-model="book.bookName">
  		<h2>书的信息</h2>
  		<input type="text" v-model="book.bookInfo">
  		<h2>书的价格</h2>
  		<input type="text" v-model="book.bookPrice">
  		<h2>书的图片</h2>
  		<input type="text" v-model="book.bookCover">
  		<button @click="add()">确认添加</button>
  	</div>
  </div>
</template>
<script>
	import MHeader from '../base/MHeader';
	import {addBook} from '../api';
	export default{
		data(){
			return {book: {}}
		},
		components: {
			MHeader
		},
		methods: {
			async add(){
				await addBook(this.book);
				this.$router.push('/list');
			}
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