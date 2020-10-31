import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablefundComponent } from './availablefund.component';

describe('AvailablefundComponent', () => {
  let component: AvailablefundComponent;
  let fixture: ComponentFixture<AvailablefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
