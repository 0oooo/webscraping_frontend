<template>
  <div class="screeningList">
    <ul>
      <li v-for="(venueScreenings, venueName) in screenings" :key="venueName">
            <h4>{{venueName}}</h4>
            <ul>
              <li v-for="(dateScreenings, date) in venueScreenings" :key="date">
                <h5>{{date}}</h5>
                <ul>
                  <li v-for="(screening, index) in dateScreenings" :key="index">
                    <a :href="screening.url">{{getTime(screening.screening_datetime)}}</a>
                  </li>
                </ul>
              </li>
            </ul>
        </li>
    </ul>
  </div>
</template>

<script>

//todo:remove the old screenings


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
</style>
