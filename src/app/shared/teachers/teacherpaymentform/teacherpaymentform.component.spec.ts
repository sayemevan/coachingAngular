import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpaymentformComponent } from './teacherpaymentform.component';

describe('TeacherpaymentformComponent', () => {
  let component: TeacherpaymentformComponent;
  let fixture: ComponentFixture<TeacherpaymentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherpaymentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherpaymentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
