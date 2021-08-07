import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NEFTPaymentComponent } from './neft-payment.component';

describe('NEFTPaymentComponent', () => {
  let component: NEFTPaymentComponent;
  let fixture: ComponentFixture<NEFTPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NEFTPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NEFTPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
