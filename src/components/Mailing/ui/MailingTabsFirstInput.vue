<script setup lang="ts"></script>

<template>
  <div class="relative mt-4">
    <input
      type="text"
      placeholder="Электронная почта"
      class="w-[95%] rounded-lg p-4"
    />
    <button class="btn absolute right-0">
      <span>Подписаться</span>
      <Icon name="v-icon:arrow" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .btn {
    @apply aspect-square h-full px-4 md:aspect-auto md:px-8;
    span:first-child {
      @apply hidden md:inline-block;
    }
    span:last-child {
      @apply inline-block md:hidden;
    }
  }
</style>
