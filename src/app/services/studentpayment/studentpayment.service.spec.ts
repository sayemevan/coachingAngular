import { TestBed } from '@angular/core/testing';

import { StudentpaymentService } from './studentpayment.service';

describe('StudentpaymentService', () => {
  let service: StudentpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
