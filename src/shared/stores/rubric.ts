export const useRubricStore = defineStore("rubric", () => {
  const rubrics = ref<RubricItem[] | null>(null);
  const rubricsAllowEmpty = ref<RubricItem[] | null>(null);
  const totalCountSumm = ref<number>(0);
  const showEmpty = ref<boolean>(false);

  async function fetchRubrics() {
    const dataRubrics = await $fetch("/api/rubrics");
    rubrics.value = dataRubrics as RubricItem[];

    const dataRubricsAllowEmpty = await $fetch("/api/rubrics?allowEmpty=1");
    rubricsAllowEmpty.value = dataRubricsAllowEmpty as RubricItem[];
  }

  return { rubrics, totalCountSumm, showEmpty, rubricsAllowEmpty, fetchRubrics };
});
