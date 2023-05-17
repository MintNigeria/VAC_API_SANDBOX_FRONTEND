import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSuccessModalComponent } from './confirm-success-modal.component';

describe('ConfirmSuccessModalComponent', () => {
  let component: ConfirmSuccessModalComponent;
  let fixture: ComponentFixture<ConfirmSuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConfirmSuccessModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
