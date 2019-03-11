/// <reference types="@types/googlemaps" />
import { Component, ElementRef, NgZone, ViewChild } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { MapsAPILoader } from "@agm/core";
import { OpenWeatherService } from "src/app/services/open-weather/open-weather.service";
import { CurrentWeather } from "src/app/interfaces/current-weather";
import { FiveDayWeatherForecast } from "src/app/interfaces/five-day-weather-forecast";
import { Observable, Subject, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-weather",
  templateUrl: "./weather-page.component.html",
  styleUrls: ["./weather-page.component.scss"]
})
export class WeatherPageComponent {
  public lat: number;
  public lng: number;
  public searchControl: FormControl;
  public zoom: number;
  public currentLocationName: string;
  public currentWeather$: Observable<CurrentWeather>;
  public forecastWeather$: Observable<FiveDayWeatherForecast>;
  public currentWeatherLoadingError$: Subject<boolean> = new Subject<boolean>();
  public fiveDayForecastLoadingError$: Subject<boolean> = new Subject<boolean>();
  private SNACK_DURATION: number = 3000;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private weatherService: OpenWeatherService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initializeFields();
    this.getUserLocation();
    this.attachListenerToSearchBox();
  }

  public searchByLatAndLng(form: NgForm): void {
    this.lat = form.value.lat;
    this.lng = form.value.lng;
    this.setAddressByLatAndLng(this.lat, this.lng);
    this.updateCurrentWeatherAndForecast(this.lat, this.lng);
  }

  private initializeFields(): void {
    this.zoom = 12;
    this.lat = 55.873543;
    this.lng = -4.289058;
    this.searchControl = new FormControl();
    this.currentLocationName = "Glasgow, UK";
    this.updateCurrentWeatherAndForecast(this.lat, this.lng);
  }

  private getUserLocation(): void {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  private setAddressByLatAndLng(lat: number, lng: number): void {
    this.mapsAPILoader.load().then(() => {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: { lat: lat, lng: lng } }, (result, status) => {
        if ((status as unknown) == "OK" && result[0]) {
          this.currentLocationName = result[0].formatted_address;
        } else {
          this.currentLocationName = "Not Available";
        }
      });
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

  private updateMapWithPlace(parent: google.maps.places.Autocomplete): void {
    let place: google.maps.places.PlaceResult = parent.getPlace();
    if (place.geometry === undefined || place.geometry === null) {
      return;
    }
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.currentLocationName = place.formatted_address;
    this.updateCurrentWeatherAndForecast(this.lat, this.lng);
  }

  private updateCurrentWeatherAndForecast(lat: number, lng: number): void {
    this.currentWeather$ = this.fetchCurrentWeatherByLocation(lat, lng);
    this.forecastWeather$ = this.fetchFiveDayForecastByLocation(lat, lng);
  }

  private fetchCurrentWeatherByLocation(lat: number, lng: number): Observable<CurrentWeather> {
    return this.weatherService.getCurrentWeatherByCoordinates(lat, lng).pipe(
      catchError(error => {
        this.showSnackWithError("Error loading Current Weather");
        this.currentWeatherLoadingError$.next(true);
        return of() as Observable<CurrentWeather>;
      })
    );
  }

  private fetchFiveDayForecastByLocation(lat: number, lng: number): Observable<FiveDayWeatherForecast> {
    return this.weatherService.getFiveDayWeatherForecastByCoordinates(lat, lng).pipe(
      catchError(error => {
        this.showSnackWithError("Error loading Five Day Forecast");
        this.fiveDayForecastLoadingError$.next(true);
        return of() as Observable<FiveDayWeatherForecast>;
      })
    );
  }

  private showSnackWithError(message: string): void {
    this.snackBar.open(message, "", {
      duration: this.SNACK_DURATION,
      verticalPosition: "top"
    });
  }
}
