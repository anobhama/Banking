import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAccountApplicationComponent } from './online-account-application.component';

describe('OnlineAccountApplicationComponent', () => {
  let component: OnlineAccountApplicationComponent;
  let fixture: ComponentFixture<OnlineAccountApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineAccountApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineAccountApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
