/// <reference types="@types/googlemaps" />
import { Component, OnInit } from "@angular/core";
import { MapsAPILoader, GoogleMapsAPIWrapper } from "@agm/core";

@Component({
  selector: "app-visualization-page",
  templateUrl: "./visualization-page.component.html",
  styleUrls: ["./visualization-page.component.scss"]
})
export class VisualizationPageComponent implements OnInit {
  constructor(private googleMapsApiWrapper: GoogleMapsAPIWrapper) {}

  ngOnInit() {
    this.googleMapsApiWrapper.getNativeMap().then(map => {});
  }
}
