import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WeatherIconService {
  private weatherIcon: Map<number, string> = new Map();

  constructor() {
    // Group 2xx: Thunderstorm
    this.weatherIcon.set(200, "hail-storm");
    this.weatherIcon.set(201, "hail-storm");
    this.weatherIcon.set(202, "hail-storm");
    this.weatherIcon.set(210, "electric-power");
    this.weatherIcon.set(211, "electric-power");
    this.weatherIcon.set(212, "electric-power");
    this.weatherIcon.set(221, "electric-power");
    this.weatherIcon.set(230, "rain-storm");
    this.weatherIcon.set(231, "rain-storm");
    this.weatherIcon.set(232, "rain-storm");
    // Group 3xx: Drizzle
    this.weatherIcon.set(300, "light-rain");
    this.weatherIcon.set(301, "light-rain");
    this.weatherIcon.set(302, "light-rain");
    this.weatherIcon.set(310, "light-rain");
    this.weatherIcon.set(311, "moderate-rain");
    this.weatherIcon.set(312, "moderate-rain");
    this.weatherIcon.set(313, "moderate-rain");
    this.weatherIcon.set(314, "moderate-rain");
    this.weatherIcon.set(321, "moderate-rain");
    // Group 5xx: Rain
    this.weatherIcon.set(500, "heavy-rain");
    this.weatherIcon.set(501, "heavy-rain");
    this.weatherIcon.set(502, "heavy-rain");
    this.weatherIcon.set(503, "rainfall");
    this.weatherIcon.set(504, "rainfall");
    this.weatherIcon.set(511, "rainfall");
    this.weatherIcon.set(520, "torrential-rain");
    this.weatherIcon.set(521, "torrential-rain");
    this.weatherIcon.set(522, "torrential-rain");
    this.weatherIcon.set(531, "torrential-rain");
    // Group 6xx: Snow
    this.weatherIcon.set(600, "light-snow");
    this.weatherIcon.set(601, "light-snow");
    this.weatherIcon.set(602, "light-snow");
    this.weatherIcon.set(611, "falling-snow");
    this.weatherIcon.set(612, "falling-snow");
    this.weatherIcon.set(615, "falling-snow");
    this.weatherIcon.set(616, "snow-fall");
    this.weatherIcon.set(620, "snow-fall");
    this.weatherIcon.set(621, "snow-fall");
    this.weatherIcon.set(622, "snow-fall");
    // Group 7xx: Atmosphere
    this.weatherIcon.set(701, "haze");
    this.weatherIcon.set(711, "haze");
    this.weatherIcon.set(721, "haze");
    this.weatherIcon.set(731, "spiral-dust");
    this.weatherIcon.set(741, "dust");
    this.weatherIcon.set(751, "dust");
    this.weatherIcon.set(761, "dust");
    this.weatherIcon.set(762, "volcano");
    this.weatherIcon.set(771, "spiral-dust");
    this.weatherIcon.set(781, "spiral-dust");
    // Group 800: Clear
    this.weatherIcon.set(800, "summer");
    // Group 80x: Clouds
    this.weatherIcon.set(801, "partly-cloudy-day");
    this.weatherIcon.set(802, "partly-cloudy-day");
    this.weatherIcon.set(803, "cloud-host");
    this.weatherIcon.set(804, "cloud-host");
  }

  public getIconPathByWeatherCode(code: number): string {
    return `/assets/weather-icons/icons8-${this.weatherIcon.get(code)}-48.png`;
  }
}
