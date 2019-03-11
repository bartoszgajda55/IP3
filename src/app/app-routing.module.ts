import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WeatherPageComponent } from "./components/weather-page/weather-page.component";
import { AuthorsPageComponent } from './components/authors-page/authors-page.component';

const routes: Routes = [
  { path: "overview", component: PageNotFoundComponent },
  { path: "weather", component: WeatherPageComponent },
  { path: "earthquakes", component: PageNotFoundComponent },
  { path: "authors", component: AuthorsPageComponent },
  { path: "tutorial", component: PageNotFoundComponent },
  { path: "", redirectTo: "overview", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
