import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRequestParameterComponent } from './system-request-parameter.component';

describe('SystemRequestParameterComponent', () => {
  let component: SystemRequestParameterComponent;
  let fixture: ComponentFixture<SystemRequestParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemRequestParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemRequestParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
