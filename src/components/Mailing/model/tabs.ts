import MailingTabsFirst from "../ui/MailingTabsFirst.vue";
import MailingTabsTwo from "../ui/MailingTabsTwo.vue";
import MailingTabsThree from "../ui/MailingTabsThree.vue";
export default [
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
