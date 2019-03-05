import { Component, OnInit } from '@angular/core';

import {EarthquakeService} from '../../services/earthquake/earthquake.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-earthquake-page',
  templateUrl: './earthquake-page.component.html',
  styleUrls: ['./earthquake-page.component.scss']
})
export class EarthquakePageComponent implements OnInit {

  selected = 'option1';
  public earthquakes = []
  public currentEarthquakes$: Observable<any>;
  public LastHourEarthquakes$: Observable<any>;
  public AllMonthEarthquakes$: Observable<any>;


  constructor(private earthquakeService: EarthquakeService) {

  }

  ngOnInit() {

    this.currentEarthquakes$ = this.earthquakeService.getEarthquakesAllDay();
    this.LastHourEarthquakes$ = this.earthquakeService.getEarthquakesLastHour();
    this.AllMonthEarthquakes$ = this.earthquakeService.getEarthquakesallMonth();
  }
}


