import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "weather", component: PageNotFoundComponent },
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
