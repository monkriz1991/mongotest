<script setup>
const { data: posts, error, refresh } = await useFetch("/api/posts/");
</script>
<template>
  <div class="container">
    <h1>In</h1>
    <div class="block" v-for="item in posts" :key="item._id">
      <p>
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<style>
button {
  cursor: pointer;
}
.container {
  max-width: 1160px;
  margin: 0 auto;
}
.block {
  float: left;
  width: 100%;
  margin: 0 0 15px;
  border-radius: 5px;
  padding: 20px;
  background: #f9f9f9;
}
</style>
