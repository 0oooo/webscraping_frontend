<template>
  <div class="screeningList">
    <div v-for="(venueScreenings, venueName) in screenings" :key="venueName">
      <h3>{{venueName}}</h3>
      <div v-for="(dateScreenings, date) in venueScreenings" :key="date">
        <h4>{{date}}</h4>
        <div class="container-screening-block" v-for="(screening, index) in dateScreenings" :key="index">
          <a :href="screening.url">
            <div class="screening-block">
                {{getTime(screening.screening_datetime)}}
              </div>
          </a>
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

a{
  text-decoration: none;
  color:#f1f1f1;
}

.container-screening-block{
  display:inline-block;
}

.screening-block{
  border: 1px solid #f1f1f1;
  border-radius:3px;
  background-color: rgba(0,0,0, 0.4);
  margin: 2px 10px;
  height: 40px;
  width: 75px;
  text-align: center;
  padding-top: 20px;
}

h3{
  border-bottom: 2px solid #6788bd;
margin: 30px 30px;
padding-bottom: 10px;
}

</style>
