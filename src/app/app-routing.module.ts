import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: "weather", component: WeatherComponent },
  { path: "earthquakes", component: PageNotFoundComponent },
  { path: "authors", component: PageNotFoundComponent },
  { path: "tutorial", component: PageNotFoundComponent },
  { path: "", component: PageNotFoundComponent, pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
