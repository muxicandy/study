<template>
  <div>
  	<MHeader :back="true">首页</MHeader>
  	<div class="content">
  		<template>
  			<div v-if="loading" class="loading">疯狂加载中</div>
  			<template v-else>
  				<Swiper :swiperSlides = "sliders"></Swiper>
		  		<div class="container">
		  			<h3>热门图书</h3>
			  		<ul >
			  			<li v-for="hot in hotBooks">
			  				<img :src="hot.bookCover">
			  				<b>{{hot.bookName}}</b>
			  			</li>
			  		</ul>
		  		</div>
  			</template>
  		</template>
  	</div>
  </div>
</template>
<script>
	import MHeader from '../base/MHeader.vue';
	import Swiper from '../base/Swiper.vue';
	import {getAll} from '../api';
	export default {
		data() {
			return {sliders: [], hotBooks:[], loading: true}
		},
		components: {
			MHeader,
			Swiper
		},
		created() {
			this.getData();
		},
		methods: {
			async getData() {
				let [sliders, hotBooks] = await getAll();
				this.sliders = sliders;
				this.hotBooks = hotBooks;
				this.loading = false;
			}
		}
	}
</script>
<style scoped lang="less">
	h3 {
		color: #999;
		padding: 5px 0;
	}
	.container {
		width: 90%;
		margin: 0 auto;
		ul {
			display: flex;
			flex-wrap: wrap;//默认不换行
			li{
				width: 50%;
				text-align: center;
				img {
					width: 100%;
				}	
			}
		}
	}
	.loading {
		text-align: center;
		color: red;
		line-height: 80px;
	}
</style>