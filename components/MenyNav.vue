<script setup>
const visible = ref(false);
const {
  data: category,
  error,
  refresh,
} = await useFetch("/api/category/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

function onClickOutside(event, el) {
  console.log(event);
}
</script>

<template>
  <div class="meny-nav">
    <button class="button" @click="visible = !visible">Meny</button>
    <client-only>
      <div class="meny-nav-cat" v-show="visible == true">
        <div v-click-outside="onClickOutside" v-if="category">
          <div v-for="item in category" :key="item._id">
            <nuxt-link :to="`/catalog/` + item.kirilica">
              {{ item.name }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>
<style>
.meny-nav {
  position: relative;
}
.meny-nav-cat {
  position: absolute;
  background: #fff;
  padding: 30px;
  border-radius: 14px;
  width: 430px;
}
</style>
