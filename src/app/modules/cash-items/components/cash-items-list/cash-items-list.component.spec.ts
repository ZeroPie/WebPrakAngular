import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashItemsListComponent } from './cash-items-list.component';

describe('ItemListComponent', () => {
  let component: CashItemsListComponent;
  let fixture: ComponentFixture<CashItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
