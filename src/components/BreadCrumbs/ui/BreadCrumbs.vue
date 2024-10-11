<script setup lang="ts">
  const bcStore = useBreadcrumbsStore();
</script>

<template>
  <ul class="mt-6 flex gap-2 text-gray-500">
    <li v-for="link in bcStore.links">
      <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    li {
      &:not(:first-child) {
        &::before {
          content: "→";
          @apply mr-2;
        }
      }
    }

    li a {
      @apply border-b border-b-slate-200 pb-1.5 transition-all;
      &:hover {
        @apply border-b-black text-black;
      }
    }
  }
</style>
