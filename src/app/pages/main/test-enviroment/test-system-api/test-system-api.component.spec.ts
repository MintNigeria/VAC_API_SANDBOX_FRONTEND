import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSystemAPIComponent } from './test-system-api.component';

describe('TestSystemAPIComponent', () => {
  let component: TestSystemAPIComponent;
  let fixture: ComponentFixture<TestSystemAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSystemAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSystemAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
