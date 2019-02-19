import { Injectable } from "@angular/core";
import { CurrentWeather } from "src/app/interfaces/current-weather";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class OpenWeatherService {
  params: HttpParams;
  constructor(private http: HttpClient) {
    this.params = new HttpParams().set("APPID", environment.openWeatherKey);
  }

  public getCurrentWeatherByCoordinates(lat: number, lng: number): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}`, { params: this.params });
  }
}
