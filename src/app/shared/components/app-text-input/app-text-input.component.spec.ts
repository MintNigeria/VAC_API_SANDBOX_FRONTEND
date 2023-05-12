import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTextInputComponent } from './app-text-input.component';

describe('AppTextInputComponent', () => {
  let component: AppTextInputComponent;
  let fixture: ComponentFixture<AppTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
