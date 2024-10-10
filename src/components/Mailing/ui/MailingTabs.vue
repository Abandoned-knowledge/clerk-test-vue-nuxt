<script setup lang="ts">
  import MailingTabsFirst from "./MailingTabsFirst.vue";
  import MailingTabsTwo from "./MailingTabsTwo.vue";
  import MailingTabsThree from "./MailingTabsThree.vue";

  const currentContent = shallowRef<Component>(MailingTabsFirst);

  const tabs = [
    {
      label: "Рассылки",
      checked: true,
      component: MailingTabsFirst,
    },
    {
      label: "Соцсети",
      checked: false,
      component: MailingTabsTwo,
    },
    {
      label: "Мессенджеры",
      checked: false,
      component: MailingTabsThree,
    },
  ];

  function handleTabSwitch(component: Component) {
    if (typeof component == "object") currentContent.value = component;
  }
</script>

<template>
  <div class="mt-10 flex gap-5">
    <label
      v-for="tab in tabs"
      @change="handleTabSwitch(tab.component)"
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
