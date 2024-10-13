export default defineEventHandler(async (event) => {
  const { allowEmpty } = getQuery(event);
  const allowEmptyParam = allowEmpty ? "?allowEmpty=1" : "";

  const response = await $fetch(
    `https://www.klerk.ru/yindex.php/v3/event/rubrics${allowEmptyParam}`,
  );
  return response;
});
