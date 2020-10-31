import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpaymentreportComponent } from './studentpaymentreport.component';

describe('StudentpaymentreportComponent', () => {
  let component: StudentpaymentreportComponent;
  let fixture: ComponentFixture<StudentpaymentreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpaymentreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpaymentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
