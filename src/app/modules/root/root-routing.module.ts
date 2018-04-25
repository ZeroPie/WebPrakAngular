import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const rootRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rootRoutes, {enableTracing: false}) // for debugging set this to true and watch browser console
  ],
  exports: [
    RouterModule
  ]
})
export class RootRoutingModule {}
