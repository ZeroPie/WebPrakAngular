import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { RootRoutingModule } from '../root/root-routing.module';
import { MatFormFieldModule, MatSelect, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
