import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpaymentlistComponent } from './studentpaymentlist.component';

describe('StudentpaymentlistComponent', () => {
  let component: StudentpaymentlistComponent;
  let fixture: ComponentFixture<StudentpaymentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpaymentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
