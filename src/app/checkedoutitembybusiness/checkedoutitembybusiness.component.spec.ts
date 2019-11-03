import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedoutitembybusinessComponent } from './checkedoutitembybusiness.component';

describe('CheckedoutitembybusinessComponent', () => {
  let component: CheckedoutitembybusinessComponent;
  let fixture: ComponentFixture<CheckedoutitembybusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedoutitembybusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedoutitembybusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
