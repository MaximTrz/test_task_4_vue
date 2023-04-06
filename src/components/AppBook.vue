<template>
  <li>
    <a href="#">
      <h3>{{ title }}</h3>
      <p>{{ author }}</p>
      <p>{{ year }}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: "AppBook",
  props: {
    title: String,
    author: String,
    year: String,
  },
};
</script>
