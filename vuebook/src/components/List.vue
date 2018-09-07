<template>
	<div>
  		<MHeader>列表页</MHeader>
  		<div class="content" ref="scroll" @scroll="loadMore">
		  	<ul>
		  		<router-link v-for="(book,index) in books" :key="index" tag="li" :to="{name:'detail',params:{bid:book.bookId}}">
		  			<img v-lazy="book.bookCover" alt="">
		  			<div>
		  				<h4>{{book.bookName}}</h4>
		  				<p>{{book.bookInfo}}</p>
		  				<b>{{book.bookPrice}}</b>
		  				<div class="btn-list">
		  					<button @click.stop="remove(book.bookId)">删除</button>
		  					<button @click.stop="addCart(book)">添加</button>
		  				</div>
		  			</div>
		  		</router-link>
	  		</ul>
	  		<div @click="more" class="more">加载更多</div>
  		</div>
  	</div>
</template>
<script>
	import {pagination, removeBook} from '../api';
	import MHeader from '../base/MHeader.vue';
	import * as Types from '../store/mutations-type';
	export default {
		components:{
			MHeader
		},
		data(){
			//offser代表的是偏移量，hasMore代表的是是否有更多
			return {books: [],offset: 0, hasMore: true, pageSize: 4, isLoading: true, timer: null,timer1:null}
		},
		created(){
			this.getData();
		},
		mounted(){
			let scroll = this.$refs.scroll;//获取到要拖拽的元素
			let top = scroll.offsetTop;
			let distance = 0;
			let moveFlag = false;
			scroll.addEventListener('touchstart',(e)=>{
				//滚动条在最顶端时，并且当前盒子在顶端时候，
				if (scroll.scrollTop != 0 && scroll.offsetTop == top) {
					return;
				}
				let start = e.touches[0].pageY;
				let move = (e)=>{
					moveFlag = true;
					let current = e.touches[0].pageY;
					distance = current - start;//求的拉动的距离（负数不要）
					if (distance > 0) {
						if (distance <= 50) {//如果大于50了，就是50像素
							scroll.style.top = distance + top + 'px';
						} else {
							distance = 50;
							scroll.style.top = 50 + top + 'px';
						}
					} else {
						scroll.removeEventListener('touchmove',move);
						scroll.removeEventListener('touchend',end);
					}
				};
				let end = (e)=>{
					if (!moveFlag) return;
					moveFlag = false;
					clearInterval(this.timer1);
					this.timer1 = setInterval(()=>{
						if(distance <= 0) {
							clearInterval(this.timer1);
							distance = 0;
							scroll.style.top = top + 'px';
							scroll.removeEventListener('touchmove',move);
							scroll.removeEventListener('touchend',end);
							this.books = [];
							this.hasMore = true;
							this.isLoading = true;
							this.offset = 0;
							this.getData();
							return;
						}
						distance -= 1;
						scroll.style.top = distance + top + 'px';
					},1);
				};
				scroll.addEventListener('touchmove',move);
				scroll.addEventListener('touchend',end);
			});
		},
		methods: {
			async getData(){
				if (this.hasMore && this.isLoading) {//有更多的时候获取数据
					this.isLoading = false;
					let {hasMore, books} = await pagination(this.offset, this.pageSize);
					this.books = [...this.books,...books];
					this.offset = this.books.length;//维护偏移量，就是总数的长度
					this.hasMore = hasMore;
					this.isLoading = true;
				}
			},
			async remove(id){
				await removeBook(id);
				//要删除前台数据
				this.books = this.books.filter(item=>item.bookId !== id);
			},
			more() {
				this.getData();
			},
			loadMore() {
				//触发scroll事件，可能触发n次，先进来开一个定时器，下次触发时 ，将上一个定时器清除掉
				clearTimeout(this.timer);
				this.timer = setTimeout(()=>{
					let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll;
					if (scrollTop + clientHeight + 20 > scrollHeight) {
						this.getData();
					}
				},500);
			},
			addCart(book) {
				this.$store.commit(Types.ADD_CART,book);
			}
		}
	}
</script>
<style scoped>
	.content ul{
		padding: 10px;
	}
	.content ul li{
		display: flex;
		padding: 15px 0;
		border-bottom: 1px solid #f1f1f1;
	}
	.content ul li img {
		width: 100px;
		height: 120px;
	}
	.content h4{
		font-size: 20px;
		line-height: 35px;
	}
	.content p{
		color: #2a2a2a;
		line-height: 25px;
	}
	.content b {
		color: red;
	}
	.content button{
		display: block;
		width: 60px;
		height: 28px;
		line-height: 28px;
		background: red;
		color: #fff;
		border: none;
		border-radius: 4px;
		outline: none;
	}
	.more {
		height: 40px;
		line-height: 40px;
		text-align: center;
		padding-bottom: 10px;
	}
	.btn-list {
		display: flex;
		justify-content: space-around;
	}
</style>