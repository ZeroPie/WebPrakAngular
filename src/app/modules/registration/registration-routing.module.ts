import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./components/registration.component";

const RegistrationRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(RegistrationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegistrationRoutingModule {}