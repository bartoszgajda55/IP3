/// <reference types="@types/googlemaps" />
import { Component } from "@angular/core";
import { EarthquakeService } from "../../services/earthquake/earthquake.service";
import { MatSelectChange } from "@angular/material";
import { Feature } from "geojson";
import { take } from "rxjs/operators";

@Component({
  selector: "app-earthquake-page",
  templateUrl: "./earthquake-page.component.html",
  styleUrls: ["./earthquake-page.component.scss"]
})
export class EarthquakePageComponent {
  public markers: Array<Feature>;

  constructor(private earthquakeService: EarthquakeService) {}

  public onMapReady(map): void {
    this.setMarkersFromAllDay();
  }

  onTimeFrameChange(event: MatSelectChange): void {
    this.handleTimeFrameChange(event.value);
  }

  private handleTimeFrameChange(timeFrame: string): void {
    switch (timeFrame) {
      case "hour": {
        this.setMarkersFromLastHour();
        break;
      }
      case "day": {
        this.setMarkersFromAllDay();
        break;
      }
      case "month": {
        this.setMarkersFromAllMonth();
        break;
      }
      default: {
        this.setMarkersFromAllDay();
        break;
      }
    }
  }

  private setMarkersFromLastHour(): void {
    this.earthquakeService
      .getEarthquakesLastHour()
      .pipe(take(1))
      .subscribe(data => {
        this.markers = data.features;
      });
  }

  private setMarkersFromAllDay(): void {
    this.earthquakeService
      .getEarthquakesAllDay()
      .pipe(take(1))
      .subscribe(data => {
        this.markers = data.features;
      });
  }

  private setMarkersFromAllMonth(): void {
    this.earthquakeService
      .getEarthquakesAllMonth()
      .pipe(take(1))
      .subscribe(data => {
        this.markers = data.features;
      });
  }
}
