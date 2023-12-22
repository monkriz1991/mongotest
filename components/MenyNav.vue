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
  if(event.target.className!=='button button-meny'){
      if(event.target.className!=='meny-nav-cat'){
        visible.value = false
    }
  }
}
</script>

<template>
  <div class="meny-nav">
    <button class="button button-meny" @click="visible = !visible">Meny</button>
      <div class="meny-nav-cat"  v-show="visible == true">
        <div class="meny-nav-show" v-if="category" v-click-outside="onClickOutside">
          <div v-for="item in category" :key="item._id">
            <nuxt-link :to="`/catalog/` + item.kirilica" @click="visible = false">
              {{ item.name }}</nuxt-link
            >
          </div>
        </div>
      </div>
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
