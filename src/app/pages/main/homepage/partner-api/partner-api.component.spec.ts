import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAPIComponent } from './partner-api.component';

describe('PartnerAPIComponent', () => {
  let component: PartnerAPIComponent;
  let fixture: ComponentFixture<PartnerAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
