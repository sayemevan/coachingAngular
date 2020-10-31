import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentchildComponent } from './studentchild.component';

describe('StudentchildComponent', () => {
  let component: StudentchildComponent;
  let fixture: ComponentFixture<StudentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
