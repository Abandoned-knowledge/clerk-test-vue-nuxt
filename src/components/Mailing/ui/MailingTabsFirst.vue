<script setup lang="ts">
  import MailingTabsFirstInput from "./MailingTabsFirstInput.vue";
  import MailingTabsFirstItem from "./MailingTabsFirstItem.vue";
  import { mailingItems } from "..";

  const turnOnAll = (inputs: NodeListOf<HTMLInputElement>) => {
    inputs.forEach((input) => (input.checked = true));
  };
  const turnOffAll = (inputs: NodeListOf<HTMLInputElement>) => {
    inputs.forEach((input) => (input.checked = false));
  };

  function subscribeAll(event: Event) {
    const target = event.currentTarget as HTMLLabelElement;
    const toggleInput = target.querySelector(".toggle input") as HTMLInputElement;
    const allToggleInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      "#mailing_form .toggle input",
    );

    toggleInput.checked ? turnOnAll(allToggleInputs) : turnOffAll(allToggleInputs);
  }

  function submitForm() {
    console.log("submitted");
  }
</script>

<template>
  <form
    id="mailing_form"
    @submit.prevent="submitForm"
    class="bg-gray-100 px-6 py-12 lg:w-[80%] lg:rounded-xl xl:w-[70%]"
  >
    <header class="lg:px-6">
      <h2>Выберите рассылки, которые подходят именно вам</h2>
      <MailingTabsFirstInput />
      <label
        class="mt-4 inline-flex cursor-pointer items-center gap-2"
        @change="subscribeAll($event)"
      >
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
        :key="item.id"
        :period="item.period"
        :title="item.title"
        :subtitle="item.subtitle"
        :image-path="item.imgPath"
        :list="item.list"
        :count="item.receiversCount"
      />
    </div>
  </form>
  <Icon
    name="v-icon:emoji"
    class="my-12 text-5xl"
  />
</template>
