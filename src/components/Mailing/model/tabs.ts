import MailingTabsFirst from "../ui/MailingTabsFirst.vue";
import MailingTabsTwo from "../ui/MailingTabsTwo.vue";
import MailingTabsThree from "../ui/MailingTabsThree.vue";
import { type tabItem } from "..";
export default <tabItem[]>[
  {
    label: "Рассылки",
    checked: true,
    path: "/mailing",
    component: MailingTabsFirst,
  },
  {
    label: "Соцсети",
    checked: false,
    path: "/mailing",
    component: MailingTabsTwo,
  },
  {
    label: "Мессенджеры",
    checked: false,
    path: "/mailing",
    component: MailingTabsThree,
  },
];
