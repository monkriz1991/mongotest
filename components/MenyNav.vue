<script setup>
const visible = ref(false)
const { data: category, error, refresh } = await useFetch("/api/category/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        },
    });
</script>

<template>
    <div class="meny-nav">
        <button class="button" @click="visible = !visible">Meny</button>
        <div class="meny-nav-cat" v-show="visible==true">
            <div v-if="category">
                <div v-for="item in category" :key="item._id">
                   <nuxt-link :to="`/catalog/`+item.kirilica"> {{ item.name }}</nuxt-link>
                </div>
            </div>  
        </div>
    </div>
</template>
<style>
.meny-nav{
    position: relative;
}
.meny-nav-cat{

}
</style>