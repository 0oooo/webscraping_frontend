<template>
  <div class="container">
    <div class="vue">Vue movie</div>
    <ScreeningList v-bind:screenings="screenings"></ScreeningList>
    <div class="cineworld">Cineworld</div>
    <div class="movie">
      <img :src=movie.image_url />
      <h2 >{{movie.movie_name.replace(/_/g, ' ').toUpperCase()}}</h2>
      <p>
        {{movie.description}}
      </p>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import ScreeningList from '../ScreeningList';

const movie_id_endpoint = 'http://localhost:3000/movies/';
const screening_endpoint = 'http://localhost:3000/screenings';

function getMovieById(component, id) {
  axios.get(movie_id_endpoint + id )
    .then(function(response) {
      component.movie = response.data.data.pop()
    })
    .catch((error) => {
      console.error('Error! Could not reach the API. ' + error);
    });
}

function getScreeningByMovieIdAndCompany(component, movie_id, company){
  console.log(screening_endpoint + '?movie=' + movie_id + '&company=' + company);
  axios.get(screening_endpoint + '?movie=' + movie_id + '&company=' + company)
  .then(function(response){
    component.screenings = response.data.data;
  })
  .catch((error) => {
    console.error('Error! Could not reach the API. ' + error);
  });
}

export default {

  data: () => ({
      movie:{},
      screenings:[]
  }),
  components:{
    ScreeningList
  },
  methods: {  },
  // https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
  created: function() {
    getMovieById(this, this.$route.params.id);
    getScreeningByMovieIdAndCompany(this, this.$route.params.id, 'Vue');
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 70px;
  grid-row-gap: 20px;
}

.vue, .cineworld{
  grid-column: span 2;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.container > * {
  color: #ff968b;
  border: 1px solid blue;
}
</style>
