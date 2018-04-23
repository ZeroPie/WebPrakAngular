import { Injectable, Input } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import { CashItem } from "../../../model/cashItem";


@Injectable()
export class CashItemService {
    @Input() itemsUrl: string = './assets/mockitems.json';
    cashItemList: CashItem[] = [];
 
    constructor(private http: Http) {}

    getItemsAsJson() {
        return this.http.get(this.itemsUrl).map(res => res.json());
    }

    getCashItemList(): CashItem[] {
        this.getItemsAsJson().subscribe(data => {
            data.map( item => {
                this.cashItemList.push(new CashItem(item.id, item.title, item.value));
            });
        });
        return this.cashItemList;
    }

    getCashItemById(id: number): CashItem {
        return this.cashItemList.find( CashItem => CashItem.id === id)
    }

}