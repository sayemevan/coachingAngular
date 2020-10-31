import { TestBed } from '@angular/core/testing';

import { TeacherregisterService } from './teacherregister.service';

describe('TeacherregisterService', () => {
  let service: TeacherregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
