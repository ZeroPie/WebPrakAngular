import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './components/registration.component';
import { RootRoutingModule } from '../root/root-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
