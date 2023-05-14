import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEnviromentComponent } from './test-enviroment.component';

describe('TestEnviromentComponent', () => {
  let component: TestEnviromentComponent;
  let fixture: ComponentFixture<TestEnviromentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEnviromentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestEnviromentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
