import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WeatherPageComponent } from "./components/weather-page/weather-page.component";
import { VisualizationPageComponent } from "./components/visualization-page/visualization-page.component";
import { GeoJSONTutorialComponent } from "./components/geo-json-tutorial/geo-json-tutorial.component";

const routes: Routes = [
  { path: "overview", component: PageNotFoundComponent },
  { path: "weather", component: WeatherPageComponent },
  { path: "earthquakes", component: PageNotFoundComponent },
  { path: "authors", component: PageNotFoundComponent },
  { path: "tutorial", component: GeoJSONTutorialComponent },
  { path: "visualization", component: VisualizationPageComponent },
  { path: "", redirectTo: "overview", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
