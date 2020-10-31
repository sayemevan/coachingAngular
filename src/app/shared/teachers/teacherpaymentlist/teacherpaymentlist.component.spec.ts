import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpaymentlistComponent } from './teacherpaymentlist.component';

describe('TeacherpaymentlistComponent', () => {
  let component: TeacherpaymentlistComponent;
  let fixture: ComponentFixture<TeacherpaymentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherpaymentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherpaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
