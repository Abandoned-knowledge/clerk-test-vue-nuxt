import type { breadcrumbsLinkItem } from "./model/types";

export const useBreadcrumbsStore = defineStore("bc", () => {
  const links = ref<breadcrumbsLinkItem[]>([
    {
      label: "Главная",
      path: "/",
    },
    {
      label: "Подписки",
      path: "/mailing",
    },
  ]);

  function addCrumb(obj: breadcrumbsLinkItem) {
    const crumb: breadcrumbsLinkItem = {
      label: obj.label,
      path: obj.path,
    };
    links.value.push(crumb);
  }

  function replaceLastCrumb(obj: breadcrumbsLinkItem) {
    const crumb: breadcrumbsLinkItem = {
      label: obj.label,
      path: obj.path,
    };

    links.value[links.value.length - 1] = crumb;
  }

  function deleteLastCrumb() {
    links.value = links.value.slice(0, -1);
  }

  return { links, addCrumb, replaceLastCrumb, deleteLastCrumb };
});
