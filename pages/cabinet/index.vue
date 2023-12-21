<script setup>
definePageMeta({
  middleware: "auth",
  title: "My home page",
  layout: "custom",
});
const { data, signOut } = useAuth();
</script>
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <h1>Cabinet</h1>
        <div>
          <div v-for="item in data.user" :key="item">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="column is-4">
        <cabinet-LeftBar />
      </div>
    </div>
  </div>
</template>
