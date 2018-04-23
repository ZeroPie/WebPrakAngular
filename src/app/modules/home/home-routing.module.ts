import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { HomeComponent } from "./components/home.component";

const HomeRoutes: Routes = [
  { path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}