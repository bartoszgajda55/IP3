import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgmCoreModule } from "@agm/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./modules/material/material.module";

import { WeatherIconService } from "./services/weather-icon/weather-icon.service";
import { OpenWeatherService } from "./services/open-weather/open-weather.service";

import { AppComponent } from "./app.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WeatherPageComponent } from "./components/weather-page/weather-page.component";
import { WeatherPresenterComponent } from "./components/weather-presenter/weather-presenter.component";
import { ForecastPresenterComponent } from "./components/forecast-presenter/forecast-presenter.component";
import { NoCommaPipe } from "./pipes/no-comma.pipe";
import { FooterComponent } from "./components/footer/footer.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { JsTechniquesComponent } from './components/js-techniques/js-techniques.component';
import { AuthorsPageComponent } from './components/authors-page/authors-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PageNotFoundComponent,
    WeatherPageComponent,
    WeatherPresenterComponent,
    ForecastPresenterComponent,
    NoCommaPipe,
    FooterComponent,
    JsTechniquesComponent,
    AuthorsPageComponent
  ],
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
    ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production })
  ],
  providers: [OpenWeatherService, WeatherIconService],
  bootstrap: [AppComponent]
})
export class AppModule {}
