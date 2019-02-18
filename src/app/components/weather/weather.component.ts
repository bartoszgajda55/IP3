import { Component } from "@angular/core";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent {
  lat: number = 55.873543;
  lng: number = -4.289058;
}
