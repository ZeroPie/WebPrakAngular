import { Injectable, Input } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { CashItem } from "../../../model/cashItem";
import { Observable } from "rxjs/Rx";
import { of } from "rxjs/observable/of";


@Injectable()
export class CashItemService {

    itemsUrl: string = './assets/mockitems.json';
    cashItemList: CashItem[] = [];
 
    constructor(private http: Http) {
    }

    getItemsAsJson() {
        return this.http.get(this.itemsUrl).map(res => res.json());
    }

    // Fetch all existing comments
    getObservableCashItems() : Observable<CashItem[]> {
        return this.http.get(this.itemsUrl)
                        .map(res => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
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

    getCashItemObservaleById(id: number): Observable<CashItem> {
        return of(this.cashItemList.find( CashItem => CashItem.id === id));
    }

}