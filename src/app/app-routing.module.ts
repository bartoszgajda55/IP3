import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WeatherPageComponent } from "./components/weather-page/weather-page.component";
import {EarthquakePageComponent} from './components/earthquake-page/earthquake-page.component';
import { VisualizationPageComponent } from "./components/visualization-page/visualization-page.component";
import { OverviewPageComponent } from "./components/overview-page/overview-page.component";

const routes: Routes = [
  { path: "overview", component: OverviewPageComponent },
  { path: "weather", component: WeatherPageComponent },
  { path: "earthquakes", component: EarthquakePageComponent },
  { path: "authors", component: PageNotFoundComponent },
  { path: "tutorial", component: PageNotFoundComponent },
  { path: "visualization", component: VisualizationPageComponent },
  { path: "", redirectTo: "overview", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
