import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CashItemDetailComponent } from './components/cash-item-detail/cash-item-detail.component';
import { CashItemService } from './services/cash-item.service';
import { CashItemsListComponent } from './components/cash-items-list/cash-items-list.component';
import { CashItemsRoutingModule } from './cash-items-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatListModule, MatIconModule, MatExpansionModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    CashItemsRoutingModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  declarations: [
    CashItemDetailComponent,
    CashItemsListComponent
  ],
  providers: [
    CashItemService
  ]
})
export class CashItemsModule {}
