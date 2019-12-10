<template>
<router-link :to="movie_url">
  <div class="ticket">
    <img :src="image" />
    <h3>
      {{title}}
    </h3>
  </div>
</router-link>
</template>

<script>
export default {
  props: ["image", "title","id"],
  data: () => {
    return {
      movie_url: ""
    }
  },
  created: function() {
    this.movie_url = "movie/" + this.id;
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}

h3 {
  color: #ff968b;
}
</style>
