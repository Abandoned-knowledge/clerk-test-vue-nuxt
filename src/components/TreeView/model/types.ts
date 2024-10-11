export interface TreeViewItem {
  id: number;
  title: string;
  url: string;
  children: TreeViewItem[];
  count: number;
}
