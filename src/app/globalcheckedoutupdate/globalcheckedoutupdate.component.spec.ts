import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcheckedoutupdateComponent } from './globalcheckedoutupdate.component';

describe('GlobalcheckedoutupdateComponent', () => {
  let component: GlobalcheckedoutupdateComponent;
  let fixture: ComponentFixture<GlobalcheckedoutupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcheckedoutupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalcheckedoutupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
