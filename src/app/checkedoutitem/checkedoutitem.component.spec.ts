import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedoutitemComponent } from './checkedoutitem.component';

describe('CheckedoutitemComponent', () => {
  let component: CheckedoutitemComponent;
  let fixture: ComponentFixture<CheckedoutitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedoutitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedoutitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
