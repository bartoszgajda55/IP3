import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./modules/material/material.module";
import { AgmCoreModule } from "@agm/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WeatherPageComponent } from "./components/weather-page/weather-page.component";

import { OpenWeatherService } from "./services/open-weather/open-weather.service";
import { HttpClientModule } from "@angular/common/http";
import { WeatherIconService } from "./services/weather-icon/weather-icon.service";

@NgModule({
  declarations: [AppComponent, SideNavComponent, PageNotFoundComponent, WeatherPageComponent],
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
    HttpClientModule
  ],
  providers: [OpenWeatherService, WeatherIconService],
  bootstrap: [AppComponent]
})
export class AppModule {}
