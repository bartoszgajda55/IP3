/// <reference types="@types/googlemaps" />
import { Component, ElementRef, NgZone, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from "@agm/core";

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

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

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
        this.zoom = 12;
      });
    }
  }

  private initializeFields(): void {
    this.zoom = 12;
    this.lat = 55.873543;
    this.lng = -4.289058;
    this.searchControl = new FormControl();
  }

  private updateMapWithPlace(parent: google.maps.places.Autocomplete): void {
    let place: google.maps.places.PlaceResult = parent.getPlace();
    if (place.geometry === undefined || place.geometry === null) {
      return;
    }
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.zoom = 12;
    this.fetchWeatherByLocation(place);
  }

  private fetchWeatherByLocation(
    location: google.maps.places.PlaceResult
  ): void {
    console.log(location);
  }

  private attachListenerToSearchBox(): void {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ["(cities)"]
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          this.updateMapWithPlace(autocomplete);
        });
      });
    });
  }
}
