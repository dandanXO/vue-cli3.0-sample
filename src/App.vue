<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/hsr-Mu4Mdwk?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" ></iframe>
    <HelloWorld :msg="msg"/>
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  data () {
      return {
        msg: 'testing data prop from app-root'
      }
    },
  components: {
    HelloWorld
  }
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
