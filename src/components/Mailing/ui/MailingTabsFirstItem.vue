<script setup lang="ts">
  interface props {
    period: string;
    title: string;
    subtitle: string;
    list: string[];
    count: string;
    imagePath: path;
  }
  const props = defineProps<props>();
</script>

<template>
  <article class="flex flex-col rounded-2xl bg-white p-6">
    <header class="grid grid-cols-[1fr_auto] grid-rows-[repeat(3,_auto)] gap-x-6">
      <small class="text-gray-400">{{ props.period }}</small>
      <h3>{{ props.title }}</h3>
      <img
        class="col-start-2 col-end-3 row-start-1 row-end-3 aspect-square w-10 overflow-hidden rounded-lg object-cover md:row-start-1 md:-row-end-1 md:w-20"
        :src="props.imagePath"
      />
      <p class="col-span-full mt-2 leading-tight text-gray-500 md:col-auto">
        {{ props.subtitle }}
      </p>
    </header>
    <div class="mt-4">
      <ul>
        <li
          class="text-sm"
          v-for="item in props.list"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <footer class="mt-auto">
      <label class="mt-5 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          class="toggle toggle-lg"
        />
        Уже получает {{ props.count }} человек
      </label>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
  ul {
    @apply pl-5;
    li {
      list-style-image: url(@/shared/icons/correct.svg);
      &::marker {
        @apply ml-5;
      }
    }
  }
</style>
