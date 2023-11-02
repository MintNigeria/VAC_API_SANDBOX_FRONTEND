import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseParameterComponent } from './response-parameter.component';

describe('ResponseParameterComponent', () => {
  let component: ResponseParameterComponent;
  let fixture: ComponentFixture<ResponseParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
