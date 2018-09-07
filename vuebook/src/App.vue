<template>
  <div id="app">
    <transition name="test">
      <keep-alive>
    	 <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="test">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>
<script>
  import Tab from './base/Tab.vue';
  export default {
    name:'app',
    components: {
      Tab
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  ul,li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  input,button {
    -webkit-apperance: none;
  }
  .content {
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }
  .test-enter{
    opacity: 0;
  }
  .test-enter-active {
    transition: all .3s linear;
  }
  .test-leave-active {
    opacity: 0;
    transition: all .3s linear;
  }
</style>

