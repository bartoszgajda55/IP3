import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FiveDayWeatherForecast } from "src/app/interfaces/five-day-weather-forecast";
import { formatDate, KeyValue } from "@angular/common";
import { Forecast } from "src/app/interfaces/forecast";
import * as shape from "d3-shape";

@Component({
  selector: "app-forecast-presenter",
  templateUrl: "./forecast-presenter.component.html",
  styleUrls: ["./forecast-presenter.component.scss"]
})
export class ForecastPresenterComponent implements OnChanges {
  @Input() forecast: FiveDayWeatherForecast;
  public transformedForecast: Map<string, Array<Forecast>>;
  public lineChartData: Array<{ name: string; series: any[] }> = [{ name: "Temperature", series: [] }];
  public Math: Math = Math;
  public colorScheme = { domain: ["#F9A825"] };
  public curve = shape.curveBasis;

  ngOnChanges(changes: SimpleChanges) {
    this.mapForecastWithDay(this.forecast);
    this.transformedForecast = this.groupByDay(this.forecast.list);
  }

  public keyDefaultOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  };

  public getLineChartDayByForecastDay(key: any) {
    this.lineChartData[0].series = [];
    this.transformedForecast.get(key).map(value => {
      this.lineChartData[0].series.push({ name: formatDate(value.dt * 1000, "HH:mm", "en-GB"), value: value.main.temp });
    });
    return this.lineChartData;
  }

  private mapForecastWithDay(forecast: FiveDayWeatherForecast): void {
    forecast.list.map(value => {
      value.dt_txt = formatDate(value.dt * 1000, "d", "en-GB");
    });
  }

  private groupByDay(list: Forecast[]): any {
    let grouppedForecast = new Map<string, Array<Forecast>>();
    let previousDay: string = "0";
    list.map((value: Forecast) => {
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
