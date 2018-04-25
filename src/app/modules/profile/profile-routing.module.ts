import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { ProfileComponent } from "./components/profile/profile.component";

const ProfileRoutes: Routes = [
  { path: 'profile', component: ProfileComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(ProfileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule {}