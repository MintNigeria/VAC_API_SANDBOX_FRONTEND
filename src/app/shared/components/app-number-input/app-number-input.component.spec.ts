import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNumberInputComponent } from './app-number-input.component';

describe('AppNumberInputComponent', () => {
  let component: AppNumberInputComponent;
  let fixture: ComponentFixture<AppNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppNumberInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
