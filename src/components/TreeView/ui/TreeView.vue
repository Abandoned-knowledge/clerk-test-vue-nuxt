<script setup lang="ts">
  interface Props {
    id: number;
    title: string;
    url: string;
    children?: Props[];
    count: number;
    isChecked?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    isChecked: false,
  });

  const hasChildren = computed(() => props.children && props.children.length > 0);
  const rubricsStore = useRubricStore();
  const folderIsOpen = ref<boolean>(false);

  const checked = ref(props.isChecked);

  const countSumm = computed(() => {
    const childSumm = props.children?.reduce((accum, curr) => accum + curr.count, 0) || 0;
    return props.count + childSumm;
  });

  const plus = () => (rubricsStore.totalCountSumm += countSumm.value);
  const minus = () => (rubricsStore.totalCountSumm -= countSumm.value);

  watch(
    () => props.isChecked,
    (newVal) => (checked.value = newVal),
  );

  watch(checked, (newValue) => (newValue ? plus() : minus()));
</script>

<template>
  <ul
    class="folder flex flex-col gap-2"
    :class="{ folder_open: folderIsOpen }"
    v-if="hasChildren"
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
        :href="`https://www.klerk.ru${props.url}`"
        target="_blank"
      >
        {{ props.title }} ({{ props.count }}, {{ countSumm }})
      </a>
      <input
        class="cursor-pointer"
        type="checkbox"
        v-model="checked"
      />
    </li>

    <TreeView
      class="folder_content hidden gap-2 pl-4"
      v-if="hasChildren"
      v-for="child in props.children"
      :key="child.id"
      :id="child.id"
      :title="child.title"
      :url="child.url"
      :count="child.count"
      :children="child.children"
      :is-checked="checked"
    />
  </ul>

  <li v-else>
    <a
      class="text ml-7"
      :href="`https://www.klerk.ru${props.url}`"
      target="_blank"
    >
      {{ props.title }} ({{ props.count }}, {{ countSumm }})
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

  .header {
    @apply flex cursor-pointer items-center justify-between gap-3 rounded bg-slate-500 p-1 text-white;
  }

  .folder.folder_open > .folder_content {
    @apply flex;
  }
</style>
