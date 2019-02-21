import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WeatherIconService {
  private weatherIcon: Map<number, string> = new Map();

  constructor() {
    // Group 2xx: Thunderstorm
    this.weatherIcon.set(200, "/assets/weather-icons/icons8-hail-storm-48.png");
    this.weatherIcon.set(201, "/assets/weather-icons/icons8-hail-storm-48.png");
    this.weatherIcon.set(202, "/assets/weather-icons/icons8-hail-storm-48.png");
    this.weatherIcon.set(210, "/assets/weather-icons/icons8-electric-power-48.png");
    this.weatherIcon.set(211, "/assets/weather-icons/icons8-electric-power-48.png");
    this.weatherIcon.set(212, "/assets/weather-icons/icons8-electric-power-48.png");
    this.weatherIcon.set(221, "/assets/weather-icons/icons8-electric-power-48.png");
    this.weatherIcon.set(230, "/assets/weather-icons/icons8-rain-storm-48.png");
    this.weatherIcon.set(231, "/assets/weather-icons/icons8-rain-storm-48.png");
    this.weatherIcon.set(232, "/assets/weather-icons/icons8-rain-storm-48.png");
    // Group 3xx: Drizzle
    this.weatherIcon.set(300, "/assets/weather-icons/icons8-light-rain-48.png");
    this.weatherIcon.set(301, "/assets/weather-icons/icons8-light-rain-48.png");
    this.weatherIcon.set(302, "/assets/weather-icons/icons8-light-rain-48.png");
    this.weatherIcon.set(310, "/assets/weather-icons/icons8-light-rain-48.png");
    this.weatherIcon.set(311, "/assets/weather-icons/icons8-moderate-rain-48.png");
    this.weatherIcon.set(312, "/assets/weather-icons/icons8-moderate-rain-48.png");
    this.weatherIcon.set(313, "/assets/weather-icons/icons8-moderate-rain-48.png");
    this.weatherIcon.set(314, "/assets/weather-icons/icons8-moderate-rain-48.png");
    this.weatherIcon.set(321, "/assets/weather-icons/icons8-moderate-rain-48.png");
    // Group 5xx: Rain
    this.weatherIcon.set(500, "/assets/weather-icons/icons8-heavy-rain-48.png");
    this.weatherIcon.set(501, "/assets/weather-icons/icons8-heavy-rain-48.png");
    this.weatherIcon.set(502, "/assets/weather-icons/icons8-heavy-rain-48.png");
    this.weatherIcon.set(503, "/assets/weather-icons/icons8-rainfall-48.png");
    this.weatherIcon.set(504, "/assets/weather-icons/icons8-rainfall-48.png");
    this.weatherIcon.set(511, "/assets/weather-icons/icons8-rainfall-48.png");
    this.weatherIcon.set(520, "/assets/weather-icons/icons8-torrential-rain-48.png");
    this.weatherIcon.set(521, "/assets/weather-icons/icons8-torrential-rain-48.png");
    this.weatherIcon.set(522, "/assets/weather-icons/icons8-torrential-rain-48.png");
    this.weatherIcon.set(531, "/assets/weather-icons/icons8-torrential-rain-48.png");
    // Group 6xx: Snow
    this.weatherIcon.set(600, "/assets/weather-icons/icons8-light-snow-48.png");
    this.weatherIcon.set(601, "/assets/weather-icons/icons8-light-snow-48.png");
    this.weatherIcon.set(602, "/assets/weather-icons/icons8-light-snow-48.png");
    this.weatherIcon.set(611, "/assets/weather-icons/icons8-falling-snow-48.png");
    this.weatherIcon.set(612, "/assets/weather-icons/icons8-falling-snow-48.png");
    this.weatherIcon.set(615, "/assets/weather-icons/icons8-falling-snow-48.png");
    this.weatherIcon.set(616, "/assets/weather-icons/icons8-snow-fall-48.png");
    this.weatherIcon.set(620, "/assets/weather-icons/icons8-snow-fall-48.png");
    this.weatherIcon.set(621, "/assets/weather-icons/icons8-snow-fall-48.png");
    this.weatherIcon.set(622, "/assets/weather-icons/icons8-snow-fall-48.png");
    // Group 7xx: Atmosphere
    this.weatherIcon.set(701, "/assets/weather-icons/icons8-haze-48.png");
    this.weatherIcon.set(711, "/assets/weather-icons/icons8-haze-48.png");
    this.weatherIcon.set(721, "/assets/weather-icons/icons8-haze-48.png");
    this.weatherIcon.set(731, "/assets/weather-icons/icons8-spiral-dust-48.png");
    this.weatherIcon.set(741, "/assets/weather-icons/icons8-dust-48.png");
    this.weatherIcon.set(751, "/assets/weather-icons/icons8-dust-48.png");
    this.weatherIcon.set(761, "/assets/weather-icons/icons8-dust-48.png");
    this.weatherIcon.set(762, "/assets/weather-icons/icons8-volcano-48.png");
    this.weatherIcon.set(771, "/assets/weather-icons/icons8-spiral-dust-48.png");
    this.weatherIcon.set(781, "/assets/weather-icons/icons8-spiral-dust-48.png");
    // Group 800: Clear
    this.weatherIcon.set(800, "/assets/weather-icons/icons8-summer-48.png");
    // Group 80x: Clouds
    this.weatherIcon.set(801, "/assets/weather-icons/icons8-partly-cloudy-48.png");
    this.weatherIcon.set(802, "/assets/weather-icons/icons8-partly-cloudy-48.png");
    this.weatherIcon.set(803, "/assets/weather-icons/icons8-cloud-host-48.png");
    this.weatherIcon.set(804, "/assets/weather-icons/icons8-cloud-host-48.png");
  }

  public getIconPathByWeatherCode(code: number): string {
    return this.weatherIcon.get(code);
  }
}
