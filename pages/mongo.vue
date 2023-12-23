<script setup>
const {
  data: posts,
  error,
  refresh,
} = await useFetch("/api/posts/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});
</script>
<template>
  <div class="container">
    <div class="content">
      <h1>Post</h1>
      <div class="block" v-for="item in posts" :key="item._id">
        <nuxt-link :to="`/post/` + item._id">
          <div class="block-img">
            <img :src="item.img" />
          </div>
          <p>
            {{ item.title }}
          </p>
          <p>
            {{ item.info }}
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
