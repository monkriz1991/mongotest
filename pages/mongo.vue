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
.block-img {
  float: left;
  width: 250px;
  height: 150px;
  margin: 0 20px 0 0;
}
.block-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: cover;
  border-radius: 12px;
}
</style>
