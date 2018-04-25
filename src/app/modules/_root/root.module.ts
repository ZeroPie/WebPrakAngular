import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CashItemsModule } from '../cash-items/cash-items.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HomeModule } from '../home/home.module';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { RootComponent } from './components/_root/root.component';
import { RootRoutingModule } from './root-routing.module';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { NavigationService } from './services/navigation.service';
import { WarenkorbModule } from '../warenkorb/warenkorb.module';

@NgModule({
  declarations: [
    RootComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    CashItemsModule,
    DashboardModule,
    HomeModule,
    LoginModule,
    RegistrationModule,
    WarenkorbModule,
    RootRoutingModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [NavigationService],
  bootstrap: [RootComponent]
})
export class RootModule {}
