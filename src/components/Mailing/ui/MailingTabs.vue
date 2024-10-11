<script setup lang="ts">
  import tabs from "../model/tabs";
  import { type tabItem } from "..";
  const currentContent = shallowRef<Component>(tabs[0].component);
  const bcStore = useBreadcrumbsStore();

  function handleTabSwitch(obj: tabItem) {
    if (typeof obj.component == "object") currentContent.value = obj.component;
    bcStore.replaceLastCrumb({ label: obj.label, path: obj.path });
  }
  onMounted(() => bcStore.addCrumb({ label: "Рассылки", path: "mailing" }));
  onUnmounted(() => bcStore.deleteLastCrumb());
</script>

<template>
  <div class="mt-10 flex gap-5">
    <label
      v-for="tab in tabs"
      @change="handleTabSwitch(tab)"
    >
      {{ tab.label }}
      <input
        type="radio"
        name="tabs"
        class="appearance-none"
        :checked="tab.checked"
      />
    </label>
  </div>
  <component :is="currentContent" />
</template>

<style lang="scss" scoped>
  label {
    @apply cursor-pointer border-0 pb-4 text-gray-500 transition-all;
    &:has(input:checked) {
      @apply border-b border-blue-500 font-medium text-blue-500;
    }
  }
</style>
