import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTGSPaymentComponent } from './rtgs-payment.component';

describe('RTGSPaymentComponent', () => {
  let component: RTGSPaymentComponent;
  let fixture: ComponentFixture<RTGSPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTGSPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTGSPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
