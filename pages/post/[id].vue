<script setup>
const route = useRoute();
const postObject = ref({});
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
                <div class="post">
                    <div v-for="item in post" :key="item">
                    <h1>{{ item.title }}</h1>

                    <div class="post-img">
                        <img :src="item.img" />
                    </div>
                    <p>
                        {{ item.text }}
                    </p>
                    <div v-html="item.description"></div>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="post-top">
                    <div class="post-top-item">
                        <strong>
                            title
                        </strong>
                        <span>
                            description
                        </span>
                    </div>    
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style>
.post h1{
    font-size: 42px;
    margin: 0 0 35px;
    font-weight: 800;
}
.post-img {
    width: 100%;
    height: 460px;
    border-radius: 12px;
    margin: 0 0 60px;
}
.post-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.post-top{
    width: 100%;
}
.post-top-item{
    background: #ffffff;
    height: 200px;
    border-radius: 14px;
    padding: 30px;
}
</style>
