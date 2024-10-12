<script setup lang="ts">
  import { ref, onMounted } from "vue";

  const array = ref([
    {
      id: 1,
      title: "title1",
      children: [
        {
          id: 2,
          title: "title2",
          children: [],
        },
        {
          id: 3,
          title: "title3",
          children: [
            {
              id: 5,
              title: "title5",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "title4",
      children: [],
    },
  ]);

  const hasAncestors = (id, array) => {
    for (const item of array) {
      if (item.id === id) {
        return true;
      }
      if (item.children.length > 0) {
        if (hasAncestors(id, item.children)) {
          return true;
        }
      }
    }
    return false;
  };

  onMounted(() => {
    console.log(hasAncestors(6, array.value));
  });
</script>

<template></template>

<style lang="scss" scoped></style>
