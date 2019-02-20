import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WeatherIconService {
  private weatherIcon: Map<number, string> = new Map();

  constructor() {
    this.weatherIcon.set(200, "/assets/weather-icons/icons8-rain-storm-48.png");
  }

  public getIconPathByWeatherCode(code: number): string {
    return this.weatherIcon.get(code);
  }
}
