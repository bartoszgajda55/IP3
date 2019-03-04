import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {


  constructor(private http: HttpClient) {
  }

  public getEarthquakes(): Observable<any> {
    return this.http.get('https://cors-anywhere.herokuapp.com/http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
      .pipe(map(data => data));


  }

}
