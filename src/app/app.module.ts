import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { MaterialModule } from "./modules/material/material.module";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EarthquakeComponent } from './components/earthquake/earthquake.component';

@NgModule({
  declarations: [AppComponent, SideNavComponent, PageNotFoundComponent, EarthquakeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
