<template>
  <div id="app">
    <header>
      <h1>Movies <small>now</small></h1>
    </header>
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>

html, body{
  min-height: 100vh;
}

body {
  background-image: url("./assets/cinema-seats-bg.jpg");
  padding: 10px 60px;
}

header{
  text-align: left;
  border-bottom: 1px solid red;
  color: red;
}

h1{
  margin: 0;
  font-weight: 100;
  font-size:3.5rem;
  line-height: 1.3;
}

small{
  text-transform: uppercase;
  font-weight:1000;
  font-size:1rem;
  padding-bottom: 10px;
  margin-left: -10px;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
