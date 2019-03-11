import { Component, OnInit, Input } from "@angular/core";
import { WeatherIconService } from "src/app/services/weather-icon/weather-icon.service";
import { CurrentWeather } from "src/app/interfaces/current-weather";

@Component({
  selector: "app-weather-presenter",
  templateUrl: "./weather-presenter.component.html",
  styleUrls: ["./weather-presenter.component.scss"]
})
export class WeatherPresenterComponent implements OnInit {
  @Input() currentWeather: CurrentWeather;

  constructor(public weatherIconService: WeatherIconService) {}

  ngOnInit() {}
}
