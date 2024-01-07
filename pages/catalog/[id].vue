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
        <div class="column is-3">
          <div class="post-top">
            <div class="post-top-item">
              <div v-for="item in post" :key="item">
                <nuxt-link :to="`/post/` + item._id" class="post-top-link">
                  <!-- <div class="post-img">
                    <img :src="item.img" />
                  </div> -->
                  <strong>
                    {{ item.title }}
                  </strong>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-9">
          <div class="block" v-for="item in post" :key="item._id">
            <nuxt-link :to="`/post/` + item._id" class="post-a-item">
              <div class="block-img">
                <img :src="item.img" />
              </div>
              <div class="block-desc">
                <strong>
                  {{ item.title }}
                </strong>
                <span>
                  {{ item.preview }}
                </span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
