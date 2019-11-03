import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloballocaluserlistComponent } from './globallocaluserlist.component';

describe('GloballocaluserlistComponent', () => {
  let component: GloballocaluserlistComponent;
  let fixture: ComponentFixture<GloballocaluserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloballocaluserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloballocaluserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
