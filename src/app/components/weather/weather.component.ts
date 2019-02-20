/// <reference types="@types/googlemaps" />
import { Component, ElementRef, NgZone, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from "@agm/core";
import { OpenWeatherService } from "src/app/services/open-weather/open-weather.service";
import { CurrentWeather } from "src/app/interfaces/current-weather";
import { FiveDayWeatherForecast } from "src/app/interfaces/five-day-weather-forecast";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent {
  public lat: number;
  public lng: number;
  public searchControl: FormControl;
  public zoom: number;
  public currentLocationName: string;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private weatherService: OpenWeatherService) {}

  ngOnInit() {
    this.initializeFields();
    this.setDefaultPosition();
    this.attachListenerToSearchBox();
  }

  private setDefaultPosition(): void {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  private initializeFields(): void {
    this.zoom = 12;
    this.lat = 55.873543;
    this.lng = -4.289058;
    this.searchControl = new FormControl();
    this.currentLocationName = "Glasgow, UK";
  }

  private updateMapWithPlace(parent: google.maps.places.Autocomplete): void {
    let place: google.maps.places.PlaceResult = parent.getPlace();
    if (place.geometry === undefined || place.geometry === null) {
      return;
    }
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.currentLocationName = place.formatted_address;
    this.fetchCurrentWeatherByLocation(this.lat, this.lng);
  }

  private fetchCurrentWeatherByLocation(lat: number, lng: number): void {
    this.weatherService.getCurrentWeatherByCoordinates(lat, lng).subscribe((data: CurrentWeather) => {
      console.log(data);
    });
  }

  private attachListenerToSearchBox(): void {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["(cities)"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          this.updateMapWithPlace(autocomplete);
        });
      });
    });
  }
}
