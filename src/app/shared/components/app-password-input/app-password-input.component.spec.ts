import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPasswordInputComponent } from './app-password-input.component';

describe('AppPasswordInputComponent', () => {
  let component: AppPasswordInputComponent;
  let fixture: ComponentFixture<AppPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppPasswordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
