import { TestBed } from '@angular/core/testing';

import { TeacherpaymentService } from './teacherpayment.service';

describe('TeacherpaymentService', () => {
  let service: TeacherpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
