import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAPIComponent } from './system-api.component';

describe('SystemAPIComponent', () => {
  let component: SystemAPIComponent;
  let fixture: ComponentFixture<SystemAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
