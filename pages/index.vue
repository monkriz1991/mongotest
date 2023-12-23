<script setup>
import { Vue3Lottie } from "vue3-lottie";
definePageMeta({
  title: "My index page",
  layout: "default",
});
</script>
<template>
  <div class="container">
    <!-- <left-bar /> -->
    <div>
      <!-- <h1 class="">Hello !</h1> -->
      <div class="slider">
        <div class="one-block">
          <div class="rating-circle">
            <div class="star-icon">
              <Icon name="material-symbols:kid-star-outline" />
            </div>
            <span>9,4</span>
          </div>
          <img
            src="https://www.team17.com/wp-content/uploads/2021/08/Trepang2-Snippet-image-800x500.png"
            alt=""
          />
          <div class="one-block-inf">
            <strong>Title</strong>
            <span>Descrition</span>
          </div>
        </div>
        <div class="two-block">
          <img
            src="https://st2.depositphotos.com/3584689/11223/i/450/depositphotos_112238158-stock-illustration-sci-fi-gaming-character-in.jpg"
            alt=""
          />
          <div class="one-block-inf">
            <strong>Title</strong>
            <span>Descrition</span>
          </div>
          <div class="play-icon">
            <Icon name="solar:play-circle-bold" />
          </div>
        </div>
      </div>
      <clientOnly>
        <Vue3Lottie
          animation-link="https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json"
          :height="200"
          :width="200"
        />
      </clientOnly>
      <div class="img-test">
        <img
          src="https://drive.google.com/uc?export=view&id=1pqiqUPdHuY5whzeU-OeIts0PDw8N71uR"
          alt=""
        />
      </div>
      <div class="img-test">
        <img
          src="https://drive.google.com/uc?export=view&id=1og7flcjtz4B1n3uenBZ95MHUT4GbX6oh"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
