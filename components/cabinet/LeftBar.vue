<template>
  <div class="meny-cabinet">
    <aside class="menu">
      <p class="menu-label">Меню</p>
      <ul class="menu-list">
        <li><nuxt-link to="/cabinet/">Главная</nuxt-link></li>
        <li><nuxt-link to="/cabinet/post">Post</nuxt-link></li>
        <li><nuxt-link to="/cabinet/category">Category</nuxt-link></li>
      </ul>
      <p class="menu-label">Transactions</p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
  </div>
</template>
