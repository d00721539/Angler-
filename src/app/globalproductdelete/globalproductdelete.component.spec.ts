import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalproductdeleteComponent } from './globalproductdelete.component';

describe('GlobalproductdeleteComponent', () => {
  let component: GlobalproductdeleteComponent;
  let fixture: ComponentFixture<GlobalproductdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalproductdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalproductdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
