import imgPath1 from "~/shared/img/img-1.svg";
import imgPath2 from "~/shared/img/img-2.svg";
import imgPath3 from "~/shared/img/img-3.svg";
import imgPath4 from "~/shared/img/img-4.svg";

export default [
  {
    id: 1,
    period: "Перед рассветом",
    title: "Утренний бухгалтер",
    subtitle: "Самые важные новости и события за день. Кратко, по делу, структурировано.",
    imagePath: imgPath1,
    list: ["Новости для бухгалтеров, ИП и директора", "Подборка статей за день"],
    receiversCount: "59 342",
  },
  {
    id: 2,
    period: "После заката",
    title: "Ночной бухгалтер",
    subtitle: "Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.",
    imagePath: imgPath2,
    list: ["Анализ, оценка и только самое главное", "Лучшие комменты юзеров в обзоре"],
    receiversCount: "37 480",
  },
  {
    id: 3,
    period: "Раз в две недели",
    title: "Ножницы скидок",
    subtitle: "Подборка самых выгодных и полезных спецпредложений от надежных компаний.",
    imagePath: imgPath3,
    list: ["Акции и скидки от лидеров рынка", "Те, кто подписался – экономят много денег"],
    receiversCount: "92 118",
  },
  {
    id: 4,
    period: "По мере появления анонсов",
    title: "Чемодан вебинаров",
    subtitle:
      "Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.",
    imagePath: imgPath4,
    list: ["Никогда не пришлем платные вебинары", "Подборка топовых тем для вебинаров"],
    receiversCount: "92 082",
  },
];
