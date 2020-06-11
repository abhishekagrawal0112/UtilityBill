import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkBillComponent } from './milk-bill.component';

describe('MilkBillComponent', () => {
  let component: MilkBillComponent;
  let fixture: ComponentFixture<MilkBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
