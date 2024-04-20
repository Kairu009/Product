<script setup>
import { RouterLink, RouterView } from "vue-router";
import Title from "./components/Title.vue";
</script>

<template>
  <header>
    <div class="logo-wrapper">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="65"
        height="65"
      />
      <Title msg="Product CRUD App" />
    </div>

    <div class="nav-wrapper">
      <nav>
        <RouterLink to="/">Shelf</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.6;
  max-height: 100vh;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  margin-right: 1rem;
}

.nav-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

nav {
  margin-bottom: 1.5rem;
  font-size: 11px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
