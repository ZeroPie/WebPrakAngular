import { Component, OnInit, Input } from '@angular/core';
import { CashItem } from '../../../../model/cashItem';
import { ActivatedRoute } from '@angular/router';
import { CashItemService } from '../../services/cash-item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'cash-item-detail',
  templateUrl: './cash-item-detail.component.html',
  styleUrls: ['./cash-item-detail.component.scss']
})
export class CashItemDetailComponent implements OnInit {
  @Input() cashItem: CashItem; 

  constructor(
    private route: ActivatedRoute,
    private cashItemService: CashItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.cashItem = this.cashItemService.getCashItemById(Number(id));
  }
 
  getCashItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cashItemService.getCashItemById(id)
  }

  closeDetailView(): void {
    this.location.back();
  }

}
