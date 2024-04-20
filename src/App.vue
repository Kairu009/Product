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

    <router-view v-slot="{ Component }">
    <transition name="router-transition" mode="out-in">
      <component :is="Component" class="pop-in"/>
    </transition>
  </router-view>

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

.pan-left-enter-active, .pan-left-leave-active {
  transition: transform 0.5s;
}
.pan-left-enter, .pan-left-leave-to {
  transform: translateX(-100%);
}

.pop-in {
  animation: popIn 0.5s;
}
@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.router-transition-enter-active, .router-transition-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.router-transition-enter, .router-transition-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
