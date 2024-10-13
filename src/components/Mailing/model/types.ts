export interface tabItem {
  label: string;
  checked: boolean;
  path: string;
  component: Component;
}

export interface MailingItem {
  period: string;
  title: string;
  subtitle: string;
  list: string[];
  count: string;
  imagePath: string;
  formName: string;
}
