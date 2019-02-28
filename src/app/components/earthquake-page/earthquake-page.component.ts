import { Component, OnInit } from '@angular/core';

import {EarthquakeService} from '../../services/earthquake/earthquake.service';



@Component({
  selector: 'app-earthquake-page',
  templateUrl: './earthquake-page.component.html',
  styleUrls: ['./earthquake-page.component.scss']
})
export class EarthquakePageComponent implements OnInit {

  earthquakes: string[];

  constructor(private earthquakeService: EarthquakeService) {

  }

  ngOnInit() {
    this.getEarthqaukes();

  }

  getEarthqaukes(){
    this.earthquakeService.getEarthquakes().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}


