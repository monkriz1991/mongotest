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
    <div class="slider">
      <div class="slider-one">
        <Swiper
          :height="300"
          :modules="[
            SwiperAutoplay,
            SwiperEffectCreative,
            SwiperNavigation,
            SwiperPagination,
          ]"
          :slides-per-view="1"
          :navigation="{
            next: true,
            prev: true,
          }"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide
            v-for="(slide, idx) in main.one"
            :key="idx"
            :pagination="{ clickable: true, dynamicBullets: true }"
          >
            <div class="one-block">
              <img :src="slide.img" :alt="slide.title" />
              <nuxt-link :to="'/post/' + slide.link">
                <div class="one-block-inf">
                  <strong>{{ slide.title }}</strong>
                  <span>{{ slide.description }}</span>
                </div>
              </nuxt-link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="two-block" v-for="item in main.two" :key="item">
        <img :src="item.img" :alt="item.title" />
        <nuxt-link :to="'/post/' + item.link">
          <div class="one-block-inf">
            <strong>{{ item.title }}</strong>
            <span>{{ item.description }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-fifth">
        <div class="img-cat-index" v-for="item in main.three" :key="item">
          <nuxt-link :to="'/post/' + item.link">
            <img :src="item.img" :alt="item.title" />
            <div class="img-cat-index-inf">
              <span class="icon">
                <Icon class="modal-b-svg" name="carbon:document-pdf" />
              </span>
              <strong>{{ item.title }}</strong>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
