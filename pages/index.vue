<script setup>
import { Vue3Lottie } from "vue3-lottie";
definePageMeta({
  title: "My index page",
  layout: "default",
});
const { data: main, refresh } = await useFetch("/api/main/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});
</script>
<template>
  <div class="container">
    <!-- <left-bar /> -->
    <div>
      <!-- <h1 class="">Hello !</h1> -->
      <div class="slider">
        <div class="one-block" v-for="item in main.one" :key="item">
          <div class="rating-circle">
            <div class="star-icon">
              <Icon name="material-symbols:kid-star-outline" />
            </div>
            <span>{{ item.raiting }}</span>
          </div>
          <img :src="item.img" :alt="item.title" />
          <nuxt-link :to="'/post/' + item.link">
            <div class="one-block-inf">
              <strong>{{ item.title }}</strong>
              <span>{{ item.description }}</span>
            </div>
          </nuxt-link>
        </div>
        <div class="two-block" v-for="item in main.two" :key="item">
          <img :src="item.img" :alt="item.title" />
          <nuxt-link :to="'/post/' + item.link">
            <div class="one-block-inf">
              <strong>{{ item.title }}</strong>
              <span>{{ item.description }}</span>
            </div>
          </nuxt-link>
          <!-- <div class="play-icon">
            <Icon name="solar:play-circle-bold" />
          </div> -->
        </div>
      </div>
      <clientOnly>
        <Vue3Lottie
          animation-link="https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json"
          :height="200"
          :width="200"
        />
      </clientOnly>
      <div class="img-test" v-for="item in main.three" :key="item">
        <img :src="item.img" :alt="item.title" />
      </div>
    </div>
  </div>
</template>
