import { Component } from '@angular/core';
import { CashItemService } from '../../services/cash-item.service';
import { CashItem } from '../../../../model/cashItem';

@Component({
    selector: 'cash-items-list',
    templateUrl: './cash-items-list.component.html',
    styleUrls: ['./cash-items-list.component.scss']
})
export class CashItemsListComponent {
    cashItemList: CashItem[];

    constructor( 
        private CashItemService: CashItemService
    ) {}
    
    ngOnInit() {
        this.cashItemList = this.CashItemService.getCashItemList();
    }
}
