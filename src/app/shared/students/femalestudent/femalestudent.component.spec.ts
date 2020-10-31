import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemalestudentComponent } from './femalestudent.component';

describe('FemalestudentComponent', () => {
  let component: FemalestudentComponent;
  let fixture: ComponentFixture<FemalestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemalestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemalestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
