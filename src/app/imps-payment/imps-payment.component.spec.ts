import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMPSPaymentComponent } from './imps-payment.component';

describe('IMPSPaymentComponent', () => {
  let component: IMPSPaymentComponent;
  let fixture: ComponentFixture<IMPSPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMPSPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMPSPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
