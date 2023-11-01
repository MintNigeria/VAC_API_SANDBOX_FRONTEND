import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPartnerAPIComponent } from './test-partner-api.component';

describe('TestPartnerAPIComponent', () => {
  let component: TestPartnerAPIComponent;
  let fixture: ComponentFixture<TestPartnerAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPartnerAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPartnerAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
