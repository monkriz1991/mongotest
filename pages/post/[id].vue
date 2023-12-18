<script setup>
const route = useRoute()
const postObject = ref({})
const {data:post} = useFetch(() =>"/api/postitem/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: route.params.id,
  })
if(post.value){
    postObject.value = post.value[0]
}
</script>

<template>
    <div class="container">
        <div class="content">
       <div class="post">
        <div v-for="item in post" :key="item">
            <h1>{{ item.title }}</h1>
      
        <div class="post-img" >
            <img :src="item.img"/>
        </div>
        <p>
            {{ item.text }}
        </p>
        <div v-html="item.description">
        </div>
    </div>
    </div> 
</div>
    </div>
</template>

<style>
.post-img{
    width: 200px;
    height: 200px;
    border-radius: 12px;
    margin: 0 0 30px;
}
.post-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;

}
</style>