import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloballocaluserupdateComponent } from './globallocaluserupdate.component';

describe('GloballocaluserupdateComponent', () => {
  let component: GloballocaluserupdateComponent;
  let fixture: ComponentFixture<GloballocaluserupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloballocaluserupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloballocaluserupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
