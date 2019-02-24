import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FiveDayWeatherForecast } from "src/app/interfaces/five-day-weather-forecast";
import { formatDate } from "@angular/common";
import { Forecast } from "src/app/interfaces/forecast";

@Component({
  selector: "app-forecast-presenter",
  templateUrl: "./forecast-presenter.component.html",
  styleUrls: ["./forecast-presenter.component.scss"]
})
export class ForecastPresenterComponent implements OnChanges {
  @Input() forecast: FiveDayWeatherForecast;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.forecast.list.map((value, index, array) => {
      value.dt_txt = formatDate(value.dt * 1000, "d", "en-GB");
    });
    let grouppedForecast = this.groupByDay(this.forecast.list);
    console.log(grouppedForecast.get("25"));
  }

  private groupByDay(list: Forecast[]): any {
    let grouppedForecast = new Map<string, Array<any>>();
    let previousDay: string = "0";
    list.map((value: Forecast, index: number, array: Forecast[]) => {
      if (value.dt_txt == previousDay) {
        grouppedForecast.get(value.dt_txt).push(value);
      } else {
        grouppedForecast.set(value.dt_txt, []);
        grouppedForecast.get(value.dt_txt).push(value);
        previousDay = value.dt_txt;
      }
    });
    return grouppedForecast;
  }
}
