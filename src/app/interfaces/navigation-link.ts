export interface NavigationLink {
  name: string;
  href: string;
  hasSubmenu: boolean;
  submenu?: Array<{ name: string; href: string }>;
}
