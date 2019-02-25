import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthorsPageComponent } from './components/authors-page/authors-page.component';

const routes: Routes = [
  { path: "weather", component: PageNotFoundComponent },
  { path: "earthquakes", component: PageNotFoundComponent },
  { path: "authors", component: AuthorsPageComponent },
  { path: "tutorial", component: PageNotFoundComponent },
  { path: "", component: PageNotFoundComponent, pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
