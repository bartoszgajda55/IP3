export interface NavigationLink {
  name: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: NavigationLink[];
}
