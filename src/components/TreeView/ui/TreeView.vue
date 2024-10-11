<script setup lang="ts">
  interface TreeViewItem {
    id: number;
    title: string;
    url: string;
    children?: TreeViewItem[];
    count: number;
  }

  const props = defineProps<TreeViewItem>();

  const hasChildren = computed(() => props.children && props.children.length > 0);
  const countSumm = computed(() => {
    const summ = props.children?.reduce((accum, curr) => accum + curr.count, 0);
    return summ ? props.count + summ : props.count;
  });

  function openFolder(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const folder = target.closest(".folder") as HTMLElement;
    folder?.classList.toggle("folder_open");
  }
</script>

<template>
  <ul
    class="folder flex flex-col gap-2"
    v-if="hasChildren"
  >
    <li class="flex items-center gap-2">
      <button
        @click="openFolder($event)"
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
    </li>

    <TreeView
      class="folder_content hidden flex-col gap-2 pl-4"
      v-if="hasChildren"
      v-for="child in props.children"
      :key="child.id"
      :id="child.id"
      :title="child.title"
      :url="child.url"
      :count="child.count"
      :children="child.children"
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
  </li>
</template>

<style lang="scss" scoped>
  .text {
    @apply border-b pb-1 text-gray-700 transition-all;
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

  .button {
    @apply flex cursor-pointer items-center justify-center gap-1 rounded bg-gray-300 p-1 text-black transition-all;
    &:hover,
    &:focus {
      @apply bg-gray-400 text-white;
    }
    &:active {
      @apply scale-95 bg-gray-300;
    }
  }
</style>
