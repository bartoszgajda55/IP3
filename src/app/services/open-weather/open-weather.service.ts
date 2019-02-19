import { Injectable } from "@angular/core";
import { CurrentWeather } from "src/app/interfaces/current-weather";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OpenWeatherService {
  constructor(private http: HttpClient) {}

  public getCurrentWeatherByCoordinates(
    lat: number,
    lng: number
  ): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(
      `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}`
    );
  }
}
