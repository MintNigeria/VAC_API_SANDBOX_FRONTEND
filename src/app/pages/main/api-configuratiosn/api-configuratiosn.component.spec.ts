import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConfiguratiosnComponent } from './api-configuratiosn.component';

describe('ApiConfiguratiosnComponent', () => {
  let component: ApiConfiguratiosnComponent;
  let fixture: ComponentFixture<ApiConfiguratiosnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiConfiguratiosnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiConfiguratiosnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
