import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpaymentComponent } from './studentpayment.component';

describe('StudentpaymentComponent', () => {
  let component: StudentpaymentComponent;
  let fixture: ComponentFixture<StudentpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
