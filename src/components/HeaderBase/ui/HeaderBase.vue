<script setup lang="ts"></script>

<template>
  <header class="container">
    <nav class="mt-10 flex items-center justify-center gap-5">
      <NuxtLink
        to="/"
        class="border-b-0 pb-3 text-gray-500 transition-all"
      >
        Первое задание
      </NuxtLink>
      <NuxtLink
        to="/mailing"
        class="border-b-0 pb-3 text-gray-500 transition-all"
      >
        Второе задание
      </NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .router-link-exact-active {
    @apply border-b border-black font-medium text-black;
  }
</style>
