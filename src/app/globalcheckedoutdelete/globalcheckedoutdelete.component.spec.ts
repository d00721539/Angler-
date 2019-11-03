import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcheckedoutdeleteComponent } from './globalcheckedoutdelete.component';

describe('GlobalcheckedoutdeleteComponent', () => {
  let component: GlobalcheckedoutdeleteComponent;
  let fixture: ComponentFixture<GlobalcheckedoutdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcheckedoutdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalcheckedoutdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
