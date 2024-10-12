<script setup lang="ts">
  const rubricStore = useRubricStore();
  const allowEmpty = ref<boolean>(true);

  const treeViewData = computed(() =>
    allowEmpty.value ? rubricStore.rubricsAllowEmpty : rubricStore.rubrics,
  );

  onMounted(() => rubricStore.fetchRubrics());
</script>

<template>
  <div class="w-[80%] rounded-lg bg-gray-50 p-5">
    <header class="flex flex-col items-center justify-center gap-3">
      <label class="flex cursor-pointer items-baseline gap-2 text-xl font-bold">
        Показать пустые
        <input
          type="checkbox"
          v-model="allowEmpty"
          class="cursor-pointer"
        />
      </label>

      <div>
        <p class="text-xl">
          Общая сумма - <span class="font-bold">{{ rubricStore.totalCountSumm }}</span>
        </p>
      </div>
    </header>

    <ul
      class="folder"
      :class="{ folder_open: allowEmpty }"
    >
      <li class="flex items-center gap-2">
        <button class="button !gap-5 !px-3">
          Рубрики
          <Icon
            name="ep:arrow-down-bold"
            class="text-[10px]"
          />
        </button>
      </li>
      <div
        v-if="!treeViewData"
        class="flex items-center gap-2"
      >
        <p>Получение данных...</p>
        <div class="loader"></div>
      </div>

      <ul
        v-else
        class="mt-4 hidden flex-col gap-2"
      >
        <TreeView
          v-for="item in treeViewData"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :url="item.url"
          :count="item.count"
          :children="item.children"
        />
      </ul>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .folder.folder_open > ul {
    @apply flex;
  }
</style>
