import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpaymentformComponent } from './studentpaymentform.component';

describe('StudentpaymentformComponent', () => {
  let component: StudentpaymentformComponent;
  let fixture: ComponentFixture<StudentpaymentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpaymentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpaymentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
