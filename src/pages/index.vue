<script setup lang="ts">
  import { type TreeViewItem } from "@/components/TreeView";
  const { data } = await useFetch<TreeViewItem[]>(
    "https://www.klerk.ru/yindex.php/v3/event/rubrics",
  );
</script>

<template>
  <ul class="flex flex-col gap-2">
    <TreeView
      v-for="item in data"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :url="item.url"
      :count="item.count"
      :children="item.children"
    />
  </ul>
</template>
