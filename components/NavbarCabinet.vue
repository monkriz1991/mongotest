<script setup>
const { data: user, signOut } = useAuth();

const Exit = async () => {
  await signOut({ redirect: false });
  if (!useAuth().data.value) {
    return navigateTo("/");
  }
};
</script>
<template>
  <div class="container">
    <nav
      class="navbar mb-6 pt-2 pb-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link class="navbar-item is-uppercase has-text-weight-bold" to="/"
          >Logo</nuxt-link
        >
      </div>
      <div class="navbar-menu">
        <!-- <div class="navbar-start">
          <nuxt-link class="navbar-item ml-6" :to="`/mongo/`">mongo</nuxt-link>
        </div> -->
        <div class="navbar-start">
          <MenyNav/>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-primary" to="/cabinet/"
              >Cabinet</nuxt-link
            >
            <button @click="Exit" class="button">Exit</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
