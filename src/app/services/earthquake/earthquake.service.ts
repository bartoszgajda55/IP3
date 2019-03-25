import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FeatureCollection } from "geojson";

@Injectable({
  providedIn: "root"
})
export class EarthquakeService {
  private apiUri: string;
  constructor(private http: HttpClient) {
    this.apiUri = "https://cors-anywhere.herokuapp.com/http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary";
  }

  public getEarthquakesAllDay(): Observable<FeatureCollection> {
    return this.http.get<FeatureCollection>(`${this.apiUri}/all_day.geojson`);
  }
  public getEarthquakesLastHour(): Observable<FeatureCollection> {
    return this.http.get<FeatureCollection>(`${this.apiUri}/all_hour.geojson`);
  }

  public getEarthquakesAllMonth(): Observable<FeatureCollection> {
    return this.http.get<FeatureCollection>(`${this.apiUri}/all_month.geojson`);
  }
}
