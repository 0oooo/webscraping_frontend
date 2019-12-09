<template>
  <div class="search">
      <div class="search-title">
        I want to watch ...
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="search-bar">
          <span class="fa fa-search"></span>
          <input class="" v-model="search" type="text" placeholder="Mulholland Drive">
          <button type="submit" class="ghost-button">search</button>
        </div>
      </form>
  </div>
</template>

<script>
// import uuid from 'uuid';
export default {
  props: ["callback"],
  data() {
    return{
      search: ''
    }
  },
  methods: {
    handleSubmit () {
      this.callback(this.search);
    }
  }
}
</script>

<style scoped>

@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

.search{
  float: left;
}

.search-title{
  font-size: 24px;
  text-align: left;
  margin: 20px 1px;
  color: #ff968b;
  font-weight: bold;
}

.search-bar {
  position: relative;
}

.search-bar input {
  text-indent: 30px;
}

.search-bar .fa-search {
  position: absolute;
  top: 1.5vw;
  left: 1vw;
  font-size: 20px;
  color:#767676;
}

input {
  padding:8px;
  display:block;
  border:none;
  border-bottom:1px solid #ccc;
  border:1px solid #ccc!important;
  width:50vw;
  height: 3vw;
  font-size:22px;
}

.ghost-button{
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  margin-top: 2vw;
  background-color: transparent;
  display: inline-block;
  width: 100px;
  padding: 8px;
  color: #ff968b;
  border: 1px solid #ff968b;
  border-radius: 5px;
  text-align: center;
  outline: none;
  text-decoration: none;
  float:left;
}

.ghost-button:hover,
.ghost-button:active {
  background-color: #ffc5bf;
  color: #000;
}
.ghost-button:active{
  background-color: #ffdfdb;
}

</style>
