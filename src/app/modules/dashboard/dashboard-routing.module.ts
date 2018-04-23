import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard.component";

const DashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}