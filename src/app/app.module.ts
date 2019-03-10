import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./modules/material/material.module";

import { WeatherIconService } from "./services/weather-icon/weather-icon.service";
import { OpenWeatherService } from "./services/open-weather/open-weather.service";

import { AppComponent } from "./app.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WeatherPageComponent } from "./components/weather-page/weather-page.component";
import { WeatherPresenterComponent } from "./components/weather-presenter/weather-presenter.component";
import { ForecastPresenterComponent } from './components/forecast-presenter/forecast-presenter.component';
import { NoCommaPipe } from './pipes/no-comma.pipe';
import { EarthquakePageComponent } from './components/earthquake-page/earthquake-page.component';
import {EarthquakeService} from './services/earthquake/earthquake.service';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import { FooterComponent } from './components/footer/footer.component';
import { NoQuotemarkPipe } from './pipes/no-quotemark/no-quotemark.pipe';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, SideNavComponent, PageNotFoundComponent, WeatherPageComponent, WeatherPresenterComponent, ForecastPresenterComponent, NoCommaPipe, EarthquakePageComponent, FooterComponent, NoQuotemarkPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey,
      libraries: ["places"]
    }),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule
  ],
  providers: [OpenWeatherService, WeatherIconService, EarthquakeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
