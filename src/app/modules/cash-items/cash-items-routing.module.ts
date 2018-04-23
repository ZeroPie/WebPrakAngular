import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CashItemDetailComponent } from "./components/cash-item-detail/cash-item-detail.component";
import { CashItemsListComponent } from "./components/cash-items-list/cash-items-list.component";

const CashItemRoutes: Routes = [
  { path: 'items', component: CashItemsListComponent },
  { path: 'items/:id', component: CashItemDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(CashItemRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CashItemsRoutingModule {}