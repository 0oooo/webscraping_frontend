<template>

  <ul>
    <li
    v-for="(link) in links"
    v-bind:key="link.id">
      <router-link :to="link.path">{{ link.name }}</router-link>
    </li>
  </ul>
</template>

<script>

import uuid from 'uuid';

export default {
  data: () => ({
      links: [
        {
          id: uuid(),
          name: 'Search',
          path: "/search"
        },
        {
          id: uuid(),
          name: 'Today',
          path: "/today"
        },
        {
          id: uuid(),
          name: 'All Movies',
          path: "/all"
        }
      ]
  }),
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  text-align:right;
}

li {
  display: inline-block;
  margin: 0 10px;
  color: red;
}

a, a:visited, a:active {
  color: #ff968b;
  text-decoration:none;
  text-transform: lowercase;
  letter-spacing: 0.01em;
}

.router-link-exact-active {
  border-bottom: 1px solid #ff968b;
}

</style>
