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
    { name: "Overview", href: "overview" },
    { name: "Weather Map", href: "weather" },
    { name: "Earthquakes Map", href: "earthquakes" },
    { name: "Authors", href: "authors" },
    { name: "Tutorial", href: "tutorial", hasSubmenu: true, submenu: [{ name: "JS Tutorial", href: "#" }] },
    { name: "Visualization", href: "visualization" }
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
