import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSampleApiComponent } from './partner-sample-api.component';

describe('PartnerSampleApiComponent', () => {
  let component: PartnerSampleApiComponent;
  let fixture: ComponentFixture<PartnerSampleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerSampleApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerSampleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
