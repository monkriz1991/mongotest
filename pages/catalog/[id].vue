<script setup>
const route = useRoute()
console.log(route.params.id)
</script>
  
<template>
    <div class="container">
        <div class="content">
            <h1>Catalog</h1>
            {{ route }}
        </div>
    </div>
</template>