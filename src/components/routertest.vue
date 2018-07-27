<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
       <li>
        <router-link to="/">Go to /</router-link>
      </li>
    </ul>
    <div>
      <p>test text in here!</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Router Animation !'
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
