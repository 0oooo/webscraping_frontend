<template>
  <div>
    <div class="container">

      <Movie
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :image="movie.image"
      :id="movie.id">
      </Movie>
    </div>
    <button class="ghost-button-size-transition" :disabled="page == 1" v-on:click="handlePrevious">Previous</button>
    <button class="ghost-button-size-transition" :disabled="page == totalPages" v-on:click="handleNext">Next</button>
  </div>

</template>

<script>
import Movie from './Movie';
import axios from 'axios';
const today_endpoint = 'http://localhost:3000/movies?';
const limit = 12;

function getTodaysMovies(component, page) {
  axios.get(today_endpoint + '&page=' + page + '&limit=' + limit )
    .then(function(response) {
      component.totalPages = Math.ceil(response.data.total / limit);
      let newMovies = response.data.data;

      // https://vuejs.org/v2/guide/list.html#Replacing-an-Array
      component.movies = newMovies.map((movie) => {
        const newMovie = {
          id: movie.id,
          title: movie.movie_name.replace(/_/g, ' ').toUpperCase(),
          image: movie.image_url
        }
        return newMovie;
      });
    })
    .catch((error) => {
      console.error('Error! Could not reach the API. ' + error);
    });
}

export default {
  components: {
    Movie
  },
  data: () => ({
    movies: [],
    page: 1,
    totalPages: 0
  }),
  methods: {
    handlePrevious: function(){
      if(this.page > 1){
          this.page--;
          getTodaysMovies(this, this.page);
      }
    },
    isPreviousDisabled: function(){
      return (this.page === 1)
    },
    handleNext: function(){
      if(this.page < this.totalPages){
        this.page++;
        getTodaysMovies(this, this.page);
      }
    }
  },
  // https://vuejs.org/v2/guide/computed.html#Watchers
  created: function() {
    getTodaysMovies(this, 1, 12);
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.container {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 20px;
}

.ghost-button-size-transition {
  background: transparent;
  display: inline-block;
  width: 200px;
  height: 45px;
  line-height: 25px;
  margin: 0 auto;
  padding: 8px;
  color: #fff;
  border: 2px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: width 0.3s ease-out,
              height 0.3s ease-out,
              line-height 0.3s ease-out;
}
.ghost-button-size-transition:hover,
.ghost-button-size-transition:active {
  transition: width 0.1s ease-in,
              height 0.1s ease-in,
              line-height 0.1s ease-in;
}
</style>
