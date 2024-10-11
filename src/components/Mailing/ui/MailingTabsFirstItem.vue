<script setup lang="ts">
  interface props {
    period: string;
    title: string;
    subtitle: string;
    list: string[];
    count: string;
    imagePath: string;
  }
  const props = defineProps<props>();

  const isAllChecked = () => {
    const allToggleInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      "#mailing_form .toggle input",
    );

    const firstInput = Array.from(allToggleInputs)[0];
    const otherInputs = Array.from(allToggleInputs).slice(1);

    firstInput.checked = otherInputs.every((input) => input.checked);
  };
</script>

<template>
  <article class="flex flex-col rounded-2xl bg-white px-4 py-6 lg:px-6">
    <header class="grid grid-cols-[1fr_auto] grid-rows-[repeat(3,_auto)] gap-x-6">
      <small class="text-gray-400">{{ props.period }}</small>
      <h3>{{ props.title }}</h3>
      <img
        class="col-start-2 col-end-3 row-start-1 row-end-3 aspect-square w-10 overflow-hidden rounded-lg object-cover lg:row-start-1 lg:-row-end-1 lg:w-20"
        :src="props.imagePath"
      />
      <p class="col-span-full mt-2 leading-tight text-gray-500 lg:col-auto">
        {{ props.subtitle }}
      </p>
    </header>
    <div class="mt-4">
      <ul>
        <li
          class="text-sm"
          v-for="item in props.list"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <footer class="mt-auto">
      <label class="mt-5 flex items-center gap-2 text-sm">
        <div
          class="toggle toggle-lg"
          @change="isAllChecked"
        >
          <input type="checkbox" />
          <div></div>
        </div>
        Уже получает {{ props.count }} человек
      </label>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
  ul {
    @apply pl-4 lg:pl-5;
    li {
      list-style-image: url(@/shared/icons/correct.svg);
      &::marker {
        @apply ml-5;
      }
    }
  }
</style>
