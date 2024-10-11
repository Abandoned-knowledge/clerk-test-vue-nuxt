<script setup lang="ts">
  import MailingTabsFirstInput from "./MailingTabsFirstInput.vue";
  import MailingTabsFirstItem from "./MailingTabsFirstItem.vue";
  import { mailingItems } from "..";
</script>

<template>
  <section class="bg-gray-100 px-6 py-12 lg:w-[70%] lg:rounded-xl">
    <header class="px-6">
      <h2>Выберите рассылки, которые подходят именно вам</h2>
      <MailingTabsFirstInput />
      <label class="mt-4 inline-flex cursor-pointer items-center gap-2">
        <div class="toggle">
          <input type="checkbox" />
          <div></div>
        </div>
        Подписаться на все рассылки
      </label>
    </header>

    <div class="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2">
      <MailingTabsFirstItem
        v-for="item in mailingItems"
        :period="item.period"
        :title="item.title"
        :subtitle="item.subtitle"
        :image-path="item.imgPath"
        :list="item.list"
        :count="item.receiversCount"
      />
    </div>
  </section>
  <Icon
    name="v-icon:emoji"
    class="my-12 text-5xl"
  />
</template>
