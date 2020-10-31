import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpaymentreportComponent } from './teacherpaymentreport.component';

describe('TeacherpaymentreportComponent', () => {
  let component: TeacherpaymentreportComponent;
  let fixture: ComponentFixture<TeacherpaymentreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherpaymentreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherpaymentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
