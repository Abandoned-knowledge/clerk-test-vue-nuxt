<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center">
    <NuxtLink to="/mailing">
      <Icon
        name="v-icon:klerk"
        class="text-4xl"
      />
    </NuxtLink>

    <h1>Подписки «Клерка»</h1>

    <Mailing />
  </div>
</template>
