import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy } from "@angular/core";
import { NavigationLink } from "src/app/interfaces/navigation-link";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  title: string = "IP3 Weather Application";
  navLinks: NavigationLink[] = [
    { name: "Overview", link: "overview" },
    { name: "Weather Map", link: "weather" },
    { name: "Earthquakes Map", link: "earthquakes" },
    { name: "Authors", link: "authors" },
    { name: "Tutorial", link: "tutorial" }
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
