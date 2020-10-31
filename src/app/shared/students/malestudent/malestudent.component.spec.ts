import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalestudentComponent } from './malestudent.component';

describe('MalestudentComponent', () => {
  let component: MalestudentComponent;
  let fixture: ComponentFixture<MalestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
