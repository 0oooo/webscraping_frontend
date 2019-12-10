<template>
  <div class="screeningList">
    <ul>
      <li v-for="screening in screenings"
          :key="screening.id">{{screening.id}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["screenings"],
  created: function() {

  }
}
</script>

<style scoped>
</style>
