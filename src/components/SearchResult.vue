<template>
  <div class="container">
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

a{
  text-decoration: none;
}
.container {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 20px;
}

</style>
