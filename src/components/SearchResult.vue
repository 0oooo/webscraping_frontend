<template>
  <div>
    <!-- <div v-for="result in results" :key="result.id">
      <router-link :to="link.path">{{result.movie_name}}</router-link>

      </a>
    </div> -->

    <Movie
    v-for="result in results"
    :key="result.id"
    :title="result.title"
    :image="result.image"
    :id="result.id">
    </Movie>
  </div>
</template>

<script>
import Movie from './Movie';

export default {
  props: ['results'],
  data: ()=>({}),
  components: {
    Movie
  }
}
</script>

<style scoped>

</style>
