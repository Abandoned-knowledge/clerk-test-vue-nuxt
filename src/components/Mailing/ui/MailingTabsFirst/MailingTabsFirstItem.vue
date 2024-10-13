<script setup lang="ts">
  import type { MailingItem } from "../../model/types";
  interface props {
    item: MailingItem;
    isAllChecked: boolean;
  }
  const { item, isAllChecked } = defineProps<props>();

  const checked = ref<boolean>(false);

  const emits = defineEmits(["checkAll"]);
  const handleEmit = () => emits("checkAll", checked);

  watch(
    () => isAllChecked,
    (newValue) => (checked.value = newValue),
  );
</script>

<template>
  <article class="flex flex-col rounded-2xl bg-white px-4 py-6 lg:px-6">
    <header class="grid grid-cols-[1fr_auto] grid-rows-[repeat(3,_auto)] gap-x-6">
      <small class="text-gray-400">{{ item.period }}</small>
      <h3>{{ item.title }}</h3>
      <img
        class="col-start-2 col-end-3 row-start-1 row-end-3 aspect-square w-10 overflow-hidden rounded-lg object-cover lg:row-start-1 lg:-row-end-1 lg:w-20"
        :src="item.imagePath"
      />
      <p class="col-span-full mt-2 leading-tight text-gray-500 lg:col-auto">
        {{ item.subtitle }}
      </p>
    </header>
    <div class="mt-4">
      <ul>
        <li
          class="text-sm"
          v-for="item in item.list"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <footer class="mt-auto">
      <label
        class="mt-5 flex items-center gap-2 text-sm"
        @change="handleEmit"
      >
        <div class="toggle toggle-lg">
          <input
            type="checkbox"
            v-model="checked"
            :name="item.formName"
          />
          <div></div>
        </div>
        Уже получает {{ item.count }} человек
      </label>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
  ul {
    @apply pl-4 lg:pl-5;
    li {
      list-style-image: url(@/shared/icons/correct.svg);
      &::marker {
        @apply ml-5;
      }
    }
  }
</style>
