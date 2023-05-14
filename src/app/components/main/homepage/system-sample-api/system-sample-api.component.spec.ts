import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSampleApiComponent } from './system-sample-api.component';

describe('SystemSampleApiComponent', () => {
  let component: SystemSampleApiComponent;
  let fixture: ComponentFixture<SystemSampleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemSampleApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemSampleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
