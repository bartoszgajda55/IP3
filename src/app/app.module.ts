import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { MaterialModule } from "./modules/material/material.module";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { AgmCoreModule } from "@agm/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PageNotFoundComponent,
    WeatherComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
