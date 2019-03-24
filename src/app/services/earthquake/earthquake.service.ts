import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EarthquakeService {
  private apiUri: string;
  constructor(private http: HttpClient) {
    this.apiUri = "https://cors-anywhere.herokuapp.com/http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary";
  }

  public getEarthquakesAllDay(): Observable<any> {
    return this.http.get(`${this.apiUri}/all_day.geojson`);
  }
  public getEarthquakesLastHour(): Observable<any> {
    return this.http.get(`${this.apiUri}/all_hour.geojson`);
  }

  public getEarthquakesallMonth(): Observable<any> {
    return this.http.get(`${this.apiUri}/all_month.geojson`);
  }
}
