import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpaymentComponent } from './teacherpayment.component';

describe('TeacherpaymentComponent', () => {
  let component: TeacherpaymentComponent;
  let fixture: ComponentFixture<TeacherpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
