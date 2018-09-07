<template>
  <div>
  	<MHeader :back="true">收藏</MHeader>
  	<div class="content">
	  	<div v-for="item in cartList">
	  		<img v-lazy="item.bookCover" style="width: 100%;height:100px">
	  		<h3>{{item.bookName}}</h3>
	  		<div>
		  		<div class="button"> - </div>
				当前：{{item.bookCount}}
				<div class="button"> + </div>
			</div>
	  	</div>
	  	<div>共{{count}}本</div>
	 </div>
  </div>
</template>
<script>
	import MHeader from '../base/MHeader.vue';
	import {mapState,mapGetters} from 'vuex';
	export default {
		computed:{
			...mapState(['cartList']),
			...mapGetters(['count'])
		},
		components:{
			MHeader
		}
	}
</script>
<style scoped lang="less">
	.content {
		position: fixed;
	    width: 100%;
	    top: 40px;
	    bottom: 50px;
	    overflow: auto;
	    text-align:center;
	}
	.button{
		display: inline-block;
	    padding: .3em .5em;
	    background-image: linear-gradient(#ddd, #bbb);
	    border: 1px solid rgba(0,0,0,.2);
	    border-radius: .3em;
	    box-shadow: 0 1px white inset;
	    text-align: center;
	    text-shadow: 0 1px 1px black;
	    color:white;
	    font-weight: bold;
	}
	.button:active{
		box-shadow: .05em .1em .2em rgba(0,0,0,.6) inset;
	    border-color: rgba(0,0,0,.3);
	    background: #bbb;
	}
</style>