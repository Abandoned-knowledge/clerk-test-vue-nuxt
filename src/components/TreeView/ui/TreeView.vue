<script setup lang="ts">
  interface Props {
    rubric: RubricItem;
    isChecked: boolean;
  }

  const { rubric, isChecked } = defineProps<Props>();

  const hasChildren = computed(() => rubric.children && rubric.children.length > 0);
  const rubricStore = useRubricStore();
  const folderIsOpen = ref<boolean>(false);

  const checked = ref(isChecked);

  const countSumm = computed(() => {
    const childSumm = rubric.children?.reduce((accum, curr) => accum + curr.count, 0) || 0;
    return rubric.count + childSumm;
  });

  const title = computed(() => `${rubric.title} (${rubric.count}, ${countSumm.value})`);

  const plus = () => (rubricStore.totalCountSumm += rubric.count);
  const minus = () => (rubricStore.totalCountSumm -= rubric.count);

  watch(
    () => isChecked,
    (newVal) => (checked.value = newVal),
  );

  watch(checked, (newValue) => (newValue ? plus() : minus()));
</script>

<template>
  <ul
    v-if="hasChildren"
    class="folder flex flex-col gap-2"
  >
    <li class="flex items-center gap-2">
      <button
        @click="folderIsOpen = !folderIsOpen"
        class="button"
      >
        <Icon
          name="ep:arrow-down-bold"
          class="text-[10px]"
        />
      </button>

      <a
        class="text font-semibold"
        :href="`https://www.klerk.ru${rubric.url}`"
        target="_blank"
      >
        {{ title }}
      </a>
      <input
        class="cursor-pointer"
        type="checkbox"
        v-model="checked"
      />
    </li>

    <TreeView
      class="gap-2 pl-4"
      :class="folderIsOpen ? 'flex' : 'hidden'"
      v-for="child in rubric.children"
      :rubric="child"
      :is-checked="checked"
    />
  </ul>

  <li v-else>
    <a
      class="text ml-7"
      :href="`https://www.klerk.ru${rubric.url}`"
      target="_blank"
    >
      {{ title }}
    </a>

    <input
      class="cursor-pointer"
      type="checkbox"
      v-model="checked"
    />
  </li>
</template>

<style lang="scss" scoped>
  .text {
    @apply text-gray-700 transition-all;
    &:hover {
      @apply text-blue-500;
    }
  }
</style>
