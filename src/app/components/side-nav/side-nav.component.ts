import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from "@angular/core";
import { NavigationLink } from "src/app/interfaces/navigation-link";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  title: string = "IP3 Weather Application";
  navLinks: NavigationLink[] = [
    { name: "Overview", href: "overview", hasSubmenu: false },
    { name: "Weather Map", href: "weather", hasSubmenu: false },
    { name: "Earthquakes Map", href: "earthquakes", hasSubmenu: false },
    { name: "Authors", href: "authors", hasSubmenu: false },
    {
      name: "Tutorial",
      href: "#",
      hasSubmenu: true,
      submenu: [
        { name: "GeoJSON", href: "/geojson" },
        { name: "JavaScript", href: "/javascript" },
        { name: "Earthquake Data", href: "/earthquake-data" }
      ]
    },
    { name: "Visualization", href: "visualization", hasSubmenu: false }
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
