<template>
  <div>
    {{query}}
  </div>
</template>

<script>
export default {
  props: ['query'],
  data: ()=>({
      movies:[
        {
          id: 1,
          title: 'aaaaaa'
        },
        {
          id: 2,
          title: 'bbbbb'
        },
        {
          id: 3,
          title: 'ccccccc'
        },
        {
          id: 4,
          title: 'ddddddd'
        },
        {
          id: 5,
          title: 'eeeeeee'
        },
        {
          id: 6,
          title: 'fffffff'
        },
        {
          id: 7,
          title: 'gggggggg'
        },
        {
          id: 8,
          title: 'hhhhhhhh'
        }
      ]
  })
}
</script>

<style scoped>

</style>
