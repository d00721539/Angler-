import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcheckedoutlistComponent } from './globalcheckedoutlist.component';

describe('GlobalcheckedoutlistComponent', () => {
  let component: GlobalcheckedoutlistComponent;
  let fixture: ComponentFixture<GlobalcheckedoutlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcheckedoutlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalcheckedoutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
