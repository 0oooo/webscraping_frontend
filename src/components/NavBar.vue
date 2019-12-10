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

import routes from '../routes'

const links = routes.filter((route) => {
  return !route.hidden;
})

export default {
  data: () => ({
      links
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
