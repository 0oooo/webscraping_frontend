<template>
  <div>
    <SearchBar v-bind:callback="handleSearch"/>
    <SearchResult v-bind:query="result"></SearchResult>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import SearchResult from './SearchResult.vue'
export default {
  components: {
    SearchBar,
    SearchResult
  },
  data() {
    return {
      result: "",
      title: "My title"
    };
  },
  methods: {
    handleSearch(value) {
      this.result = value
    }
  }
}
</script>

<style scoped>

</style>
