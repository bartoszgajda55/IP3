import { Component, OnInit } from '@angular/core';

import {EarthquakeService} from '../../services/earthquake/earthquake.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-earthquake-page',
  templateUrl: './earthquake-page.component.html',
  styleUrls: ['./earthquake-page.component.scss']
})
export class EarthquakePageComponent implements OnInit {

  public earthquakes = []
  public coordinates = [];
  public currentEarthquakes$: Observable<any>;


  constructor(private earthquakeService: EarthquakeService) {

  }

  ngOnInit() {
    this.getEarthquakes();
    this.getEarthquakesCoordinates();
    this.currentEarthquakes$ = this.earthquakeService.getEarthquakes();
  }

  getEarthquakes() {
    this.earthquakeService.getEarthquakes().subscribe(
      (response) => {
        console.log(response);
        this.earthquakes = response.features;
      },
      (error) => console.log(error)
    );

  }

  getEarthquakesCoordinates() {
    this.earthquakeService.getEarthquakes().subscribe(
      (response) => {
        console.log(response);
        this.coordinates = response.features.geometry;
      },
      (error) => console.log(error)
    );

  }

}


