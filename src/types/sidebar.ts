// resman-ui-host/src/types/sidebar.ts
export interface SidebarItem {
  label: string;
  path: string;
}

export interface SidebarSection {
  section: string;
  items: SidebarItem[];
}

export type SidebarConfig = SidebarSection[];
