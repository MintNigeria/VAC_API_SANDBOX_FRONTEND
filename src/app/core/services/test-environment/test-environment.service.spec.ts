import { TestBed } from '@angular/core/testing';

import { TestEnvironmentService } from './test-environment.service';

describe('TestEnvironmentService', () => {
  let service: TestEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestEnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
