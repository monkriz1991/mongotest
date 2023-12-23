<script setup>
const route = useRoute();
const { data: post } = await useFetch("/api/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: { ParamsCat: route.params.id },
});
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="columns">
        <div class="column is-12">
          <h1>Post</h1>
        </div>
      </div>
      <div class="columns">
        <div class="column is-8">
          <div class="block" v-for="item in post" :key="item._id">
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
        <div class="column is-4">
          <div class="post-top">
            <div class="post-top-item">
              <strong> title </strong>
              <span> description </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
