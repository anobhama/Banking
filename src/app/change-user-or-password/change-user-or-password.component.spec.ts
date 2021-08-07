import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserOrPasswordComponent } from './change-user-or-password.component';

describe('ChangeUserOrPasswordComponent', () => {
  let component: ChangeUserOrPasswordComponent;
  let fixture: ComponentFixture<ChangeUserOrPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeUserOrPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUserOrPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
