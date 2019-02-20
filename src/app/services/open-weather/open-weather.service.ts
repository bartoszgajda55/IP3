import { Injectable } from "@angular/core";
import { CurrentWeather } from "src/app/interfaces/current-weather";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FiveDayForecast } from "src/app/interfaces/five-day-forecast";

@Injectable({
  providedIn: "root"
})
export class OpenWeatherService {
  apiUri: string;
  params: HttpParams;
  constructor(private http: HttpClient) {
    this.params = new HttpParams().set("APPID", environment.openWeatherKey);
    this.apiUri = "http://api.openweathermap.org/data/2.5";
  }

  public getCurrentWeatherByCoordinates(lat: number, lng: number): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(`${this.apiUri}/weather?lat=${lat}&lon=${lng}`, { params: this.params });
  }

  public getFiveDayWeatherForecastByCoordinates(lat: number, lng: number): Observable<FiveDayForecast> {
    return this.http.get<FiveDayForecast>(`${this.apiUri}/forecast?lat=${lat}&lon=${lng}`, { params: this.params });
  }
}
