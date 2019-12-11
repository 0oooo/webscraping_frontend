<template>
  <div class="screeningList">
    <ul>
      <li v-for="screening in screenings"
          :key="screening.screening_id">{{screening.screening_id}}</li>
    </ul>
  </div>
</template>

<script>

function splitByVenue(screenings){
  const result = {};
  screenings.forEach(screening => {
    if(!result[screening.cinema_name]){
      result[screening.cinema_name] = [];
    }
    result[screening.cinema_name].push(screening);
    });
    return result;
}

function splitByDate(screenings){
  const result = {};
  screenings.forEach(screening => {
    const date = new Date(screening.screening_datetime); // returns Thu Dec 05 2019 14:50:00 GMT+0000 (Greenwich Mean Time)
    const dateString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    //const timeString = date.getHour() + ":" + date.getMinutes();

    if(!result[dateString]){
      result[dateString] = [];
    }
    result[dateString].push(screening);
  });
  return result;
}

export default {
  props: ["screenings"],
  data: () => ({

  }),
  created: function() {
    const screeningsByVenue = splitByVenue(this.screenings);
    console.log(screeningsByVenue);
    const venueKeys = Object.keys(screeningsByVenue);
    venueKeys.map(key => {
       screeningsByVenue[key] = splitByDate(screeningsByVenue[key]);
    });
    this.screenings =
    console.log("THE BIG RESULT : ", screeningsByVenue)
  }
}
</script>

<style scoped>
</style>
