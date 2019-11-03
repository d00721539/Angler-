import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloballocaluserdeleteComponent } from './globallocaluserdelete.component';

describe('GloballocaluserdeleteComponent', () => {
  let component: GloballocaluserdeleteComponent;
  let fixture: ComponentFixture<GloballocaluserdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloballocaluserdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloballocaluserdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
