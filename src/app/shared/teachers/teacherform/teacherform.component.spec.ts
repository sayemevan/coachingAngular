import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherformComponent } from './teacherform.component';

describe('TeacherformComponent', () => {
  let component: TeacherformComponent;
  let fixture: ComponentFixture<TeacherformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
