<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
       <li>
        <router-link to="/routertest">Go to /routertest</router-link>
      </li>
    </ul>
    <div>
      <p>home</p>
      <div>
      <b-button @click="addcount">I am a count Button</b-button>
      
      <p>You pass {{getcount}} times</p>
      <p>defult is 25.</p>
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Router Animation !'
    }
  },
   computed:{
    getcount(){
      return this.$store.getters.getcount
    }
  },
  methods:{
    addcount(){
       this.$store.dispatch('addstore')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
