import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPinResetComponent } from './tpin-reset.component';

describe('TPinResetComponent', () => {
  let component: TPinResetComponent;
  let fixture: ComponentFixture<TPinResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TPinResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPinResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
