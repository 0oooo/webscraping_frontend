<template>
  <div>
    <SearchBar class="search" :callback="handleSearch"/>
    <SearchResult class="search" :results="result"></SearchResult>
  </div>
</template>

<script>
import SearchBar from '../SearchBar.vue'
import SearchResult from '../SearchResult.vue'
import axios from 'axios';

const movie_endpoint = 'http://localhost:3000/movies?page=1&limit=12&search=';


export default {
  components: {
    SearchBar,
    SearchResult
  },
  data: () => ({
    result: []
  }),
  methods: {
    handleSearch(value) {
      const _this = this;
      axios.get(movie_endpoint + value)
      .then(function(response){
        const movies = response.data.data.map((movie) => {
          const newMovie = {
            id: movie.id,
            title: movie.movie_name.replace(/_/g, ' ').toUpperCase(),
            image: movie.image_url
          }
          return newMovie;
        });
        _this.result = movies;
      })
    }
  }
}
</script>

<style scoped>

.search{
  float:left;
}

</style>
