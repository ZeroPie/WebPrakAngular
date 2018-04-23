import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashItemDetailComponent } from './cash-item-detail.component';

describe('ItemComponent', () => {
  let component: CashItemDetailComponent;
  let fixture: ComponentFixture<CashItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
