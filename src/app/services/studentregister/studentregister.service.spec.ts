import { TestBed } from '@angular/core/testing';

import { StudentregisterService } from './studentregister.service';

describe('StudentregisterService', () => {
  let service: StudentregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
