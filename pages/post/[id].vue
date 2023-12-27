<script setup>
const route = useRoute();
const { data: post } = useFetch(() => "/api/postitem/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: route.params.id,
});


</script>

<template>
  <div class="container">
    <div class="content">
      <div class="columns">
        <div class="column is-8">
          <div v-for="item in post" :key="item">
            <h1>{{ item.title }}</h1>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-8">
          <div class="post">
            <div v-for="item in post" :key="item">
              <div class="post-img">
                <img :src="item.img" />
              </div>
              <p>
                {{ item.text }}
              </p>
              <div class="post-desk" v-html="item.description"></div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="post-top">
            <div class="post-top-item">
              <div v-for="item in post" :key="item">
                <!-- <div class="post-img">
                  <img :src="item.img" />
                </div> -->
                <strong>
                  {{ item.title }}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style >

</style>