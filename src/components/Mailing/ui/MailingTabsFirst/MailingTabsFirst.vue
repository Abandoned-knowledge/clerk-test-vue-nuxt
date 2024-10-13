<script setup lang="ts">
  import MailingTabsFirstInput from "./MailingTabsFirstInput.vue";
  import MailingTabsFirstItem from "./MailingTabsFirstItem.vue";
  import { mailingItems } from "../..";

  const submitForm = () => console.log("submitted");

  const emits = defineEmits(["checkAll"]);

  const inputState = ref({
    mainInput: false,
    allChildInputs: false,
    childInputsCheckedCount: 0,
  });

  const handleMainInput = (value: boolean) => {
    inputState.value.mainInput = value;
    inputState.value.allChildInputs = value;
    inputState.value.childInputsCheckedCount = value ? 4 : 0;
  };

  const handleChildEmit = (emit: any) =>
    emit.value
      ? inputState.value.childInputsCheckedCount++
      : inputState.value.childInputsCheckedCount--;

  watch(inputState.value, () => {
    const condition = inputState.value.childInputsCheckedCount === mailingItems.length;
    inputState.value.mainInput = condition;
    if (condition) inputState.value.allChildInputs = true;
  });
</script>

<template>
  <form
    id="mailing_form"
    @submit.prevent="submitForm"
    class="bg-gray-100 px-6 py-12 lg:w-[80%] lg:rounded-xl xl:w-[70%]"
  >
    <header class="lg:px-6">
      <MailingTabsFirstInput />
      <label class="mt-4 inline-flex cursor-pointer items-center gap-2">
        <div class="toggle">
          <input
            type="checkbox"
            :checked="inputState.mainInput"
            @change="handleMainInput(($event.target as HTMLInputElement).checked)"
          />
          <div></div>
        </div>
        Подписаться на все рассылки
      </label>
    </header>

    <div class="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2">
      <MailingTabsFirstItem
        v-for="item in mailingItems"
        :key="item.id"
        :item="item"
        :is-all-checked="inputState.allChildInputs"
        @check-all="handleChildEmit"
      />
    </div>
  </form>
  <Icon
    name="v-icon:emoji"
    class="my-12 text-5xl"
  />
</template>
