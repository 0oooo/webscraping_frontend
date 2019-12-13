<template>
  <div class="screeningList">
    <div v-for="(venueScreenings, venueName) in screenings" :key="venueName">
      <h4>{{venueName}}</h4>
      <div v-for="(dateScreenings, date) in venueScreenings" :key="date">
        <h5>{{date}}</h5>
        <div class="screening-block" v-for="(screening, index) in dateScreenings" :key="index">
          <a :href="screening.url">{{getTime(screening.screening_datetime)}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: ["screenings"],
  created: function() {},
  methods:{
    getTime(dateToFormat){
      const date = new Date(dateToFormat);
      const hour = date.getHours();
      let min = "0" + date.getMinutes();
      min = min.slice(-2);

      return (hour +  ":" + min);
    }
  }
}
</script>

<style scoped>
ul, li{
  list-style:none;
}

.screening-block{
  border: 1px solid blue;
  background-color: white;
  display:inline-block;
  margin: 0 10px;
  text-decoration: none;
}

h4{

}

</style>
