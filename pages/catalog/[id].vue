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
      <h1>Catalog</h1>
      {{ post }}
    </div>
  </div>
</template>
