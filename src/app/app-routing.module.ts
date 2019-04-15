import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WeatherPageComponent } from "./components/weather-page/weather-page.component";
import { VisualizationPageComponent } from "./components/visualization-page/visualization-page.component";
import { GeoJSONTutorialComponent } from "./components/geo-json-tutorial/geo-json-tutorial.component";
import { AuthorsPageComponent } from "./components/authors-page/authors-page.component";
import { EarthquakePageComponent } from "./components/earthquake-page/earthquake-page.component";
import { OverviewPageComponent } from "./components/overview-page/overview-page.component";
import { WeatherTutorialComponent } from './components/weather-tutorial/weather-tutorial.component';
import { JsTechniquesComponent } from "./components/js-techniques/js-techniques.component";

const routes: Routes = [
  { path: "overview", component: OverviewPageComponent },
  { path: "weather", component: WeatherPageComponent },
  { path: "authors", component: AuthorsPageComponent },
  { path: "earthquakes", component: EarthquakePageComponent },
  { path: "tutorial", component: WeatherTutorialComponent  },
  { path: "geojson", component: GeoJSONTutorialComponent },
  { path: "javascript", component: JsTechniquesComponent },
  { path: "visualization", component: VisualizationPageComponent },
  { path: "", redirectTo: "overview", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
