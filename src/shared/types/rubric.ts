export interface RubricItem {
  id: number;
  title: string;
  url: string;
  children: RubricItem[];
  count: number;
}
